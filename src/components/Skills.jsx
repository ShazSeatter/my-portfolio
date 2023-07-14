import React from 'react';


import "../App.css";

const Skills = () => {
    return (
        <>
        <div id="skills" className="w-3/4 ml-16">
        <h3 className="section-headers mt-20 mb-20"><span className="about-heading"></span>Skills</h3>
        <div className="flex justify-center flex-wrap">
            {/* react and javascript */}
            <div className="flex space-x-14 mb-14 md:space-x-0">
                <img className="rounded-md w-24 h-24 md-skills-img" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="" />
                <img className="rounded-md w-24 h-24" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="" />
            </div>
            {/* mongodb and node js */}
            <div className="flex space-x-14 mb-14 md:space-x-0">
                <img className="rounded-md w-24 h-24 md-skills-img" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="" />
                <img className="rounded-md w-24 h-24"src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="" />
            </div>
            {/* python and flask */}
            <div className="flex space-x-14 mb-14 md:space-x-0">
                <img className="rounded-md w-24 h-24 md-skills-img" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="" />
                <img className="rounded-md w-24 h-24"src="https://user-images.githubusercontent.com/25181517/183423775-2276e25d-d43d-4e58-890b-edbc88e915f7.png" alt="" />
            </div>
            {/* postSQL and java */}
            <div className="flex space-x-14 mb-14 md:space-x-0">
                <img className="rounded-md w-24 h-24 md-skills-img" src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="" />
                <img className="rounded-md w-24 h-24"src="https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png" alt="" />
            </div>
            {/* tailwind and c#*/}
            <div className="flex space-x-14 mb-14 md:space-x-0">
                <img className="rounded-md w-24 h-24 md-skills-img" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="" />
                <img className="rounded-md w-24 h-24"src="https://user-images.githubusercontent.com/25181517/121405384-444d7300-c95d-11eb-959f-913020d3bf90.png" alt="" />
            </div>
            {/* unity and restAPI */}
            <div className="flex space-x-14 mb-14 md:space-x-0">
                <img className="rounded-md w-24 h-24 md-skills-img" src="https://user-images.githubusercontent.com/25181517/193427941-9437dbbe-376f-40dc-9573-0ef5c02a26a7.png" alt="" />
                <img className="rounded-md w-24 h-24"src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="" />
            </div>
        </div>
        </div>
        </>
    );
};

export default Skills;