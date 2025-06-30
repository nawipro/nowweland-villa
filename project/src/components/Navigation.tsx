import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const { language, setLanguage, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = (key: string) => getTranslation(language, key);

  const menuItems = [
    { id: 'home', label: t('navigation.home') },
    { id: 'about', label: t('navigation.about') },
    { id: 'gallery', label: t('navigation.gallery') },
    { id: 'explore', label: t('navigation.explore') },
    { id: 'contact', label: t('navigation.contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-blue-800 cursor-pointer transition-colors hover:text-blue-600"
            onClick={() => onSectionChange('home')}
          >
            Now We Land
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">{language === 'en' ? 'עברית' : 'English'}</span>
            </button>

            {/* Book Now Button */}
            <button
              onClick={() => onSectionChange('booking')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-lg"
            >
              {t('navigation.book')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t py-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 font-medium bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onSectionChange('booking');
                  setIsMenuOpen(false);
                }}
                className="block w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-colors mx-4 mt-4"
              >
                {t('navigation.book')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;