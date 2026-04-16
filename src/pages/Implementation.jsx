import Card from '../components/Card';
import PageHero from '../components/PageHero';

const timeline = [
  {
    phase: 'Phase 1 · Foundation',
    period: 'Before the academic year',
    items: 'Recruit mentors, align roles, train teams, and prepare communication materials.'
  },
  {
    phase: 'Phase 2 · Activate',
    period: 'Weeks 1 to 18',
    items: 'Run biweekly mentoring sessions and launch self-regulated learning supports.'
  },
  {
    phase: 'Phase 3 · Stabilize',
    period: 'Every 5 weeks',
    items: 'Collect check-in notes, trigger early alerts, and coordinate warm outreach.'
  },
  {
    phase: 'Phase 4 · Reflect and Renew',
    period: 'Weeks 19 to 21',
    items: 'Conduct reflection, evaluate impact, issue certificates, and improve next cycle.'
  }
];

function Implementation() {
  return (
    <>
      <PageHero
        title="Implementation Plan"
        subtitle="A practical and strategic rollout that coordinates tools, people, and timing across the full academic year."
      />
      <section className="mx-auto max-w-7xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
        <Card title="Strategic Approach">
          <p>
            Bridging the Gap is implemented as one integrated support architecture. Coordination across mentors, lecturers,
            support teams, and leadership ensures that no student falls through unnoticed.
          </p>
        </Card>

        <Card title="Academic Year Timeline" className="bg-gradient-to-br from-[#f8f3ed] to-[#eaddcc]">
          <div className="relative mt-2 space-y-6 border-l-2 border-lavender/70 pl-6">
            {timeline.map((step) => (
              <div key={step.phase} className="relative">
                <span className="absolute -left-[34px] top-2 h-4 w-4 rounded-full border-2 border-[#f3ebe0] bg-emerald" />
                <p className="text-sm uppercase tracking-wide text-royal/70">{step.period}</p>
                <h3 className="font-display text-2xl text-royal">{step.phase}</h3>
                <p className="text-ink/85">{step.items}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Roles and Responsibilities">
            <ul className="list-disc space-y-2 pl-5">
              <li>Mentors facilitate sessions and flag concerns early</li>
              <li>Head mentors coach mentors and escalate complex cases</li>
              <li>Coordinator orchestrates referrals and follow-up quality</li>
              <li>Student support services deliver targeted specialist support</li>
            </ul>
          </Card>
          <Card title="SMART Project Summary" className="bg-lavender/10">
            <p><strong>Specific:</strong> three coordinated student success tools.</p>
            <p><strong>Measurable:</strong> engagement, continuity, and support uptake indicators.</p>
            <p><strong>Achievable:</strong> uses existing campus structures and student leadership.</p>
            <p><strong>Relevant:</strong> aligned with Brussels campus realities.</p>
            <p><strong>Time-bound:</strong> staged implementation across one academic cycle.</p>
          </Card>
        </div>

        <Card title="Final Note">
          <p>
            This plan is designed to be hopeful and practical: every student can thrive when support is timely, coordinated,
            and grounded in belonging.
          </p>
        </Card>
      </section>
    </>
  );
}

export default Implementation;
