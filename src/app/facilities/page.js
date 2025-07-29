import styles from "./page.module.css";

export default function FacilitiesPage() {
  const facilities = [
    {
      icon: "📚",
      title: "Library",
      description:
        "A well-stocked library with a vast collection of books, e-resources, and quiet study spaces to foster a love for reading and research.",
    },
    {
      icon: "💻",
      title: "Computer Lab",
      description:
        "Modern computer labs equipped with the latest technology to support practical learning, and innovation.",
    },
    {
      icon: "⚽",
      title: "Playground",
      description:
        "Spacious outdoor playgrounds and sports facilities to promote physical fitness and teamwork through various activities.",
    },
    {
      icon: "🚰",
      title: "Safe Drinking Water & Toilets",
      description:
        "Clean, accessible drinking water stations and hygienic restroom facilities to ensure student health and comfort.",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🌟 Our Facilities</h2>
      <p className={styles.description}>
        Explore the modern facilities we provide to create a safe, interactive,
        and inspiring learning atmosphere for all students.
      </p>
      <div className={styles.grid}>
        {facilities.map((facility, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>{facility.icon}</div>
            <h3 className={styles.cardTitle}>{facility.title}</h3>
            <p className={styles.cardDescription}>{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
