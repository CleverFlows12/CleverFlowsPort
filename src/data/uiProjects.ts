export interface UIProject {
  id: string;
  image: string;
}

export const DISCORD_INVITE_URL = 'https://discord.gg/hsbfCmKuKS';
export const DISCORD_USERNAME = 'clever.flows12';

// Dynamically import all UI showcase images from the user's vault folder
const UI_MODULES = import.meta.glob('../assets/vault/UI Designing/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const dynamicProjects: UIProject[] = Object.entries(UI_MODULES).map(([path, module], index) => {
  return {
    id: `ui-${index + 1}`,
    image: (module as any)?.default || (module as string) || '',
  };
});

// Fallback showcase items if vault contains no readable images
const fallbackProjects: UIProject[] = [
  { id: 'fb-1', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80' },
  { id: 'fb-2', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80' },
  { id: 'fb-3', image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1400&q=80' },
  { id: 'fb-4', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80' }
];

export const UI_PROJECTS: UIProject[] = dynamicProjects.length > 0 ? dynamicProjects : fallbackProjects;

