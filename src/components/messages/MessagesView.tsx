import React from 'react';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';
import { Bell, CheckCheck, Clock } from 'lucide-react';

export const MessagesView: React.FC = () => {
  const { messages, markMessageRead } = useApp();
  const { activeStudent } = useAuth();

  return (
    <div className="space-y-4 animate-fade-in max-w-3xl mx-auto">
      {/* Yellow School Title Banner (Matching 03.jpeg) */}
      <div className="btn-yellow-badge">
        {activeStudent?.school_name || 'The Woodlands School'}
      </div>

      <div className="flex items-center justify-between px-2 pt-2">
        <h2 className="text-2xl font-bold text-[#332418]">Messages</h2>
        <span className="text-xs text-[#8A7C6E]">
          {messages.filter(m => m.is_new).length} unread notifications
        </span>
      </div>

      {/* Messages List */}
      <div className="space-y-3.5">
        {messages.map(msg => (
          <div
            key={msg.id}
            onClick={() => markMessageRead(msg.id)}
            className={`white-card cursor-pointer transition-all hover:border-[#18B896] relative ${
              msg.is_new ? 'border-l-4 border-l-[#F8BE00] bg-white shadow-sm' : 'bg-[#FAF7F2]/80 opacity-90'
            }`}
          >
            {/* Header with Timestamp and 'New!' badge */}
            <div className="flex items-center justify-between text-xs text-[#72685D] mb-2">
              <div className="flex items-center gap-1.5 font-medium">
                <Clock size={13} className="text-[#8A7C6E]" />
                <span>{msg.date_formatted}</span>
              </div>

              {msg.is_new && (
                <span className="font-bold text-[#18B896] text-xs">
                  New!
                </span>
              )}
            </div>

            {/* Message Body */}
            <p className="text-sm font-medium text-[#2C241D] leading-relaxed">
              {msg.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
