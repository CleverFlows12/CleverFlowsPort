export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@CleverFlows';

export interface VaultItem {
  id: number;
  title: string;
  img: string;
  link?: string;
}

export const VAULT_DATA = {
  Animations: [
    {
      id: 1,
      title: 'Roblox UI Showcase & Animations',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      link: YOUTUBE_CHANNEL_URL
    },
    {
      id: 2,
      title: 'Vector UI Motion Reel',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      link: YOUTUBE_CHANNEL_URL
    }
  ]
};
