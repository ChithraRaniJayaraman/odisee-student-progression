import Card from '../components/Card';
import PageHero from '../components/PageHero';

const stats = [
  {
    value: '+2',
    label: 'months average progress (EEF Mentoring, 2025)'
  },
  {
    value: '3,774',
    label: 'students in the closest comparable study (García et al., 2024)'
  },
  {
    value: '8',
    label: 'real-world programmes independently evaluated'
  },
  {
    value: '0€',
    label: 'extra budget required to implement'
  }
];

const roles = [
  ['Mentee', 'First-year student facing language, financial, or belonging barriers', 'Attend bi-weekly sessions and try the agreed next step', 'Practical guidance, belonging, better study habits'],
  ['Mentor', 'Second-year student with lived experience of the first year', 'Guide sessions, complete check-ins, flag concerns', 'Certificate, leadership, intercultural competence'],
  ['Head Mentor', 'Senior student with leadership experience', 'Support mentors and escalate amber/red flags', 'Advanced experience and leadership development'],
  ['Coordinator', 'Existing Odisee staff member', 'Train mentors, match pairs, oversee the programme', 'Stronger retention data and oversight'],
  ['Teaching Staff', 'Lecturers and module coordinators', 'Refer at-risk students and support the programme', 'Clearer referral pathways and stronger engagement']
];

const steps = [
  ['1', 'Check In', 'How are you really?', 'Start with a genuine question and build trust first.'],
  ['2', 'The Plate', 'What’s coming up?', 'Turn deadlines and worries into a manageable list.'],
  ['3', 'Conversation', 'Heart of every session', 'Share what actually helped you and answer the questions they would not ask a lecturer.'],
  ['4', 'Next Step', 'One small action', 'Agree one specific action before the next meeting.'],
  ['5', 'Close', 'Confirm the next meeting', 'A confirmed next meeting is a commitment for both people.']
];

const training = [
  ['The Why', 'Why peer mentoring works, what the research says, and why this student needs you', '45 min'],
  ['The Five-Step Session', 'Walk through the structure and practise in pairs', '60 min'],
  ['Active Listening', 'Holding silence, asking open questions, staying with discomfort', '45 min'],
  ['Cultural Awareness', 'How communication styles and background affect mentoring', '45 min'],
  ['The Check-In Note', 'How to complete it and when to escalate concerns', '30 min'],
  ['Boundaries and Wellbeing', 'What mentors can and cannot carry', '30 min']
];

const swot = {
  strengths: [
    'Peer-to-peer trust is more accessible than formal support',
    'Lived experience addresses cultural and language barriers',
    'Low cost and uses existing student community',
    'Mentors gain professional development'
  ],
  weaknesses: [
    'Quality depends on consistent coordinator oversight',
    'Mentor wellbeing must be actively monitored',
    'Matching requires care and sensitivity'
  ],
  opportunities: [
    'Aligns with Odisee’s inclusion goals',
    'Scales across Brussels programmes',
    'Pilot data can support long-term embedding'
  ],
  threats: [
    'Mentor dropout if wellbeing is ignored',
    'Stigma if the programme is handled poorly',
    'Informal drift without structure'
  ]
};

const smart = [
  ['S', 'Specific', 'Bi-weekly one-hour structured sessions with a defined role for each person.'],
  ['M', 'Measurable', 'Check-in notes, reflections, concern logs, and retention data.'],
  ['A', 'Achievable', 'Uses existing students, spaces, and staff time.'],
  ['R', 'Relevant', 'Targets the study-efficiency gap for migrant-background and first-generation students.'],
  ['T', 'Time-Bound', 'Matching before Week 1 and full evaluation at the end of the year.']
];

const phases = [
  ['Phase 1', 'Before Year Begins', 'Recruit, train, and match mentors and mentees before induction week.'],
  ['Phase 2', 'Weeks 1-5', 'Launch the programme and complete the first sessions.'],
  ['Phase 3', 'Weeks 6-10', 'Monitor the programme and review early issues.'],
  ['Phase 4', 'Weeks 11-21', 'Continue support and evaluate outcomes at the end of the year.']
];

const programmes = [
  ['Spain', 'García et al. (2024)', '3,774 students', 'Significantly lower dropout for mentees'],
  ['Spain', 'Alonso-García et al. (2025)', '4,962 students', 'Peer mentoring stayed effective across five years'],
  ['Netherlands', 'Van der Velden et al. (2023)', 'Medical students', 'Bias-trained mentors improved outcomes'],
  ['UK', 'University of Manchester AMBS', 'First-year students', 'Students ask what they cannot ask a lecturer'],
  ['Germany', 'Drossard & Härtl (2024)', 'Medical students', 'Structured digital mentoring moved into practice'],
  ['Australia', 'University of Melbourne', 'Mixed cohort', 'Mentors receive verifiable digital credentials'],
  ['Global', 'Gehreke et al. (2024)', '17+ studies', 'Structured mentoring beats informal support']
];

const lessons = [
  ['Structure is what makes it work', 'Informal support is not enough on its own.'],
  ['Training is non-negotiable', 'Training turns goodwill into impact.'],
  ['Cultural competence matters', 'Mentors need awareness of different communication styles.'],
  ['Mentor wellbeing drives outcomes', 'Mentors need support to support others.'],
  ['Pilots become permanent when they work', 'Good programmes become embedded.'],
  ['Benefits are mutual', 'Mentors gain as well as mentees.']
];

function PeerMentoring() {
  return (
    <>
      <PageHero
        title="Peer Mentoring Complete Guide"
        subtitle="Odisee Brussels · Student Success Project 2025–2026"
      />

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
        <Card title="What Is Peer Mentoring?">
          <p>Peer mentoring is one of the most human things a university can offer. It is when a student who has already navigated the hard parts of first year sits with a student who is going through those same hard parts right now and shows them the way through.</p>
          <p>It is a real, honest relationship between two people: one who knows the terrain, one who is learning it. Helping a student find the right desk, ask the right question, and know they are not alone.</p>
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.value} className="rounded-2xl border border-white/55 bg-white/65 p-4 text-center shadow-soft">
                <div className="font-display text-4xl text-royal">{item.value}</div>
                <p className="mt-2 text-sm text-body/90">{item.label}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Why Odisee Brussels?">
          <p>The evidence for a peer mentoring programme at Odisee Brussels comes from our own institutional data and from a wide academic literature base. Students at the Brussels campus, especially those with a migrant background, show significantly lower study efficiency than students at other Odisee campuses.</p>
          <p>The biggest predictors of first-year struggle are lack of study habits, lack of belonging, financial stress, and first-generation student status. None of these are fixed characteristics. All can be addressed through targeted support.</p>
        </Card>

        <Card title="Who Is This Programme For?">
          <div className="overflow-x-auto rounded-2xl border border-white/55 bg-white/65">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-royal text-white"><tr><th className="px-4 py-3">Role</th><th className="px-4 py-3">Who They Are</th><th className="px-4 py-3">What They Do</th><th className="px-4 py-3">What They Gain</th></tr></thead>
              <tbody>
                {roles.map(([a, b, c, d]) => (
                  <tr key={a} className="border-t border-white/55">
                    <td className="px-4 py-3 font-semibold text-royal">{a}</td>
                    <td className="px-4 py-3">{b}</td>
                    <td className="px-4 py-3">{c}</td>
                    <td className="px-4 py-3">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Every Session — The Five-Step Flow">
          <div className="grid gap-4 md:grid-cols-5">
            {steps.map(([n, title, tag, body]) => (
              <div key={n} className="rounded-2xl border border-white/55 bg-white/65 p-4 shadow-soft">
                <div className="flex items-center justify-between text-sm font-semibold text-royal"><span>{n}</span><span>{title}</span></div>
                <div className="mt-2 rounded-full bg-gold/15 px-3 py-1 inline-block text-xs font-semibold text-royal">{tag}</div>
                <p className="mt-3 text-sm text-body/90">{body}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Mentor Training">
          <p>Every mentor completes structured training before their first session. Training is what turns goodwill into impact.</p>
          <div className="overflow-x-auto rounded-2xl border border-white/55 bg-white/65">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-royal text-white"><tr><th className="px-4 py-3">Module</th><th className="px-4 py-3">Content</th><th className="px-4 py-3">Duration</th></tr></thead>
              <tbody>
                {training.map(([a, b, c]) => (
                  <tr key={a} className="border-t border-white/55">
                    <td className="px-4 py-3 font-semibold text-royal">{a}</td>
                    <td className="px-4 py-3">{b}</td>
                    <td className="px-4 py-3">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="SWOT Analysis">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/55 bg-main/45 p-4"><h4 className="font-display text-2xl text-royal">Strengths</h4><ul className="mt-2 list-disc pl-5 text-sm">{swot.strengths.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="rounded-2xl border border-white/55 bg-amber/10 p-4"><h4 className="font-display text-2xl text-royal">Weaknesses</h4><ul className="mt-2 list-disc pl-5 text-sm">{swot.weaknesses.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="rounded-2xl border border-white/55 bg-green-10 p-4"><h4 className="font-display text-2xl text-royal">Opportunities</h4><ul className="mt-2 list-disc pl-5 text-sm">{swot.opportunities.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="rounded-2xl border border-white/55 bg-red-100 p-4"><h4 className="font-display text-2xl text-royal">Threats</h4><ul className="mt-2 list-disc pl-5 text-sm">{swot.threats.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
        </Card>

        <Card title="SMART Criteria">
          <div className="overflow-x-auto rounded-2xl border border-white/55 bg-white/65">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-royal text-white"><tr><th className="px-4 py-3">Letter</th><th className="px-4 py-3">Criterion</th><th className="px-4 py-3">How This Guide Meets It</th></tr></thead>
              <tbody>
                {smart.map(([a, b, c]) => (
                  <tr key={a} className="border-t border-white/55">
                    <td className="px-4 py-3 font-semibold text-royal">{a}</td>
                    <td className="px-4 py-3">{b}</td>
                    <td className="px-4 py-3">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Implementation">
          <div className="grid gap-4">
            {phases.map(([phase, when, body]) => (
              <div key={phase} className="grid overflow-hidden rounded-2xl border border-white/55 bg-white/65 md:grid-cols-[180px_1fr]">
                <div className="bg-royal px-4 py-4 text-white"><div className="font-semibold">{phase}</div><div className="text-sm opacity-80">{when}</div></div>
                <div className="px-4 py-4 text-sm">{body}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Real World Universities">
          <div className="overflow-x-auto rounded-2xl border border-white/55 bg-white/65">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-royal text-white"><tr><th className="px-4 py-3">Region</th><th className="px-4 py-3">Programme</th><th className="px-4 py-3">Scale</th><th className="px-4 py-3">Result</th></tr></thead>
              <tbody>
                {programmes.map(([region, name, scale, result]) => (
                  <tr key={name} className="border-t border-white/55">
                    <td className="px-4 py-3 font-semibold text-royal">{region}</td>
                    <td className="px-4 py-3">{name}</td>
                    <td className="px-4 py-3">{scale}</td>
                    <td className="px-4 py-3">{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="What All These Programmes Have in Common">
          <div className="grid gap-4 md:grid-cols-2">
            {lessons.map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-white/55 bg-white/65 p-4 shadow-soft">
                <h4 className="font-display text-2xl text-royal">{title}</h4>
                <p className="mt-2 text-sm text-body/90">{body}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
}

export default PeerMentoring;
