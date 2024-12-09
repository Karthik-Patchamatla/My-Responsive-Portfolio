import React from 'react';
import profileImg from '../assets/profile-img.png';

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between lg:mx-40 px-4 md:px-8 lg:px-16 py-6"
    >
      {/* Text Section */}
      <div className="w-full py-3 md:w-1/2 space-y-4 sm:space-y-6 md:text-left">
        <h2 className="text-2xl md:text-3xl font-medium">Hello, I'm</h2>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Karthik Patchamatla
        </h1>
        <p className="md:text-lg leading-relaxed text-white">
          Eager to apply my technical expertise and in-depth product
          understanding to drive impactful contributions and exceed
          expectations in challenging projects. Thanks for taking the time to
          learn a little about me!
        </p>
        <a
          href="#about"
          className="inline-block px-5 py-2 bg-[#7562e0] rounded text-white font-semibold hover:bg-white hover:text-[#7562e0] transition duration-300"
        >
          About Me
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-start md:justify-end sm:mt-4">
        <img
          className="rounded-full h-48 md:h-72 lg:h-96 object-cover"
          src={profileImg}
          alt="profile"
        />
      </div>
    </section>
  );
};

export default Home;
