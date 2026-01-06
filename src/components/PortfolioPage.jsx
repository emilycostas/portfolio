import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Projects from '../assets/Projects';
import './portfolioPage.css';

export default function PortfolioPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = useMemo(
    () => Projects.find((p) => String(p.id) === String(id)),
    [id]
  );

  if (!project) {
    return (
      <main className="page">
        <section className="project-detail">
          <button className="back" type="button" onClick={() => navigate(-1)}>
            ← Tilbake
          </button>
          <h1>Prosjekt ikke funnet</h1>
          <p>Prosjektet du prøvde å åpne finnes ikke.</p>
        </section>
      </main>
    );
  }

  const images =
    Array.isArray(project.images) && project.images.length > 0
      ? project.images
      : project.image
        ? [project.image]
        : [];

  return (
    <main className="page">
      <article className="project-detail">
        <button className="back" type="button" onClick={() => navigate(-1)}>
          ← Tilbake
        </button>

        <header className="project-header">
          <h1>{project.title}</h1>

          {project.subtitle && <p className="subtitle">{project.subtitle}</p>}

          {Array.isArray(project.tech) && project.tech.length > 0 && (
            <ul className="tech-list" aria-label="Teknologier">
              {project.tech.map((t) => (
                <li key={t} className="tech-pill">{t}</li>
              ))}
            </ul>
          )}

          {(project.links?.live || project.links?.github || project.links?.figma) && (
            <div className="project-links" aria-label="Lenker">
              {project.links?.live && (
                <a className="link-btn" href={project.links.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
              {project.links?.github && (
                <a className="link-btn" href={project.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {project.links?.figma && (
                <a className="link-btn" href={project.links.figma} target="_blank" rel="noreferrer">
                  Figma
                </a>
              )}
            </div>
          )}
        </header>

        {images.length > 0 && (
          <section className="gallery" aria-label="Bilder">
            {images.map((src, idx) => (
              <figure key={`${src}-${idx}`} className="gallery-item">
                <img src={src} alt={`${project.title} – bilde ${idx + 1}`} loading="lazy" />
              </figure>
            ))}
          </section>
        )}

        {project.description && (
          <section className="content">
            <h2>Om prosjektet</h2>
            <p className="lead">{project.description}</p>
          </section>
        )}

        {project.longDescription && (
          <section className="content">
            <h2>Detaljer</h2>
            {/* Tillater at longDescription kan være string eller array av avsnitt */}
            {Array.isArray(project.longDescription)
              ? project.longDescription.map((p, i) => <p key={i}>{p}</p>)
              : <p>{project.longDescription}</p>
            }
          </section>
        )}

        {Array.isArray(project.highlights) && project.highlights.length > 0 && (
          <section className="content">
            <h2>Høydepunkter</h2>
            <ul className="bullets">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </main>
  );
}


