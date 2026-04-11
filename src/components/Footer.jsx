import { Link } from 'react-router-dom';
import { navItems } from '../data/siteContent';

function Footer() {
  return (
    <footer className="mt-20 bg-royal text-ivory">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h2 className="font-display text-2xl">Odisee University of Applied Sciences</h2>
          <p className="mt-2 text-ivory/90">Brussels Campus</p>
          <p className="mt-3 text-sm text-ivory/80">Bridging the Gap 2025-2026</p>
          <p className="mt-1 text-sm text-ivory/80">
            Inspired by GO! Scholengroep Brussel Inclusive Education Project (2025)
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lavender">Navigation</h3>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-ivory/90 transition hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lavender">Contact</h3>
          <p className="mt-3 text-sm text-ivory/90">Programme office placeholder</p>
          <p className="text-sm text-ivory/90">Email: student-success@odisee.example</p>
          <p className="text-sm text-ivory/90">Phone: +32 (0)2 000 00 00</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
