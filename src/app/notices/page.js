import styles from "./page.module.css";

export default function NoticesPage() {
  return (
    <div className={styles.container}>
      <h2>Notices</h2>
      <ul className={styles.list}>
        <li>New session starts 1 April 2025</li>
        <li>Summer Vacation: 15 May – 30 June</li>
        <li>Half-yearly exams from 10 October</li>
      </ul>
    </div>
  );
}
