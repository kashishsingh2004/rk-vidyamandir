import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h2>About Us</h2>
      <p>
        Late R. K. Vidyamandir was founded in 2000 by Chand Sir to empower rural
        youth in Ruhellapur.
      </p>
      <img src="/school2.jpg" alt="School building" className={styles.image} />
      <p>
        We focus on academic excellence, moral values, and holistic development
        through extracurriculars and community involvement.
      </p>
    </div>
  );
}
