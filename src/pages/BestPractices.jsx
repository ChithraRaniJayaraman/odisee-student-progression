import Card from '../components/Card';
import PageHero from '../components/PageHero';

const rows = [
  {
    tool: 'Peer Mentoring',
    evidence: 'Strong impact on belonging and transition confidence when mentors are trained and sessions are structured.',
    practice: 'Use biweekly sessions, mentor supervision, and clear referral boundaries.'
  },
  {
    tool: 'Early Alert',
    evidence: 'Best outcomes when predictive signals are combined with human outreach and clear service coordination.',
    practice: 'Use warm messaging, 14-day follow-up, and cross-role accountability.'
  },
  {
    tool: 'Self-Regulated Learning',
    evidence: 'Metacognitive strategy teaching yields meaningful gains in progress and independent learning habits.',
    practice: 'Embed plan-monitor-evaluate routines into coursework and mentoring.'
  }
];

function BestPractices() {
  return (
    <>
      <PageHero
        title="Best Practices"
        subtitle="International evidence translated into practical, inclusive implementation for Odisee Brussels."
      />
      <section className="mx-auto max-w-7xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
        <Card title="Evidence at a Glance" className="bg-gradient-to-r from-[#f7c996] to-[#d9cff4]">
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left text-sm uppercase tracking-wide text-royal/80">
                  <th className="px-4">Tool</th>
                  <th className="px-4">What the Evidence Suggests</th>
                  <th className="px-4">How We Apply It</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.tool} className="rounded-2xl bg-gradient-to-r from-[#f6cf9f] to-[#e6c8dd] shadow-soft">
                    <td className="px-4 py-4 font-semibold text-royal">{row.tool}</td>
                    <td className="px-4 py-4 text-ink/85">{row.evidence}</td>
                    <td className="px-4 py-4 text-ink/85">{row.practice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Design Principle 1" className="bg-lavender/10">
            <p>Clarity of structure increases trust and participation.</p>
          </Card>
          <Card title="Design Principle 2" className="bg-lavender/20">
            <p>Warm communication is a non-negotiable quality standard.</p>
          </Card>
          <Card title="Design Principle 3" className="bg-lavender/10">
            <p>Support systems are strongest when tools are coordinated, not isolated.</p>
          </Card>
        </div>
      </section>
    </>
  );
}

export default BestPractices;
