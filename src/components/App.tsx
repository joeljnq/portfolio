import React from "react";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import Experience from "./Experience";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
const App: React.FC = () => {
  return (
    <>
      <div className="w-full inset-0  h-full -z-10 absolute bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]  dark:bg-gray-900 dark:bg-none"></div>
      
      <header className="fixed w-full z-50">
        <Navbar />
      </header>
      <main className="px-4 ">
        <Introduction />
        <Experience />
        <Projects />
        <AboutMe />
      </main>
      <footer className="mt-4 bg-transparent  rounded-lg shadow m-4 backdrop-blur-lg mx-auto lg:max-w-4xl md:w-2xl p-0">
        <Footer />
      </footer>
    </>
  );
};

export default App;
