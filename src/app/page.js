import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className="hero-container">
      {/* Hero Section */}
      <div className="hero">
        <img src="/school-banner.jpg" alt="Late R.K. Vidyamandir School" className="banner" />
        <div className="overlay">
          <h1>Welcome to Late R. K. Vidyamandir</h1>
          <p>Empowering students with knowledge, values & vision since 2000</p>
          <p>Established by Chand Sir in Ruhellapur</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="card">
          <h3>Quality Education</h3>
          <p>Providing excellent education with modern teaching methods and experienced faculty members dedicated to student success.</p>
        </div>
        <div className="card">
          <h3>Holistic Development</h3>
          <p>Focus on overall personality development including academics, sports, cultural activities, and moral values.</p>
        </div>
        <div className="card">
          <h3>Modern Facilities</h3>
          <p>Well-equipped classrooms, library, computer lab, playground, and other facilities for comprehensive learning.</p>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="section">
        <h2>Welcome to Our School</h2>
        <div className="grid grid-2">
          <div className="info-card">
            <h3>Our Vision</h3>
            <p>
              To nurture young minds and develop them into responsible citizens who will contribute 
              positively to society. We believe in providing quality education that combines academic 
              excellence with moral values and practical skills.
            </p>
          </div>
          <div className="info-card">
            <h3>Our Mission</h3>
            <p>
              Founded in 2000 by the visionary educator Chand Sir, our school has been committed to 
              educational excellence for over two decades. We strive to create an environment where 
              every student can reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section" style={{background: 'white', margin: '40px 0', padding: '60px 20px'}}>
        <h2>Quick Access</h2>
        <div className="grid grid-4">
          <div className="info-card" style={{textAlign: 'center'}}>
            <h3>📚 Academics</h3>
            <p>Explore our curriculum, academic calendar, and educational programs.</p>
            <a href="/about" className="btn" style={{marginTop: '15px'}}>Learn More</a>
          </div>
          <div className="info-card" style={{textAlign: 'center'}}>
            <h3>👨‍🏫 Teachers</h3>
            <p>Meet our dedicated and experienced faculty members.</p>
            <a href="/teachers" className="btn" style={{marginTop: '15px'}}>View Teachers</a>
          </div>
          <div className="info-card" style={{textAlign: 'center'}}>
            <h3>🏫 Facilities</h3>
            <p>Discover our modern infrastructure and learning facilities.</p>
            <a href="/facilities" className="btn" style={{marginTop: '15px'}}>Explore</a>
          </div>
          <div className="info-card" style={{textAlign: 'center'}}>
            <h3>📋 Admission</h3>
            <p>Information about admission process and requirements.</p>
            <a href="/admission" className="btn" style={{marginTop: '15px'}}>Apply Now</a>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="section">
        <h2>Latest Updates</h2>
        <div className="grid grid-3">
          <div className="notice-item">
            <span className="notice-date">Jan 15, 2025</span>
            <h3>New Session Admission Open</h3>
            <p>Admissions are now open for the academic year 2025-26. Limited seats available.</p>
          </div>
          <div className="notice-item">
            <span className="notice-date">Jan 10, 2025</span>
            <h3>Annual Sports Day</h3>
            <p>Our annual sports day will be held on January 25th, 2025. All parents are invited.</p>
          </div>
          <div className="notice-item">
            <span className="notice-date">Jan 05, 2025</span>
            <h3>Academic Excellence Awards</h3>
            <p>Students who performed exceptionally well in the last academic year will be honored.</p>
          </div>
        </div>
      </section>
    </div>
  );
}