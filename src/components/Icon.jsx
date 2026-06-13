// Dependency-free line icons. Stroke uses currentColor so colour is set by the parent.
const paths = {
  // Peer mentoring: two people
  users: (
    <>
      <path d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />
      <circle cx="9" cy="7" r="3.2" />
      <path d="M22 19v-1a4 4 0 0 0-3-3.8" />
      <path d="M16.5 3.8a3.2 3.2 0 0 1 0 6.2" />
    </>
  ),
  // Early alert: bell
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </>
  ),
  // Self-regulated learning: compass
  compass: (
    <>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M15.6 8.4 13.6 13.6 8.4 15.6 10.4 10.4z" />
    </>
  ),
  // Generic: route / pathway
  route: (
    <>
      <circle cx="6" cy="18.5" r="2.4" />
      <circle cx="18" cy="5.5" r="2.4" />
      <path d="M8.4 18.5H14a3.5 3.5 0 0 0 0-7H10a3.5 3.5 0 0 1 0-7h5.6" />
    </>
  ),
  // Generic: target
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" />
    </>
  ),
  // Generic: book / guide
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" />
      <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" />
    </>
  ),
  // Generic: spark / belonging
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />
};

function Icon({ name, className = 'h-6 w-6', strokeWidth = 1.7 }) {
  const inner = paths[name];
  if (!inner) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {inner}
    </svg>
  );
}

export default Icon;
