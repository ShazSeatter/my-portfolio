import React, {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import "../App.css";

const About = () => {

    useEffect(() => {
        AOS.init();
      }, [])

      const handleProjectScroll = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <>
            <div id="about-me" className="w-3/4 ml-16" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in">
                <h3 className="section-headers"><span className="about-heading"></span>ABOUT ME</h3>
                <h4 className="md:text-[3rem]/[4rem] text-[2.5rem] font-Gloock">Recent gradute of CodeClan based in Aberdeen, Scotland.</h4>
                <p className="md:text-[1rem]/[2rem] text-[1rem] mt-9 font-Sintony">I'm Shaz and thank you for visiting my site! I'm a junior software developer who's completed a 16-week intensive Professional Software development course. I have a background in healthcare, having previously worked as a Physiotherpist. I changed careers as I love the problem solving aspect of programming and the creavity you can bring to the projects you create. During my time at CodeClan I experienced over 800 hours of hands-on coding experience, learning the fundamentals of development in Python, Javascript and Java. I am eager to expand on my current knowledge as I enter the tech industry.
                </p>
                <p className="mt-9 font-bold border-b-2 border-transparent hover:border-black duration-300 cursor-pointer mb-52" onClick={handleProjectScroll}>CHECK OUT MY WORK</p>
            </div>
        </>
    )
}


export default About;