import React from 'react';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';

interface StickyBookingBarProps {
  onBookNow: () => void;
}

const StickyBookingBar: React.FC<StickyBookingBarProps> = ({ onBookNow }) => {
  const { language, isRTL } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40 p-4 md:hidden">
      <div className="flex items-center justify-between max-w-sm mx-auto">
        <div>
          <div className="text-lg font-bold text-gray-900">€180/night</div>
          <div className="text-sm text-gray-600">Available dates</div>
        </div>
        <button
          onClick={onBookNow}
          className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg flex items-center space-x-2"
        >
          <Calendar className="w-4 h-4" />
          <span>{t('navigation.book')}</span>
        </button>
      </div>
    </div>
  );
};

export default StickyBookingBar;