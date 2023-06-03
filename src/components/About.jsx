import React from "react";
import "../App.css";
import "./About.css"; 

const About = () => {

    return (
        <>
        <section id="about-me" className="bg-black h-screen">
            <div className="card-container">
                <h3 className="text-color main-heading md:text-[3.5rem]/[4rem] text-[2rem]">About me</h3>
                <p className="p-text-color text-color sub-text md:text-[1rem]/[2rem] text-[1rem] mt-[2rem]">Hello there! I'm Shaz and thank you for visiting my site! I'm a junior software developer having recently graduated from CodeClan's 16-week intensive Professional Software development course. I have a background in healthcare, having previously worked as a Physiotherpist. I changed careers as I love the problem solving aspect of programming and the creavity you can bring to the projects you create. During my time at CodeClan I experienced over 800 hours of hands-on coding experience, learning the fundamentals of development in Python, Javascript and Java. I am eager to expand on my newfound knowledge as I enter the tech industry. 
                </p>
            </div>
        </section>
        </>
    )
}


export default About;