import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://supabase.gravonlabs.com';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...';
export const SCHEMA_NAME = import.meta.env.VITE_SUPABASE_SCHEMA || 'hobbs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: SCHEMA_NAME,
  },
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export const isSupabaseConfigured = () => {
  return Boolean(supabaseUrl && supabaseAnonKey && supabaseAnonKey.length > 20);
};
