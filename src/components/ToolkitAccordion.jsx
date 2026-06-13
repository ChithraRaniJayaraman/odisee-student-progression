import { useState } from 'react';

export function Tbl({ head, rows }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-royal/10 shadow-soft">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-royal text-ivory">
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? 'bg-section/70' : 'bg-card/85'}>
              {r.map((c, j) => (
                <td key={j} className="px-4 py-3 align-top text-body">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Note({ title, children }) {
  return (
    <div className="rounded-2xl border border-emerald/55 bg-emerald/12 px-5 py-4 text-sm leading-relaxed text-ink/90">
      {title ? <p className="mb-1 font-semibold text-royal">{title}</p> : null}
      {children}
    </div>
  );
}

export function Template({ title, children }) {
  return (
    <div className="rounded-2xl border border-royal/10 bg-section/60 p-5">
      <p className="font-semibold text-royal">{title}</p>
      <div className="mt-2 whitespace-pre-line text-sm leading-relaxed text-body">{children}</div>
    </div>
  );
}

export function SubHeading({ children }) {
  return (
    <h4 className="flex items-center gap-2.5 font-display text-lg text-royal sm:text-xl">
      <span
        className="inline-block h-4 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-emerald to-royal"
        aria-hidden="true"
      />
      {children}
    </h4>
  );
}

export function Flow({ steps }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((s, i) => (
        <span key={s} className="flex items-center gap-2">
          <span className="rounded-full border border-emerald/60 bg-emerald/15 px-3 py-1.5 text-xs font-semibold text-royal">
            {s}
          </span>
          {i < steps.length - 1 ? <span className="text-emerald">&rarr;</span> : null}
        </span>
      ))}
    </div>
  );
}

function Chevron({ open }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-royal transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 7.5 10 12.5 15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ToolkitAccordion({ sections, navLabel = 'Toolkit sections' }) {
  const [openId, setOpenId] = useState(sections[0]?.id ?? null);

  const toggle = (id) => setOpenId((cur) => (cur === id ? null : id));

  const jumpTo = (id) => {
    setOpenId(id);
    requestAnimationFrame(() => {
      document.getElementById(`section-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <div>
      <nav aria-label={navLabel} className="mb-8 flex flex-wrap gap-2">
        {sections.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => jumpTo(s.id)}
            className={`rounded-full border px-3 py-1.5 text-xs transition ${
              openId === s.id
                ? 'border-emerald/70 bg-emerald/20 text-royal shadow-[0_0_0_1px_rgba(142,166,138,0.45)]'
                : 'border-royal/15 bg-white/60 text-royal hover:bg-emerald/12'
            }`}
          >
            {i + 1}. {s.title}
          </button>
        ))}
      </nav>

      <div className="space-y-4">
        {sections.map((s, i) => {
          const open = openId === s.id;
          return (
            <article
              id={`section-${s.id}`}
              key={s.id}
              className={`scroll-mt-28 overflow-hidden rounded-3xl border bg-card/72 shadow-soft backdrop-blur-xl transition-all duration-300 ${
                open ? 'border-emerald/45 shadow-card' : 'border-white/55 hover:border-emerald/35 hover:shadow-card'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(s.id)}
                aria-expanded={open}
                className="flex w-full items-center gap-4 px-5 py-5 text-left transition hover:bg-emerald/10 sm:px-7"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald/25 font-display text-base text-royal shadow-[0_0_0_1px_rgba(142,166,138,0.55)]">
                  {i + 1}
                </span>
                <span className="flex-1 font-display text-xl text-royal sm:text-2xl">{s.title}</span>
                <Chevron open={open} />
              </button>

              {open ? <div className="border-t border-emerald/15 px-5 py-5 sm:px-7">{s.content}</div> : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
          