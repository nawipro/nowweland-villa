import React from 'react';
import { ChevronDown, Users, Home, Plane } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';

interface HeroProps {
  onBookNow: () => void;
  onExploreMore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow, onExploreMore }) => {
  const { language, isRTL } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

  return (
    <section className="relative h-screen flex items-start justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/now-we-land-sunset-pool.webp"
          alt="Mediterranean sunset view from villa terrace with pool"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content positioned at 60% from top */}
      <div className="relative z-20 text-center text-white max-w-[760px] mx-auto px-4 pt-[60vh] transform -translate-y-1/2">
        <div className="animate-fade-in-up">
          <h1 
            className={`text-5xl md:text-7xl font-bold mb-6 ${isRTL ? 'font-hebrew' : 'font-playfair'}`}
            style={{ textShadow: '0 0 8px rgba(0,0,0,0.45)', color: '#FFFFFF' }}
          >
            {t('hero.title')}
          </h1>
          <p 
            className="text-xl md:text-2xl mb-4 opacity-90 font-light"
            style={{ textShadow: '0 0 8px rgba(0,0,0,0.45)', color: '#FFFFFF' }}
          >
            {t('hero.subtitle')}
          </p>
          <p 
            className="text-lg mb-8 opacity-80 max-w-2xl mx-auto"
            style={{ textShadow: '0 0 8px rgba(0,0,0,0.45)', color: '#FFFFFF' }}
          >
            {t('hero.description')}
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users size={16} />
              <span style={{ textShadow: '0 0 8px rgba(0,0,0,0.45)' }}>Family Friendly</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Home size={16} />
              <span style={{ textShadow: '0 0 8px rgba(0,0,0,0.45)' }}>Private Pool</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Plane size={16} />
              <span style={{ textShadow: '0 0 8px rgba(0,0,0,0.45)' }}>14 min to CHQ Airport</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onBookNow}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
              style={{ textShadow: 'none' }}
            >
              {t('hero.bookNow')}
            </button>
            <button 
              onClick={onExploreMore}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl"
              style={{ textShadow: 'none' }}
            >
              {t('hero.exploreMore')}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce cursor-pointer" onClick={onExploreMore}>
          <ChevronDown size={32} className="text-white opacity-70 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
