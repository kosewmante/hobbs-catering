import React, { useState, useMemo } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';
import { getWeekGroups } from '../../lib/dailyMenuData';
import { DietaryModal } from '../dietary/DietaryModal';
import { MEAL_PRICE_PER_DAY, MEAL_PRICE_PER_WEEK } from '../../types';
import {
  Calendar,
  ChevronRight,
  ShoppingCart,
  Leaf,
  AlertTriangle,
  Settings2,
  Utensils,
  CheckCircle2,
  Wheat,
  Egg,
  Fish,
} from 'lucide-react';

type DietaryFilter = 'all' | 'halal' | 'vegetarian' | 'vegan';

export const MealBooking: React.FC = () => {
  const { activeStudent } = useAuth();
  const { addToCart, showToast } = useApp();

  const weekGroups = useMemo(() => getWeekGroups(), []);
  const [activeWeekIdx, setActiveWeekIdx] = useState(0);
  const [dietaryFilter, setDietaryFilter] = useState<DietaryFilter>('all');
  const [isDietaryModalOpen, setIsDietaryModalOpen] = useState(false);

  // Selections: { "2026-09-03": "dm-2026-09-03-1", ... }
  const [selections, setSelections] = useState<Record<string, string>>({});

  const activeWeek = weekGroups[activeWeekIdx];

  const handleSelectOption = (date: string, optionId: string) => {
    setSelections(prev => {
      if (prev[date] === optionId) {
        const next = { ...prev };
        delete next[date];
        return next;
      }
      return { ...prev, [date]: optionId };
    });
  };

  // Count selected days for the active week
  const weekSelectedCount = activeWeek?.days.filter(d => selections[d.date]).length || 0;
  const weekTotal = weekSelectedCount * MEAL_PRICE_PER_DAY;

  // Select full week helper
  const handleSelectFullWeek = () => {
    if (!activeWeek) return;
    const newSelections = { ...selections };
    activeWeek.days.forEach(day => {
      // Select Option 1 by default
      const opt1 = day.options.find(o => o.category === 'Option 1');
      if (opt1) {
        newSelections[day.date] = opt1.id;
      }
    });
    setSelections(newSelections);
    showToast(`Selected all ${activeWeek.days.length} days — £${(activeWeek.days.length * MEAL_PRICE_PER_DAY).toFixed(2)}`, 'success');
  };

  const handleAddWeekToBasket = () => {
    if (!activeWeek || weekSelectedCount === 0) {
      showToast('Please choose at least one meal before adding to basket', 'info');
      return;
    }

    activeWeek.days.forEach(day => {
      const selectedId = selections[day.date];
      if (!selectedId) return;
      const option = day.options.find(o => o.id === selectedId);
      if (!option) return;

      addToCart({
        student_id: activeStudent?.id || 'stu-001',
        student_name: activeStudent ? `${activeStudent.first_name} ${activeStudent.last_name}` : 'Student',
        title: option.title,
        subtitle: `${day.dateFormatted} — ${day.dayOfWeek}`,
        category: 'dinner',
        day: day.dayOfWeek,
        date: day.date,
        price: MEAL_PRICE_PER_DAY,
        quantity: 1,
        metadata: {
          menuItemId: option.id,
          mealCategory: option.category,
        },
      });
    });

    // Clear selections for this week
    const newSelections = { ...selections };
    activeWeek.days.forEach(d => delete newSelections[d.date]);
    setSelections(newSelections);
    showToast(`Added ${weekSelectedCount} meals to basket — £${weekTotal.toFixed(2)}`);
  };

  // Filter badge colors
  const filterBadges: { key: DietaryFilter; label: string; icon: React.ReactNode; bg: string; active: string }[] = [
    { key: 'all', label: 'All Meals', icon: <Utensils size={14} />, bg: '#F0EDE8', active: '#4A3728' },
    { key: 'halal', label: 'Halal', icon: <span style={{ fontSize: 12, fontWeight: 800 }}>H</span>, bg: '#FFF8E1', active: '#E5930A' },
    { key: 'vegetarian', label: 'Vegetarian', icon: <Leaf size={14} />, bg: '#E8F5E9', active: '#2E7D32' },
    { key: 'vegan', label: 'Vegan', icon: <span style={{ fontSize: 11, fontWeight: 800 }}>Ve</span>, bg: '#F3E5F5', active: '#6A1B9A' },
  ];

  const allergenIcon = (text: string) => {
    if (text.toLowerCase().includes('wheat') || text.toLowerCase().includes('gluten'))
      return <Wheat size={12} />;
    if (text.toLowerCase().includes('egg'))
      return <Egg size={12} />;
    if (text.toLowerCase().includes('fish'))
      return <Fish size={12} />;
    return <AlertTriangle size={12} />;
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: 900, margin: '0 auto' }}>
      {/* ─── Top Banner ─── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #2B1E16 0%, #4A3728 100%)',
          borderRadius: 20,
          padding: '24px 28px',
          marginBottom: 20,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(163,192,24,0.08)' }} />
        <div style={{ position: 'absolute', bottom: -20, right: 60, width: 80, height: 80, borderRadius: '50%', background: 'rgba(163,192,24,0.05)' }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, position: 'relative', zIndex: 1 }}>
          <div>
            <h1 style={{ color: '#fff', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>
              🍽️ School Dinners
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', marginTop: 4 }}>
              Autumn Term 2026 • £{MEAL_PRICE_PER_DAY.toFixed(2)}/day • £{MEAL_PRICE_PER_WEEK.toFixed(2)}/week
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                background: 'rgba(163,192,24,0.15)',
                borderRadius: 12,
                padding: '10px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#18B896', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14 }}>
                {activeStudent?.first_name?.[0]}{activeStudent?.last_name?.[0]}
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>
                  {activeStudent?.first_name} {activeStudent?.last_name}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>
                  Balance: £{(activeStudent?.dinner_credit || 0).toFixed(2)}
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsDietaryModalOpen(true)}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 10,
                padding: '10px 14px',
                color: 'rgba(255,255,255,0.7)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: '0.8rem',
                fontWeight: 500,
              }}
            >
              <Settings2 size={16} />
              Dietary
            </button>
          </div>
        </div>
      </div>

      {/* ─── Dietary Filter Pills ─── */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        {filterBadges.map(fb => {
          const isActive = dietaryFilter === fb.key;
          return (
            <button
              key={fb.key}
              onClick={() => setDietaryFilter(fb.key)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '7px 16px',
                borderRadius: 999,
                fontSize: '0.8rem',
                fontWeight: isActive ? 700 : 500,
                border: isActive ? `2px solid ${fb.active}` : '2px solid transparent',
                background: isActive ? fb.bg : '#F5F3EF',
                color: isActive ? fb.active : '#72685D',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {fb.icon} {fb.label}
            </button>
          );
        })}
      </div>

      {/* ─── Week Selector Tabs ─── */}
      <div
        style={{
          display: 'flex',
          gap: 6,
          overflowX: 'auto',
          paddingBottom: 4,
          marginBottom: 20,
        }}
      >
        {weekGroups.map((wg, idx) => {
          const isActive = activeWeekIdx === idx;
          const wkSelCount = wg.days.filter(d => selections[d.date]).length;
          return (
            <button
              key={wg.weekCommencing}
              onClick={() => setActiveWeekIdx(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 16px',
                borderRadius: 12,
                fontSize: '0.78rem',
                fontWeight: isActive ? 700 : 500,
                whiteSpace: 'nowrap',
                border: isActive ? '2px solid #8FA813' : '2px solid #E5DFD5',
                background: isActive ? '#F4F8E4' : '#fff',
                color: isActive ? '#4A3728' : '#72685D',
                cursor: 'pointer',
                transition: 'all 0.15s',
                position: 'relative',
              }}
            >
              <Calendar size={14} style={{ color: isActive ? '#8FA813' : '#A89E92' }} />
              Week {wg.weekNumber}
              {wkSelCount > 0 && (
                <span
                  style={{
                    background: '#8FA813',
                    color: '#fff',
                    fontSize: 10,
                    fontWeight: 800,
                    borderRadius: 99,
                    width: 18,
                    height: 18,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {wkSelCount}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ─── Week Header + Select Full Week ─── */}
      {activeWeek && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 16,
            flexWrap: 'wrap',
            gap: 10,
          }}
        >
          <div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#2B1E16', margin: 0 }}>
              {activeWeek.label}
            </h2>
            <p style={{ fontSize: '0.8rem', color: '#72685D', margin: 0 }}>
              {activeWeek.days.length} school days available
            </p>
          </div>

          <button
            onClick={handleSelectFullWeek}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '9px 20px',
              borderRadius: 12,
              fontSize: '0.82rem',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #8FA813 0%, #7F970E 100%)',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(143, 168, 19, 0.3)',
              transition: 'all 0.2s',
            }}
          >
            <CheckCircle2 size={16} />
            Select Full Week (£{(activeWeek.days.length * MEAL_PRICE_PER_DAY).toFixed(2)})
          </button>
        </div>
      )}

      {/* ─── Day Cards ─── */}
      {activeWeek && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
          {activeWeek.days.map(day => {
            const selectedId = selections[day.date];

            // Filter options based on dietary filter
            const mainOptions = day.options.filter(o => {
              if (o.category !== 'Option 1' && o.category !== 'Option 2' && o.category !== 'Jacket Potato') return false;
              if (dietaryFilter === 'halal') return o.isHalal;
              if (dietaryFilter === 'vegetarian') return o.isVegetarian || o.isVegan;
              if (dietaryFilter === 'vegan') return o.isVegan;
              return true;
            });

            const sandwichOptions = day.options.filter(o =>
              o.category === 'Ham Sandwich' || o.category === 'Cheese Sandwich' || o.category === 'Tuna Mayo Sandwich'
            );

            const specialOptions = day.options.filter(o =>
              o.category === 'Gluten Free Meal' || o.category === 'Dairy & Egg Free Meal' || o.category === 'Vegan Meal'
            );

            return (
              <div
                key={day.date}
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  border: selectedId ? '2px solid #8FA813' : '1px solid #E5DFD5',
                  overflow: 'hidden',
                  boxShadow: selectedId ? '0 4px 20px rgba(143,168,19,0.12)' : '0 1px 4px rgba(74,55,40,0.04)',
                  transition: 'all 0.2s',
                }}
              >
                {/* Day Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 20px',
                    background: selectedId ? '#F4F8E4' : '#FAF8F5',
                    borderBottom: '1px solid #EEEAE4',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: selectedId ? '#8FA813' : '#E5DFD5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: selectedId ? '#fff' : '#72685D',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        transition: 'all 0.2s',
                      }}
                    >
                      {day.dayOfWeek.slice(0, 3)}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#2B1E16' }}>
                        {day.dayOfWeek}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#A89E92' }}>
                        {day.dateFormatted}
                      </div>
                    </div>
                  </div>

                  {selectedId && (
                    <div
                      style={{
                        background: '#8FA813',
                        color: '#fff',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '4px 12px',
                        borderRadius: 999,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                      }}
                    >
                      <CheckCircle2 size={12} />
                      £{MEAL_PRICE_PER_DAY.toFixed(2)}
                    </div>
                  )}
                </div>

                {/* Meal Options */}
                <div style={{ padding: '12px 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8 }}>
                  {/* Main options */}
                  {mainOptions.map(option => {
                    const isSelected = selectedId === option.id;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleSelectOption(day.date, option.id)}
                        style={{
                          textAlign: 'left',
                          padding: '12px 14px',
                          borderRadius: 12,
                          border: isSelected ? '2px solid #8FA813' : '1.5px solid #EEEAE4',
                          background: isSelected ? '#F4F8E4' : '#FAFAF8',
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                          position: 'relative',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 6 }}>
                          <span
                            style={{
                              fontSize: '0.65rem',
                              fontWeight: 700,
                              padding: '2px 8px',
                              borderRadius: 6,
                              background: option.category === 'Option 1' ? '#E3F2FD' : option.category === 'Option 2' ? '#E8F5E9' : '#FFF8E1',
                              color: option.category === 'Option 1' ? '#1565C0' : option.category === 'Option 2' ? '#2E7D32' : '#F57F17',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {option.category}
                          </span>
                          {option.isHalal && (
                            <span style={{ fontSize: '0.6rem', fontWeight: 800, padding: '2px 6px', borderRadius: 6, background: '#FFF8E1', color: '#E5930A' }}>
                              H
                            </span>
                          )}
                          {option.isVegetarian && !option.isVegan && (
                            <span style={{ fontSize: '0.6rem', fontWeight: 800, padding: '2px 6px', borderRadius: 6, background: '#E8F5E9', color: '#2E7D32' }}>
                              V
                            </span>
                          )}
                          {option.isVegan && (
                            <span style={{ fontSize: '0.6rem', fontWeight: 800, padding: '2px 6px', borderRadius: 6, background: '#F3E5F5', color: '#6A1B9A' }}>
                              Ve
                            </span>
                          )}
                        </div>

                        <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#2B1E16', lineHeight: 1.3, marginBottom: 4 }}>
                          {option.title}
                        </div>

                        {option.allergens && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.68rem', color: '#A89E92' }}>
                            {allergenIcon(option.allergens)}
                            <span style={{ lineHeight: 1.2 }}>{option.allergens}</span>
                          </div>
                        )}

                        {isSelected && (
                          <div
                            style={{
                              position: 'absolute',
                              top: 8,
                              right: 8,
                              width: 20,
                              height: 20,
                              borderRadius: '50%',
                              background: '#8FA813',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                              <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        )}
                      </button>
                    );
                  })}

                  {/* Sandwich and special diet options as compact buttons */}
                  {dietaryFilter === 'all' && (
                    <>
                      {sandwichOptions.map(option => {
                        const isSelected = selectedId === option.id;
                        return (
                          <button
                            key={option.id}
                            onClick={() => handleSelectOption(day.date, option.id)}
                            style={{
                              textAlign: 'left',
                              padding: '10px 14px',
                              borderRadius: 12,
                              border: isSelected ? '2px solid #8FA813' : '1.5px solid #EEEAE4',
                              background: isSelected ? '#F4F8E4' : '#FAFAF8',
                              cursor: 'pointer',
                              transition: 'all 0.15s',
                              position: 'relative',
                            }}
                          >
                            <div style={{ fontSize: '0.65rem', fontWeight: 700, padding: '2px 8px', borderRadius: 6, background: '#FCE4EC', color: '#C62828', display: 'inline-block', marginBottom: 4 }}>
                              Sandwich
                            </div>
                            <div style={{ fontWeight: 600, fontSize: '0.82rem', color: '#2B1E16' }}>
                              {option.title}
                            </div>
                            {option.allergens && (
                              <div style={{ fontSize: '0.66rem', color: '#A89E92', marginTop: 2 }}>
                                {option.allergens}
                              </div>
                            )}
                            {isSelected && (
                              <div style={{ position: 'absolute', top: 8, right: 8, width: 20, height: 20, borderRadius: '50%', background: '#8FA813', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                              </div>
                            )}
                          </button>
                        );
                      })}

                      {specialOptions.map(option => {
                        const isSelected = selectedId === option.id;
                        return (
                          <button
                            key={option.id}
                            onClick={() => handleSelectOption(day.date, option.id)}
                            style={{
                              textAlign: 'left',
                              padding: '10px 14px',
                              borderRadius: 12,
                              border: isSelected ? '2px solid #8FA813' : '1.5px dashed #D4CCB9',
                              background: isSelected ? '#F4F8E4' : '#FCFBF8',
                              cursor: 'pointer',
                              transition: 'all 0.15s',
                              position: 'relative',
                            }}
                          >
                            <div style={{ fontWeight: 600, fontSize: '0.82rem', color: '#2B1E16' }}>
                              {option.title}
                            </div>
                            {isSelected && (
                              <div style={{ position: 'absolute', top: 8, right: 8, width: 20, height: 20, borderRadius: '50%', background: '#8FA813', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ─── Sticky Bottom Action Bar ─── */}
      {weekSelectedCount > 0 && (
        <div
          style={{
            position: 'sticky',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid #E5DFD5',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '16px 16px 0 0',
            boxShadow: '0 -4px 20px rgba(74,55,40,0.08)',
            zIndex: 10,
          }}
        >
          <div>
            <div style={{ fontSize: '0.8rem', color: '#72685D' }}>
              {weekSelectedCount} {weekSelectedCount === 1 ? 'day' : 'days'} selected
            </div>
            <div style={{ fontWeight: 800, fontSize: '1.25rem', color: '#2B1E16' }}>
              £{weekTotal.toFixed(2)}
            </div>
          </div>

          <button
            onClick={handleAddWeekToBasket}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 28px',
              borderRadius: 14,
              fontSize: '0.9rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #8FA813 0%, #7F970E 100%)',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(143, 168, 19, 0.35)',
              transition: 'all 0.2s',
            }}
          >
            <ShoppingCart size={18} />
            Add to Basket
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* Dietary Modal */}
      <DietaryModal
        isOpen={isDietaryModalOpen}
        onClose={() => setIsDietaryModalOpen(false)}
        onSave={(data) => {
          showToast(
            `Dietary preferences saved${data.requiresHalal ? ' — Halal enabled' : ''}`,
            'success'
          );
        }}
        currentHalal={activeStudent?.requires_halal || false}
        currentAllergies={activeStudent?.allergies || []}
      />
    </div>
  );
};
