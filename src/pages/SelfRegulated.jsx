import Card from '../components/Card';
import PageHero from '../components/PageHero';

function SelfRegulated() {
  return (
    <>
      <PageHero
        title="Self-Regulated Learning Guide"
        subtitle="Practical routines that help students plan, monitor, and evaluate their learning with confidence."
      />
      <section className="mx-auto max-w-7xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
        <Card title="What Is Self-Regulated Learning?">
          <p>
            Self-regulated learning helps students actively manage goals, study strategies, progress checks, and reflection.
            It supports autonomy while reducing overwhelm and procrastination.
          </p>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Why It Matters at Odisee Brussels">
            <p>
              Students juggle multilingual communication, financial pressures, and demanding timetables. Clear routines strengthen
              agency and improve sustainable academic habits.
            </p>
          </Card>
          <Card title="EEF Recommendations Built In" className="bg-lavender/10">
            <ul className="list-disc space-y-2 pl-5">
              <li>Explicit strategy instruction</li>
              <li>Metacognitive prompts embedded in coursework</li>
              <li>Regular reflection and feedback cycles</li>
            </ul>
          </Card>
        </div>

        <Card title="The Three Steps in Practice">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-royal/15 bg-gradient-to-br from-[#f8f3ed] to-[#eee2d1] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald">Step 1</p>
              <h3 className="mt-2 font-display text-3xl text-royal">PLAN</h3>
              <p className="mt-2 text-sm">Set weekly priorities, break tasks into manageable actions, and estimate time realistically.</p>
            </div>
            <div className="rounded-2xl border border-royal/15 bg-gradient-to-br from-[#f3ebe0] to-[#eadfce] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald">Step 2</p>
              <h3 className="mt-2 font-display text-3xl text-royal">MONITOR</h3>
              <p className="mt-2 text-sm">Track concentration, understanding, and progress. Adjust strategy early when a plan is not working.</p>
            </div>
            <div className="rounded-2xl border border-royal/15 bg-gradient-to-br from-[#f8f3ed] to-[#e9dccb] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald">Step 3</p>
              <h3 className="mt-2 font-display text-3xl text-royal">EVALUATE</h3>
              <p className="mt-2 text-sm">Reflect after each cycle: what worked, what did not, and what to improve next week.</p>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="The Three Student Tools">
            <ul className="list-disc space-y-2 pl-5">
              <li>Weekly Planner with priority filters</li>
              <li>Focus and Progress Tracker</li>
              <li>End-of-Week Reflection Prompt Sheet</li>
            </ul>
          </Card>
          <Card title="Strengths and Challenges">
            <p><strong>Strengths:</strong> agency, consistency, transferable study skills.</p>
            <p><strong>Challenges:</strong> initial habit formation and sustained use during peak workload periods.</p>
          </Card>
        </div>
      </section>
    </>
  );
}

export default SelfRegulated;
