import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hackathons from "./components/Hackathons";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

  if (currentPath === "/privacy-policy") {
    return <PrivacyPolicy />;
  }

  return (
    <div className="min-h-screen w-full bg-[#F0E4B8]">
      <Navbar />

      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;