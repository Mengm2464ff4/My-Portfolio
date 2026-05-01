import { motion } from 'framer-motion';
import { useMouseEffect } from '../../hooks/useMouseEffect';

const CustomCursor = () => {
  const { variants, cursorVariant } = useMouseEffect();

  return (
    
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full pointer-events-none z-[9999] hidden lg:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-purple-500 rounded-full pointer-events-none z-[9998] hidden lg:block"
      
        animate={{
          x: variants[cursorVariant]?.x || 0,
          y: variants[cursorVariant]?.y || 0,
          scale: cursorVariant !== 'default' ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;