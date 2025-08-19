import React from 'react';

import Header from './Component/Header';
import Navbar from './Component/Navbar';
import About from './Component/About/About';
import Project from './Component/Project/project';
import Testimonial from './Component/Testimonial/Testimonial';
import Footer from './Component/Footer';
import Contact from './Component/Contact/Contact';

import { motion } from 'framer-motion';

function App() {
  // Reusable motion config for all sections
  const sectionMotion = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.2 }, // Animate once when 20% visible
  };

  return (
    <div>
      <Header />
      <Navbar />

      <motion.div {...sectionMotion} style={{ borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
        <About />
      </motion.div>

      <motion.div {...sectionMotion} style={{ borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
        <Project />
      </motion.div>

      <motion.div {...sectionMotion} style={{ borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
        <Testimonial />
      </motion.div>

      <motion.div {...sectionMotion} style={{ borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
        <Contact />
      </motion.div>

      <Footer />
    </div>
  );
}

export default App;
