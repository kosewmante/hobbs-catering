import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://supabase.gravonlabs.com';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabaseSchema = import.meta.env.VITE_SUPABASE_SCHEMA || 'hobbs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: supabaseSchema,
  },
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export const HOBBS_SCHEMA = supabaseSchema;
