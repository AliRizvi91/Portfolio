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
        },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    // Arrow variants
    const arrowVariants = {
        hidden: {
            rotate: 0,
            color: "#8750f7",
        },
        visible: {
            rotate: 630,
            color: "#ffffff",
        },
    };

    // Transition settings
    const transition = {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
    };

    // Data arrays
    const ALL = [
        {
            Image: "/assets/Images/portfolio-1.jpg",
            Title: "Online Store",
            Description: "A modern online shopping solution with secure payment integration and responsive design.",
        },
        {
            Image: "/assets/Images/portfolio-2.jpg",
            Title: "Banking App",
            Description: "Financial management application with biometric authentication and budget tracking features.",
        },
        {
            Image: "/assets/Images/portfolio-3.jpg",
            Title: "Design System",
            Description: "Comprehensive UI kit and design framework for enterprise applications.",
        },
        {
            Image: "/assets/Images/portfolio-4.jpg",
            Title: "Fitness Tracker",
            Description: "Wearable integration app that monitors fitness metrics and sleep patterns.",
        },
    ];
    
    const APP = [
        {
            Image: "/assets/Images/portfolio-1.jpg",
            Title: "Online Store",
            Description: "A modern online shopping solution with secure payment integration and responsive design.",
        },
    ];
    
    const BRANDING = [
        {
            Image: "/assets/Images/portfolio-1.jpg",
            Title: "Online Store",
            Description: "A modern online shopping solution with secure payment integration and responsive design.",
        },
        {
            Image: "/assets/Images/portfolio-4.jpg",
            Title: "Fitness Tracker",
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
        return Data.map((data, index) => {
            const [isActive, setIsActive] = useState(false);

            return (
                <motion.div
                    key={index}
                    className="xl:w-[573px] xl:h-[465px] lg:w-[471px] lg:h-[377px] w-[352px] h-[300px] rounded-[10px] relative m-2 focus:outline-none"
                    style={{
                        backgroundImage: `url(${data.Image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileFocus="focus"
                    tabIndex={0}
                    onMouseEnter={() => setIsActive(true)}
                    onMouseLeave={() => setIsActive(false)}
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(false)}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    {/* Small card - Controlled by hover or focus state */}
                    <motion.div
                        className="flex flex-row w-[95%] items-center p-5 rounded-2xl bg-gradient-to-r from-[#8750f7] to-[#2a1454] absolute bottom-4 left-4"
                        initial="hidden"
                        animate={isActive ? "visible" : "hidden"}
                        variants={descriptionVariants}
                        transition={transition}
                    >
                        <div>
                            <h1 className="text-2xl font-bold text-white">{data.Title}</h1>
                            <p className="text-white line-clamp-2 leading-snug overflow-hidden text-ellipsis">
    {data.Description}
</p>
                        </div>
                        <motion.div
                            initial="hidden"
                            animate={isActive ? "visible" : "hidden"}
                            variants={arrowVariants}
                            transition={transition}
                        >
                            <BsArrowDownRight className="text-2xl" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            );
        });
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
            className="w-full px-1 lg:px-4 flex flex-col items-center bg-[#ffffff] py-[2.5rem] md:py-[7rem]"
            style={{ height: isTabEmpty ? "80rem" : "auto" }}
        >
            <h1 className="text-3xl sm:text-[45px] lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-transparent mb-8">
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
                                className={`inline-block sm:px-6 px-2 py-3 rounded-full relative z-10 ${activeTab === tab && "text-white"
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

            <div className="xl:container w-full sm:p-4 p-0">
                <div
                    className="absolute right-[50rem] top-[130rem] z-0 transform-gpu overflow-hidden blur-2xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-square w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] rounded-full bg-gradient-to-tr from-[#cc80ff] to-[#b97bff] opacity-35"
                        style={{ transform: "translate(50%, -50%)" }}
                    />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-2 md:gap-4 justify-items-center items-center">
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