'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CornerNav from './CornerNav';
import Footer from './Footer';
import styles from './Blog.module.scss';

import Link from 'next/link';
import { blogPosts as posts } from '@/data/blogPosts';

const BLOG_CATEGORIES = ['All', 'Design', 'Development', 'Animation'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

export default function Blog() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? posts : posts.filter((p) => p.category === active);

  return (
    <div className={styles.page}>
      <CornerNav />

      <motion.header
        className={styles.header}
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <h1 className={styles.title}>Journal</h1>
        <p className={styles.subtitle}>
          Exploring the intersection of design, technology, and human experience.
        </p>

        <div className={styles.tags}>
          {BLOG_CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              className={`${styles.tag} ${active === cat ? styles.tagActive : ''}`}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.header>

      <motion.main
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode='popLayout'>
          {filtered.map((post) => (
            <motion.article
              layout
              key={post.id}
              className={styles.card}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                <div className={styles.cardImage}>
                  <span className={styles.cardBadge}>{post.category}</span>
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>

                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>

                  <div className={styles.cardMeta}>
                    <span>{post.date}</span>
                    <span className={styles.dot} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.main>

      <Footer />
    </div>
  );
}
