import React from 'react';
import { motion } from 'framer-motion';
import {useWindowScrollPosition} from 'rooks';
export function ScrollPosition({title}) {
  const { scrollY  } = useWindowScrollPosition();
  return (
    <div>
      <motion.header
        style={{ justifyContent: scrollY > 20 ? 'center' : 'flex-start' }}
        animate={{
          background: scrollY > 20 ? 'var(--purl)' : 'var(--red)'
          
        }}
        transition={{ type: "spring", stiffness: 50,bounce:0.25 }}
      >
        <motion.h2  layout>
          {title}
        </motion.h2>
      </motion.header>
      
    </div>
  );
}
