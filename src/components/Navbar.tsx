import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
const Navbar: React.FC = () => {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`dark:bg-gray-800 ${isTop ? 'bg-transparent dark:bg-transparent' : 'bg-[#E5D9F2]'} rounded-3xl px-2 py-2 lg:w-1/3 w-full mx-auto`}>
      <ul className="flex justify-between gap-5 w-full mx-auto opacity-70">
        <li  className="cursor-pointer dark:hover:text-blue-400  hover:text-[#5d3ff1]"><Link to="introduction" smooth={true} duration={500}> Introduction</Link></li> 
        <li className="cursor-pointer dark:hover:text-blue-400 hover:text-[#5d3ff1]" ><Link to="experience" smooth={true} duration={500}>experiencia</Link></li>
        <li className="cursor-pointer dark:hover:text-blue-400 hover:text-[#5d3ff1]"><Link to="aboutMe" smooth={true} duration={500}>sobre mi </Link></li>
        <li className="cursor-pointer dark:hover:text-blue-400 hover:text-[#5d3ff1]"><Link to="projects" smooth={true} duration={500}>proyectos</Link></li>
        <li className="cursor-pointer dark:hover:text-blue-400 hover:text-[#5d3ff1]"><a href='mailto:joelnqwork@gmail.com'> Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
