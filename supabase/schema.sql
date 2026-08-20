-- ==============================================================================
-- Hobbs School Catering & Parent Portal Database Schema
-- Dedicated Schema: hobbs
-- Compatible with Supabase & Coolify Shared Public Profile Auth
-- ==============================================================================

-- Create schema if not exists
CREATE SCHEMA IF NOT EXISTS hobbs;

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Schools Table
CREATE TABLE IF NOT EXISTS hobbs.schools (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    code TEXT UNIQUE NOT NULL,
    address TEXT,
    phone TEXT,
    email TEXT,
    logo_url TEXT,
    lunch_cutoff_day TEXT DEFAULT 'Thursday',
    lunch_cutoff_time TEXT DEFAULT '23:59',
    meal_price NUMERIC(10, 2) DEFAULT 2.65,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Profiles Table (Catering user metadata & links to auth.users / public.profiles)
CREATE TABLE IF NOT EXISTS hobbs.profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE, -- optionally links to auth.users if auth is used
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    mobile TEXT,
    role TEXT DEFAULT 'parent', -- 'parent', 'school_admin', 'catering_staff'
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Students Table (Children registered to parents)
CREATE TABLE IF NOT EXISTS hobbs.students (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    parent_id UUID REFERENCES hobbs.profiles(id) ON DELETE CASCADE,
    school_id UUID REFERENCES hobbs.schools(id) ON DELETE CASCADE,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    year_group TEXT,
    class_name TEXT,
    dietary_requirements TEXT,
    allergies TEXT[] DEFAULT ARRAY[]::TEXT[],
    dinner_credit NUMERIC(10, 2) DEFAULT 0.00,
    club_credit NUMERIC(10, 2) DEFAULT 0.00,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Menu Items Table (Weekly Catering Meals)
CREATE TABLE IF NOT EXISTS hobbs.menu_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    school_id UUID REFERENCES hobbs.schools(id) ON DELETE CASCADE,
    week_commencing DATE NOT NULL,
    day_of_week TEXT NOT NULL, -- 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
    title TEXT NOT NULL,
    category TEXT NOT NULL, -- 'Main', 'Vegetarian', 'Halal', 'Jacket Potato', 'Deli / Packed Lunch'
    description TEXT,
    price NUMERIC(10, 2) DEFAULT 2.65,
    allergens TEXT[] DEFAULT ARRAY[]::TEXT[],
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Meal Bookings Table (Parent Meal Orders)
CREATE TABLE IF NOT EXISTS hobbs.meal_bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID REFERENCES hobbs.students(id) ON DELETE CASCADE,
    menu_item_id UUID REFERENCES hobbs.menu_items(id) ON DELETE CASCADE,
    booking_date DATE NOT NULL,
    status TEXT DEFAULT 'booked', -- 'booked', 'taken', 'cancelled', 'absent'
    paid BOOLEAN DEFAULT FALSE,
    paid_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(student_id, booking_date)
);

-- 6. Messages / Announcements Table
CREATE TABLE IF NOT EXISTS hobbs.messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    school_id UUID REFERENCES hobbs.schools(id) ON DELETE CASCADE,
    student_id UUID REFERENCES hobbs.students(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    type TEXT DEFAULT 'reminder', -- 'reminder', 'notice', 'announcement', 'closure'
    urgency TEXT DEFAULT 'normal', -- 'low', 'normal', 'high'
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Term Dates & Calendar Notices
CREATE TABLE IF NOT EXISTS hobbs.term_calendar (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    school_id UUID REFERENCES hobbs.schools(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    event_date DATE NOT NULL,
    end_date DATE,
    category TEXT DEFAULT 'term', -- 'term', 'inset_day', 'holiday', 'event'
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. School Shop Catalog
CREATE TABLE IF NOT EXISTS hobbs.shop_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    school_id UUID REFERENCES hobbs.schools(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    category TEXT DEFAULT 'General', -- 'Uniform', 'Accessories', 'Meal Vouchers'
    price NUMERIC(10, 2) NOT NULL,
    image_url TEXT,
    in_stock BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Clubs & Activities Table
CREATE TABLE IF NOT EXISTS hobbs.club_bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID REFERENCES hobbs.students(id) ON DELETE CASCADE,
    school_id UUID REFERENCES hobbs.schools(id) ON DELETE CASCADE,
    club_name TEXT NOT NULL, -- 'Breakfast Club', 'After School Club', 'Sports Club'
    session_date DATE NOT NULL,
    time_slot TEXT,
    price NUMERIC(10, 2) DEFAULT 4.50,
    status TEXT DEFAULT 'confirmed',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. Parental Consent Requests
CREATE TABLE IF NOT EXISTS hobbs.consent_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID REFERENCES hobbs.students(id) ON DELETE CASCADE,
    school_id UUID REFERENCES hobbs.schools(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    due_date DATE,
    status TEXT DEFAULT 'pending', -- 'pending', 'granted', 'declined'
    granted_at TIMESTAMPTZ,
    granted_by TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. Transactions & Payments Table
CREATE TABLE IF NOT EXISTS hobbs.transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    parent_id UUID REFERENCES hobbs.profiles(id) ON DELETE CASCADE,
    student_id UUID REFERENCES hobbs.students(id) ON DELETE SET NULL,
    type TEXT NOT NULL, -- 'meal_payment', 'credit_topup', 'club_fee', 'shop_purchase'
    amount NUMERIC(10, 2) NOT NULL,
    status TEXT DEFAULT 'completed', -- 'pending', 'completed', 'refunded', 'failed'
    payment_method TEXT DEFAULT 'Debit/Credit Card', -- 'Debit/Credit Card', 'Apple Pay', 'Google Pay'
    reference TEXT UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS) policies
ALTER TABLE hobbs.schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE hobbs.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE hobbs.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE hobbs.menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE hobbs.meal_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE hobbs.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE hobbs.term_calendar ENABLE ROW LEVEL SECURITY;
ALTER TABLE hobbs.shop_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE hobbs.club_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE hobbs.consent_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE hobbs.transactions ENABLE ROW LEVEL SECURITY;

-- Anonymous / Authenticated Read & Write Access for Demo & Portal
CREATE POLICY "Allow public read access on schools" ON hobbs.schools FOR SELECT USING (true);
CREATE POLICY "Allow public all on profiles" ON hobbs.profiles FOR ALL USING (true);
CREATE POLICY "Allow public all on students" ON hobbs.students FOR ALL USING (true);
CREATE POLICY "Allow public read on menu_items" ON hobbs.menu_items FOR SELECT USING (true);
CREATE POLICY "Allow public all on meal_bookings" ON hobbs.meal_bookings FOR ALL USING (true);
CREATE POLICY "Allow public all on messages" ON hobbs.messages FOR ALL USING (true);
CREATE POLICY "Allow public read on term_calendar" ON hobbs.term_calendar FOR SELECT USING (true);
CREATE POLICY "Allow public read on shop_items" ON hobbs.shop_items FOR SELECT USING (true);
CREATE POLICY "Allow public all on club_bookings" ON hobbs.club_bookings FOR ALL USING (true);
CREATE POLICY "Allow public all on consent_requests" ON hobbs.consent_requests FOR ALL USING (true);
CREATE POLICY "Allow public all on transactions" ON hobbs.transactions FOR ALL USING (true);
