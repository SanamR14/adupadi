import React, { useState } from 'react';
import { MenuItemType, Language } from '../types';
import './BoxSelection.css';

interface BoxSelectionProps {
  boxItem: MenuItemType;
  availableItems: MenuItemType[];
  language: Language;
  onClose: () => void;
  onBoxCustomized: (boxItem: MenuItemType, selections: MenuItemType[]) => void;
}

const BoxSelection: React.FC<BoxSelectionProps> = ({
  boxItem,
  availableItems,
  language,
  onClose,
  onBoxCustomized
}) => {
  const [selectedMains, setSelectedMains] = useState<MenuItemType[]>([]);
  const [selectedSides, setSelectedSides] = useState<MenuItemType[]>([]);
  const [selectedAddons, setSelectedAddons] = useState<MenuItemType[]>([]);

  const mains = availableItems.filter(item => 
    item.category === 'breakfast' || item.category === 'lunch'
  );
  
  const sides = availableItems.filter(item => 
    item.category === 'breakfast-specials' || item.category === 'lunch-specials'
  );
  
  const addons = availableItems.filter(item => item.category === 'addons');

  const toggleSelection = (item: MenuItemType, category: 'mains' | 'sides' | 'addons') => {
    switch (category) {
      case 'mains':
        if (selectedMains.find(main => main.id === item.id)) {
          setSelectedMains(selectedMains.filter(main => main.id !== item.id));
        } else if (selectedMains.length < 2) {
          setSelectedMains([...selectedMains, item]);
        }
        break;
      case 'sides':
        if (selectedSides.find(side => side.id === item.id)) {
          setSelectedSides(selectedSides.filter(side => side.id !== item.id));
        } else if (selectedSides.length < 2) {
          setSelectedSides([...selectedSides, item]);
        }
        break;
      case 'addons':
        if (selectedAddons.find(addon => addon.id === item.id)) {
          setSelectedAddons(selectedAddons.filter(addon => addon.id !== item.id));
        } else {
          setSelectedAddons([...selectedAddons, item]);
        }
        break;
    }
  };

  const isSelected = (item: MenuItemType, category: 'mains' | 'sides' | 'addons') => {
    switch (category) {
      case 'mains': return selectedMains.find(main => main.id === item.id);
      case 'sides': return selectedSides.find(side => side.id === item.id);
      case 'addons': return selectedAddons.find(addon => addon.id === item.id);
    }
  };

  const handleAddToCart = () => {
    const allSelections = [...selectedMains, ...selectedSides, ...selectedAddons];
    onBoxCustomized(boxItem, allSelections);
    onClose();
  };

  const isSelectionValid = selectedMains.length === 2 && selectedSides.length === 2;

  return (
    <div className="box-selection-overlay">
      <div className="box-selection-modal">
        <div className="box-selection-header">
          <h2>{boxItem.name[language]}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="box-description">
          <p>{boxItem.description?.[language]}</p>
          <p className="box-price">₹{boxItem.price}</p>
        </div>

        <div className="selection-sections">
          {/* Mains Selection */}
          <div className="selection-section">
            <h3>{language === 'en' ? 'Choose 2 Main Items' : '2 முதன்மை உணவுகளை தேர்ந்தெடுக்கவும்'}</h3>
            <div className="items-grid">
              {mains.map(item => (
                <div
                  key={item.id}
                  className={`selection-item ${isSelected(item, 'mains') ? 'selected' : ''} ${selectedMains.length >= 2 && !isSelected(item, 'mains') ? 'disabled' : ''}`}
                  onClick={() => toggleSelection(item, 'mains')}
                >
                  <div className="selection-item-name">{item.name[language]}</div>
                  <div className="selection-item-price">₹{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sides Selection */}
          <div className="selection-section">
            <h3>{language === 'en' ? 'Choose 2 Side Items' : '2 துணை உணவுகளை தேர்ந்தெடுக்கவும்'}</h3>
            <div className="items-grid">
              {sides.map(item => (
                <div
                  key={item.id}
                  className={`selection-item ${isSelected(item, 'sides') ? 'selected' : ''} ${selectedSides.length >= 2 && !isSelected(item, 'sides') ? 'disabled' : ''}`}
                  onClick={() => toggleSelection(item, 'sides')}
                >
                  <div className="selection-item-name">{item.name[language]}</div>
                  <div className="selection-item-price">₹{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Addons Selection */}
          <div className="selection-section">
            <h3>{language === 'en' ? 'Addons (Optional)' : 'கூடுதல் (விருப்பம்)'}</h3>
            <div className="items-grid">
              {addons.map(item => (
                <div
                  key={item.id}
                  className={`selection-item ${isSelected(item, 'addons') ? 'selected' : ''}`}
                  onClick={() => toggleSelection(item, 'addons')}
                >
                  <div className="selection-item-name">{item.name[language]}</div>
                  <div className="selection-item-price">₹{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="box-selection-footer">
          <div className="selection-summary">
            {language === 'en' ? 'Selected:' : 'தேர்ந்தெடுக்கப்பட்டவை:'} 
            {selectedMains.length}/2 {language === 'en' ? 'mains' : 'முதன்மை'}, 
            {selectedSides.length}/2 {language === 'en' ? 'sides' : 'துணை'}
          </div>
          <button 
            className={`add-box-btn ${!isSelectionValid ? 'disabled' : ''}`}
            onClick={handleAddToCart}
            disabled={!isSelectionValid}
          >
            {language === 'en' ? 'Add Box to Cart' : 'பெட்டியை கார்ட்டில் சேர்க்க'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoxSelection;