import { Link } from 'react-router-dom';
import { navItems } from '../data/siteContent';

function Footer() {
  return (
    <footer className="mt-20 border-t border-royal/10 bg-gradient-to-b from-[#f3ebe0] to-[#e8dccb] text-royal">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h2 className="font-display text-2xl">Odisee University of Applied Sciences</h2>
          <p className="mt-2 text-body/90">Brussels Campus</p>
          <p className="mt-3 text-sm text-body/80">Bridging the Gap 2025-2026</p>
        </div>
        <div>
          <h3 className="font-semibold text-orange">Navigation</h3>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-body/90 transition hover:text-orange">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-orange">Contact</h3>
          <p className="mt-3 text-sm text-body/90">Programme office placeholder</p>
          <p className="text-sm text-body/90">Email: student-success@odisee.example</p>
          <p className="text-sm text-body/90">Phone: +32 (0)2 000 00 00</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
