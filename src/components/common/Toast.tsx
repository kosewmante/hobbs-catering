import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, Info, AlertCircle } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  const icon =
    toastMessage.type === 'success' ? (
      <CheckCircle2 size={18} className="text-[#18B896]" />
    ) : toastMessage.type === 'error' ? (
      <AlertCircle size={18} className="text-[#F46060]" />
    ) : (
      <Info size={18} className="text-[#5C94BE]" />
    );

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in max-w-sm">
      <div className="bg-[#2C241D] text-white px-4 py-3 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3 text-xs md:text-sm font-medium">
        {icon}
        <span>{toastMessage.text}</span>
      </div>
    </div>
  );
};
