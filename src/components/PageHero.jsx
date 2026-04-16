function PageHero({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#f8f3ed] via-[#f1e8db] to-[#e9dccb]">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-muted">Bridging the Gap</p>
        <h1 className="mt-2 font-display text-4xl text-royal sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-body/90">{subtitle}</p>
      </div>
    </section>
  );
}

export default PageHero;
