function Card({ title, children, className = '' }) {
  return (
    <article className={`rounded-2xl border border-royal/10 bg-gradient-to-br from-[#f6cd99] to-[#d8cff4] p-6 shadow-soft ${className}`}>
      {title ? <h3 className="font-display text-2xl text-royal">{title}</h3> : null}
      <div className="mt-3 space-y-3 text-ink/90">{children}</div>
    </article>
  );
}

export default Card;
