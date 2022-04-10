import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Slide({ children, isActive, direction = 1, distance = 200 }) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, x: direction * (distance * 1) }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * (distance * -1) }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
