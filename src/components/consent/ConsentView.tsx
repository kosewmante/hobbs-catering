import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';
import { CheckSquare, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

export const ConsentView: React.FC = () => {
  const { activeStudent } = useAuth();
  const { consents, grantConsent } = useApp();

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      {/* Student Banner (Matching 09.jpeg green pill) */}
      <div className="flex justify-center md:justify-start">
        <div className="student-banner-pill w-full md:w-auto justify-center">
          <span>{activeStudent?.first_name} {activeStudent?.last_name}</span>
        </div>
      </div>

      <div className="px-2">
        <h2 className="text-2xl font-bold text-[#332418]">Parental Consent</h2>
        <p className="text-xs text-[#8A7C6E]">
          Review and digitally sign catering permissions and school event authorizations
        </p>
      </div>

      {consents.length === 0 ? (
        <div className="white-card text-center py-10">
          <p className="text-sm text-[#72685D]">
            {activeStudent?.school_name || 'The Woodlands School'} has no parental consent requests to display.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {consents.map(req => (
            <div
              key={req.id}
              className={`white-card border-l-4 ${
                req.status === 'granted'
                  ? 'border-l-[#18B896] bg-white'
                  : 'border-l-[#F8BE00] bg-[#FAF7F2]'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        req.status === 'granted'
                          ? 'bg-[#F2F8D5] text-[#18B896]'
                          : 'bg-[#FEF3C7] text-[#92400E]'
                      }`}
                    >
                      {req.status === 'granted' ? 'Consent Granted' : 'Action Required'}
                    </span>
                    <span className="text-xs text-[#8A7C6E] flex items-center gap-1">
                      <Clock size={12} /> Due: {req.due_date}
                    </span>
                  </div>

                  <h4 className="font-bold text-base text-[#2C241D]">{req.title}</h4>
                  <p className="text-xs text-[#72685D] leading-relaxed">{req.description}</p>

                  {req.granted_at && (
                    <div className="text-[11px] text-[#18B896] flex items-center gap-1 pt-1 font-medium">
                      <CheckCircle2 size={13} />
                      <span>Confirmed by {req.granted_by}</span>
                    </div>
                  )}
                </div>

                <div className="shrink-0 pt-2 md:pt-0">
                  {req.status === 'pending' ? (
                    <button
                      onClick={() => grantConsent(req.id)}
                      className="w-full md:w-auto btn-hobbs-green py-2 px-4 text-xs font-bold"
                    >
                      <CheckSquare size={14} /> Grant Consent
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#18B896] bg-[#F2F8D5] px-3 py-1.5 rounded-lg">
                      <CheckCircle2 size={15} /> Completed
                    </span>
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
