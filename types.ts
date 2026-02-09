
export enum EventCategory {
  TECHNICAL = 'Technical',
  CULTURAL = 'Cultural',
  WORKSHOPS = 'Workshops',
}

export interface FestEvent {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  fee: string;
  description: string;
  image: string;
  accentColor: string;
  featured?: boolean;
  hostedBy: string;
}

export interface ContactPerson {
  name: string;
  role: string;
  phone: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver';
}
