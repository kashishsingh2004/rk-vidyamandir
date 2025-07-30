export default function NoticesPage() {
  const notices = [
    {
      date: "January 30, 2025",
      title: "Admission Open for Academic Year 2025-26",
      content:
        "Admissions are now open for all classes from Nursery to Class X. Limited seats available. Interested parents can collect application forms from the school office or apply online through our website.",
      type: "admission",
      important: true,
    },
    {
      date: "January 28, 2025",
      title: "Annual Sports Day - February 15, 2025",
      content:
        "Our annual sports day will be held on February 15, 2025, starting at 9:00 AM. Parents are cordially invited to witness their children's participation in various sports events.",
      type: "event",
      important: false,
    },
    {
      date: "January 25, 2025",
      title: "Parent-Teacher Meeting Scheduled",
      content:
        "Parent-Teacher Meeting for all classes will be conducted on February 5, 2025, from 10:00 AM to 1:00 PM. Parents are requested to attend and discuss their child's academic progress with respective teachers.",
      type: "academic",
      important: true,
    },
    {
      date: "January 22, 2025",
      title: "School Timing Change - Winter Schedule",
      content:
        "Due to winter season, school timings have been revised. New timings: 9:00 AM to 2:30 PM (Monday to Friday), 9:00 AM to 12:30 PM (Saturday). This will be effective from February 1, 2025.",
      type: "general",
      important: false,
    },
    {
      date: "January 20, 2025",
      title: "Science Exhibition - February 10, 2025",
      content:
        "Annual Science Exhibition will be organized on February 10, 2025. Students from Classes VI to X are encouraged to participate and showcase their scientific projects and innovations.",
      type: "academic",
      important: false,
    },
    {
      date: "January 18, 2025",
      title: "Fee Payment Reminder",
      content:
        "Parents are reminded that the fee for the month of February 2025 is due by January 31, 2025. Late fee charges will be applicable after the due date. Please ensure timely payment.",
      type: "fee",
      important: true,
    },
    {
      date: "January 15, 2025",
      title: "Republic Day Celebration",
      content:
        "Republic Day will be celebrated in the school premises on January 26, 2025, at 9:00 AM. All students are required to attend in proper school uniform. Cultural program will follow the flag hoisting ceremony.",
      type: "event",
      important: false,
    },
    {
      date: "January 12, 2025",
      title: "Mathematics Olympiad Registration",
      content:
        "Registration for Inter-School Mathematics Olympiad is now open for Classes III to X. Interested students can register with their respective class teachers by January 30, 2025. Registration fee: ₹100.",
      type: "academic",
      important: false,
    },
    {
      date: "January 10, 2025",
      title: "Health Check-up Camp",
      content:
        "A comprehensive health check-up camp will be organized in school on February 3, 2025, in collaboration with local health department. All students will undergo basic health screening.",
      type: "health",
      important: false,
    },
    {
      date: "January 8, 2025",
      title: "New Library Books Available",
      content:
        "New collection of books including story books, reference materials, and educational magazines have been added to the school library. Students are encouraged to make use of these resources.",
      type: "general",
      important: false,
    },
  ];

  const getNoticeTypeColor = (type) => {
    const colors = {
      admission: "#e74c3c",
      academic: "#3498db",
      event: "#f39c12",
      fee: "#e67e22",
      health: "#27ae60",
      general: "#9b59b6",
    };
    return colors[type] || "#34495e";
  };

  const getNoticeTypeIcon = (type) => {
    const icons = {
      admission: "🎓",
      academic: "📚",
      event: "🎉",
      fee: "💳",
      health: "🏥",
      general: "📢",
    };
    return icons[type] || "📄";
  };

  return (
    <div className="container">
      <section className="section">
        <h2>School Notices & Announcements</h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "1.1rem",
            color: "#666",
          }}
        >
          Stay updated with the latest announcements, events, and important
          information from Late R. K. Vidyamandir. Check this page regularly for
          updates.
        </p>
      </section>

      {/* Notice Categories */}
      <section
        className="section"
        style={{ background: "white", padding: "60px 20px", margin: "40px 0" }}
      >
        <h2>Notice Categories</h2>
        <div className="grid grid-3">
          <div className="info-card" style={{ textAlign: "center" }}>
            <h3 style={{ color: "#e74c3c" }}>🎓 Admissions</h3>
            <p>
              Admission notices, application deadlines, and enrollment
              information
            </p>
          </div>
          <div className="info-card" style={{ textAlign: "center" }}>
            <h3 style={{ color: "#3498db" }}>📚 Academic</h3>
            <p>
              Examination schedules, results, academic events, and curriculum
              updates
            </p>
          </div>
          <div className="info-card" style={{ textAlign: "center" }}>
            <h3 style={{ color: "#f39c12" }}>🎉 Events</h3>
            <p>
              School events, celebrations, competitions, and cultural programs
            </p>
          </div>
        </div>
      </section>

      {/* Important Notices - Highlighted */}
      <section className="section">
        <h2>Important Notices</h2>
        <div className="grid grid-1">
          {notices
            .filter((notice) => notice.important)
            .map((notice, index) => (
              <div
                key={index}
                className="notice-item"
                style={{
                  borderLeft: `5px solid ${getNoticeTypeColor(notice.type)}`,
                  background:
                    "linear-gradient(90deg, rgba(231, 76, 60, 0.05), white)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>
                    {getNoticeTypeIcon(notice.type)}
                  </span>
                  <span
                    className="notice-date"
                    style={{ background: getNoticeTypeColor(notice.type) }}
                  >
                    {notice.date}
                  </span>
                  <span
                    style={{
                      background: "#e74c3c",
                      color: "white",
                      padding: "3px 10px",
                      borderRadius: "15px",
                      fontSize: "0.8rem",
                      marginLeft: "10px",
                    }}
                  >
                    IMPORTANT
                  </span>
                </div>
                <h3 style={{ marginBottom: "15px" }}>{notice.title}</h3>
                <p style={{ lineHeight: "1.8", color: "#555" }}>
                  {notice.content}
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* All Notices */}
      <section
        className="section"
        style={{ background: "white", padding: "60px 20px", margin: "40px 0" }}
      >
        <h2>All Notices</h2>
        <div className="grid grid-1">
          {notices.map((notice, index) => (
            <div
              key={index}
              className="notice-item"
              style={{
                borderLeft: `5px solid ${getNoticeTypeColor(notice.type)}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>
                  {getNoticeTypeIcon(notice.type)}
                </span>
                <span
                  className="notice-date"
                  style={{ background: getNoticeTypeColor(notice.type) }}
                >
                  {notice.date}
                </span>
                <span
                  style={{
                    background: "#ecf0f1",
                    color: "#7f8c8d",
                    padding: "3px 10px",
                    borderRadius: "15px",
                    fontSize: "0.8rem",
                    marginLeft: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  {notice.type}
                </span>
              </div>
              <h3 style={{ marginBottom: "15px" }}>{notice.title}</h3>
              <p style={{ lineHeight: "1.8", color: "#555" }}>
                {notice.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Notice Subscription */}
      <section className="section">
        <h2>Stay Updated</h2>
        <div
          className="info-card"
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <h3>📱 Get Notices on Your Phone</h3>
          <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
            Never miss important school updates! Subscribe to our notice alerts
            to receive notifications directly on your mobile phone via SMS or
            WhatsApp.
          </p>
          <div
            className="form-container"
            style={{
              marginTop: "30px",
              maxWidth: "500px",
              margin: "30px auto 0",
            }}
          >
            <form>
              <div className="form-group">
                <label>Parent's Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label>Student's Name & Class</label>
                <input
                  type="text"
                  placeholder="e.g., Rahul Kumar - Class VII"
                />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="tel" placeholder="Enter your mobile number" />
              </div>
              <div className="form-group">
                <label>Notification Preference</label>
                <select>
                  <option value="">Select preference</option>
                  <option value="sms">SMS Only</option>
                  <option value="whatsapp">WhatsApp Only</option>
                  <option value="both">Both SMS & WhatsApp</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn"
                style={{ width: "100%", marginTop: "15px" }}
              >
                Subscribe to Notifications
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        className="section"
        style={{ background: "white", padding: "60px 20px", margin: "40px 0" }}
      >
        <h2>Download Important Documents</h2>
        <div className="grid grid-3">
          <div className="info-card" style={{ textAlign: "center" }}>
            <h3>📋 Application Forms</h3>
            <p>Download admission application forms and fee structure</p>
            <a href="#" className="btn" style={{ marginTop: "15px" }}>
              Download PDF
            </a>
          </div>
          <div className="info-card" style={{ textAlign: "center" }}>
            <h3>📅 Academic Calendar</h3>
            <p>Complete academic calendar with all important dates</p>
            <a href="#" className="btn" style={{ marginTop: "15px" }}>
              Download PDF
            </a>
          </div>
          <div className="info-card" style={{ textAlign: "center" }}>
            <h3>📖 School Handbook</h3>
            <p>School rules, regulations, and important guidelines</p>
            <a href="#" className="btn" style={{ marginTop: "15px" }}>
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Contact for Queries */}
      <section className="section">
        <h2>Have Questions?</h2>
        <div
          className="info-card"
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
            For any clarification regarding notices or school policies, feel
            free to contact our administration office during working hours.
          </p>
          <div className="grid grid-2" style={{ marginTop: "30px" }}>
            <div>
              <h4>📞 Office Phone</h4>
              <p>+91-XXXXXXXXXX</p>
            </div>
            <div>
              <h4>🕒 Office Hours</h4>
              <p>Mon-Sat: 9:00 AM - 4:00 PM</p>
            </div>
          </div>
          <a href="/contact" className="btn" style={{ marginTop: "20px" }}>
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
