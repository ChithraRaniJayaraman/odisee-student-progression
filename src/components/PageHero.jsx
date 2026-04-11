function PageHero({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-lavender/20" aria-hidden="true" />
      <div className="absolute -left-24 top-6 h-40 w-40 rounded-full bg-emerald/20 blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-royal/80">Bridging the Gap</p>
        <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-ink/85">{subtitle}</p>
      </div>
    </section>
  );
}

export default PageHero;
