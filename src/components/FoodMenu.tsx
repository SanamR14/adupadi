import React, { useState } from 'react';
import { MenuItemType, CategoryType, Language } from '../types';
import MenuItem from './MenuItem';
import './FoodMenu.css';

interface FoodMenuProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  menuItems: MenuItemType[];
  categories: CategoryType[];
}

const FoodMenu: React.FC<FoodMenuProps> = ({ 
  language, 
  onLanguageChange, 
  menuItems, 
  categories 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="food-menu">
      <div className="menu-categories">
        <button 
          className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          {language === 'en' ? 'All Items' : 'அனைத்து உணவுகள்'}
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name[language]}
          </button>
        ))}
      </div>
      
      <div className="menu-items">
        {filteredItems.map(item => (
          <MenuItem 
            key={item.id} 
            item={item} 
            language={language} 
          />
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;