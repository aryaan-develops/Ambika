export interface BakeryItem {
  id: string;
  name: string;
  category: 'cupcakes' | 'cookies' | 'doughnuts' | 'pastries' | 'breads' | 'beverages';
  price: number;
  rating: number;
  reviewsCount: number;
  description: string;
  image: string;
  backdropColor: string;
  textColor: string;
  badge?: string;
  ingredients: string[];
  allergens: string[];
  calories: number;
  weight: string;
  isPopular?: boolean;
  isSpecial?: boolean;
}

export interface CartItem {
  item: BakeryItem;
  quantity: number;
  customization?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Appetizers' | 'Main Courses' | 'Desserts' | 'Beverages' | "Kids' Menu" | 'Seasonal Specials';
  price: number;
  description: string;
  image: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  favoriteItem: string;
}
