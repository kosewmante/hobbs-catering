import { MenuItem, DailyMenu } from '../types/hobbs';

export const ALLERGIES_LIST = [
  'Celery',
  'Cereals (Wheat/Gluten)',
  'Crustaceans',
  'Eggs',
  'Fish',
  'Lupin',
  'Milk (Lactose)',
  'Molluscs',
  'Mustard',
  'Peanuts',
  'Sesame',
  'Soya',
  'Sulphites',
  'Pork',
  'No Allergens'
];

export const STATIC_MENU_ITEMS: MenuItem[] = [
  {
    "id": "item-1",
    "name": "Ham & Cheese Tortilla Wrap",
    "category": "Main Meal",
    "contains_pork": true,
    "is_halal_suitable": false,
    "allergens": [
      "Wheat",
      "Milk",
      "Pork"
    ],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-2",
    "name": "Three Bean Chilli non Carne",
    "category": "Vegetarian",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [],
    "may_contain": [
      "Wheat",
      "Soya"
    ],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-3",
    "name": "Jacket Potato with Various Fillings",
    "category": "Jacket Potato",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-4",
    "name": "Ham Sandwich",
    "category": "Sandwich",
    "contains_pork": true,
    "is_halal_suitable": false,
    "allergens": [
      "Wheat",
      "Pork",
      "Soya"
    ],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-5",
    "name": "Cheese Sandwich",
    "category": "Sandwich",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat",
      "Dairy",
      "Soya"
    ],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-6",
    "name": "Tuna Mayo Sandwich",
    "category": "Sandwich",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat",
      "Egg",
      "Fish",
      "Soya"
    ],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-7",
    "name": "Gluten Free Meal",
    "category": "Dietary Alternative",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-8",
    "name": "Dairy & Egg Free Meal",
    "category": "Dietary Alternative",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-9",
    "name": "Vegan Meal",
    "category": "Dietary Alternative",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-10",
    "name": "Breaded Fish",
    "category": "Main Meal",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat",
      "Fish"
    ],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-11",
    "name": "Cheese & Tomato Pizza",
    "category": "Main Meal",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat",
      "Milk"
    ],
    "may_contain": [
      "Soya"
    ],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-12",
    "name": "Tuna Melt",
    "category": "Main Meal",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat",
      "Milk",
      "Fish"
    ],
    "may_contain": [
      "Sesame"
    ],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-13",
    "name": "Mac & Cheese",
    "category": "Vegetarian",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat",
      "Milk"
    ],
    "may_contain": [
      "Soya"
    ],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-14",
    "name": "Chicken Curry (Tikka)",
    "category": "Main Meal",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Celery"
    ],
    "may_contain": [
      "Soya"
    ],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-15",
    "name": "Veggie & Rice Enchiladas",
    "category": "Vegetarian",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat",
      "Milk"
    ],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1534352956036-cd61c79315e6?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-16",
    "name": "Sliced Gammon",
    "category": "Main Meal",
    "contains_pork": true,
    "is_halal_suitable": false,
    "allergens": [
      "Pork"
    ],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-17",
    "name": "Quorn Roast",
    "category": "Vegetarian",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Milk",
      "Egg"
    ],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-18",
    "name": "Beef Bolognese Pasta",
    "category": "Main Meal",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat"
    ],
    "may_contain": [
      "Soya"
    ],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-19",
    "name": "Cheese & Bean Puffs",
    "category": "Vegetarian",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat",
      "Milk"
    ],
    "may_contain": [
      "Soya",
      "Mustard",
      "Lupin"
    ],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-20",
    "name": "Pork Meatballs in Tomato Sauce",
    "category": "Main Meal",
    "contains_pork": true,
    "is_halal_suitable": false,
    "allergens": [
      "Wheat",
      "Soya",
      "Pork"
    ],
    "may_contain": [
      "Milk",
      "Egg",
      "Mustard",
      "Celery",
      "Sulphites"
    ],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-21",
    "name": "Veggie Quesadilla Stack",
    "category": "Vegetarian",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat",
      "Milk"
    ],
    "may_contain": [
      "Soya"
    ],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-22",
    "name": "Beef & Onion Yorkies",
    "category": "Main Meal",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat",
      "Milk",
      "Eggs"
    ],
    "may_contain": [
      "Soya"
    ],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-23",
    "name": "Baked Veggie Samosa with Curry Sauce",
    "category": "Vegetarian",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat",
      "Mustard"
    ],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-24",
    "name": "Sliced Pork & Apple Sauce",
    "category": "Main Meal",
    "contains_pork": true,
    "is_halal_suitable": false,
    "allergens": [
      "Pork"
    ],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-25",
    "name": "Chicken & Vegetable Pie",
    "category": "Main Meal",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat",
      "Milk"
    ],
    "may_contain": [
      "Soya",
      "Mustard",
      "Lupin"
    ],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-26",
    "name": "Veggie Lasagne",
    "category": "Vegetarian",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat",
      "Milk"
    ],
    "may_contain": [
      "Soya"
    ],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-27",
    "name": "Chicken Pasta Bake",
    "category": "Main Meal",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat",
      "Milk"
    ],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-28",
    "name": "Cheese & Onion Lattice",
    "category": "Vegetarian",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat",
      "Milk",
      "Soya",
      "Mustard"
    ],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-29",
    "name": "Beef & Onion Pie",
    "category": "Main Meal",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat"
    ],
    "may_contain": [
      "Soya",
      "Mustard",
      "Lupin"
    ],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-30",
    "name": "Crustless Quiche",
    "category": "Vegetarian",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Milk",
      "Eggs"
    ],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-31",
    "name": "Sliced Roast Chicken & Stuffing",
    "category": "Main Meal",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat"
    ],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-32",
    "name": "Ham & Cheese Tortilla",
    "category": "Main Meal",
    "contains_pork": true,
    "is_halal_suitable": false,
    "allergens": [
      "Wheat",
      "Milk",
      "Pork"
    ],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "item-33",
    "name": "Veggie Enchiladas",
    "category": "Vegetarian",
    "contains_pork": false,
    "is_halal_suitable": true,
    "allergens": [
      "Wheat",
      "Milk"
    ],
    "may_contain": [],
    "price": 2.7,
    "image_url": "https://images.unsplash.com/photo-1534352956036-cd61c79315e6?auto=format&fit=crop&w=600&q=80"
  }
];

export interface StaticDailyMenu extends DailyMenu {
  day_of_week: string;
}

export const STATIC_DAILY_MENUS: StaticDailyMenu[] = [
  {
    "id": "daily-1",
    "date": "2026-09-03",
    "day_of_week": "Thursday",
    "menu_item_id": "item-1",
    "menu_item": {
      "id": "item-1",
      "name": "Ham & Cheese Tortilla Wrap",
      "category": "Main Meal",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Milk",
        "Pork"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-2",
    "date": "2026-09-03",
    "day_of_week": "Thursday",
    "menu_item_id": "item-2",
    "menu_item": {
      "id": "item-2",
      "name": "Three Bean Chilli non Carne",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [
        "Wheat",
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-3",
    "date": "2026-09-03",
    "day_of_week": "Thursday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-4",
    "date": "2026-09-03",
    "day_of_week": "Thursday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-5",
    "date": "2026-09-03",
    "day_of_week": "Thursday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-6",
    "date": "2026-09-03",
    "day_of_week": "Thursday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-7",
    "date": "2026-09-03",
    "day_of_week": "Thursday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-8",
    "date": "2026-09-03",
    "day_of_week": "Thursday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-9",
    "date": "2026-09-03",
    "day_of_week": "Thursday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-10",
    "date": "2026-09-04",
    "day_of_week": "Friday",
    "menu_item_id": "item-10",
    "menu_item": {
      "id": "item-10",
      "name": "Breaded Fish",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Fish"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-11",
    "date": "2026-09-04",
    "day_of_week": "Friday",
    "menu_item_id": "item-11",
    "menu_item": {
      "id": "item-11",
      "name": "Cheese & Tomato Pizza",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-12",
    "date": "2026-09-04",
    "day_of_week": "Friday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-13",
    "date": "2026-09-04",
    "day_of_week": "Friday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-14",
    "date": "2026-09-04",
    "day_of_week": "Friday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-15",
    "date": "2026-09-04",
    "day_of_week": "Friday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-16",
    "date": "2026-09-04",
    "day_of_week": "Friday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-17",
    "date": "2026-09-04",
    "day_of_week": "Friday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-18",
    "date": "2026-09-04",
    "day_of_week": "Friday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-19",
    "date": "2026-09-07",
    "day_of_week": "Monday",
    "menu_item_id": "item-12",
    "menu_item": {
      "id": "item-12",
      "name": "Tuna Melt",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk",
        "Fish"
      ],
      "may_contain": [
        "Sesame"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-20",
    "date": "2026-09-07",
    "day_of_week": "Monday",
    "menu_item_id": "item-13",
    "menu_item": {
      "id": "item-13",
      "name": "Mac & Cheese",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-21",
    "date": "2026-09-07",
    "day_of_week": "Monday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-22",
    "date": "2026-09-07",
    "day_of_week": "Monday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-23",
    "date": "2026-09-07",
    "day_of_week": "Monday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-24",
    "date": "2026-09-07",
    "day_of_week": "Monday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-25",
    "date": "2026-09-07",
    "day_of_week": "Monday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-26",
    "date": "2026-09-07",
    "day_of_week": "Monday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-27",
    "date": "2026-09-07",
    "day_of_week": "Monday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-28",
    "date": "2026-09-08",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-14",
    "menu_item": {
      "id": "item-14",
      "name": "Chicken Curry (Tikka)",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Celery"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-29",
    "date": "2026-09-08",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-15",
    "menu_item": {
      "id": "item-15",
      "name": "Veggie & Rice Enchiladas",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1534352956036-cd61c79315e6?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-30",
    "date": "2026-09-08",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-31",
    "date": "2026-09-08",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-32",
    "date": "2026-09-08",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-33",
    "date": "2026-09-08",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-34",
    "date": "2026-09-08",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-35",
    "date": "2026-09-08",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-36",
    "date": "2026-09-08",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-37",
    "date": "2026-09-09",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-16",
    "menu_item": {
      "id": "item-16",
      "name": "Sliced Gammon",
      "category": "Main Meal",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Pork"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-38",
    "date": "2026-09-09",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-17",
    "menu_item": {
      "id": "item-17",
      "name": "Quorn Roast",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Milk",
        "Egg"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-39",
    "date": "2026-09-09",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-40",
    "date": "2026-09-09",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-41",
    "date": "2026-09-09",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-42",
    "date": "2026-09-09",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-43",
    "date": "2026-09-09",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-44",
    "date": "2026-09-09",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-45",
    "date": "2026-09-09",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-46",
    "date": "2026-09-10",
    "day_of_week": "Thursday",
    "menu_item_id": "item-18",
    "menu_item": {
      "id": "item-18",
      "name": "Beef Bolognese Pasta",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1621996346565-e3d5d6281292?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-47",
    "date": "2026-09-10",
    "day_of_week": "Thursday",
    "menu_item_id": "item-19",
    "menu_item": {
      "id": "item-19",
      "name": "Cheese & Bean Puffs",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya",
        "Mustard",
        "Lupin"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-48",
    "date": "2026-09-10",
    "day_of_week": "Thursday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-49",
    "date": "2026-09-10",
    "day_of_week": "Thursday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-50",
    "date": "2026-09-10",
    "day_of_week": "Thursday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-51",
    "date": "2026-09-10",
    "day_of_week": "Thursday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-52",
    "date": "2026-09-10",
    "day_of_week": "Thursday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-53",
    "date": "2026-09-10",
    "day_of_week": "Thursday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-54",
    "date": "2026-09-10",
    "day_of_week": "Thursday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-55",
    "date": "2026-09-11",
    "day_of_week": "Friday",
    "menu_item_id": "item-10",
    "menu_item": {
      "id": "item-10",
      "name": "Breaded Fish",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Fish"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-56",
    "date": "2026-09-11",
    "day_of_week": "Friday",
    "menu_item_id": "item-11",
    "menu_item": {
      "id": "item-11",
      "name": "Cheese & Tomato Pizza",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-57",
    "date": "2026-09-11",
    "day_of_week": "Friday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-58",
    "date": "2026-09-11",
    "day_of_week": "Friday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-59",
    "date": "2026-09-11",
    "day_of_week": "Friday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-60",
    "date": "2026-09-11",
    "day_of_week": "Friday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-61",
    "date": "2026-09-11",
    "day_of_week": "Friday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-62",
    "date": "2026-09-11",
    "day_of_week": "Friday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-63",
    "date": "2026-09-11",
    "day_of_week": "Friday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-64",
    "date": "2026-09-14",
    "day_of_week": "Monday",
    "menu_item_id": "item-20",
    "menu_item": {
      "id": "item-20",
      "name": "Pork Meatballs in Tomato Sauce",
      "category": "Main Meal",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Soya",
        "Pork"
      ],
      "may_contain": [
        "Milk",
        "Egg",
        "Mustard",
        "Celery",
        "Sulphites"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-65",
    "date": "2026-09-14",
    "day_of_week": "Monday",
    "menu_item_id": "item-21",
    "menu_item": {
      "id": "item-21",
      "name": "Veggie Quesadilla Stack",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-66",
    "date": "2026-09-14",
    "day_of_week": "Monday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-67",
    "date": "2026-09-14",
    "day_of_week": "Monday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-68",
    "date": "2026-09-14",
    "day_of_week": "Monday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-69",
    "date": "2026-09-14",
    "day_of_week": "Monday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-70",
    "date": "2026-09-14",
    "day_of_week": "Monday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-71",
    "date": "2026-09-14",
    "day_of_week": "Monday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-72",
    "date": "2026-09-14",
    "day_of_week": "Monday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-73",
    "date": "2026-09-15",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-22",
    "menu_item": {
      "id": "item-22",
      "name": "Beef & Onion Yorkies",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk",
        "Eggs"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-74",
    "date": "2026-09-15",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-23",
    "menu_item": {
      "id": "item-23",
      "name": "Baked Veggie Samosa with Curry Sauce",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Mustard"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-75",
    "date": "2026-09-15",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-76",
    "date": "2026-09-15",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-77",
    "date": "2026-09-15",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-78",
    "date": "2026-09-15",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-79",
    "date": "2026-09-15",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-80",
    "date": "2026-09-15",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-81",
    "date": "2026-09-15",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-82",
    "date": "2026-09-16",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-24",
    "menu_item": {
      "id": "item-24",
      "name": "Sliced Pork & Apple Sauce",
      "category": "Main Meal",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Pork"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-83",
    "date": "2026-09-16",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-17",
    "menu_item": {
      "id": "item-17",
      "name": "Quorn Roast",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Milk",
        "Egg"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-84",
    "date": "2026-09-16",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-85",
    "date": "2026-09-16",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-86",
    "date": "2026-09-16",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-87",
    "date": "2026-09-16",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-88",
    "date": "2026-09-16",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-89",
    "date": "2026-09-16",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-90",
    "date": "2026-09-16",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-91",
    "date": "2026-09-17",
    "day_of_week": "Thursday",
    "menu_item_id": "item-25",
    "menu_item": {
      "id": "item-25",
      "name": "Chicken & Vegetable Pie",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya",
        "Mustard",
        "Lupin"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-92",
    "date": "2026-09-17",
    "day_of_week": "Thursday",
    "menu_item_id": "item-26",
    "menu_item": {
      "id": "item-26",
      "name": "Veggie Lasagne",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-93",
    "date": "2026-09-17",
    "day_of_week": "Thursday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-94",
    "date": "2026-09-17",
    "day_of_week": "Thursday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-95",
    "date": "2026-09-17",
    "day_of_week": "Thursday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-96",
    "date": "2026-09-17",
    "day_of_week": "Thursday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-97",
    "date": "2026-09-17",
    "day_of_week": "Thursday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-98",
    "date": "2026-09-17",
    "day_of_week": "Thursday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-99",
    "date": "2026-09-17",
    "day_of_week": "Thursday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-100",
    "date": "2026-09-18",
    "day_of_week": "Friday",
    "menu_item_id": "item-10",
    "menu_item": {
      "id": "item-10",
      "name": "Breaded Fish",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Fish"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-101",
    "date": "2026-09-18",
    "day_of_week": "Friday",
    "menu_item_id": "item-11",
    "menu_item": {
      "id": "item-11",
      "name": "Cheese & Tomato Pizza",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-102",
    "date": "2026-09-18",
    "day_of_week": "Friday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-103",
    "date": "2026-09-18",
    "day_of_week": "Friday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-104",
    "date": "2026-09-18",
    "day_of_week": "Friday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-105",
    "date": "2026-09-18",
    "day_of_week": "Friday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-106",
    "date": "2026-09-18",
    "day_of_week": "Friday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-107",
    "date": "2026-09-18",
    "day_of_week": "Friday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-108",
    "date": "2026-09-18",
    "day_of_week": "Friday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-109",
    "date": "2026-09-21",
    "day_of_week": "Monday",
    "menu_item_id": "item-27",
    "menu_item": {
      "id": "item-27",
      "name": "Chicken Pasta Bake",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1621996346565-e3d5d6281292?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-110",
    "date": "2026-09-21",
    "day_of_week": "Monday",
    "menu_item_id": "item-28",
    "menu_item": {
      "id": "item-28",
      "name": "Cheese & Onion Lattice",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk",
        "Soya",
        "Mustard"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-111",
    "date": "2026-09-21",
    "day_of_week": "Monday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-112",
    "date": "2026-09-21",
    "day_of_week": "Monday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-113",
    "date": "2026-09-21",
    "day_of_week": "Monday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-114",
    "date": "2026-09-21",
    "day_of_week": "Monday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-115",
    "date": "2026-09-21",
    "day_of_week": "Monday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-116",
    "date": "2026-09-21",
    "day_of_week": "Monday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-117",
    "date": "2026-09-21",
    "day_of_week": "Monday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-118",
    "date": "2026-09-22",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-29",
    "menu_item": {
      "id": "item-29",
      "name": "Beef & Onion Pie",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat"
      ],
      "may_contain": [
        "Soya",
        "Mustard",
        "Lupin"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-119",
    "date": "2026-09-22",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-30",
    "menu_item": {
      "id": "item-30",
      "name": "Crustless Quiche",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Milk",
        "Eggs"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-120",
    "date": "2026-09-22",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-121",
    "date": "2026-09-22",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-122",
    "date": "2026-09-22",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-123",
    "date": "2026-09-22",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-124",
    "date": "2026-09-22",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-125",
    "date": "2026-09-22",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-126",
    "date": "2026-09-22",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-127",
    "date": "2026-09-23",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-31",
    "menu_item": {
      "id": "item-31",
      "name": "Sliced Roast Chicken & Stuffing",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-128",
    "date": "2026-09-23",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-17",
    "menu_item": {
      "id": "item-17",
      "name": "Quorn Roast",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Milk",
        "Egg"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-129",
    "date": "2026-09-23",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-130",
    "date": "2026-09-23",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-131",
    "date": "2026-09-23",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-132",
    "date": "2026-09-23",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-133",
    "date": "2026-09-23",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-134",
    "date": "2026-09-23",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-135",
    "date": "2026-09-23",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-136",
    "date": "2026-09-24",
    "day_of_week": "Thursday",
    "menu_item_id": "item-32",
    "menu_item": {
      "id": "item-32",
      "name": "Ham & Cheese Tortilla",
      "category": "Main Meal",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Milk",
        "Pork"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-137",
    "date": "2026-09-24",
    "day_of_week": "Thursday",
    "menu_item_id": "item-2",
    "menu_item": {
      "id": "item-2",
      "name": "Three Bean Chilli non Carne",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [
        "Wheat",
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-138",
    "date": "2026-09-24",
    "day_of_week": "Thursday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-139",
    "date": "2026-09-24",
    "day_of_week": "Thursday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-140",
    "date": "2026-09-24",
    "day_of_week": "Thursday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-141",
    "date": "2026-09-24",
    "day_of_week": "Thursday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-142",
    "date": "2026-09-24",
    "day_of_week": "Thursday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-143",
    "date": "2026-09-24",
    "day_of_week": "Thursday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-144",
    "date": "2026-09-24",
    "day_of_week": "Thursday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-145",
    "date": "2026-09-25",
    "day_of_week": "Friday",
    "menu_item_id": "item-10",
    "menu_item": {
      "id": "item-10",
      "name": "Breaded Fish",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Fish"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-146",
    "date": "2026-09-25",
    "day_of_week": "Friday",
    "menu_item_id": "item-11",
    "menu_item": {
      "id": "item-11",
      "name": "Cheese & Tomato Pizza",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-147",
    "date": "2026-09-25",
    "day_of_week": "Friday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-148",
    "date": "2026-09-25",
    "day_of_week": "Friday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-149",
    "date": "2026-09-25",
    "day_of_week": "Friday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-150",
    "date": "2026-09-25",
    "day_of_week": "Friday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-151",
    "date": "2026-09-25",
    "day_of_week": "Friday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-152",
    "date": "2026-09-25",
    "day_of_week": "Friday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-153",
    "date": "2026-09-25",
    "day_of_week": "Friday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-154",
    "date": "2026-09-28",
    "day_of_week": "Monday",
    "menu_item_id": "item-12",
    "menu_item": {
      "id": "item-12",
      "name": "Tuna Melt",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk",
        "Fish"
      ],
      "may_contain": [
        "Sesame"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-155",
    "date": "2026-09-28",
    "day_of_week": "Monday",
    "menu_item_id": "item-13",
    "menu_item": {
      "id": "item-13",
      "name": "Mac & Cheese",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-156",
    "date": "2026-09-28",
    "day_of_week": "Monday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-157",
    "date": "2026-09-28",
    "day_of_week": "Monday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-158",
    "date": "2026-09-28",
    "day_of_week": "Monday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-159",
    "date": "2026-09-28",
    "day_of_week": "Monday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-160",
    "date": "2026-09-28",
    "day_of_week": "Monday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-161",
    "date": "2026-09-28",
    "day_of_week": "Monday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-162",
    "date": "2026-09-28",
    "day_of_week": "Monday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-163",
    "date": "2026-09-29",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-14",
    "menu_item": {
      "id": "item-14",
      "name": "Chicken Curry (Tikka)",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Celery"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-164",
    "date": "2026-09-29",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-33",
    "menu_item": {
      "id": "item-33",
      "name": "Veggie Enchiladas",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1534352956036-cd61c79315e6?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-165",
    "date": "2026-09-29",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-166",
    "date": "2026-09-29",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-167",
    "date": "2026-09-29",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-168",
    "date": "2026-09-29",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-169",
    "date": "2026-09-29",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-170",
    "date": "2026-09-29",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-171",
    "date": "2026-09-29",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-172",
    "date": "2026-09-30",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-16",
    "menu_item": {
      "id": "item-16",
      "name": "Sliced Gammon",
      "category": "Main Meal",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Pork"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-173",
    "date": "2026-09-30",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-17",
    "menu_item": {
      "id": "item-17",
      "name": "Quorn Roast",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Milk",
        "Egg"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-174",
    "date": "2026-09-30",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-175",
    "date": "2026-09-30",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-176",
    "date": "2026-09-30",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-177",
    "date": "2026-09-30",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-178",
    "date": "2026-09-30",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-179",
    "date": "2026-09-30",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-180",
    "date": "2026-09-30",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-181",
    "date": "2026-10-02",
    "day_of_week": "Friday",
    "menu_item_id": "item-10",
    "menu_item": {
      "id": "item-10",
      "name": "Breaded Fish",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Fish"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-182",
    "date": "2026-10-02",
    "day_of_week": "Friday",
    "menu_item_id": "item-11",
    "menu_item": {
      "id": "item-11",
      "name": "Cheese & Tomato Pizza",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-183",
    "date": "2026-10-02",
    "day_of_week": "Friday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-184",
    "date": "2026-10-02",
    "day_of_week": "Friday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-185",
    "date": "2026-10-02",
    "day_of_week": "Friday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-186",
    "date": "2026-10-02",
    "day_of_week": "Friday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-187",
    "date": "2026-10-02",
    "day_of_week": "Friday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-188",
    "date": "2026-10-02",
    "day_of_week": "Friday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-189",
    "date": "2026-10-02",
    "day_of_week": "Friday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-190",
    "date": "2026-10-05",
    "day_of_week": "Monday",
    "menu_item_id": "item-20",
    "menu_item": {
      "id": "item-20",
      "name": "Pork Meatballs in Tomato Sauce",
      "category": "Main Meal",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Soya",
        "Pork"
      ],
      "may_contain": [
        "Milk",
        "Egg",
        "Mustard",
        "Celery",
        "Sulphites"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-191",
    "date": "2026-10-05",
    "day_of_week": "Monday",
    "menu_item_id": "item-21",
    "menu_item": {
      "id": "item-21",
      "name": "Veggie Quesadilla Stack",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-192",
    "date": "2026-10-05",
    "day_of_week": "Monday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-193",
    "date": "2026-10-05",
    "day_of_week": "Monday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-194",
    "date": "2026-10-05",
    "day_of_week": "Monday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-195",
    "date": "2026-10-05",
    "day_of_week": "Monday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-196",
    "date": "2026-10-05",
    "day_of_week": "Monday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-197",
    "date": "2026-10-05",
    "day_of_week": "Monday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-198",
    "date": "2026-10-05",
    "day_of_week": "Monday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-199",
    "date": "2026-10-06",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-22",
    "menu_item": {
      "id": "item-22",
      "name": "Beef & Onion Yorkies",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk",
        "Eggs"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-200",
    "date": "2026-10-06",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-23",
    "menu_item": {
      "id": "item-23",
      "name": "Baked Veggie Samosa with Curry Sauce",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Mustard"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-201",
    "date": "2026-10-06",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-202",
    "date": "2026-10-06",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-203",
    "date": "2026-10-06",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-204",
    "date": "2026-10-06",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-205",
    "date": "2026-10-06",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-206",
    "date": "2026-10-06",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-207",
    "date": "2026-10-06",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-208",
    "date": "2026-10-07",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-24",
    "menu_item": {
      "id": "item-24",
      "name": "Sliced Pork & Apple Sauce",
      "category": "Main Meal",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Pork"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-209",
    "date": "2026-10-07",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-17",
    "menu_item": {
      "id": "item-17",
      "name": "Quorn Roast",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Milk",
        "Egg"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-210",
    "date": "2026-10-07",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-211",
    "date": "2026-10-07",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-212",
    "date": "2026-10-07",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-213",
    "date": "2026-10-07",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-214",
    "date": "2026-10-07",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-215",
    "date": "2026-10-07",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-216",
    "date": "2026-10-07",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-217",
    "date": "2026-10-08",
    "day_of_week": "Thursday",
    "menu_item_id": "item-25",
    "menu_item": {
      "id": "item-25",
      "name": "Chicken & Vegetable Pie",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya",
        "Mustard",
        "Lupin"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-218",
    "date": "2026-10-08",
    "day_of_week": "Thursday",
    "menu_item_id": "item-26",
    "menu_item": {
      "id": "item-26",
      "name": "Veggie Lasagne",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-219",
    "date": "2026-10-08",
    "day_of_week": "Thursday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-220",
    "date": "2026-10-08",
    "day_of_week": "Thursday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-221",
    "date": "2026-10-08",
    "day_of_week": "Thursday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-222",
    "date": "2026-10-08",
    "day_of_week": "Thursday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-223",
    "date": "2026-10-08",
    "day_of_week": "Thursday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-224",
    "date": "2026-10-08",
    "day_of_week": "Thursday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-225",
    "date": "2026-10-08",
    "day_of_week": "Thursday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-226",
    "date": "2026-10-09",
    "day_of_week": "Friday",
    "menu_item_id": "item-10",
    "menu_item": {
      "id": "item-10",
      "name": "Breaded Fish",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Fish"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-227",
    "date": "2026-10-09",
    "day_of_week": "Friday",
    "menu_item_id": "item-11",
    "menu_item": {
      "id": "item-11",
      "name": "Cheese & Tomato Pizza",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-228",
    "date": "2026-10-09",
    "day_of_week": "Friday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-229",
    "date": "2026-10-09",
    "day_of_week": "Friday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-230",
    "date": "2026-10-09",
    "day_of_week": "Friday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-231",
    "date": "2026-10-09",
    "day_of_week": "Friday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-232",
    "date": "2026-10-09",
    "day_of_week": "Friday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-233",
    "date": "2026-10-09",
    "day_of_week": "Friday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-234",
    "date": "2026-10-09",
    "day_of_week": "Friday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-235",
    "date": "2026-10-12",
    "day_of_week": "Monday",
    "menu_item_id": "item-27",
    "menu_item": {
      "id": "item-27",
      "name": "Chicken Pasta Bake",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1621996346565-e3d5d6281292?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-236",
    "date": "2026-10-12",
    "day_of_week": "Monday",
    "menu_item_id": "item-28",
    "menu_item": {
      "id": "item-28",
      "name": "Cheese & Onion Lattice",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk",
        "Soya",
        "Mustard"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-237",
    "date": "2026-10-12",
    "day_of_week": "Monday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-238",
    "date": "2026-10-12",
    "day_of_week": "Monday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-239",
    "date": "2026-10-12",
    "day_of_week": "Monday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-240",
    "date": "2026-10-12",
    "day_of_week": "Monday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-241",
    "date": "2026-10-12",
    "day_of_week": "Monday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-242",
    "date": "2026-10-12",
    "day_of_week": "Monday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-243",
    "date": "2026-10-12",
    "day_of_week": "Monday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-244",
    "date": "2026-10-13",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-29",
    "menu_item": {
      "id": "item-29",
      "name": "Beef & Onion Pie",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat"
      ],
      "may_contain": [
        "Soya",
        "Mustard",
        "Lupin"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-245",
    "date": "2026-10-13",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-30",
    "menu_item": {
      "id": "item-30",
      "name": "Crustless Quiche",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Milk",
        "Eggs"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-246",
    "date": "2026-10-13",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-247",
    "date": "2026-10-13",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-248",
    "date": "2026-10-13",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-249",
    "date": "2026-10-13",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-250",
    "date": "2026-10-13",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-251",
    "date": "2026-10-13",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-252",
    "date": "2026-10-13",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-253",
    "date": "2026-10-14",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-31",
    "menu_item": {
      "id": "item-31",
      "name": "Sliced Roast Chicken & Stuffing",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-254",
    "date": "2026-10-14",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-17",
    "menu_item": {
      "id": "item-17",
      "name": "Quorn Roast",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Milk",
        "Egg"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-255",
    "date": "2026-10-14",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-256",
    "date": "2026-10-14",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-257",
    "date": "2026-10-14",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-258",
    "date": "2026-10-14",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-259",
    "date": "2026-10-14",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-260",
    "date": "2026-10-14",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-261",
    "date": "2026-10-14",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-262",
    "date": "2026-10-15",
    "day_of_week": "Thursday",
    "menu_item_id": "item-32",
    "menu_item": {
      "id": "item-32",
      "name": "Ham & Cheese Tortilla",
      "category": "Main Meal",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Milk",
        "Pork"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-263",
    "date": "2026-10-15",
    "day_of_week": "Thursday",
    "menu_item_id": "item-2",
    "menu_item": {
      "id": "item-2",
      "name": "Three Bean Chilli non Carne",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [
        "Wheat",
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-264",
    "date": "2026-10-15",
    "day_of_week": "Thursday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-265",
    "date": "2026-10-15",
    "day_of_week": "Thursday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-266",
    "date": "2026-10-15",
    "day_of_week": "Thursday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-267",
    "date": "2026-10-15",
    "day_of_week": "Thursday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-268",
    "date": "2026-10-15",
    "day_of_week": "Thursday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-269",
    "date": "2026-10-15",
    "day_of_week": "Thursday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-270",
    "date": "2026-10-15",
    "day_of_week": "Thursday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-271",
    "date": "2026-10-16",
    "day_of_week": "Friday",
    "menu_item_id": "item-10",
    "menu_item": {
      "id": "item-10",
      "name": "Breaded Fish",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Fish"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-272",
    "date": "2026-10-16",
    "day_of_week": "Friday",
    "menu_item_id": "item-11",
    "menu_item": {
      "id": "item-11",
      "name": "Cheese & Tomato Pizza",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-273",
    "date": "2026-10-16",
    "day_of_week": "Friday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-274",
    "date": "2026-10-16",
    "day_of_week": "Friday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-275",
    "date": "2026-10-16",
    "day_of_week": "Friday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-276",
    "date": "2026-10-16",
    "day_of_week": "Friday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-277",
    "date": "2026-10-16",
    "day_of_week": "Friday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-278",
    "date": "2026-10-16",
    "day_of_week": "Friday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-279",
    "date": "2026-10-16",
    "day_of_week": "Friday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-280",
    "date": "2026-10-19",
    "day_of_week": "Monday",
    "menu_item_id": "item-12",
    "menu_item": {
      "id": "item-12",
      "name": "Tuna Melt",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk",
        "Fish"
      ],
      "may_contain": [
        "Sesame"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-281",
    "date": "2026-10-19",
    "day_of_week": "Monday",
    "menu_item_id": "item-13",
    "menu_item": {
      "id": "item-13",
      "name": "Mac & Cheese",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-282",
    "date": "2026-10-19",
    "day_of_week": "Monday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-283",
    "date": "2026-10-19",
    "day_of_week": "Monday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-284",
    "date": "2026-10-19",
    "day_of_week": "Monday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-285",
    "date": "2026-10-19",
    "day_of_week": "Monday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-286",
    "date": "2026-10-19",
    "day_of_week": "Monday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-287",
    "date": "2026-10-19",
    "day_of_week": "Monday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-288",
    "date": "2026-10-19",
    "day_of_week": "Monday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-289",
    "date": "2026-10-20",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-14",
    "menu_item": {
      "id": "item-14",
      "name": "Chicken Curry (Tikka)",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Celery"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-290",
    "date": "2026-10-20",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-33",
    "menu_item": {
      "id": "item-33",
      "name": "Veggie Enchiladas",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1534352956036-cd61c79315e6?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-291",
    "date": "2026-10-20",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-292",
    "date": "2026-10-20",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-293",
    "date": "2026-10-20",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-294",
    "date": "2026-10-20",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-295",
    "date": "2026-10-20",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-296",
    "date": "2026-10-20",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-297",
    "date": "2026-10-20",
    "day_of_week": "Tuesday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-298",
    "date": "2026-10-21",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-16",
    "menu_item": {
      "id": "item-16",
      "name": "Sliced Gammon",
      "category": "Main Meal",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Pork"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-299",
    "date": "2026-10-21",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-17",
    "menu_item": {
      "id": "item-17",
      "name": "Quorn Roast",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Milk",
        "Egg"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-300",
    "date": "2026-10-21",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-301",
    "date": "2026-10-21",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-302",
    "date": "2026-10-21",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-303",
    "date": "2026-10-21",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-304",
    "date": "2026-10-21",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-305",
    "date": "2026-10-21",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-306",
    "date": "2026-10-21",
    "day_of_week": "Wednesday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-307",
    "date": "2026-10-22",
    "day_of_week": "Thursday",
    "menu_item_id": "item-18",
    "menu_item": {
      "id": "item-18",
      "name": "Beef Bolognese Pasta",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1621996346565-e3d5d6281292?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-308",
    "date": "2026-10-22",
    "day_of_week": "Thursday",
    "menu_item_id": "item-19",
    "menu_item": {
      "id": "item-19",
      "name": "Cheese & Bean Puffs",
      "category": "Vegetarian",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya",
        "Mustard",
        "Lupin"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-309",
    "date": "2026-10-22",
    "day_of_week": "Thursday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-310",
    "date": "2026-10-22",
    "day_of_week": "Thursday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-311",
    "date": "2026-10-22",
    "day_of_week": "Thursday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-312",
    "date": "2026-10-22",
    "day_of_week": "Thursday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-313",
    "date": "2026-10-22",
    "day_of_week": "Thursday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-314",
    "date": "2026-10-22",
    "day_of_week": "Thursday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-315",
    "date": "2026-10-22",
    "day_of_week": "Thursday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-316",
    "date": "2026-10-23",
    "day_of_week": "Friday",
    "menu_item_id": "item-10",
    "menu_item": {
      "id": "item-10",
      "name": "Breaded Fish",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Fish"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-317",
    "date": "2026-10-23",
    "day_of_week": "Friday",
    "menu_item_id": "item-11",
    "menu_item": {
      "id": "item-11",
      "name": "Cheese & Tomato Pizza",
      "category": "Main Meal",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Milk"
      ],
      "may_contain": [
        "Soya"
      ],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-318",
    "date": "2026-10-23",
    "day_of_week": "Friday",
    "menu_item_id": "item-3",
    "menu_item": {
      "id": "item-3",
      "name": "Jacket Potato with Various Fillings",
      "category": "Jacket Potato",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-319",
    "date": "2026-10-23",
    "day_of_week": "Friday",
    "menu_item_id": "item-4",
    "menu_item": {
      "id": "item-4",
      "name": "Ham Sandwich",
      "category": "Sandwich",
      "contains_pork": true,
      "is_halal_suitable": false,
      "allergens": [
        "Wheat",
        "Pork",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-320",
    "date": "2026-10-23",
    "day_of_week": "Friday",
    "menu_item_id": "item-5",
    "menu_item": {
      "id": "item-5",
      "name": "Cheese Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Dairy",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-321",
    "date": "2026-10-23",
    "day_of_week": "Friday",
    "menu_item_id": "item-6",
    "menu_item": {
      "id": "item-6",
      "name": "Tuna Mayo Sandwich",
      "category": "Sandwich",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [
        "Wheat",
        "Egg",
        "Fish",
        "Soya"
      ],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-322",
    "date": "2026-10-23",
    "day_of_week": "Friday",
    "menu_item_id": "item-7",
    "menu_item": {
      "id": "item-7",
      "name": "Gluten Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-323",
    "date": "2026-10-23",
    "day_of_week": "Friday",
    "menu_item_id": "item-8",
    "menu_item": {
      "id": "item-8",
      "name": "Dairy & Egg Free Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
    }
  },
  {
    "id": "daily-324",
    "date": "2026-10-23",
    "day_of_week": "Friday",
    "menu_item_id": "item-9",
    "menu_item": {
      "id": "item-9",
      "name": "Vegan Meal",
      "category": "Dietary Alternative",
      "contains_pork": false,
      "is_halal_suitable": true,
      "allergens": [],
      "may_contain": [],
      "price": 2.7,
      "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  }
];
