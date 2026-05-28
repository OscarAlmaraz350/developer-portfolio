import { useState } from "react";

const projects = [
  {
    title: "Art Portfolio",
    description:
      "A responsive gallery built to showcase digital artwork, featuring a grid layout, modal preview and clean visual structure.",
    stack: ["CSS", "TypeScript", "JavaScript", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Developer Portfolio",
    description:
      "A minimal frontend portfolio focused on responsive layouts, component structure, dark UI and clean interaction design.",
    stack: ["React", "TypeScript", "CSS", "GitHub Pages"],
    liveUrl: "https://oscaralmaraz350.github.io/developer-portfolio/",
    githubUrl: "https://github.com/OscarAlmaraz350/developer-portfolio",
  },
  {
    title: "Loading next project",
    description:
      "Currently building new frontend experiments focused on interfaces, accessibility and responsive web experiences.",
    stack: ["In Progress"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  function handleProjectClick(title: string) {
    setActiveProject((currentProject) =>
      currentProject === title ? null : title,
    );
  }

  return (
    <section id="projects">
      <div className="container projects">
        <div className="projects-header">
          <p className="section-label">Projects</p>
          <h2>Selected work built with frontend fundamentals.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={
                activeProject === project.title
                  ? "project-card is-active"
                  : "project-card"
              }
              key={project.title}
              onClick={() => handleProjectClick(project.title)}
            >
              <div className="project-thumbnail">
                <div className="project-mockup" aria-hidden="true">
                  <div className="mockup-line mockup-line-large"></div>
                  <div className="mockup-line"></div>

                  <div className="mockup-grid">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>

                <span>
                  {" "}
                  {project.title}
                  {project.title === "Loading next project" && (
                    <span className="blinking-cursor">_</span>
                  )}
                </span>

                <div className="project-overlay">
                  <p>{project.description}</p>

                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.liveUrl}>Live</a>
                    <a href={project.githubUrl}>GitHub</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
