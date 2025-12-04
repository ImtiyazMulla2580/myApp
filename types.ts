export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'decorations' | 'tableware' | 'favors' | 'candles';
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum View {
  HOME = 'HOME',
  SHOP = 'SHOP',
  PLANNER = 'PLANNER',
  REMINDERS = 'REMINDERS'
}