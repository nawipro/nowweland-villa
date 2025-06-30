export interface Translation {
  [key: string]: string | Translation;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  altHe: string;
  category: 'garden' | 'bay' | 'bedrooms' | 'kitchen' | 'living';
}

export interface Attraction {
  name: string;
  nameHe: string;
  description: string;
  descriptionHe: string;
  distance: string;
  distanceHe: string;
  image: string;
}

export type Language = 'en' | 'he';