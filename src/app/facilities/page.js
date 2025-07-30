"use client";

import "./facilities.css";
import Image from "next/image";

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
    <div className="facilities-container">
      <section className="section">
        <h2>Our Modern Facilities</h2>
        <p className="section-intro">
          Late R. K. Vidyamandir is equipped with modern facilities and
          infrastructure that provide an ideal environment for learning, growth,
          and overall development of our students.
        </p>
      </section>

      <section className="section">
        <div className="grid grid-2">
          {facilities.map((facility, index) => (
            <div key={index} className="info-card">
              <Image
                src={facility.image}
                alt={facility.title}
                className="facility-image"
                width={400}
                height={300}
              />
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
              <h4 className="features-heading">Key Features:</h4>
              <ul className="features-list">
                {facility.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section white-bg">
        <h2>Infrastructure Highlights</h2>
        <div className="grid grid-4 center-text">
          <div className="info-card highlight">
            <h3 className="highlight-number blue">15+</h3>
            <p>
              <strong>Classrooms</strong>
            </p>
            <p>Spacious and well-ventilated</p>
          </div>
          <div className="info-card highlight">
            <h3 className="highlight-number red">3</h3>
            <p>
              <strong>Laboratories</strong>
            </p>
            <p>Science, Computer &amp; Language</p>
          </div>
          <div className="info-card highlight">
            <h3 className="highlight-number orange">2</h3>
            <p>
              <strong>Playgrounds</strong>
            </p>
            <p>For various sports activities</p>
          </div>
          <div className="info-card highlight">
            <h3 className="highlight-number green">1</h3>
            <p>
              <strong>Auditorium</strong>
            </p>
            <p>For events and assemblies</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Additional Amenities</h2>
        <div className="grid grid-3">
          {[
            {
              title: "🚌 Transportation",
              text: "Safe and reliable bus service covering various routes in and around Ruhellapur.",
            },
            {
              title: "🍽️ Canteen",
              text: "Hygienic canteen serving nutritious snacks and meals.",
            },
            {
              title: "🏥 Health Care",
              text: "First aid with trained staff and regular health check-ups.",
            },
            {
              title: "🔒 Security",
              text: "24/7 security with CCTV surveillance and trained guards.",
            },
            {
              title: "💧 Clean Water",
              text: "RO water purification throughout the campus.",
            },
            {
              title: "⚡ Power Backup",
              text: "Uninterrupted power supply with generator backup.",
            },
          ].map((item, idx) => (
            <div key={idx} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section white-bg">
        <h2>Future Developments</h2>
        <div className="info-card future-box">
          <h3>Expansion Plans</h3>
          <p>
            We are continuously working to enhance our facilities and provide
            even better learning environments. Our upcoming projects include:
          </p>
          <ul className="features-list">
            <li>Construction of new academic block</li>
            <li>Upgrade of existing computer lab</li>
            <li>Installation of solar power system</li>
            <li>Development of botanical garden</li>
            <li>Construction of multi-purpose auditorium</li>
            <li>Enhancement of sports facilities</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Visit Our Campus</h2>
        <div className="info-card visit-box">
          <p>
            We invite parents and students to visit our campus and experience
            our facilities firsthand. Schedule a campus tour today.
          </p>
          <a href="/contact" className="btn">
            Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  );
}
