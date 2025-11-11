import React from 'react';
import { Language } from '../types';
import { APP_IMAGES } from '../data/menuData';
import { getFallbackImage } from '../utils/imageUtils';
import './LanguageSelection.css';

interface LanguageSelectionProps {
  onLanguageSelect: (language: Language) => void;
}

const LanguageSelection: React.FC<LanguageSelectionProps> = ({ onLanguageSelect }) => {
  return (
    <div className="language-selection">
      <div 
        className="door english-door" 
        onClick={() => onLanguageSelect('en')}
        style={{
          backgroundImage: `url(${APP_IMAGES.englishBackground || APP_IMAGES.background || getFallbackImage('default')})`
        }}
      >
        <div className="door-content">
          <div className="logo-container">
            <img 
              src={APP_IMAGES.logo || getFallbackImage('default')} 
              alt="App Logo" 
              className="app-logo" 
              onError={(e) => {
                e.currentTarget.src = getFallbackImage('default');
              }}
            />
          </div>
          <h1>English</h1>
          <p>Click to continue in English</p>
        </div>
      </div>
      <div 
        className="door tamil-door" 
        onClick={() => onLanguageSelect('ta')}
        style={{
          backgroundImage: `url(${APP_IMAGES.tamilBackground || APP_IMAGES.background || getFallbackImage('default')})`
        }}
      >
        <div className="door-content">
          <div className="logo-container">
            <img 
              src={APP_IMAGES.logo || getFallbackImage('default')} 
              alt="App Logo" 
              className="app-logo" 
              onError={(e) => {
                e.currentTarget.src = getFallbackImage('default');
              }}
            />
          </div>
          <h1>தமிழ்</h1>
          <p>தமிழில் தொடர கிளிக் செய்யவும்</p>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default LanguageSelection;