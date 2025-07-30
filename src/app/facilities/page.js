export default function FacilitiesPage() {
  const facilities = [
    {
      title: "Smart Classrooms",
      description:
        "Modern classrooms equipped with projectors, smart boards, and audio-visual aids for interactive learning.",
      image: "/classroom.jpg",
      features: [
        "Digital projectors",
        "Interactive whiteboards",
        "Air conditioning",
        "Comfortable seating",
      ],
    },
    {
      title: "Computer Laboratory",
      description:
        "Well-equipped computer lab with latest hardware and software for digital literacy and programming.",
      image: "/computer-lab.jpg",
      features: [
        "20+ computers",
        "High-speed internet",
        "Latest software",
        "Individual workstations",
      ],
    },
    {
      title: "Science Laboratory",
      description:
        "Fully equipped science lab for practical experiments in Physics, Chemistry, and Biology.",
      image: "/science-lab.jpg",
      features: [
        "Modern equipment",
        "Safety protocols",
        "Experimental materials",
        "Teacher supervision",
      ],
    },
    {
      title: "Library",
      description:
        "Extensive collection of books, journals, and digital resources to support learning and research.",
      image: "/library.jpg",
      features: [
        "5000+ books",
        "Reference section",
        "Reading area",
        "Digital resources",
      ],
    },
    {
      title: "Sports Ground",
      description:
        "Large playground for various sports activities including cricket, football, volleyball, and athletics.",
      image: "/playground.jpg",
      features: [
        "Cricket pitch",
        "Football ground",
        "Volleyball court",
        "Athletic track",
      ],
    },
    {
      title: "Art & Craft Room",
      description:
        "Dedicated space for creative activities, art, craft, and skill development programs.",
      image: "/art-room.jpg",
      features: [
        "Art supplies",
        "Craft materials",
        "Display boards",
        "Creative workspace",
      ],
    },
  ];

  return (
    <div className="container">
      <section className="section">
        <h2>Our Modern Facilities</h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "1.1rem",
            color: "#666",
          }}
        >
          Late R. K. Vidyamandir is equipped with modern facilities and
          infrastructure that provide an ideal environment for learning, growth,
          and overall development of our students.
        </p>
      </section>

      {/* Main Facilities Grid */}
      <section className="section">
        <div className="grid grid-2">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="info-card"
              style={{ overflow: "hidden" }}
            >
              <img
                src={facility.image}
                alt={facility.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              />
              <h3>{facility.title}</h3>
              <p style={{ marginBottom: "20px" }}>{facility.description}</p>
              <h4 style={{ color: "#3498db", marginBottom: "10px" }}>
                Key Features:
              </h4>
              <ul style={{ textAlign: "left", color: "#666" }}>
                {facility.features.map((feature, idx) => (
                  <li key={idx} style={{ marginBottom: "5px" }}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section
        className="section"
        style={{ background: "white", padding: "60px 20px", margin: "40px 0" }}
      >
        <h2>Infrastructure Highlights</h2>
        <div className="grid grid-4">
          <div className="info-card" style={{ textAlign: "center" }}>
            <h3
              style={{
                color: "#3498db",
                fontSize: "2.5rem",
                marginBottom: "10px",
              }}
            >
              15+
            </h3>
            <p>
              <strong>Classrooms</strong>
            </p>
            <p>Spacious and well-ventilated</p>
          </div>
          <div className="info-card" style={{ textAlign: "center" }}>
            <h3
              style={{
                color: "#e74c3c",
                fontSize: "2.5rem",
                marginBottom: "10px",
              }}
            >
              3
            </h3>
            <p>
              <strong>Laboratories</strong>
            </p>
            <p>Science, Computer & Language</p>
          </div>
          <div className="info-card" style={{ textAlign: "center" }}>
            <h3
              style={{
                color: "#f39c12",
                fontSize: "2.5rem",
                marginBottom: "10px",
              }}
            >
              2
            </h3>
            <p>
              <strong>Playgrounds</strong>
            </p>
            <p>For various sports activities</p>
          </div>
          <div className="info-card" style={{ textAlign: "center" }}>
            <h3
              style={{
                color: "#27ae60",
                fontSize: "2.5rem",
                marginBottom: "10px",
              }}
            >
              1
            </h3>
            <p>
              <strong>Auditorium</strong>
            </p>
            <p>For events and assemblies</p>
          </div>
        </div>
      </section>

      {/* Additional Amenities */}
      <section className="section">
        <h2>Additional Amenities</h2>
        <div className="grid grid-3">
          <div className="info-card">
            <h3>🚌 Transportation</h3>
            <p>
              Safe and reliable bus service covering various routes in and
              around Ruhellapur, ensuring comfortable commute for students.
            </p>
          </div>
          <div className="info-card">
            <h3>🍽️ Canteen</h3>
            <p>
              Hygienic canteen serving nutritious snacks and meals, maintaining
              high standards of food quality and safety.
            </p>
          </div>
          <div className="info-card">
            <h3>🏥 Health Care</h3>
            <p>
              First aid facility with trained staff to handle medical
              emergencies and regular health check-ups for students.
            </p>
          </div>
          <div className="info-card">
            <h3>🔒 Security</h3>
            <p>
              24/7 security system with CCTV surveillance, trained guards, and
              controlled access to ensure student safety.
            </p>
          </div>
          <div className="info-card">
            <h3>💧 Clean Water</h3>
            <p>
              RO water purification system providing safe and clean drinking
              water throughout the campus.
            </p>
          </div>
          <div className="info-card">
            <h3>⚡ Power Backup</h3>
            <p>
              Uninterrupted power supply with generator backup ensuring
              continuous operation of all facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Developments */}
      <section
        className="section"
        style={{ background: "white", padding: "60px 20px", margin: "40px 0" }}
      >
        <h2>Future Developments</h2>
        <div
          className="info-card"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <h3>Expansion Plans</h3>
          <p style={{ marginBottom: "20px" }}>
            We are continuously working to enhance our facilities and provide
            even better learning environment for our students. Our upcoming
            projects include:
          </p>
          <ul style={{ textAlign: "left", lineHeight: "2" }}>
            <li>Construction of new academic block</li>
            <li>Upgrade of existing computer laboratory</li>
            <li>Installation of solar power system</li>
            <li>Development of botanical garden</li>
            <li>Construction of multi-purpose auditorium</li>
            <li>Enhancement of sports facilities</li>
          </ul>
        </div>
      </section>

      {/* Visit Us */}
      <section className="section">
        <h2>Visit Our Campus</h2>
        <div
          className="info-card"
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
            We invite parents and students to visit our campus and experience
            our facilities firsthand. Schedule a campus tour to see how we
            provide the best learning environment for your child.
          </p>
          <a href="/contact" className="btn">
            Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  );
}
