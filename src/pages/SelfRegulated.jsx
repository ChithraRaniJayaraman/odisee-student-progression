import Card from '../components/Card';
import PageHero from '../components/PageHero';

const stats = [
  {
    eyebrow: '+7 to +8 months',
    title: 'extra learning progress',
    body: 'EEF Toolkit 2025 — highest-impact, lowest-cost',
    className: 'from-emerald/20 to-emerald/35 border-emerald/40 text-emerald-dark',
  },
  {
    eyebrow: 'r = .71',
    title: 'correlation',
    body: 'SRL and academic adjustment (Van Rooij et al., 2018)',
    className: 'from-royal/15 to-royal/25 border-royal/25 text-royal',
  },
  {
    eyebrow: '3 habits',
    title: 'Plan · Monitor · Evaluate',
    body: 'EEF Recommendation 2 (2025)',
    className: 'from-gold/25 to-gold/40 border-gold/35 text-royal',
  },
];

const eefRows = [
  ['Rec. 1: Teachers acquire professional understanding of SRL', 'Teaching staff briefed in induction week on all three steps. This guide is their reference document.'],
  ['Rec. 2: Explicitly teach students to plan, monitor and evaluate', 'Students receive this guide in Week 1. All three steps are introduced and briefly practised in a teaching session.'],
  ['Rec. 3: Model metacognitive thinking out loud', 'Lecturers verbalise their own thinking during sessions — pausing to check understanding, adjusting approach — showing what self-regulation looks like in practice.'],
  ['Rec. 4: Set appropriate challenge and support', 'Peer mentor adjusts support level to each student\'s stage of habit formation. Coordinator provides proactive support at five-weekly check-ins.'],
  ['Rec. 6: Teach students to manage their own learning', 'Tools A, B and C give students practical independence without requiring ongoing instruction from staff.'],
  ['Rec. 7: Sustain and develop practice across the institution', 'Year-end reflection session. Outcomes feed into next year\'s intake planning. Embedded in both teaching and mentoring — not a one-off event.'],
];

const implementationRows = [
  ['Induction Week', 'Teaching session', 'Students receive this guide. Three steps introduced and briefly practised.', 'Rec. 1: Build professional understanding of SRL'],
  ['Every Teaching Session', 'Classroom', 'Lecturer asks one opening question (Plan) and one closing question (Evaluate). Thinks out loud during session.', 'Rec. 2 and 3: Teach and model plan, monitor, evaluate'],
  ['Every Mentoring Session', 'On campus or online', 'Mentor opens with goal-setting (Plan). Mentor closes with reflection question (Evaluate).', 'Rec. 6: Teach students to manage learning independently'],
  ['Every 5 Weeks', 'Coordinator check-in', 'Mentor flags if SRL habits are not forming. Coordinator offers proactive warm support.', 'Rec. 4: Set appropriate challenge and support'],
  ['End of Year', 'Reflection session', 'Students reflect on how study habits changed across 21 weeks. Anonymised reflections inform next year.', 'Rec. 7: Sustain and embed practice across the institution'],
];

const evidenceRows = [
  ['Baars et al. (2015 and 2024) University of Applied Sciences Netherlands', '315 first-year students. SRL and executive function explained 39.8% of variance in credits in Year 1. Students with stronger self-monitoring earned significantly more credits.', 'Directly comparable to Odisee Brussels. Proved teaching SRL measurably increases credits passed.'],
  ['Erasmus University Rotterdam Ace Your Self-Study App Netherlands', 'Mobile app built on Plan Monitor Evaluate framework. Results: significant increases in autonomous motivation and metacognition.', 'Same three-step framework as this guide. Proved it works in Dutch higher education — same culture, directly comparable to Brussels.'],
  ['Dignath and Veenman (2021) Europe', 'Two teacher questions per session — one at start, one at end — sufficient to build SRL habits. No extra workshops needed.', 'Odisee lecturers need only two questions per session. That is the entire workload change required.'],
  ['Simon-Grabalos et al. (2025) Spanish Universities', 'SRL embedded in normal teaching achieved 71% success rate. Standalone workshops significantly less effective.', 'Embedding works. Workshops do not. This guide is embedded by design.'],
  ['Koh et al. (2022) 3316 First-Generation Students International', 'Self-regulation was the bridge between believing you can succeed and staying enrolled into second year.', 'For first-generation students specifically — SRL converts confidence into persistence and persistence into completion.'],
  ['EEF Teaching and Learning Toolkit (2025) 30+ country evidence base', 'Metacognition and self-regulation: +7 to +8 months additional learning progress for disadvantaged students. Highest-impact, lowest-cost strategy.', 'The anchor for every SRL conversation at Odisee. Zero extra cost, grounded in the largest evidence base in European education research.'],
];

const swot = {
  strengths: [
    'Evidence-based — grounded in EEF (+7 to +8 months proven impact)',
    'No extra sessions or budget required',
    'Fits into existing teaching and mentoring without adding workload',
    'Directly addresses the study efficiency gap at Brussels campus',
    'Gives students autonomy and builds long-term academic confidence',
  ],
  opportunities: [
    'Scalable across all Odisee Brussels programmes at zero extra cost',
    'Strengthens peer mentoring and early alert — all three tools reinforce each other',
    'Builds lifelong student independence beyond the first year',
    'Aligns directly with Odisee\'s inclusion vision and policy',
  ],
  weaknesses: [
    'Habit formation takes time — not instant results',
    'Requires consistent reinforcement from staff and mentors to embed',
    'Students may initially resist or underestimate the reflection step',
  ],
  threats: [
    'High student stress undermines self-regulation (Almarzouki, 2024)',
    'Language barriers may affect the quality of written reflections',
    'Without peer mentor or staff reinforcement, habits may not form and persist',
  ],
};

const smartRows = [
  ['S', 'Specific', 'Three explicitly defined strategies — Plan, Monitor, Evaluate — with three practical student tools, embedded in teaching sessions and peer mentoring meetings at Odisee Brussels.'],
  ['M', 'Measurable', 'Progress tracked through mentor check-in notes every five weeks; year-end student reflections; connection to Early Alert Protocol data (Tool 2).'],
  ['A', 'Achievable', 'No new sessions, no new budget, no extra staff. Two questions per teaching session. Embedded in what already happens. Zero extra workload for anyone.'],
  ['R', 'Relevant', 'Directly addresses the study efficiency gap for first-generation and migrant-background students at the Brussels campus, confirmed in institutional data.'],
  ['T', 'Time-Bound', 'Introduced in induction week. Embedded across 21 weeks. Formally reviewed at end of year. Outcomes inform next year\'s intake support.'],
];

const toolRows = [
  {
    title: 'TOOL A — 2-Minute Planner',
    note: 'use BEFORE every session',
    rows: [
      'What is my goal for this session?',
      'How will I study? (read / practise / write / discuss)',
      'How long do I have?',
    ],
  },
  {
    title: 'TOOL B — 20-Minute Monitor Pause',
    note: 'use DURING every session',
    rows: [
      'Am I genuinely understanding this — or am I just moving through the words?',
    ],
  },
  {
    title: 'TOOL C — 3-Minute Reflection',
    note: 'use AFTER every session',
    rows: [
      'What went well in this session?',
      'What was difficult or unclear?',
      'What will I do differently next time?',
    ],
  },
];

function Table({ headers, rows, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-white/55 bg-card/72 shadow-soft backdrop-blur-xl ${className}`}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/35 text-left">
          <thead className="bg-white/35">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-4 py-3 text-sm font-semibold text-royal">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/30">
            {rows.map((row, index) => (
              <tr key={index} className="align-top">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-4 text-sm text-ink/90">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SelfRegulated() {
  return (
    <>
      <PageHero
        title="Self-Regulated Learning Guide"
        subtitle="Odisee Brussels · Student Success Project 2025–2026 · Tool 3 of 3 · Part of the Bridging the Gap Project"
      />

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.eyebrow}
              className={`rounded-3xl border bg-gradient-to-br p-5 shadow-soft backdrop-blur-xl ${item.className}`}
            >
              <p className="text-xs uppercase tracking-[0.24em] text-royal/70">{item.eyebrow}</p>
              <h2 className="mt-2 font-display text-2xl text-royal">{item.title}</h2>
              <p className="mt-2 text-sm text-ink/80">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="What Is Self-Regulated Learning?">
            <p>
              Self-regulated learning (SRL) is the ability to take ownership of your own studying. It means setting a goal before you
              begin, checking your understanding while you work, and reflecting honestly on what helped and what did not after you
              finish.
            </p>
            <p>
              The Education Endowment Foundation defines it as students ability to monitor, direct and review their own learning —
              usually by setting goals, and monitoring and evaluating their own academic progress (EEF, 2025). Research confirms that
              self-regulated learners apply these strategies consistently, and that this promotes genuine learner independence.
            </p>
          </Card>

          <Card title="Why Does This Matter at Odisee Brussels?">
            <p>
              Odisee aims to reduce unnecessary dropout by removing barriers related to access, services, and institutional support
              (Odisee, n.d.-b). The Brussels campus presents a particular challenge: institutional data confirm that students with a
              migrant background show significantly lower study efficiency at Brussels compared to all other campuses.
            </p>
            <p>
              Many of these students arrive without structured study habits — not because of a lack of ability or motivation, but
              because effective study strategies are rarely taught explicitly before university entry (Van Rooij et al., 2018;
              Fokkens-Bruinsma et al., 2021). Almarzouki (2024) found that prolonged stress from financial insecurity and language
              difficulty directly impairs working memory — SRL skills help students recover and refocus even under pressure.
            </p>
            <p>
              Van Rooij et al. (2018): correlation of .71 between self-regulated study behaviour and academic adjustment — the strongest
              predictor, above motivation and prior grades. Koh et al. (2022) followed 3,316 first-generation students and found
              self-regulation was the bridge between believing you can succeed and actually staying enrolled into second year.
            </p>
          </Card>
        </div>

        <Card title="The Three Steps — Plan · Monitor · Evaluate">
          <p className="max-w-5xl text-body/90">
            Three steps. Six minutes total — two minutes to plan, one minute to monitor every 20-minute study block, three minutes to
            reflect. Built into what already happens. No extra sessions. No extra budget.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                step: 'PLAN',
                when: 'Before every session',
                questions: ['What is my specific goal for this session?', 'How will I approach this — reading, practising, writing, or discussing?', 'How much time do I have and what can I realistically achieve?'],
                evidence: 'Fokkens-Bruinsma et al. (2021): time management and goal-setting are the two strongest predictors of first-year academic success. EEF Rec. 2: activating prior knowledge before a task significantly improves learning outcomes.',
                tone: 'from-emerald/15 to-emerald/30',
              },
              {
                step: 'MONITOR',
                when: 'During — every 20 minutes (1 minute pause — ask 3 quick questions)',
                questions: ['Am I genuinely understanding this, or just moving through the material?', 'Am I still working towards the goal I set at the start?', 'Is my current approach working — or should I try a different strategy?'],
                evidence: 'Van Rooij et al. (2018): correlation of .71 between self-regulated study behaviour and academic adjustment — the single strongest predictor, above motivation and prior grades. EEF Rec. 3: modelling metacognitive thinking out loud during sessions.',
                tone: 'from-royal/15 to-section/50',
              },
              {
                step: 'EVALUATE',
                when: 'After every session',
                questions: ['What went well in this session? Name it specifically so it can be repeated.', 'What was difficult or unclear? Name it honestly so it can be addressed.', 'What is one thing I will do differently next time?'],
                evidence: 'Jansen et al. (2019): meta-analysis of 126 higher education studies — teaching reflection after completing work consistently improves both grades and study habits. EEF Rec. 2: evaluating and monitoring own learning is a core metacognitive strategy.',
                tone: 'from-gold/20 to-gold/35',
              },
            ].map((step) => (
              <article key={step.step} className={`rounded-3xl border border-white/55 bg-gradient-to-br ${step.tone} p-5 shadow-soft`}>
                <p className="text-xs uppercase tracking-[0.22em] text-royal/70">{step.when}</p>
                <h3 className="mt-2 font-display text-3xl text-royal">{step.step}</h3>
                <div className="mt-4 space-y-3 text-sm text-ink/85">
                  <div>
                    <p className="font-semibold text-royal">What You Do:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      {step.questions.map((question) => (
                        <li key={question}>{question}</li>
                      ))}
                    </ul>
                  </div>
                  <p>
                    <span className="font-semibold text-royal">Evidence:</span> {step.evidence}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Card>

        <Card title="EEF Recommendations — How They Are Applied">
          <Table headers={["EEF Recommendation", "How Applied at Odisee Brussels"]} rows={eefRows} />
        </Card>

        <Card title="The Three Student Tools">
          <p className="max-w-5xl text-body/90">
            These three tools take six minutes total. Not assessed. Not submitted. Just habits students build for themselves.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {toolRows.map((tool) => (
              <article key={tool.title} className="rounded-3xl border border-white/55 bg-white/55 p-5 shadow-soft">
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-dark">{tool.note}</p>
                <h3 className="mt-2 font-display text-2xl text-royal">{tool.title}</h3>
                <div className="mt-4 rounded-2xl border border-white/50 bg-main/45 p-4">
                  <table className="w-full text-sm">
                    <tbody className="space-y-2">
                      {tool.rows.map((row) => (
                        <tr key={row} className="border-b border-white/35 last:border-b-0">
                          <td className="py-3 text-ink/90">{row}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {tool.title.includes('Monitor') ? (
                    <p className="mt-4 rounded-2xl border border-royal/15 bg-section/60 p-4 text-sm text-ink/90">
                      If the answer is the second one, go back to the point where you last understood. Find the gap. That moment is where
                      learning actually happens.
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm text-ink/80">
            EEF Recommendation 2 (2025) confirms that monitoring and adjusting during a task is the key metacognitive strategy that improves outcomes.
          </p>
        </Card>

        <Card title="Implementation Workflow">
          <Table headers={["When", "Where", "What Happens", "EEF Recommendation"]} rows={implementationRows} />
        </Card>

        <Card title="International Evidence">
          <Table headers={["University/Study", "What They Did and Results", "What Odisee Can Take"]} rows={evidenceRows} />
        </Card>

        <Card title="SWOT Analysis">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-5">
              <h3 className="font-display text-2xl text-emerald-dark">Strengths</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/90">
                {swot.strengths.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-3xl border border-blue-200 bg-sky-50/80 p-5">
              <h3 className="font-display text-2xl text-royal">Opportunities</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/90">
                {swot.opportunities.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-3xl border border-amber-200 bg-amber-50/80 p-5">
              <h3 className="font-display text-2xl text-amber-700">Weaknesses</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/90">
                {swot.weaknesses.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-3xl border border-rose-200 bg-rose-50/80 p-5">
              <h3 className="font-display text-2xl text-rose-700">Threats</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/90">
                {swot.threats.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
          <p className="mt-5 rounded-2xl border border-white/55 bg-white/60 p-4 text-sm text-ink/85">
            The weaknesses and threats are not reasons to avoid the approach — they are areas where the implementation plan already has responses built in. Stress is addressed through peer mentoring (Tool 1). Language barriers are acknowledged by allowing reflection in any language. The risk of habits not forming is mitigated by systematic mentor check-ins and early alert follow-up (Tool 2).
          </p>
        </Card>

        <Card title="SMART Criteria">
          <Table headers={["Letter", "Criterion", "How This Guide Meets It"]} rows={smartRows} />
        </Card>

        <Card title="Full Evidence Base">
          <Table
            headers={["Source", "Contribution to This Guide"]}
            rows={[
              ['EEF Teaching and Learning Toolkit (2025)', 'Metacognition and self-regulation: +7 to +8 months additional learning progress. Highest-impact, lowest-cost strategy. Seven recommendations form the backbone of the implementation plan.'],
              ['Van Rooij et al. (2018)', 'Correlation of .71 between self-regulated study behaviour and academic adjustment — the strongest predictor, above motivation and prior grades.'],
              ['Jansen et al. (2019)', 'Meta-analysis of 126 higher education studies: teaching SRL consistently improves both grades and study habits across all disciplines.'],
              ['Fokkens-Bruinsma et al. (2021)', 'Time management and autonomous motivation are the two strongest predictors of first-year academic success. Both developed through the Plan step.'],
              ['Koh et al. (2022)', 'For 3,316 first-generation students: self-regulation was the bridge between believing you can succeed and staying enrolled into second year.'],
              ['Baars et al. (2015 and 2024)', 'At a University of Applied Sciences Netherlands: stronger self-monitoring directly predicted more credits in first year. SRL explained 39.8% of variance in credits.'],
              ['Dignath and Veenman (2021)', 'Two teacher questions per session are sufficient to build SRL habits. No extra workshops needed.'],
              ['Simon-Grabalos et al. (2025)', 'SRL embedded in normal teaching achieved 71% success rate. Standalone workshops significantly less effective.'],
              ['Almarzouki (2024)', 'Financial stress and language difficulty directly impair working memory. SRL habits help students recover and refocus.'],
              ['Odisee University of Applied Sciences (n.d.-a, n.d.-b)', 'Odisee aims to reduce unnecessary dropout and provide inclusive learning environments. This guide is a direct implementation of that commitment.'],
            ]}
          />
        </Card>

        <Card title="Closing Note" className="border-gold/40 bg-gold/15">
          <p className="text-sm text-ink/90">
            A note to teaching staff and programme coordinators: This guide is not a reflection on what has or has not been done before.
            It is a response to a well-documented challenge — the study efficiency gap for first-generation and migrant-background
            students at Odisee Brussels. The three steps in this guide are low-cost, evidence-based, and designed to complement what
            already happens in your sessions. Your role is not to add more to your workload, but to use two questions — one at the
            start, one at the end — to help students develop habits that will serve them throughout their degree.
          </p>
        </Card>

        <footer className="rounded-3xl border border-white/55 bg-card/72 px-6 py-5 text-center text-sm text-ink/80 shadow-soft backdrop-blur-xl">
          Odisee University of Applied Sciences · Brussels Campus · Self-Regulated Learning Guide 2025–2026
          <br />
          Part of the Bridging the Gap: Inclusive Education and Student Success Project · Built on the EEF Teaching and Learning Toolkit (2025)
        </footer>
      </section>
    </>
  );
}

export default SelfRegulated;
