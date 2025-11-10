import React, { useState } from "react";
import "./App.css";

// Types
interface MenuItemType {
  id: string;
  name: { en: string; ta: string };
  description?: { en: string; ta: string };
  price: number;
  category: "breakfast" | "lunch" | "specials" | "drinks";
  image?: string;
}

interface CategoryType {
  id: "breakfast" | "lunch" | "specials" | "drinks";
  name: { en: string; ta: string };
}

// Data
const categories: CategoryType[] = [
  { id: "breakfast", name: { en: "Breakfast", ta: "காலை உணவு" } },
  { id: "lunch", name: { en: "Lunch", ta: "மதிய உணவு" } },
  { id: "specials", name: { en: "Specials", ta: "சிறப்பு உணவுகள்" } },
  { id: "drinks", name: { en: "Drinks", ta: "பானங்கள்" } },
];

const menuItems: MenuItemType[] = [
  // ... (your menu items remain the same as before)
  // Breakfast Items
  {
    id: "1",
    name: { en: "Idly", ta: "இட்லி" },
    description: { en: "Steamed rice cakes", ta: "வேகவைத்த அரிசி கேக்குகள்" },
    price: 40,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
  },
  {
    id: "2",
    name: { en: "Dosa", ta: "தோசை" },
    description: {
      en: "Crispy fermented crepe",
      ta: "முறுக்கான புளித்த மாவு தோசை",
    },
    price: 50,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
  },
  // ... Add all your other menu items here
];

// ADD YOUR IMAGE PATHS HERE:
const APP_IMAGES = {
  logo: "/images/poster.jpg", // Replace with your logo path
  background: "/images/poster.jpg", // Replace with your background path
  poster: "/images/poster.jpg", // Replace with your poster path
  englishBackground: "/images/poster.jpg", // Optional: specific background for English
  tamilBackground: "/images/poster.jpg", // Optional: specific background for Tamil
};

// Components
const LanguageSelection = ({
  onLanguageSelect,
}: {
  onLanguageSelect: (lang: "en" | "ta") => void;
}) => {
  return (
    <div className="language-selection">
      <div
        className="door english-door"
        onClick={() => onLanguageSelect("en")}
        style={{
          backgroundImage: `url(${
            APP_IMAGES.englishBackground || APP_IMAGES.background
          })`,
        }}
      >
        <div className="door-content">
          {/* ADD YOUR LOGO HERE */}
          <div className="logo-container">
            <img src={APP_IMAGES.logo} alt="App Logo" className="app-logo" />
          </div>
          <h1>English</h1>
          <p>Click to continue in English</p>
        </div>
      </div>
      <div
        className="door tamil-door"
        onClick={() => onLanguageSelect("ta")}
        style={{
          backgroundImage: `url(${
            APP_IMAGES.tamilBackground || APP_IMAGES.background
          })`,
        }}
      >
        <div className="door-content">
          {/* ADD YOUR LOGO HERE */}
          <div className="logo-container">
            <img src={APP_IMAGES.logo} alt="App Logo" className="app-logo" />
          </div>
          <h1>தமிழ்</h1>
          <p>தமிழில் தொடர கிளிக் செய்யவும்</p>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

const MenuItem = ({
  item,
  language,
}: {
  item: MenuItemType;
  language: "en" | "ta";
}) => {
  return (
    <div className="menu-item">
      <div
        className="item-image"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className="item-details">
        <div className="item-name">{item.name[language]}</div>
        {item.description && (
          <div className="item-description">{item.description[language]}</div>
        )}
        <div className="item-price">₹{item.price}</div>
      </div>
    </div>
  );
};

const FoodMenu = ({
  language,
  onLanguageChange,
  menuItems,
  categories,
}: {
  language: "en" | "ta";
  onLanguageChange: (lang: "en" | "ta") => void;
  menuItems: MenuItemType[];
  categories: CategoryType[];
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div
      className="food-menu-container"
      style={{
        backgroundImage: `url(${APP_IMAGES.background})`,
      }}
    >
      <div className="food-menu">
        <div className="menu-header">
          {/* ADD YOUR LOGO IN HEADER */}
          <div className="header-logo">
            <img
              src={APP_IMAGES.logo}
              alt="Restaurant Logo"
              className="restaurant-logo"
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

        <div className="menu-categories">
          <button
            className={`category-btn ${
              selectedCategory === "all" ? "active" : ""
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            {language === "en" ? "All Items" : "அனைத்து உணவுகள்"}
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${
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
            <MenuItem key={item.id} item={item} language={language} />
          ))}
        </div>

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

// Main App Component
function App() {
  const [language, setLanguage] = useState<"en" | "ta" | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageSelect = (selectedLanguage: "en" | "ta") => {
    setLanguage(selectedLanguage);
    setTimeout(() => setShowMenu(true), 800);
  };

  const handleLanguageChange = (newLanguage: "en" | "ta") => {
    setLanguage(newLanguage);
  };

  if (!language || !showMenu) {
    return <LanguageSelection onLanguageSelect={handleLanguageSelect} />;
  }

  return (
    <FoodMenu
      language={language}
      onLanguageChange={handleLanguageChange}
      menuItems={menuItems}
      categories={categories}
    />
  );
}

export default App;
