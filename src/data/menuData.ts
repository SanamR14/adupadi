import { MenuItemType, CategoryType } from '../types';

export const categories: CategoryType[] = [
  { id: 'breakfast', name: { en: 'Breakfast', ta: 'காலை உணவு' } },
  { id: 'lunch', name: { en: 'Lunch', ta: 'மதிய உணவு' } },
  { id: 'breakfast-specials', name: { en: 'Breakfast Specials', ta: 'காலை சிறப்பு உணவுகள்' } },
  { id: 'lunch-specials', name: { en: 'Lunch Specials', ta: 'மதிய சிறப்பு உணவுகள்' } },
  { id: 'breakfast-box', name: { en: 'Breakfast Box', ta: 'காலை உணவு பெட்டி' } },
  { id: 'lunch-box', name: { en: 'Lunch Box', ta: 'மதிய உணவு பெட்டி' } },
  { id: 'addons', name: { en: 'Addons', ta: 'கூடுதல்' } }
];

export const menuItems: MenuItemType[] = [
  // Breakfast Items
  {
    id: '1',
    name: { en: 'Idly', ta: 'இட்லி' },
    description: { en: 'Steamed rice cakes', ta: 'வேகவைத்த அரிசி கேக்குகள்' },
    price: 39,
    category: 'breakfast',
    image: '/images/idly.webp'
  },
  {
    id: '2',
    name: { en: 'Sambar Idly', ta: 'சாம்பார் இட்லி' },
    description: { en: 'Idly soaked in sambar', ta: 'சாம்பாரில் ஊறவைத்த இட்லி' },
    price: 49,
    category: 'breakfast',
    image: '/images/idly.webp'
  },
  {
    id: '3',
    name: { en: 'Ghee Podi Idly', ta: 'நெய் பொடி இட்லி' },
    description: { en: 'Idly with ghee and spice powder', ta: 'நெய் மற்றும் மசாலா பொடியுடன் இட்லி' },
    price: 55,
    category: 'breakfast',
    image: '/images/idly.webp'
  },
  {
    id: '4',
    name: { en: 'Dosa', ta: 'தோசை' },
    description: { en: 'Crispy fermented crepe', ta: 'முறுக்கான புளித்த மாவு தோசை' },
    price: 50,
    category: 'breakfast',
    image: '/images/dosa.jpg'
  },
  {
    id: '5',
    name: { en: 'Podi Dosai', ta: 'போடி தோசை' },
    description: { en: 'Dosa with spice powder', ta: 'மசாலா பொடி தோசை' },
    price: 55,
    category: 'breakfast',
    image: '/images/dosa.jpg'
  },
  {
    id: '6',
    name: { en: 'Ghee Dosai', ta: 'நெய் தோசை' },
    description: { en: 'Dosa with ghee', ta: 'நெய்யுடன் கூடிய தோசை' },
    price: 65,
    category: 'breakfast',
    image: '/images/dosa.jpg'
  },
  {
    id: '7',
    name: { en: 'Uthappam', ta: 'உத்தப்பம்' },
    description: { en: 'Thick rice pancake', ta: 'தடித்த அரிசி அப்பம்' },
    price: 60,
    category: 'breakfast',
    image: '/images/dosa.jpg'
  },
  {
    id: '8',
    name: { en: 'Podi Uthappam', ta: 'போடி உத்தப்பம்' },
    description: { en: 'Uthappam with spice powder', ta: 'மசாலா பொடி உத்தப்பம்' },
    price: 65,
    category: 'breakfast',
    image: '/images/dosa.jpg'
  },
  {
    id: '9',
    name: { en: 'Onion Uthappam', ta: 'வெங்காய உத்தப்பம்' },
    description: { en: 'Pancake with onions', ta: 'வெங்காயத்துடன் கூடிய உத்தப்பம்' },
    price: 70,
    category: 'breakfast',
    image: '/images/dosa.jpg'
  },
  {
    id: '10',
    name: { en: 'Pongal', ta: 'பொங்கல்' },
    description: { en: 'Rice and lentil dish', ta: 'அரிசி மற்றும் பருப்பு உணவு' },
    price: 45,
    category: 'breakfast',
    image: '/images/pongal.jpg'
  },

  // Breakfast Specials
  {
    id: '11',
    name: { en: 'Kuli Paniyaram', ta: 'குழி பணியாரம்' },
    description: { en: 'Round dumplings (Available on Wednesday and Saturday)', ta: 'வட்டமான குழியப்பம் (புதன், சனிக்கிழமைகளில்)' },
    price: 55,
    category: 'breakfast-specials',
    image: '/images/dosa.jpg'
  },
  {
    id: '12',
    name: { en: 'Idiyappam', ta: 'இடியப்பம்' },
    description: { en: 'String hoppers (Available on Monday and Thursday)', ta: 'நூல்போன்ற அப்பம் (திங்கள், வியாழக்கிழமைகளில்)' },
    price: 65,
    category: 'breakfast-specials',
    image: '/images/dosa.jpg'
  },
  {
    id: '13',
    name: { en: 'Appam', ta: 'அப்பம்' },
    description: { en: 'Bowl-shaped pancakes (Available on Tuesday and Friday)', ta: 'கிண்ண வடிவ அப்பம் (செவ்வாய், வெள்ளிக்கிழமைகளில்)' },
    price: 65,
    category: 'breakfast-specials',
    image: '/images/dosa.jpg'
  },

  // Breakfast Box
  {
    id: '14',
    name: { en: 'Breakfast Box', ta: 'காலை உணவு பெட்டி' },
    description: { en: 'Any 2 mains + 2 sides + 1 fruit bag (optional) + Buttermilk', ta: '2 முதன்மை உணவுகள் + 2 துணை உணவுகள் + 1 பழப் பை (விருப்பம்) + மோர்' },
    price: 180,
    category: 'breakfast-box',
    image: '/images/dosa.jpg'
  },

  // Lunch Items
  {
    id: '15',
    name: { en: 'Curd Rice', ta: 'தயிர் சாதம்' },
    description: { en: 'Rice with yogurt', ta: 'தயிருடன் கூடிய சாதம்' },
    price: 60,
    category: 'lunch',
    image: '/images/curd-rice.jpg'
  },
  {
    id: '16',
    name: { en: 'Sambar Rice', ta: 'சாம்பார் சாதம்' },
    description: { en: 'Rice with lentil stew', ta: 'சாம்பார் உடன் கூடிய சாதம்' },
    price: 70,
    category: 'lunch',
    image: '/images/sambar-rice.jpg'
  },
  {
    id: '17',
    name: { en: 'Lemon Rice', ta: 'எலுமிச்சை சாதம்' },
    description: { en: 'Rice with lemon flavor', ta: 'எலுமிச்சை சுவையுடன் கூடிய சாதம்' },
    price: 65,
    category: 'lunch',
    image: '/images/lemon-rice.jpg'
  },
  {
    id: '18',
    name: { en: 'Puli Sadham', ta: 'புளி சாதம்' },
    description: { en: 'Tamarind rice', ta: 'புளி சாதம்' },
    price: 65,
    category: 'lunch',
    image: '/images/puli-sadham.jpg'
  },
  {
    id: '19',
    name: { en: 'Meals', ta: 'சாப்பாடு' },
    description: { en: 'Traditional South Indian meal', ta: 'பாரம்பரிய தென்னிந்திய உணவு' },
    price: 120,
    category: 'lunch',
    image: '/images/meals.jpg'
  },

  // Lunch Specials
  {
    id: '20',
    name: { en: 'Kothamali Rice', ta: 'கொத்தமல்லி சாதம்' },
    description: { en: 'Coriander rice (Available on Tuesday and Friday)', ta: 'கொத்தமல்லி சாதம் (செவ்வாய், வெள்ளிக்கிழமைகளில்)' },
    price: 80,
    category: 'lunch-specials',
    image: '/images/coriander-rice.jpg'
  },
  {
    id: '21',
    name: { en: 'Thenga Paal Rice', ta: 'தேங்காய் பால் சாதம்' },
    description: { en: 'Coconut milk rice (Available on Wednesday and Saturday)', ta: 'தேங்காய் பால் சாதம் (புதன், சனிக்கிழமைகளில்)' },
    price: 85,
    category: 'lunch-specials',
    image: '/images/coconut-rice.jpg'
  },
  {
    id: '22',
    name: { en: 'Arisu Parupu Sadham', ta: 'அரிசு பருப்பு சாதம்' },
    description: { en: 'Rice and lentil dish (Available on Monday and Thursday)', ta: 'அரிசு மற்றும் பருப்பு சாதம் (திங்கள், வியாழக்கிழமைகளில்)' },
    price: 75,
    category: 'lunch-specials',
    image: '/images/rice-lentil.jpg'
  },

  // Lunch Box
  {
    id: '23',
    name: { en: 'Lunch Box', ta: 'மதிய உணவு பெட்டி' },
    description: { en: 'Choose any 2 rice varieties + 2 veggies + 1 buttermilk + fruit bag (optional)', ta: '2 அரிசி வகைகள் + 2 காய்கறிகள் + 1 மோர் + பழப் பை (விருப்பம்)' },
    price: 200,
    category: 'lunch-box',
    image: '/images/lunch-box.jpg'
  },

  // Addons
  {
    id: '24',
    name: { en: 'Buttermilk', ta: 'மோர்' },
    description: { en: 'Refreshing spiced buttermilk', ta: 'புத்துணர்ச்சியூட்டும் மோர்' },
    price: 25,
    category: 'addons',
    image: '/images/buttermilk.jpg'
  },
  {
    id: '25',
    name: { en: 'Fruit Bag', ta: 'பழப் பை' },
    description: { en: 'Fresh fruit mix', ta: 'புதிய பழக் கலவை' },
    price: 30,
    category: 'addons',
    image: '/images/fruit-bag.jpg'
  }
];

export const APP_IMAGES = {
  logo: '/images/poster.jpg',
  background: '/images/poster.jpg',
  poster: '/images/poster.jpg',
  englishBackground: '/images/poster.jpg',
  tamilBackground: '/images/poster.jpg',
};