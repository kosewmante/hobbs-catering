import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';
import { mockShopItems } from '../../lib/mockData';
import { Search, ShoppingBag, Plus } from 'lucide-react';

export const ShopView: React.FC = () => {
  const { activeStudent } = useAuth();
  const { addToCart } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = mockShopItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (item: typeof mockShopItems[0]) => {
    addToCart({
      student_id: activeStudent?.id || 'stu-001',
      student_name: activeStudent ? `${activeStudent.first_name} ${activeStudent.last_name}` : 'Student',
      title: item.name,
      subtitle: item.category,
      category: 'shop',
      price: item.price,
      quantity: 1,
    });
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      {/* Student Banner (Matching 08.jpeg green pill) */}
      <div className="flex justify-center md:justify-start">
        <div className="student-banner-pill w-full md:w-auto justify-center">
          <span>{activeStudent?.first_name} {activeStudent?.last_name}</span>
        </div>
      </div>

      <div className="px-2">
        <h2 className="text-2xl font-bold text-[#332418]">School Shop</h2>
        <p className="text-xs text-[#8A7C6E]">Hobbs meal passes, school uniform essentials and accessories</p>
      </div>

      {/* Search Bar (Matching 08.jpeg search input) */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full bg-white border border-[#D1C8BA] rounded-xl px-4 py-3 pl-4 pr-10 text-sm focus:outline-none focus:border-[#18B896] shadow-2xs"
        />
        <Search size={18} className="absolute right-3.5 top-3.5 text-[#8A7C6E]" />
      </div>

      {/* Shop Items Grid */}
      {filteredItems.length === 0 ? (
        <div className="white-card text-center py-10">
          <p className="text-sm text-[#72685D]">
            {activeStudent?.school_name || 'The Woodlands School'} has no matching shop items to display.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="white-card flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <span className="text-[11px] font-bold text-[#18B896] bg-[#F2F8D5] px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
                <h4 className="font-bold text-base text-[#2C241D] mt-2 leading-snug">
                  {item.name}
                </h4>
                <p className="text-xs text-[#72685D] mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#ECE7DE]">
                <div className="text-lg font-black text-[#2C241D]">
                  £{item.price.toFixed(2)}
                </div>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="btn-hobbs-green py-2 px-3.5 text-xs"
                >
                  <Plus size={14} /> Add to Basket
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
