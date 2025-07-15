import styles from "@/components/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_column}>
          <h3>About Us</h3>
          <p>
            Welcome to EduSpark Classes, your trusted partner for competitive
            exams.
          </p>
          <p>📍 Chachai Road Sirmour , Rewa(m.p.)</p>
          <p>📞 +91-7693882898</p>
          <p>📧 shivakanttiwari123@gmail.com</p>
        </div>

        <div className={styles.footer_column}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Schedule</a>
            </li>
            <li>
              <a href="#">Results</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className={styles.footer_column}>
          <h3>Stay Connected</h3>
          <p>Subscribe to get updates:</p>
          <input
            type="email"
            placeholder="Your email"
            className={styles.newsletter_input}
          />
          <button className={styles.subscribe_btn}>Subscribe</button>
          <div className={styles.social_icons}>
            <a href="#">📘</a>
            <a href="#">📷</a>
            <a href="#">🐦</a>
            <a href="#">▶️</a>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        &copy; 2025 Bright Future Coaching. All rights reserved.
      </div>
    </footer>
  );
}
