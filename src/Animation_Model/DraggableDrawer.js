import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export function DraggableDrawer() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Header</h1>
      </header>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="drawer-wrapper"
            drag={'y'}
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 300) setIsActive(!isActive);
            }}
          >
            <motion.div
              initial={{ opacity: 0.5, y: '110%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0.5, y: '110%' }}
              transition={{ damping: 25, type: 'spring' }}
            >
              <div className="drawer">
                <button onClick={() => setIsActive(!isActive)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="layout">
        <h3>Blog Posts</h3>
        <button onClick={() => setIsActive(!isActive)}>Open Drawer</button>
        {posts.map((post) => (
          <div className="card" key={post}>
            <h4>Post Number one</h4>
            <p>this is inside the card</p>
          </div>
        ))}
      </div>
    </div>
  );
}
