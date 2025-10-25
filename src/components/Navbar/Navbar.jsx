import { useState } from "react";
import {  FaBars, FaTimes } from "react-icons/fa";
import logo from '../../../public/logo/logo1.png'
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "About", link: "#about" },
    { name: "Github Activity", link: "#githubActivity" },
    { name: "Skills", link: "#skills" },
    { name: "Tech Stack", link: "#techStack" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Certifications", link: "#certifications" },
    { name: "Contact", link: "#contact" },

     ];

  return (
    <nav className="px-10 md:px-20 lg:px-44 fixed top-0 left-0 w-full z-50 bg-[#141334]  py-5">
      {/* Full width navbar */}
      <div className="w-full flex items-center justify-between h-16">
        {/* Logo */}
        <div data-aos="flip-left" 
     data-aos-duration="3000" data-aos-once="false">
     <a href="#about" >
      <img className="w-15 md:w-20 h-15  md:h-20 rounded-full border-2 border-cyan-900 shadow-2xl  shadow-cyan-600 hover:w-18 md:hover:w-25 hover:h-18 md:hover:h-25 " src={logo} alt="" />
     </a>
     </div>
         <a
          href="#home"
          className="text-white font-semibold text-lg hover:text-indigo-400 transition"
        >
          Mokarama<span className="text-indigo-400"> / Shanta</span>
        </a>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {
          menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.link} className="hover:text-indigo-400">
                {item.name}
              </a>
            </li>
          ))
          }
        </ul>


        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 text-2xl focus:outline-none"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-gray-800 py-4">
          <ul className="flex flex-col space-y-4 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="hover:text-indigo-400"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
           
          </ul>
        </div>
      )}
    </nav>
  );
}
