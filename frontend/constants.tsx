
import { Watch } from './types';

export const INITIAL_WATCHES: Watch[] = [
  {
    id: '1',
    name: 'Daytona Black Dial',
    brand: 'Rolex',
    price: 35000,
    description: 'The Oyster Perpetual Cosmograph Daytona is the ultimate tool watch for those with a passion for driving and speed.',
    imageUrl: 'https://images.unsplash.com/photo-1547996160-81dfa63595dd?q=80&w=800&auto=format&fit=crop',
    category: 'Sport',
    movement: 'Automatic 4130',
    caseSize: '40mm'
  },
  {
    id: '2',
    name: 'Nautilus Blue Dial',
    brand: 'Patek Philippe',
    price: 125000,
    description: 'With the rounded octagonal shape of its bezel, the Nautilus has personified the elegant sports watch since 1976.',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
    category: 'Luxury',
    movement: 'Self-winding mechanical',
    caseSize: '40mm'
  },
  {
    id: '3',
    name: 'Royal Oak Offshore',
    brand: 'Audemars Piguet',
    price: 45000,
    description: 'The Royal Oak Offshore collection has defied established conventions since 1993, giving an ever more powerful and sportier take.',
    imageUrl: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop',
    category: 'Sport',
    movement: 'Calibre 4401',
    caseSize: '42mm'
  }
];
