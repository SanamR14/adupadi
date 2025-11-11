import React from "react";
import { MenuItemType, Language } from "../types";
import { handleImageError, getFallbackImage } from "../utils/imageUtils";
import "./MenuItem.css";

interface MenuItemProps {
  item: MenuItemType;
  language: Language;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, language }) => {
  const handleBackgroundError = (
    event: React.SyntheticEvent<HTMLDivElement>
  ) => {
    handleImageError(event, item.category);
  };

  return (
    <div className="menu-item">
      <div
        className="item-image"
        style={{
          backgroundImage: `url(${
            item.image || getFallbackImage(item.category)
          })`,
        }}
        onError={handleBackgroundError}
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

export default MenuItem;
