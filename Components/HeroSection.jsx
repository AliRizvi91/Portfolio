"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiOutlineDownload } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

function HeroSection() {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)'); // Tailwind's 'md' breakpoint
    const handleMediaChange = (e) => setShowHero(e.matches);

    // Set initial state
    setShowHero(mediaQuery.matches);

    // Add listener for changes
    mediaQuery.addEventListener('change', handleMediaChange);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const socialMediaIcon = [
    { Draw: <FaFacebookF size={15} /> },
    { Draw: <FaLinkedinIn size={15} /> },
    { Draw: <IoBasketballOutline size={15} /> },
    { Draw: <FaGithub size={15} /> }
  ];


  return (
    <>
      {/* Gradient Circle Of Side */}
      <div className="absolute right-0 top-0 -z-10 transform-gpu overflow-hidden blur-2xl" aria-hidden="true">
        <div
          className="aspect-square w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] rounded-full bg-gradient-to-tr from-[#cc80ff] to-[#b97bff] opacity-22"
          style={{ transform: 'translate(50%, -50%)' }}
        />
      </div>

      {/* ------------ Hero Start ------------ */}
      <div className=" container bg-transparent top-[-3rem] relative overflow-hidden h-full">

        
        {/* --------------- Animated Background Image ---------------
        --------------------------------------------------------------- */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center -z-20"
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            pointerEvents: 'none' // Prevents interaction
          }}
        >
          <img
            src="/assets/Images/HeroBG.png"
            alt="Background"
            className="w-[17rem] md:w-[28rem] sm:w-[23rem] h-auto opacity-50"
          />
        </motion.div>

        <div className="relative z-10 h-full grid md:grid-cols-2 grid-cols-1 items-center">
          {/* Text Content */}
          <div className="mx-auto max-w-2xl px-6 pt-12 lg:px-8 py-16 md:pt-27 pb-0 md:pb-0 lg:py-37">
            <h1 className="text-3xl font-extrabold">I am Gerold</h1>
            <div className="text-start">
              <div className="w-full max-w-4xl mx-auto pr-4">
                <h1 className="text-5xl font-semibold tracking-tight xl:text-7xl lg:text-6xl md:text-5xl sm:text-5xl bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-transparent leading-tight">
                  Web Developer + UX Designer
                </h1>
              </div>

              {/* ------ HeroImage For Responsive ------ */}
              {showHero === false && (
                <div className="flex justify-center h-[25rem]">
                  <motion.div
                    className="mx-auto pt-8 flex justify-center items-start md:items-center relative"
                    initial={{ rotate: 10 }}
                    whileHover={{
                      scale: 1.01,
                      transition: { duration: 0.5 },
                      rotate: 0,
                    }}
                    whileTap={{
                      scale: 0.99,
                      transition: { duration: 0.2 },
                      rotate: 0,
                    }}
                  >
                    <motion.div
                      className="bg-[url(/assets/Images/HeroImage.jpg)] bg-contain bg-center w-[16rem] h-[19rem] rounded-[2.5rem] lg:w-[27rem] lg:h-[30rem] md:w-[25rem] md:h-[27rem] sm:w-[23rem] sm:h-[25rem]"
                      whileHover={{
                        border: "3px solid rgba(135,80,245,1)",
                        transition: { duration: 0.3 }
                      }}
                    />
                  </motion.div>
                </div>
              )}

              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                I break down complex user experience problems to create integrity focussed solutions that connect billions of people
              </p>
            </div>

            {/* -------- Buttons Group -------- */}
            <div className="flex md:flex-row flex-col items-center mt-10">
              <motion.div
                className="border md:w-[14rem] w-[12rem] flex justify-center border-[#8750f7] text-[#8750f7] cursor-pointer px-7 py-4 rounded-full font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                whileHover={{
                  backgroundColor: "#8750f7",
                  color: '#ffffff',
                  transition: { duration: 0.3 }
                }}
                variants={{
                  click: {
                    scale: 1.1,
                    backgroundColor: "#8750f7",
                    color: "#ffffff",
                    transition: { duration: 0.2 }
                  }
                }}
                whileTap="click"
                transition={{ type: "tween", ease: "easeInOut" }}
              >
                <Link href="#" className="font-semibold flex items-center md:text-[1rem] text-[0.8rem]">
                  Download CV <AiOutlineDownload size={17} className="mx-2" />
                </Link>
              </motion.div>

              {/* ---------------- Circle Icons --------------- */}
              <ul className="flex md:mt-0 mt-2">
                {socialMediaIcon.map((item, index) => (
                  <Link href="#" key={index}>
                    <motion.li
                      className="mx-1 md:mx-2 w-8 h-8 rounded-full cursor-pointer flex justify-center items-center relative overflow-hidden"
                      style={{ border: "1px solid rgba(135,80,245,1)" }}
                      whileHover="hover"
                      whileTap="click"
                      whileFocus="focus"
                      tabIndex={0}
                    >
                      <motion.div
                        className="absolute inset-0 bg-[#8750f7] rounded-full"
                        variants={{
                          hover: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
                          focus: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
                          click: { scale: 1.1, opacity: 1, transition: { duration: 0.2 } }
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                      />
                      <motion.div
                        variants={{
                          hover: { color: "#ffffff", transition: { duration: 0.3 } },
                          focus: { color: "#ffffff", transition: { duration: 0.3 } },
                          click: { color: "#ffffff", transition: { duration: 0.2 } }
                        }}
                        className="relative z-10"
                        style={{ color: "#8750f7" }}
                      >
                        {item.Draw}
                      </motion.div>
                    </motion.li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          {/* ------------------------- Grid2 of HeroImage ----------------------- */}
          {showHero === true && (
            <div className="flex justify-center h-[35rem]">
              <motion.div
                className="mx-auto top-0 flex justify-center items-start md:items-center relative h-full"
                initial={{ rotate: 10 }}
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 0.5 },
                  rotate: 0,
                }}
                whileTap={{
                  scale: 0.99,
                  transition: { duration: 0.2 },
                  rotate: 0,
                }}
              >
                <motion.div
                  className="bg-[url(/assets/Images/HeroImage.jpg)] bg-contain bg-center w-[19rem] h-[22rem] rounded-[2.5rem] lg:w-[27rem] lg:h-[30rem]"
                  whileHover={{
                    border: "3px solid rgba(135,80,245,1)",
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HeroSection;