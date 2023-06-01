import React, {useState} from "react";
import './Navbar.css';
import {AiOutlineMenu, AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {GrAppsRounded} from 'react-icons/gr';
import { DiCodeBadge } from "react-icons/di";


import logo_2 from '../assets/logo_2.png'



const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />
            {
                nav ? (
                <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                    <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineHome size={23} />
                        <span className="pl-4 phone-nav-size">Home</span>
                    </a>
                    <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <BsPerson size={23} />
                        <span className="pl-4 phone-nav-size">About</span>
                    </a>
                    <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <DiCodeBadge size={23} />
                        <span className="pl-4 phone-nav-size">Skills</span>
                    </a>
                    <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <GrAppsRounded size={20} />
                        <span className="pl-4 phone-nav-size">Projects</span>
                    </a>
                    <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineMail size={20} />
                        <span className="pl-4 phone-nav-size">Contact</span>
                    </a>
                </div>
                ) : (
                ''
                )
            }
                {/* <nav className="md:block hidden sticky z-10">
                  
                        <div className="flex justify-end m-10 space-x-4">
                            <a href="#main" className="text-color">
                                <p className="navbar-link">Home</p>
                            </a>
                            <a href="#main" className="text-color">
                                <p className="navbar-link">About</p>
                            </a>
                            <a href="#main" className="text-color">
                                <p className="navbar-link">Projects</p>
                            </a>
                            <a href="#main" className="text-color">
                                <p className="navbar-link">Contact</p>
                            </a>
                        </div>
                    </nav> */}

                    <nav className="md:block hidden sticky z-10">
                        <div class="max-w-6xl mx-auto px-4">
                            <div class="flex justify-between">
                                <div classname="flex space-x-7">
                                    <a href="#main">
                                        <img src={logo_2} alt="" className="h-24 w-24 logo-img" />
                                    </a>
                                </div>
                                <div className="hidden md:flex items-center space-x-10">
                                    <a href="#main" className="text-color navbar-link">
                                        <span>Home</span>
                                    </a>
                                    <a href="#main" className="text-color navbar-link">
                                        <span>About</span> 
                                    </a>
                                    <a href="#main" className="text-color navbar-link">
                                       <span>Projects</span> 
                                    </a>
                                    <a href="#main" className="text-color navbar-link">
                                       <span>Contact</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
        </div>
    )
}

export default Navbar;