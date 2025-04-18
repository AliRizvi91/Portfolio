"use client";
import Link from 'next/link';
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { bouncEffect } from './Utilities/Animation';

// Icons
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";

// Components
const MainBTN = dynamic(() => import('./MainBTN'))

function Navbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isFixedNavbarOpen, setIsFixedNavbarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const controls = useAnimation();

    // const NavContentPlace = useMotionValue(0);
    // const StragePlace = useTransform(NavContentPlace, [0, 500], ["0%", "100%"]);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 1024); // lg breakpoint in Tailwind
            setIsNavbarOpen(false);
        };

        // Initial check
        checkIfMobile();

        // Add event listener for resize
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const toggleNavbar = () => {
        if (isMobile) {
            setIsNavbarOpen(!isNavbarOpen);
        }
    };

    const toggleFixedNavbar = () => {
        if (isMobile) {
            setIsFixedNavbarOpen(!isFixedNavbarOpen);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const shouldBeScrolled = window.scrollY > 700;
            setIsScrolled(shouldBeScrolled);

            if (shouldBeScrolled || window.scrollY === 0) {
                controls.start("show");
            } else {
                controls.start("hidden");
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    const navLinks = [
        { name: "Services", href: "#" },
        { name: "Works", href: "#" },
        { name: "Resume", href: "#" },
        { name: "Skills", href: "#" },
        { name: "Testimonial", href: "#" },
        { name: "Contact", href: "#" },
    ];

    const NavLink = ({ href, children }) => (
        <Link href={href} className={`block gap-5 ${isNavbarOpen || isFixedNavbarOpen ? "text-[22px] pt-5 text-white" : "text-[#160436]"} font-[500] py-2 px-4 rounded-sm lg:p-0 relative group`}>
            {children}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-l from-[rgb(49,9,128)] to-[#915ff5] rounded-full transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
        </Link>
    );

    const NavContent = ({ mobile = false }) => (
        <ul className={`${mobile ? 'fixed top-24 left-0 right-0 w-full flex flex-col z-50 shadow-lg' : 'flex flex-col lg:flex-row 2xl:space-x-7 lg:space-x-5 lg:mt-0'} 
        ${isNavbarOpen || isFixedNavbarOpen ? "fixed top-[7.9rem] bg-[#2a1454] text-[15px] h-full" : "bg-transparent text-[15px]"}`}>
            {navLinks.map((link) => (
                <li key={link.name} >
                    <NavLink href={link.href} >{link.name}</NavLink>
                </li>
            ))}
        </ul>
    );

    return (
        <>
            {/* Regular Navbar */}
            <nav className={`${isNavbarOpen ? "bg-white" : "rounded-b-2xl bg-purple-50"} w-full flex justify-center items-center rounded-b-2xl z-50 border-gray-200 bg-transparent relative shadow-none pt-6`}>
                <div className={`${isNavbarOpen ? "bg-white w-full" : "lg:container bg-transparent xl:w-[68.5%] w-full"} lg:px-2 lg:items-center flex flex-wrap items-center justify-between xl:mx-auto p-4`}>
                    <Link href="/" className="flex justify-center items-center">
                        <img src="/assets/Images/Logo.png" className="h-auto max-w-[60px] 2xl:mr-6 mr-1" alt="Logo" />
                        <span className="self-end hidden sm:block text-[15px] mb-5 px-3 whitespace-nowrap">mail@gerolddesign.com</span>
                    </Link>
                    <div className="flex justify-center items-center">
                        <div className="hidden w-full lg:block lg:w-auto">
                            <NavContent />
                        </div>

                        <div>
                            <MainBTN text={'Hire me!'} className={'2xl:ml-12 ml-4 w-[8rem]'} />
                        </div>

                        {isMobile && (
                            <button
                                onClick={toggleNavbar}
                                type="button"
                                className="inline-flex items-center ml-2 p-2 w-auto sm:w-20 sm:h-20 justify-center text-sm lg:hidden hover:bg-gray-100 focus:outline-none"
                                aria-expanded={isNavbarOpen}
                            >
                                <span className="sr-only">Open menu</span>
                                <motion.div
                                    initial={false}
                                    animate={{ rotate: isNavbarOpen ? 90 : 0, scale: isNavbarOpen ? 1.1 : 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isNavbarOpen ? (
                                        <AiOutlineClose className="text-[#8750f7]" size={30} />
                                    ) : (
                                        <AiOutlineAlignRight className="text-[#8750f7]" size={30} />
                                    )}
                                </motion.div>
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu - Only animate if isMobile */}
                {isMobile && (
                    <AnimatePresence>
                        {isNavbarOpen && (
                            <motion.div
                                initial={{ 
                                    // scaleY: "0%",
                                     height: "0%" 
                                    }}
                                animate={{
                                    // scaleY: "50%",
                                    height: "100%",
                                    transition: {
                                        height: { duration: 0.7, ease: "easeInOut" },
                                    }
                                }}
                                exit={{
                                    // scaleY: "0%",
                                    height: "0%",
                                    transition: {
                                        height: { duration: 0.7, ease: "easeInOut" },
                                    }
                                }}
                                className="lg:hidden z-[-1] origin-top overflow-hidden"
                            >
                                <NavContent mobile />
                            </motion.div>
                        )}
                    </AnimatePresence>
                )}
            </nav>

            {/* Fixed Navbar that appears on scroll */}
            <motion.nav
                initial="hidden"
                animate={controls}
                variants={bouncEffect(isScrolled ? 0 : -200)}
                className={`${isFixedNavbarOpen ? "rounded-b-0" : "rounded-b-2xl"} w-full flex justify-center items-center border-gray-200 fixed bg-[#f6f3fc] top-0 pt-6 z-[1000]`}
                style={{ boxShadow: "0 4px 6px -1px rgb(135 80 247 / 20%)" }}
            >
                <div className={`${isFixedNavbarOpen ? "w-full" : "lg:container bg-[#f6f3fc] xl:w-[68.5%] w-full"} lg:px-2 lg:items-center flex flex-wrap items-center justify-between xl:mx-auto p-4`}>
                {/* <div className={`${isFixedNavbarOpen ? " w-full" : "lg:container xl:w-[68.5%] w-full"} bg-[#f6f3fc] lg:px-2 lg:items-center flex flex-wrap items-center justify-between xl:mx-auto p-4`}> */}
               
                    <Link href="/" className="flex justify-center items-center">
                        <img src="/assets/Images/Logo.png" className="h-auto max-w-[60px] 2xl:mr-6 mr-1" alt="Logo" />
                        <span className="self-end hidden sm:block text-[15px] mb-5 px-3 whitespace-nowrap">mail@gerolddesign.com</span>
                    </Link>
                    <div className="flex justify-center items-center">
                        <div className="hidden w-full lg:block lg:w-auto">
                            <NavContent />
                        </div>

                        <div>
                            <MainBTN text={'Hire me!'} className={'2xl:ml-12 ml-4 w-[8rem]'} />
                        </div>

                        {isMobile && (
                            <button
                                onClick={toggleFixedNavbar}
                                type="button"
                                className="inline-flex items-center ml-2 p-2 w-auto sm:w-20 sm:h-20 justify-center text-sm lg:hidden hover:bg-gray-100 focus:outline-none"
                                aria-expanded={isFixedNavbarOpen}
                            >
                                <span className="sr-only">Open menu</span>
                                <motion.div
                                    initial={false}
                                    animate={{ rotate: isFixedNavbarOpen ? 90 : 0, scale: isFixedNavbarOpen ? 1.1 : 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isFixedNavbarOpen ? (
                                        <AiOutlineClose className="text-[#2a1454]" size={30} />
                                    ) : (
                                        <AiOutlineAlignRight className="text-[#2a1454]" size={30} />
                                    )}
                                </motion.div>
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu for fixed navbar */}
                {isMobile && (
                    <AnimatePresence>
                        {isFixedNavbarOpen && (
                            <motion.div
                            initial={{ 
                                height: 0,
                                opacity: 0
                            }}
                            animate={{
                                height: "100%",
                                opacity: 1,
                                transition: {
                                    height: { 
                                        duration: 0.9, 
                                        ease: [0.4, 0, 0.2, 1] 
                                    },
                                    opacity: {
                                        duration: 0.6,
                                        ease: "easeInOut"
                                    }
                                }
                            }}
                            exit={{
                                height: "0%",
                                opacity: 0,
                                transition: {
                                    height: { 
                                        duration: 0.9, 
                                        ease: [0.4, 0, 0.2, 1] 
                                    },
                                    opacity: {
                                        duration: 0.5
                                    }
                                }
                            }}
                            className="lg:hidden z-[-1] origin-top overflow-hidden"
                        >
                            <NavContent mobile />
                        </motion.div>
                        )}
                    </AnimatePresence>
                )}
            </motion.nav>
        </>
    );
}

export default Navbar;