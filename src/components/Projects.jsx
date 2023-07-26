import React, {useEffect} from 'react';
import {AiFillGithub, AiFillYoutube} from 'react-icons/ai';
import pythonProject from '../assets/python_project.png';
import jsProject from '../assets/js_project.png';
import unityProject from '../assets/unity_project.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "../App.css";



const Projects = () => {

    useEffect(() => {
        AOS.init();
      }, [])


    return (
        <>
        <div id="projects" className="w-3/4 ml-16">
            <h3 className="section-headers"><span className="about-heading"></span>Projects</h3>
            {/* book bucket list */}
            <div className="md:flex md:mb-14 md:mt-3" data-aos="zoom-out" data-aos-duration="900">
                <img src={pythonProject} alt="Python Project Screenshot" className="my-12 rounded-md md-screen-img drop-shadow-lg cursor-pointer" onClick={() => window.open("https://github.com/ShazSeatter/Book_Bucket_List", "_blank")}/>
                <div className="flex flex-wrap md-margin">
                    <div>
                        <h4 className="project-title">Book Bucket List</h4>
                        <p className="project-description md-margin-left">Are you a bookworm who's constantly diving into new literary adventures, but find yourself struggling to keep track of your ever-growing library? Say goodbye to dog-eared pages and dusty bookshelves, and say hello to my book tracking app. This app has been built with Python, Flask and PostSQL.</p>
                    </div>
                    <div className="mt-8 flex md-margin-left">
                        <a href="https://github.com/ShazSeatter/Book_Bucket_List" target="_blank"><AiFillGithub className="link-btn mr-12"/></a>
                        <a href="https://youtu.be/cANuIF86dQk" target="_blank"><AiFillYoutube className="link-btn"/></a>
                    </div>
                </div>
            </div>
            {/* mind blank */}
            <div className="md:flex md:mb-14" data-aos="zoom-out" data-aos-duration="900">
               <img src={jsProject} alt="Javascript Project Screenshot" className="mt-14 rounded-md my-12 md-screen-img cursor-pointer" onClick={() => window.open("https://github.com/ShazSeatter/Mind_Blank", "_blank")}/>
                    <div className="flex flex-wrap md-margin">
                        <div>
                            <h4 className="project-title">Mind Blank!</h4>
                            <p className="project-description md-margin-left">Ignite your passion for trivia and unleash your inner quiz aficionado with "Mind Blank" - the ultimate trivia game app that will challenge your knowledge, entertain your senses, and keep you coming back for more! Dive into a world of captivating categories, challenging levels, and experience the thrill of victory as you try beat your highscore! This app has been built with React.js, Express, MongoDB and Node js. </p>
                        </div>
                        <div className="mt-8 flex md-margin-left">
                            <a href="https://github.com/ShazSeatter/Mind_Blank" target="_blank"><AiFillGithub className="link-btn mr-12"/></a>
                            <a href="https://youtu.be/a67F0SbpY6g" target="_blank"><AiFillYoutube className="link-btn"/></a>
                        </div>
                    </div>
            </div>
            {/* great escapse */}
            <div className="md:flex" data-aos="zoom-out" data-aos-duration="900">
                <img src={unityProject} alt="Unity Project Screenshot" className="mt-14 rounded-md my-12 md-screen-img cursor-pointer" onClick={() => window.open("https://github.com/ShazSeatter/The_Great_Escape", "_blank")}/>
                <div className="flex flex-wrap md-margin">
                    <div>
                        <h4 className="project-title">The Great Escape</h4>
                        <p className="project-description md-margin-left">The Great Escape is an exciting 2D game where you help your character defeat levels to return back home. Dodge hazards and destroy enemies as you embark on this adventure. With its captivating visuals and addictive gameplay,  The Great Escape offers an immersive and rewarding experience for players seeking a memorable escape adventure. This game has been built with the Unity engine and C#. </p>
                    </div>
                    <div className="mt-8 flex md-margin-left">
                        <a href="https://github.com/ShazSeatter/The_Great_Escape" target="_blank"><AiFillGithub className="link-btn mr-12"/></a>
                        <a href="https://youtu.be/7dY9AQyz9Ro" target="_blank"><AiFillYoutube className="link-btn"/></a>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Projects;