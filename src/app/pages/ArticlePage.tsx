import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Facebook, Linkedin, Link2 } from 'lucide-react';
import { useRouter } from '@/app/context/RouterContext';
import { getArticleById, getRelatedArticles } from '@/app/data/articles';
import { LazyImage } from '@/app/components/ImageSkeleton';

export function ArticlePage() {
  const { articleId, navigate, goBack } = useRouter();
  const contentRef = useRef(null);
  const relatedRef = useRef(null);
  
  const contentInView = useInView(contentRef, { once: true, margin: '-100px' });
  const relatedInView = useInView(relatedRef, { once: true, margin: '-100px' });
  
  const article = articleId ? getArticleById(articleId) : null;
  const relatedArticles = articleId ? getRelatedArticles(articleId) : [];

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
        <div className="text-center">
          <p
            className="text-2xl text-[#F5F5F0] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Article not found
          </p>
          <button
            onClick={goBack}
            className="text-[#C9A86C] hover:text-[#D4B87A] transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Return to Journal
          </button>
        </div>
      </div>
    );
  }

  const paragraphs = article.content.split('\n\n');

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article.title;
    
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      return;
    }

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={goBack}
        className="fixed top-6 left-6 z-40 flex items-center gap-2 px-4 py-2 bg-[#0D0D0D]/80 backdrop-blur-sm border border-[#2D2D2D] rounded-full text-[#8A8A8A] hover:text-[#C9A86C] hover:border-[#C9A86C] transition-all duration-300"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm uppercase tracking-[0.1em]">Back to Journal</span>
      </motion.button>

      <div className="relative w-full h-[70vh] min-h-[500px]">
        <LazyImage
          src={article.image}
          alt={article.title}
          className="w-full h-full"
          style={{ objectFit: 'cover' }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-16 md:pb-24">
          <div className="max-w-[720px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span
                  className="text-xs uppercase tracking-[0.2em] text-[#C9A86C] px-3 py-1 border border-[#C9A86C]/30 rounded-full"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                >
                  {article.category}
                </span>
              </div>
              
              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-[#F5F5F0] leading-[1.1]"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >
                {article.title}
              </h1>
              
              <p
                className="text-lg md:text-xl text-[#8A8A8A] leading-relaxed"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
              >
                {article.excerpt}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-[720px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-6 py-8 border-b border-[#2D2D2D]"
        >
          <div className="flex items-center gap-3">
            <img
              src={article.authorImage}
              alt={article.author}
              className="w-12 h-12 rounded-full object-cover border-2 border-[#2D2D2D]"
            />
            <div>
              <div className="flex items-center gap-2 text-[#8A8A8A] text-xs mb-1">
                <User className="w-3 h-3" />
                <span style={{ fontFamily: 'var(--font-body)' }}>Written by</span>
              </div>
              <span
                className="text-[#F5F5F0]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {article.author}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-[#8A8A8A]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C9A86C]" />
              <span
                className="text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {article.date}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C9A86C]" />
              <span
                className="text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {article.readTime}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.article
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="py-12 md:py-16"
        >
          <div className="space-y-8">
            {paragraphs.map((paragraph, index) => {
              const isQuote = paragraph.startsWith('"') && paragraph.endsWith('"');
              
              if (isQuote) {
                return (
                  <blockquote
                    key={index}
                    className="relative my-12 py-8 px-8 md:px-12 border-l-2 border-[#C9A86C]"
                  >
                    <p
                      className="text-2xl md:text-3xl text-[#C9A86C] leading-[1.6] italic"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {paragraph}
                    </p>
                  </blockquote>
                );
              }
              
              if (index === 0) {
                const firstLetter = paragraph.charAt(0);
                const restOfParagraph = paragraph.slice(1);
                
                return (
                  <p
                    key={index}
                    className="text-[#B8B8B8] leading-[1.8] text-lg"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span
                      className="float-left text-6xl md:text-7xl text-[#C9A86C] leading-[0.8] mr-3 mt-2"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                    >
                      {firstLetter}
                    </span>
                    {restOfParagraph}
                  </p>
                );
              }
              
              return (
                <p
                  key={index}
                  className="text-[#B8B8B8] leading-[1.8] text-lg"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="py-8 border-t border-b border-[#2D2D2D]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#8A8A8A]">
              <Share2 className="w-4 h-4" />
              <span
                className="text-sm uppercase tracking-[0.1em]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Share
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleShare('twitter')}
                className="w-10 h-10 rounded-full border border-[#2D2D2D] flex items-center justify-center text-[#8A8A8A] hover:text-[#C9A86C] hover:border-[#C9A86C] transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="w-10 h-10 rounded-full border border-[#2D2D2D] flex items-center justify-center text-[#8A8A8A] hover:text-[#C9A86C] hover:border-[#C9A86C] transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="w-10 h-10 rounded-full border border-[#2D2D2D] flex items-center justify-center text-[#8A8A8A] hover:text-[#C9A86C] hover:border-[#C9A86C] transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="w-10 h-10 rounded-full border border-[#2D2D2D] flex items-center justify-center text-[#8A8A8A] hover:text-[#C9A86C] hover:border-[#C9A86C] transition-all duration-300"
              >
                <Link2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {relatedArticles.length > 0 && (
          <motion.section
            ref={relatedRef}
            initial={{ opacity: 0, y: 30 }}
            animate={relatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="py-16 md:py-24"
          >
            <h2
              className="text-2xl md:text-3xl text-[#F5F5F0] mb-8"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
            >
              Related Articles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.slice(0, 3).map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => navigate('article', related.id)}
                  className="group cursor-pointer"
                >
                  <div className="relative h-[200px] overflow-hidden rounded-lg mb-4">
                    <LazyImage
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent" />
                    <div className="absolute inset-0 bg-[#0D0D0D]/0 group-hover:bg-[#0D0D0D]/20 transition-colors duration-300 rounded-lg shadow-lg" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }} />
                  </div>
                  
                  <div className="space-y-2">
                    <span
                      className="text-xs uppercase tracking-[0.2em] text-[#C9A86C]"
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                    >
                      {related.category}
                    </span>
                    <h3
                      className="text-xl text-[#F5F5F0] group-hover:text-[#C9A86C] transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                    >
                      {related.title}
                    </h3>
                    <p
                      className="text-sm text-[#8A8A8A]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {related.readTime} · {related.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="py-8 text-center border-t border-[#2D2D2D]"
        >
          <button
            onClick={() => navigate('home')}
            className="text-[#C9A86C] hover:text-[#D4B87A] transition-colors text-sm uppercase tracking-[0.15em] group"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <ArrowLeft className="inline-block w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </button>
        </motion.div>
      </div>
    </div>
  );
}
