import { Link } from 'react-router-dom';
import Card from '../components/Card';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import chainDiagram from '../../diagram-three-tools-chain.png';

const tools = [
  {
    title: 'Peer Mentoring Toolkit',
    desc: 'Biweekly peer support that strengthens belonging, confidence, and practical navigation of study life.',
    path: '/peer-mentoring-toolkit',
    icon: 'users'
  },
  {
    title: 'Early Alert Protocol',
    desc: 'Warm and proactive outreach when warning signs appear, with follow-up within 14 days.',
    path: '/early-alert-protocol',
    icon: 'bell'
  },
  {
    title: 'Self-Regulated Learning Guide',
    desc: 'Student-friendly planning, monitoring, and reflection tools to improve independent learning.',
    path: '/self-regulated-learning-guide',
    icon: 'compass'
  }
];

function Tools() {
  return (
    <>
      <PageHero
        icon="route"
        title="Our Three Tools"
        subtitle="One coordinated support system connecting mentoring, early alert, and learning strategy development."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Reveal as="figure" className="mb-12">
          <img
            src={chainDiagram}
            alt="Peer Mentoring, Early Alert, and Self-Regulated Learning linked together as one coordinated support system."
            className="mx-auto block h-auto w-full max-w-4xl rounded-2xl border border-white/70 bg-card/70 p-3 shadow-soft"
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <Reveal key={tool.title} delay={i * 120}>
              <Card title={tool.title} icon={tool.icon} className="relative h-full overflow-hidden">
                <p className="text-body/90">{tool.desc}</p>
                <div className="mt-6">
                  <Link
                    to={tool.path}
                    className="inline-flex items-center gap-2 rounded-full bg-royal px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-royal/90"
                  >
                    Open tool
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default Tools;