import './home.css';
import { Link } from 'react-router-dom';
import Emily_portfolio from '../assets/Emily_portfolio.jpg';

function Home() {
  return (
    <section className="hero-section">
      <div className="image-wrapper">
        <img src={Emily_portfolio} alt="Emily" className="hero-image" />
        <div className="text-box">
          <h2>Hei! Jeg heter Emily Constance</h2>
          <p> Jeg er 28 år, og har fra tidligere en bachelor i psykologi, og har nylig fullført en bachelor i Informasjonssystemer med fordypning i datasikkerhet og web. <br /><br />
          Jeg studerer nå Master i Applied Computer Science med fordypning i Interaction Design.</p>
          <Link to="/portfolio" className="cta-button">Se arbeid</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;







