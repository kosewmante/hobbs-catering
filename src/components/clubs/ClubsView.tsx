import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';
import { mockClubBookings } from '../../lib/mockData';
import { Users, Clock, Calendar, Plus } from 'lucide-react';

export const ClubsView: React.FC = () => {
  const { activeStudent } = useAuth();
  const { addToCart } = useApp();

  const handleBookClub = (clubName: string, timeSlot: string, price: number, date: string) => {
    addToCart({
      student_id: activeStudent?.id || 'stu-001',
      student_name: activeStudent ? `${activeStudent.first_name} ${activeStudent.last_name}` : 'Student',
      title: clubName,
      subtitle: `${timeSlot} - ${date}`,
      category: 'club',
      price,
      quantity: 1,
    });
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      {/* Student Banner (Matching 07.jpeg green pill) */}
      <div className="flex justify-center md:justify-start">
        <div className="student-banner-pill w-full md:w-auto justify-center">
          <span>{activeStudent?.first_name} {activeStudent?.last_name}</span>
        </div>
      </div>

      {/* Credit Row (Matching 07.jpeg) */}
      <div className="flex items-center justify-between px-2 text-xl font-bold text-[#332418]">
        <span>Credit</span>
        <span>£{(activeStudent?.club_credit || 0).toFixed(2)}</span>
      </div>

      {/* Available Clubs List */}
      <div className="space-y-3">
        {mockClubBookings.map(club => (
          <div
            key={club.id}
            className="white-card flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F2F8D5] text-[#18B896] flex items-center justify-center shrink-0">
                <Users size={20} />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#2C241D]">{club.club_name}</h4>
                <div className="flex items-center gap-4 text-xs text-[#72685D] mt-1 flex-wrap">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} /> {club.session_date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> {club.time_slot}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-[#ECE7DE]">
              <div className="text-right">
                <span className="text-xs text-[#8A7C6E] block">Session Fee</span>
                <span className="font-extrabold text-base text-[#18B896]">
                  £{club.price.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => handleBookClub(club.club_name, club.time_slot, club.price, club.session_date)}
                className="btn-hobbs-green py-2 px-4 text-xs"
              >
                <Plus size={14} /> Book Session
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
