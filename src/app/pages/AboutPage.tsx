import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowLeft, Gem, Shield, Eye, Award, ArrowRight } from 'lucide-react';
import { useRouter } from '@/app/context/RouterContext';
import { SectionDivider } from '@/app/components/Decorations';
import { SplitText } from '@/app/components/AnimatedText';

const values = [
  {
    icon: Gem,
    title: 'Curation',
    description: 'Every property is handpicked, personally visited, and meticulously vetted to meet our exacting standards.',
  },
  {
    icon: Shield,
    title: 'Authenticity',
    description: 'We celebrate the unique character of each residence, preserving architectural heritage while ensuring modern comfort.',
  },
  {
    icon: Eye,
    title: 'Discretion',
    description: 'Privacy is paramount. Our guests trust us with their most intimate retreats, and we honour that trust absolutely.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'From first inquiry to final departure, every interaction reflects our commitment to uncompromising quality.',
  },
];

const team = [
  {
    name: 'Sophie Laurent',
    role: 'Founder & Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face',
    bio: 'With two decades in luxury hospitality across Paris, London, and New York, Sophie brings an intuitive understanding of what transforms a beautiful space into an unforgettable experience.',
  },
  {
    name: 'James Whitworth',
    role: 'Director of Properties',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
    bio: 'A former architect with a passion for historic preservation, James personally oversees the curation and maintenance of every property in our collection.',
  },
  {
    name: 'Marie-Claire Dubois',
    role: 'Head of Guest Experience',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face',
    bio: "Marie-Claire's background in private concierge services ensures that every guest journey is seamlessly orchestrated from first contact to fond farewell.",
  },
];

const milestones = [
  { year: '2018', title: 'Founded', description: 'The Arivé Collection begins with a vision to redefine luxury stays.' },
  { year: '2019', title: 'First London Property', description: 'A Georgian townhouse in Mayfair becomes our inaugural residence.' },
  { year: '2020', title: 'Expanded to France', description: 'Provence and the Côte d\'Azur welcome our curated approach.' },
  { year: '2022', title: 'Private Members Circle', description: 'Launch of our invitation-only membership programme.' },
  { year: '2024', title: 'Mediterranean Collection', description: 'Expansion into Italy, Greece, and the Balearic Islands.' },
];

export function AboutPage() {
  const { navigate } = useRouter();

  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const storyInView = useInView(storyRef, { once: true, margin: '-100px' });
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const teamInView = useInView(teamRef, { once: true, margin: '-100px' });
  const timelineInView = useInView(timelineRef, { once: true, margin: '-100px' });

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
      <section ref={heroRef} className="relative h-[80vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/50 to-[#0D0D0D]" />
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
              The Arivé Collection
            </span>
          </motion.div>

          <h1
            className="text-[60px] md:text-[100px] lg:text-[140px] text-[#F5F5F0] leading-[0.9] tracking-[0.08em]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
          >
            <SplitText text="OUR STORY" type="chars" delay={0.5} staggerDelay={0.04} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 max-w-2xl text-lg md:text-xl text-[#8A8A8A] leading-relaxed italic"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Where the art of arrival becomes the beginning of something extraordinary
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

      {/* Brand Story */}
      <section ref={storyRef} className="py-32 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <span
              className="text-xs uppercase tracking-[0.3em] text-[#C9A86C] block mb-4"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
            >
              Our Philosophy
            </span>
          </motion.div>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-[#F5F5F0]/90 leading-relaxed"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              The Arivé Collection was born from a simple belief: that the most memorable journeys are shaped not by where you stay, but by{' '}
              <span className="text-[#C9A86C]">how a place makes you feel</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg text-[#8A8A8A] leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Founded in 2018 by a collective of hoteliers, designers, and passionate travellers, we set out to curate a portfolio of exceptional residences that offer something hotels cannot—the intimacy of a private home combined with the refinement of world-class hospitality.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg text-[#8A8A8A] leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Each property in our collection has been personally selected and meticulously prepared. We don't simply list homes; we craft experiences. From the thread count of the linens to the provenance of the wines in the cellar, every detail reflects our commitment to understated luxury.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-[#F5F5F0]/90 leading-relaxed italic"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              Our name, Arivé, speaks to the moment of arrival—that threshold between the ordinary and the extraordinary. We believe this moment should mark the beginning of something unforgettable.
            </motion.p>
          </div>

          <SectionDivider withOrnament className="mt-24" />
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 px-6 md:px-20 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span
              className="text-xs uppercase tracking-[0.3em] text-[#C9A86C] block mb-4"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
            >
              Our Principles
            </span>
            <h2
              className="text-4xl md:text-5xl text-[#F5F5F0]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group text-center"
                >
                  <div className="relative mb-6 inline-flex">
                    <div className="w-20 h-20 rounded-full border border-[#2D2D2D] flex items-center justify-center group-hover:border-[#C9A86C] transition-colors duration-500">
                      <IconComponent className="w-8 h-8 text-[#C9A86C]" />
                    </div>
                  </div>

                  <h3
                    className="text-xl text-[#F5F5F0] mb-3"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                  >
                    {value.title}
                  </h3>

                  <p
                    className="text-sm text-[#8A8A8A] leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-32 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span
              className="text-xs uppercase tracking-[0.3em] text-[#C9A86C] block mb-4"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
            >
              The People
            </span>
            <h2
              className="text-4xl md:text-5xl text-[#F5F5F0]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              Leadership Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="aspect-[4/5] overflow-hidden"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3
                  className="text-xl text-[#F5F5F0] mb-1"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                >
                  {member.name}
                </h3>

                <p
                  className="text-sm text-[#C9A86C] uppercase tracking-[0.15em] mb-4"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                >
                  {member.role}
                </p>

                <p
                  className="text-sm text-[#8A8A8A] leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>

          <SectionDivider withOrnament className="mt-24" />
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-24 px-6 md:px-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span
              className="text-xs uppercase tracking-[0.3em] text-[#C9A86C] block mb-4"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
            >
              Our Journey
            </span>
            <h2
              className="text-4xl md:text-5xl text-[#F5F5F0]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              Key Milestones
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={timelineInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A86C] via-[#C9A86C]/50 to-transparent origin-top"
            />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-[#C9A86C] z-10" />

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <span
                      className="text-3xl text-[#C9A86C] block mb-2"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
                    >
                      {milestone.year}
                    </span>
                    <h3
                      className="text-xl text-[#F5F5F0] mb-2"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      className="text-sm text-[#8A8A8A]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {milestone.description}
                    </p>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center bg-[#0D0D0D]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2
            className="text-4xl md:text-5xl text-[#F5F5F0] mb-6"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
          >
            Begin Your Journey
          </h2>
          <p
            className="text-lg text-[#8A8A8A] mb-10"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Discover the art of exceptional stays. Our team is ready to guide you to your perfect residence.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('home')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#C9A86C] text-[#0D0D0D] text-sm uppercase tracking-[0.2em] hover:bg-[#D4B87A] transition-all duration-300"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
