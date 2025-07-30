"use client";
import Link from "next/link";
import "./navbar.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">RK Vidyamandir</div>

      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/admission">Admission</Link>
          </li>
          <li>
            <Link href="/facilities">Facilities</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/notices">Notices</Link>
          </li>
          <li>
            <Link href="/teachers">Teachers</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className="nav-social">
          <a href="https://facebook.com" target="_blank">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://youtube.com" target="_blank">
            <FaYoutube />
          </a>
        </div>
      </div>
    </nav>
  );
}
