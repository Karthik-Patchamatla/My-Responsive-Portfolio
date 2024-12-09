import React from 'react';
import skills from '../data/skills';

const About = () => {
  return (
    <section id="about" className="lg:mx-40 px-4 md:px-8 lg:px-16 py-6 md:py-10">
      <h1 className="text-3xl font-bold text-[#7562e0] mb-6">About Me</h1>
      <p className="text-lg mb-8">
        Hi, my name is Karthik Varma Patchamatla. Seeking an opportunity with an esteemed organisation where I can utilise my 
        skills and enhance learning in the field of work. I am familiar with:
      </p>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img className="size-24 sm:size-20 rounded-xl hover:scale-110" src={skill.image} alt={skill.name} />
            <h3 className="text-lg sm:text-sm font-bold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
