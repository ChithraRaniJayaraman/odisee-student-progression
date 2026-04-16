function Card({ title, children, className = '' }) {
  return (
    <article className={`${className} rounded-3xl border border-lavender/35 bg-card p-6 shadow-soft`}>
      {title ? <h3 className="font-display text-2xl text-royal">{title}</h3> : null}
      <div className="mt-3 space-y-3 text-ink/90">{children}</div>
    </article>
  );
}

export default Card;
