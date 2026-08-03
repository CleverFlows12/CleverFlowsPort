export interface Tool {
  name: string;
  icon: string;
  link: string;
  category: string;
  years: string;
  accentColor: string;
}

export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@CleverFlows12';

export const TOOLS_DATA: Tool[] = [
  {
    name: 'Blender',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg',
    link: YOUTUBE_CHANNEL_URL,
    category: '3D Modeling & Animation',
    years: '5+ Years',
    accentColor: '#EA7600',
  },
  {
    name: 'Roblox Studio',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Roblox_player_2022_icon.svg',
    link: YOUTUBE_CHANNEL_URL,
    category: 'Game & Environment Dev',
    years: '4+ Years',
    accentColor: '#00A2FF',
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    link: YOUTUBE_CHANNEL_URL,
    category: 'UI / UX Design',
    years: '3+ Years',
    accentColor: '#F24E1E',
  },
  {
    name: 'Photoshop',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg',
    link: YOUTUBE_CHANNEL_URL,
    category: 'GFX & Graphics',
    years: '4+ Years',
    accentColor: '#31A8FF',
  },
  {
    name: 'After Effects',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg',
    link: YOUTUBE_CHANNEL_URL,
    category: 'Motion VFX',
    years: '3+ Years',
    accentColor: '#9999FF',
  },
];
