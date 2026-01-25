export interface Experiences {
  id: number;
  company: string;
  position: string;
  image: string;
  "period-start": string;
  "period-end": string;
  created_at: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  "url-web": string;
  "url-github": string;
  "tech-tools": string[];
  created_at: string;
}

export interface GalleryAsset {
  id: number;
  type: "image" | "video";
  url: string;
  title: string;
  isPortrait: boolean;
  category: string;
}
