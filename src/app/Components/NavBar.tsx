'use client';

import React from "react"


const NavBar = () => {
    return (
        <div className="navbar flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100 text-white w-full">

            <h1 className="ml-9 text-2xl font-semibold">
                <button>
                    <a href="#">Edo Garcia</a>
                </button>
            </h1>

            <ul className="flex items-center gap-10 md:static fixed mr-9">
                <li>
                    <a href="#aboutme">About Me</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
            </ul>
        </div>


    );

}

export default NavBar;

