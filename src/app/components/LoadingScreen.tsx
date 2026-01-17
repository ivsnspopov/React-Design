import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
}

export function LoadingScreen({ isLoading, onLoadingComplete }: LoadingScreenProps) {
  const [showLoader, setShowLoader] = useState(true);
  const [progress, setProgress] = useState(0);

  const logoText = "THE ARIVÉ COLLECTION";

  useEffect(() => {
    const minDisplayTime = 2000;
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    const checkComplete = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (!isLoading && elapsed >= minDisplayTime && progress >= 95) {
        clearInterval(checkComplete);
        clearInterval(progressInterval);
        setProgress(100);
        setTimeout(() => {
          setShowLoader(false);
          onLoadingComplete?.();
        }, 400);
      }
    }, 100);

    return () => {
      clearInterval(progressInterval);
      clearInterval(checkComplete);
    };
  }, [isLoading, onLoadingComplete, progress]);

  return (
    <AnimatePresence mode="wait" onExitComplete={onLoadingComplete}>
      {showLoader && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#0D0D0D' }}
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex overflow-hidden"
            >
              {logoText.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="text-2xl md:text-4xl tracking-[0.3em]"
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    color: '#FAFAFA',
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.div>

            <div className="relative w-48 h-[1px] overflow-hidden">
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="absolute inset-0"
                style={{ backgroundColor: '#C9A86C' }}
              />
              <motion.div
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
                className="absolute inset-0 w-1/3"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(201, 168, 108, 0.8), transparent)',
                }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.span
                className="text-xs tracking-[0.4em] uppercase"
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  color: '#C9A86C',
                }}
              >
                {Math.min(Math.round(progress), 100)}%
              </motion.span>

              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeInOut',
                    }}
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: '#C9A86C' }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
