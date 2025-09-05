import './about.css';
import Emily_portfolio from '../assets/Emily_portfolio.jpg';

export default function About() {
  return (
    <section className="about">
      <h1>Om meg</h1>

      <div className="about-grid">
        <div className="about-text">
          <p>
            Hei! Jeg heter Emily og er en frontend-utvikler med fokus på
            <strong> design</strong>, <strong>brukervennlighet</strong> og
            moderne webteknologier. Jeg brenner for universell utforming
            og løsninger som faktisk hjelper folk.
          </p>
          <p>
            Jeg har nylig fullført en bachelor i Informasjonssystemer med
            fordypning i datasikkerhet og web. På fritiden liker jeg å utforske
            typografi, mikrosamspill og designsystemer – og jeg trives best i
            krysningspunktet mellom <em>UI/UX</em> og kode.
          </p>
          <p>
            Under finner du noen bilder fra prosjekter og arbeidshverdagen min.
            Ta gjerne kontakt hvis du vil samarbeide!
          </p>
        </div>

        <aside className="about-aside">
          <div className="about-images">
            <figure>
              <img src={Emily_portfolio} alt="Emily" className="hero-image" />
              <figcaption className="about-caption">Skisser & prototyper</figcaption>
            </figure>
          </div>
        </aside>
      </div>
    </section>
  );
}

