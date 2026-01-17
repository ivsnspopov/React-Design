import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'London', href: '#london' },
    { label: 'South of France', href: '#france' },
    { label: 'Properties', href: '#properties' },
    { label: 'Journal', href: '#journal' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-[#C9A86C] text-sm tracking-[0.15em]" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
            THE ARIVÉ COLLECTION
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-[0.1em] text-[#F5F5F0] hover:text-[#C9A86C] transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#F5F5F0] hover:text-[#C9A86C] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Book Now Button - Desktop */}
          <button
            className="hidden md:block border border-[#C9A86C] text-[#C9A86C] px-6 py-2 text-xs uppercase tracking-[0.15em] hover:bg-[#C9A86C] hover:text-[#0D0D0D] transition-all duration-300"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Book Now
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0D0D0D]/98 backdrop-blur-lg z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl uppercase tracking-[0.15em] text-[#F5F5F0] hover:text-[#C9A86C] transition-colors"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-20 h-[1px] bg-[#C9A86C] my-4"
              />

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="border border-[#C9A86C] text-[#C9A86C] px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#C9A86C] hover:text-[#0D0D0D] transition-all duration-300"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                Book Now
              </motion.button>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="flex gap-6 mt-8"
              >
                <a href="#" className="text-[#8A8A8A] hover:text-[#C9A86C] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#8A8A8A] hover:text-[#C9A86C] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#8A8A8A] hover:text-[#C9A86C] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
