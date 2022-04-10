import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from '../Hooks/useInterval';
import Confetti from 'react-confetti';

export function Counter() {
  const [count, setCount] = useState(10);
  const [isComplete, setIsComplete] = useState(false);
  useInterval(() => {
    setCount((prev) => {
      if (count > 0) {
        return prev - 1;
      }
      setIsComplete(true)
    });
  }, 1000);
  return (
    <div
      className="Counter"
      style={{
        fontFamily: 'sans-serif',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {isComplete && <Confetti />}
      <AnimatePresence>
        <motion.h2
          key={count}
          exit={{ opacity: 0, y: 20, position: 'absolute' }}
          initial={{ opacity: 0, y: -20, position: 'absolute' }}
          animate={{ opacity: 1, y: 0, position: 'relavtive' }}
        >
          {count}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
