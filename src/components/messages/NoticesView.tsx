import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { mockTermEvents } from '../../lib/mockData';
import { Calendar, AlertCircle, Sparkles, MapPin } from 'lucide-react';

interface NoticesViewProps {
  mode?: 'noticeboard' | 'calendar';
}

export const NoticesView: React.FC<NoticesViewProps> = ({ mode = 'calendar' }) => {
  const { activeStudent } = useAuth();

  return (
    <div className="space-y-4 animate-fade-in max-w-3xl mx-auto">
      {/* Yellow School Title Banner (Matching 04.jpeg) */}
      <div className="btn-yellow-badge">
        {activeStudent?.school_name || 'The Woodlands School'}
      </div>

      <div className="px-2 pt-2">
        <h2 className="text-2xl font-bold text-[#332418]">
          {mode === 'calendar' ? 'Term Calendar' : 'School Noticeboard'}
        </h2>
        <p className="text-xs text-[#8A7C6E] mt-0.5">
          Key academic dates, Hobbs theme dinner days, and school closures
        </p>
      </div>

      {mockTermEvents.length === 0 ? (
        <div className="white-card text-center py-8">
          <p className="text-sm text-[#72685D]">
            {activeStudent?.school_name || 'The Woodlands School'} has no terms to display.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {mockTermEvents.map(event => (
            <div
              key={event.id}
              className="white-card border-l-4 border-l-[#18B896] hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-full mb-1.5 ${
                    event.category === 'inset_day'
                      ? 'bg-[#FFEBEB] text-[#F46060]'
                      : event.category === 'event'
                      ? 'bg-[#F2F8D5] text-[#7F970E]'
                      : 'bg-[#EBF2F7] text-[#2C3E50]'
                  }`}>
                    {event.category === 'inset_day'
                      ? 'INSET Day / Closure'
                      : event.category === 'event'
                      ? 'Special Catering Event'
                      : 'Term Schedule'}
                  </span>
                  <h4 className="font-bold text-base text-[#2C241D]">{event.title}</h4>
                  {event.description && (
                    <p className="text-xs text-[#72685D] mt-1">{event.description}</p>
                  )}
                </div>

                <div className="text-right shrink-0 bg-[#FAF7F2] p-2.5 rounded-xl border border-[#ECE7DE]">
                  <div className="flex items-center gap-1 text-xs font-bold text-[#18B896]">
                    <Calendar size={13} />
                    <span>{event.event_date}</span>
                  </div>
                  {event.end_date && (
                    <div className="text-[10px] text-[#8A7C6E]">to {event.end_date}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
