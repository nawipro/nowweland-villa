import React, { useState } from 'react';
import { Calendar, Users, DollarSign, Star, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';

const Booking: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const amenities = [
    'Private Pool',
    'Sea Views',
    'Fruit Garden',
    'Free WiFi',
    'Air Conditioning',
    'Full Kitchen',
    'Parking',
    'Beach Access'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${isRTL ? 'font-hebrew' : 'font-playfair'}`}>
            {t('booking.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('booking.availability')}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('booking.checkIn')}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('booking.checkOut')}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('booking.guests')}
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium">Rate per night</span>
                  <span className="text-2xl font-bold text-blue-600">€180</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>€180 × 7 nights</span>
                    <span>€1,260</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning fee</span>
                    <span>€50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>€65</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between font-semibold text-lg text-gray-900">
                    <span>Total</span>
                    <span>€1,375</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                  {t('booking.bookNow')}
                </button>
                <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300">
                  Request Availability
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center mt-4">
                You won't be charged yet
              </p>
            </div>
          </div>

          {/* Villa Info Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 font-semibold">4.9 (127 reviews)</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Now We Land Villa
              </h3>
              <p className="text-gray-600 mb-4">
                Akrotiri, Chania, Crete
              </p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-bold text-lg">3</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div>
                  <div className="font-bold text-lg">6</div>
                  <div className="text-sm text-gray-600">Guests</div>
                </div>
                <div>
                  <div className="font-bold text-lg">90m</div>
                  <div className="text-sm text-gray-600">to Beach</div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="font-bold text-lg mb-4">Amenities</h4>
              <div className="space-y-3">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-blue-600 text-white rounded-2xl shadow-lg p-6">
              <h4 className="font-bold text-lg mb-4">Need Help?</h4>
              <p className="mb-4 opacity-90">
                Contact us for special requests or questions about your stay.
              </p>
              <button className="w-full bg-white text-blue-600 py-3 px-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Contact Host
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;