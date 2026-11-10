import './Skills.css';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
  },
  {
    title: 'Backend & Database',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'JWT authentication'],
  },
  {
    title: 'Tools & Deployment',
    skills: ['Git', 'GitHub', 'Netlify', 'Render', 'Neon'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <ul className="tag-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}