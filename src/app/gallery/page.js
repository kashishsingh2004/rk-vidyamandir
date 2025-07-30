export default function GalleryPage() {
  const galleryItems = [
    {
      image: "/gallery/school-building.jpg",
      title: "School Building",
      description:
        "Our beautiful main building housing modern classrooms and facilities",
    },
    {
      image: "/gallery/classroom1.jpg",
      title: "Smart Classroom",
      description: "Interactive learning environment with modern teaching aids",
    },
    {
      image: "/gallery/students-study.jpg",
      title: "Students at Work",
      description: "Dedicated students engaged in focused learning",
    },
    {
      image: "/gallery/science-experiment.jpg",
      title: "Science Laboratory",
      description:
        "Students conducting practical experiments in our well-equipped lab",
    },
    {
      image: "/gallery/computer-class.jpg",
      title: "Computer Class",
      description:
        "Digital literacy training in our modern computer laboratory",
    },
    {
      image: "/gallery/library-students.jpg",
      title: "Library Session",
      description: "Students exploring knowledge in our extensive library",
    },
    {
      image: "/gallery/sports-day1.jpg",
      title: "Annual Sports Day",
      description: "Students participating in various sports competitions",
    },
    {
      image: "/gallery/cultural-program.jpg",
      title: "Cultural Program",
      description: "Students showcasing their talents in cultural events",
    },
    {
      image: "/gallery/independence-day.jpg",
      title: "Independence Day",
      description: "Patriotic celebration with flag hoisting ceremony",
    },
    {
      image: "/gallery/teacher-training.jpg",
      title: "Teacher Training",
      description: "Professional development workshop for our faculty",
    },
    {
      image: "/gallery/art-class.jpg",
      title: "Art & Craft",
      description: "Creative expression through art and craft activities",
    },
    {
      image: "/gallery/playground.jpg",
      title: "Playground Activities",
      description:
        "Students enjoying recreational activities during break time",
    },
    {
      image: "/gallery/assembly.jpg",
      title: "Morning Assembly",
      description: "Daily morning assembly fostering discipline and unity",
    },
    {
      image: "/gallery/award-ceremony.jpg",
      title: "Award Ceremony",
      description: "Recognizing outstanding student achievements",
    },
    {
      image: "/gallery/group-study.jpg",
      title: "Group Study",
      description: "Collaborative learning sessions among students",
    },
    {
      image: "/gallery/parent-meeting.jpg",
      title: "Parent-Teacher Meeting",
      description: "Regular interaction between parents and teachers",
    },
  ];

  return (
    <div className="container">
      <section className="section">
        <h2>School Gallery</h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "1.1rem",
            color: "#666",
          }}
        >
          Take a visual journey through our vibrant school life. These images
          capture the essence of learning, growth, and memorable moments at Late
          R. K. Vidyamandir.
        </p>
      </section>

      {/* Image Categories */}
      <section
        className="section"
        style={{ background: "white", padding: "60px 20px", margin: "40px 0" }}
      >
        <h2>Our School Life</h2>
        <div className="grid grid-4">
          <div className="info-card" style={{ textAlign: "center" }}>
            <h3>📚 Academic</h3>
            <p>Classroom activities, laboratories, and learning sessions</p>
          </div>
          <div className="info-card" style={{ textAlign: "center" }}>
            <h3>🏃‍♂️ Sports</h3>
            <p>Sports events, physical activities, and competitions</p>
          </div>
          <div className="info-card" style={{ textAlign: "center" }}>
            <h3>🎭 Cultural</h3>
            <p>Cultural programs, festivals, and artistic performances</p>
          </div>
          <div className="info-card" style={{ textAlign: "center" }}>
            <h3>🏛️ Infrastructure</h3>
            <p>Campus buildings, facilities, and learning spaces</p>
          </div>
        </div>
      </section>

      {/* Main Gallery Grid */}
      <section className="section">
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <h3 style={{ marginBottom: "10px", fontSize: "1.2rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.95rem", opacity: "0.9" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* School Achievements Display */}
      <section
        className="section"
        style={{ background: "white", padding: "60px 20px", margin: "40px 0" }}
      >
        <h2>Achievement Highlights</h2>
        <div className="grid grid-3">
          <div className="info-card">
            <h3>🏆 Academic Excellence</h3>
            <p>
              Our students consistently achieve outstanding results in board
              examinations, with many securing top positions at district and
              state levels.
            </p>
          </div>
          <div className="info-card">
            <h3>🎨 Cultural Achievements</h3>
            <p>
              Regular winners in inter-school cultural competitions including
              dance, music, drama, and art competitions.
            </p>
          </div>
          <div className="info-card">
            <h3>⚽ Sports Champions</h3>
            <p>
              Our sports teams have won numerous trophies in cricket, football,
              volleyball, and athletics at regional levels.
            </p>
          </div>
        </div>
      </section>

      {/* School Events Timeline */}
      <section className="section">
        <h2>Annual Events</h2>
        <div className="grid grid-2">
          <div className="info-card">
            <h3>🎓 Academic Events</h3>
            <ul style={{ textAlign: "left", lineHeight: "2" }}>
              <li>Annual Day Celebration</li>
              <li>Science Exhibition</li>
              <li>Mathematics Olympiad</li>
              <li>English Elocution Competition</li>
              <li>Quiz Competitions</li>
              <li>Project Presentations</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>🎪 Cultural & Sports Events</h3>
            <ul style={{ textAlign: "left", lineHeight: "2" }}>
              <li>Annual Sports Day</li>
              <li>Independence Day Celebration</li>
              <li>Republic Day Program</li>
              <li>Teacher's Day Special</li>
              <li>Diwali Celebration</li>
              <li>Children's Day Fun</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section
        className="section"
        style={{ background: "white", padding: "60px 20px", margin: "40px 0" }}
      >
        <h2>Video Gallery</h2>
        <div
          className="info-card"
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
            Experience our school's vibrant atmosphere through our video
            collection featuring annual events, student performances, and daily
            school activities.
          </p>
          <div className="grid grid-2" style={{ marginTop: "30px" }}>
            <div className="info-card">
              <h3>📹 Annual Day 2024</h3>
              <p>Highlights from our grand annual day celebration</p>
              <a href="#" className="btn" style={{ marginTop: "15px" }}>
                Watch Video
              </a>
            </div>
            <div className="info-card">
              <h3>🏃‍♂️ Sports Day 2024</h3>
              <p>Exciting moments from our annual sports competition</p>
              <a href="#" className="btn" style={{ marginTop: "15px" }}>
                Watch Video
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Share & Connect */}
      <section className="section">
        <h2>Share Your Memories</h2>
        <div
          className="info-card"
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
            Have photos or videos from school events? We'd love to feature them
            in our gallery! Share your memorable moments with us.
          </p>
          <a href="/contact" className="btn">
            Share Your Photos
          </a>
        </div>
      </section>
    </div>
  );
}
