'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Experience = () => {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16 mt-20 " id="experience">
            <img className="w-[370px] h-[370px]" src=".\assets\3779552.jpg" alt="pic"></img>
            <h1 className="text-transparent text-4xl font-bold mb-4 bg-clip-text bg-gradient-to-l from-slate-600 to-slate-300">
                Professional Experience
                <ul className="text-[20px] mt-2">Sales Operation PT. Nutrifood Indonesia (2010 - 2025)</ul>
                <ul className="text-[15px] mt-1">Responsibilities & Key Contributions:</ul>
                <li className="text-[13px] mt-1 px-2">Streamlined internal sales processes to improve operational efficiency and team productivity.</li>
                <li className="text-[13px] mt-1 px-2">Collaborated with cross-functional teams to identify bottlenecks in the sales funnel and implemented systemic solutions.</li>
                <li className="text-[13px] mt-1 px-2">Managed complex datasets and generated daily reports to support data-driven decision-making for the management team.</li>


                <ul className="text-[20px] mt-10">Web Developer</ul>
                <ul className="text-[15px] mt-1">Responsibilities & Key Contributions:</ul>
                <li className="text-[13px] mt-1 px-2">Built responsive and interactive user interfaces with React.js and Tailwind CSS, improving user engagement metrics..</li>
                <li className="text-[13px] mt-1 px-2">Designed and implemented robust RESTful APIs and database schemas using Node.js and PostgreSQL/MongoDB.</li>
                <li className="text-[13px] mt-1 px-2">Optimized application performance and ensured cross-browser compatibility and mobile responsiveness.</li>
            </h1>
        </div>
    );
}


export default Experience;
