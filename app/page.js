"use client"
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";


// Dynamically imported components
const CountData = dynamic(() => import("@/Components/CountData"), { ssr: false });
const HeroSection = dynamic(() => import("@/Components/HeroSection"), { ssr: false });
const MyDetailSection = dynamic(() => import("@/Components/MyDetailSection"), { ssr: false });
const ServicesSection = dynamic(() => import("@/Components/ServicesSection"), { ssr: false });
const Skills = dynamic(() => import("@/Components/Skills"), { ssr: false });
const Blogs = dynamic(() => import("@/Components/Blogs"), { ssr: false });
const ContactUs = dynamic(() => import("@/Components/ContactUs"), { ssr: false });
const Stories = dynamic(() => import("@/Components/Stories"), { ssr: false });
const RecentWorks = dynamic(() => import("@/Components/RecentWorks"), { ssr: false });
const Loading = dynamic(() => import("@/Components/Loading"), { ssr: false });

export default function Home() {

  

  return (
    <>
      {/* <Loading setIsLoading={setIsLoading} Position={isLoading ? "sticky" : "absolute"} /> */}
      <motion.main 
        className="relative flex flex-col w-full bg-transparent justify-center items-center"
      >
        <HeroSection />
        <CountData />
        <ServicesSection />
        <RecentWorks />
        <MyDetailSection />
        <Skills />
        <Stories />
        <Blogs />
        <ContactUs />
      </motion.main>
    </>
  );
}