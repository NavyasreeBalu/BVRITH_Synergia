
import { EventCategory, FestEvent } from './types';

export const EVENTS_DATA: FestEvent[] = [
  {
    id: '1',
    title: 'Code Jam',
    category: EventCategory.TECHNICAL,
    date: 'Feb 21, 2025',
    fee: '₹200',
    description: 'BVRIT Hyderabad presents the ultimate coding challenge. Test your algorithmic prowess and speed against the brightest minds.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop',
    accentColor: 'emerald',
    featured: true,
  },
  {
    id: '2',
    title: 'Cultural Extravaganza',
    category: EventCategory.CULTURAL,
    date: 'Feb 22, 2025',
    fee: '₹150',
    description: 'A grand stage for dance, music, and theatre. Showcase your talent in the heart of Synergia 2025.',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop',
    accentColor: 'orange',
  },
  {
    id: '3',
    title: 'Robotics Workshop',
    category: EventCategory.WORKSHOPS,
    date: 'Feb 21, 2025',
    fee: 'Free',
    description: 'Hands-on session on building smart autonomous systems. Learn from industry experts at BVRIT Hyderabad.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    accentColor: 'lime',
  },
  {
    id: '4',
    title: 'Rhythm Clash (Dance)',
    category: EventCategory.CULTURAL,
    date: 'Feb 22, 2025',
    fee: '₹500 / Team',
    description: 'Bring the house down with your crew. Group dance competition covering all major styles.',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop',
    accentColor: 'violet',
    featured: true,
  },
  {
    id: '5',
    title: 'Paper Presentation',
    category: EventCategory.TECHNICAL,
    date: 'Feb 21, 2025',
    fee: '₹300',
    description: 'Innovate and present your research. A platform for technical excellence and groundbreaking ideas.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
    accentColor: 'amber',
  },
  {
    id: '6',
    title: 'UI/UX Design Masterclass',
    category: EventCategory.WORKSHOPS,
    date: 'Feb 22, 2025',
    fee: '₹100',
    description: 'Master modern design tools and principles. Creating future-ready interfaces for the digital age.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop',
    accentColor: 'rose',
  },
];

export const SYNERGIA_GRID = [
  "11110100101001011110111101011101010",
  "10000100101101010000100001010010101",
  "11110011001011011100111001011101111",
  "00010010001001010000100001010101001",
  "11110010001001011110111101010011001"
].map(row => row.split('').map(Number));
