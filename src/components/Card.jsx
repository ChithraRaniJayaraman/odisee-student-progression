function Card({ title, children, className = '' }) {
  return (
    <article className={`${className} rounded-3xl border border-white/55 bg-card/72 p-6 shadow-soft backdrop-blur-xl`}>
      {title ? <h3 className="font-display text-2xl text-royal">{title}</h3> : null}
      <div className="mt-3 space-y-3 text-ink/90">{children}</div>
    </article>
  );
}

export default Card;
