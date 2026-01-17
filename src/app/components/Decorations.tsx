import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const CHAMPAGNE_GOLD = '#C9A86C';
const GRAPHITE = '#2D2D2D';

interface DiamondOrnamentProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

export function DiamondOrnament({ 
  size = 8, 
  animated = false,
  className = '' 
}: DiamondOrnamentProps) {
  return (
    <motion.div
      className={`${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: CHAMPAGNE_GOLD,
        transform: 'rotate(45deg)',
      }}
      {...(animated && {
        animate: {
          opacity: [0.5, 1, 0.5],
          scale: [0.9, 1.1, 0.9],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      })}
    />
  );
}

interface SectionDividerProps {
  withOrnament?: boolean;
  className?: string;
}

export function SectionDivider({ 
  withOrnament = false,
  className = '' 
}: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div 
      ref={ref}
      className={`flex items-center justify-center gap-4 ${className}`}
    >
      <motion.div
        className="h-px flex-1 max-w-[200px]"
        style={{ 
          backgroundColor: CHAMPAGNE_GOLD,
          transformOrigin: 'right center',
        }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {withOrnament && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <DiamondOrnament size={6} />
        </motion.div>
      )}
      
      <motion.div
        className="h-px flex-1 max-w-[200px]"
        style={{ 
          backgroundColor: CHAMPAGNE_GOLD,
          transformOrigin: 'left center',
        }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export function FilmGrain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: 0.04 }}
    >
      <svg className="w-full h-full">
        <filter id="film-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#film-grain)"
          style={{
            animation: 'grain 0.5s steps(10) infinite',
          }}
        />
      </svg>
      <style>{`
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-1%, -1%); }
          20% { transform: translate(1%, 1%); }
          30% { transform: translate(-1%, 1%); }
          40% { transform: translate(1%, -1%); }
          50% { transform: translate(-1%, 0%); }
          60% { transform: translate(1%, 0%); }
          70% { transform: translate(0%, 1%); }
          80% { transform: translate(0%, -1%); }
          90% { transform: translate(1%, 1%); }
        }
      `}</style>
    </div>
  );
}
