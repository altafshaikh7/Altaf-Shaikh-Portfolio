import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hackathons from "./components/Hackathons";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#F0E4B8]">
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
  );
}

export default App;