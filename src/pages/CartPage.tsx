import React from 'react';
import { Language } from '../types';
import { useCart } from '../context/CartContext';
import './CartPage.css';

interface CartPageProps {
  language: Language;
  onBackToMenu: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ language, onBackToMenu }) => {
  const { cart, addItem, removeItem, clearCart } = useCart();

  const handleIncrement = (cartItem: any) => {
    addItem({
      item: cartItem.item,
      quantity: cartItem.quantity + 1
    });
  };

  const handleDecrement = (cartItem: any) => {
    if (cartItem.quantity > 1) {
      addItem({
        item: cartItem.item,
        quantity: cartItem.quantity - 1
      });
    } else {
      removeItem(cartItem.item.id);
    }
  };

  const handleRemove = (itemId: string) => {
    removeItem(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  if (cart.items.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-header">
          <button className="back-btn" onClick={onBackToMenu}>
            ← {language === 'en' ? 'Back to Menu' : 'மெனுவிற்கு திரும்பு'}
          </button>
          <h1>{language === 'en' ? 'Cart' : 'கார்ட்'}</h1>
        </div>
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>{language === 'en' ? 'Your cart is empty' : 'உங்கள் கார்ட் காலியாக உள்ளது'}</h2>
          <p>{language === 'en' ? 'Add some delicious items to get started!' : 'சுவையான உணவுகளை சேர்க்க தொடங்குங்கள்!'}</p>
          <button className="continue-shopping-btn" onClick={onBackToMenu}>
            {language === 'en' ? 'Continue Shopping' : 'ஷாப்பிங் தொடரவும்'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <button className="back-btn" onClick={onBackToMenu}>
          ← {language === 'en' ? 'Back to Menu' : 'மெனுவிற்கு திரும்பு'}
        </button>
        <h1>{language === 'en' ? 'Cart' : 'கார்ட்'}</h1>
        <button className="clear-cart-btn" onClick={handleClearCart}>
          {language === 'en' ? 'Clear Cart' : 'கார்ட்டை காலி செய்'}
        </button>
      </div>

      <div className="cart-items">
        {cart.items.map((cartItem) => (
          <div key={cartItem.item.id} className="cart-item">
            <div className="cart-item-info">
              <h3 className="cart-item-name">{cartItem.item.name[language]}</h3>
              <p className="cart-item-price">₹{cartItem.item.price} × {cartItem.quantity}</p>
              <p className="cart-item-total">₹{cartItem.item.price * cartItem.quantity}</p>
            </div>
            
            <div className="cart-item-controls">
              <div className="cart-quantity-controls">
                <button 
                  className="cart-quantity-btn minus" 
                  onClick={() => handleDecrement(cartItem)}
                >
                  -
                </button>
                <span className="cart-quantity-display">{cartItem.quantity}</span>
                <button 
                  className="cart-quantity-btn plus" 
                  onClick={() => handleIncrement(cartItem)}
                >
                  +
                </button>
              </div>
              <button 
                className="remove-item-btn"
                onClick={() => handleRemove(cartItem.item.id)}
              >
                {language === 'en' ? 'Remove' : 'நீக்கு'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <span className="total-label">{language === 'en' ? 'Total Amount:' : 'மொத்த தொகை:'}</span>
          <span className="total-amount">₹{cart.total}</span>
        </div>
        
        <div className="cart-actions">
          <button className="continue-shopping-btn" onClick={onBackToMenu}>
            {language === 'en' ? 'Continue Shopping' : 'ஷாப்பிங் தொடரவும்'}
          </button>
          <button className="checkout-btn">
            {language === 'en' ? 'Proceed to Checkout' : 'செக்அவுட்டிற்கு செல்லவும்'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;