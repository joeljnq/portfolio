import React from "react";
import Code from "../icons/Code";
import thePerfectSpot from "../assets/images/the-perfect-spot.png";
import countries from '../assets/images/countries.png'
import fakeStore from '../assets/images/fakeStore2.png'
import url from '../assets/images/url.png'
import MaterialUI from "../icons/MaterialUI";
import TypeScript from "../icons/TypeScript";
import Tailwind from "../icons/Tailwind";
import ReactIcon from "../icons/ReactIcon";
import Css from "../icons/Css";
import GitHub from "../icons/GitHub";
import Link from "../icons/Link";
import Expressjs from "../icons/Express";
import MongoDB from "../icons/Mongodb";
import Storybook from "../icons/StoryBook";
const Projects: React.FC = () => {
  const TAGS = [
    {
      name: "React",
      icon: <ReactIcon />,
    },
    {
      name: "TypeScript",
      icon: <TypeScript />,
    },
    {
      name: "TailwindCSS",
      icon: <Tailwind />,
    },
    {
      name: "MaterialUI",
      icon: <MaterialUI />,
    },
    {
      name: "CSS",
      icon: <Css />,
    },
    {
      name:'storyBook',
      
    },
    {
      name:'Express',
      icon:<Expressjs />
    },
    {
      name:'MongoDB',
      icon:<MongoDB />
    },
    {
      name:'StoryBook',
      icon:<Storybook />
    }
  ];
  const PROJECTS = [
    {
      title: "The Perfect Spot",
      description:
        "Calcula a que distancia queda un piso desde una serie de puntos de interés(trabajo, casa , hobbies) , la apliación te permite evaluar donde es mejor vivir.",
      link: "https://labs.geomatico.es/the-perfect-spot/#/es/map",
      github: "https://github.com/geomatico/the-perfect-spot",
      image: thePerfectSpot,
      tags: ["React", "MaterialUI"],
    },
    {
      title: "Fake Store",
      description:
        "e-commerce que consume una api de productos y permite añadirlos al carrito, ver detalles y realizar la compra.",
      link: "https://warm-caramel-dd317c.netlify.app/",
      github: "https://github.com/joeljnq/fake-store",
      image: fakeStore,
      tags: ["React", "TypeScript", "CSS"],
    },
    {
      title: "Countries",
      description:
        "Este proyecto consume la API de countries para mostrar información principal de cada país, el proyecto ofrece una interfaz clara y sencilla donde los usuarios pueden explorar datos esenciales de distintos países.",
      link: "https://joeljnq.github.io/countries",
      github: "https://github.com/joeljnq/countries",
      image: countries,
      tags: ["React", "TypeScript", ],
    },
    {
      title: 'urlShortener',
      description:'Proyecto que consume una api creada por expresss y almacenada en mongoDB, la aplicación permite acortar urls y redirigir a la url original (mvp)',
      link:'https://url-shortener-cyan-seven.vercel.app/',
      github:'https://github.com/joeljnq/Url-Shortener',
      image: url,
      tags: ['React','TypeScript','TailwindCSS','Express','MongoDB']
    }
  ];
  return (
    <section
      id="projects"
      className="container py-16 w-full  mx-auto lg:max-w-4xl md:max-w-2xl"
    >
      <h2 className="flex items-center mb-3 gap-x-3 text-3xl">
        <Code /> Proyectos
      </h2>
      <div className="flex-col lg:grid lg:grid-cols-2 gap-4">
        {PROJECTS.map((project, index) => {
          return (
            <article key={index} className="max-w-sm">
              <a href={project.link} target="_blank" >
                <img
                  className="hover:scale-110 transition w-full h-64 object-cover  p-2"
                  src={project.image}
                  alt={project.title}
                />
              </a>

              <h3 className="mt-2 dark:text-yellow-200 text-black text-xl">{project.title}</h3>
              <div className="mt-3 flex gap-5 mb-3 ">
                {project.tags.map((tag) => {
                  const tagData = TAGS.find((t) => t.name === tag);
                  return (
                    <span key={tag} className="flex gap-x-1">
                      {tagData?.icon}
                    </span>
                  );
                })}
              </div>
              <p className="text-pretty text-lg dark:text-gray-400 h-36">
                {project.description}
              </p>

              <div className="mt-4 flex gap-5">
               
                <a href={project.github}  target="_blank" className="flex cursor-pointer rounded-xl px-2 py-2 dark:bg-gray-700/90 bg-gray-100 items-center" > <GitHub />Código </a>
                <a href={project.link}target="_blank" className="flex cursor-pointer rounded-xl px-2 py-2 dark:bg-gray-700/90 bg-gray-100 items-center"> <Link />Demo </a>
            
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
