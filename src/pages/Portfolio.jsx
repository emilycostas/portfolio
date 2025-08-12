import { Link } from 'react-router-dom';
import Projects from '../assets/Projects';
import './portfolio.css';

function Portfolio() {
  return (
    <section className="project-list">
      <h1>Portefølje</h1>
      {Projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-text">
            <h2>
              <Link to={`/ux/${project.id}`}>{project.title}</Link>
            </h2>
            <p>{project.description}</p>
          </div>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>

      ))}
    </section>
  );
}

export default Portfolio;


