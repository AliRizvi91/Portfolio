"use client";

import {useState } from 'react';
import dynamic from 'next/dynamic';
// Components
;
const MainBTN = dynamic(()=> import('./MainBTN'))

// icons
import { FaPhoneVolume } from "react-icons/fa6";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";


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
        service: '' // Added service to track select value
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic
    };

    return (
        <div className="w-full py-[2.5rem] md:py-[7rem] pb-5 px-4  bg-[#F6F3FC] flex justify-center items-center">
            <div className="xl:container w-full xl:px-30 xl:mx-auto grid md:grid-cols-2 grid-cols-1 gap-3 md:gap-7 xl:gap-30 items-center">
            <form onSubmit={handleSubmit} className="md:order-1 order-2 max-w-full mx-auto p-10 bg-white rounded-2xl ">
                <h1 className="text-3xl sm:text-5xl lg:text-[45px] font-bold tracking-tight bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-transparent pb-5">
                    Let’s work together!
                </h1>
                <p className="text-start mb-7 text-[15px] sm:text-[16px] leading-6 max-w-3xl">
                    I design and code beautifully simple things and i love what i do. Just simple like that!
                </p>
                <div className="grid gap-trivial mb-12 md:grid-cols-1">
                    <div className="grid gap-5 md:grid-cols-2">
                        <div>
                            <input
                                type="text"
                                id="first_name"
                                name="firstName"
                                className="bg-[#f6f3fc] border text-[14px] border-gray-900 text-gray-900 rounded-lg block w-full p-3.5 "
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
                                className="bg-[#f6f3fc] border text-[14px] border-gray-900 text-gray-900 rounded-lg block w-full p-3.5 "
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
                                className="bg-[#f6f3fc] border text-[14px] border-gray-900 text-gray-900 rounded-lg block w-full p-3.5 "
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
                                className="bg-[#f6f3fc] border text-[14px] border-gray-900 text-gray-900 rounded-lg block w-full p-3.5 "
                                placeholder="Phone Number"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="">
                        <select 
                            id="countries" 
                            name="service"
                            className="bg-[#f6f3fc] my-6 border text-[14px] border-gray-900 text-gray-900 rounded-lg block w-full p-3.5"
                            value={formData.service}
                            onChange={handleChange}
                        >
                            <option value="">--Please choose an option--</option>
                            <option value="branding" className='sm:text-[14px] p-3'>Branding Design</option>
                            <option value="web" className='sm:text-[14px] p-3'>Web Design</option>
                            <option value="uiux" className='sm:text-[14px] p-3'>UI/UX Design</option>
                            <option value="app" className='sm:text-[14px] p-3'>App Design</option>
                        </select>
                    </div>
                    <textarea 
                        id="message" 
                        rows="10" 
                        className="text-[14px] block p-3.5 w-full text-gray-900 bg-[#f6f3fc] rounded-lg border border-gray-900" 
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