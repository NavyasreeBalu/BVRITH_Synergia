
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
}
