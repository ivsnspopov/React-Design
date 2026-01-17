import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from '@/app/context/RouterContext';
import { getAllArticles, Article } from '@/app/data/articles';
import { ArticleCard } from '@/app/components/ArticleCard';

type CategoryFilter = 'all' | Article['category'];

const categories: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'travel', label: 'Travel' },
  { id: 'design', label: 'Design' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'destinations', label: 'Destinations' },
];

export function JournalPage() {
  const { goBack } = useRouter();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [visibleCount, setVisibleCount] = useState(6);

  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridInView = useInView(gridRef, { once: true, margin: '-100px' });

  const articles = getAllArticles();
  const featuredArticle = articles[0]; // First article is featured
  const filteredArticles = articles.slice(1).filter((article) => {
    if (activeCategory === 'all') return !article.featured;
    return article.category === activeCategory && !article.featured;
  });
  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
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
        <span className="text-sm uppercase tracking-[0.1em]">Back</span>
      </motion.button>

      <section ref={heroRef} className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C9A86C]" />
              <span
                className="text-[10px] uppercase tracking-[0.3em] text-[#C9A86C]"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                Curated Stories
              </span>
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C9A86C]" />
            </div>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-[#F5F5F0] tracking-[-0.02em]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              THE JOURNAL
            </h1>

            <p
              className="text-lg md:text-xl text-[#8A8A8A] max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            >
              Stories, insights, and inspirations from our world
            </p>
          </motion.div>
        </div>
      </section>

      {featuredArticle && (
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ArticleCard
                category={featuredArticle.category}
                title={featuredArticle.title}
                excerpt={featuredArticle.excerpt}
                readTime={featuredArticle.readTime}
                date={featuredArticle.date}
                image={featuredArticle.image}
                variant="featured"
              />
            </motion.div>
          </div>
        </section>
      )}

      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setVisibleCount(6);
                }}
                className={`px-5 py-2.5 rounded-full text-sm uppercase tracking-[0.15em] transition-all duration-300 border ${
                  activeCategory === category.id
                    ? 'bg-[#C9A86C] text-[#0D0D0D] border-[#C9A86C]'
                    : 'bg-transparent text-[#8A8A8A] border-[#2D2D2D] hover:border-[#C9A86C] hover:text-[#C9A86C]'
                }`}
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section ref={gridRef} className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={gridInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ArticleCard
                  category={article.category}
                  title={article.title}
                  excerpt={article.excerpt}
                  readTime={article.readTime}
                  date={article.date}
                  image={article.image}
                  variant="small"
                />
              </motion.div>
            ))}
          </motion.div>

          {visibleArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p
                className="text-[#8A8A8A] text-lg"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                No articles found in this category.
              </p>
            </motion.div>
          )}

          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center mt-16"
            >
              <button
                onClick={handleLoadMore}
                className="group relative px-8 py-4 border border-[#2D2D2D] hover:border-[#C9A86C] transition-all duration-300 overflow-hidden"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span className="relative z-10 text-sm uppercase tracking-[0.2em] text-[#F5F5F0] group-hover:text-[#0D0D0D] transition-colors duration-300">
                  Load More
                </span>
                <div className="absolute inset-0 bg-[#C9A86C] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
