import { MenuItemType, CategoryType } from '../types';

export const categories: CategoryType[] = [
  { id: 'breakfast', name: { en: 'Breakfast', ta: 'காலை உணவு' } },
  { id: 'lunch', name: { en: 'Lunch', ta: 'மதிய உணவு' } },
  { id: 'specials', name: { en: 'Specials', ta: 'சிறப்பு உணவுகள்' } },
  { id: 'drinks', name: { en: 'Drinks', ta: 'பானங்கள்' } }
];

export const menuItems: MenuItemType[] = [
  // Breakfast Items
  {
    id: '1',
    name: { en: 'Idly', ta: 'இட்லி' },
    description: { en: 'Steamed rice cakes', ta: 'வேகவைத்த அரிசி கேக்குகள்' },
    price: 40,
    category: 'breakfast',
    image: '/images/idly.webp'
  },
  {
    id: '2',
    name: { en: 'Dosa', ta: 'தோசை' },
    description: { en: 'Crispy fermented crepe', ta: 'முறுக்கான புளித்த மாவு தோசை' },
    price: 50,
    category: 'breakfast',
    image: '/images/dosa.jpg'
  },
  {
    id: '3',
    name: { en: 'Utthappam', ta: 'உத்தப்பம்' },
    description: { en: 'Thick rice pancake', ta: 'தடித்த அரிசி அப்பம்' },
    price: 60,
    category: 'breakfast',
    image: '/images/dosa.jpg'
  },
  {
    id: '4',
    name: { en: 'Podi Dosai', ta: 'போடி தோசை' },
    description: { en: 'Dosa with spice powder', ta: 'மசாலா பொடி தோசை' },
    price: 55,
    category: 'breakfast',
    image: '/images/dosa.jpg'
  },
  {
    id: '5',
    name: { en: 'Onion Utthappam', ta: 'வெங்காய உத்தப்பம்' },
    description: { en: 'Pancake with onions', ta: 'வெங்காயத்துடன் கூடிய உத்தப்பம்' },
    price: 70,
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
    name: { en: 'Masala Dosai', ta: 'மசாலா தோசை' },
    description: { en: 'Dosa with potato masala', ta: 'உருளைக்கிழங்கு மசாலாவுடன் தோசை' },
    price: 75,
    category: 'breakfast',
    image: '/images/dosa.jpg'
  },
  {
    id: '8',
    name: { en: 'Pongal', ta: 'பொங்கல்' },
    description: { en: 'Rice and lentil dish', ta: 'அரிசி மற்றும் பருப்பு உணவு' },
    price: 45,
    category: 'breakfast',
    image: '/images/pongal.jpg'
  },
  
  // Specials

  {
    id: '10',
    name: { en: 'Kulli Paniyaram', ta: 'குழி பணியாரம்' },
    description: { en: 'Round dumplings', ta: 'வட்டமான குழியப்பம்' },
    price: 55,
    category: 'specials',
    image: '/images/dosa.jpg'
  },
  {
    id: '11',
    name: { en: 'Idiyappam with Sothi', ta: 'இடியப்பம் - சோதி' },
    description: { en: 'String hoppers with coconut stew', ta: 'நூல்போன்ற அப்பம் தேங்காய் குழம்புடன்' },
    price: 65,
    category: 'specials',
    image: '/images/dosa.jpg'
  },
  {
    id: '12',
    name: { en: 'Cholla Puri', ta: 'சோள புரி' },
    description: { en: 'Maize flour puri', ta: 'சோள மாவு பூரி' },
    price: 50,
    category: 'specials',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400'
  },
  
  // Lunch
  {
    id: '13',
    name: { en: 'Curd Rice', ta: 'தயிர் சாதம்' },
    description: { en: 'Rice with yogurt', ta: 'தயிருடன் கூடிய சாதம்' },
    price: 60,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400'
  },
  {
    id: '14',
    name: { en: 'Sambar Rice', ta: 'சாம்பார் சாதம்' },
    description: { en: 'Rice with lentil stew', ta: 'சாம்பார் உடன் கூடிய சாதம்' },
    price: 70,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400'
  },
  {
    id: '15',
    name: { en: 'Meals', ta: 'சாப்பாடு' },
    description: { en: 'Traditional South Indian meal', ta: 'பாரம்பரிய தென்னிந்திய உணவு' },
    price: 120,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400'
  },
  {
    id: '16',
    name: { en: 'Coriander Rice', ta: 'கொத்தமல்லி சாதம்' },
    description: { en: 'Rice with coriander flavor', ta: 'கொத்தமல்லி சுவையுடன் கூடிய சாதம்' },
    price: 80,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400'
  },
  {
    id: '17',
    name: { en: 'Ghee Rice', ta: 'நெய் சாதம்' },
    description: { en: 'Aromatic ghee rice', ta: 'நறுமண நெய் சாதம்' },
    price: 85,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400'
  },
  {
    id: '18',
    name: { en: 'Peas Pulav', ta: 'பட்டாணி புலாவ்' },
    description: { en: 'Rice with green peas', ta: 'பச்சை பட்டாணியுடன் கூடிய சாதம்' },
    price: 75,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400'
  },
  
  // Drinks
  {
    id: '19',
    name: { en: 'Buttermilk', ta: 'மோர்' },
    description: { en: 'Refreshing spiced buttermilk', ta: 'புத்துணர்ச்சியூட்டும் மோர்' },
    price: 25,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400'
  }
];

export const APP_IMAGES = {
  logo: '/images/poster.jpg',
  background: '/images/poster.jpg',
  poster: '/images/poster.jpg',
  englishBackground: '/images/poster.jpg',
  tamilBackground: '/images/poster.jpg',
};