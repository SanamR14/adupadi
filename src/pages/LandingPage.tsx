import React from 'react';
import { Language } from '../types';
import LanguageSelection from '../components/LanguageSelection';

interface LandingPageProps {
  onLanguageSelect: (language: Language) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLanguageSelect }) => {
  return <LanguageSelection onLanguageSelect={onLanguageSelect} />;
};

export default LandingPage;