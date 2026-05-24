const skillGroups = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
  {
    title: 'Creative',
    skills: ['UI Design', 'Digital Art', 'Music Production'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <p className="section-label">Skills</p>
        <h2>Tools and skills I use to build web experiences.</h2>
      </div>

      <div className="skills-list">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-items">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills