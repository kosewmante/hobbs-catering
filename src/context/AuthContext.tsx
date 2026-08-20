import React, { createContext, useContext, useState } from 'react';
import { Student } from '../types';
import { mockStudents } from '../lib/mockData';

interface AuthContextType {
  isAuthenticated: boolean;
  user: {
    email: string;
    mobile: string;
    fullName: string;
  } | null;
  students: Student[];
  activeStudent: Student | null;
  login: (email: string, mobile: string, password: string, childName?: string, className?: string) => Promise<boolean>;
  register: (email: string, mobile: string, password: string, childName: string, className: string, parentName?: string) => Promise<boolean>;
  logout: () => void;
  setActiveStudent: (student: Student) => void;
  updateStudentCredit: (studentId: string, dinnerCreditDelta: number, clubCreditDelta?: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // starts on landing/login page
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [activeStudent, setActiveStudentState] = useState<Student | null>(mockStudents[0] || null);
  const [user, setUser] = useState<{ email: string; mobile: string; fullName: string } | null>({
    email: 'parent@example.com',
    mobile: '07123456789',
    fullName: 'Sarah Bennett',
  });

  const login = async (email: string, mobile: string, password: string, childName?: string, className?: string): Promise<boolean> => {
    // Simulated authentication
    setIsAuthenticated(true);
    setUser({
      email,
      mobile,
      fullName: 'Sarah Bennett',
    });

    if (childName && childName.trim()) {
      const match = students.find(s => s.first_name.toLowerCase() === childName.trim().toLowerCase());
      if (match) {
        if (className && className.trim()) {
          setActiveStudentState({ ...match, class_name: className.trim() });
        } else {
          setActiveStudentState(match);
        }
      } else {
        const newStu: Student = {
          id: `stu-${Date.now()}`,
          parent_id: 'par-001',
          school_id: 'sch-001',
          school_name: 'The Woodlands School',
          first_name: childName.trim(),
          last_name: 'Bennett',
          year_group: 'Year 4',
          class_name: className?.trim() || '4B Beech Class',
          allergies: ['Peanuts'],
          requires_halal: false,
          menu_profile: 'main',
          dinner_credit: 0.00,
          club_credit: 0.00,
        };
        setStudents(prev => [newStu, ...prev]);
        setActiveStudentState(newStu);
      }
    }
    return true;
  };

  const register = async (email: string, mobile: string, password: string, childName: string, className: string, parentName?: string): Promise<boolean> => {
    setIsAuthenticated(true);
    setUser({
      email,
      mobile,
      fullName: parentName?.trim() || 'Parent User',
    });

    const newStu: Student = {
      id: `stu-${Date.now()}`,
      parent_id: 'par-001',
      school_id: 'sch-001',
      school_name: 'The Woodlands School',
      first_name: childName.trim() || 'Oliver',
      last_name: 'Bennett',
      year_group: 'Year 4',
      class_name: className.trim() || '4B Beech Class',
      allergies: ['No Allergens'],
      requires_halal: false,
      menu_profile: 'main',
      dinner_credit: 0.00,
      club_credit: 0.00,
    };
    setStudents(prev => [newStu, ...prev]);
    setActiveStudentState(newStu);
    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const setActiveStudent = (student: Student) => {
    setActiveStudentState(student);
  };

  const updateStudentCredit = (studentId: string, dinnerCreditDelta: number, clubCreditDelta: number = 0) => {
    setStudents(prev =>
      prev.map(s => {
        if (s.id === studentId) {
          const updated = {
            ...s,
            dinner_credit: Math.max(0, parseFloat((s.dinner_credit + dinnerCreditDelta).toFixed(2))),
            club_credit: Math.max(0, parseFloat((s.club_credit + clubCreditDelta).toFixed(2))),
          };
          if (activeStudent?.id === studentId) {
            setActiveStudentState(updated);
          }
          return updated;
        }
        return s;
      })
    );
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        students,
        activeStudent,
        login,
        register,
        logout,
        setActiveStudent,
        updateStudentCredit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
