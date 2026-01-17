import { useEffect, useState, useRef, RefObject } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const outerSpringConfig = { damping: 20, stiffness: 150, mass: 0.8 };
  const outerX = useSpring(cursorX, outerSpringConfig);
  const outerY = useSpring(cursorY, outerSpringConfig);

  useEffect(() => {
    // Hide on touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.matches('button, a, [role="button"], [data-cursor-hover]') ||
        target.closest('button, a, [role="button"], [data-cursor-hover]')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.matches('button, a, [role="button"], [data-cursor-hover]') ||
        target.closest('button, a, [role="button"], [data-cursor-hover]')
      ) {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  // Hide on touch devices via CSS as well
  const scale = isClicking ? 0.8 : isHovering ? 1.5 : 1;
  const outerScale = isClicking ? 0.9 : isHovering ? 1.8 : 1;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          x: outerX,
          y: outerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="w-10 h-10 rounded-full border-2 border-[#C9A86C]/50"
          style={{ mixBlendMode: 'difference' }}
          animate={{ scale: outerScale }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-[#C9A86C]"
          style={{ mixBlendMode: 'difference' }}
          animate={{ scale }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        />
      </motion.div>
    </>
  );
}

export function useMagneticEffect<T extends HTMLElement = HTMLElement>(strength = 0.3): {
  ref: RefObject<T | null>;
  onMouseMove: (e: React.MouseEvent<T>) => void;
  onMouseLeave: () => void;
} {
  const ref = useRef<T | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<T>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    setPosition({
      x: distanceX * strength,
      y: distanceY * strength,
    });
  };

  const onMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
      ref.current.style.transition = position.x === 0 ? 'transform 0.3s ease-out' : 'transform 0.15s ease-out';
    }
  }, [position]);

  return { ref, onMouseMove, onMouseLeave };
}
