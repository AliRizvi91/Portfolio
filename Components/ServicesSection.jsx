"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";

function ServicesSection() {
    const [showFAQ, setShowFAQ] = useState(false);
    const [responsiveColor, setResponsiveColor] = useState(true);
    const [hoveredItem, setHoveredItem] = useState(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1280px)");
        const handleMediaChange = (e) => setShowFAQ(e.matches);

        setShowFAQ(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleMediaChange);

        return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }, []);

    const FAQData = [
        {
            id: "01",
            title: "Web Development",
            description: "Consectetur adipisicing elit. Facere blanditiis cumque sit obcaecati est voluptatem accusantium aut labore nam assumenda.",
        },
        {
            id: "02",
            title: "UI/UX Design",
            description: "Consectetur adipisicing elit. Facere blanditiis cumque sit obcaecati est voluptatem accusantium aut labore nam assumenda.",
        },
        {
            id: "03",
            title: "Content Writing",
            description: "Consectetur adipisicing elit. Facere blanditiis cumque sit obcaecati est voluptatem accusantium aut labore nam assumenda.",
        },
        {
            id: "04",
            title: "Digital Marketing",
            description: "Consectetur adipisicing elit. Facere blanditiis cumque sit obcaecati est voluptatem accusantium aut labore nam assumenda.",
        },
    ];

    const rowVariants = {
        initial: {
            background: "linear-gradient(to right, transparent, transparent)",
            color: "inherit",
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        hover: {
            background: "linear-gradient(to right, #8750f7, #2a1454)",
            color: "#ffffff",
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    const arrowVariants = {
        initial: {
            rotate: 0,
            color: "#8750f7",
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        },
        hover: {
            rotate: -90,
            color: "#ffffff",
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="w-full py-16 px-4 flex flex-col items-center bg-[#F6F3FC]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-transparent pb-5">
                My Quality Services
            </h1>
            <p className="text-center text-[15px] sm:text-[16px] leading-6 max-w-3xl">
                We put your ideas and thus your wishes in the form of a unique web project that
                inspires you and your customers.
            </p>
            <div className="w-full max-w-7xl mx-auto mt-12 px-4 sm:px-6">
                {showFAQ ? (
                    <table className="w-full text-left text-[#892fff]">
                        <tbody>
                            {FAQData.map((item) => (
                                <motion.tr
                                    key={item.id}
                                    className="border-b border-gray-200 h-28 cursor-pointer"
                                    variants={rowVariants}
                                    initial="initial"
                                    whileHover="hover"
                                    animate="initial"
                                >
                                    <th className="px-6 py-4 font-bold whitespace-nowrap">
                                        <Link href="#" className="flex items-center text-xl sm:text-2xl">
                                            <span className="mr-5 text-lg">{item.id}</span>
                                            {item.title}
                                        </Link>
                                    </th>
                                    <td className="px-6 py-4">
                                        <Link href="#" className="flex items-center text-xl sm:text-2xl">
                                            <p className="text-sm md:text-base">
                                                {item.description}
                                            </p>
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Link href="#" className="flex justify-end">
                                            <motion.div variants={arrowVariants}>
                                                <BsArrowDownRight className="text-2xl" />
                                            </motion.div>
                                        </Link>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="w-full">
                        {FAQData.map((item) => (
                            <Link key={item.id} href="#">
                                <motion.div
                                    className={`border-b border-gray-200 py-6 cursor-pointer`}
                                    style={{
                                        color: `${showFAQ === false && responsiveColor ? '#892fff' : ''}`
                                    }}
                                    variants={rowVariants}
                                    initial="initial"
                                    whileHover="hover"
                                    whileFocus="hover"
                                    whileTap="hover"
                                    animate="initial"
                                    tabIndex={0}
                                    onHoverStart={() => setHoveredItem(item.id)}
                                    onHoverEnd={() => setHoveredItem(null)}
                                    onTap={() => setHoveredItem(item.id)}
                                    onFocus={() => setHoveredItem(item.id)}
                                    onBlur={() => setHoveredItem(null)}
                                >
                                    <div className="px-6 space-y-2">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="mr-4 text-lg font-bold">{item.id}</span>
                                                <span className="text-xl sm:text-2xl font-bold">{item.title}</span>
                                            </div>
                                            <motion.div
                                                variants={arrowVariants}
                                                // animate="hover"
                                                animate={hoveredItem === item.id ? "hover" : "initial"}
                                                // initial="initial"
                                            >
                                                <BsArrowDownRight className="text-2xl" />
                                            </motion.div>
                                        </div>
                                        <p className="text-sm md:text-base line-clamp-2">{item.description}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ServicesSection;