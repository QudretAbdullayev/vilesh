import styles from './Footer.module.scss';
import Link from 'next/link';

const socials = [
  { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
  { icon: 'fab fa-twitter', href: '#', label: 'Twitter' },
  { icon: 'fab fa-linkedin-in', href: '#', label: 'LinkedIn' },
  { icon: 'fab fa-google-plus-g', href: '#', label: 'Google+' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>Logo</div>
          <p className={styles.tagline}>
            Silky smooth animations with modern design aesthetics.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h4>Navigation</h4>
            <a href="#">Home</a>
            <Link href="/about">About</Link>
            <a href="#">Work</a>
            <a href="#">Careers</a>
          </div>
          <div className={styles.linkGroup}>
            <h4>Contact</h4>
            <a href="#">hello@vilesh.com</a>
            <a href="#">+1 234 567 890</a>
            <a href="#">Support</a>
          </div>
          <div className={styles.linkGroup}>
            <h4>Legal</h4>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <p className={styles.copy}>&copy; 2026 Vilesh. All rights reserved.</p>

        <ul className={styles.socials}>
          {socials.map(({ icon, href, label }) => (
            <li key={label}>
              <a href={href} aria-label={label}>
                <i className={`${icon} ${styles.icon}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
