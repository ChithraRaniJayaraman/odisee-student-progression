import Icon from './Icon';

function PageHero({ title, subtitle, icon, iconImg }) {
  return (
    <section className="relative overflow-hidden border-b border-white/45 bg-gradient-to-r from-main via-section to-lavender">
      <div
        className="pointer-events-none absolute -left-16 -top-10 h-64 w-64 rounded-full bg-emerald/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-12 -right-10 h-56 w-56 rounded-full bg-gold/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        {iconImg ? (
          <span className="hero-rise mb-5 inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-emerald/30 bg-card/70 shadow-soft backdrop-blur-sm">
            <img src={iconImg} alt="" className="h-full w-full object-contain p-1.5" />
          </span>
        ) : icon ? (
          <span className="hero-rise mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald/30 bg-card/70 text-royal shadow-soft backdrop-blur-sm">
            <Icon name={icon} className="h-8 w-8" strokeWidth={1.6} />
          </span>
        ) : null}
        <p className="hero-rise text-xs font-semibold uppercase tracking-[0.28em] text-emerald">
          Bridging the Gap
        </p>
        <div className="accent-keyline mx-auto mt-4" />
        <h1 className="hero-rise mt-5 font-display text-4xl font-bold leading-tight text-royal sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="hero-rise mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-body/90 sm:text-xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export default PageHero;
