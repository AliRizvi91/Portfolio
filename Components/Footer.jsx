"use client"
import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
    return (
        <footer className="bg-[#2a1454] shadow-sm">
            <div className="w-full max-w-screen-xl flex flex-col justify-center items-center mx-auto p-4 md:py-8">

                <Link href="#" className="flex items-center mb-3 sm:mb-8">
                    <Image
                        src="/assets/Images/WhiteLogo.png"
                        alt="Logo"
                        width={75}
                        height={75}
                        className="h-[75px] w-auto"
                        priority // Preload important image
                    />
                </Link>
                <div className="sm:flex sm:items-center sm:justify-center">
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
                        <li>
                            <Link href={"#"} className="block font-bold me-4 md:me-6py-2 md:mx-5 mx-2 my-3 text-[#ffffff] rounded-sm md:p-0 relative group">
                                Service.
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-l from-[rgb(143,87,255)] to-[#c1a2ff] rounded-full transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"} className="block font-bold me-4 md:me-6py-2 md:mx-5 mx-2 my-3 text-[#ffffff] rounded-sm md:p-0 relative group">
                                Works.
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-l from-[rgb(143,87,255)] to-[#c1a2ff] rounded-full transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"} className="block font-bold me-4 md:me-6py-2 md:mx-5 mx-2 my-3 text-[#ffffff] rounded-sm md:p-0 relative group">
                                Skills.
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-l from-[rgb(143,87,255)] to-[#c1a2ff] rounded-full transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"} className="block font-bold me-4 md:me-6py-2 md:mx-5 mx-2 my-3 text-[#ffffff] rounded-sm md:p-0 relative group">
                                Experience.
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-l from-[rgb(143,87,255)] to-[#c1a2ff] rounded-full transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"} className="block font-bold me-4 md:me-6py-2 md:mx-5 mx-2 my-3 text-[#ffffff] rounded-sm md:p-0 relative group">
                                Blog.
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-l from-[rgb(143,87,255)] to-[#c1a2ff] rounded-full transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
                <span className="block text-sm text-[#823fff] sm:text-center">
                    {/* © {new Date().getFullYear()}{' '} */}
                    {/* <Link href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </Link> */}
                    © 2024 All Rights Reserved by <span className='font-semibold -tracking-wide'>ThemeJunction</span>
                </span>
            </div>
        </footer>
    );
};

export default Footer;