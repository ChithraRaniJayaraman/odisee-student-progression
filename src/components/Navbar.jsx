import { NavLink } from 'react-router-dom';
import { navItems } from '../data/siteContent';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-royal/10 bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="text-xl font-semibold tracking-wide text-royal font-display">
          Bridging the Gap
        </NavLink>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-2 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 transition ${
                  isActive
                    ? 'bg-royal text-ivory'
                    : 'text-royal hover:bg-lavender/25 hover:text-royal'
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
