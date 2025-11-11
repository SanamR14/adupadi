import React, { useState, useEffect } from "react";
import { MenuItemType, CategoryType, Language } from "../types";
import {
  getAvailableCategories,
  getCurrentMenuType,
} from "../utils/menuTimeUtils";
import { useCart } from "../context/CartContext";
import MenuItem from "./MenuItem";
import "./FoodMenu.css";

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
  categories,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [currentMenuType, setCurrentMenuType] = useState<"breakfast" | "lunch">(
    "breakfast"
  );

  const { addItem, removeItem, getItemQuantity } = useCart();

  useEffect(() => {
    const availableCats = getAvailableCategories();
    const menuType = getCurrentMenuType();
    setAvailableCategories(availableCats);
    setCurrentMenuType(menuType);
    setSelectedCategory(availableCats[0]);
  }, []);

  const filteredItems =
    selectedCategory === "all"
      ? menuItems.filter((item) => availableCategories.includes(item.category))
      : menuItems.filter((item) => item.category === selectedCategory);

  const availableCategoryObjects = categories.filter((cat) =>
    availableCategories.includes(cat.id)
  );

  const getMenuTypeDisplay = () => {
    if (currentMenuType === "breakfast") {
      return language === "en" ? "Breakfast Menu" : "காலை உணவு பட்டியல்";
    } else {
      return language === "en" ? "Lunch Menu" : "மதிய உணவு பட்டியல்";
    }
  };

  const getTimeMessage = () => {
    if (currentMenuType === "breakfast") {
      return language === "en"
        ? "Breakfast served until 12:00 PM"
        : "காலை 12 மணி வரை காலை உணவு";
    } else {
      return language === "en"
        ? "Lunch served from 12:00 PM"
        : "மதியம் 12 மணி முதல் மதிய உணவு";
    }
  };

  const handleAddToCart = (cartItem: any) => {
    addItem(cartItem);
  };

  const handleRemoveFromCart = (itemId: string) => {
    removeItem(itemId);
  };

  return (
    <div className="food-menu">
      <div className="menu-time-info">
        <h2 className="current-menu-type">{getMenuTypeDisplay()}</h2>
        <p className="time-message">{getTimeMessage()}</p>
      </div>

      <div className="menu-categories">
        <button
          className={`category-btn main-category-btn ${
            selectedCategory === "all" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          {language === "en" ? "All Items" : "அனைத்து உணவுகள்"}
        </button>

        {availableCategoryObjects.map((category) => (
          <button
            key={category.id}
            className={`category-btn main-category-btn ${
              selectedCategory === category.id ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name[language]}
          </button>
        ))}
      </div>

      <div className="menu-items">
        {filteredItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            language={language}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            cartQuantity={getItemQuantity(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
