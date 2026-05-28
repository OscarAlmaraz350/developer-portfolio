function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <nav className="hero-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>

        <div className="hero-content">
          <div className="hero-main">
            <h1>Oscar Almaraz</h1>

            <p className="hero-description">
              Building clean, responsive web interfaces with a strong focus on
              structure, usability and visual detail.
            </p>
          </div>

          <aside className="hero-profile">
            <div className="hero-photo">Photo</div>

            <p>
              Frontend developer with a creative background in digital art,
              design and music. Currently focused on React, TypeScript and
              responsive web experiences.
            </p>

            <div className="hero-links">
              <a
                href="https://github.com/OscarAlmaraz350"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a href="https://www.linkedin.com/in/oscar-zainos-almaraz-52649a15a/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>

              <a href="mailto:oscar.zainos@gmail.com">Email</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Hero;
