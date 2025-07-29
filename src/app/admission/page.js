import styles from "./page.module.css";

export default function AdmissionPage() {
  return (
    <div className={styles.container}>
      <h2>Admission</h2>
      <p>Admissions open for Nursery to Class 8 from April 2025.</p>
      <button className={styles.applyBtn}>Apply Now</button>
    </div>
  );
}
