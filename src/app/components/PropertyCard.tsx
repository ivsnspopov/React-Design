import { Bed, Bath, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { LazyImage } from './ImageSkeleton';

interface PropertyCardProps {
  location: string;
  name: string;
  city: string;
  image: string;
  beds: number;
  baths: number;
  guests: number;
  price: string;
}

export function PropertyCard({ location, name, city, image, beds, baths, guests, price }: PropertyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="flex-shrink-0 w-[420px] group cursor-pointer hover:shadow-[0_0_30px_rgba(201,168,108,0.1)] transition-shadow duration-500"
    >
      <div className="relative overflow-hidden mb-6">
        <div className="absolute top-4 left-4 z-10 bg-[#0D0D0D]/70 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A86C]" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
            {location}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 z-10 bg-[#0D0D0D]/60 backdrop-blur-md border border-[#2D2D2D] px-4 py-2 rounded-sm">
          <span className="text-sm text-[#C9A86C]" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
            From {price}/night
          </span>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#F5F5F0]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#F5F5F0]/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#F5F5F0]/40" />
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <LazyImage
            src={image}
            alt={name}
            className="w-full h-[320px] object-cover"
          />
        </motion.div>
      </div>

      <div className="space-y-3">
        <h3 className="text-[28px] text-[#F5F5F0] leading-[1.2]" style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>
          {name}
        </h3>
        <p className="text-sm text-[#8A8A8A]" style={{ fontFamily: 'var(--font-body)' }}>
          {city}
        </p>

        <div className="flex items-center gap-5 py-3 border-t border-[#2D2D2D]">
          <div className="flex items-center gap-2 text-[#4A4A4A]">
            <Bed className="w-4 h-4" />
            <span className="text-[13px]" style={{ fontFamily: 'var(--font-body)' }}>{beds} beds</span>
          </div>
          <div className="flex items-center gap-2 text-[#4A4A4A]">
            <Bath className="w-4 h-4" />
            <span className="text-[13px]" style={{ fontFamily: 'var(--font-body)' }}>{baths} baths</span>
          </div>
          <div className="flex items-center gap-2 text-[#4A4A4A]">
            <Users className="w-4 h-4" />
            <span className="text-[13px]" style={{ fontFamily: 'var(--font-body)' }}>{guests}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
