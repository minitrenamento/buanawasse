
export interface Track {
  id: string;
  title: string;
  duration: string;
  price: number;
  previewUrl: string;
  albumId: string;
  coverUrl: string;
}

export interface Album {
  id: string;
  title: string;
  year: number;
  coverUrl: string;
  price: number;
  description: string;
  tracks: Track[];
}

export interface CartItem {
  id: string;
  type: 'track' | 'album';
  title: string;
  price: number;
  coverUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatarUrl: string;
  bio: string;
}
