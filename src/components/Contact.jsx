import { FaEnvelope, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const contactLinks = [
  {
    label: 'Email',
    icon: FaEnvelope,
    href: 'mailto:folorunsotaofeek2018@gmail.com',
    description: 'Send me an email',
    external: false,
  },
  {
    label: 'LinkedIn',
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/taofeek-folorunso-3aa98835b',
    description: 'Open my LinkedIn profile',
    external: true,
  },
  {
    label: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/Moneybank10',
    description: 'See my code on GitHub',
    external: true,
  },
  {
    label: 'WhatsApp',
    icon: FaWhatsapp,
    href: 'https://wa.me/2347041233711',
    description: 'Chat with me on WhatsApp',
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get in touch</h2>
        <p className="contact-text">
          I'm open to junior full-stack roles. If you'd like to work together, or just
          talk code, reach me through any of these.
        </p>

        <div className="contact-grid">
          {contactLinks.map(({ label, icon: Icon, href, description, external }) => (
            <div key={label} className="contact-item">
              <span className="contact-label">{label}</span>
              <a
                className="contact-avatar"
                href={href}
                aria-label={description}
                title={description}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <Icon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}