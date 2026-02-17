import CornerNav from './CornerNav';
import Footer from './Footer';
import styles from './Demo.module.scss';

export default function Demo() {
  return (
    <div className={styles.container}>
      <CornerNav />
      
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Premium Corner
            <br />
            Navigation
          </h1>
          <p className={styles.subtitle}>
            Silky smooth animations with modern design aesthetics
          </p>
          <div className={styles.cta}>
            <button className={styles.primaryButton}>
              Click the menu button →
            </button>
          </div>
        </div>

        <section className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🎨</div>
            <h3>Beautiful Animations</h3>
            <p>Carefully crafted transitions and micro-interactions</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>Performance First</h3>
            <p>CSS-based animations for smooth 60fps experience</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>📱</div>
            <h3>Fully Responsive</h3>
            <p>Works flawlessly on all devices and screen sizes</p>
          </div>
        </section>

        <section className={styles.content}>
          <h2>Features Overview</h2>
          <ul>
            <li>Staggered menu item animations</li>
            <li>Smooth slide-in panel with backdrop blur</li>
            <li>Gradient accents and decorative elements</li>
            <li>Hover effects with gradient text</li>
            <li>Animated hamburger to X transformation</li>
            <li>Contact information and social links</li>
            <li>Fully accessible with keyboard navigation</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
