import PageHero from '../components/PageHero';
import { teamMembers } from '../data/siteContent';

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function Team() {
  return (
    <div className="pb-16">
      <PageHero
        title="Our Team"
        subtitle="The students behind Bridging the Gap, the Odisee Brussels Student Success Project 2025-2026"
      />

      <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 lg:px-8" aria-label="team-page">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="flex flex-col items-center rounded-3xl border border-white/55 bg-card/72 p-8 text-center shadow-soft backdrop-blur-xl"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald/25 font-display text-2xl text-royal shadow-[0_0_0_2px_rgba(142,166,138,0.55)]">
                {initials(member.name)}
              </span>
              <h3 className="mt-5 font-display text-xl text-royal">{member.name}</h3>
              <p className="mt-2 text-sm text-muted">Bridging the Gap project team</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/55 bg-card/72 p-6 text-center shadow-soft backdrop-blur-xl sm:p-8">
          <p className="leading-relaxed text-body">
            Together we developed the three pilot-ready deliverables: the Peer Mentoring Toolkit, the Early Alert and
            Follow-Up Protocol, and the First-Year Self-Regulated Learning Guide. This work is part of the Case
            Studies Change and Innovation programme at Vrije Universiteit Brussel, in partnership with Odisee Brussels.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Team;
