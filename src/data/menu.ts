/**
 * Menu data for Sip & Bite Cafe.
 *
 * ⚠️  DEMO CONTENT — the cafe's real menu items, descriptions and prices have
 * NOT been supplied yet. Every entry below is clearly marked `demo: true` and
 * the UI labels the whole board as a sample. Replace this file's contents with
 * the owner's verified menu before launch; no component changes needed.
 *
 * To update: edit name / description / price / category / image below.
 * Set price to `null` to show "Price TBA".
 */

export type MenuCategory =
  | "Burgers"
  | "Pizza"
  | "Snacks"
  | "Coffee & Tea"
  | "Shakes & Beverages";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  /** Price in INR. `null` renders "Price TBA". */
  price: number | null;
  category: MenuCategory;
  image: string;
  alt: string;
  tags?: string[];
  badge?: string;
  /** True for placeholder items that must be replaced before launch. */
  demo: boolean;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  "Burgers",
  "Pizza",
  "Snacks",
  "Coffee & Tea",
  "Shakes & Beverages",
];

const img = (id: number, w = 940, h = 700) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const menuItems: MenuItem[] = [
  // ——— Burgers ———
  {
    id: "classic-smash-burger",
    name: "Classic Smash Burger",
    description: "Seared double patty, melted cheddar, house sauce and crisp lettuce on a toasted sesame brioche bun.",
    price: 149,
    category: "Burgers",
    image: img(36750270),
    alt: "Cheeseburgers with lettuce, tomato and fries on a wooden platter",
    tags: ["Double Patty", "House Sauce"],
    badge: "House Favourite",
    demo: true,
  },
  {
    id: "double-cheese-melt",
    name: "Double Cheese Melt",
    description: "Two flame-grilled patties smothered in gooey cheese with caramelised onions, served with skin-on fries.",
    price: 179,
    category: "Burgers",
    image: img(15523389),
    alt: "Cheeseburger with fries and dipping sauces on a wooden tray",
    tags: ["With Fries", "Cheesy"],
    demo: true,
  },

  // ——— Pizza ———
  {
    id: "margherita",
    name: "Margherita",
    description: "Slow-fermented base, San Marzano-style tomato, fresh mozzarella and basil, finished with olive oil.",
    price: 199,
    category: "Pizza",
    image: img(35068608),
    alt: "Margherita pizza topped with fresh basil on a marble surface",
    tags: ["Vegetarian", "Fresh Basil"],
    badge: "Wood-Fired",
    demo: true,
  },
  {
    id: "farmhouse-veggie",
    name: "Farmhouse Veggie",
    description: "Roasted peppers, sweet corn, red onion and mozzarella over a hand-stretched sourdough crust.",
    price: 249,
    category: "Pizza",
    image: img(27793841),
    alt: "Freshly baked vegetable pizza with mozzarella and basil",
    tags: ["Loaded", "Sourdough"],
    demo: true,
  },

  // ——— Snacks ———
  {
    id: "peri-peri-fries",
    name: "Peri Peri Fries",
    description: "Golden hand-cut potatoes tossed in smoky peri peri seasoning with a side of garlic dip.",
    price: 99,
    category: "Snacks",
    image: img(12557545),
    alt: "Crispy french fries and potato wedges with dipping sauce",
    tags: ["Spicy", "With Dip"],
    demo: true,
  },
  {
    id: "cheesy-loaded-fries",
    name: "Cheesy Loaded Fries",
    description: "Crisp fries piled under warm cheese sauce, herbs and a drizzle of chipotle mayo.",
    price: 129,
    category: "Snacks",
    image: img(12557560),
    alt: "Basket of fried snacks topped with cheese sauce",
    tags: ["Shareable", "Cheese Sauce"],
    demo: true,
  },
  {
    id: "herb-potato-wedges",
    name: "Herb Potato Wedges",
    description: "Thick-cut wedges roasted with rosemary and sea salt, served with creamy aioli.",
    price: 109,
    category: "Snacks",
    image: img(15801066),
    alt: "Top-down view of a brunch table with potato snacks and dips",
    tags: ["Roasted", "Aioli"],
    demo: true,
  },

  // ——— Coffee & Tea ———
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Double shot of house espresso under velvety steamed milk, finished with classic latte art.",
    price: 89,
    category: "Coffee & Tea",
    image: img(36094445),
    alt: "Top view of a cappuccino with leaf latte art in a cup",
    tags: ["Espresso", "Hot"],
    demo: true,
  },
  {
    id: "masala-chai",
    name: "Masala Chai",
    description: "Slow-brewed Assam tea with ginger, cardamom and warm spices — the way Punjab loves it.",
    price: 49,
    category: "Coffee & Tea",
    image: img(12865880),
    alt: "Glasses of Indian chai beside a brass kettle",
    tags: ["Slow-Brewed", "Spiced"],
    badge: "Local Love",
    demo: true,
  },
  {
    id: "iced-cold-coffee",
    name: "Iced Cold Coffee",
    description: "Chilled blended coffee over ice with a whisper of cocoa and cold froth.",
    price: 119,
    category: "Coffee & Tea",
    image: img(36602926),
    alt: "Glass of iced coffee on a coaster on a wooden cafe table",
    tags: ["Iced", "Blended"],
    demo: true,
  },

  // ——— Shakes & Beverages ———
  {
    id: "belgian-chocolate-shake",
    name: "Belgian Chocolate Shake",
    description: "Thick-blended Belgian cocoa, real dairy ice cream and a cloud of whipped cream.",
    price: 149,
    category: "Shakes & Beverages",
    image: img(29200682),
    alt: "Tall glass of chocolate milkshake topped with whipped cream",
    tags: ["Thick Shake", "Indulgent"],
    badge: "Bestseller",
    demo: true,
  },
  {
    id: "salted-caramel-shake",
    name: "Salted Caramel Shake",
    description: "Buttery caramel swirled with vanilla ice cream, finished with sea salt and drizzle.",
    price: 159,
    category: "Shakes & Beverages",
    image: img(14662100),
    alt: "Milkshakes with whipped cream and caramel drizzle on a cafe table",
    tags: ["Sweet & Salty"],
    demo: true,
  },
  {
    id: "iced-americano",
    name: "Iced Americano",
    description: "Bold espresso pulled over crystal ice — clean, cold and seriously refreshing.",
    price: 99,
    category: "Shakes & Beverages",
    image: img(37043176),
    alt: "Glass of iced americano on a rustic wooden table outdoors",
    tags: ["Black", "Iced"],
    demo: true,
  },
];

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export const formatINR = (price: number | null) =>
  price === null ? "Price TBA" : inr.format(price);
