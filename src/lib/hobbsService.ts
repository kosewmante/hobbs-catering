import { supabase } from './supabaseClient';
import { Profile, Student, MenuItem, DailyMenu, CartItem, Order } from '../types/hobbs';
import { STATIC_MENU_ITEMS, STATIC_DAILY_MENUS } from './staticMenuData';

const LOCAL_STORAGE_KEY_STUDENTS = 'hobbs_students_v1';
const LOCAL_STORAGE_KEY_ORDERS = 'hobbs_orders_v1';
const LOCAL_STORAGE_KEY_PROFILE = 'hobbs_profile_v1';

// Helper to generate 6-char BACS Reference Code e.g. HOBBS-7X92A1
export function generateBacsReference(): string {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `HOBBS-${code}`;
}

export const HobbsService = {
  // --- PROFILES ---
  async getProfile(userId: string): Promise<Profile | null> {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      if (!error && data) return data as Profile;
    } catch (e) {
      console.warn('Supabase profile fetch error, using local fallback:', e);
    }
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY_PROFILE);
    if (stored) return JSON.parse(stored);
    return null;
  },

  async saveProfile(profile: Profile): Promise<Profile> {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .upsert(profile)
        .select()
        .single();
      if (!error && data) {
        localStorage.setItem(LOCAL_STORAGE_KEY_PROFILE, JSON.stringify(data));
        return data as Profile;
      }
    } catch (e) {
      console.warn('Supabase profile save error, saving locally:', e);
    }
    localStorage.setItem(LOCAL_STORAGE_KEY_PROFILE, JSON.stringify(profile));
    return profile;
  },

  // --- STUDENTS ---
  async getStudents(parentId: string): Promise<Student[]> {
    try {
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .eq('parent_id', parentId);
      if (!error && data && data.length > 0) return data as Student[];
    } catch (e) {
      console.warn('Supabase students fetch error, using local fallback:', e);
    }
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY_STUDENTS);
    if (stored) {
      const list: Student[] = JSON.parse(stored);
      return list.filter(s => s.parent_id === parentId || !s.parent_id);
    }
    return [];
  },

  async saveStudent(student: Omit<Student, 'id'> & { id?: string }): Promise<Student> {
    const studentToSave: Student = {
      id: student.id || `std-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      parent_id: student.parent_id,
      name: student.name,
      school_year: student.school_year,
      is_halal: student.is_halal,
      allergens: student.allergens || [],
      dietary_notes: student.dietary_notes || ''
    };

    try {
      const { data, error } = await supabase
        .from('students')
        .upsert(studentToSave)
        .select()
        .single();
      if (!error && data) {
        studentToSave.id = data.id;
      }
    } catch (e) {
      console.warn('Supabase student save error, saving locally:', e);
    }

    const stored = localStorage.getItem(LOCAL_STORAGE_KEY_STUDENTS);
    let list: Student[] = stored ? JSON.parse(stored) : [];
    const existingIndex = list.findIndex(s => s.id === studentToSave.id);
    if (existingIndex >= 0) {
      list[existingIndex] = studentToSave;
    } else {
      list.push(studentToSave);
    }
    localStorage.setItem(LOCAL_STORAGE_KEY_STUDENTS, JSON.stringify(list));
    return studentToSave;
  },

  async deleteStudent(studentId: string): Promise<void> {
    try {
      await supabase.from('students').delete().eq('id', studentId);
    } catch (e) {
      console.warn('Supabase delete student error:', e);
    }
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY_STUDENTS);
    if (stored) {
      let list: Student[] = JSON.parse(stored);
      list = list.filter(s => s.id !== studentId);
      localStorage.setItem(LOCAL_STORAGE_KEY_STUDENTS, JSON.stringify(list));
    }
  },

  // --- MENU ---
  async getDailyMenusForDate(dateStr: string): Promise<DailyMenu[]> {
    try {
      const { data, error } = await supabase
        .from('daily_menus')
        .select('*, menu_item:hobbs.menu_items(*)')
        .eq('date', dateStr);

      if (!error && data && (data as any[]).length > 0) {
        return data as unknown as DailyMenu[];
      }
    } catch (e) {
      // Fallback to static menu data
    }
    const matches = STATIC_DAILY_MENUS.filter(m => m.date === dateStr);
    return matches as DailyMenu[];
  },

  getAllStaticDailyMenus(): DailyMenu[] {
    return STATIC_DAILY_MENUS as DailyMenu[];
  },

  getAllStaticMenuItems(): MenuItem[] {
    return STATIC_MENU_ITEMS;
  },

  // --- ORDERS ---
  async createOrder(parentId: string, cartItems: CartItem[]): Promise<Order> {
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
    const referenceCode = generateBacsReference();

    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      parent_id: parentId,
      reference_code: referenceCode,
      total_amount: Number(totalAmount.toFixed(2)),
      status: 'pending_transfer',
      created_at: new Date().toISOString(),
      items: cartItems.map((item, idx) => ({
        id: `ord-item-${Date.now()}-${idx}`,
        order_id: `ord-${Date.now()}`,
        student_id: item.student_id,
        student_name: item.student_name,
        menu_item: item.menu_item,
        date: item.date,
        price: item.price
      }))
    };

    try {
      const { data: orderData, error: orderErr } = await supabase
        .from('orders')
        .insert({
          parent_id: parentId,
          reference_code: referenceCode,
          total_amount: totalAmount,
          status: 'pending_transfer'
        })
        .select()
        .single();

      if (!orderErr && orderData) {
        newOrder.id = orderData.id;
        const orderItemsPayload = cartItems.map(item => ({
          order_id: orderData.id,
          student_id: item.student_id,
          menu_item_id: item.menu_item.id,
          date: item.date,
          price: item.price,
          allergen_warning_acknowledged: item.warning_acknowledged
        }));
        await supabase.from('order_items').insert(orderItemsPayload);
      }
    } catch (e) {
      console.warn('Supabase create order error, saving locally:', e);
    }

    const stored = localStorage.getItem(LOCAL_STORAGE_KEY_ORDERS);
    const orders: Order[] = stored ? JSON.parse(stored) : [];
    orders.unshift(newOrder);
    localStorage.setItem(LOCAL_STORAGE_KEY_ORDERS, JSON.stringify(orders));
    return newOrder;
  },

  async getOrders(parentId: string): Promise<Order[]> {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*, order_items(*, menu_item:hobbs.menu_items(*), student:hobbs.students(name))')
        .eq('parent_id', parentId)
        .order('created_at', { ascending: false });

      if (!error && data && (data as any[]).length > 0) {
        return (data as any[]).map(o => ({
          id: o.id,
          parent_id: o.parent_id,
          reference_code: o.reference_code,
          total_amount: Number(o.total_amount),
          status: o.status,
          created_at: o.created_at,
          items: (o.order_items || []).map((item: any) => ({
            id: item.id,
            order_id: item.order_id,
            student_id: item.student_id,
            student_name: item.student?.name || 'Student',
            menu_item: item.menu_item || STATIC_MENU_ITEMS[0],
            date: item.date,
            price: Number(item.price)
          }))
        }));
      }
    } catch (e) {
      console.warn('Supabase orders fetch error, using local fallback:', e);
    }

    const stored = localStorage.getItem(LOCAL_STORAGE_KEY_ORDERS);
    if (stored) {
      const list: Order[] = JSON.parse(stored);
      return list.filter(o => o.parent_id === parentId || !o.parent_id);
    }
    return [];
  }
};
