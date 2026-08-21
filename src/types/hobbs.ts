export type AllergenType =
  | 'Celery'
  | 'Cereals (Wheat/Gluten)'
  | 'Crustaceans'
  | 'Eggs'
  | 'Fish'
  | 'Lupin'
  | 'Milk (Lactose)'
  | 'Molluscs'
  | 'Mustard'
  | 'Peanuts'
  | 'Sesame'
  | 'Soya'
  | 'Sulphites'
  | 'Pork'
  | 'No Allergens'
  | 'Other';

export interface Profile {
  id: string;
  full_name: string;
  phone: string;
  address: string;
  created_at?: string;
  updated_at?: string;
}

export interface Student {
  id: string;
  parent_id: string;
  name: string;
  school_year: string;
  is_halal: boolean;
  allergens: string[];
  dietary_notes?: string;
  created_at?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Main Meal' | 'Vegetarian' | 'Jacket Potato' | 'Sandwich' | 'Dietary Alternative';
  contains_pork: boolean;
  is_halal_suitable: boolean;
  allergens: string[];
  may_contain: string[];
  price: number;
  image_url?: string;
}

export interface DailyMenu {
  id: string;
  date: string; // YYYY-MM-DD
  menu_item_id: string;
  menu_item: MenuItem;
}

export interface CartItem {
  id: string;
  student_id: string;
  student_name: string;
  date: string; // YYYY-MM-DD
  menu_item: MenuItem;
  price: number;
  has_conflict: boolean;
  conflict_reasons: string[];
  warning_acknowledged: boolean;
}

export interface OrderItem {
  id: string;
  order_id: string;
  student_id: string;
  student_name: string;
  menu_item: MenuItem;
  date: string;
  price: number;
}

export interface Order {
  id: string;
  parent_id: string;
  reference_code: string;
  total_amount: number;
  status: 'pending_transfer' | 'confirmed' | 'cancelled';
  created_at: string;
  items: OrderItem[];
}
