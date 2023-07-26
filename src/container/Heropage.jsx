import React, {useEffect} from "react";

import down from '../assets/down.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../App.css";
import './Heropage.css';


const Heropage = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    const handleScroll = () => {
        const element = document.getElementById('about-me');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <>
        {/* <div className="relative h-screen">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-400">
                <h1 className="md:text-[4rem]/[4.5rem] text-[2.5rem] main-heading text-color">Shazreen Seatter</h1>
                <h2 className="md:text-[2rem]/[4.5rem] text-[1.5rem] sub-text text-color">Junior Software Developer</h2>
                <button onClick={handleScroll}><div className="scroll"></div></button> 
            </div>
            </div>
        <About /> */}
        <header className="md:container text-center h-screen">
            <div>
            <h1 className="md:text-[3.5rem]/[4.5rem] md:mt-32 mt-28 text-[2.8rem] font-Gloock" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
              Shazreen Seatter
            </h1>
            <h2 className="md:text-[1.78rem]/[4.5rem] text-[1.5rem] font-Sintony" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                Junior Software Developer
            </h2>
            </div>
            <div>
                <img onClick={handleScroll} src={down} alt="" className="h-10 w-10 cursor-pointer m-auto mt-28 scroll" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"/>
            </div>
        </header>
      </>
    )
}

export default Heropage;