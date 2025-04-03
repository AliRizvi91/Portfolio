"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

function RecentWorks() {
    const [activeTab, setActiveTab] = useState("All");
    const tabs = ["All", "App", "Branding", "Content", "UI/UX"];

    // Enhanced card variants with more pronounced hover/focus effect
    const cardVariants = {
        hidden: {
            y: 15,
            opacity: 0,
            scale: 0.95,
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 20,
            },
        },
        hover: {
            scale: 1.03,
            y: -10,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
        focus: {
            scale: 1.03,
            y: -10,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    };

    // Description card variants
    const descriptionVariants = {
        hidden: {
            y: 15,
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
            },
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    };

    // Arrow variants
    const arrowVariants = {
        hidden: {
            rotate: 0,
            color: "#8750f7",
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
            },
        },
        visible: {
            rotate: -45,
            color: "#ffffff",
            scale: 1.2,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    };

    // Data arrays
    const ALL = [
        {
            Image: "/assets/Images/portfolio-1.jpg",
            Title: "E-commerce Platform",
            Description: "A modern online shopping solution with secure payment integration and responsive design.",
        },
        {
            Image: "/assets/Images/portfolio-2.jpg",
            Title: "Mobile Banking App",
            Description: "Financial management application with biometric authentication and budget tracking features.",
        },
        {
            Image: "/assets/Images/portfolio-3.jpg",
            Title: "Dellotie Design System",
            Description: "Comprehensive UI kit and design framework for enterprise applications.",
        },
        {
            Image: "/assets/Images/portfolio-4.jpg",
            Title: "Health Tracker",
            Description: "Wearable integration app that monitors fitness metrics and sleep patterns.",
        },
    ];

    const APP = [
        {
            Image: "/assets/Images/portfolio-1.jpg",
            Title: "E-commerce Platform",
            Description: "A modern online shopping solution with secure payment integration and responsive design.",
        },
    ];

    const BRANDING = [
        {
            Image: "/assets/Images/portfolio-1.jpg",
            Title: "E-commerce Platform",
            Description: "A modern online shopping solution with secure payment integration and responsive design.",
        },
        {
            Image: "/assets/Images/portfolio-4.jpg",
            Title: "Health Tracker",
            Description: "Wearable integration app that monitors fitness metrics and sleep patterns.",
        },
    ];

    const CONTENT = [];

    const DESIGN = [
        {
            Image: "/assets/Images/portfolio-1.jpg",
            Title: "New Age",
            Description: "A modern online shopping solution with secure payment integration and responsive design.",
        },
    ];

    // WorkCard component
    function WorkCard({ Data }) {
        return Data.map((data, index) => (
            <motion.div
                key={index}
                className="sm:w-[35rem] sm:h-[35rem] w-[30rem] h-[30rem] rounded-2xl relative m-2 sm:m-7 focus:outline-none"
                style={{
                    backgroundImage: `url(${data.Image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileFocus="focus" // Trigger focus state
                tabIndex={0} // Make the card focusable
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                {/* Small card - Controlled by parent hover or focus state */}
                <motion.div
                    variants={descriptionVariants}
                    initial="hidden"
                    animate="hidden" // Ensure it starts hidden
                    whileHover="visible" // Show on hover
                    whileFocus="visible" // Show on focus
                    className="flex flex-row w-[95%] items-center p-5 rounded-2xl bg-gradient-to-r from-[#8750f7] to-[#2a1454] absolute bottom-4 left-4"
                >
                    <div>
                        <h1 className="text-2xl font-bold text-white">{data.Title}</h1>
                        <p className="text-white">{data.Description}</p>
                    </div>
                    <motion.div
                        variants={arrowVariants}
                        initial="hidden"
                        animate="hidden" // Ensure it starts hidden
                        whileHover="visible" // Show on hover
                        whileFocus="visible" // Show on focus
                    >
                        <BsArrowDownRight className="text-2xl" />
                    </motion.div>
                </motion.div>
            </motion.div>
        ));
    }

    const getCurrentTabData = () => {
        switch (activeTab) {
            case "All":
                return ALL;
            case "App":
                return APP;
            case "Branding":
                return BRANDING;
            case "Content":
                return CONTENT;
            case "UI/UX":
                return DESIGN;
            default:
                return ALL;
        }
    };

    const currentTabData = getCurrentTabData();
    const isTabEmpty = currentTabData.length === 0;

    return (
        <div
            className="w-full py-16 px-4 flex flex-col items-center bg-[#ffffff]"
            style={{ height: isTabEmpty ? "80rem" : "auto" }}
        >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-transparent mb-8">
                My Recent Works
            </h1>

            <div className="my-7 sm:p-2 p-[5px] bg-purple-100 rounded-full">
                <ul className="flex flex-wrap text-sm font-medium text-[#8750f7]">
                    {tabs.map((tab) => (
                        <li key={tab} className="sm:me-2 me-[5px] relative">
                            <Link
                                href=""
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTab(tab);
                                }}
                                className={`inline-block sm:px-6 px-2 py-3 rounded-full relative z-10 ${
                                    activeTab === tab && "text-white"
                                }`}
                            >
                                {tab}
                            </Link>
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-gradient-to-r from-[#8750f7] to-[#2a1454] rounded-full"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30,
                                    }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="container sm:p-4 p-0">
                <div
                    className="absolute right-[50rem] top-[130rem] z-0 transform-gpu overflow-hidden blur-2xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-square w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] rounded-full bg-gradient-to-tr from-[#cc80ff] to-[#b97bff] opacity-35"
                        style={{ transform: "translate(50%, -50%)" }}
                    />
                </div>
                <div className="flex flex-wrap justify-center items-center">
                    {activeTab === "All" && <WorkCard Data={ALL} />}
                    {activeTab === "App" && <WorkCard Data={APP} />}
                    {activeTab === "Branding" && <WorkCard Data={BRANDING} />}
                    {activeTab === "Content" && <WorkCard Data={CONTENT} />}
                    {activeTab === "UI/UX" && <WorkCard Data={DESIGN} />}
                </div>
            </div>
        </div>
    );
}

export default RecentWorks;