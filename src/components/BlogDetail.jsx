
'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CornerNav from './CornerNav';
import Footer from './Footer';
import ShareButton from './ShareButton';
import styles from './BlogDetail.module.scss';
import { blogPosts } from '@/data/blogPosts';

/* SVG Icons */
const ArrowLeft = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
);

export default function BlogDetail({ slug }) {
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [activeId, setActiveId] = useState('');
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        // Parse content for headings to build TOC
        // Since content is a string, we might simple parse it or query the DOM after render.
        // Querying DOM is easier since we used dangerouslySetInnerHTML.
        const elements = Array.from(document.querySelectorAll('h2, h3'));
        const mapped = elements.map((elem, index) => {
            if (!elem.id) {
                elem.id = `heading-${index}`;
            }
            return {
                id: elem.id,
                text: elem.innerText,
                level: elem.tagName.toLowerCase(),
            };
        });
        setHeadings(mapped);

        // Intersection Observer for Active TOC
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-10% 0px -80% 0px' }
        );

        elements.forEach((elem) => observer.observe(elem));

        return () => observer.disconnect();
    }, [post.content]);

    return (
        <div className={styles.page}>

            {/* Scroll Progress Bar */}
            <motion.div className={styles.progressBar} style={{ scaleX }} />

            {/* Back Button */}
            <Link href="/blog" className={styles.backButton}>
                <ArrowLeft />
                <span>Back to Blog</span>
            </Link>

            <CornerNav />

            {/* Hero Section */}
            <header className={styles.hero}>
                <img src={post.image} alt={post.title} className={styles.heroImage} />
                <div className={styles.heroOverlay} />

                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className={styles.category}>{post.category}</span>
                    <h1 className={styles.title}>{post.title}</h1>
                    <div className={styles.meta}>
                        <span>{post.date}</span>
                        <span className={styles.dot} />
                        <span>{post.readTime}</span>
                    </div>
                </motion.div>
            </header>

            {/* Main Layout */}
            <div className={styles.container}>
                {/* Sidebar / TOC */}
                <aside className={styles.sidebar}>
                    <div className={styles.toc}>
                        <p className={styles.tocTitle}>Contents</p>
                        <ul className={styles.tocList}>
                            {headings.map((heading) => (
                                <li key={heading.id}>
                                    <a
                                        href={`#${heading.id}`}
                                        className={`${styles.tocLink} ${activeId === heading.id ? styles.activeTocLink : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById(heading.id)?.scrollIntoView({
                                                behavior: 'smooth'
                                            });
                                            setActiveId(heading.id);
                                        }}
                                        style={{ paddingLeft: heading.level === 'h3' ? '2rem' : '1rem' }}
                                    >
                                        {heading.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <ShareButton title={post.title} />
                </aside>

                {/* Content */}
                <motion.article
                    className={styles.content}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>

            <Footer />
        </div>
    );
}
