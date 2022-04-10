import React, { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
const images = ['1000', '1001', '1002', '1003', '1004', '1005', '1006', '1008'];
export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <AnimateSharedLayout>
        <motion.header layoutId="header" onClick={() => setIsLoading(true)}>
          <motion.h1 layoutId="logo" className="fake-logo">
            Hardik Prajapati
          </motion.h1>
        </motion.header>

        <AnimatePresence>
          {isLoading && (
            <motion.div
              layoutId="header"
              className="loading"
              onClick={() => setIsLoading(false)}
            >
              <motion.h4 layoutId="logo">Hardik Prajapati</motion.h4>
              <motion.div exit={{ opacity: 0, transition: { duration: 0.1 } }}>
                {isLoading && <p>is Loading...</p>}
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 100 }}
                  transition={{
                    flip: Infinity,
                    duration: 1,
                  }}
                  style={{
                    background: 'var(--primary)',
                    height: 6,
                    width: 100,
                  }}
                />
                <motion.div
                  initial={{ x: -100, y: -5 }}
                  animate={{ x: 100, y: -5 }}
                  transition={{
                    flip: Infinity,
                    duration: 1.2,
                  }}
                  style={{
                    background: 'var(--danger)',
                    height: 8,
                    width: 20,
                  }}
                />
                <motion.div
                  initial={{ x: -100, y: -5 }}
                  animate={{ x: 100, y: -5 }}
                  transition={{
                    flip: Infinity,
                    duration: 1.5,
                  }}
                  style={{
                    background: 'var(--yellow)',
                    height: 5,
                    width: 200,
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="layout">
          <h3>Grid Gallery</h3>
          <div className="grid gallery">
            {images.map((image, index) => (
              <img
                style={{
                  cursor: 'pointer',
                }}
                src={`https://picsum.photos/seed/${image}/500/300`}
                alt="placeholder"
              />
            ))}
          </div>
        </main>
      </AnimateSharedLayout>
    </div>
  );
}
