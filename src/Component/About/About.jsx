import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

import brand_img from '../../assets/brand_img.png';
import './About.css';

function About() {
  const stats = [
    { id: 1, value: 10, label: 'Years Experience', suffix: '+' },
    { id: 2, value: 250, label: 'Completed Projects', suffix: '+' },
    { id: 3, value: 15, label: 'Ongoing Projects', suffix: '+' },
    { id: 4, value: 1000000, label: 'Sq. M Delivered', suffix: '+' },
  ];

  return (
    <section id="about" className="scroll-mt-16">
      <div className="about-container">

        {/* Image slides from left */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={brand_img} alt="Our properties" />
        </motion.div>

        {/* Text slides from right */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>About Our Real Estate Agency</h2>
          <p>
            At [Your Company Name], we help you find your dream home with ease and confidence. Our team has years of experience in the real estate market and delivers personalized service with expert guidance.
          </p>
          <p>
            Whether you are buying, selling, or renting, our team ensures a smooth and stress-free process. We pride ourselves on trust, transparency, and customer satisfaction.
          </p>

          {/* Stats with animation */}
          <div className="about-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <a href="#properties" className="cta-button">View Properties</a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
