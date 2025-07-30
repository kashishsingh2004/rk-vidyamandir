import Navbar from "./Navbar";
import { FaPhone } from "react-icons/fa";
import Image from "next/image"; // ✅ Use next/image

export default function Header() {
  return (
    <header className="site-header">
      {/* Top Header Section */}
      <div className="header-top">
        <div className="header-left">
          <Image
            src="/logo.png"
            alt="Late R.K. Vidyamandir Logo"
            width={80}
            height={80}
            className="site-logo"
          />
          <div className="header-info">
            <h1>Late Ramkali Vidya mandir junior highschool</h1>
            <p className="header-subtitle">
              Ruhellapur | Established in 2000 by Chand Sir | Excellence in
              Education | UDISE Code-09421306803
            </p>
          </div>
        </div>

        <div className="header-right">
          <div className="contact-info">
            <div className="call-section">
              <FaPhone className="phone-icon" />
              <div className="call-details">
                <span className="call-label">Call Us</span>
                <span className="call-number">+918009337704</span>
              </div>
            </div>
          </div>

          <button className="login-button">Login</button>
        </div>
      </div>

      {/* Navigation Bar */}
      <Navbar />
    </header>
  );
}
