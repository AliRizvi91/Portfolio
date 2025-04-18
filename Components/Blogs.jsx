"use client";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FaComments } from "react-icons/fa6";

function Blogs() {
  const BlogData = [
    {
      name: "Development",
      date: "May 10, 2024",
      comments: 0,
      img: "/assets/Images/Blog1.jpg",
      title: "want To Update Your Brain? Stop...",
    },
    {
      name: "Analysis",
      date: "May 10, 2024",
      comments: 0,
      img: "/assets/Images/Blog2.jpg",
      title: "The Role Of Tecnology In Modern...",
    },
    {
      name: "Technology",
      date: "May 10, 2024",
      comments: 0,
      img: "/assets/Images/Blog3.jpg",
      title: "Digital Marketo to Their New Office.",
    },
  ];

  const ImgVariant = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };

  const TextVariant = {
    initial: {
      color: "#171717",
    },
    hover: {
      color: "#ffffff",
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };

  const IconVariant = {
    initial: {
      color: "#9662ff",
    },
    hover: {
      color: "#ffffff",
      transition: {
        duration: 0.7,
        ease: easeInOut,
      },
    },
  };

  const BlogCard = ({ blog }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div 
        className="flex flex-col my-2 sm:w-[360px] justify-center items-center"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        tabIndex={0} // Make the div focusable
      >
        <div className="w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] rounded-[15px] flex justify-center overflow-hidden bg-purple-700">
          <motion.div
            variants={ImgVariant}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
            className="w-full max-w-[800px] cursor-pointer"
          >
            <Image
              src={blog.img}
              width={800}
              height={600}
              alt="Blog Image"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="relative left-[22px] sm:left-0 z-20 h-0 sm:px-3">
          <div className="absolute top-[-19.2rem] sm:top-[-22rem] py-1 px-3 bg-gradient-to-r from-[#9662ff] to-[#5a29b6] rounded-full uppercase">
            <p className="text-white text-center text-[13px]">{blog.name}</p>
          </div>

          <motion.div
            className="relative sm:top-[-8.1rem] top-[-7.5rem] sm:w-full w-[88%] p-3 rounded-2xl flex flex-col justify-center shadow-lg overflow-hidden"
            whileHover={{ background: "linear-gradient(to right, #8750f7, #2a1454)" }}
            whileFocus={{ background: "linear-gradient(to right, #8750f7, #2a1454)" }}
          >
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ background: "#ffffff" }}
              animate={{
                background: isHovered ? "linear-gradient(to right, #8750f7, #2a1454)" : "#ffffff",
              }}
              transition={{ duration: 0.5, ease: easeInOut }}
            />
            <div className="relative z-10">
              <div className="flex justify-start items-center mb-2">
                <div className="flex items-center">
                  <motion.span
                    variants={IconVariant}
                    initial="initial"
                    animate={isHovered ? "hover" : "initial"}
                  >
                    <BsCalendar2Date />
                  </motion.span>
                  <motion.p 
                    variants={IconVariant}
                    initial="initial"
                    animate={isHovered ? "hover" : "initial"}
                    className="px-1 text-[11px] sm:text-[15px]"
                  >
                    {blog.date}
                  </motion.p>
                </div>
                <div className="flex items-center px-2">
                  <motion.span
                    variants={IconVariant}
                    initial="initial"
                    animate={isHovered ? "hover" : "initial"}
                  >
                    <FaComments />
                  </motion.span>
                  <motion.p 
                    variants={IconVariant}
                    initial="initial"
                    animate={isHovered ? "hover" : "initial"}
                    className="px-1 text-[15px]"
                  >
                    No Comments
                  </motion.p>
                </div>
              </div>
              <motion.div
                variants={TextVariant}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                className="sm:text-[22px] text-[18px] font-bold"
              >
                <a href={`#`} className="focus:outline-none">{blog.title}</a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full py-[2.5rem] md:py-[7rem] px-4 flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl lg:text-[45px] font-bold tracking-tight bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-transparent pb-5">
        Recent Blogs
      </h1>
      <p className="text-center mb-15 text-[15px] sm:text-[16px] leading-6 max-w-3xl">
        We put your ideas and thus your wishes in the form of a unique web project that
        <br /> inspires you and your customers.
      </p>

      <div>
        <div className="flex flex-wrap justify-center md:justify-between gap-3 xl:gap-8 mt-8">
          {BlogData.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;