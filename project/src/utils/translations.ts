export const translations = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      gallery: 'Gallery',
      explore: 'Explore Area',
      contact: 'Contact',
      book: 'Book Now'
    },
    hero: {
      title: 'Now We Land',
      subtitle: 'A Private Boutique Villa in Akrotiri, Chania, Crete',
      description: 'Experience Mediterranean tranquility just 90 meters from a hidden cove',
      bookNow: 'Book Your Stay',
      exploreMore: 'Explore More'
    },
    about: {
      title: 'Welcome to Your Mediterranean Escape',
      description: 'Welcome to *Now We Land* – a family-friendly private villa located just 90 meters from a hidden cove in Akrotiri, Crete. Relax by the pool, enjoy the fruit trees in the garden, and watch the sun set over the Mediterranean. Perfect for couples, families, or small groups seeking tranquility and charm.',
      features: {
        pool: 'Private Pool',
        garden: 'Fruit Garden',
        bay: 'Hidden Bay Access',
        sunset: 'Sunset Views'
      }
    },
    gallery: {
      title: 'Villa Gallery',
      categories: {
        garden: 'Garden & Pool',
        bay: 'Hidden Bay',
        bedrooms: 'Bedrooms',
        kitchen: 'Kitchen',
        living: 'Living Room'
      }
    },
    explore: {
      title: 'Explore the Area',
      subtitle: 'Discover the beauty of Akrotiri and surrounding areas',
      attractions: [
        {
          name: 'Tersanas Beach',
          description: 'A pristine beach with crystal clear waters, perfect for swimming and relaxation.',
          distance: '5 minutes drive'
        },
        {
          name: 'Kalathas Beach',
          description: 'Family-friendly beach with shallow waters and beach facilities.',
          distance: '8 minutes drive'
        },
        {
          name: 'Stavros Beach',
          description: 'Famous filming location of "Zorba the Greek" with unique circular bay.',
          distance: '15 minutes drive'
        },
        {
          name: 'Aptera Archaeological Site',
          description: 'Ancient ruins with panoramic views over Souda Bay.',
          distance: '20 minutes drive'
        }
      ]
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Ready to book your stay or have questions?',
      whatsapp: 'WhatsApp',
      email: 'Email Us',
      facebook: 'Facebook',
      instagram: 'Instagram',
      location: 'Akrotiri, Chania, Crete'
    },
    booking: {
      title: 'Book Your Stay',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Guests',
      bookNow: 'Book Now',
      availability: 'Check Availability'
    }
  },
  he: {
    navigation: {
      home: 'בית',
      about: 'אודות',
      gallery: 'גלריה',
      explore: 'חקור את האזור',
      contact: 'צור קשר',
      book: 'הזמן עכשיו'
    },
    hero: {
      title: 'Now We Land',
      subtitle: 'וילת נופש פרטית ומושקעת באקרוטירי, חניה, כרתים',
      description: 'חוו שלווה ים תיכונית במרחק 90 מטר בלבד ממפרץ סודי',
      bookNow: 'הזמינו את השהייה',
      exploreMore: 'גלו עוד'
    },
    about: {
      title: 'ברוכים הבאים למפלט הים התיכוני שלכם',
      description: 'ברוכים הבאים ל־*Now We Land* – וילת נופש פרטית ומושקעת, במרחק 90 מטר ממפרץ סודי באקרוטירי, כרתים. תיהנו מבריכה פרטית, עצי פרי בגינה, נוף מרהיב לשקיעה ושביל הליכה מהבית אל הים.',
      features: {
        pool: 'בריכה פרטית',
        garden: 'גינת פרי',
        bay: 'גישה למפרץ סודי',
        sunset: 'נוף שקיעה'
      }
    },
    gallery: {
      title: 'גלריית הוילה',
      categories: {
        garden: 'גינה ובריכה',
        bay: 'המפרץ הסודי',
        bedrooms: 'חדרי שינה',
        kitchen: 'מטבח',
        living: 'סלון'
      }
    },
    explore: {
      title: 'חקרו את האזור',
      subtitle: 'גלו את יופיו של אקרוטירי והסביבה',
      attractions: [
        {
          name: 'חוף טרסאנאס',
          description: 'חוף בתולי עם מים צלולים כקריסטל, מושלם לשחייה ומנוחה.',
          distance: '5 דקות נסיעה'
        },
        {
          name: 'חוף קלאתס',
          description: 'חוף ידידותי למשפחות עם מים רדודים ומתקני חוף.',
          distance: '8 דקות נסיעה'
        },
        {
          name: 'חוף סטברוס',
          description: 'מקום הצילום המפורסם של "זורבה היווני" עם מפרץ עגול ייחודי.',
          distance: '15 דקות נסיעה'
        },
        {
          name: 'אתר העתיקות אפטרה',
          description: 'חורבות עתיקות עם נוף פנורמי על מפרץ סודה.',
          distance: '20 דקות נסיעה'
        }
      ]
    },
    contact: {
      title: 'צרו קשר',
      subtitle: 'מוכנים להזמין את השהייה או יש שאלות?',
      whatsapp: 'וואטסאפ',
      email: 'כתבו לנו',
      facebook: 'פייסבוק',
      instagram: 'אינסטגרם',
      location: 'אקרוטירי, חניה, כרתים'
    },
    booking: {
      title: 'הזמינו את השהייה',
      checkIn: 'כניסה',
      checkOut: 'יציאה',
      guests: 'אורחים',
      bookNow: 'הזמן עכשיו',
      availability: 'בדקו זמינות'
    }
  }
};

export const getTranslation = (language: 'en' | 'he', key: string): string => {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};