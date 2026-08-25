import './home-temp.css';
import { Link } from 'react-router-dom';
import Emily_portfolio from '../assets/Emily_portfolio.jpg';

function Home() {
  return (
    <section className="hero-section">
      <div className="image-wrapper">
        <img src={Emily_portfolio} alt="Emily" className="hero-image" />
        <div className="text-box">
          <h2>Hei! Jeg heter Emily Constance</h2>
          <p> Jeg er 29 år, og har en bachelor i Psykologi fra UiT Norges Arktiske Universitet, og en bachelor i Informasjonssystemer med fordypning i datasikkerhet og web fra Høgskolen i Østfold. <br /><br />
          Jeg studerer nå Master i Applied Computer Science med fordypning i Interaction Design, og er i gang med mitt siste år hvor jeg skriver masteroppgaven min.</p>
          <Link to="/portfolio" className="cta-button">Se arbeid</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;







