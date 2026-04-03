export interface SanityHeroData {
  _id: string;
  title: string;
  slogan: string;
  backgroundImageUrl: string;
  primaryCtaText: string;
  secondaryCtaText: string;
}

export interface SanityHistoryData {
  _id: string;
  heading: string;
  paragraphs: any[];
  imageUrl: string;
}

export interface SanityVisionMissionData {
  _id: string;
  vision: string;
  missions: {
    title: string;
    description: string;
    iconName: string; // Map to Lucide icons dynamically in a real app
  }[];
}

export interface SanityQuoteData {
  _id: string;
  author: string;
  role: string;
  quoteText: string;
  avatarUrl?: string;
}
