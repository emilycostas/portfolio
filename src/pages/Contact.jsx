import './contact.css';

function Contact() {
  return (
    <>
      <section className="contact-hero">
        <div className="overlay">
          <h1>Kontakt meg</h1>
        </div>
      </section>

      <section className="contact-info-box">
        <h2>Kontaktinformasjon</h2>
        <ul>
          <li><strong>Adresse:</strong> Riisløkka 36, 1614 Fredrikstad</li>
          <li><strong>Telefon:</strong> <a href="tel:+4794872895">+47 94 87 28 95</a></li>
          <li><strong>E-post:</strong> <a href="mailto:emilyce97@gmail.com">emilyce97@gmail.com</a></li>
        </ul>
      </section>

    </>
  );
}

export default Contact;
