import React, { useState } from 'react';
import { FaHome, FaListAlt, FaUser, } from 'react-icons/fa';
import { FiMonitor } from "react-icons/fi";
import { Link } from 'react-router-dom';



const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);


    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };


    const downloadResume = (url) => {
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', 'resume');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    const navOption = <>
        <li>
            <Link to='/' className='flex items-center gap-2'> <span><FaHome /></span> Home</Link>
        </li>
        <li>
            <Link to='/about' className='flex items-center gap-2'> <span><FaUser /></span>About </Link>
        </li>
        <li>
            <Link to='/projects' className='flex items-center gap-2'> <span><FiMonitor /></span>Projects</Link>
        </li>
        <li>
            <a
                href='Sakib ahmed loskor resume.pdf'
                download='Sakib ahmed loskor resume.pdf'
                className='flex items-center gap-2'>
                <span><FaListAlt /></span>Resume
            </a>
        </li>
    </>


    return (
        <div className="w-full fixed bg-black backdrop-blur-sm drop-shadow-lg bg-opacity-40 text-white   md:h-16">
            <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 ">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  "
                            onClick={toggleNavbar}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex justify-between items-center w-9/12 mx-auto">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <div className='md:w-full'>
                                <h1 className='text-4xl primary-text font-bold custom-font'>Sa .</h1>
                            </div>
                        </div>
                        {/* Navigation links */}
                        <div className="hidden sm:block sm:ml-6 ">
                            <ul className="flex space-x-16 justify-end  text-lg">
                                {navOption}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* Mobile menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                <ul className="px-2 pt-2 pb-3 space-y-1">
                    {navOption}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;