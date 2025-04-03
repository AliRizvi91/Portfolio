// app/layout.jsx
import "./globals.css";
import Navbar from "../Components/Navbar";
import Footer from "@/Components/Footer";

export const metadata = {
  title: "Gerold - Personal Portfolio ",
  description: "Ore Wi Suna Ki Haal Aye",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="z-1000" style={{ scrollBehavior: 'smooth' }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}