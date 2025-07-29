import styles from "./page.module.css";

export default function FacilitiesPage() {
  return (
    <div className={styles.container}>
      <h2>Facilities</h2>
      <ul className={styles.list}>
        <li>Library</li>
        <li>Computer Lab</li>
        <li>Playground</li>
        <li>Safe Drinking Water & Toilets</li>
      </ul>
    </div>
  );
}
