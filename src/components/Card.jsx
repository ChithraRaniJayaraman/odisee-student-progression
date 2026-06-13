import Icon from './Icon';

function Card({ title, children, className = '', icon }) {
  return (
    <article
      className={`${className} lift rounded-3xl border border-white/55 bg-card/72 p-6 shadow-soft backdrop-blur-xl`}
    >
      {icon ? (
        <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald/18 text-royal shadow-[0_0_0_1px_rgba(67,102,80,0.18)]">
          <Icon name={icon} />
        </span>
      ) : null}

      {title ? <h3 className="font-display text-2xl text-royal">{title}</h3> : null}

      <div className="mt-3 text-body/90">{children}</div>
    </article>
  );
}

export default Card;