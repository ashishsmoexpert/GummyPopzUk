const PRODUCTS = [
  {
    id: 'sweet-wild-berry',
    name: 'Gummi Popz Sweet',
    subtitle: 'Wild Berry',
    badge: 'Available Now',
    status: 'available',
    price: '£1.49',
    wholesalePrice: 'From £0.75 per unit (min. order 12ct tray)',
    image: 'assets/stickers/4th_(6).png',
    fallbackImage: 'https://gummipopz.com/wp-content/uploads/2026/01/GummiPopz_Wrapper_Sour_RGB-rev-2-scaled-1024x654.jpg',
    shortDesc: 'Sweet, chewy gummi madness bursting with Wild Berry flavour. Soft gummi outside, sweet candy gel inside, amazing poppin\' topping. Fill it, gel it, top it, pop it!',
    longDesc: 'Gummi Popz Sweet is the multi-sensory Wild Berry explosion you\'ve been waiting for. Start with a soft, chewy gummi shell, crack through to the sweet candy gel centre, then unleash the amazing poppin\' sugar that takes every bite completely over the top. Three textures. One unforgettable experience.',
    features: [
      'Soft gummi outside',
      'Sweet candy gel inside',
      'Amazing poppin\' topping',
      'Wild Berry flavour',
      'Build \'em your way'
    ],
    buyUrl: 'products.html#sweet',
    wholesaleUrl: 'wholesale.html'
  },
  {
    id: 'sour-citrus',
    name: 'Gummi Popz Sour',
    subtitle: 'Citrus Sour',
    badge: 'Available Now',
    status: 'available',
    price: '£1.49',
    wholesalePrice: 'From £0.75 per unit (min. order 12ct tray)',
    image: 'assets/stickers/4th_(7).png',
    fallbackImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymBQpbmt0xZnwwkSdKorTuoeND8CAVq7T0XN0aoVYQKM7lplOAMn8cCYU&s=10',
    shortDesc: 'Hit with sour sparks and chewy gummi madness. The OMG moments keep coming with every single bite.',
    longDesc: 'Gummi Popz Sour turns the dial all the way to chaos. A soft gummi shell holds back a sour candy gel that hits you first — then the poppin\' citrus crystals inside detonate. Sour, sweet, chewy, and explosive all at once. You won\'t know what hit you.',
    features: [
      'Soft gummi outside',
      'Sour candy gel inside',
      'Citrus poppin\' topping',
      'Citrus Sour flavour',
      'Build \'em your way'
    ],
    buyUrl: 'products.html#sour',
    wholesaleUrl: 'wholesale.html'
  }
];

const NAV_LINKS = [
  { label: 'Products', href: 'products.html' },
  { label: 'About', href: 'about.html' },
  { label: 'Stockists', href: 'stockists.html' },
  { label: 'Wholesale', href: 'wholesale.html' },
  { label: 'Contact', href: 'contact.html' }
];

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/gummipopzcandy',
  tiktok: 'https://www.tiktok.com/@gummipopzcandy',
  youtube: 'https://www.youtube.com/@GummiPopzcandy',
  facebook: 'https://www.facebook.com/gummipopzcandy'
};

const STOCKISTS = [
  { name: 'Central Convenience Store', type: 'Convenience', city: 'London', address: 'Various Central London locations', phone: 'Call for stockist nearest you' },
  { name: 'Midlands Deli & Food Hall', type: 'Deli', city: 'Birmingham', address: 'Various Midlands locations', phone: 'Call for stockist nearest you' },
  { name: 'Northern Candy Co.', type: 'Specialist Candy', city: 'Manchester', address: 'Various Manchester locations', phone: 'Call for stockist nearest you' },
  { name: 'Scottish Sweet Shop', type: 'Sweet Shop', city: 'Edinburgh', address: 'Various Scotland locations', phone: 'Call for stockist nearest you' },
  { name: 'Cardiff Corner Shop', type: 'Convenience', city: 'Cardiff', address: 'Various Wales locations', phone: 'Call for stockist nearest you' },
  { name: 'East End Food Market', type: 'Market', city: 'London', address: 'Various East London locations', phone: 'Call for stockist nearest you' }
];

if (typeof module !== 'undefined') {
  module.exports = { PRODUCTS, NAV_LINKS, SOCIAL_LINKS, STOCKISTS };
}
