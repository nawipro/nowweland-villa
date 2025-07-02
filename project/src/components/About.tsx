import React from 'react';
import { Home, Trees, Waves, Sunset } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';

const About: React.FC = () => {
  const { language, isRTL } = useLanguage();
  
  const features = [
    { icon: <Home className="w-8 h-8" />, title: 'Private Pool', color: 'text-blue-600' },
    { icon: <Trees className="w-8 h-8" />, title: 'Garden & BBQ', color: 'text-green-600' },
    { icon: <Waves className="w-8 h-8" />, title: 'Hidden Bay Access', color: 'text-cyan-600' },
    { icon: <Sunset className="w-8 h-8" />, title: 'Sunset Views', color: 'text-amber-600' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${isRTL ? 'font-hebrew' : 'font-playfair'}`}>
            Now We Land – Your Private Horizon
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/about-villa-day-pool.webp"
                alt="Daytime view of Now We Land villa with private pool"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
          </div>

          {/* Content */}
          <div className={`space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="space-y-6">
              <p className="text-xl text-gray-800 font-light italic leading-relaxed">
                Where every colour of the sky finds its echo in the water.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Perched above a hidden turquoise cove on Crete's Akrotiri Peninsula, Now We Land is a boutique stone villa made for slow mornings, golden afternoons and star-washed evenings. Just 90 metres from the sea and only 14 minutes from Chania Airport, it offers a 43 m² private pool, hand-built stone pathways through fragrant gardens, and uninterrupted sunset views over the Aegean.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The master bedroom opens onto a large enclosed terrace that can host two extra fold-out beds – comfortably sleeping up to eight guests.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Thoughtfully designed for families, couples and close-knit groups, the villa blends authentic Cretan architecture with curated modern comfort—so you can savour the quiet, the colours and the company that matter most.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className={`${feature.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">90m</div>
                <div className="text-sm text-gray-600">to Hidden Bay</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">8</div>
                <div className="text-sm text-gray-600">Max Guests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">3 + terrace</div>
                <div className="text-sm text-gray-600">Bedrooms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
