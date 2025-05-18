import React from 'react';
import contactIcons from '../data/contactIcons';

const Contact = () => {
  return (
    <section
      id="contact"
      className="lg:mx-40 py-10 px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 text-white"
    >
      {/* Left Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#7562e0]">Connect with me:</h2>
        <p className="text-xl font-bold">karthik.patchamatla@gmail.com</p>

        {/* Social Media Section */}
        <div>
          <p className="text-lg mb-4">Social Media</p>
          <div className="flex space-x-6">
            {contactIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-12 w-12"
                  src={icon.image}
                  alt={icon.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div>
        <h2 className="sm:text-2xl text-lg mb-6">Contact me, let's make magic together</h2>
        <form className="space-y-4">
          <div>
            <input
              id="name"
              className="sm:w-[62%] w-[82%] p-3 rounded bg-[#30303e] text-white outline-none focus:ring-2 focus:ring-purple-400"
              type="text"
              placeholder="Name:"
            />
          </div>
          <div>
            <input
              id="email"
              className="sm:w-[62%] w-[82%] p-3 rounded bg-[#30303e] text-white outline-none focus:ring-2 focus:ring-purple-400"
              type="email"
              placeholder="Email:"
            />
          </div>
          <div>
            <textarea
              id="message"
              className="sm:w-[62%] w-[82%] p-3 rounded bg-[#30303e] text-white outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Message:"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="sm:w-[21%] w-[42%] py-3 bg-[#7562e0] text-white hover:text-[#7562e0] hover:bg-white rounded transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
