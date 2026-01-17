import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center text-[#F5F5F0] hover:text-[#C9A86C] transition-colors duration-300 hover:scale-110"
      style={{ fontFamily: 'var(--font-body)' }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="absolute"
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5 text-[#4A4A4A] hover:text-[#A68B4D]" />
        )}
      </motion.div>
    </button>
  );
}
