import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Pastel Balloon Arch Kit',
    price: 24.99,
    category: 'decorations',
    image: 'https://picsum.photos/400/400?random=1',
    description: 'Create a stunning entrance with this easy-to-assemble pastel balloon arch.'
  },
  {
    id: '2',
    name: 'Gold Number Candles (0-9)',
    price: 3.99,
    category: 'candles',
    image: 'https://picsum.photos/400/400?random=2',
    description: 'Sparkling gold number candles to make the cake extra special.'
  },
  {
    id: '3',
    name: 'Dinosaur Theme Party Pack',
    price: 45.00,
    category: 'tableware',
    image: 'https://picsum.photos/400/400?random=3',
    description: 'Plates, cups, and napkins for 12 guests featuring cute dinosaurs.'
  },
  {
    id: '4',
    name: 'Confetti Cannon Poppers',
    price: 8.50,
    category: 'favors',
    image: 'https://picsum.photos/400/400?random=4',
    description: 'Biodegradable confetti poppers for the big surprise moment.'
  },
  {
    id: '5',
    name: 'Happy Birthday Banner - Rose Gold',
    price: 12.99,
    category: 'decorations',
    image: 'https://picsum.photos/400/400?random=5',
    description: 'Elegant rose gold foil banner with string included.'
  },
  {
    id: '6',
    name: 'Unicorn Party Hats (10pk)',
    price: 15.00,
    category: 'favors',
    image: 'https://picsum.photos/400/400?random=6',
    description: 'Magical unicorn horn hats with glitter accents.'
  }
];

export const SYSTEM_INSTRUCTION = `You are "BashBot", an enthusiastic and helpful party planning assistant for "Birthday Bash", a birthday supply shop. 
Your goal is to help users plan birthday parties, suggest themes, and recommend types of products they might need.
Be concise, use emojis 🎈, and always be friendly.
If a user asks for product recommendations, suggest generic categories like "balloons", "banners", or "candles" that a typical shop would have.
Keep responses under 100 words unless asked for a detailed list.`;
