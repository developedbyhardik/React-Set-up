import React, { useState } from 'react';
import {motion} from 'framer-motion'

export function Accordian() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <main className="layout">
        <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
        <motion.div layout className="card">
          <motion.h4 layout>Post Number one</motion.h4>
          {isToggled && (
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              natus perspiciatis voluptatibus nulla, consequuntur harum
              similique sit itaque doloribus eius quo? Sequi eius est impedit
              praesentium magnam adipisci libero dolore, repellendus molestiae
              numquam voluptate itaque totam laborum in ipsam reprehenderit
              maxime asperiores eveniet culpa veniam at cumque neque labore
              aperiam!
            </p>
          )}
        </motion.div>
      </main>
    </div>
  );
}
