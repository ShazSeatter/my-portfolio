import React from "react";
import './Heropage.css'


const Heropage = () => {
    return (
        <div classname="relative h-32">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black">
                <h1 className="md:text-[4rem]/[4.5rem] text-[2.5rem] text-color">Shazreen Seatter</h1>
                <h2 className="md:text-[2.5rem]/[4.5rem] text-[1.5rem] text-color">Junior Software Developer.</h2>
            </div>
        </div>
    )
}

export default Heropage;