import React from "react";
import { Language, MenuItemType, CategoryType } from "../types";
import { APP_IMAGES } from "../data/menuData";
import { getFallbackImage } from "../utils/imageUtils";
import FoodMenu from "../components/FoodMenu";
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

        <div
          className="language-switcher"
          onClick={() => onLanguageChange(language === "en" ? "ta" : "en")}
        >
          <span>{language === "en" ? "தமிழ்" : "English"}</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
