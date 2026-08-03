export interface PricingItem {
  label: string;
  price: string;
}

export interface PricingTier {
  name: string;
  items: PricingItem[];
  footer: string;
}

export const PRICING_DATA: PricingTier[] = [
  {
    name: 'UI Designing',
    items: [
      { label: 'Screen', price: '350' },
      { label: 'Buttons', price: '150' },
      { label: 'Hud', price: '500-1K' },
    ],
    footer: 'Full responsive',
  },
  {
    name: 'Animation',
    items: [
      { label: 'Emote', price: '200' },
      { label: 'Movement', price: '600' },
      { label: 'Full scene', price: '1000' },
    ],
    footer: 'Custom High-End Motion',
  },
  {
    name: 'GFX',
    items: [
      { label: 'Head GFX', price: '75' },
      { label: 'Full Body', price: '100' },
      { label: 'Thumbnail', price: '300' },
    ],
    footer: '+100 For source file',
  },
];
