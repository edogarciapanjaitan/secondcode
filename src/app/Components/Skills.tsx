'use client'

import React from "react"
import HeroSection from "./HeroSection";

const Skills = () => {
    return (
        <section className="tools h-full bg-slate-900 px-3 py-6 rounded-4xl items-stretch" id="skills">
            <h1 className="text-4xl font-bold text-white p-3">Skills</h1>
            <span className="text-white p-3 lg:text-lg sm:text-md ">Here are some of tools that i use as Full-Stack Web Developer:</span>
            
            <ul className="text-white p-3 mt-4">Front End Skills</ul>
            <div className="tools-box mt-1 grid grid-cols-4 gap-4 p-3">
                <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group">
                    <img src="./assets/react.png" alt="tools img" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"/>
                    <h4 className="text-white hidden sm:block">React</h4> 
                </div>
                <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group">
                    <img src="./assets/css.png" alt="tools img" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"/>
                    <h4 className="text-white hidden sm:block">CSS</h4> 
                </div>
                 <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group">
                    <img src="./assets/java-script.png" alt="tools img" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"/>
                    <h4 className="text-white hidden sm:block">JavaScript</h4> 
                </div>
                <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group">
                    <img src="./assets/html-5.png" alt="tools img" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"/>
                    <h4 className="text-white hidden sm:block">HTML</h4> 
                </div> 
            </div>


             <ul className="text-white p-3 mt-4">Back End Skills</ul>
             <div className="tools-box mt-1 grid grid-cols-4 gap-4 p-3">
                <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group">
                    <img src="./assets/js.png" alt="tools img" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"/>
                    <h4 className="text-white hidden sm:block">NodeJS</h4> 
                </div>
                <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group">
                    <img src="./assets/django.png" alt="tools img" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"/>
                    <h4 className="text-white hidden sm:block">Django</h4> 
                </div>
                 <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group">
                    <img src="./assets/Ruby.png" alt="tools img" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"/>
                    <h4 className="text-white hidden sm:block">Ruby on Rails</h4> 
                </div>
            </div>

            <ul className="text-white p-3 mt-4">DevOps & Tools</ul>
            <div className="tools-box mt-1 grid grid-cols-4 gap-4 p-3">
                <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group">
                    <img src="./assets/Docker.png" alt="tools img" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"/>
                    <h4 className="text-white hidden sm:block">Docker</h4> 
                </div>
                <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group">
                    <img src="./assets/github.png" alt="tools img" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"/>
                    <h4 className="text-white hidden sm:block">Git</h4> 
                </div>
                <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group">
                    <img src="./assets/aws.png" alt="tools img" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"/>
                    <h4 className="text-white hidden sm:block">AWS</h4> 
                </div>
            </div>
        </section>
    );
}


export default Skills;
