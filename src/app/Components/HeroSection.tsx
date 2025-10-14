'use client';

import React from "react"
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm-text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-300">Hello, i am Edo</span>
                        <p>{" "}</p>
                        <span className="lg:text-[48px] sm:text-[25px]">
                        <TypeAnimation
                        sequence={[  
                            'Full-Stack Developer',
                            1000,
                            'Software Engineer',
                            1000,
                            'Mobile Engineer',
                            1000
                        ]}
                        wrapper="span"
                        speed={15}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                        />
                        </span>
                        <br></br>
                    </h1>
                    <p className="text-[#ADB7BE] sm:text-lg mb-6 lg:text-2xl text-base">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-300">Building scalable and high-performance web solutions for your business needs</span>
                    </p>
                    <div>
                        <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-slate-600 via-slate-400 to-slate-300 hover:bg-slate-200 text-black">Contact Me</button>
                        <button className="px-6 py-3 rounded-full bg-gradient-to-br from-slate-600 via-slate-400 to-slate-300 hover:bg-slate-800 text-black border border-white mt-3">Portofolio</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[350px] relative">
                        <img src="./test.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;