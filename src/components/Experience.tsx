import React from "react";
import Briefcase from "../icons/Briefcase";
const Experience: React.FC = () => {
  const experience = [
    {
      title: "Desarrollador Web Frontend",
      company: "Geomatico",
      date: "04-2024 - 06-2024",
      description:
        "Desarrollo de aplicaciones web con capacidades GIS, creando mapas interactivos y aplicaciones web para la gestión de datos geoespaciales. ",
    },
  ];

  return (
    <section
      id="experience"
      className="container w-full mx-auto lg:max-w-4xl md:max-w-2xl "
    >
      <h2 className=" flex items-center mb-6 text-3xl gap-x-3 font-semibold">
        <Briefcase />
        Experiencia laboral
      </h2>
      <ol className="ml-4 relative mt-8 border-s border-gray-200 dark:border-gray-700">
        {experience.map((exp, index) => {
          return (
            <div key={index} className="flex w-full flex-col lg:flex-row">
              <div className=" absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-white dark:bg-white z-10"></div>
              <li className="mb-10 ms-4 list-none">
                <h3 className="text-lg font-semibold text-blue-700/80 dark:text-yellow-200">
                  {exp.title}
                </h3>
                <h3 className="text-lg font-semibold dark:text-gray-400 text-gray-800/90">
                  {exp.company}
                </h3>

                <time className=" mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {exp.date}
                </time>
              </li>
              <p className="w-1/2 mb-4 ml-4 text-base font-normal dark:text-gray-400">
                {exp.description}
              </p>
            </div>
          );
        })}
      </ol>
    </section>
  );
};

export default Experience;
