import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProjectsSection from "./components/ProjectSection";
import EducationSection from "./components/Education";
import AboutSection from "./components/About";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div>
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section id="home" className="py-20">
          <AboutSection />
        </section>

        {/* <section id="experience"> */}
          {/* <h1 className="font-bold">Experience</h1> */}
          {/* <ExperienceSection /> */}
        {/* </section> */}

        <section id ="projects">
          <h1 className="font-bold">Projects</h1>
          <ProjectsSection />
        </section>

        <section id = "education" >
          <h1 className="font-bold">Education</h1>
          <EducationSection />
        </section>

        <section id="skills" className="">
          <h1 className="font-bold">Skills</h1>
          <SkillsSection />
        </section>
      </main>
    </div>
  );
}

export default App
