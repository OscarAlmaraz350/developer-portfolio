import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import PageControls from "./components/PageControls";
import RevealOnScroll from "./components/RevealOnScroll";

function App() {
  return (
    <>
      <Hero />

      <Navbar />

      <main>
        <RevealOnScroll>
          <About />
        </RevealOnScroll>

        <RevealOnScroll>
          <Skills />
        </RevealOnScroll>

        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>
      </main>

      <Footer />
      <PageControls />
    </>
  );
}

export default App;
