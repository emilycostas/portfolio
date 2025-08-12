import './home.css';
import { Link } from 'react-router-dom';
import Emily_portfolio from '../assets/Emily_portfolio.jpg';

function Home() {
  return (
    <section className="hero-section">
      <div className="image-wrapper">
        <img src={Emily_portfolio} alt="Emily" className="hero-image" />
        <div className="text-box">
          <h2>Hei! Jeg er Emily</h2>
          <p>
            Jeg er 28 år, og har nylig fullført en bachelor i Informasjonssystemer
            med fordypning i datasikkerhet og web. <br /><br />
            Jeg liker godt å arbeide med design, brukeropplevelse,
            universell utforming og gode løsninger.
          </p>
          <Link to="/portfolio" className="cta-button">Se arbeid</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;







