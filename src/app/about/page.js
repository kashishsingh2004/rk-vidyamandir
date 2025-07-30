// src/app/about/page.js

import "./about.css";

export default function AboutPage() {
  return (
    <div className="container">
      <section className="section">
        <h2>About Late R. K. Vidyamandir</h2>

        <div className="grid grid-2">
          <div className="info-card">
            <h3>Our History</h3>
            <p>
              Late R. K. Vidyamandir was established in 2000 by the visionary
              educator Chand Sir with a dream to provide quality education to
              the children of Ruhellapur and surrounding areas. For over two
              decades, our school has been a beacon of learning, nurturing
              thousands of students who have gone on to make significant
              contributions to society.
            </p>
            <p>
              Named in honor of Late R. K. (Ram Kumar), a respected figure in
              the community, our school carries forward his legacy of dedication
              to education and social service.
            </p>
          </div>

          <div className="info-card">
            <h3>Our Founder</h3>
            <p>
              Chand Sir, the founder and guiding force behind our institution,
              has dedicated his life to the cause of education. With his
              extensive experience in teaching and administration, he has built
              this school from the ground up, ensuring that every child receives
              personalized attention and quality education.
            </p>
            <p>
              His vision of creating an institution that combines academic
              excellence with moral values continues to inspire our faculty and
              students today.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <h2>Our Philosophy</h2>

        <div className="grid grid-3">
          <div className="info-card">
            <h3>🎓 Academic Excellence</h3>
            <p>
              We believe in providing comprehensive education that goes beyond
              textbooks. Our curriculum is designed to develop critical
              thinking, creativity, and problem-solving skills in our students.
            </p>
          </div>

          <div className="info-card">
            <h3>🌟 Character Building</h3>
            <p>
              Along with academics, we focus on building strong moral character.
              We instill values of honesty, respect, compassion, and
              responsibility in our students, preparing them to be good human
              beings.
            </p>
          </div>

          <div className="info-card">
            <h3>🤝 Community Service</h3>
            <p>
              We encourage our students to be active members of society. Through
              various community service programs and social initiatives, we
              teach them the importance of giving back to the community.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Our Achievements</h2>

        <div className="grid grid-2">
          <div className="info-card">
            <h3>Academic Success</h3>
            <ul>
              <li>Consistent 95%+ pass rates in board examinations</li>
              <li>Multiple district and state-level academic achievers</li>
              <li>Recognition from educational authorities</li>
              <li>Strong alumni network in various professional fields</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Extracurricular Excellence</h3>
            <ul>
              <li>Winners in inter-school sports competitions</li>
              <li>Cultural program winners at district level</li>
              <li>Active participation in community events</li>
              <li>Environmental awareness programs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <h2>Our Commitment</h2>

        <div className="info-card commitment">
          <p>
            &quot;We are committed to providing an environment where every child
            can discover their potential and develop into confident,
            responsible, and successful individuals. Our dedicated faculty,
            modern facilities, and comprehensive curriculum ensure that our
            students are well-prepared for the challenges of tomorrow.&quot;
          </p>
          <p className="quote-author">- Chand Sir, Founder &amp; Principal</p>
        </div>
      </section>
    </div>
  );
}
