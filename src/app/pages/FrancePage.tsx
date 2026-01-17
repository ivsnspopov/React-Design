import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowLeft, MapPin } from 'lucide-react';
import { useRouter } from '@/app/context/RouterContext';
import { getPropertiesByRegion } from '@/app/data/properties';
import { PropertyCard } from '@/app/components/PropertyCard';
import { SectionDivider } from '@/app/components/Decorations';
import { SplitText } from '@/app/components/AnimatedText';

const regions = [
  {
    name: 'Provence',
    description: 'Rolling lavender fields, ancient hilltop villages, and the timeless rhythm of rural France. Provence offers an escape into a world of sun-drenched landscapes and Mediterranean flavors.',
    accent: 'Lavender fields • Olive groves • Roman heritage'
  },
  {
    name: "Côte d'Azur",
    description: 'The legendary French Riviera, where azure waters meet glamorous coastal towns. From Nice to Monaco, experience the epitome of Mediterranean sophistication.',
    accent: 'Azure coastline • Belle Époque elegance • Yacht harbors'
  },
  {
    name: 'Saint-Tropez',
    description: 'Once a humble fishing village, now an icon of jet-set luxury. Saint-Tropez blends bohemian charm with exclusive beach clubs and world-class dining.',
    accent: 'Beach clubs • Celebrity hideaway • Provençal markets'
  }
];

export function FrancePage() {
  const { navigate, goBack } = useRouter();
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const propertiesRef = useRef(null);
  const regionsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const introInView = useInView(introRef, { once: true, amount: 0.3 });
  const propertiesInView = useInView(propertiesRef, { once: true, amount: 0.2 });
  const regionsInView = useInView(regionsRef, { once: true, amount: 0.2 });

  const franceProperties = getPropertiesByRegion('france');

  return (
    <div className="min-h-screen bg-[var(--obsidian)]">
      {/* Back Navigation */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        onClick={goBack}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-[var(--pearl)] hover:text-[var(--champagne)] transition-colors group"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm uppercase tracking-[0.15em]">Back</span>
      </motion.button>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGZpZWxkcyUyMHByb3ZlbmNlJTIwc3Vuc2V0fGVufDF8fHx8MTc2ODI5NjkyMnww&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Lavender fields in Provence"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Burgundy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A1E24]/70 via-[#0D0D0D]/50 to-[#0D0D0D]" />
        
        {/* Warm terracotta accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#C4785A]/20 via-transparent to-[#8B4557]/20" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-3 text-[#C4785A]">
              <div className="w-12 h-[1px] bg-[#C4785A]" />
              <MapPin className="w-4 h-4" />
              <div className="w-12 h-[1px] bg-[#C4785A]" />
            </div>
          </motion.div>

          <SplitText
            text="SOUTH OF FRANCE"
            className="text-6xl md:text-8xl lg:text-9xl text-[var(--pearl)] mb-6"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300, letterSpacing: '0.1em' }}
            delay={0.5}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-lg md:text-xl text-[var(--silver)] max-w-2xl leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
          >
            Where the Mediterranean sun kisses ancient stone, and every moment is infused with the art de vivre
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-12 flex items-center gap-2 text-[#C4785A]"
          >
            <span className="text-xs uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-body)' }}>
              Scroll to discover
            </span>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--obsidian)] to-transparent" />
      </section>

      {/* Introduction Section */}
      <section ref={introRef} className="py-32 md:py-48 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs uppercase tracking-[0.25em] text-[#C4785A] mb-8" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
              L'Art de Vivre
            </div>
            
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl text-[var(--pearl)] mb-8 leading-[1.3]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              Where endless lavender fields meet the shimmering Mediterranean, 
              <span className="text-[#C4785A]"> time moves to a different rhythm</span>
            </h2>
            
            <p 
              className="text-lg text-[var(--silver)] leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            >
              From the sun-drenched vineyards of Provence to the glamorous shores of the Côte d'Azur, 
              our curated collection of French properties invites you to experience the authentic essence 
              of Mediterranean living. Wake to the scent of wild rosemary, dine beneath centuries-old 
              plane trees, and let the warm Provençal light transform your days into poetry.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider withOrnament className="py-8" />

      {/* Properties Section */}
      <section ref={propertiesRef} className="py-32 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={propertiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-[#C4785A] mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
              CURATED COLLECTION
            </div>
            <h2 
              className="text-4xl md:text-5xl text-[var(--pearl)]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
            >
              French Properties
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={propertiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
          >
            {franceProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={propertiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onClick={() => navigate('property', property.id)}
                className="cursor-pointer"
              >
                <PropertyCard {...property} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider className="py-8" />

      {/* Region Guide Section */}
      <section ref={regionsRef} className="py-32 md:py-40 px-6 bg-gradient-to-b from-[var(--obsidian)] via-[#1A1214] to-[var(--obsidian)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={regionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-[#C4785A] mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
              DISCOVER THE REGIONS
            </div>
            <h2 
              className="text-4xl md:text-5xl text-[var(--pearl)]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
            >
              A Guide to the South
            </h2>
          </motion.div>

          <div className="space-y-16">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 30 }}
                animate={regionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16 p-8 border border-[#2D2D2D] hover:border-[#C4785A]/30 transition-colors duration-500 bg-gradient-to-r from-[#1A1214]/50 to-transparent">
                  <div className="md:w-1/3">
                    <h3 
                      className="text-3xl md:text-4xl text-[var(--pearl)] group-hover:text-[#C4785A] transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                    >
                      {region.name}
                    </h3>
                    <div 
                      className="mt-4 text-xs uppercase tracking-[0.15em] text-[#C4785A]/70"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {region.accent}
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p 
                      className="text-[var(--silver)] leading-relaxed text-lg"
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
                    >
                      {region.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 text-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={goBack}
          className="inline-flex items-center gap-3 px-10 py-4 border border-[#C4785A] text-[#C4785A] hover:bg-[#C4785A] hover:text-[var(--obsidian)] transition-all duration-300 uppercase tracking-[0.2em] text-sm"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Return Home
        </motion.button>
      </section>
    </div>
  );
}
