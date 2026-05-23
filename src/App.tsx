import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />

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
