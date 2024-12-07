import { useState } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#030014] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo o nombre */}
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold ml-[10px] text-gray-300">Andres Sosa</span>
        </a>

        {/* Menú para pantallas grandes */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">About me</a>
            <a href="#Background" className="cursor-pointer">Background</a>
            <a href="#skills" className="cursor-pointer">Skills</a>
            <a href="#projects" className="cursor-pointer">Projects</a>
          </div>
        </div>

        {/* Iconos de LinkedIn y GitHub solo visibles en pantallas grandes */}
        <div className="hidden md:flex flex-row gap-5">
          <a href="https://www.linkedin.com/in/andres-felipe-sosa-yepes-13670220a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="text-gray-300 hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://github.com/Andrewsy1004" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="text-gray-300 hover:text-white transition-colors" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=andres.sy1004@gmail.com&su=I'd%20Like%20to%20Know%20More%20About%20You" target="_blank" className="text-gray-300 hover:text-red-500 transition-colors">
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Icono de hamburguesa para pantallas pequeñas */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isOpen && (
        <nav className="md:hidden fixed  right-0  bg-[#030014] text-white w-[250px] shadow-lg transform transition-all ease-in-out duration-300">
          <div className="flex flex-col items-start p-4 space-y-4">
            <a href="#about-me" onClick={toggleMenu} className="block hover:text-gray-300 transition duration-300">
              About me
            </a>
            <a href="#Background" onClick={toggleMenu} className="block hover:text-gray-300 transition duration-300">
              Background
            </a>
            <a href="#skills" onClick={toggleMenu} className="block hover:text-gray-300 transition duration-300">
              Skills
            </a>
            <a href="#projects" onClick={toggleMenu} className="block hover:text-gray-300 transition duration-300">
              Projects
            </a>
          </div>
        </nav>
      )}
    </div>
  );
};
