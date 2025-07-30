"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="dropdown">
            <Link href="/academics" className="nav-link">
              Academics ▾
            </Link>
          </li>
          <li className="dropdown">
            <Link href="/administration" className="nav-link">
              Administration ▾
            </Link>
          </li>
          <li>
            <Link href="/admission" className="nav-link">
              Online Admission
            </Link>
          </li>
          <li>
            <Link href="/exam-result" className="nav-link">
              Exam Result
            </Link>
          </li>
          <li>
            <Link href="/fee-structure" className="nav-link">
              FEE STRUCTURE
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/events" className="nav-link">
              Events
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="nav-link">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/complain" className="nav-link">
              Complain
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
