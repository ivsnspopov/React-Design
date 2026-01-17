export interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  relatedArticleIds: string[];
}

const articles: Article[] = [
  {
    id: 'hidden-gems-provence',
    category: 'TRAVEL',
    title: 'Hidden Gems of Provence',
    excerpt: 'Discover the lesser-known villages and vineyards that make this region truly magical.',
    content: `Provence is a land of lavender fields, ancient stone villages, and vineyards that stretch to the horizon. But beyond the well-trodden paths of Avignon and Aix-en-Provence lies a secret world waiting to be discovered.

In the shadow of Mont Ventoux, you'll find villages like Venasque and Séguret, where time seems to have stopped centuries ago. Here, the morning light filters through narrow cobblestone streets, illuminating centuries-old doorways draped in climbing roses.

"The true Provence reveals itself not in the famous cities, but in the quiet moments—a glass of rosé at sunset, the scent of wild thyme on the breeze, the distant bells of a village church."

The local markets are where the soul of Provence truly comes alive. In Lourmarin, we discovered a cheese maker who has been perfecting his craft for three generations. His aged tomme, paired with local figs and a drizzle of lavender honey, became our most treasured memory.

For those seeking the ultimate Provençal experience, we recommend the lesser-known Luberon villages. Bonnieux offers commanding views across the valley, while Ménerbes—once home to Peter Mayle—retains an authenticity that larger destinations have lost.

The vineyards of Châteauneuf-du-Pape need no introduction, but venture further to the Dentelles de Montmirail, and you'll find boutique producers crafting exceptional wines in near obscurity. These are the bottles that never leave France, reserved for those who take the time to discover them.

As the sun sets over the ochre cliffs of Roussillon, painting the sky in shades of amber and rose, you begin to understand why artists have been drawn to this land for centuries. Provence is not just a destination—it is a state of mind.`,
    author: 'Charlotte Beaumont',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    date: 'January 15, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1600759487717-62bbb608106e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm92ZW5jZSUyMGZyYW5jZSUyMGxhdmVuZGVyJTIwc3Vuc2V0fGVufDF8fHx8MTc2ODI5NjkyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    relatedArticleIds: ['art-of-slow-living', 'curating-perfect-stay']
  },
  {
    id: 'london-art-scene',
    category: 'CULTURE',
    title: "London's Art Scene",
    excerpt: 'A journey through the capital\'s most inspiring galleries and hidden artistic treasures.',
    content: `London's art scene is a living, breathing entity—constantly evolving, always surprising. From the hallowed halls of the National Gallery to the raw energy of East London's warehouse galleries, the city offers an unparalleled artistic journey.

Begin your exploration in Mayfair, where Cork Street remains the epicenter of British contemporary art. Here, white-walled galleries showcase everything from emerging talents to established masters. The atmosphere is rarefied but welcoming, and many dealers are happy to discuss their collections over a cup of tea.

"Art in London isn't confined to galleries. It spills onto the streets, infiltrates the architecture, and permeates the very air we breathe."

Cross the river to the South Bank, and the landscape shifts dramatically. The Tate Modern, housed in the former Bankside Power Station, has become a pilgrimage site for contemporary art lovers. But it's in the surrounding streets that you'll find the real surprises—pop-up exhibitions in railway arches, artist studios open to visitors, and murals that transform entire buildings.

For a more intimate experience, venture to Shoreditch and Hackney. These neighborhoods pulse with creative energy. The White Cube's outpost here has transformed the area into a destination, while smaller galleries like Maureen Paley continue to discover the artists of tomorrow.

Don't overlook the private collections. The Wallace Collection, with its masterpieces hung in a sumptuous Georgian townhouse, offers a glimpse into aristocratic taste. Meanwhile, the Dulwich Picture Gallery—Britain's first purpose-built public art gallery—houses an exceptional collection of Old Masters in an elegant setting designed by Sir John Soane.

The true magic of London's art scene lies in its accessibility. Whether you're admiring a Rembrandt or discovering a street artist's latest work, art in this city is a democratic pleasure, available to all who seek it.`,
    author: 'James Crawford',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    date: 'January 8, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1632743441209-8a09b8a37e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjgyOTY5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    relatedArticleIds: ['hidden-gems-provence', 'curating-perfect-stay']
  },
  {
    id: 'art-of-slow-living',
    category: 'LIFESTYLE',
    title: 'The Art of Slow Living',
    excerpt: 'Embracing a mindful approach to travel and life in our curated properties.',
    content: `In a world that moves ever faster, the art of slow living has become not just a luxury, but a necessity. It is the conscious decision to step off the treadmill, to savor rather than consume, to be present rather than productive.

Our properties are designed with this philosophy at their core. From the heavy linen curtains that filter the morning light to the absence of televisions in bedrooms, every detail invites you to slow down.

"Slow living is not about doing nothing. It is about doing everything with intention—eating, walking, reading, simply being."

Consider the morning ritual. In a traditional hotel, breakfast is a hurried affair—a buffet line, a quick coffee, a dash to the day's activities. In our homes, we encourage a different approach. The kitchen is stocked with local produce: farm eggs, artisan bread, preserves made by the village grandmother. Take your time. Let the coffee brew properly. Watch the light change on the garden.

The spaces we create encourage this mindfulness. Libraries filled with carefully curated books—not the abandoned paperbacks of typical rentals, but editions chosen for their beauty and wisdom. Gardens designed for contemplation, with stone benches positioned to catch the afternoon sun. Bathrooms that feel like sanctuaries, with deep soaking tubs and products made from local botanicals.

This approach extends to our recommendations. We won't suggest the popular restaurant where you'll need to shout over the crowd. Instead, we'll introduce you to the chef who cooks only twelve covers, serving dishes that tell the story of the land. We won't point you to the famous viewpoint clogged with tour buses. We'll share the secret path that locals have walked for generations.

Slow living is, ultimately, about quality over quantity. One perfect espresso rather than three forgettable cups. One profound conversation rather than a dozen superficial exchanges. One sunset watched from beginning to end rather than a hundred photographs of horizons never truly seen.

In embracing this philosophy, we discover something remarkable: time expands. A week of slow living contains more life than a month of rushing. And when we return to our daily routines, we carry with us a different rhythm, a deeper appreciation, a memory of what it means to truly live.`,
    author: 'Elena Marchetti',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    date: 'December 22, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1761162442936-c37247eb3132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5kbGVsaXQlMjBpbnRlcmlvciUyMHdhcm18ZW58MXx8fHwxNzY4Mjk2OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    relatedArticleIds: ['hidden-gems-provence', 'curating-perfect-stay']
  },
  {
    id: 'curating-perfect-stay',
    category: 'DESIGN',
    title: 'Curating Your Perfect Stay',
    excerpt: 'How thoughtful design transforms a house into an unforgettable experience.',
    content: `What separates a beautiful house from an extraordinary home? It is not the thread count of the sheets or the pedigree of the furniture. It is the invisible art of curation—the thoughtful assembly of elements that create an experience greater than the sum of its parts.

We begin each property with a simple question: what story does this place want to tell? A Georgian townhouse in Bath speaks differently than a converted barn in the Cotswolds. A cliffside villa in Cornwall has its own vocabulary distinct from a Chelsea mews house. Our role is to listen, and then to amplify.

"Great design is not about following trends. It is about creating spaces that feel inevitable, as though they could never have been any other way."

The foundation is always quality. We insist on proper beds—not the thin mattresses of budget accommodations, but deep, supportive surfaces dressed in the finest linens. We specify professional-grade kitchens because we believe guests should be able to cook as well as they would at home—better, in fact, with the superior ingredients of their new surroundings.

But quality alone is not enough. The magic lies in the details that surprise and delight. A collection of vintage maps that tells the history of the region. A record player with a carefully selected stack of vinyl, chosen to complement the character of the house. Art that provokes conversation, not merely fills wall space.

Lighting, often overlooked, is perhaps our greatest obsession. We banish harsh overhead fixtures in favor of layered illumination—table lamps that create pools of warmth, candles that dance on winter evenings, carefully positioned mirrors that multiply the natural light. The right lighting transforms a room's entire personality.

Every object must earn its place. We ask: is this useful? Is it beautiful? Ideally, both. The coffee table book should be genuinely interesting, not merely impressive. The throw blanket should beg to be touched. The artwork should hold your gaze long after you've looked away.

The result is spaces that feel simultaneously lived-in and pristine, personal and universal. Our guests often tell us they feel at home immediately—yet also transported to somewhere entirely new. That paradox is precisely what we seek. A curated stay should feel like visiting the home of someone with impeccable taste who has been expecting you.`,
    author: 'Oliver Prescott',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    date: 'December 15, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwbW9kZXJufGVufDF8fHx8MTc2ODI3Mjk3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    relatedArticleIds: ['art-of-slow-living', 'london-art-scene']
  }
];

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}

export function getRelatedArticles(articleId: string): Article[] {
  const article = getArticleById(articleId);
  if (!article) return [];
  
  return article.relatedArticleIds
    .map(id => getArticleById(id))
    .filter((a): a is Article => a !== undefined);
}

export function getAllArticles(): Article[] {
  return articles;
}
