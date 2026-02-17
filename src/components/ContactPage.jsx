
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'; // If using Next.js Image
import CornerNav from './CornerNav';
import Footer from './Footer';
import styles from './ContactPage.module.scss';

/* SVG Icons */
const MailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const MapPinIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you for reaching out! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className={styles.page}>
            <CornerNav />

            {/* Hero Section */}
            <header className={styles.hero}>
                <div className={styles.heroOverlay} />
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className={styles.title}>Contact Us</h1>
                    <p className={styles.subtitle}>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </motion.div>
            </header>

            {/* Main Content Wrapper */}
            <div className={styles.container}>
                <motion.div
                    className={styles.cardWrapper}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    {/* Left Panel: Contact Info (Dark) */}
                    <div className={styles.infoPanel}>
                        <h2 className={styles.panelTitle}>Contact Information</h2>
                        <p className={styles.panelSubtitle}>Fill up the form and our Team will get back to you within 24 hours.</p>

                        <div className={styles.contactDetails}>
                            <div className={styles.contactItem}>
                                <PhoneIcon />
                                <span>+994 50 123 45 67</span>
                            </div>
                            <div className={styles.contactItem}>
                                <MailIcon />
                                <span>hello@vilesh.com</span>
                            </div>
                            <div className={styles.contactItem}>
                                <MapPinIcon />
                                <span>123 Business Avenue, Baku, AZ1000</span>
                            </div>
                        </div>

                        {/* Decorative Circles or Shapes could go here */}
                        <div className={styles.decorativeCircle} />
                    </div>

                    {/* Right Panel: Form (Light) */}
                    <div className={styles.formPanel}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name" className={styles.label}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="email" className={styles.label}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="message" className={styles.label}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    placeholder="Write your message..."
                                    required
                                />
                            </div>

                            <div className={styles.submitWrapper}>
                                <button type="submit" className={styles.submitButton}>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>

            {/* Map Section */}
            <section className={styles.mapSection}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.7685305952!2d49.852959!3d40.409261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2sus!4v1697555555555!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} /* Custom Styled Map Look */
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Baku Map"
                ></iframe>
            </section>

            <Footer />
        </div>
    );
}
