import { BakeryItem, MenuItem, Testimonial } from "@/types/bakery";

export const FEATURED_CREATIONS: BakeryItem[] = [
  {
    id: "cupcake-mint-choco",
    name: "Mint Dark Cocoa Cupcake",
    category: "cupcakes",
    price: 180,
    rating: 4.9,
    reviewsCount: 128,
    description:
      "Rich Valrhona dark chocolate sponge topped with silky whipped mint ganache, organic cacao nibs, and a fresh garden mint leaf.",
    image:
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=800&q=80",
    backdropColor: "bg-[#E8F3EB]",
    textColor: "text-[#1C4532]",
    badge: "Bestseller",
    ingredients: [
      "Valrhona 70% Dark Chocolate",
      "Organic Pasture Eggs",
      "Pure Mint Extract",
      "Grass-Fed Butter",
      "Cane Sugar",
    ],
    allergens: ["Eggs", "Dairy", "Gluten"],
    calories: 320,
    weight: "110g",
    isPopular: true,
  },
  {
    id: "cookie-peanut-crunch",
    name: "Peanut Butter Crunch Cookies",
    category: "cookies",
    price: 140,
    rating: 4.8,
    reviewsCount: 94,
    description:
      "Tender, melt-in-your-mouth cookie rounds packed with slow-roasted Virginia peanuts, Maldon sea salt flakes, and raw honeycomb crunch.",
    image:
      "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
    backdropColor: "bg-[#FDEEE9]",
    textColor: "text-[#7B241C]",
    badge: "Signature",
    ingredients: [
      "Slow-Roasted Peanuts",
      "Maldon Flaky Salt",
      "Cultured Butter",
      "Organic Brown Sugar",
      "Madagascar Vanilla",
    ],
    allergens: ["Peanuts", "Dairy", "Gluten"],
    calories: 260,
    weight: "95g",
    isPopular: true,
  },
  {
    id: "doughnut-pistachio-cocoa",
    name: "Pistachio Glaze Cocoa Doughnut",
    category: "doughnuts",
    price: 190,
    rating: 5.0,
    reviewsCount: 215,
    description:
      "Brioche-style ring doughnut dipped in bittersweet Belgian chocolate and laced with Bronte pistachio cream drizzle and roasted crush.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
    backdropColor: "bg-[#FEF2E4]",
    textColor: "text-[#873600]",
    badge: "Chef's Pick",
    ingredients: [
      "24hr Fermented Brioche Dough",
      "Sicilian Pistachio Butter",
      "Callebaut Cocoa",
      "Vanilla Bean Glaze",
    ],
    allergens: ["Tree Nuts", "Gluten", "Dairy", "Eggs"],
    calories: 380,
    weight: "125g",
    isPopular: true,
  },
  {
    id: "pastry-butter-croissant",
    name: "Artisan Pain au Chocolat & Pastries",
    category: "pastries",
    price: 220,
    rating: 4.9,
    reviewsCount: 164,
    description:
      "Golden, ultra-flaky 81-layer laminated pastry filled with double batons of semi-sweet dark chocolate and baked to a crisp caramel sheen.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    backdropColor: "bg-[#EAF3F8]",
    textColor: "text-[#1B4F72]",
    badge: "Fresh Baked",
    ingredients: [
      "Normandy AOP Butter",
      "Stone-Ground T55 Flour",
      "Dark Cocoa Batons",
      "Natural Sourdough Starter",
    ],
    allergens: ["Gluten", "Dairy"],
    calories: 340,
    weight: "115g",
    isPopular: true,
  },
  {
    id: "bread-rustic-sourdough",
    name: "Country Hearth Sourdough",
    category: "breads",
    price: 280,
    rating: 4.9,
    reviewsCount: 310,
    description:
      "Slow 36-hour cold-fermented wild sourdough with a blistered mahogany crust, custard-like crumb, and subtle lactic tang.",
    image:
      "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    backdropColor: "bg-[#FDF6E2]",
    textColor: "text-[#7D6608]",
    badge: "Wild Ferment",
    ingredients: [
      "Organic Whole Spelt Flour",
      "Unbleached Bread Flour",
      "Filtered Well Water",
      "Natural Leaven",
      "Sea Salt",
    ],
    allergens: ["Gluten"],
    calories: 190,
    weight: "800g",
  },
  {
    id: "cookie-molten-lava",
    name: "Molten Fudge Brownie Cookie",
    category: "cookies",
    price: 160,
    rating: 5.0,
    reviewsCount: 412,
    description:
      "Crisp exterior yielding to a warm, oozing center of melted Belgian dark chocolate ganache and roasted walnuts.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    backdropColor: "bg-[#F7EDE2]",
    textColor: "text-[#512E1B]",
    badge: "Most Loved",
    ingredients: [
      "Callebaut 811 Dark Chocolate",
      "Walnuts",
      "Brown Butter",
      "Espresso Powder",
      "Sea Salt",
    ],
    allergens: ["Tree Nuts", "Dairy", "Eggs", "Gluten"],
    calories: 310,
    weight: "120g",
    isSpecial: true,
  },
];

export const MENU_CATEGORIES = [
  "Appetizers",
  "Main Courses",
  "Desserts",
  "Beverages",
  "Kids' Menu",
  "Seasonal Specials",
] as const;

export const CRAFTED_MENU_ITEMS: Record<string, MenuItem[]> = {
  Appetizers: [
    {
      id: "app-1",
      name: "Truffle Brioche Bites",
      category: "Appetizers",
      price: 240,
      description:
        "Bite-sized toasted brioche cubes drizzled with black winter truffle oil, parmesan snow, and fresh thyme.",
      image:
        "https://images.unsplash.com/photo-1541533848490-bc8115cd6522?auto=format&fit=crop&w=500&q=80",
      badge: "Popular",
    },
    {
      id: "app-2",
      name: "Garlic Rosemary Focaccia",
      category: "Appetizers",
      price: 190,
      description:
        "Warm sourdough focaccia with blistered cherry tomatoes, roasted garlic cloves, and extra virgin olive oil.",
      image:
        "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "app-3",
      name: "Aged Cheddar & Herb Scones",
      category: "Appetizers",
      price: 160,
      description:
        "Flaky savory scones with 18-month sharp cheddar cheese, scallions, and whipped honey-dijon butter.",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
    },
  ],
  "Main Courses": [
    {
      id: "main-1",
      name: "Heirloom Sourdough Panini Melt",
      category: "Main Courses",
      price: 320,
      description:
        "Smoked prosciutto, fresh buffalo mozzarella, sun-ripened pesto, and wild arugula pressed on golden sourdough.",
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80",
      badge: "House Specialty",
    },
    {
      id: "main-2",
      name: "Traditional Quiche Lorraine",
      category: "Main Courses",
      price: 280,
      description:
        "Flaky butter crust with silky custard filling, smoked bacon lardons, caramelized shallots, and Gruyère.",
      image:
        "https://images.unsplash.com/photo-1621236378699-8597fee6a1ce?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "main-3",
      name: "Avocado & Poached Egg Brioche",
      category: "Main Courses",
      price: 290,
      description:
        "Toasted thick-cut brioche topped with crushed Hass avocado, free-range poached egg, chili crisp, and microgreens.",
      image:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80",
    },
  ],
  Desserts: [
    {
      id: "des-1",
      name: "Triple Chocolate Lava Cake",
      category: "Desserts",
      price: 260,
      description:
        "Warm molten center cake crafted with 72% Araguani chocolate, served with house-churned Tahitian vanilla bean gelato.",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
      badge: "Must Try",
    },
    {
      id: "des-2",
      name: "San Sebastián Basque Cheesecake",
      category: "Desserts",
      price: 280,
      description:
        "Caramelized burnt crust outside with an ultra-creamy, custard center, served with warm raspberry coulis.",
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "des-3",
      name: "Parisian Pistachio Tart",
      category: "Desserts",
      price: 250,
      description:
        "Crisp almond pate sablee filled with roasted pistachio praline and whipped white chocolate pistachio ganache.",
      image:
        "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=500&q=80",
    },
  ],
  Beverages: [
    {
      id: "bev-1",
      name: "Artisan Cardamom Chai Latte",
      category: "Beverages",
      price: 140,
      description:
        "Slow-simmered Assam black tea with freshly cracked green cardamom pods, ginger, cinnamon, and velvety oat milk.",
      image:
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=80",
      badge: "Organic",
    },
    {
      id: "bev-2",
      name: "Bourbon Vanilla Cold Foam Brew",
      category: "Beverages",
      price: 180,
      description:
        "20-hour Ethiopian single-origin cold brew topped with aerated Madagascar bourbon vanilla sweet cream.",
      image:
        "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "bev-3",
      name: "Valrhona Drinking Chocolate",
      category: "Beverages",
      price: 190,
      description:
        "Thick, velvety European-style hot chocolate whipped with heavy cream and topped with toasted marshmallow cream.",
      image:
        "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=500&q=80",
    },
  ],
  "Kids' Menu": [
    {
      id: "kid-1",
      name: "Mini Confetti Rainbow Cupcakes",
      category: "Kids' Menu",
      price: 120,
      description:
        "Trio of fluffy vanilla bite cupcakes filled with naturally colored rainbow sprinkles and whipped strawberry frosting.",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "kid-2",
      name: "Cinnamon Doughnut Holes Bucket",
      category: "Kids' Menu",
      price: 160,
      description:
        "Warm pillowy bite-sized doughnut drops tossed in organic cinnamon sugar with warm salted caramel dip.",
      image:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80",
    },
  ],
  "Seasonal Specials": [
    {
      id: "sea-1",
      name: "Glazed Maple Pecan Cruffin",
      category: "Seasonal Specials",
      price: 220,
      description:
        "Croissant dough baked in a muffin mold, stuffed with maple cream cheese and capped with candied pecans.",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
      badge: "Autumn Special",
    },
    {
      id: "sea-2",
      name: "Honey Roasted Fig Danish",
      category: "Seasonal Specials",
      price: 210,
      description:
        "Flaky puff pastry lattice nested with fresh black mission figs, whipped goat cheese, and wildflower honey.",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80",
    },
  ],
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Elena Rostova",
    role: "Local Food Critic",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "The molten brownie cookies at Ambika are an absolute revelation. You can literally smell the slow brown butter and roasted pecans from a block away. Perfection!",
    favoriteItem: "Molten Fudge Brownie Cookie",
  },
  {
    id: "test-2",
    name: "Marcus Vance",
    role: "Morning Regular & Coffee Roaster",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "Their wild hearth sourdough has completely spoiled me for any other bakery in the city. The crust has that distinctive blister and the crumb is delightfully airy.",
    favoriteItem: "Country Hearth Sourdough",
  },
  {
    id: "test-3",
    name: "Sofia Rodriguez",
    role: "Pastry Enthusiast",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "Booked a weekend table for my sister's birthday brunch. The service was warm, the pistachio doughnuts were cloud-soft, and the atmosphere was cozy perfection.",
    favoriteItem: "Pistachio Glaze Cocoa Doughnut",
  },
  {
    id: "test-4",
    name: "David Chen",
    role: "Seattle Tech Architect",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "We order catering boxes of the peanut butter cookies and brioche bites for our office every Friday morning. The team devours them in under ten minutes!",
    favoriteItem: "Peanut Butter Crunch Cookies",
  },
];
