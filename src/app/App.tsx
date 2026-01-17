import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Navigation } from '@/app/components/Navigation';
import { PropertyCard } from '@/app/components/PropertyCard';
import { ArticleCard } from '@/app/components/ArticleCard';

export default function App() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <BrandIntroduction />
      <DestinationsSection />
      <FeaturedProperties />
      <PhilosophySection />
      <JournalSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: scrollY * 0.5 }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1767713421795-ca09a9d05c38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGludGVyaW9yJTIwZGFyayUyMG1vb2R5fGVufDF8fHx8MTc2ODI5NjkxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury interior"
          className="w-full h-[120vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div className="text-[#F5F5F0] text-sm md:text-base tracking-[0.15em] mb-2" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
            THE ARIVÉ COLLECTION
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-32 h-[1px] bg-[#C9A86C] mb-12"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-4xl md:text-5xl lg:text-6xl text-[#F5F5F0] uppercase max-w-5xl mb-16"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 300, letterSpacing: '0.15em', lineHeight: '1.1' }}
        >
          EXCEPTIONAL STAYS
          <br />
          UNFORGETTABLE EXPERIENCES
        </motion.h1>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="border border-[#C9A86C] text-[#C9A86C] px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-[#C9A86C] hover:text-[#0D0D0D] transition-all duration-300"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
          onClick={() => document.getElementById('brand-intro')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Discover More
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-6 h-6 text-[#C9A86C]" />
          </motion.div>
          <span className="text-xs text-[#8A8A8A] tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function BrandIntroduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="brand-intro" ref={ref} className="py-32 md:py-48 px-6 bg-[#0D0D0D]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-[#C9A86C] mb-3" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
            THE ARIVÉ COLLECTION
          </div>
          <div className="text-sm tracking-[0.15em] text-[#8A8A8A]" style={{ fontFamily: 'var(--font-body)' }}>
            London · South of France
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-10 h-[1px] bg-[#C9A86C] mx-auto mb-12"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-[#8A8A8A] leading-[1.8] mb-12"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
        >
          A refined collection of exceptional residences for the discerning traveller. Whether seeking the vibrant sophistication of London or the sun-drenched tranquility of Provence, each property has been curated to offer an experience that transcends the ordinary.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl md:text-3xl text-[#F5F5F0] italic"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
        >
          Above all, savour the luxury of time
          <br />
          slowly passing, fully enjoyed.
        </motion.p>
      </div>
    </section>
  );
}

function DestinationsSection() {
  const londonRef = useRef(null);
  const franceRef = useRef(null);
  const londonInView = useInView(londonRef, { once: true, amount: 0.3 });
  const franceInView = useInView(franceRef, { once: true, amount: 0.3 });

  return (
    <section className="grid md:grid-cols-2 h-auto md:h-screen">
      {/* London */}
      <motion.div
        ref={londonRef}
        initial={{ opacity: 0 }}
        animate={londonInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative h-[80vh] md:h-full overflow-hidden group"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1632743441209-8a09b8a37e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjgyOTY5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="London"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 to-[#0A1628]/60 group-hover:from-[#0A1628]/70 group-hover:to-[#0A1628]/50 transition-all duration-500" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={londonInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl text-[#F5F5F0] mb-6"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400, letterSpacing: '0.02em' }}
          >
            LONDON
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={londonInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-[#B8C5D0] italic mb-8 max-w-md"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
          >
            Refined city living in historic quarters
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={londonInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border border-[#2C3E50] text-[#B8C5D0] px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#2C3E50] hover:text-[#F5F5F0] transition-all duration-300 group/btn"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Explore
            <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>

      {/* South of France */}
      <motion.div
        ref={franceRef}
        initial={{ opacity: 0 }}
        animate={franceInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative h-[80vh] md:h-full overflow-hidden group"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1600759487717-62bbb608106e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm92ZW5jZSUyMGZyYW5jZSUyMGxhdmVuZGVyJTIwc3Vuc2V0fGVufDF8fHx8MTc2ODI5NjkyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="South of France"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0A0A]/80 to-[#1A0A0A]/60 group-hover:from-[#1A0A0A]/70 group-hover:to-[#1A0A0A]/50 transition-all duration-500" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={franceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl text-[#F5F5F0] mb-6"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400, letterSpacing: '0.02em' }}
          >
            SOUTH OF FRANCE
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={franceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-[#D4C4B0] italic mb-8 max-w-md"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
          >
            Mediterranean sanctuary amid lavender fields
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={franceInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border border-[#A0522D] text-[#D4C4B0] px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#A0522D] hover:text-[#F5F5F0] transition-all duration-300 group/btn"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Explore
            <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

function FeaturedProperties() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const scrollRef = useRef<HTMLDivElement>(null);

  const properties = [
    {
      location: 'LONDON',
      name: 'The Kensington Residence',
      city: 'Kensington, London',
      image: 'https://images.unsplash.com/photo-1766928210443-0be92ed5884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwZGVzaWduJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjgyOTY5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      beds: 3,
      baths: 2,
      guests: 6,
      price: '£450'
    },
    {
      location: 'LONDON',
      name: 'Mayfair Penthouse',
      city: 'Mayfair, London',
      image: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwbW9kZXJufGVufDF8fHx8MTc2ODI3Mjk3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      beds: 4,
      baths: 3,
      guests: 8,
      price: '£650'
    },
    {
      location: 'FRANCE',
      name: 'Villa Belle Vue',
      city: 'Provence, France',
      image: 'https://images.unsplash.com/photo-1767950470198-c9cd97f8ed87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2wlMjB0ZXJyYWNlfGVufDF8fHx8MTc2ODI5NjkyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      beds: 5,
      baths: 4,
      guests: 10,
      price: '€850'
    },
    {
      location: 'FRANCE',
      name: 'Maison du Soleil',
      city: 'Côte d\'Azur, France',
      image: 'https://images.unsplash.com/photo-1759223198981-661cadbbff36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwbG91bmdlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjgyOTY5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      beds: 4,
      baths: 3,
      guests: 8,
      price: '€720'
    }
  ];

  return (
    <section ref={ref} className="py-32 md:py-48 bg-[#0D0D0D]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-6"
      >
        <div className="text-xs uppercase tracking-[0.2em] text-[#C9A86C] mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
          CURATED PROPERTIES
        </div>
      </motion.div>

      <motion.div
        ref={scrollRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex gap-8 overflow-x-auto px-6 md:px-20 pb-8 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </motion.div>

      {/* Scroll Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {properties.map((_, index) => (
          <div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-[#C9A86C]' : 'bg-[#2D2D2D]'}`} />
        ))}
      </div>
    </section>
  );
}

function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1761162442936-c37247eb3132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5kbGVsaXQlMjBpbnRlcmlvciUyMHdhcm18ZW58MXx8fHwxNzY4Mjk2OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Philosophy"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="w-16 h-[1px] bg-[#C9A86C] mb-12"
        />

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl text-[#F5F5F0] italic max-w-4xl mb-12 leading-[1.3]"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
        >
          "Above all, savour the luxury of time slowly passing, fully enjoyed."
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-16 h-[1px] bg-[#C9A86C] mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm uppercase tracking-[0.15em] text-[#8A8A8A] mb-8"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          A history forged by people
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          href="#about"
          className="text-[#C9A86C] hover:text-[#FDFCFA] transition-colors text-sm uppercase tracking-[0.1em] group/link"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Our Story
          <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}

function JournalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const articles = [
    {
      category: 'TRAVEL',
      title: 'Hidden Gems of Provence',
      excerpt: 'Discover the lesser-known villages and vineyards that make this region truly magical.',
      readTime: '8 min read',
      date: 'Jan 2025',
      image: 'https://images.unsplash.com/photo-1600759487717-62bbb608106e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm92ZW5jZSUyMGZyYW5jZSUyMGxhdmVuZGVyJTIwc3Vuc2V0fGVufDF8fHx8MTc2ODI5NjkyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      variant: 'featured' as const
    },
    {
      category: 'CULTURE',
      title: 'London\'s Art Scene',
      excerpt: '',
      readTime: '5 min read',
      date: 'Jan 2025',
      image: 'https://images.unsplash.com/photo-1632743441209-8a09b8a37e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjgyOTY5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      variant: 'small' as const
    },
    {
      category: 'LIFESTYLE',
      title: 'The Art of Slow Living',
      excerpt: '',
      readTime: '6 min read',
      date: 'Dec 2024',
      image: 'https://images.unsplash.com/photo-1761162442936-c37247eb3132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5kbGVsaXQlMjBpbnRlcmlvciUyMHdhcm18ZW58MXx8fHwxNzY4Mjk2OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      variant: 'small' as const
    },
    {
      category: 'DESIGN',
      title: 'Curating Your Perfect Stay',
      excerpt: '',
      readTime: '7 min read',
      date: 'Dec 2024',
      image: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwbW9kZXJufGVufDF8fHx8MTc2ODI3Mjk3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      variant: 'wide' as const
    }
  ];

  return (
    <section ref={ref} className="py-32 md:py-48 px-6 md:px-20 bg-[#0D0D0D]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl text-[#F5F5F0] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>
          THE JOURNAL
        </h2>
        <p className="text-[#8A8A8A]" style={{ fontFamily: 'var(--font-body)' }}>
          Stories from our world
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ArticleCard {...articles[0]} />
          </motion.div>

          <div className="grid grid-rows-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <ArticleCard {...articles[1]} />
              <ArticleCard {...articles[2]} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ArticleCard {...articles[3]} />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#journal"
            className="text-[#C9A86C] hover:text-[#FDFCFA] transition-colors text-sm uppercase tracking-[0.1em] group/link"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            View All Stories
            <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 bg-[#1A1A1A]">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl text-[#F5F5F0] uppercase mb-6"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 400, letterSpacing: '0.1em' }}
        >
          STAY INSPIRED
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#8A8A8A] mb-10 leading-[1.7]"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Receive curated stories, exclusive offers, and insider guides to our destinations.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 mb-6"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 h-12 px-6 bg-transparent border border-[#2D2D2D] text-[#F5F5F0] placeholder:text-[#4A4A4A] focus:border-[#C9A86C] focus:outline-none transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          />
          <button
            type="submit"
            className="h-12 px-8 bg-[#C9A86C] text-[#0D0D0D] text-xs uppercase tracking-[0.15em] hover:bg-[#A68B4D] transition-colors group/btn"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Subscribe
            <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xs text-[#4A4A4A]"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          We respect your privacy. Unsubscribe at any time.
        </motion.p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0D0D0D] px-6 md:px-20 pt-24 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Logo & Tagline */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <div className="text-[#C9A86C] text-xl tracking-[0.15em] mb-1" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
              THE ARIVÉ COLLECTION
            </div>
          </div>
          <p className="text-sm text-[#8A8A8A] italic" style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}>
            Exceptional Stays, Unforgettable Experiences
          </p>
        </div>

        <div className="border-t border-[#2D2D2D] mb-12" />

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#F5F5F0] mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
              Stays
            </h4>
            <ul className="space-y-2">
              {['London', 'France', 'All Properties'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#8A8A8A] hover:text-[#F5F5F0] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#F5F5F0] mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
              Company
            </h4>
            <ul className="space-y-2">
              {['About', 'Journal', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#8A8A8A] hover:text-[#F5F5F0] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#F5F5F0] mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
              Connect
            </h4>
            <ul className="space-y-2">
              {['Contact', 'Enquire', 'Newsletter'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#8A8A8A] hover:text-[#F5F5F0] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-[#F5F5F0] mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
              Follow
            </h4>
            <ul className="space-y-2">
              {['Instagram', 'Facebook', 'LinkedIn'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#8A8A8A] hover:text-[#F5F5F0] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2D2D2D] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#4A4A4A]" style={{ fontFamily: 'var(--font-body)' }}>
            <p>© 2025 The Arivé Collection</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#8A8A8A] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#8A8A8A] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#8A8A8A] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}