import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Projects from '../assets/Projects';
import './portfolioPage.css';

export default function PortfolioPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const BASE = import.meta.env.BASE_URL;

  const project = useMemo(
    () => Projects.find((p) => String(p.id) === String(id)),
    [id]
  );

  const images = useMemo(() => {
    if (!project) return [];
    const list =
      Array.isArray(project.images) && project.images.length > 0
        ? project.images
        : project.image
          ? [project.image]
          : [];
    return list;
  }, [project]);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = () => {
    setLightboxIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const showNext = () => {
    setLightboxIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    function onKeyDown(e) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);

  }, [lightboxIndex, images.length]);

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

  const hasLinks =
    project.links?.website ||
    project.links?.github ||
    project.links?.figma;

  const hasPdfs = Array.isArray(project.pdfs) && project.pdfs.length > 0;

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

          {hasLinks && (
            <div className="project-links" aria-label="Lenker">
              {project.links?.website && (
                <a className="link-btn" href={project.links.website} target="_blank" rel="noreferrer">
                  Besøk nettsiden
                </a>
              )}
              {project.links?.github && (
                <a className="link-btn" href={project.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {project.links?.figma && (
                <a className="link-btn" href={project.links.figma} target="_blank" rel="noreferrer">
                  Se Figma
                </a>
              )}
            </div>
          )}
        </header>

        {images.length > 0 && (
          <section className="gallery" aria-label="Bilder">
            {images.map((src, idx) => (
              <figure key={`${src}-${idx}`} className="gallery-item">
                <button
                  type="button"
                  className="gallery-button"
                  onClick={() => openLightbox(idx)}
                  aria-label={`Åpne bilde ${idx + 1}`}
                >
                  <img src={src} alt={`${project.title} – bilde ${idx + 1}`} loading="lazy" />
                </button>
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
            {Array.isArray(project.longDescription)
              ? project.longDescription.map((p, i) => <p key={i}>{p}</p>)
              : <p>{project.longDescription}</p>
            }
          </section>
        )}

        {hasPdfs && (
          <section className="content">
            <h2>Dokumenter</h2>
            <div className="project-links" aria-label="PDF-dokumenter">
              {project.pdfs.map((pdf) => (
                <a
                  key={pdf.file || pdf.path}
                  className="link-btn"
                  href={pdf.file ? `${BASE}pdf/${pdf.file}` : pdf.path}
                  target="_blank"
                  rel="noreferrer"
                >
                  {pdf.label || 'Åpne PDF'}
                </a>
              ))}
            </div>
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

      {lightboxIndex !== null && images[lightboxIndex] && (
        <div className="lightbox" role="dialog" aria-modal="true" onMouseDown={closeLightbox}>
          <div className="lightbox-inner" onMouseDown={(e) => e.stopPropagation()}>
            <img className="lightbox-img" src={images[lightboxIndex]} alt="" />

            {images.length > 1 && (
              <>
                <button className="lightbox-prev" type="button" onClick={showPrev} aria-label="Forrige bilde">
                  ‹
                </button>
                <button className="lightbox-next" type="button" onClick={showNext} aria-label="Neste bilde">
                  ›
                </button>
              </>
            )}

            <button className="lightbox-close" type="button" onClick={closeLightbox} aria-label="Lukk">
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}




