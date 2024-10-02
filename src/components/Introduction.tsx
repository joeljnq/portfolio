import React from "react";
import me from '../assets/images/me2.png'
import LinkedIn from "../icons/LinkedIn";
import GitHub from "../icons/GitHub";
const Introduction: React.FC = () => {
  return (
    <section id="introduction" className=" py-16 md:py-36 w-full mx-auto lg:max-w-4xl md:max-w-2xl">
      <img
        src={me}
        alt="personal-image"
        className="rounded-full w-16 mb-5 bg-yellow-700/90"
      ></img>
      <h1 className="text-4xl font-bold">Hey, soy Joel</h1>
      <h2 className="text-xl mt-5">
        <span className="dark:text-yellow-200/90 text-blue-700/90 text-xl"> Desarrollador Web </span>.
        De vigo, España. Apasionado por la creación de aplicaciones web
        interactivas y eficientes
      </h2>

      <div className="mt-3">
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
           <a href="https://www.linkedin.com/in/joeljnq/" target="_blank" className="flex"><LinkedIn /> LinkedIn</a> 
        </button>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
           <a href="https://github.com/joeljnq" target="_blank" className="flex"><GitHub /> GitHub</a> 
        </button>
      </div>
    </section>
  );
};

export default Introduction;
