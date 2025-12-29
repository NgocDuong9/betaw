
export interface Watch {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  imageUrl: string;
  category: 'Luxury' | 'Sport' | 'Classic' | 'Diver';
  movement: string;
  caseSize: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'customer';
}

export interface CartItem extends Watch {
  quantity: number;
}
