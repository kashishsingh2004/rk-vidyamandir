// app/layout.js
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Late R. K. Vidyamandir, Ruhellapur",
  description:
    "A premier educational institution established in 2000 by Chand Sir, dedicated to providing quality education and holistic development in Ruhellapur.",
  keywords:
    "school, education, Ruhellapur, R.K. Vidyamandir, Chand Sir, quality education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
