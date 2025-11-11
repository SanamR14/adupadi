import React, { useState } from "react";
import { Language, MenuItemType, CategoryType } from "../types";
import { APP_IMAGES } from "../data/menuData";
import { getFallbackImage } from "../utils/imageUtils";
import FoodMenu from "../components/FoodMenu";
import CartPage from "./CartPage";
import { useCart } from "../context/CartContext";
import "./HomePage.css";

interface HomePageProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  menuItems: MenuItemType[];
  categories: CategoryType[];
}

const HomePage: React.FC<HomePageProps> = ({
  language,
  onLanguageChange,
  menuItems,
  categories,
}) => {
  const [showCart, setShowCart] = useState(false);
  const { cart } = useCart();

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleBackToMenu = () => {
    setShowCart(false);
  };

  if (showCart) {
    return <CartPage language={language} onBackToMenu={handleBackToMenu} />;
  }

return (
  <div
    className="home-page-container"
    style={{
      backgroundImage: `url(${
        APP_IMAGES.background || getFallbackImage("default")
      })`,
    }}
  >
    <div className="home-page">
      {/* Header Controls - Fixed at top right */}
      <div className="header-controls">
        <div
          className="language-switcher"
          onClick={() => onLanguageChange(language === "en" ? "ta" : "en")}
        >
          <span>{language === "en" ? "தமிழ்" : "English"}</span>
        </div>

        <div className="cart-icon" onClick={handleShowCart}>
          <span className="cart-icon-symbol">🛒</span>
          <span className="cart-total-amount">₹{cart.total}</span>
          {cart.items.length > 0 && (
            <span className="cart-count">{cart.items.length}</span>
          )}
        </div>
      </div>

      {/* Menu Header */}
      <div className="menu-header">
        <div className="header-logo">
          <img
            src={APP_IMAGES.logo || getFallbackImage("default")}
            alt="Restaurant Logo"
            className="restaurant-logo"
            onError={(e) => {
              e.currentTarget.src = getFallbackImage("default");
            }}
          />
        </div>
        <h1>
          {language === "en"
            ? "Delicious Food Menu"
            : "சுவையான உணவு பட்டியல்"}
        </h1>
        <p>
          {language === "en"
            ? "Fresh ingredients, authentic flavors"
            : "புதிய பொருட்கள், உண்மையான சுவைகள்"}
        </p>
      </div>

      <FoodMenu
        language={language}
        onLanguageChange={onLanguageChange}
        menuItems={menuItems}
        categories={categories}
      />
    </div>
  </div>
);
};

export default HomePage;
