import { Link } from 'react-router-dom';
import Projects from '../assets/Projects';
import './portfolio.css';

export default function Portfolio() {
  return (
    <main className="page">
      <section className="project-list">
        <h1>Portefølje</h1>

        <div className="project-grid" role="list">
          {Projects.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="project-card"
              role="listitem"
              aria-label={`Åpne prosjekt: ${project.title}`}
            >
              <div className="project-text">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>

              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>

              {Array.isArray(project.tech) && project.tech.length > 0 && (
                <ul className="tech-list" aria-label="Teknologier">
                  {project.tech.map((t) => (
                    <li key={t} className="tech-pill">{t}</li>
                  ))}
                </ul>
              )}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}




