export interface Property {
  id: string;
  name: string;
  tagline: string;
  location: string;
  region: 'london' | 'france';
  beds: number;
  baths: number;
  guests: number;
  sqft: number;
  pricePerNight: number;
  currency: string;
  description: string;
  images: string[];
  amenities: {
    icon: string;
    label: string;
  }[];
  highlights: string[];
}

export const properties: Property[] = [
  {
    id: 'kensington-residence',
    name: 'The Kensington Residence',
    tagline: 'Timeless Elegance in the Heart of London',
    location: 'Kensington, London',
    region: 'london',
    beds: 3,
    baths: 2,
    guests: 6,
    sqft: 2200,
    pricePerNight: 450,
    currency: '£',
    description: `Nestled in one of London's most prestigious neighborhoods, The Kensington Residence offers an unparalleled blend of Victorian grandeur and contemporary luxury. This meticulously restored townhouse spans three floors of refined living space, featuring original period details alongside modern amenities.

The main reception rooms showcase soaring ceilings with ornate cornicing, sash windows flooding the space with natural light, and a working fireplace that anchors the drawing room. The bespoke kitchen, designed by a renowned London atelier, combines marble worktops with state-of-the-art appliances.

Each bedroom serves as a sanctuary of comfort, dressed in the finest linens and overlooking the private garden. The master suite features an en-suite bathroom clad in Carrara marble, complete with a freestanding soaking tub and rainfall shower.

Steps from Kensington Gardens and the cultural treasures of Museum Row, this residence offers the perfect base for those seeking the quintessential London experience.`,
    images: [
      'https://images.unsplash.com/photo-1766928210443-0be92ed5884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwZGVzaWduJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjgyOTY5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwbW9kZXJufGVufDF8fHx8MTc2ODI3Mjk3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    amenities: [
      { icon: 'wifi', label: 'High-Speed WiFi' },
      { icon: 'tv', label: 'Smart TV' },
      { icon: 'coffee', label: 'Espresso Machine' },
      { icon: 'wine', label: 'Wine Cellar' },
      { icon: 'fireplace', label: 'Working Fireplace' },
      { icon: 'garden', label: 'Private Garden' },
      { icon: 'parking', label: 'Private Parking' },
      { icon: 'concierge', label: '24/7 Concierge' },
      { icon: 'washer', label: 'Washer & Dryer' },
      { icon: 'climate', label: 'Climate Control' },
      { icon: 'security', label: 'Security System' },
      { icon: 'gym', label: 'Fitness Room' },
    ],
    highlights: [
      'Steps from Kensington Gardens',
      'Original Victorian architecture',
      'Private south-facing garden',
      'Award-winning interior design',
    ],
  },
  {
    id: 'mayfair-penthouse',
    name: 'Mayfair Penthouse',
    tagline: 'Contemporary Sophistication Above London\'s Finest Address',
    location: 'Mayfair, London',
    region: 'london',
    beds: 4,
    baths: 3,
    guests: 8,
    sqft: 3500,
    pricePerNight: 650,
    currency: '£',
    description: `Perched atop a distinguished Mayfair building, this penthouse represents the pinnacle of London living. Floor-to-ceiling windows frame panoramic views across Hyde Park and the London skyline, while wraparound terraces extend the living space into the city sky.

The interior, crafted by internationally acclaimed designers, marries clean contemporary lines with sumptuous materials: polished concrete floors warmed by Persian silk rugs, bespoke joinery in rich walnut, and accent walls in hand-applied Venetian plaster.

The open-plan living area flows seamlessly into a chef's kitchen equipped with professional-grade appliances and a temperature-controlled wine room. A private elevator ensures discrete arrival, while a dedicated home office provides the perfect space for those who blend work with pleasure.

The master suite occupies its own wing, featuring a dressing room that rivals the finest boutiques and a bathroom sanctuary with panoramic views, heated floors, and a steam shower with chromotherapy.`,
    images: [
      'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwbW9kZXJufGVufDF8fHx8MTc2ODI3Mjk3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    amenities: [
      { icon: 'wifi', label: 'High-Speed WiFi' },
      { icon: 'tv', label: 'Home Cinema' },
      { icon: 'coffee', label: 'Espresso Machine' },
      { icon: 'wine', label: 'Wine Room' },
      { icon: 'terrace', label: 'Wraparound Terrace' },
      { icon: 'elevator', label: 'Private Elevator' },
      { icon: 'parking', label: 'Valet Parking' },
      { icon: 'concierge', label: '24/7 Concierge' },
      { icon: 'spa', label: 'In-Residence Spa' },
      { icon: 'climate', label: 'Smart Home System' },
      { icon: 'security', label: 'Biometric Security' },
      { icon: 'gym', label: 'Private Gym' },
    ],
    highlights: [
      'Panoramic Hyde Park views',
      'Wraparound private terraces',
      'Award-winning contemporary design',
      'Private elevator access',
    ],
  },
  {
    id: 'villa-belle-vue',
    name: 'Villa Belle Vue',
    tagline: 'Provençal Paradise with Endless Lavender Views',
    location: 'Provence, France',
    region: 'france',
    beds: 5,
    baths: 4,
    guests: 10,
    sqft: 4500,
    pricePerNight: 850,
    currency: '€',
    description: `Set among the rolling lavender fields of Provence, Villa Belle Vue is a masterwork of contemporary Mediterranean design. Stone walls and terracotta tiles honor the region's heritage, while clean lines and expansive glazing bring the spectacular landscape into every room.

The villa unfolds across a single level, with wings extending to embrace a courtyard centered on a centuries-old olive tree. The main living pavilion features double-height ceilings, a fireplace carved from local limestone, and doors that fully retract to blur the boundary between inside and out.

The kitchen, designed for both intimate family meals and grand entertaining, opens to a covered terrace perfect for long lunches overlooking the infinity pool. Beyond, mature gardens lead to a private vineyard and a boules court shaded by plane trees.

Each suite offers its own private terrace, designed to capture either the morning sun or the spectacular Provençal sunsets that paint the sky in shades of amber and rose.`,
    images: [
      'https://images.unsplash.com/photo-1767950470198-c9cd97f8ed87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2wlMjB0ZXJyYWNlfGVufDF8fHx8MTc2ODI5NjkyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    amenities: [
      { icon: 'wifi', label: 'High-Speed WiFi' },
      { icon: 'pool', label: 'Infinity Pool' },
      { icon: 'coffee', label: 'Espresso Machine' },
      { icon: 'wine', label: 'Wine Cellar' },
      { icon: 'fireplace', label: 'Fireplace' },
      { icon: 'garden', label: 'Mature Gardens' },
      { icon: 'parking', label: 'Private Parking' },
      { icon: 'chef', label: 'Private Chef Available' },
      { icon: 'bbq', label: 'Outdoor Kitchen' },
      { icon: 'climate', label: 'Climate Control' },
      { icon: 'vineyard', label: 'Private Vineyard' },
      { icon: 'boules', label: 'Boules Court' },
    ],
    highlights: [
      'Panoramic lavender field views',
      'Infinity pool with countryside vistas',
      'Private vineyard',
      'Traditional Provençal architecture',
    ],
  },
  {
    id: 'maison-du-soleil',
    name: 'Maison du Soleil',
    tagline: 'Riviera Glamour on the Côte d\'Azur',
    location: 'Côte d\'Azur, France',
    region: 'france',
    beds: 4,
    baths: 3,
    guests: 8,
    sqft: 3200,
    pricePerNight: 720,
    currency: '€',
    description: `Clinging to the cliffs above the glittering Mediterranean, Maison du Soleil captures the timeless allure of the French Riviera. This mid-century villa, meticulously renovated for modern luxury, offers sweeping views from Cap Ferrat to the Italian coast.

The interiors pay homage to the Côte d'Azur's golden age: terrazzo floors, curved walls, and a palette of azure and cream that echoes the sea and sky. The living room, anchored by a vintage Murano chandelier, opens to a terrace seemingly suspended above the water.

A series of outdoor living spaces cascade down the hillside: a dining terrace shaded by a century-old bougainvillea, a pool deck with integrated sun loungers, and a private pathway leading to a secluded cove below.

The master suite occupies the villa's upper level, with a private balcony perfect for watching the sunrise over the Mediterranean. A separate guest pavilion ensures privacy for all, while the main house provides ample space for gathering and celebration.`,
    images: [
      'https://images.unsplash.com/photo-1759223198981-661cadbbff36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwbG91bmdlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjgyOTY5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    amenities: [
      { icon: 'wifi', label: 'High-Speed WiFi' },
      { icon: 'pool', label: 'Cliffside Pool' },
      { icon: 'coffee', label: 'Espresso Machine' },
      { icon: 'wine', label: 'Wine Cellar' },
      { icon: 'terrace', label: 'Multiple Terraces' },
      { icon: 'beach', label: 'Private Beach Access' },
      { icon: 'parking', label: 'Private Parking' },
      { icon: 'boat', label: 'Boat Mooring' },
      { icon: 'bbq', label: 'Outdoor Dining' },
      { icon: 'climate', label: 'Climate Control' },
      { icon: 'security', label: 'Gated Property' },
      { icon: 'spa', label: 'Outdoor Shower' },
    ],
    highlights: [
      'Panoramic Mediterranean views',
      'Private beach access',
      'Mid-century architectural gem',
      'Cliffside infinity pool',
    ],
  },
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function getPropertiesByRegion(region: 'london' | 'france'): Property[] {
  return properties.filter((p) => p.region === region);
}
