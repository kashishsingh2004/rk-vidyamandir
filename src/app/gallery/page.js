import Image from "next/image";
import styles from "./page.module.css";

export default function GalleryPage() {
  return (
    <div className={styles.container}>
      <h2>Gallery</h2>
      <div className={styles.grid}>
        <Image src="/gallery1.jpg" alt="Campus" width={400} height={300} />
        <Image src="/gallery2.jpg" alt="Classroom" width={400} height={300} />
        <Image src="/gallery3.jpg" alt="Classroom" width={400} height={300} />
        <Image src="/gallery4.jpg" alt="Classroom" width={400} height={300} />
      </div>
    </div>
  );
}
