'use client';

import React, { useTransition, useState } from "react";


const AboutMe = () => {
 return (
  <section className="text-white mt-20" id="aboutme">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
      <img className="w-[400px] h-[350px] sm:mb-3" src=".\about-image.png" alt="aboutme"/>
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">
          About Me
        </h2>
        <p className="text-base md:text-lg">I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
        </p>
        <div>
        
        </div>
    
      </div>
    </div>
  </section>
 );
}


export default AboutMe;