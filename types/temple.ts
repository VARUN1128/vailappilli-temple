export interface TempleInfo {
  nameMl: string;
  nameEn: string;
  deityMl: string;
  deityEn: string;
  locationMl: string;
  locationEn: string;
  taglineMl: string;
  devotionalMantra: string;
  introParagraphs: string[];
  deityDescription: string[];
}

export interface PoojaTiming {
  id: string;
  time: string;
  nameMl: string;
  nameEn?: string;
  descriptionMl?: string;
  isMainPooja?: boolean;
}

export interface Festival {
  id: string;
  titleMl: string;
  titleEn?: string;
  dateMl: string;
  malayalamMonth?: string;
  descriptionMl: string;
  rituals: string[];
  programmes: string[];
  imageUrl?: string;
  isMainFestival?: boolean;
}

export interface Vazhipadu {
  id: string;
  nameMl: string;
  categoryMl: string;
  ratePlaceholder: string;
  descriptionMl?: string;
}

export interface HistoricalEvent {
  id: string;
  eraMl: string;
  titleMl: string;
  descriptionMl: string;
  imageUrl?: string;
}

export interface GalleryImage {
  id: string;
  titleMl: string;
  captionMl: string;
  url: string;
  category: "temple" | "rituals" | "festivals" | "deity";
  aspectRatio?: "portrait" | "landscape" | "square";
}

export interface Announcement {
  id: string;
  dateMl: string;
  titleMl: string;
  descriptionMl: string;
  isImportant?: boolean;
  linkTextMl?: string;
}

export interface ContactInfo {
  addressMl: string[];
  addressEn: string[];
  phonePlaceholders: string[];
  emailPlaceholder: string;
  googleMapsUrl: string;
  facebookUrl?: string;
  instagramUrl?: string;
}
