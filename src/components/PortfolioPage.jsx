import { useParams, useNavigate } from 'react-router-dom';
import Projects from '../assets/Projects';
import './portfolioPage.css';

function PortfolioPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = Projects.find((p) => p.id === id);

  if (!project) return (
    <div className="project-detail">
      <button className="back" onClick={() => navigate(-1)}>← Tilbake</button>
      <h1>Prosjekt ikke funnet</h1>
    </div>
  );

  return (
    <div className="project-detail">
      <button className="back" onClick={() => navigate(-1)}>← Tilbake</button>
      <h1>{project.title}</h1>
      <img className="hero" src={project.image} alt={project.title} />
      <p className="lead">{project.description}</p>
    </div>
  );
}

export default PortfolioPage;

