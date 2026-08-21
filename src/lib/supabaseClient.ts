import { createClient } from '@supabase/supabase-js';

const DEFAULT_URL = 'https://supabase.gravonlabs.com';
const DEFAULT_ANON_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc3NjAyMDEwMCwiZXhwIjo0OTMxNjkzNzAwLCJyb2xlIjoiYW5vbiJ9.siA20U0hUVobhsjpiqdFZYCHdyisdT-PyZZx-dggvwI';
const DEFAULT_SCHEMA = 'hobbs';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || DEFAULT_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_ANON_KEY;
const supabaseSchema = import.meta.env.VITE_SUPABASE_SCHEMA || DEFAULT_SCHEMA;

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
