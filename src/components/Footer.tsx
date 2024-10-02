import React from "react";
import { Link } from "react-scroll";
const Footer: React.FC = () => {
 
  return (
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <a
          href="https://github.com/joeljnq"
          className="hover:underline"
          target="_blank"
        >
          joeljnq
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center gap-3 mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li className="cursor-pointer">
          <Link to="aboutMe" smooth={true} duration={500}>
            sobre mi
          </Link>
        </li>
        <li
          className="cursor-pointer hover:text-blue-400"
        >
          <a href='mailto:joelnqwork@gmail.com'>Contacto</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
