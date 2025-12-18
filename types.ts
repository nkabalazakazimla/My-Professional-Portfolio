export interface Project {
  id: string;
  name: string;
  description: string;
  category: "AI & ML" | "Web Development" | "No-Code"; // Added for filtering
  languages: string[];
  tools: string[];
  deploymentLink: string;
  githubLink: string;
  featured: boolean;
  detailedDescription?: string; // For the modal
  imageUrl?: string;
  images?: string[]; // For slideshow
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot',
  ERROR = 'error'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: Date;
}