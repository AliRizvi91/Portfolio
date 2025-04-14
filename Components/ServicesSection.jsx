"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

function ServicesSection() {
    const [showFAQ, setShowFAQ] = useState(false);
    const [hoverStates, setHoverStates] = useState({});
    
    const handleMouseEnter = (itemId, e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const entryY = e.clientY - rect.top;
        const threshold = rect.height * 0.25;

        setHoverStates(prev => ({
            ...prev,
            [itemId]: {
                isHovered: true,
                enteredFromTop: entryY < threshold,
                enteredFromBottom: entryY > rect.height - threshold
            }
        }));
    };

    const handleMouseLeave = (itemId) => {
        setHoverStates(prev => ({
            ...prev,
            [itemId]: {
                isHovered: false,
                enteredFromTop: false,
                enteredFromBottom: false
            }
        }));
    };

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

    const backgroundVariants = {
        initial: {
            y: (itemId) => {
                const state = hoverStates[itemId];
                return state?.enteredFromTop ? "40%" : state?.enteredFromBottom ? "-40%" : "0%";
            },
            opacity: 0,
            transition: {
                y:{
                    type: "spring",
                    damping: 50,
                    stiffness: 300,
                    duration: 3,
                    ease: [0.25, 0.1, 0.25, 1],
                }
            },
        },
        hover: {
            y: 0,
            opacity: 1,
            transition: {
                y:{
                    type: "spring",
                    damping: 50,
                    stiffness: 300,
                    duration: 3,
                    ease: [0.25, 0.1, 0.25, 1],
                }
            },
        },
    };

    const rowVariants = {
        initial: {
            color: "inherit",
            transition: {
                duration: 0.4,
                ease: "easeInOut",
            },
        },
        hover: {
            color: "#ffffff",
            transition: {
                duration: 0.4,
                ease: "easeInOut",
            },
        },
    };

    const arrowVariants = {
        initial: {
            rotate: 0,
            color: "#8750f7",
            transition: {
                duration: 0.4,
                ease: "easeInOut",
            },
        },
        hover: {
            rotate: -90,
            color: "#ffffff",
            transition: {
                duration: 0.4,
                ease: "easeInOut",
            },
        },
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
                                <AnimatePresence
                                key={item.id}>
                                <motion.tr
                                    onMouseEnter={(e) => handleMouseEnter(item.id, e)}
                                    onMouseLeave={() => handleMouseLeave(item.id)}
                                    className="relative border-b border-gray-200 h-28 cursor-pointer"
                                    variants={rowVariants}
                                    initial="initial"
                                    animate={hoverStates[item.id]?.isHovered ? "hover" : "initial"}
                                >
                                    {/* Background Layer */}
                                    <td colSpan={3} className="absolute inset-0 p-0 m-0">
                                        <motion.div
                                            className="absolute inset-0 z-0"
                                            custom={item.id}
                                            variants={backgroundVariants}
                                            initial="initial"
                                            animate={hoverStates[item.id]?.isHovered ? "hover" : "initial"}
                                            style={{
                                                background: "linear-gradient(to right, #8750f7, #2a1454)",
                                            }}
                                        />
                                    </td>
                                    {/* Content */}
                                    <th className="relative z-10 px-6 py-4 font-bold whitespace-nowrap">
                                        <Link href="#" className="flex items-center text-xl sm:text-2xl">
                                            <span className="mr-5 text-lg">{item.id}</span>
                                            {item.title}
                                        </Link>
                                    </th>
                                    <td className="relative z-10 px-6 py-4">
                                        <Link href="#" className="flex items-center text-xl sm:text-2xl">
                                            <p className="text-sm md:text-base">{item.description}</p>
                                        </Link>
                                    </td>
                                    <td className="relative z-10 px-6 py-4 whitespace-nowrap">
                                        <Link href="#" className="flex justify-end">
                                            <motion.div
                                                variants={arrowVariants}
                                                animate={hoverStates[item.id]?.isHovered ? "hover" : "initial"}
                                            >
                                                <BsArrowDownRight className="text-2xl" />
                                            </motion.div>
                                        </Link>
                                    </td>
                                </motion.tr>
                                </AnimatePresence>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="w-full">
                        {FAQData.map((item) => (
                            <Link key={item.id} href="#">
                                <motion.div
                                    className="relative border-b border-gray-200 py-6 cursor-pointer overflow-hidden"
                                    variants={rowVariants}
                                    initial="initial"
                                    animate={hoverStates[item.id]?.isHovered ? "hover" : "initial"}
                                    tabIndex={0}
                                    onMouseEnter={(e) => handleMouseEnter(item.id, e)}
                                    onMouseLeave={() => handleMouseLeave(item.id)}
                                    onFocus={() => handleMouseEnter(item.id, { clientY: 0, currentTarget: document.querySelector(`[data-item="${item.id}"]`) })}
                                    onBlur={() => handleMouseLeave(item.id)}
                                    data-item={item.id}
                                >
                                    {/* Background Layer */}
                                    <motion.div
                                        className="absolute inset-0 z-0"
                                        custom={item.id}
                                        variants={backgroundVariants}
                                        initial="initial"
                                        animate={hoverStates[item.id]?.isHovered ? "hover" : "initial"}
                                        style={{
                                            background: "linear-gradient(to right, #8750f7, #2a1454)",
                                        }}
                                    />
                                    {/* Content */}
                                    <div className="relative z-10 px-6 space-y-2">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="mr-4 text-lg font-bold">{item.id}</span>
                                                <span className="text-xl sm:text-2xl font-bold">{item.title}</span>
                                            </div>
                                            <motion.div
                                                variants={arrowVariants}
                                                animate={hoverStates[item.id]?.isHovered ? "hover" : "initial"}
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