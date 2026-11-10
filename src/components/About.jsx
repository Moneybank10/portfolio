import './About.css';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About me</h2>
        <div className="about-text">
          <p>
            I'm Taofeek Folorunso, known online as Moneybank, a junior full-stack developer who likes turning messy
            real-world problems into clean, working software. I build with React, Node
            and PostgreSQL, and I care about the parts users never see: security, data
            integrity and code I can explain line by line.
          </p>
          <p>
            Before tech, I was in business school, which taught me to communicate
            clearly, take ownership and keep going when things get hard. I'm open to
            junior full-stack roles and always up for a good problem to solve.
          </p>
        </div>
      </div>
    </section>
  );
}