import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#F0E4B8]">
      <Navbar />

      <main className="w-full">
        <Hero />

        <About />

        <Skills />

        <section
          id="projects"
          className="min-h-screen w-full bg-[#F0E4B8]"
        />

        <section
          id="hackathons"
          className="min-h-screen w-full bg-[#F0E4B8]"
        />

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