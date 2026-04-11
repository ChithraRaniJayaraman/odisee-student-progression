import { Link } from 'react-router-dom';
import Card from '../components/Card';
import HomeVisualEffect from '../components/HomeVisualEffect';

const quickLinks = [
  { title: 'Understanding the Challenge', path: '/understanding-the-challenge' },
  { title: 'Our Three Tools', path: '/our-three-tools' },
  { title: 'Best Practices', path: '/best-practices' },
  { title: 'Implementation Plan', path: '/implementation-plan' }
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src="/images/odisee-building.jpg"
          alt="Odisee Brussels campus building"
          className="h-[75vh] min-h-[530px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal/85 via-royal/60 to-emerald/35" aria-hidden="true" />
        <HomeVisualEffect />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl rounded-3xl border border-white/30 bg-white/10 p-8 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-lavender">ODISEE UNIVERSITY OF APPLIED SCIENCES - BRUSSELS CAMPUS</p>
              <h1 className="mt-3 font-display text-5xl leading-tight text-ivory sm:text-6xl">Bridging the Gap</h1>
              <p className="mt-3 text-xl text-ivory/95">A Student Success Guide for Odisee Brussels</p>
              <p className="mt-4 max-w-2xl text-ivory/90">
                Three evidence-based tools to support every student at Odisee Brussels.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/our-three-tools" className="rounded-full bg-orange px-6 py-3 font-semibold text-white transition hover:bg-orange/90">
                  Explore the Tools
                </Link>
                <Link to="/implementation-plan" className="rounded-full border border-ivory/80 bg-transparent px-6 py-3 font-semibold text-ivory transition hover:bg-white/15">
                  View Implementation Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-10 grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <Card className="bg-white/95">
          <h3 className="font-display text-2xl text-royal">Every student belongs here</h3>
          <p className="text-ink/80">Support built into study</p>
        </Card>
        <Card className="bg-lavender/10">
          <h3 className="font-display text-2xl text-royal">3 Tools</h3>
          <p className="text-ink/80">One integrated system</p>
          <p className="text-sm uppercase tracking-wider text-emerald">Mentoring · Alert · Learning</p>
        </Card>
        <Card className="bg-white/95">
          <h3 className="font-display text-2xl text-royal">High potential, targeted support</h3>
          <p className="text-ink/80">Right help, right time</p>
        </Card>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-soft lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-royal">Welcome to the Guide</h2>
            <p className="mt-4 text-lg text-ink/85">
              This guide is designed for students, lecturers, peer mentors, programme coordinators, and campus leadership.
              Odisee Brussels serves a diverse student community with strong potential, rich multilingual identities, and high
              motivation. Students deserve the right support at the right moment to sustain progress and belonging.
            </p>
          </div>
          <img
            src="/images/odisee-building.jpg"
            alt="Campus context at Odisee Brussels"
            className="h-72 w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl text-royal">Quick Navigation</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {quickLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="rounded-2xl border border-royal/15 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <h3 className="font-display text-2xl text-royal">{item.title}</h3>
              <p className="mt-2 text-sm text-ink/70">Open section</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-lavender/50 bg-gradient-to-r from-lavender/30 to-ivory p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-royal/75">Inspired by previous year</p>
          <h2 className="mt-2 font-display text-3xl text-royal">GO! Scholengroep Brussel Inclusive Education Project (2025)</h2>
          <p className="mt-3 max-w-4xl text-ink/85">
            This website builds forward from the clarity and inclusive spirit of that project while presenting a distinct,
            Odisee-specific student success platform with coordinated tools for mentoring, proactive alerts, and self-regulated learning.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
