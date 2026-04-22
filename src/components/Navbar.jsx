import { NavLink } from 'react-router-dom';
import { navItems } from '../data/siteContent';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/55 bg-white/65 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="text-xl font-semibold tracking-wide text-royal font-display">
          Odisee Brussels
        </NavLink>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-2 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 transition ${
                  isActive
                    ? 'bg-gold/18 text-royal shadow-[0_0_0_1px_rgba(224,191,106,0.35)]'
                    : 'text-royal hover:bg-white/55 hover:text-royal'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
