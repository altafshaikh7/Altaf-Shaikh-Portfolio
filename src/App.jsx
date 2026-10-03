import { useState } from "react";

import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hackathons from "./components/Hackathons";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen w-full bg-[#F0E4B8]">
      {showIntro && (
        <Intro onComplete={() => setShowIntro(false)} />
      )}

      <div
        className={`transition-opacity duration-700 ${
          showIntro ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />

        <main className="w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Hackathons />

          <section
            id="certificates"
            className="min-h-screen w-full bg-[#F0E4B8]"
          />

          <section
            id="contact"
            className="min-h-screen w-full bg-[#F0E4B8]"
          />
        </main>
      </div>
    </div>
  );
}

export default App;