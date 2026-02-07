'use client';

import React from "react"


const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <a href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
                    Edo Garcia
                </a>
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        <li>
                            <a href="#aboutme" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">About Me</a>
                        </li>
                        <li>
                            <a href="#skills" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">Skills</a>
                        </li>
                        <li>
                            <a href="#experience" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">Experience</a>
                        </li>
                    </ul>
                </div>
            </div>
            {navbarOpen ? <ul className="flex flex-col py-4 items-center">
                <li>
                    <a href="#aboutme" onClick={() => setNavbarOpen(false)} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">About Me</a>
                </li>
                <li>
                    <a href="#skills" onClick={() => setNavbarOpen(false)} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">Skills</a>
                </li>
                <li>
                    <a href="#experience" onClick={() => setNavbarOpen(false)} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">Experience</a>
                </li>
            </ul> : null}
        </nav>


    );

}

export default NavBar;

