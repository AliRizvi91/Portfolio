"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import MainBTN from './MainBTN';
import { bouncEffect } from './Utilities/Animation';

// Components


function Navbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolledUp, setIsScrolledUp] = useState(false);
    const controls = useAnimation();

    const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);

    useEffect(() => {
        const handleScroll = () => {
            const shouldBeScrolled = window.scrollY > 100;
            const shouldBeScrolledUp = window.scrollY < 50;
            setIsScrolled(shouldBeScrolled);

            if (shouldBeScrolled) {
                controls.start("show");
            } else if (shouldBeScrolledUp) {
                controls.start("show");
                setIsScrolledUp(shouldBeScrolledUp)
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
        <Link href={href} className="block font-bold py-2 px-4 text-[#2a1454] rounded-sm md:p-0 relative group">
            {children}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-l from-[rgb(49,9,128)] to-[#915ff5] rounded-full transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
        </Link>
    );

    const NavContent = () => (
        <ul className={`font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent`}>
            {navLinks.map((link) => (
                <li key={link.name}>
                    <NavLink href={link.href}>{link.name}</NavLink>
                </li>
            ))}
            <li>
                <MainBTN text={'Hire me!'} />
            </li>
        </ul>
    );

    return (
        <>
            {/* Regular Navbar */}
            <nav className=" rounded-b-2xl z-1000 border-gray-200 bg-transparent relative shadow-none">
                <div className="container lg:px-16 md:px-13 px-6 md:items-center flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex justify-center items-center">
                        <img src="/assets/Images/Logo.png" className="h-auto max-w-[60px]" alt="Logo" />
                        <span className="self-end text-[15px] mb-5 px-3 whitespace-nowrap">mail@gerolddesign.com</span>
                    </Link>
                    <button
                        onClick={toggleNavbar}
                        type="button"
                        className="inline-flex rounded-[1px] items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-expanded={isNavbarOpen}
                    >
                        <span className="sr-only">Open menu</span>
                        <svg className="w-5 h-5 text-[#2a1454]" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`${isNavbarOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto`}>
                        <NavContent />
                    </div>
                </div>
            </nav>

            {/* Sticky Navbar */}
            <motion.nav
                initial="hidden"
                animate={controls}
                variants={bouncEffect(isScrolled ? 0 : -300)}
                className={`${isScrolled || isScrolledUp ? "top-0 rounded-b-2xl border-gray-200 pt-5 sticky bg-purple-50 shadow-[0px_2px_4px_rgba(147,51,234,0.3)] z-[1000] block" : "hidden"} `}
            >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex justify-center items-center">
                        <img src="/assets/Images/Logo.png" className="h-auto max-w-[60px]" alt="Logo" />
                        <span className="self-end text-[15px] mb-5 px-3 whitespace-nowrap">mail@gerolddesign.com</span>
                    </Link>
                    <button
                        onClick={toggleNavbar}
                        type="button"
                        className="inline-flex rounded-[1px] items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-expanded={isNavbarOpen}
                    >
                        <span className="sr-only">Open menu</span>
                        <svg className="w-5 h-5 text-[#2a1454]" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`${isNavbarOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto`}>
                        <NavContent />
                    </div>
                </div>
            </motion.nav>
        </>
    );
}

export default Navbar;