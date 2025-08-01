export default function ContactPage() {
  return (
    <div className="container">
      <section className="section">
        <h2>Contact Us</h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "1.1rem",
            color: "#666",
          }}
        >
          We&apos;re here to help! Get in touch with Late R. K. Vidyamandir for
          any inquiries, admission information, or feedback. We value your
          communication and will respond promptly.
        </p>
      </section>

      {/* Contact Information Cards */}
      <section
        className="section"
        style={{ background: "white", padding: "60px 20px", margin: "40px 0" }}
      >
        <h2>Get in Touch</h2>
        <div className="grid grid-3">
          <div className="info-card" style={{ textAlign: "center" }}>
            <h3
              style={{
                color: "#3498db",
                fontSize: "2.5rem",
                marginBottom: "15px",
              }}
            >
              📍
            </h3>
            <h4>Visit Us</h4>
            <p>
              <strong>Late R. K. Vidyamandir</strong>
            </p>
            <p>Ruhellapur</p>
            <p>District: Fatehpur</p>
            <p>State: Uttar pradesh</p>
            <p>PIN: 212655</p>
          </div>

          <div className="info-card" style={{ textAlign: "center" }}>
            <h3
              style={{
                color: "#e74c3c",
                fontSize: "2.5rem",
                marginBottom: "15px",
              }}
            >
              📞
            </h3>
            <h4>Call Us</h4>
            <p>
              <strong>Office:</strong> +91-8009337704
            </p>
            <p>
              <strong>Principal:</strong> +91-9451406619
            </p>
            <p>
              <strong>Admission:</strong> +91-XXXXXXXXXX
            </p>
            <p>
              <strong>Emergency:</strong> +91-XXXXXXXXXX
            </p>
          </div>

          <div className="info-card" style={{ textAlign: "center" }}>
            <h3
              style={{
                color: "#27ae60",
                fontSize: "2.5rem",
                marginBottom: "15px",
              }}
            >
              ✉️
            </h3>
            <h4>Email Us</h4>
            <p>
              <strong>General:</strong> lateramkalivi@gmail.com
            </p>
            <p>
              <strong>Admission:</strong> admission@rkvidyamandir.edu
            </p>
            <p>
              <strong>Principal:</strong> principal@rkvidyamandir.edu
            </p>
            <p>
              <strong>Feedback:</strong> feedback@rkvidyamandir.edu
            </p>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="section">
        <h2>Office Hours</h2>
        <div className="grid grid-2">
          <div className="info-card">
            <h3>🕒 School Office</h3>
            <div style={{ textAlign: "left", lineHeight: "2" }}>
              <p>
                <strong>Monday - Friday:</strong> 8:00 AM - 4:00 PM
              </p>
              <p>
                <strong>Saturday:</strong> 8:00 AM - 1:00 PM
              </p>
              <p>
                <strong>Sunday:</strong> Closed
              </p>
              <p>
                <strong>Lunch Break:</strong> 12:30 PM - 1:00 PM
              </p>
            </div>
          </div>

          <div className="info-card">
            <h3>🎓 Principal&apos;s Office</h3>
            <div style={{ textAlign: "left", lineHeight: "2" }}>
              <p>
                <strong>Monday - Friday:</strong> 9:00 AM - 3:00 PM
              </p>
              <p>
                <strong>Saturday:</strong> 9:00 AM - 12:00 PM
              </p>
              <p>
                <strong>Appointment:</strong> Recommended
              </p>
              <p>
                <strong>Parent Meeting:</strong> By Schedule
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="section"
        style={{ background: "white", padding: "60px 20px", margin: "40px 0" }}
      >
        <h2>Send Us a Message</h2>
        <div className="form-container">
          <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
            We&apos;d Love to Hear From You
          </h3>
          <form>
            <div className="grid grid-2">
              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
            </div>

            <div className="grid grid-2">
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="form-group">
                <label>Subject *</label>
                <select required>
                  <option value="">Select subject</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="academic">Academic Information</option>
                  <option value="facilities">School Facilities</option>
                  <option value="fee">Fee Related Query</option>
                  <option value="transport">Transportation</option>
                  <option value="complaint">Complaint/Suggestion</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Student&apos;s Name (if applicable)</label>
              <input type="text" placeholder="Enter student's name and class" />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                rows="5"
                placeholder="Please write your message here..."
                required
              ></textarea>
            </div>

            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <button
                type="submit"
                className="btn"
                style={{ fontSize: "1.1rem", padding: "15px 40px" }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="section">
        <h2>Quick Contact Options</h2>
        <div className="grid grid-4">
          <div className="info-card" style={{ textAlign: "center" }}>
            <h3 style={{ color: "#25D366" }}>💬</h3>
            <h4>WhatsApp</h4>
            <p>Chat with us instantly</p>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="btn"
              style={{ marginTop: "10px" }}
            >
              Chat Now
            </a>
          </div>

          <div className="info-card" style={{ textAlign: "center" }}>
            <h3 style={{ color: "#1877F2" }}>📘</h3>
            <h4>Facebook</h4>
            <p>Follow our updates</p>
            <a href="#" className="btn" style={{ marginTop: "10px" }}>
              Follow Us
            </a>
          </div>

          <div className="info-card" style={{ textAlign: "center" }}>
            <h3 style={{ color: "#FF0000" }}>📺</h3>
            <h4>YouTube</h4>
            <p>Watch school events</p>
            <a
              href="http://www.youtube.com/@chandsir5588"
              className="btn"
              style={{ marginTop: "10px" }}
            >
              Subscribe
            </a>
          </div>

          <div className="info-card" style={{ textAlign: "center" }}>
            <h3 style={{ color: "#E4405F" }}>📷</h3>
            <h4>Instagram</h4>
            <p>See our gallery</p>
            <a href="#" className="btn" style={{ marginTop: "10px" }}>
              Follow
            </a>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section
        className="section"
        style={{ background: "white", padding: "60px 20px", margin: "40px 0" }}
      >
        <h2>Find Us on Map</h2>
        <div className="info-card">
          <div
            style={{
              width: "100%",
              height: "400px",
              background: "#ecf0f1",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              color: "#7f8c8d",
              marginBottom: "20px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p>🗺️ Interactive Map</p>
              <p style={{ fontSize: "1rem", marginTop: "10px" }}>
                Google Maps integration will be embedded here
              </p>
            </div>
          </div>

          <div className="grid grid-2">
            <div>
              <h4>🚗 By Road</h4>
              <p>
                The school is easily accessible by road from all major areas.
                Well-connected with public transportation and private vehicles.
              </p>
            </div>
            <div>
              <h4>🚌 Public Transport</h4>
              <p>
                Regular bus services available from nearby towns. School buses
                also provide transportation from various routes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="section">
        <h2>Department-wise Contact</h2>
        <div className="grid grid-2">
          <div className="info-card">
            <h3>🎓 Academic Department</h3>
            <p>
              <strong>Head:</strong> Mrs. [Name]
            </p>
            <p>
              <strong>Phone:</strong> +91-XXXXXXXXXX
            </p>
            <p>
              <strong>Email:</strong> academic@rkvidyamandir.edu
            </p>
            <p>
              <strong>For:</strong> Curriculum, examinations, academic queries
            </p>
          </div>

          <div className="info-card">
            <h3>📋 Admission Office</h3>
            <p>
              <strong>Head:</strong> Mr. [Name]
            </p>
            <p>
              <strong>Phone:</strong> +91-XXXXXXXXXX
            </p>
            <p>
              <strong>Email:</strong> admission@rkvidyamandir.edu
            </p>
            <p>
              <strong>For:</strong> New admissions, transfers, documentation
            </p>
          </div>

          <div className="info-card">
            <h3>💰 Accounts Department</h3>
            <p>
              <strong>Head:</strong> Mrs. [Name]
            </p>
            <p>
              <strong>Phone:</strong> +91-XXXXXXXXXX
            </p>
            <p>
              <strong>Email:</strong> accounts@rkvidyamandir.edu
            </p>
            <p>
              <strong>For:</strong> Fee payment, receipts, financial queries
            </p>
          </div>

          <div className="info-card">
            <h3>🚌 Transport Department</h3>
            <p>
              <strong>Head:</strong> Mr. [Name]
            </p>
            <p>
              <strong>Phone:</strong> +91-XXXXXXXXXX
            </p>
            <p>
              <strong>Email:</strong> transport@rkvidyamandir.edu
            </p>
            <p>
              <strong>For:</strong> Bus routes, transportation services
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section
        className="section"
        style={{ background: "white", padding: "60px 20px", margin: "40px 0" }}
      >
        <h2>Emergency Contacts</h2>
        <div
          className="info-card"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <div className="grid grid-2">
            <div>
              <h3 style={{ color: "#e74c3c" }}>🚨 Medical Emergency</h3>
              <p>
                <strong>School Nurse:</strong> +91-XXXXXXXXXX
              </p>
              <p>
                <strong>Nearby Hospital:</strong> +91-XXXXXXXXXX
              </p>
              <p>
                <strong>Ambulance:</strong> 108
              </p>
            </div>
            <div>
              <h3 style={{ color: "#f39c12" }}>🔒 Security</h3>
              <p>
                <strong>Security Head:</strong> +91-XXXXXXXXXX
              </p>
              <p>
                <strong>Night Security:</strong> +91-XXXXXXXXXX
              </p>
              <p>
                <strong>Police Station:</strong> 100
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="section">
        <h2>Your Feedback Matters</h2>
        <div
          className="info-card"
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
            We continuously strive to improve our services and facilities. Your
            feedback helps us serve you better. Please share your suggestions,
            complaints, or appreciation with us.
          </p>
          <div className="grid grid-3" style={{ marginTop: "30px" }}>
            <div>
              <h4>📝 Suggestion Box</h4>
              <p>Anonymous suggestions welcome at school reception</p>
            </div>
            <div>
              <h4>📧 Email Feedback</h4>
              <p>feedback@rkvidyamandir.edu</p>
            </div>
            <div>
              <h4>📞 Direct Call</h4>
              <p>Speak directly with our administration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Guidelines */}
      <section
        className="section"
        style={{ background: "white", padding: "60px 20px", margin: "40px 0" }}
      >
        <h2>Visitor Guidelines</h2>
        <div className="grid grid-2">
          <div className="info-card">
            <h3>📋 Before Your Visit</h3>
            <ul style={{ textAlign: "left", lineHeight: "2" }}>
              <li>Schedule an appointment for principal meetings</li>
              <li>Carry valid ID proof</li>
              <li>Check school timings and holidays</li>
              <li>Inform the purpose of your visit</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>🏫 During Your Visit</h3>
            <ul style={{ textAlign: "left", lineHeight: "2" }}>
              <li>Register at the reception desk</li>
              <li>Wear visitor&apos;s badge</li>
              <li>Follow school guidelines</li>
              <li>Respect ongoing classes</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
