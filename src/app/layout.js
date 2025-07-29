import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Late Ramkali Vidya mandir junior highschool, Ruhellapur",
  description: "Established in 2000 by Chand Sir (UDISE Code-09421306803)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <img src="/logo.png" alt="School Logo" className="site-logo" />
          <div>
            <h1>Late Ramkali Vidya mandir junior highschool, Ruhellapur</h1>
            <p>Established in 2000 by Chand Sir (UDISE Code-09421306803),</p>
          </div>
        </header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/teachers">Teachers</Link>
          <Link href="/facilities">Facilities</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/admission">Admission</Link>
          <Link href="/notices">Notices</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main>{children}</main>
        <footer>
          &copy; 2025 Late R. K. Vidyamandir, Ruhellapur | Powered by Chand Sir
        </footer>
      </body>
    </html>
  );
}
