import React from 'react';
import { MapPin, Clock, Camera } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';

const ExploreArea: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

  const attractions = [
    {
      name: 'Tersanas Beach',
      nameHe: 'חוף טרסאנאס',
      description: 'A pristine beach with crystal clear waters, perfect for swimming and relaxation.',
      descriptionHe: 'חוף בתולי עם מים צלולים כקריסטל, מושלם לשחייה ומנוחה.',
      distance: '5 minutes drive',
      distanceHe: '5 דקות נסיעה',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: <Camera className="w-5 h-5" />
    },
    {
      name: 'Kalathas Beach',
      nameHe: 'חוף קלאתס',
      description: 'Family-friendly beach with shallow waters and beach facilities.',
      descriptionHe: 'חוף ידידותי למשפחות עם מים רדודים ומתקני חוף.',
      distance: '8 minutes drive',
      distanceHe: '8 דקות נסיעה',
      image: 'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: <Camera className="w-5 h-5" />
    },
    {
      name: 'Stavros Beach',
      nameHe: 'חוף סטברוס',
      description: 'Famous filming location of "Zorba the Greek" with unique circular bay.',
      descriptionHe: 'מקום הצילום המפורסם של "זורבה היווני" עם מפרץ עגול ייחודי.',
      distance: '15 minutes drive',
      distanceHe: '15 דקות נסיעה',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: <Camera className="w-5 h-5" />
    },
    {
      name: 'Aptera Archaeological Site',
      nameHe: 'אתר העתיקות אפטרה',
      description: 'Ancient ruins with panoramic views over Souda Bay.',
      descriptionHe: 'חורבות עתיקות עם נוף פנורמי על מפרץ סודה.',
      distance: '20 minutes drive',
      distanceHe: '20 דקות נסיעה',
      image: 'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: <MapPin className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${isRTL ? 'font-hebrew' : 'font-playfair'}`}>
            {t('explore.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('explore.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.02]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={attraction.image}
                  alt={language === 'he' ? attraction.nameHe : attraction.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    {attraction.icon}
                    <span className="text-sm opacity-90">
                      {language === 'he' ? attraction.distanceHe : attraction.distance}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-2xl font-bold text-gray-900 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {language === 'he' ? attraction.nameHe : attraction.name}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                  {language === 'he' ? attraction.descriptionHe : attraction.description}
                </p>
                
                <div className={`flex items-center mt-4 text-blue-600 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Clock className="w-4 h-4 mx-2" />
                  <span className="text-sm font-medium">
                    {language === 'he' ? attraction.distanceHe : attraction.distance}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className={`text-3xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-hebrew' : 'font-playfair'}`}>
              Perfect Location in Akrotiri
            </h3>
            <p className="text-gray-600">
              Discover pristine beaches, ancient sites, and authentic tavernas all within easy reach
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <p>Interactive map will be integrated here</p>
              <p className="text-sm">Akrotiri Peninsula, Chania, Crete</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreArea;