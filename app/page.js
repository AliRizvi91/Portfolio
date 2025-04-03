"use client"
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// Components
import CountData from "@/Components/CountData";
import HeroSection from "@/Components/HeroSection";
import MyDetailSection from "@/Components/MyDetailSection";
import ServicesSection from "@/Components/ServicesSection";
import Skills from "@/Components/Skills";
import Blogs from "@/Components/Blogs";
import ContactUs from "@/Components/ContactUs";
import Stories from "@/Components/Stories";
import RecentWorks from "@/Components/RecentWorks";
import Loading from "@/Components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollY } = useScroll();

  // Smooth scroll effect
  useEffect(() => {
    // Disable default scrolling
    // document.body.style.overflow = 'hidden';
    
    let scrollable = false;
    let currentScroll = 0;
    let targetScroll = 0;
    let ease = 0.1; // Adjust this value for slower/faster scrolling (0.01-0.1)

    // Set the height of the body to enable scrolling
    const updateBodyHeight = () => {
      const body = document.body;
      const html = document.documentElement;
      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      document.body.style.height = height + 'px';
    };

    updateBodyHeight();
    window.addEventListener('resize', updateBodyHeight);

    // Smooth scroll function
    const smoothScroll = () => {
      if (!scrollable) return;
      
      // Calculate the difference between target and current scroll
      const diff = targetScroll - currentScroll;
      currentScroll += diff * ease;
      
      // Apply the scroll
      window.scrollTo(0, currentScroll);
      
      // Continue the animation
      requestAnimationFrame(smoothScroll);
    };

    // Start the smooth scroll animation
    requestAnimationFrame(smoothScroll);

    // Handle wheel events
    const handleWheel = (e) => {
      if (isLoading) return;
      
      e.preventDefault();
      targetScroll += e.deltaY;
      
      // Limit the scroll position
      targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight));
      
      if (!scrollable) {
        scrollable = true;
        smoothScroll();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', updateBodyHeight);
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [isLoading]);


  return (
    <>
      <Loading setIsLoading={setIsLoading} Position={isLoading ? "sticky":"absolute"} />
      <motion.main 
        className={`flex flex-col justify-center items-center ${isLoading ? "mainLoadPage" : ""}`}
      >
        <HeroSection />
        <CountData />
        <ServicesSection />
        <RecentWorks/>
        <MyDetailSection />
        <Skills />
        <Stories />
        <Blogs />
        <ContactUs />
      </motion.main>
    </>
  );
}