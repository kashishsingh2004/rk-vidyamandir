import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Late R. K. Vidyamandir, Ruhellapur",
  description: "Established in 2000 by Chand Sir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Late R. K. Vidyamandir, Ruhellapur</h1>
          <p>Established in 2000 by Chand Sir</p>
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
