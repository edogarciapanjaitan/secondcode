'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Experience = () => {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16 mt-20 " id="experience">
            <img className="w-[370px] h-[370px]" src=".\assets\3779552.jpg" alt="pic"></img>
            <h1 className="text-transparent text-4xl font-bold mb-4 bg-clip-text bg-gradient-to-l from-slate-600 to-slate-300">
            Professional Experience
            <ul className="text-[20px] mt-2">Full-stack Web Developer PT. Nutrifood Indonesia</ul>
            <ul className="text-[15px] mt-1">Responsibilities & Key Contributions:</ul>
                <li className="text-[13px] mt-1 px-2">Developed and maintained both front-end and back-end components of high-traffic web applications using React.js/Vue.js and Node.js with Express with Django.</li>
                <li className="text-[13px] mt-1 px-2">Designed and managed SQL/NoSQL databases, optimizing queries and ensuring data integrity and security.</li>
                <li className="text-[13px] mt-1 px-2">Collaborated with design and product teams to translate UI/UX wireframes into responsive and user-friendly interfaces.</li> 


            <ul className="text-[20px] mt-10">Junior Web Developer</ul>
            <ul className="text-[15px] mt-1">Responsibilities & Key Contributions:</ul>
                <li className="text-[13px] mt-1 px-2">Assisted senior developers in building new features and functionalities using HTML5, CSS3, and JavaScript (ES6+).</li>
                <li className="text-[13px] mt-1 px-2">Fixed bugs and performed application maintenance, improving overall site performance and reliability.</li>
                <li className="text-[13px] mt-1 px-2">Contributed to the development of responsive designs, ensuring cross-browser compatibility across various devices.</li>  
            </h1>   
    </div>       
    );
}


export default Experience;
