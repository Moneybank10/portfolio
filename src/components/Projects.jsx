import './Projects.css';

const projects = [
  {
    title: 'Clinic Booking System',
    description:
      'A full-stack appointment booking app for a clinic. Patients book and cancel slots, and staff manage the schedule. Double-booking is prevented at the database level, with JWT authentication and role-based access.',
    note: 'The demo server sleeps when idle, so the first load can take about a minute.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
    live: 'https://clinic-booking1-app.netlify.app',
    github: 'https://github.com/Moneybank10/clinic-booking',
  },
  {
    title: 'Solar System Exploration',
    description:
      'A React group capstone project for exploring the solar system. This is a team project where I was the Team lead. I was in charge of the repository, did the Table section, App integration and Deployment.',
    tags: ['React', 'JavaScript', 'Rest APIs'],
    live: 'https://group-11-capstone.netlify.app',
    github: 'https://github.com/Moneybank10/Group-11-Capstone-project',
  },
  {
    title: 'Neyo Stitches',
    description: 'A landing page for Neyo Stitches. Just a quick page for descriptions and browsing with client preferred choice of colors.',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    live: 'https://neyostitches.netlify.app',
    github: 'https://github.com/Moneybank10/neyo-stitches',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={project.title} className="project-card">
              <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.note && <p className="project-note">{project.note}</p>}

              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <div className="project-links">
                <a
                  className="btn btn-primary btn-sm"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo
                </a>
                <a
                  className="btn btn-outline btn-sm"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}