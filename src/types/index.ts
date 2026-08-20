export interface School {
  id: string;
  name: string;
  code: string;
  address?: string;
  phone?: string;
  email?: string;
  logo_url?: string;
  lunch_cutoff_day: string;
  lunch_cutoff_time: string;
  meal_price: number;
  weekly_price: number;
}

export const HOBBS_SCHOOL_CLASSES = [
  'Oak',
  'Redwood',
  'Hazel',
  'Birch',
  'Willow',
  'Elm',
  'Rowan',
  'Maple',
  'Aspen',
  'Sherwood',
  'Elveden',
  'Salcey',
  'Rushmere',
  'Emberton',
  'Campbell',
  'Oxley',
  'Stanton',
  'Bridging Year',
] as const;

export type HobbsSchoolClass = (typeof HOBBS_SCHOOL_CLASSES)[number];

export interface Student {
  id: string;
  parent_id: string;
  school_id: string;
  school_name: string;
  first_name: string;
  last_name: string;
  year_group: string;
  class_name: string;
  dietary_requirements?: string;
  allergies: string[];
  requires_halal: boolean;
  menu_profile: MenuProfile;
  dinner_credit: number;
  club_credit: number;
  avatar_url?: string;
}

// Menu profiles matching the 4 Hobbs seasonal menu sheets
export type MenuProfile = 'main' | 'gluten_free' | 'dairy_egg_free' | 'vegan';

// The 14 official FSA allergens as shown in allegies.png
export const FSA_ALLERGENS = [
  'Celery',
  'Cereals (Wheat/Gluten)',
  'Crustaceans',
  'Eggs',
  'Fish',
  'Lupin',
  'Milk (Lactose)',
  'Molluscs',
  'Mustard',
  'Peanuts',
  'Sesame',
  'Soya',
  'Sulphites',
] as const;

export type FSAAllergen = (typeof FSA_ALLERGENS)[number];

export type MealCategory = 'Option 1' | 'Option 2' | 'Jacket Potato' | 'Ham Sandwich' | 'Cheese Sandwich' | 'Tuna Mayo Sandwich' | 'Gluten Free Meal' | 'Dairy & Egg Free Meal' | 'Vegan Meal';

// Dietary badge types for display on meal cards
export type DietaryBadge = 'V' | 'Ve' | 'GF' | 'DF' | 'H';

export interface DailyMenu {
  date: string;          // YYYY-MM-DD
  dayOfWeek: string;     // Monday, Tuesday, etc.
  dateFormatted: string;  // e.g. "Thu 03 Sep"
  weekCommencing: string; // YYYY-MM-DD of the Monday
  weekNumber: number;     // 1-8
  options: DailyMenuOption[];
}

export interface DailyMenuOption {
  id: string;
  category: MealCategory;
  title: string;
  allergens: string;      // raw allergen string from the menu
  isHalal: boolean;       // marked with H badge
  isVegetarian: boolean;  // marked with V badge
  isVegan: boolean;       // marked with Ve badge
  price: number;          // £2.70
}

export type MealCategory_Legacy = 'Main' | 'Vegetarian' | 'Halal' | 'Jacket Potato' | 'Deli / Packed Lunch' | 'Dessert';

export interface MenuItem {
  id: string;
  school_id: string;
  week_commencing: string;
  day_of_week: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  title: string;
  category: MealCategory;
  description?: string;
  price: number;
  allergens: string[];
  calories?: number;
  is_active: boolean;
}

export interface MealBooking {
  id: string;
  student_id: string;
  menu_item_id: string;
  booking_date: string;
  day_of_week: string;
  meal_title: string;
  category: MealCategory;
  price: number;
  status: 'booked' | 'taken' | 'cancelled' | 'absent';
  paid: boolean;
  created_at: string;
}

export interface MessageItem {
  id: string;
  school_id: string;
  student_id?: string;
  title: string;
  body: string;
  type: 'reminder' | 'notice' | 'announcement' | 'closure';
  urgency: 'low' | 'normal' | 'high';
  is_new: boolean;
  date_formatted: string;
  created_at: string;
}

export interface TermEvent {
  id: string;
  school_id: string;
  title: string;
  event_date: string;
  end_date?: string;
  category: 'term' | 'inset_day' | 'holiday' | 'event';
  description?: string;
}

export interface ShopItem {
  id: string;
  school_id: string;
  name: string;
  description: string;
  category: 'Uniform' | 'Accessories' | 'Meal Vouchers' | 'General';
  price: number;
  image_url?: string;
  in_stock: boolean;
}

export interface ClubBooking {
  id: string;
  student_id: string;
  school_id: string;
  club_name: string;
  session_date: string;
  time_slot: string;
  price: number;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface ConsentRequest {
  id: string;
  student_id: string;
  school_id: string;
  title: string;
  description: string;
  due_date: string;
  status: 'pending' | 'granted' | 'declined';
  granted_at?: string;
  granted_by?: string;
}

export interface Transaction {
  id: string;
  student_id?: string;
  student_name?: string;
  type: 'meal_payment' | 'credit_topup' | 'club_fee' | 'shop_purchase';
  title: string;
  amount: number;
  status: 'completed' | 'pending' | 'refunded' | 'failed';
  payment_method: string;
  reference: string;
  created_at: string;
  date_formatted: string;
}

export interface CartItem {
  id: string;
  student_id: string;
  student_name: string;
  title: string;
  subtitle: string;
  category: 'dinner' | 'club' | 'shop' | 'topup';
  date?: string;
  day?: string;
  price: number;
  quantity: number;
  metadata?: Record<string, any>;
}

export type ActiveTab =
  | 'home'
  | 'messages'
  | 'notices'
  | 'term-calendar'
  | 'payments'
  | 'dinners'
  | 'clubs'
  | 'shop'
  | 'consent'
  | 'history'
  | 'security'
  | 'help';

// Pricing constants
export const MEAL_PRICE_PER_DAY = 2.70;
export const MEAL_PRICE_PER_WEEK = 13.50;
