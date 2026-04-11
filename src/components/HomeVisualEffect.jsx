function HomeVisualEffect() {
  const dots = [
    { left: '8%', top: '22%', delay: '0s' },
    { left: '18%', top: '54%', delay: '1.4s' },
    { left: '34%', top: '33%', delay: '2s' },
    { left: '50%', top: '62%', delay: '0.8s' },
    { left: '67%', top: '28%', delay: '1.2s' },
    { left: '79%', top: '46%', delay: '2.6s' },
    { left: '90%', top: '35%', delay: '1.8s' }
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-rays absolute inset-0" />
      <svg className="absolute inset-0 h-full w-full opacity-45" viewBox="0 0 1200 520" preserveAspectRatio="none">
        <path d="M90 140 C 280 60, 360 250, 520 180 S 870 130, 1100 220" stroke="rgba(184, 162, 224, 0.8)" strokeWidth="1.4" fill="none" />
        <path d="M120 360 C 290 420, 430 250, 630 320 S 920 380, 1110 300" stroke="rgba(248, 245, 238, 0.7)" strokeWidth="1.2" fill="none" />
      </svg>
      {dots.map((dot) => (
        <span
          key={`${dot.left}-${dot.top}`}
          className="hero-dot"
          style={{ left: dot.left, top: dot.top, animationDelay: dot.delay }}
        />
      ))}
    </div>
  );
}

export default HomeVisualEffect;
