import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </>
  );
}

export default App;
