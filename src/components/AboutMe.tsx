import React from "react";
import User from "../icons/User";
import me  from '../assets/images/me4.png'
const AboutMe: React.FC = () => {
  return (
    <section id="aboutMe" className="mx-auto lg:max-w-4xl mt-10  ">
      <h2 className="flex items-center m-0 p-0 text-3xl gap-3">
  
        <User /> Sobre mi
      </h2>
      <div className="flex flex-col-reverse mt-4 lg:flex-row">
        <div>
          <p className="text-xl dark:text-gray-200 mb-4 text-pretty">
            Hola soy Joel Ninahuaman , Soy un desarrollador web que
            descubrió su pasión por el desarrollo durante el Ciclo Medio de SMR.</p>

            <p className="text-xl dark:text-gray-200  text-pretty">Este interés  me llevó a cursar el <span className="dark:text-yellow-200 text-blue-700/90 text-xl">Ciclo Superior en Desarrollo de
            Aplicaciones Web </span>, donde he adquirido conocimientos solidos en  <span className="dark:text-yellow-200 text-blue-700/90 text-xl">base de datos,
            metodologías ágiles, y diversos lenguajes de lenguajes de programacion y tecnologías.</span>
          </p>
        </div>
        <img src={me} className="w-5/6 lg:w-2/6 m-auto bg-gradient-to-bl"></img>
      </div>
    </section>
  );
};

export default AboutMe;
