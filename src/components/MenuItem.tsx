import React, { useState } from "react";
import { MenuItemType, Language, CartItem } from "../types";
import { handleImageError, getFallbackImage } from "../utils/imageUtils";
import "./MenuItem.css";

interface MenuItemProps {
  item: MenuItemType;
  language: Language;
  onAddToCart: (cartItem: CartItem) => void;
  onRemoveFromCart: (itemId: string) => void;
  cartQuantity: number;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  language,
  onAddToCart,
  onRemoveFromCart,
  cartQuantity,
}) => {
  const [quantity, setQuantity] = useState(cartQuantity);

  const handleBackgroundError = (
    event: React.SyntheticEvent<HTMLDivElement>
  ) => {
    handleImageError(event, item.category);
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onAddToCart({
      item: item,
      quantity: newQuantity,
    });
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (newQuantity === 0) {
        onRemoveFromCart(item.id);
      } else {
        onAddToCart({
          item: item,
          quantity: newQuantity,
        });
      }
    }
  };

  const getAvailabilityInfo = () => {
    if (item.description?.[language].includes("Available on")) {
      return item.description[language];
    }
    return null;
  };

  const availabilityInfo = getAvailabilityInfo();

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
        <div className="item-header">
          <div className="item-name">{item.name[language]}</div>
          <div className="item-price">₹{item.price}</div>
        </div>

        {item.description && !availabilityInfo && (
          <div className="item-description">{item.description[language]}</div>
        )}

        {availabilityInfo && (
          <div className="availability-info">{availabilityInfo}</div>
        )}

        <div className="quantity-controls">
          <button
            className="quantity-btn minus"
            onClick={handleDecrement}
            disabled={quantity === 0}
          >
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button className="quantity-btn plus" onClick={handleIncrement}>
            +
          </button>

          {quantity > 0 && (
            <div className="item-total">₹{item.price * quantity}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
