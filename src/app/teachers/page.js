import "./page.module.css";

export default function TeachersPage() {
  const teachers = [
    {
      name: "Chand Sir",
      subject: "Principal & Mathematics",
      qualification: "M.A., B.Ed.",
      experience: "25+ years",
      image: "/teacher-principal.jpg",
    },
    {
      name: "Mrs. Sunita Sharma",
      subject: "English & Hindi",
      qualification: "M.A. English, B.Ed.",
      experience: "18 years",
      image: "/teacher-english.jpg",
    },
    {
      name: "Mr. Rajesh Kumar",
      subject: "Science & Mathematics",
      qualification: "M.Sc. Physics, B.Ed.",
      experience: "15 years",
      image: "/teacher-science.jpg",
    },
    {
      name: "Mrs. Priya Singh",
      subject: "Social Studies",
      qualification: "M.A. History, B.Ed.",
      experience: "12 years",
      image: "/teacher-social.jpg",
    },
    {
      name: "Mr. Amit Verma",
      subject: "Physical Education",
      qualification: "B.P.Ed., M.P.Ed.",
      experience: "10 years",
      image: "/teacher-sports.jpg",
    },
    {
      name: "Mrs. Kavita Gupta",
      subject: "Art & Craft",
      qualification: "B.F.A., Diploma in Art",
      experience: "8 years",
      image: "/teacher-art.jpg",
    },
  ];

  return (
    <div className="container">
      <section className="section">
        <h2>Our Dedicated Faculty</h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "1.1rem",
            color: "#666",
          }}
        >
          Our experienced and passionate teachers are the backbone of our
          educational excellence. They are committed to nurturing each
          student&apos;s potential and providing personalized attention to
          ensure comprehensive development.
        </p>
      </section>

      {/* Principal Section */}
      <section
        className="section"
        style={{ background: "white", padding: "60px 20px", margin: "40px 0" }}
      >
        <h2>Principal&apos;s Message</h2>
        <div className="grid grid-2" style={{ alignItems: "center" }}>
          <div className="teacher-card">
            <img
              src="/teacher1.jpg"
              alt="Principal Chand Sir"
              className="teacher-image"
            />
            <div className="teacher-info">
              <h3>Chand Sir</h3>
              <p>
                <strong>Founder & Principal</strong>
              </p>
              <p>M.A., B.Ed. | 25+ years experience</p>
            </div>
          </div>
          <div className="info-card">
            <h3>A Message from Our Principal</h3>
            <p>
              &quot;Welcome to Late Ramkali Vidya Mandir Junior High School! For
              over two decades, we have been committed to providing quality
              education that shapes not just academic minds but builds character
              and values. Our dedicated faculty works tirelessly to ensure that
              every student reaches their full potential.&quot;
            </p>
            <p>
              &quot;We believe in creating an environment where learning is
              joyful, meaningful, and relevant to real life. Our goal is to
              prepare students who are not only academically strong but also
              socially responsible citizens.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="section">
        <h2>Meet Our Teachers</h2>
        <div className="grid grid-3">
          {teachers.slice(1).map((teacher, index) => (
            <div key={index} className="teacher-card">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="teacher-image"
              />
              <div className="teacher-info">
                <h3>{teacher.name}</h3>
                <p>
                  <strong>{teacher.subject}</strong>
                </p>
                <p>{teacher.qualification}</p>
                <p style={{ color: "#3498db", fontWeight: "500" }}>
                  {teacher.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section
        className="section"
        style={{ background: "white", padding: "60px 20px", margin: "40px 0" }}
      >
        <h2>Our Teaching Philosophy</h2>
        <div className="grid grid-3">
          <div className="info-card">
            <h3>🎯 Student-Centered Learning</h3>
            <p>
              We focus on individual learning styles and adapt our teaching
              methods to suit each student&apos;s needs, ensuring that no child
              is left behind.
            </p>
          </div>
          <div className="info-card">
            <h3>🌱 Holistic Development</h3>
            <p>
              Our approach goes beyond academics to include physical, emotional,
              and social development, preparing students for all aspects of
              life.
            </p>
          </div>
          <div className="info-card">
            <h3>💡 Innovation in Teaching</h3>
            <p>
              We continuously update our teaching methods, incorporating modern
              techniques and technology to make learning more effective and
              engaging.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Achievements */}
      <section className="section">
        <h2>Faculty Achievements</h2>
        <div className="grid grid-2">
          <div className="info-card">
            <h3>Recognition &amp; Awards</h3>
            <ul style={{ textAlign: "left", lineHeight: "2" }}>
              <li>Best Teacher Awards at district level</li>
              <li>Recognition for innovative teaching methods</li>
              <li>Published research papers in education journals</li>
              <li>Active participation in teacher training programs</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>Professional Development</h3>
            <ul style={{ textAlign: "left", lineHeight: "2" }}>
              <li>Regular workshops and seminars attendance</li>
              <li>Certification in modern teaching methodologies</li>
              <li>Computer literacy and technology integration</li>
              <li>Continuous learning and skill enhancement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section
        className="section"
        style={{ background: "white", padding: "60px 20px", margin: "40px 0" }}
      >
        <h2>Join Our Teaching Family</h2>
        <div
          className="info-card"
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
            Are you a passionate educator looking to make a difference? We are
            always looking for dedicated teachers who share our vision of
            quality education and student development.
          </p>
          <a href="/contact" className="btn">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
