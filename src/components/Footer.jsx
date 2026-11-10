import './Footer.css';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} Taofeek Folorunso (Moneybank). Built with React and Vite.</p>
      </div>
    </footer>
  );
}