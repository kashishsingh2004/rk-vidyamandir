import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <img src="/school1.jpg" alt="School Banner" className={styles.banner} />
        <div className={styles.overlay}>
          <h1>Welcome to Late R. K. Vidyamandir</h1>
          <p>Empowering students with knowledge, values & vision since 2000.</p>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.card}>
          <h3>Top Location</h3>
          <p>Located in Ruhellapur, lush green campus.</p>
        </div>
        <div className={styles.card}>
          <h3>Modern Facilities</h3>
          <p>Smart classes, labs, library, playground.</p>
        </div>
        <div className={styles.card}>
          <h3>Community & Activities</h3>
          <p>Sports, cultural, and educational events.</p>
        </div>
      </div>
    </div>
  );
}
