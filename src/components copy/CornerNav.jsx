'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CornerNav.module.scss';

const CornerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      clipPath: "circle(150% at 95% 5%)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    },
    closed: {
      clipPath: "circle(0% at 95% 5%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const navList = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const navItem = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  const menuButtonDetails = {
    open: {
      backgroundColor: "rgba(255, 255, 255, 0)"
    },
    closed: {
      backgroundColor: "rgba(255, 255, 255, 0.2)"
    }
  };

  return (
    <>
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={() => setIsOpen(!isOpen)}
        className={styles.menuButton}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 12 } // Moves down to center (38 - 26 = 12px)
          }}
          className={`${styles.line} ${styles.lineTop}`}
        />
        <motion.span
          variants={{
            closed: { rotate: 0, opacity: 1 },
            open: { rotate: -45, opacity: 1 } // Stays at center (38px)
          }}
          className={`${styles.line} ${styles.lineMiddle}`}
        />
        <motion.span
          variants={{
            closed: { opacity: 1, width: "20px", x: 0 },
            open: { opacity: 0, width: "0px", x: 0 } // Disappears
          }}
          className={`${styles.line} ${styles.lineBottom}`}
        />
      </motion.button>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className={styles.overlay}
      >
        <div className={styles.logoBox}>Logo</div>

        <motion.div variants={navList} className={styles.navContent}>
          {['Home', 'About', 'Work', 'Careers', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href="#"
              variants={navItem}
              className={styles.menuLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}.
            </motion.a>
          ))}
        </motion.div>

        <div className={styles.social}>
          <a href="#" className={styles.socialLink}>Twitter</a>
          <a href="#" className={styles.socialLink}>Instagram</a>
          <a href="#" className={styles.socialLink}>LinkedIn</a>
        </div>

        <button className={styles.contactButton}>
          Contact Us
        </button>
      </motion.div>
    </>
  );
};

export default CornerNav;
