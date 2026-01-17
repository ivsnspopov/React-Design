import { motion } from 'motion/react';

interface ArticleCardProps {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  variant?: 'featured' | 'small' | 'wide';
}

export function ArticleCard({ 
  category, 
  title, 
  excerpt, 
  readTime, 
  date, 
  image, 
  variant = 'small' 
}: ArticleCardProps) {
  const dimensions = {
    featured: 'w-full h-[680px]',
    small: 'w-full h-[320px]',
    wide: 'w-full h-[280px]'
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`${dimensions[variant]} relative overflow-hidden group cursor-pointer`}
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 space-y-3">
        <div className="text-[10px] uppercase tracking-[0.2em] text-[#C9A86C]" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
          {category}
        </div>
        
        <h3 className={`${variant === 'featured' ? 'text-3xl' : 'text-xl'} text-[#F5F5F0] leading-[1.3]`} style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>
          {title}
        </h3>
        
        {variant === 'featured' && (
          <p className="text-[#8A8A8A] leading-[1.7]" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>
            {excerpt}
          </p>
        )}
        
        <div className="text-xs text-[#4A4A4A]" style={{ fontFamily: 'var(--font-body)' }}>
          {readTime} · {date}
        </div>
      </div>
    </motion.div>
  );
}
