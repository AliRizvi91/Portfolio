"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LiaAwardSolid } from "react-icons/lia";
import { PiGraduationCapDuotone } from "react-icons/pi";

function MyDetailSection() {
  const rowVariants = {
    initial: {
      color: "inherit",
    },
    hover: {
      color: "#ffffff",
      transition: {
        duration: 0.9,
        ease: "easeInOut",
      },
    },
  };

  const ExperienceData = [
    {
      date: "2022 - Present",
      position: "Lead Developer",
      address: "Blockdots, London",
    },
    {
      date: "2021 - 2022",
      position: "Full Stack Web Developer",
      address: "Parsons, The New School",
    },
    {
      date: "2020 - 2021",
      position: "UI Designer",
      address: "House of Life, Leeds",
    },
    {
      date: "2019 - 2020",
      position: "Junior Graphic Designer",
      address: "Theme Junction, Bursa",
    },
  ];

  const EducationData = [
    {
      date: "2020 - 2023",
      position: "Programming Course",
      address: "Harvard University",
    },
    {
      date: "2016 - 2020",
      position: "Graphic Design Course",
      address: "University of Denmark",
    },
    {
      date: "2012 - 2015",
      position: "Web Design Course",
      address: "University of California",
    },
    {
      date: "2010 - 2011",
      position: "Design & Technology",
      address: "Parsons, The New School",
    },
  ];

  const Card = ({ card }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        variants={rowVariants}
        initial="initial"
        whileHover="hover"
        whileFocus="hover"
        whileTap="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        onTapStart={() => setIsHovered(true)}
        onTapCancel={() => setIsHovered(false)}
        className="block max-w-[33rem] p-6 sm:mx-5 mx-3 border border-gray-200 rounded-3xl mt-6 relative overflow-hidden focus:outline-none"
        tabIndex={0}
      >
        <div
          className="absolute inset-0 z-0 transition-opacity duration-900 ease-in-out"
          style={{
            background: "linear-gradient(to right, #8750f7, #2a1454)",
            opacity: isHovered ? 1 : 0,
          }}
        />
        <div
          className="absolute inset-0 z-0 transition-opacity duration-900 ease-in-out"
          style={{
            background: "#ffffff",
            opacity: isHovered ? 0 : 1,
          }}
        />
        <div className="relative z-10">
          <motion.h5
            variants={rowVariants}
            className="mb-0 text-[1.2rem] font-semibold tracking-tight"
            style={{ color: isHovered ? "#ffffff" : "#8750f7" }}
          >
            {card.date}
          </motion.h5>
          <motion.h5
            variants={rowVariants}
            style={{ color: isHovered ? "#ffffff" : "#000000" }}
            className="mb-2 text-2xl uppercase font-bold tracking-tight"
          >
            {card.position}
          </motion.h5>
          <motion.p variants={rowVariants}
            style={{ color: isHovered ? "#ffffff" : "#000000" }} className="font-normal">
            {card.address}
          </motion.p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full py-16 px-4 flex flex-col items-center bg-[#F6F3FC]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center mb-8">
            <LiaAwardSolid className="w-12 h-12 text-[#8750f7] mr-4" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-transparent">
              My Experience
            </h1>
          </div>
          {ExperienceData.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>

        <div className="md:mt-0 mt-20">
          <div className="flex items-center mb-8">
            <PiGraduationCapDuotone className="w-12 h-12 text-[#8750f7] mr-4" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-transparent">
              My Education
            </h1>
          </div>
          {EducationData.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyDetailSection;