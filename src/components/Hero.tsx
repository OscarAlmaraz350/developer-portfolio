function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <nav className="hero-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>

        <div className="hero-content">
          <div className="hero-main">
            <p className="hero-label">Frontend Developer</p>
            <h1>Oscar Almaraz</h1>
            <p className="hero-description">
              I build responsive web experiences with a creative visual approach.
            </p>
          </div>

          <aside className="hero-profile">
            <div className="hero-photo">Photo</div>

            <p>
              Frontend developer focused on clean interfaces, responsive layouts,
              and creative digital projects.
            </p>

            <div className="hero-links">
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
              <a href="#">Email</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Hero