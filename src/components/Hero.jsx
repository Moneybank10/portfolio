import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <span className="hero-badge">
          <span className="dot" />
          Open to junior full-stack roles
        </span>

        <p className="hero-greeting">Hi, I'm Taofeek, better known as</p>
        <h1>Moneybank</h1>
        <p className="hero-role">Junior Full-Stack Developer</p>

        <p className="hero-text">
          I build web apps with React, Node and PostgreSQL, from the interface people
          click to the database rules that keep their data safe.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View my projects</a>
          <a href="#contact" className="btn btn-outline">Get in touch</a>
        </div>
      </div>
    </section>
  );
}