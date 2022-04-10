import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function StickyDrawer({ children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <motion.div
        style={{
          pointerEvents: isActive ? 'all' : 'none',
        }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.y > 300) setIsActive(false);
          if (info.offset.y < -300) setIsActive(true);
        }}
        className="drawer-wrapper"
      >
        <motion.div
          style={{
            pointerEvents: 'all',
          }}
          animate={{ opacity: 1, y: isActive ? 0 : '80vh' }}
          transition={{ damping: 25, type: 'spring' }}
        >
          <div className="drawer">{children}</div>
        </motion.div>
      </motion.div>
      <motion.div
        style={{
          pointerEvents: isActive ? 'all' : 'none',
        }}
        className="drawer--background"
        onClick={() => setIsActive(false)}
        animate={{ opacity: isActive ? 1 : 0 }}
      />
    </>
  );
}
