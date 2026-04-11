import Card from '../components/Card';
import PageHero from '../components/PageHero';
import { teamMembers } from '../data/siteContent';

function Team() {
  return (
    <>
      <PageHero
        title="Meet the People Behind the Support System"
        subtitle="A collaborative team working to build connection, care, and student success at Odisee Brussels."
      />
      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="team-pattern" aria-hidden="true" />
        <p className="relative max-w-4xl text-lg text-ink/85">
          The programme team combines educational leadership, peer support expertise, and quality assurance.
          Together, they sustain a welcoming and evidence-driven culture of support.
        </p>

        <div className="relative mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.name} className="border-lavender/40 transition hover:-translate-y-1 hover:shadow-card">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-lavender/35 font-display text-2xl text-royal">
                  {member.name
                    .split(' ')
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join('')}
                </div>
                <div>
                  <h3 className="font-display text-2xl text-royal">{member.name}</h3>
                  <p className="text-sm font-semibold text-emerald">{member.role}</p>
                </div>
              </div>
              <p className="mt-4 text-ink/85">{member.bio}</p>
              <p className="mt-3 text-sm text-royal/80">Focus area: {member.focus}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

export default Team;
