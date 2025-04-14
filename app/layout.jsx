import "./globals.css";
import dynamic from "next/dynamic";
// Components
import SmoothScroll from "@/Components/Utilities/SmothScroll";
const Navbar = dynamic(()=> import("@/Components/Navbar"))
const Footer = dynamic(()=> import("@/Components/Footer"))
const BackToTop = dynamic(()=> import("@/Components/BackToTop"))

export const metadata = {
  title: "Gerold – Personal Portfolio WordPress Theme",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="z-1000 h-[100%] bg-[#ffffff]" style={{ scrollBehavior: 'smooth' }}>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}