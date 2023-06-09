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
    
    return (
        <>
        <nav className="max-w-full">
            <div className="flex justify-between">
                <div>
                    <img className="h-20 w-20 hover:cursor-pointer" src={Logo_1} alt="Porfolio Logo" />
                </div>
                <div onClick={() => setOpen(!open)} className="md:hidden cursor-pointer p-3 m-4 z-20">
                    {open ? <CgClose className="h-6 w-6 "/> : <AiOutlineMenu className="h-6 w-6"/> }
                </div>
                    <ul className={`bg-[#ffffff14] backdrop-blur-md  md:flex md:static md:pr-12 pr-28 fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${!open ? 'right-[-100%] ' : 'right-0'}`}>
                        {Links.map((link) => (
                            <li key={Link.name} className="ml-7 my-7 mr-7">
                                <a href={link.href} className="font-Sintony"><span>{link.name}</span></a>
                            </li>))
                        }
                    </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;