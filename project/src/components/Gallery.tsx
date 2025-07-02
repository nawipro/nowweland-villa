import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';

const Gallery: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Pool at sunset',
      altHe: 'הבריכה בשעת שקיעה',
      category: 'garden'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Garden and pool area during day',
      altHe: 'אזור הגינה והבריכה במהלך היום',
      category: 'garden'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Private path to hidden bay',
      altHe: 'שביל פרטי למפרץ הסודי',
      category: 'bay'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Hidden cove crystal waters',
      altHe: 'מים צלולים במפרץ הסודי',
      category: 'bay'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Master bedroom with sea view',
      altHe: 'חדר השינה הראשי עם נוף לים',
      category: 'bedrooms'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Second bedroom',
      altHe: 'חדר שינה שני',
      category: 'bedrooms'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Modern equipped kitchen',
      altHe: 'מטבח מודרני מאובזר',
      category: 'kitchen'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Comfortable living area',
      altHe: 'אזור מגורים נוח',
      category: 'living'
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'garden', label: t('gallery.categories.garden') },
    { id: 'bay', label: t('gallery.categories.bay') },
    { id: 'bedrooms', label: t('gallery.categories.bedrooms') },
    { id: 'kitchen', label: t('gallery.categories.kitchen') },
    { id: 'living', label: t('gallery.categories.living') }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
    }
  };

  const previousImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${isRTL ? 'font-hebrew' : 'font-playfair'}`}>
            {t('gallery.title')}
          </h2>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openImage(index)}
            >
              <img
                src={image.src}
                alt={language === 'he' ? image.altHe : image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">
                    {language === 'he' ? image.altHe : image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl max-h-[90vh] w-full">
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 p-2 bg-black/50 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2 bg-black/50 rounded-full transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2 bg-black/50 rounded-full transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              <img
                src={filteredImages[selectedImageIndex].src}
                alt={language === 'he' ? filteredImages[selectedImageIndex].altHe : filteredImages[selectedImageIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
                <p className="text-lg font-medium mb-2">
                  {language === 'he' ? filteredImages[selectedImageIndex].altHe : filteredImages[selectedImageIndex].alt}
                </p>
                <p className="text-sm opacity-70">
                  {selectedImageIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
