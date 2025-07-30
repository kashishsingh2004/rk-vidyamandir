export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div
          className="grid grid-3"
          style={{ marginBottom: "30px", textAlign: "left" }}
        >
          <div>
            <h3 style={{ marginBottom: "15px", color: "#fff" }}>
              Contact Info
            </h3>
            <p>📍 Ruhellapur, District Name</p>
            <p>📞 +91-XXXXXXXXXX</p>
            <p>✉️ rkvidyamandir@email.com</p>
          </div>
          <div>
            <h3 style={{ marginBottom: "15px", color: "#fff" }}>Quick Links</h3>
            <p>
              <a
                href="/about"
                style={{ color: "#bdc3c7", textDecoration: "none" }}
              >
                About Us
              </a>
            </p>
            <p>
              <a
                href="/admission"
                style={{ color: "#bdc3c7", textDecoration: "none" }}
              >
                Admission
              </a>
            </p>
            <p>
              <a
                href="/facilities"
                style={{ color: "#bdc3c7", textDecoration: "none" }}
              >
                Facilities
              </a>
            </p>
            <p>
              <a
                href="/contact"
                style={{ color: "#bdc3c7", textDecoration: "none" }}
              >
                Contact
              </a>
            </p>
          </div>
          <div>
            <h3 style={{ marginBottom: "15px", color: "#fff" }}>
              School Hours
            </h3>
            <p>Monday - Friday: 8:00 AM - 2:00 PM</p>
            <p>Saturday: 8:00 AM - 12:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #34495e",
            paddingTop: "20px",
            textAlign: "center",
          }}
        >
          <p>
            &copy; 2025 Late R. K. Vidyamandir, Ruhellapur | Powered by Chand
            Sir | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
