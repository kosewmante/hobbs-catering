import React, { createContext, useContext, useState, useEffect } from 'react';
import { Student } from '../types/hobbs';
import { HobbsService } from '../lib/hobbsService';
import { useAuth } from './AuthContext';

interface StudentContextType {
  students: Student[];
  activeStudent: Student | null;
  loading: boolean;
  setActiveStudent: (student: Student | null) => void;
  addStudent: (studentData: Omit<Student, 'id' | 'parent_id'>) => Promise<Student>;
  updateStudent: (student: Student) => Promise<Student>;
  deleteStudent: (studentId: string) => Promise<void>;
  reloadStudents: () => Promise<void>;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

const DEMO_STUDENTS: Student[] = [
  {
    id: 'std-alex-001',
    parent_id: 'usr-demo-parent-101',
    name: 'Alex Jenkins',
    avatar_url: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&w=200&q=80',
    school_year: 'Year 3 - Elm Class',
    is_halal: false,
    allergens: ['Cereals (Wheat/Gluten)', 'Milk (Lactose)'],
    dietary_notes: 'Lactose intolerance and mild gluten sensitivity.'
  },
  {
    id: 'std-fatima-002',
    parent_id: 'usr-demo-parent-101',
    name: 'Fatima Jenkins',
    avatar_url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    school_year: 'Year 5 - Oak Class',
    is_halal: true,
    allergens: ['Peanuts'],
    dietary_notes: 'Requires strict Halal diet.'
  }
];

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [students, setStudents] = useState<Student[]>([]);
  const [activeStudent, setActiveStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);

  const reloadStudents = async () => {
    if (!user) {
      setStudents([]);
      setActiveStudent(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    let list = await HobbsService.getStudents(user.id);
    if (list.length === 0 && user.id === 'usr-demo-parent-101') {
      // Seed default demo students
      for (const std of DEMO_STUDENTS) {
        await HobbsService.saveStudent(std);
      }
      list = DEMO_STUDENTS;
    }
    setStudents(list);
    if (list.length > 0 && !activeStudent) {
      setActiveStudent(list[0]);
    }
    setLoading(false);
  };

  useEffect(() => {
    reloadStudents();
  }, [user]);

  const addStudent = async (data: Omit<Student, 'id' | 'parent_id'>) => {
    const parentId = user ? user.id : 'usr-demo-parent-101';
    const newStudent = await HobbsService.saveStudent({
      ...data,
      parent_id: parentId
    });
    await reloadStudents();
    setActiveStudent(newStudent);
    return newStudent;
  };

  const updateStudent = async (student: Student) => {
    const updated = await HobbsService.saveStudent(student);
    await reloadStudents();
    if (activeStudent && activeStudent.id === updated.id) {
      setActiveStudent(updated);
    }
    return updated;
  };

  const deleteStudent = async (studentId: string) => {
    await HobbsService.deleteStudent(studentId);
    await reloadStudents();
    if (activeStudent && activeStudent.id === studentId) {
      const remaining = students.filter(s => s.id !== studentId);
      setActiveStudent(remaining.length > 0 ? remaining[0] : null);
    }
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        activeStudent,
        loading,
        setActiveStudent,
        addStudent,
        updateStudent,
        deleteStudent,
        reloadStudents,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => {
  const ctx = useContext(StudentContext);
  if (!ctx) throw new Error('useStudents must be used within StudentProvider');
  return ctx;
};
