import React from 'react';
import projects from '../data/project';

const Projects = () => {
  return (
    <section id="projects" className="lg:mx-40 my-10 py-4 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-[#7562e0] mb-6">Featured Projects</h1>
      <p className="text-lg mb-8">
        I have worked on many projects over the course of being a Web Developer. Here are some highlights:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#31313f] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            {/* Image Section */}
            <div className="flex justify-center items-center mb-6">
              <img
                className="h-60 w-full object-fill rounded-lg p-2"
                src={project.image}
                alt={project.title}
              />
            </div>

            {/* Title Section */}
            <h2 className="text-xl font-semibold text-center text-[#a29bfe] mb-2">
              {project.title}
            </h2>

            {/* Description Section */}
            <p className="text-sm text-gray-300 text-start mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Button Section */}
            <div className="mt-auto flex justify-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-[#7562e0] text-white font-medium rounded-lg hover:bg-white hover:text-[#7562e0] transition duration-300"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
