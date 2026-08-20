/**
 * Complete Hobbs Catering Daily Menu Database
 * Autumn Term 2026: Thursday 03 Sep – Friday 23 Oct (8 school weeks)
 *
 * Parsed directly from the official "hobbs-catering daily menu.txt"
 * and the 4 seasonal menu sheets (Main, Gluten-Free, Dairy & Egg Free, Vegan).
 *
 * Pricing: £2.70 per day / £13.50 per 5-day week.
 */

import { DailyMenu, DailyMenuOption, MEAL_PRICE_PER_DAY } from '../types';

// Helper to build a daily menu option
let _optId = 0;
function opt(
  date: string,
  category: DailyMenuOption['category'],
  title: string,
  allergens: string,
  flags: { halal?: boolean; vegetarian?: boolean; vegan?: boolean } = {}
): DailyMenuOption {
  _optId++;
  return {
    id: `dm-${date}-${_optId}`,
    category,
    title,
    allergens,
    isHalal: flags.halal || false,
    isVegetarian: flags.vegetarian || false,
    isVegan: flags.vegan || false,
    price: MEAL_PRICE_PER_DAY,
  };
}

// Standard sandwich / jacket / alternative options that repeat every day
function dailyAlternatives(date: string): DailyMenuOption[] {
  return [
    opt(date, 'Jacket Potato', 'Jacket Potato with Various Fillings', ''),
    opt(date, 'Ham Sandwich', 'Ham Sandwich', 'Contains Pork, Wheat, Soya'),
    opt(date, 'Cheese Sandwich', 'Cheese Sandwich', 'Contains Dairy, Wheat, Soya'),
    opt(date, 'Tuna Mayo Sandwich', 'Tuna Mayo Sandwich', 'Contains Fish, Egg, Wheat, Soya'),
    opt(date, 'Gluten Free Meal', 'Gluten Free Meal', ''),
    opt(date, 'Dairy & Egg Free Meal', 'Dairy & Egg Free Meal', ''),
    opt(date, 'Vegan Meal', 'Vegan Meal', '', { vegan: true }),
  ];
}

function formatDate(d: string): string {
  const date = new Date(d + 'T12:00:00');
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${days[date.getDay()]} ${String(date.getDate()).padStart(2, '0')} ${months[date.getMonth()]}`;
}

function getDayOfWeek(d: string): string {
  const date = new Date(d + 'T12:00:00');
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
}

function getMonday(d: string): string {
  const date = new Date(d + 'T12:00:00');
  const day = date.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  const monday = new Date(date);
  monday.setDate(date.getDate() + diff);
  return monday.toISOString().split('T')[0];
}

// ────────────────────────────────────────────────────────
// COMPLETE DAILY MENU DATA
// ────────────────────────────────────────────────────────

function buildMenu(
  date: string,
  weekNumber: number,
  option1: { title: string; allergens: string; halal?: boolean },
  option2: { title: string; allergens: string; vegetarian?: boolean; vegan?: boolean }
): DailyMenu {
  return {
    date,
    dayOfWeek: getDayOfWeek(date),
    dateFormatted: formatDate(date),
    weekCommencing: getMonday(date),
    weekNumber,
    options: [
      opt(date, 'Option 1', option1.title, option1.allergens, { halal: option1.halal }),
      opt(date, 'Option 2', option2.title, option2.allergens, { vegetarian: option2.vegetarian, vegan: option2.vegan }),
      ...dailyAlternatives(date),
    ],
  };
}

export const dailyMenus: DailyMenu[] = [
  // ═══════════════════════════════════════════════
  // WEEK 1: W/C 01 Sep 2026 (Term starts Thu 03 Sep)
  // ═══════════════════════════════════════════════

  // Thu 03.09.26
  buildMenu('2026-09-03', 1,
    { title: 'Ham & Cheese Tortilla Wrap', allergens: 'Contains Wheat, Milk' },
    { title: 'Three Bean Chilli non Carne', allergens: 'May contain Wheat & Soya', vegetarian: true }
  ),

  // Fri 04.09.26
  buildMenu('2026-09-04', 1,
    { title: 'Breaded Fish', allergens: 'Contains Wheat, Fish', halal: true },
    { title: 'Cheese & Tomato Pizza', allergens: 'Contains Wheat, Milk. May Contain Soya', vegetarian: true }
  ),

  // ═══════════════════════════════════════════════
  // WEEK 2: W/C 07 Sep 2026
  // ═══════════════════════════════════════════════

  // Mon 07.09.26
  buildMenu('2026-09-07', 2,
    { title: 'Tuna Melt', allergens: 'Contains Fish, Wheat, Milk. Bun may contain Sesame Seeds', halal: true },
    { title: 'Mac & Cheese', allergens: 'Contains Wheat, Milk. May contain Soya', vegetarian: true }
  ),

  // Tue 08.09.26
  buildMenu('2026-09-08', 2,
    { title: 'Chicken Curry (Tikka)', allergens: 'Contains Celery. May contain Soya', halal: true },
    { title: 'Veggie & Rice Enchiladas', allergens: 'Contains Wheat, Milk', vegetarian: true }
  ),

  // Wed 09.09.26
  buildMenu('2026-09-09', 2,
    { title: 'Sliced Gammon', allergens: '' },
    { title: 'Quorn Roast', allergens: 'Contains Egg, Milk', vegetarian: true }
  ),

  // Thu 10.09.26
  buildMenu('2026-09-10', 2,
    { title: 'Beef Bolognese Pasta', allergens: 'Contains Wheat. May contain Soya' },
    { title: 'Cheese & Bean Puffs', allergens: 'Contains Wheat, Milk. May contain Mustard, Soya, Lupin', vegetarian: true }
  ),

  // Fri 11.09.26
  buildMenu('2026-09-11', 2,
    { title: 'Breaded Fish', allergens: 'Contains Wheat, Fish', halal: true },
    { title: 'Cheese & Tomato Pizza', allergens: 'Contains Wheat, Milk. May contain Soya', vegetarian: true }
  ),

  // ═══════════════════════════════════════════════
  // WEEK 3: W/C 14 Sep 2026
  // ═══════════════════════════════════════════════

  // Mon 14.09.26
  buildMenu('2026-09-14', 3,
    { title: 'Pork Meatballs in Tomato Sauce', allergens: 'Contains Wheat, Soya. May contain Celery, Egg, Milk, Mustard & Sulphites' },
    { title: 'Veggie Quesadilla Stack', allergens: 'Contains Wheat, Milk. May contain Soya', vegetarian: true }
  ),

  // Tue 15.09.26
  buildMenu('2026-09-15', 3,
    { title: 'Beef & Onion Yorkies', allergens: 'Contains Wheat, Eggs, Milk. May contain Soya' },
    { title: 'Baked Veggie Samosa with Curry Sauce', allergens: 'Contains Wheat, Mustard', vegetarian: true }
  ),

  // Wed 16.09.26
  buildMenu('2026-09-16', 3,
    { title: 'Sliced Pork & Apple Sauce', allergens: '' },
    { title: 'Quorn Roast', allergens: 'Contains Egg, Milk', vegetarian: true }
  ),

  // Thu 17.09.26
  buildMenu('2026-09-17', 3,
    { title: 'Chicken & Vegetable Pie', allergens: 'Contains Wheat, Milk. May contain Mustard, Soya, Lupin', halal: true },
    { title: 'Veggie Lasagne', allergens: 'Contains Wheat, Milk. May contain Soya', vegetarian: true }
  ),

  // Fri 18.09.26
  buildMenu('2026-09-18', 3,
    { title: 'Breaded Fish', allergens: 'Contains Wheat, Fish', halal: true },
    { title: 'Cheese & Tomato Pizza', allergens: 'Contains Wheat, Milk. May contain Soya', vegetarian: true }
  ),

  // ═══════════════════════════════════════════════
  // WEEK 4: W/C 21 Sep 2026  (Menu cycle Week 1 repeat)
  // ═══════════════════════════════════════════════

  // Mon 21.09.26
  buildMenu('2026-09-21', 4,
    { title: 'Chicken Pasta Bake', allergens: 'Contains Wheat, Milk', halal: true },
    { title: 'Cheese & Onion Lattice', allergens: 'Contains Wheat, Milk, Mustard, Soya', vegetarian: true }
  ),

  // Tue 22.09.26
  buildMenu('2026-09-22', 4,
    { title: 'Beef & Onion Pie', allergens: 'Contains Wheat. May contain Mustard, Soya, Lupin' },
    { title: 'Crustless Quiche', allergens: 'Contains Eggs, Milk', vegetarian: true }
  ),

  // Wed 23.09.26
  buildMenu('2026-09-23', 4,
    { title: 'Sliced Roast Chicken & Stuffing', allergens: 'Stuffing contains Wheat', halal: true },
    { title: 'Quorn Roast', allergens: 'Contains Eggs, Milk', vegetarian: true }
  ),

  // Thu 24.09.26
  buildMenu('2026-09-24', 4,
    { title: 'Ham & Cheese Tortilla', allergens: 'Contains Wheat, Milk' },
    { title: 'Three Bean Chilli non Carne', allergens: 'May contain Wheat, Soya', vegetarian: true }
  ),

  // Fri 25.09.26
  buildMenu('2026-09-25', 4,
    { title: 'Breaded Fish', allergens: 'Contains Wheat, Fish', halal: true },
    { title: 'Cheese & Tomato Pizza', allergens: 'Contains Wheat, Milk. May Contain Soya', vegetarian: true }
  ),

  // ═══════════════════════════════════════════════
  // WEEK 5: W/C 28 Sep 2026  (Menu cycle Week 2 repeat)
  // ═══════════════════════════════════════════════

  // Mon 28.09.26
  buildMenu('2026-09-28', 5,
    { title: 'Tuna Melt', allergens: 'Contains Fish, Wheat, Milk. Bun may contain Sesame Seeds', halal: true },
    { title: 'Mac & Cheese', allergens: 'Contains Wheat, Milk. May contain Soya', vegetarian: true }
  ),

  // Tue 29.09.26
  buildMenu('2026-09-29', 5,
    { title: 'Chicken Curry (Tikka)', allergens: 'Contains Celery. May contain Soya', halal: true },
    { title: 'Veggie Enchiladas', allergens: 'Contains Wheat, Milk', vegetarian: true }
  ),

  // Wed 30.09.26
  buildMenu('2026-09-30', 5,
    { title: 'Sliced Gammon', allergens: '' },
    { title: 'Quorn Roast', allergens: 'Contains Egg, Milk', vegetarian: true }
  ),

  // No Thu 01.10 in the source menu — skipped to Fri
  // Fri 02.10.26
  buildMenu('2026-10-02', 5,
    { title: 'Breaded Fish', allergens: 'Contains Wheat, Fish', halal: true },
    { title: 'Cheese & Tomato Pizza', allergens: 'Contains Wheat, Milk. May contain Soya', vegetarian: true }
  ),

  // ═══════════════════════════════════════════════
  // WEEK 6: W/C 05 Oct 2026 (Menu cycle Week 3 repeat)
  // ═══════════════════════════════════════════════

  // Mon 05.10.26
  buildMenu('2026-10-05', 6,
    { title: 'Pork Meatballs in Tomato Sauce', allergens: 'Contains Wheat, Soya. May contain Celery, Egg, Milk, Mustard & Sulphites' },
    { title: 'Veggie Quesadilla Stack', allergens: 'Contains Wheat, Milk. May contain Soya', vegetarian: true }
  ),

  // Tue 06.10.26
  buildMenu('2026-10-06', 6,
    { title: 'Beef & Onion Yorkies', allergens: 'Contains Wheat, Eggs, Milk. May contain Soya' },
    { title: 'Baked Veggie Samosa with Curry Sauce', allergens: 'Contains Wheat, Mustard', vegetarian: true }
  ),

  // Wed 07.10.26
  buildMenu('2026-10-07', 6,
    { title: 'Sliced Pork & Apple Sauce', allergens: '' },
    { title: 'Quorn Roast', allergens: 'Contains Egg, Milk', vegetarian: true }
  ),

  // Thu 08.10.26
  buildMenu('2026-10-08', 6,
    { title: 'Chicken & Vegetable Pie', allergens: 'Contains Wheat, Milk. May contain Mustard, Soya, Lupin', halal: true },
    { title: 'Veggie Lasagne', allergens: 'Contains Wheat, Milk. May contain Soya', vegetarian: true }
  ),

  // Fri 09.10.26
  buildMenu('2026-10-09', 6,
    { title: 'Breaded Fish', allergens: 'Contains Wheat, Fish', halal: true },
    { title: 'Cheese & Tomato Pizza', allergens: 'Contains Wheat, Milk. May contain Soya', vegetarian: true }
  ),

  // ═══════════════════════════════════════════════
  // WEEK 7: W/C 12 Oct 2026  (Menu cycle Week 1 repeat)
  // ═══════════════════════════════════════════════

  // Mon 12.10.26
  buildMenu('2026-10-12', 7,
    { title: 'Chicken Pasta Bake', allergens: 'Contains Wheat, Milk.', halal: true },
    { title: 'Cheese & Onion Lattice', allergens: 'Contains Wheat, Milk, Mustard, Soya', vegetarian: true }
  ),

  // Tue 13.10.26
  buildMenu('2026-10-13', 7,
    { title: 'Beef & Onion Pie', allergens: 'Contains Wheat. May contain Mustard, Soya & Lupin' },
    { title: 'Crustless Quiche', allergens: 'Contains Eggs, Milk', vegetarian: true }
  ),

  // Wed 14.10.26
  buildMenu('2026-10-14', 7,
    { title: 'Sliced Roast Chicken & Stuffing', allergens: 'Stuffing contains Wheat', halal: true },
    { title: 'Quorn Roast', allergens: 'Contains Eggs, Milk', vegetarian: true }
  ),

  // Thu 15.10.26
  buildMenu('2026-10-15', 7,
    { title: 'Ham & Cheese Tortilla', allergens: 'Contains Wheat, Milk' },
    { title: 'Three Bean Chilli non Carne', allergens: 'May contain Wheat, Soya', vegetarian: true }
  ),

  // Fri 16.10.26
  buildMenu('2026-10-16', 7,
    { title: 'Breaded Fish', allergens: 'Contains Wheat, Fish', halal: true },
    { title: 'Cheese & Tomato Pizza', allergens: 'Contains Wheat, Milk. May Contain Soya', vegetarian: true }
  ),

  // ═══════════════════════════════════════════════
  // WEEK 8: W/C 19 Oct 2026  (Menu cycle Week 2 repeat)
  // ═══════════════════════════════════════════════

  // Mon 19.10.26
  buildMenu('2026-10-19', 8,
    { title: 'Tuna Melt', allergens: 'Contains Fish, Wheat, Milk. Bun may contain Sesame Seeds', halal: true },
    { title: 'Mac & Cheese', allergens: 'Contains Wheat, Milk. May contain Soya', vegetarian: true }
  ),

  // Tue 20.10.26
  buildMenu('2026-10-20', 8,
    { title: 'Chicken Curry (Tikka)', allergens: 'Celery. May contain Soya', halal: true },
    { title: 'Veggie Enchiladas', allergens: 'Contains Wheat, Milk', vegetarian: true }
  ),

  // Wed 21.10.26
  buildMenu('2026-10-21', 8,
    { title: 'Sliced Gammon', allergens: '' },
    { title: 'Quorn Roast', allergens: 'Contains Egg, Milk', vegetarian: true }
  ),

  // Thu 22.10.26
  buildMenu('2026-10-22', 8,
    { title: 'Beef Bolognese Pasta', allergens: 'Contains Wheat. May contain Soya' },
    { title: 'Cheese & Bean Puffs', allergens: 'Contains Wheat, Milk. May contain Mustard, Soya, Lupin', vegetarian: true }
  ),

  // Fri 23.10.26
  buildMenu('2026-10-23', 8,
    { title: 'Breaded Fish', allergens: 'Contains Wheat, Fish', halal: true },
    { title: 'Cheese & Tomato Pizza', allergens: 'Contains Wheat, Milk. May Contain Soya', vegetarian: true }
  ),
];

// ── Grouping helpers ──

export interface WeekGroup {
  weekNumber: number;
  weekCommencing: string;
  label: string;
  days: DailyMenu[];
}

export function getWeekGroups(): WeekGroup[] {
  const grouped = new Map<string, DailyMenu[]>();

  dailyMenus.forEach(dm => {
    const key = dm.weekCommencing;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key)!.push(dm);
  });

  const weeks: WeekGroup[] = [];
  grouped.forEach((days, wc) => {
    const first = days[0];
    const wcDate = new Date(wc + 'T12:00:00');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const label = `W/C: Mon ${String(wcDate.getDate()).padStart(2, '0')} ${months[wcDate.getMonth()]} ${wcDate.getFullYear()}`;

    weeks.push({
      weekNumber: first.weekNumber,
      weekCommencing: wc,
      label,
      days: days.sort((a, b) => a.date.localeCompare(b.date)),
    });
  });

  return weeks.sort((a, b) => a.weekCommencing.localeCompare(b.weekCommencing));
}
