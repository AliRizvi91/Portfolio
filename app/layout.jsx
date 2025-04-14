// app/layout.js
import "./globals.css";
import dynamic from "next/dynamic";
import LoadingWrapper from '@/Components/LoadingWrapper';

const Navbar = dynamic(() => import("@/Components/Navbar"), {
  loading: () => <div className="h-20"></div>,
});
const Footer = dynamic(() => import("@/Components/Footer"), {
  loading: () => <div className="h-20"></div>,
});
const BackToTop = dynamic(() => import("@/Components/BackToTop"));

export const metadata = {
  title: "Gerold – Personal Portfolio WordPress Theme",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="z-1000 h-[100%] bg-[#ffffff]" style={{ scrollBehavior: 'smooth' }}>
        <LoadingWrapper>
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </LoadingWrapper>
      </body>
    </html>
  );
}