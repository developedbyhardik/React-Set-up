import React, { useState } from 'react';
import { motion, AnimatePresence,AnimateSharedLayout } from 'framer-motion';

export function Login() {
  const [loggedIn, setIsLoggedIn] = useState('');
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Header</h1>
      </header>
      <main className="layout">
        <button onClick={() => setIsLoggedIn('signin')}>Sign In</button>
        <AnimateSharedLayout>
        <AnimatePresence>
          {loggedIn && (
            <>
              <motion.div
                className="modal"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
              >
                <motion.div layout className="card">
                  <AnimatePresence exitBeforeEnter>
                    {loggedIn === 'signin' && (
                      <SignIn key="signin" setIsLoggedIn={setIsLoggedIn} />
                    )}
                    {loggedIn === 'signup' && (
                      <SignUp key="signup" setIsLoggedIn={setIsLoggedIn} />
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsLoggedIn('')}
                className="overlay"
              />
            </>
          )}
        </AnimatePresence>
        </AnimateSharedLayout>
      </main>
    </div>
  );
}

function SignUp({ setIsLoggedIn }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3>Sign Up</h3>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" />
      <label htmlFor="email">Password</label>
      <input id="email" type="text" />
      <br />
      <button>Sign Up</button>
      <p>
        Already have an account?{' '}
        <a onClick={() => setIsLoggedIn('signin')}>Sign In</a>
      </p>
    </motion.div>
  );
}
function SignIn({ setIsLoggedIn }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3>Sign In</h3>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" />
      <label htmlFor="email">Password</label>
      <input id="email" type="text" />
      <label htmlFor="email2">Password Confirm</label>
      <input id="email2" type="text" />
      <br />
      <button>Sign In</button>
      <p>
        Need an account? <a onClick={() => setIsLoggedIn('signup')}>Sign Up</a>
      </p>
    </motion.div>
  );
}
