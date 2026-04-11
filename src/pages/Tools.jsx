import { Link } from 'react-router-dom';
import Card from '../components/Card';
import PageHero from '../components/PageHero';

const tools = [
  {
    title: 'Peer Mentoring Toolkit',
    desc: 'Biweekly peer support that strengthens belonging, confidence, and practical navigation of study life.',
    path: '/peer-mentoring-toolkit'
  },
  {
    title: 'Early Alert Protocol',
    desc: 'Warm and proactive outreach when warning signs appear, with follow-up within 14 days.',
    path: '/early-alert-protocol'
  },
  {
    title: 'Self-Regulated Learning Guide',
    desc: 'Student-friendly planning, monitoring, and reflection tools to improve independent learning.',
    path: '/self-regulated-learning-guide'
  }
];

function Tools() {
  return (
    <>
      <PageHero
        title="Our Three Tools"
        subtitle="One coordinated support system connecting mentoring, early alert, and learning strategy development."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {tools.map((tool) => (
            <Card key={tool.title} title={tool.title} className="relative overflow-hidden">
              <p>{tool.desc}</p>
              <Link
                to={tool.path}
                className="mt-4 inline-block rounded-full bg-royal px-5 py-2 text-sm font-semibold text-ivory transition hover:bg-emerald"
              >
                Open tool
              </Link>
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-lavender/25" aria-hidden="true" />
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

export default Tools;
