import './about.css';
import Emily_portfolio from '../assets/Emily_portfolio.jpg';
import meg from '../assets/meg.jpg';
import bachelorgruppe from '../assets/bachelorgruppe.jpg';

export default function About() {
  return (
    <section className="about">
      <h1>Om meg</h1>

      <div className="about-grid">
        <div className="about-text">
          <p>
            Hei! Jeg heter Emily Constance og studerer for tiden Master i Applied Computer Science med fordypning i <strong> Interaction Design </strong>.
             Jeg er en strukturert og kreativ person med erfaring innen psykologi, informasjonssystemer og nå interaksjonsdesign. Gjennom studiene og prosjekter har
             jeg jobbet med alt fra konseptutvikling, visuell identitet og UI-design, til planlegging, strukturering og gjennomføring av prosjekter. Et eksempel er at min
             tidligere bachelorgruppe og jeg er i gang med å fullføre appen vi hadde som prosjekt slik at denne faktisk kan tas i bruk av helsepersonell - det står mer om dette på BCAT-prosjektet. 
          </p>
          <p>Jeg har vært innom alle Adobe-programmene gjennom fag og bruker Figma mye i skole og i egne prosjekter. 
             I prosjekter er jeg opptatt av god kommunikasjon og fremdrift, og har i studiet ofte tatt på meg en lederrolle i gruppene jeg har vært i. Jeg liker å jobbe strukturert, 
             men samtidig kreativt. I denne porteføljen finnes en del av prosjektene jeg har jobbet med i skolesammenheng og noe individuelt. I alle prosjekter lagt ved har det vært hovedsakelig jeg som har jobbet med det visuelle.
             Jeg er en kreativ person som liker å jobbe med alt innen design, brukervennlighet og universell utforming. 
          </p>
        </div>

        <aside className="about-aside">
          <div className="about-images">
            <figure>
              <img src={Emily_portfolio} alt="Emily" className="hero-image" />
              <img src={bachelorgruppe} alt="Bachelorgruppe" className="hero-image secondary" />
              <figcaption className="about-caption"></figcaption>
            </figure>
          </div>
        </aside>
      </div>
    </section>
  );
}

