import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Profile } from '../types/hobbs';
import { HobbsService } from '../lib/hobbsService';

interface AuthContextType {
  user: any | null;
  profile: Profile | null;
  loading: boolean;
  isOnboarded: boolean;
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  signUp: (email: string, pass: string, name: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  updateProfile: (updated: Partial<Profile>) => Promise<Profile | null>;
  completeOnboarding: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEMO_USER = {
  id: 'usr-demo-parent-101',
  email: 'parent@hobbs-schools.co.uk',
};

const DEMO_PROFILE: Profile = {
  id: 'usr-demo-parent-101',
  full_name: 'Sarah Jenkins',
  phone: '07700 900123',
  address: '14 St. Marys Lane, London'
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(DEMO_USER);
  const [profile, setProfile] = useState<Profile | null>(DEMO_PROFILE);
  const [loading, setLoading] = useState(true);
  const [isOnboarded, setIsOnboarded] = useState<boolean>(true);

  useEffect(() => {
    async function initAuth() {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUser(session.user);
          const prof = await HobbsService.getProfile(session.user.id);
          if (prof) setProfile(prof);
        } else {
          // Initialize demo user if no Supabase session
          setUser(DEMO_USER);
          setProfile(DEMO_PROFILE);
        }
      } catch (err) {
        console.warn('Auth init fallback:', err);
      } finally {
        setLoading(false);
      }
    }

    initAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        setUser(session.user);
        const prof = await HobbsService.getProfile(session.user.id);
        if (prof) setProfile(prof);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, pass: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password: pass });
      if (error) {
        // Fallback for demo login if Supabase auth is not set up
        if (email && pass) {
          const u = { id: `usr-${Date.now()}`, email };
          setUser(u);
          const p: Profile = { id: u.id, full_name: email.split('@')[0], phone: '', address: '' };
          setProfile(p);
          await HobbsService.saveProfile(p);
          return { success: true };
        }
        return { success: false, error: error.message };
      }

      if (data.user) {
        setUser(data.user);
        const prof = await HobbsService.getProfile(data.user.id);
        if (prof) setProfile(prof);
      }
      return { success: true };
    } catch (e: any) {
      return { success: false, error: e.message || 'Login failed' };
    }
  };

  const signUp = async (email: string, pass: string, name: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({ email, password: pass });
      if (error) {
        // Fallback for demo sign up
        const u = { id: `usr-${Date.now()}`, email };
        setUser(u);
        const p: Profile = { id: u.id, full_name: name || email.split('@')[0], phone: '', address: '' };
        setProfile(p);
        await HobbsService.saveProfile(p);
        setIsOnboarded(false);
        return { success: true };
      }

      if (data.user) {
        setUser(data.user);
        const newProf: Profile = {
          id: data.user.id,
          full_name: name,
          phone: '',
          address: ''
        };
        const saved = await HobbsService.saveProfile(newProf);
        setProfile(saved);
        setIsOnboarded(false);
      }
      return { success: true };
    } catch (e: any) {
      return { success: false, error: e.message || 'Sign up failed' };
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (e) {
      // ignore
    }
    setUser(null);
    setProfile(null);
  };

  const updateProfile = async (updated: Partial<Profile>) => {
    if (!profile) return null;
    const full: Profile = { ...profile, ...updated };
    const saved = await HobbsService.saveProfile(full);
    setProfile(saved);
    return saved;
  };

  const completeOnboarding = () => {
    setIsOnboarded(true);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        isOnboarded,
        login,
        signUp,
        logout,
        updateProfile,
        completeOnboarding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
