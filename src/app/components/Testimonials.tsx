import { Star } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "An extraordinary experience that exceeded every expectation. The attention to detail was impeccable.",
    author: "Alexandra M.",
    location: "London Residence",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  },
  {
    quote: "From the moment we arrived, we felt like royalty. Every staff member anticipated our needs before we even knew them ourselves.",
    author: "Jonathan R.",
    location: "Monaco Suite",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    quote: "The perfect blend of timeless elegance and modern luxury. We've found our forever destination.",
    author: "Isabelle C.",
    location: "Parisian Penthouse",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
  },
  {
    quote: "Unparalleled service and breathtaking views. This was more than a stay—it was a transformative experience.",
    author: "Marcus W.",
    location: "Santorini Villa",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
  }
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  const avatarY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(201, 168, 108, 0.08)" }}
      className="relative bg-[#222222] rounded-sm p-8 md:p-10 flex-shrink-0 w-[340px] md:w-auto cursor-pointer transition-shadow duration-500"
    >
      <span
        className="absolute top-6 left-8 text-[80px] leading-none text-[#C9A86C]/20 pointer-events-none select-none"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        "
      </span>

      <div className="relative z-10">
        <div className="flex gap-1 mb-6">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#C9A86C] text-[#C9A86C]" />
          ))}
        </div>

        <blockquote
          className="text-[20px] md:text-[22px] text-[#F5F5F0]/90 leading-[1.6] mb-8 italic"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
        >
          {testimonial.quote}
        </blockquote>

        <div className="flex items-center gap-4">
          <motion.div
            style={{ y: avatarY }}
            className="relative"
          >
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C9A86C]/30 shadow-lg shadow-black/20">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div>
            <p
              className="text-[15px] text-[#F5F5F0]"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
            >
              {testimonial.author}
            </p>
            <p
              className="text-[13px] text-[#8A8A8A]"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
            >
              {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="bg-[#1A1A1A] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <span
            className="text-[11px] uppercase tracking-[0.3em] text-[#C9A86C] mb-4 block"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Guest Experiences
          </span>
          <h2
            className="text-[36px] md:text-[48px] text-[#F5F5F0] leading-[1.1]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            Words from Our Guests
          </h2>
        </motion.div>

        <div className="flex md:hidden gap-6 overflow-x-auto pb-6 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="snap-center">
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
