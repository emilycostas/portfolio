import { useParams, useNavigate } from 'react-router-dom';
import Projects from '../assets/Projects';
import './portfolioPage.css';


function PortfolioPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = uxProjects.find((p) => p.id === id);

  if (!project) return <p>Prosjekt ikke funnet</p>;

  return (
    <div className="project-detail">
      <button onClick={() => navigate(-1)}>← Tilbake</button>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>

      {/* Her kan du legge til flere bilder, wireframes osv. */}
    </div>
  );
}

export default PortfolioPage;
