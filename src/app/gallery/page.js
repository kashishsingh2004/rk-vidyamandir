"use client";
import Image from "next/image";
import React from "react";

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
        <p className="section-subtext">
          Take a visual journey through our vibrant school life. These images
          capture the essence of learning, growth, and memorable moments at Late
          R. K. Vidyamandir.
        </p>
      </section>

      <section className="section white-bg">
        <h2>Our School Life</h2>
        <div className="grid grid-4">
          {[
            {
              icon: "📚",
              label: "Academic",
              desc: "Classroom activities, laboratories, and learning sessions",
            },
            {
              icon: "🏃‍♂️",
              label: "Sports",
              desc: "Sports events, physical activities, and competitions",
            },
            {
              icon: "🎭",
              label: "Cultural",
              desc: "Cultural programs, festivals, and artistic performances",
            },
            {
              icon: "🏛️",
              label: "Infrastructure",
              desc: "Campus buildings, facilities, and learning spaces",
            },
          ].map((cat, idx) => (
            <div
              className="info-card"
              key={idx}
              style={{ textAlign: "center" }}
            >
              <h3>
                {cat.icon} {cat.label}
              </h3>
              <p>{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section white-bg">
        <h2>Achievement Highlights</h2>
        <div className="grid grid-3">
          <div className="info-card">
            <h3>🏆 Academic Excellence</h3>
            <p>
              Students consistently achieve top results in board exams and
              competitions.
            </p>
          </div>
          <div className="info-card">
            <h3>🎨 Cultural Achievements</h3>
            <p>
              Winners in dance, music, drama, and inter-school cultural events.
            </p>
          </div>
          <div className="info-card">
            <h3>⚽ Sports Champions</h3>
            <p>Multiple trophies in cricket, football, and athletic events.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Annual Events</h2>
        <div className="grid grid-2">
          <div className="info-card">
            <h3>🎓 Academic Events</h3>
            <ul>
              <li>Annual Day Celebration</li>
              <li>Science Exhibition</li>
              <li>Mathematics Olympiad</li>
              <li>English Elocution</li>
              <li>Quiz Competitions</li>
              <li>Project Presentations</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>🎪 Cultural &amp; Sports Events</h3>
            <ul>
              <li>Annual Sports Day</li>
              <li>Independence Day Celebration</li>
              <li>Republic Day Program</li>
              <li>Teacher&apos;s Day</li>
              <li>Diwali Celebration</li>
              <li>Children&apos;s Day</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section white-bg">
        <h2>Video Gallery</h2>
        <div className="info-card center-card">
          <p>
            Experience our school&apos;s vibrant atmosphere through our video
            collection featuring annual events and student activities.
          </p>
          <div className="grid grid-2 video-section">
            <div className="info-card">
              <h3>📹 Annual Day 2024</h3>
              <p>Highlights from our grand annual day celebration</p>
              <a href="#" className="btn">
                Watch Video
              </a>
            </div>
            <div className="info-card">
              <h3>🏃‍♂️ Sports Day 2024</h3>
              <p>Exciting moments from our annual sports competition</p>
              <a href="#" className="btn">
                Watch Video
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Share Your Memories</h2>
        <div className="info-card center-card">
          <p>
            Have photos or videos from school events? We&apos;d love to feature
            them in our gallery! Share your memorable moments with us.
          </p>
          <a href="/contact" className="btn">
            Share Your Photos
          </a>
        </div>
      </section>
    </div>
  );
}
