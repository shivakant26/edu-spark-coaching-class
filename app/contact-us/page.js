import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>📞 Contact Us</h2>
          <p>
            We would love to hear from you! Whether you&apos;re a parent or a student
            — feel free to reach out.
          </p>
          <ul>
            <li>
              <strong>📍 Address:</strong> EduSpark Coaching Class Chachai Road
              Sirmour Rewa(M.P.)
            </li>
            <li>
              <strong>📱 Phone:</strong> +91-7693882898
            </li>
            <li>
              <strong>💬 WhatsApp:</strong> +91-7693882898
            </li>
            <li>
              <strong>📧 Email:</strong> shivakanttiwari123@gmail.com
            </li>
          </ul>
        </div>
        <div className={styles.formBox}>
          <form className="form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message ✉️</button>
          </form>
        </div>
      </div>
      <div className={styles.map}>
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.423674028242!2d81.3031863!3d24.5363556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847b7df2f51a7b%3A0xe8df6b66173d3a30!2sRewa%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1625155781654"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
