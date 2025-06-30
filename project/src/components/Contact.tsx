import React from 'react';
import { MessageCircle, Mail, Facebook, Instagram, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';

const Contact: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: t('contact.whatsapp'),
      subtitle: 'Quick response',
      link: 'https://wa.me/1234567890',
      color: 'bg-green-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.email'),
      subtitle: 'hello@nowweland.com',
      link: 'mailto:hello@nowweland.com',
      color: 'bg-blue-500'
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      title: t('contact.facebook'),
      subtitle: 'Follow us',
      link: 'https://facebook.com/nowweland',
      color: 'bg-blue-600'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: t('contact.instagram'),
      subtitle: '@nowweland',
      link: 'https://instagram.com/nowweland',
      color: 'bg-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isRTL ? 'font-hebrew' : 'font-playfair'}`}>
            {t('contact.title')}
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`${method.color} p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{method.title}</h4>
                  <p className="opacity-75">{method.subtitle}</p>
                </div>
              </a>
            ))}

            {/* Location */}
            <div className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="bg-amber-500 p-3 rounded-xl mr-4">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="opacity-75">{t('contact.location')}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-white/60"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-white/60"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-white/60"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="dates">
                  Preferred Dates
                </label>
                <input
                  type="text"
                  id="dates"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-white/60"
                  placeholder="e.g., July 15-22, 2024"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-white/60 resize-none"
                  placeholder="Tell us about your stay preferences..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;