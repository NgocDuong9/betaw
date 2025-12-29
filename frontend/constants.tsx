
import { Watch } from './types';

export const INITIAL_WATCHES: Watch[] = [
  {
    id: '1',
    name: 'Daytona Black Dial',
    brand: 'Rolex',
    price: 35000,
    description: 'The ultimate tool watch for those with a passion for driving and speed.',
    imageUrl: 'https://images.unsplash.com/photo-1547996160-81dfa63595dd?q=80&w=800',
    category: 'Sport',
    movement: 'Automatic 4130',
    caseSize: '40mm'
  },
  {
    id: '2',
    name: 'Nautilus Blue Dial',
    brand: 'Patek Philippe',
    price: 125000,
    description: 'Rounded octagonal shape bezel, the personification of the elegant sports watch.',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800',
    category: 'Luxury',
    movement: 'Self-winding mechanical',
    caseSize: '40mm'
  }
];
