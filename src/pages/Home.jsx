import { Link } from 'react-router-dom';
import Card from '../components/Card';
import bridgeHero from '../bridge-hero.png.png';

const quickLinks = [
  { title: 'Understanding the Challenge', path: '/understanding-the-challenge' },
  { title: 'Our Three Tools', path: '/our-three-tools' },
  { title: 'Best Practices', path: '/best-practices' },
  { title: 'Implementation Plan', path: '/implementation-plan' }
];

function Home() {
  return (
    <>
      <section className="bg-section px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-main px-6 py-10 shadow-soft sm:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted sm:text-sm">ODISEE UNIVERSITY OF APPLIED SCIENCES - BRUSSELS CAMPUS</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-royal sm:text-6xl lg:text-7xl">Bridging the Gap</h1>
          <p className="mx-auto mt-5 max-w-3xl text-xl text-body sm:text-2xl">
            Supporting student success through connection, timely guidance, and self-directed learning.
          </p>
          <p className="mt-4 text-lg text-muted">Three evidence-based tools for Odisee Brussels.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/our-three-tools" className="rounded-full bg-orange px-7 py-3 font-semibold text-white transition hover:bg-orange-hover">
              Explore the Tools
            </Link>
            <Link to="/implementation-plan" className="rounded-full border border-royal/20 bg-white px-7 py-3 font-semibold text-royal transition hover:bg-section">
              View Implementation Plan
            </Link>
          </div>
          <div className="mt-10 flex justify-center">
            <img
              src={bridgeHero}
              alt="Bridge illustration with three support pillars and student success tools"
              className="h-auto w-full max-w-4xl rounded-2xl object-cover shadow-card"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-8 grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <Card>
          <h3 className="font-display text-2xl text-royal">Every student belongs here</h3>
          <p className="text-body/90">Support built into study</p>
        </Card>
        <Card className="bg-section">
          <h3 className="font-display text-2xl text-royal">3 Tools</h3>
          <p className="text-body/90">One integrated system</p>
          <p className="text-sm uppercase tracking-wider text-orange">Mentoring - Alert - Learning</p>
        </Card>
        <Card>
          <h3 className="font-display text-2xl text-royal">High potential, targeted support</h3>
          <p className="text-body/90">Right help, right time</p>
        </Card>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <h2 className="text-center font-display text-4xl text-royal">Welcome to the Guide</h2>
          <p className="mx-auto mt-4 max-w-5xl text-center text-lg text-body/90">
            This guide is designed for students, lecturers, peer mentors, programme coordinators, and campus leadership.
            Odisee Brussels serves a diverse student community with strong potential, rich multilingual identities, and high
            motivation. Students deserve the right support at the right moment to sustain progress and belonging.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-4xl text-royal">Quick Navigation</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {quickLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="rounded-2xl border border-royal/15 bg-white p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <h3 className="font-display text-2xl text-royal">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">Open section</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-orange/30 bg-section p-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">Inspired by previous year</p>
          <h2 className="mt-2 font-display text-3xl text-royal">GO! Scholengroep Brussel Inclusive Education Project (2025)</h2>
          <p className="mx-auto mt-3 max-w-4xl text-body/90">
            This website builds forward from the clarity and inclusive spirit of that project while presenting a distinct,
            Odisee-specific student success platform with coordinated tools for mentoring, proactive alerts, and self-regulated learning.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
