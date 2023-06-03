import React from "react";

import About from '../components/About';
import "../App.css";
import './Heropage.css';


const Heropage = () => {

    const handleScroll = () => {
        const element = document.getElementById('about-me');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <>
        <div className="relative h-screen">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black">
                <h1 className="md:text-[4rem]/[4.5rem] text-[2.5rem] main-heading text-color">Shazreen Seatter</h1>
                <h2 className="md:text-[2rem]/[4.5rem] text-[1.5rem] sub-text text-color">Junior Software Developer</h2>
                <button onClick={handleScroll}><div className="scroll"></div></button> 
            </div>
            </div>
        <About />
      </>
    )
}

export default Heropage;