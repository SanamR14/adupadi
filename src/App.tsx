import React, { useState } from "react";
import { Language } from "./types";
import { menuItems, categories } from "./data/menuData";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  const [language, setLanguage] = useState<Language | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageSelect = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
    setTimeout(() => setShowMenu(true), 800);
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  if (!language || !showMenu) {
    return <LandingPage onLanguageSelect={handleLanguageSelect} />;
  }

  return (
    <CartProvider>
      <HomePage
        language={language}
        onLanguageChange={handleLanguageChange}
        menuItems={menuItems}
        categories={categories}
      />
    </CartProvider>
  );
}

export default App;
