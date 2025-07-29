import Image from "next/image";
import styles from "./page.module.css";

export default function TeachersPage() {
  return (
    <div className={styles.container}>
      <h2>Our Teachers</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          {/* Optionally convert this also to <Image /> */}
          <Image src="/teacher1.jpg" alt="Teacher 1" width={300} height={300} />
          <h3>Mr. Anshuman Singh (Principal)</h3>
        </div>
        <div className={styles.card}>
          <Image src="/teacher2.jpg" alt="Teacher 2" width={300} height={300} />
          <h3>Mr. Abhishek Rao (Math)</h3>
        </div>
        <div className={styles.card}>
          <Image src="/teacher3.jpg" alt="Teacher 2" width={300} height={300} />
          <h3>Teaching staff</h3>
        </div>
      </div>
    </div>
  );
}
