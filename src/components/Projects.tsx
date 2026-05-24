import { useState } from 'react'

const projects = [
  {
    title: 'Art Portfolio',
    description:
      'Responsive portfolio for showcasing digital artwork with grid layout and modal preview.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Frontend Project',
    description:
      'A clean responsive web project focused on layout, structure and usability.',
    stack: ['React', 'TypeScript', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Web Content Project',
    description:
      'A structured web page concept focused on content organization and responsive design.',
    stack: ['HTML', 'CSS', 'Figma'],
    liveUrl: '#',
    githubUrl: '#',
  },
]

function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null)

  function handleProjectClick(title: string) {
    setActiveProject((currentProject) =>
      currentProject === title ? null : title,
    )
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
                  ? 'project-card is-active'
                  : 'project-card'
              }
              key={project.title}
              onClick={() => handleProjectClick(project.title)}
            >
              <div className="project-thumbnail">
                <span>{project.title}</span>

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
  )
}

export default Projects