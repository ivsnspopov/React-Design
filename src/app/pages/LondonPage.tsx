import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowLeft, MapPin } from 'lucide-react';
import { useRouter } from '@/app/context/RouterContext';
import { getPropertiesByRegion, Property } from '@/app/data/properties';
import { PropertyCard } from '@/app/components/PropertyCard';
import { SectionDivider } from '@/app/components/Decorations';
import { SplitText } from '@/app/components/AnimatedText';

const neighborhoods = [
  {
    name: 'Chelsea',
    description:
      "Where bohemian heritage meets refined elegance. Tree-lined streets, world-class galleries, and the timeless charm of the King's Road create an atmosphere of cultivated sophistication.",
    image:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVsc2VhJTIwbG9uZG9ufGVufDF8fHx8MTc2ODI5NjkyMHww&ixlib=rb-4.1.0&q=80&w=800',
  },
  {
    name: 'Mayfair',
    description:
      'The pinnacle of London luxury. Georgian townhouses, private members clubs, and Michelin-starred dining define this storied enclave of understated opulence.',
    image:
      'https://images.unsplash.com/photo-1520986606214-8b456906c813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXlmYWlyJTIwbG9uZG9ufGVufDF8fHx8MTc2ODI5NjkyMHww&ixlib=rb-4.1.0&q=80&w=800',
  },
  {
    name: 'Notting Hill',
    description:
      'Pastel-hued Victorian terraces and the legendary Portobello Road. A vibrant tapestry of antiques, independent boutiques, and hidden garden squares.',
    image:
      'https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3R0aW5nJTIwaGlsbCUyMGxvbmRvbnxlbnwxfHx8fDE3NjgyOTY5MjB8MA&ixlib=rb-4.1.0&q=80&w=800',
  },
];

export function LondonPage() {
  const { navigate } = useRouter();
  const properties = getPropertiesByRegion('london');

  const introRef = useRef<HTMLDivElement>(null);
  const introInView = useInView(introRef, { once: true, margin: '-100px' });

  const propertiesRef = useRef<HTMLDivElement>(null);
  const propertiesInView = useInView(propertiesRef, { once: true, margin: '-100px' });

  const neighborhoodRef = useRef<HTMLDivElement>(null);
  const neighborhoodInView = useInView(neighborhoodRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        onClick={() => navigate('home')}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-[#F5F5F0]/70 hover:text-[#C9A86C] transition-colors duration-300 group"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="text-sm uppercase tracking-[0.15em]">Back</span>
      </motion.button>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBza3lsaW5lJTIwdGhhbWVzfGVufDF8fHx8MTc2ODI5NjkyMHww&ixlib=rb-4.1.0&q=80&w=1920"
            alt="London Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/60 via-[#0D0D0D]/40 to-[#0D0D0D]" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <span
              className="text-xs uppercase tracking-[0.3em] text-[#C9A86C]"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
            >
              Discover
            </span>
          </motion.div>

          <h1
            className="text-[80px] md:text-[140px] lg:text-[180px] text-[#F5F5F0] leading-[0.9] tracking-[0.05em]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
          >
            <SplitText text="LONDON" type="chars" delay={0.5} staggerDelay={0.05} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 max-w-xl text-lg text-[#8A8A8A] leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Where history whispers through Georgian squares and modern luxury finds its most refined expression
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-16 bg-gradient-to-b from-[#C9A86C] to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section ref={introRef} className="py-32 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-3xl text-[#F5F5F0]/90 leading-relaxed"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
          >
            A London stay is not merely accommodation—it is an{' '}
            <span className="text-[#C9A86C]">immersion</span> into centuries of culture, art, and unparalleled elegance.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-base text-[#8A8A8A] leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            From the quiet grandeur of Mayfair to the artistic spirit of Chelsea, our curated collection of residences
            offers sanctuary in the world's most storied neighborhoods.
          </motion.p>
        </div>

        <SectionDivider withOrnament className="mt-20" />
      </section>

      {/* Properties Grid */}
      <section ref={propertiesRef} className="py-20 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={propertiesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs uppercase tracking-[0.3em] text-[#C9A86C] block mb-4"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Our Collection
          </span>
          <h2
            className="text-4xl md:text-5xl text-[#F5F5F0]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
          >
            London Properties
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {properties.map((property: Property, index: number) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              animate={propertiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div onClick={() => navigate('property', property.id)} className="cursor-pointer">
                <PropertyCard {...property} />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('property', property.id)}
                className="mt-6 w-full py-4 border border-[#C9A86C]/30 text-[#C9A86C] text-sm uppercase tracking-[0.2em] hover:bg-[#C9A86C]/10 transition-colors duration-300"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                View Property
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Neighborhood Guide */}
      <section ref={neighborhoodRef} className="py-32 px-6 md:px-20 bg-[#0A0A0A]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={neighborhoodInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span
            className="text-xs uppercase tracking-[0.3em] text-[#C9A86C] block mb-4"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Explore
          </span>
          <h2
            className="text-4xl md:text-5xl text-[#F5F5F0]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
          >
            Iconic Neighborhoods
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {neighborhoods.map((neighborhood, index) => (
            <motion.div
              key={neighborhood.name}
              initial={{ opacity: 0, y: 40 }}
              animate={neighborhoodInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-6">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-[280px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C9A86C]" />
                  <span
                    className="text-sm text-[#F5F5F0]/80"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    London
                  </span>
                </div>
              </div>

              <h3
                className="text-2xl text-[#F5F5F0] mb-3"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >
                {neighborhood.name}
              </h3>

              <p
                className="text-sm text-[#8A8A8A] leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {neighborhood.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('home')}
          className="inline-flex items-center gap-3 px-8 py-4 border border-[#C9A86C] text-[#C9A86C] text-sm uppercase tracking-[0.2em] hover:bg-[#C9A86C] hover:text-[#0D0D0D] transition-all duration-300"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Home
        </motion.button>
      </section>
    </div>
  );
}
