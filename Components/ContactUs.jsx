"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
// Components
const MainBTN = dynamic(() => import('./MainBTN'))

// icons
import { FaPhoneVolume } from "react-icons/fa6";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";

function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        website: '',
        visitors: '',
        email: '',
        password: '',
        confirmPassword: '',
        remember: false,
        service: ''
    });

    const [isSelectOpen, setIsSelectOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        
        // Close dropdown when a selection is made
        if (name === 'service') {
            setIsSelectOpen(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic
    };

    const toggleSelect = () => {
        setIsSelectOpen(!isSelectOpen);
    };

    const selectVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.5
            }
        },
        closed: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.2
            }
        }
    };

    const arrowVariants = {
        open: { rotate: 180 },
        closed: { rotate: 0 }
    };

    return (
        <div className="w-full py-[2.5rem] md:py-[7rem] pb-5 px-4 bg-[#F6F3FC] flex justify-center items-center">
            <div className="xl:container w-full xl:px-30 xl:mx-auto grid md:grid-cols-2 grid-cols-1 gap-3 md:gap-7 xl:gap-30 items-center">

                <form onSubmit={handleSubmit} className="md:order-1 order-2 max-w-full mx-auto sm:p-10 p-5 bg-white rounded-2xl">
                    <h1 className="text-3xl sm:text-5xl lg:text-[45px] font-bold tracking-tight bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-transparent pb-5">
                        Let's work together!
                    </h1>
                    <p className="text-start mb-12 text-[15px] sm:text-[16px] leading-6 max-w-3xl">
                        I design and code beautifully simple things and i love what i do. Just simple like that!
                    </p>
                    <div className="grid gap-trivial mb-14 md:grid-cols-1">
                        <div className="grid gap-3 md:grid-cols-2">
                            <div>
                                <input
                                    type="text"
                                    id="first_name"
                                    name="firstName"
                                    className="bg-[#f6f3fc] border text-[16px] border-gray-900 text-gray-900 rounded-lg block w-full px-3.5 py-4 focus:outline-none"
                                    placeholder="First Name"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="last_name"
                                    name="lastName"
                                    className="bg-[#f6f3fc] border text-[16px] border-gray-900 text-gray-900 rounded-lg block w-full px-3.5 py-4 focus:outline-none"
                                    placeholder="Last Name"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="bg-[#f6f3fc] border text-[16px] border-gray-900 text-gray-900 rounded-lg block w-full px-3.5 py-4 focus:outline-none"
                                    placeholder="Address"
                                    required
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="bg-[#f6f3fc] border text-[16px] border-gray-900 text-gray-900 rounded-lg block w-full px-3.5 py-4 focus:outline-none"
                                    placeholder="Phone Number"
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        
                        {/* Enhanced Select Dropdown */}
                        <div className="relative">
                            <div 
                                className="bg-[#f6f3fc] my-5 border text-[16px] border-gray-900 text-gray-900 rounded-lg w-full px-3.5 py-4 focus:outline-none flex items-center justify-between cursor-pointer"
                                onClick={toggleSelect}
                            >
                                {formData.service || "--Please choose an option--"}
                                <motion.div
                                    animate={isSelectOpen ? "open" : "closed"}
                                    variants={arrowVariants}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FiChevronDown className="text-lg" />
                                </motion.div>
                            </div>
                            
                            <AnimatePresence>
                                {isSelectOpen && (
                                    <motion.div
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={selectVariants}
                                        className="absolute z-10 bg-[#f6f3fc] border border-gray-900 rounded-lg shadow-lg overflow-hidden"
                                    >
                                        <select 
                                            id="countries" 
                                            name="service"
                                            className="bg-transparent w-[276px] text-[16px] text-gray-900 block px-3.5 py-4 focus:outline-none appearance-none overflow-hidden"
                                            value={formData.service}
                                            onChange={handleChange}
                                            size={4}
                                        >
                                            <option value="">--Please choose an option--</option>
                                            <option value="branding" className='sm:text-[16px] p-3 hover:bg-[#e9e0fa]'>Branding Design</option>
                                            <option value="web" className='sm:text-[16px] p-3 hover:bg-[#e9e0fa]'>Web Design</option>
                                            <option value="uiux" className='sm:text-[16px] p-3 hover:bg-[#e9e0fa]'>UI/UX Design</option>
                                            <option value="app" className='sm:text-[16px] p-3 hover:bg-[#e9e0fa]'>App Design</option>
                                        </select>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        
                        <textarea 
                            id="message" 
                            rows="10" 
                            className="text-[16px] block px-3.5 py-4 w-full text-gray-900 bg-[#f6f3fc] rounded-lg border border-gray-900 focus:outline-none" 
                            placeholder="Messages..."
                        ></textarea>
                    </div>
                    <MainBTN text={'Send Message'} className={`px-7 py-4`} />
                </form>

                <div className="md:order-2 md:mb-0 pb-15 order-1 flex flex-col justify-start xl:ml-25 ml-7 md:mt-0 mt-10 items-start">
                    <div className="flex items-center my-5">
                        <div className="w-13 h-13 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#8750f7] to-[#2a1454]">
                            <FaPhoneVolume className='text-[1.4rem]' />
                        </div>
                        <div className="flex flex-col mx-7 items-start">
                            <p className='text-[15px]'>Phone</p>
                            <p className='text-[13px] sm:text-[19px] font-semibold'>+01 123 654 8096</p>
                        </div>
                    </div>
                    <div className="flex items-center my-5">
                        <div className="w-13 h-13 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#8750f7] to-[#2a1454]">
                            <LuMessageCircleMore className='text-[1.4rem]' />
                        </div>
                        <div className="flex flex-col mx-7 items-start">
                            <p className='text-[15px]'>Email</p>
                            <p className='text-[13px] sm:text-[19px] font-semibold'>gerolddesign@mail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center my-5">
                        <div className="w-13 h-13 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#8750f7] to-[#2a1454]">
                            <IoLocationOutline className='text-[1.4rem]' />
                        </div>
                        <div className="flex flex-col mx-7 items-start">
                            <p className='text-[15px]'>Address</p>
                            <p className='text-[13px] sm:text-[19px] font-semibold cursor-pointer leading-6'>
                                Warne Park Street Pine,<br />
                                FL 33157, New York
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;