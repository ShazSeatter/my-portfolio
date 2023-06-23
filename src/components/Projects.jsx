import React from 'react';
import {AiFillGithub, AiFillYoutube} from 'react-icons/ai';
import pythonProject from '../assets/python_project.png';
import jsProject from '../assets/js_project.png';


import "../App.css";



const Projects = () => {
    return (
        <>
        <div id="projects" className="w-3/4 ml-16">
            <h3 className="section-headers"><span className="about-heading"></span>Projects</h3>
            <div className="md:flex">
                <img src={pythonProject} alt="" className="my-12 rounded-md"/>
                <div>
                    <h4 className="project-title">Book Bucket List</h4>
                    <p className="project-description">Are you a bookworm who's constantly diving into new literary adventures, but find yourself struggling to keep track of your ever-growing library? Say goodbye to dog-eared pages and dusty bookshelves, and say hello to my book tracking app. This app has been built with Python, Flask and PostSQL.</p>
                </div>
                <div className="mt-8 flex">
                    <a href="https://github.com/ShazSeatter/Book_Bucket_List" target="_blank"><AiFillGithub className="link-btn mr-12"/></a>
                    <a href="https://youtu.be/cANuIF86dQk" target="_blank"><AiFillYoutube className="link-btn"/></a>
                </div>
            </div>
            <div>
            <img src={jsProject} alt="" className="mt-14 rounded-md my-12"/>
                <h4 className="project-title">Mind Blank!</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, delectus optio incidunt dolores corporis quos deleniti at voluptatem perferendis porro ut esse exercitationem cum provident laboriosam modi animi, dolor ex.</p>
            </div>
        </div>
        </>
    )
}

export default Projects;