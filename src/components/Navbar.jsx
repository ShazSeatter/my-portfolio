import React, {useState} from "react";

import './Navbar.css';
import {AiOutlineMenu, AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import { CgClose } from "react-icons/cg";
import {BsPerson} from 'react-icons/bs';
import {GrAppsRounded} from 'react-icons/gr';
import { DiCodeBadge } from "react-icons/di";


import logo_2 from '../assets/logo_2.png'
import Logo_1 from '../assets/Logo_1.png'
import { Link } from "@mui/material";



const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [nav, setNav] = useState(false);


    const Links = [
        {name: "Home", href: "#"},
        {name: "About", href: "#"},
        {name: "Skills", href: "#"},
        {name: "Project", href: "#"},
        {name: "Contact", href: "#"},
    ];

    function Menu () {
        return (<nav className="absolute lg:hidden">
        <ul className="relative">
            {
            Links.map((link) => (
                <li key={Link.name} className="ml-7 my-7">
                    <a href={link.href}>{link.name}</a>
                </li>
            ))
            }
        </ul>
    </nav>)
    }
    
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        // <div>
        //     <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />
        //     {
        //         nav ? (
        //         <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
        //             <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
        //                 <AiOutlineHome size={23} />
        //                 <span className="pl-4 phone-nav-size">Home</span>
        //             </a>
        //             <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
        //                 <BsPerson size={23} />
        //                 <span className="pl-4 phone-nav-size">About</span>
        //             </a>
        //             <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
        //                 <DiCodeBadge size={23} />
        //                 <span className="pl-4 phone-nav-size">Skills</span>
        //             </a>
        //             <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
        //                 <GrAppsRounded size={20} />
        //                 <span className="pl-4 phone-nav-size">Projects</span>
        //             </a>
        //             <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
        //                 <AiOutlineMail size={20} />
        //                 <span className="pl-4 phone-nav-size">Contact</span>
        //             </a>
        //         </div>
        //         ) : (
        //         ''
        //         )
        //     }
        //             <nav className="md:block hidden sticky z-10 bg-black">
        //                 <div className="max-w-6xl mx-auto px-4">
        //                     <div className="flex justify-between">
        //                         <div className="flex space-x-7">
        //                             <a href="#main" className="visible">
        //                                 <img src={logo_2} alt="" className="h-24 w-24 logo-img" />
        //                             </a>
        //                         </div>
        //                         <div className="hidden md:flex items-center space-x-10">
        //                             <a href="#main" className="text-color navbar-link">
        //                                 <span>Home</span>
        //                             </a>
        //                             <a href="#main" className="text-color navbar-link">
        //                                 <span>About</span> 
        //                             </a>
        //                             <a href="#main" className="text-color navbar-link">
        //                                <span>Projects</span> 
        //                             </a>
        //                             <a href="#main" className="text-color navbar-link">
        //                                <span>Contact</span>
        //                             </a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </nav>
        // </div>
        <>
        <div className="max-w-full">
            <div className="flex justify-between">
                <div>
                    <img className="h-20 w-20 hover:cursor-pointer" src={Logo_1} alt="Porfolio Logo" />
                </div>
                <div onClick={() => setOpen(!open)} className="lg:hidden md:hover:bg-gray-100 hover:cursor-pointer md:hover:rounded-lg p-3 m-4">
                    {open ? <CgClose className="h-6 w-6 "/> : <AiOutlineMenu className="h-6 w-6"/> }
                </div>
                    <ul className="lg:flex hidden">
                        {Links.map((link) => (
                            <li key={Link.name} className="ml-7 my-7 mr-7">
                                <a href={link.href}><span>{link.name}</span></a>
                            </li>))
                        }
                    </ul>
            </div>
            {open ?
                <Menu />
            : ('')}

            
        </div>
        </>
    )
}

export default Navbar;