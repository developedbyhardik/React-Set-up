import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Drawer({ drawerActive, setDrawerActive, children }) {
  return (
    <AnimatePresence>
      {drawerActive && (
        <>
          <motion.div
            className="drawer-wrapper"
            drag={'y'}
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 300) setDrawerActive(!drawerActive);
            }}
          >
            <motion.div
              initial={{ opacity: 0.5, y: '110%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0.5, y: '110%' }}
              transition={{ damping: 25, type: 'spring' }}
            >
              <div className="drawer">
                <button
                  className="drawer--close"
                  onClick={() => setDrawerActive(!drawerActive)}
                >
                  X
                </button>
                {children}
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="drawer--background"
            onClick={() => setDrawerActive(!drawerActive)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
