export interface MenuItemType {
  id: string;
  name: { en: string; ta: string };
  description?: { en: string; ta: string };
  price: number;
  category: 'breakfast' | 'lunch' | 'specials' | 'drinks';
  image?: string;
}

export interface CategoryType {
  id: 'breakfast' | 'lunch' | 'specials' | 'drinks';
  name: { en: string; ta: string };
}

export type Language = 'en' | 'ta';