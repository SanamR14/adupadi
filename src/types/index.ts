export interface MenuItemType {
  id: string;
  name: { en: string; ta: string };
  description?: { en: string; ta: string };
  price: number;
  category: 'breakfast' | 'lunch' | 'breakfast-specials' | 'lunch-specials' |'addons'| 'breakfast-box' | 'lunch-box';
  image?: string;
}

export interface CategoryType {
  id: 'breakfast' | 'lunch' | 'breakfast-specials' | 'lunch-specials' |'addons'| 'breakfast-box' | 'lunch-box';
  name: { en: string; ta: string };
}

export type Language = 'en' | 'ta';