-- Hobbs Schema Migration & Data Seed
CREATE SCHEMA IF NOT EXISTS hobbs;

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles Table
CREATE TABLE IF NOT EXISTS hobbs.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  phone TEXT,
  address TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Students Table
CREATE TABLE IF NOT EXISTS hobbs.students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id UUID NOT NULL REFERENCES hobbs.profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  school_year TEXT NOT NULL,
  is_halal BOOLEAN DEFAULT false,
  allergens TEXT[] DEFAULT '{}',
  dietary_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Menu Items Table
CREATE TABLE IF NOT EXISTS hobbs.menu_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  contains_pork BOOLEAN DEFAULT false,
  is_halal_suitable BOOLEAN DEFAULT true,
  allergens TEXT[] DEFAULT '{}',
  may_contain TEXT[] DEFAULT '{}',
  price NUMERIC(10, 2) NOT NULL DEFAULT 2.50,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Daily Menus Table
CREATE TABLE IF NOT EXISTS hobbs.daily_menus (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE NOT NULL,
  menu_item_id UUID NOT NULL REFERENCES hobbs.menu_items(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(date, menu_item_id)
);

-- Orders Table
CREATE TABLE IF NOT EXISTS hobbs.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id UUID NOT NULL REFERENCES hobbs.profiles(id) ON DELETE CASCADE,
  reference_code TEXT NOT NULL UNIQUE,
  total_amount NUMERIC(10, 2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending_transfer',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Order Items Table
CREATE TABLE IF NOT EXISTS hobbs.order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES hobbs.orders(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES hobbs.students(id) ON DELETE CASCADE,
  menu_item_id UUID NOT NULL REFERENCES hobbs.menu_items(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  allergen_warning_acknowledged BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE hobbs.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE hobbs.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE hobbs.menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE hobbs.daily_menus ENABLE ROW LEVEL SECURITY;
ALTER TABLE hobbs.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE hobbs.order_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies
DROP POLICY IF EXISTS "Public Read Menu Items" ON hobbs.menu_items;
CREATE POLICY "Public Read Menu Items" ON hobbs.menu_items FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Daily Menus" ON hobbs.daily_menus;
CREATE POLICY "Public Read Daily Menus" ON hobbs.daily_menus FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users manage own profile" ON hobbs.profiles;
CREATE POLICY "Users manage own profile" ON hobbs.profiles FOR ALL USING (auth.uid() = id);

DROP POLICY IF EXISTS "Parents manage own students" ON hobbs.students;
CREATE POLICY "Parents manage own students" ON hobbs.students FOR ALL USING (auth.uid() = parent_id);

DROP POLICY IF EXISTS "Parents manage own orders" ON hobbs.orders;
CREATE POLICY "Parents manage own orders" ON hobbs.orders FOR ALL USING (auth.uid() = parent_id);

DROP POLICY IF EXISTS "Parents view own order items" ON hobbs.order_items;
CREATE POLICY "Parents view own order items" ON hobbs.order_items FOR ALL USING (
  EXISTS (SELECT 1 FROM hobbs.orders WHERE orders.id = order_items.order_id AND orders.parent_id = auth.uid())
);


-- SEED MENU ITEMS
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Ham & Cheese Tortilla Wrap', 'Main Meal', true, false, ARRAY['Wheat','Milk','Pork'], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Three Bean Chilli non Carne', 'Vegetarian', false, true, '{}'::text[], ARRAY['Wheat','Soya'], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Jacket Potato with Various Fillings', 'Jacket Potato', false, true, '{}'::text[], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Ham Sandwich', 'Sandwich', true, false, ARRAY['Wheat','Pork','Soya'], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Cheese Sandwich', 'Sandwich', false, true, ARRAY['Wheat','Dairy','Soya'], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Tuna Mayo Sandwich', 'Sandwich', false, true, ARRAY['Wheat','Egg','Fish','Soya'], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Gluten Free Meal', 'Dietary Alternative', false, true, '{}'::text[], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Dairy & Egg Free Meal', 'Dietary Alternative', false, true, '{}'::text[], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Vegan Meal', 'Dietary Alternative', false, true, '{}'::text[], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Breaded Fish', 'Main Meal', false, true, ARRAY['Wheat','Fish'], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Cheese & Tomato Pizza', 'Main Meal', false, true, ARRAY['Wheat','Milk'], ARRAY['Soya'], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Tuna Melt', 'Main Meal', false, true, ARRAY['Wheat','Milk','Fish'], ARRAY['Sesame'], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Mac & Cheese', 'Vegetarian', false, true, ARRAY['Wheat','Milk'], ARRAY['Soya'], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Chicken Curry (Tikka)', 'Main Meal', false, true, ARRAY['Celery'], ARRAY['Soya'], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Veggie & Rice Enchiladas', 'Vegetarian', false, true, ARRAY['Wheat','Milk'], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Sliced Gammon', 'Main Meal', true, false, ARRAY['Pork'], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Quorn Roast', 'Vegetarian', false, true, ARRAY['Milk','Egg'], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Beef Bolognese Pasta', 'Main Meal', false, true, ARRAY['Wheat'], ARRAY['Soya'], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Cheese & Bean Puffs', 'Vegetarian', false, true, ARRAY['Wheat','Milk'], ARRAY['Soya','Mustard','Lupin'], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Pork Meatballs in Tomato Sauce', 'Main Meal', true, false, ARRAY['Wheat','Soya','Pork'], ARRAY['Milk','Egg','Mustard','Celery','Sulphites'], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Veggie Quesadilla Stack', 'Vegetarian', false, true, ARRAY['Wheat','Milk'], ARRAY['Soya'], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Beef & Onion Yorkies', 'Main Meal', false, true, ARRAY['Wheat','Milk','Eggs'], ARRAY['Soya'], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Baked Veggie Samosa with Curry Sauce', 'Vegetarian', false, true, ARRAY['Wheat','Mustard'], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Sliced Pork & Apple Sauce', 'Main Meal', true, false, ARRAY['Pork'], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Chicken & Vegetable Pie', 'Main Meal', false, true, ARRAY['Wheat','Milk'], ARRAY['Soya','Mustard','Lupin'], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Veggie Lasagne', 'Vegetarian', false, true, ARRAY['Wheat','Milk'], ARRAY['Soya'], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Chicken Pasta Bake', 'Main Meal', false, true, ARRAY['Wheat','Milk'], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Cheese & Onion Lattice', 'Vegetarian', false, true, ARRAY['Wheat','Milk','Soya','Mustard'], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Beef & Onion Pie', 'Main Meal', false, true, ARRAY['Wheat'], ARRAY['Soya','Mustard','Lupin'], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Crustless Quiche', 'Vegetarian', false, true, ARRAY['Milk','Eggs'], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Sliced Roast Chicken & Stuffing', 'Main Meal', false, true, ARRAY['Wheat'], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Ham & Cheese Tortilla', 'Main Meal', true, false, ARRAY['Wheat','Milk','Pork'], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;
INSERT INTO hobbs.menu_items (name, category, contains_pork, is_halal_suitable, allergens, may_contain, price)
VALUES ('Veggie Enchiladas', 'Vegetarian', false, true, ARRAY['Wheat','Milk'], '{}'::text[], 2.50)
ON CONFLICT (name) DO UPDATE SET
  category = EXCLUDED.category,
  contains_pork = EXCLUDED.contains_pork,
  is_halal_suitable = EXCLUDED.is_halal_suitable,
  allergens = EXCLUDED.allergens,
  may_contain = EXCLUDED.may_contain;

-- SEED DAILY MENUS
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-03', id FROM hobbs.menu_items WHERE name = 'Ham & Cheese Tortilla Wrap'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-03', id FROM hobbs.menu_items WHERE name = 'Three Bean Chilli non Carne'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-03', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-03', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-03', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-03', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-03', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-03', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-03', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-04', id FROM hobbs.menu_items WHERE name = 'Breaded Fish'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-04', id FROM hobbs.menu_items WHERE name = 'Cheese & Tomato Pizza'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-04', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-04', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-04', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-04', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-04', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-04', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-04', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-07', id FROM hobbs.menu_items WHERE name = 'Tuna Melt'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-07', id FROM hobbs.menu_items WHERE name = 'Mac & Cheese'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-07', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-07', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-07', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-07', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-07', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-07', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-07', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-08', id FROM hobbs.menu_items WHERE name = 'Chicken Curry (Tikka)'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-08', id FROM hobbs.menu_items WHERE name = 'Veggie & Rice Enchiladas'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-08', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-08', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-08', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-08', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-08', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-08', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-08', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-09', id FROM hobbs.menu_items WHERE name = 'Sliced Gammon'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-09', id FROM hobbs.menu_items WHERE name = 'Quorn Roast'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-09', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-09', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-09', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-09', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-09', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-09', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-09', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-10', id FROM hobbs.menu_items WHERE name = 'Beef Bolognese Pasta'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-10', id FROM hobbs.menu_items WHERE name = 'Cheese & Bean Puffs'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-10', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-10', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-10', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-10', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-10', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-10', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-10', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-11', id FROM hobbs.menu_items WHERE name = 'Breaded Fish'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-11', id FROM hobbs.menu_items WHERE name = 'Cheese & Tomato Pizza'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-11', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-11', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-11', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-11', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-11', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-11', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-11', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-14', id FROM hobbs.menu_items WHERE name = 'Pork Meatballs in Tomato Sauce'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-14', id FROM hobbs.menu_items WHERE name = 'Veggie Quesadilla Stack'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-14', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-14', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-14', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-14', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-14', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-14', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-14', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-15', id FROM hobbs.menu_items WHERE name = 'Beef & Onion Yorkies'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-15', id FROM hobbs.menu_items WHERE name = 'Baked Veggie Samosa with Curry Sauce'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-15', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-15', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-15', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-15', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-15', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-15', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-15', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-16', id FROM hobbs.menu_items WHERE name = 'Sliced Pork & Apple Sauce'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-16', id FROM hobbs.menu_items WHERE name = 'Quorn Roast'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-16', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-16', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-16', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-16', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-16', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-16', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-16', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-17', id FROM hobbs.menu_items WHERE name = 'Chicken & Vegetable Pie'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-17', id FROM hobbs.menu_items WHERE name = 'Veggie Lasagne'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-17', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-17', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-17', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-17', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-17', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-17', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-17', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-18', id FROM hobbs.menu_items WHERE name = 'Breaded Fish'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-18', id FROM hobbs.menu_items WHERE name = 'Cheese & Tomato Pizza'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-18', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-18', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-18', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-18', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-18', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-18', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-18', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-21', id FROM hobbs.menu_items WHERE name = 'Chicken Pasta Bake'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-21', id FROM hobbs.menu_items WHERE name = 'Cheese & Onion Lattice'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-21', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-21', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-21', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-21', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-21', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-21', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-21', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-22', id FROM hobbs.menu_items WHERE name = 'Beef & Onion Pie'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-22', id FROM hobbs.menu_items WHERE name = 'Crustless Quiche'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-22', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-22', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-22', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-22', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-22', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-22', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-22', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-23', id FROM hobbs.menu_items WHERE name = 'Sliced Roast Chicken & Stuffing'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-23', id FROM hobbs.menu_items WHERE name = 'Quorn Roast'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-23', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-23', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-23', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-23', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-23', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-23', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-23', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-24', id FROM hobbs.menu_items WHERE name = 'Ham & Cheese Tortilla'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-24', id FROM hobbs.menu_items WHERE name = 'Three Bean Chilli non Carne'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-24', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-24', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-24', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-24', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-24', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-24', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-24', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-25', id FROM hobbs.menu_items WHERE name = 'Breaded Fish'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-25', id FROM hobbs.menu_items WHERE name = 'Cheese & Tomato Pizza'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-25', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-25', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-25', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-25', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-25', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-25', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-25', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-28', id FROM hobbs.menu_items WHERE name = 'Tuna Melt'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-28', id FROM hobbs.menu_items WHERE name = 'Mac & Cheese'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-28', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-28', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-28', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-28', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-28', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-28', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-28', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-29', id FROM hobbs.menu_items WHERE name = 'Chicken Curry (Tikka)'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-29', id FROM hobbs.menu_items WHERE name = 'Veggie Enchiladas'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-29', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-29', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-29', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-29', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-29', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-29', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-29', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-30', id FROM hobbs.menu_items WHERE name = 'Sliced Gammon'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-30', id FROM hobbs.menu_items WHERE name = 'Quorn Roast'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-30', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-30', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-30', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-30', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-30', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-30', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-09-30', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-02', id FROM hobbs.menu_items WHERE name = 'Breaded Fish'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-02', id FROM hobbs.menu_items WHERE name = 'Cheese & Tomato Pizza'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-02', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-02', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-02', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-02', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-02', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-02', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-02', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-05', id FROM hobbs.menu_items WHERE name = 'Pork Meatballs in Tomato Sauce'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-05', id FROM hobbs.menu_items WHERE name = 'Veggie Quesadilla Stack'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-05', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-05', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-05', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-05', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-05', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-05', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-05', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-06', id FROM hobbs.menu_items WHERE name = 'Beef & Onion Yorkies'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-06', id FROM hobbs.menu_items WHERE name = 'Baked Veggie Samosa with Curry Sauce'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-06', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-06', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-06', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-06', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-06', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-06', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-06', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-07', id FROM hobbs.menu_items WHERE name = 'Sliced Pork & Apple Sauce'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-07', id FROM hobbs.menu_items WHERE name = 'Quorn Roast'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-07', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-07', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-07', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-07', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-07', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-07', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-07', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-08', id FROM hobbs.menu_items WHERE name = 'Chicken & Vegetable Pie'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-08', id FROM hobbs.menu_items WHERE name = 'Veggie Lasagne'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-08', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-08', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-08', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-08', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-08', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-08', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-08', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-09', id FROM hobbs.menu_items WHERE name = 'Breaded Fish'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-09', id FROM hobbs.menu_items WHERE name = 'Cheese & Tomato Pizza'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-09', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-09', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-09', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-09', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-09', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-09', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-09', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-12', id FROM hobbs.menu_items WHERE name = 'Chicken Pasta Bake'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-12', id FROM hobbs.menu_items WHERE name = 'Cheese & Onion Lattice'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-12', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-12', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-12', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-12', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-12', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-12', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-12', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-13', id FROM hobbs.menu_items WHERE name = 'Beef & Onion Pie'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-13', id FROM hobbs.menu_items WHERE name = 'Crustless Quiche'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-13', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-13', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-13', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-13', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-13', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-13', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-13', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-14', id FROM hobbs.menu_items WHERE name = 'Sliced Roast Chicken & Stuffing'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-14', id FROM hobbs.menu_items WHERE name = 'Quorn Roast'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-14', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-14', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-14', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-14', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-14', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-14', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-14', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-15', id FROM hobbs.menu_items WHERE name = 'Ham & Cheese Tortilla'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-15', id FROM hobbs.menu_items WHERE name = 'Three Bean Chilli non Carne'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-15', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-15', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-15', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-15', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-15', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-15', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-15', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-16', id FROM hobbs.menu_items WHERE name = 'Breaded Fish'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-16', id FROM hobbs.menu_items WHERE name = 'Cheese & Tomato Pizza'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-16', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-16', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-16', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-16', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-16', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-16', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-16', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-19', id FROM hobbs.menu_items WHERE name = 'Tuna Melt'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-19', id FROM hobbs.menu_items WHERE name = 'Mac & Cheese'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-19', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-19', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-19', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-19', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-19', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-19', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-19', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-20', id FROM hobbs.menu_items WHERE name = 'Chicken Curry (Tikka)'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-20', id FROM hobbs.menu_items WHERE name = 'Veggie Enchiladas'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-20', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-20', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-20', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-20', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-20', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-20', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-20', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-21', id FROM hobbs.menu_items WHERE name = 'Sliced Gammon'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-21', id FROM hobbs.menu_items WHERE name = 'Quorn Roast'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-21', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-21', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-21', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-21', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-21', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-21', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-21', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-22', id FROM hobbs.menu_items WHERE name = 'Beef Bolognese Pasta'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-22', id FROM hobbs.menu_items WHERE name = 'Cheese & Bean Puffs'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-22', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-22', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-22', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-22', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-22', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-22', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-22', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-23', id FROM hobbs.menu_items WHERE name = 'Breaded Fish'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-23', id FROM hobbs.menu_items WHERE name = 'Cheese & Tomato Pizza'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-23', id FROM hobbs.menu_items WHERE name = 'Jacket Potato with Various Fillings'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-23', id FROM hobbs.menu_items WHERE name = 'Ham Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-23', id FROM hobbs.menu_items WHERE name = 'Cheese Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-23', id FROM hobbs.menu_items WHERE name = 'Tuna Mayo Sandwich'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-23', id FROM hobbs.menu_items WHERE name = 'Gluten Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-23', id FROM hobbs.menu_items WHERE name = 'Dairy & Egg Free Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;
INSERT INTO hobbs.daily_menus (date, menu_item_id)
SELECT '2026-10-23', id FROM hobbs.menu_items WHERE name = 'Vegan Meal'
ON CONFLICT (date, menu_item_id) DO NOTHING;