import { Link } from 'react-router-dom';
import Card from '../components/Card';
import bridgeHero from '../../FINAL HERO IMAGE FOR ODISEE.png';

const quickLinks = [
  { title: 'Understanding the Challenge', path: '/understanding-the-challenge' },
  { title: 'Our Three Tools', path: '/our-three-tools' },
  { title: 'Best Practices', path: '/best-practices' },
  { title: 'Implementation Plan', path: '/implementation-plan' }
];

function Home() {
  const sparkleDots = [
    { top: '12%', left: '8%', size: 'h-1.5 w-1.5', delay: '0s' },
    { top: '18%', left: '22%', size: 'h-2 w-2', delay: '0.4s' },
    { top: '10%', left: '74%', size: 'h-1.5 w-1.5', delay: '0.7s' },
    { top: '26%', left: '88%', size: 'h-2 w-2', delay: '0.2s' },
    { top: '42%', left: '14%', size: 'h-1.5 w-1.5', delay: '0.9s' },
    { top: '48%', left: '81%', size: 'h-1.5 w-1.5', delay: '0.5s' },
    { top: '62%', left: '30%', size: 'h-2 w-2', delay: '0.3s' },
    { top: '68%', left: '67%', size: 'h-1.5 w-1.5', delay: '0.8s' }
  ];

  return (
    <>
      {/* Hero Section - Clean, Open, One Connected Story */}
      <section className="relative bg-gradient-to-b from-main via-section to-lavender px-4 py-10 text-center sm:px-6 lg:px-8 lg:py-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {sparkleDots.map((dot, index) => (
            <span
              key={`${dot.top}-${dot.left}-${index}`}
              className={`absolute ${dot.size} animate-pulse rounded-full bg-gold/70 shadow-[0_0_14px_rgba(208,154,97,0.65)]`}
              style={{ top: dot.top, left: dot.left, animationDelay: dot.delay }}
            />
          ))}
        </div>

        <div className="mx-auto max-w-5xl">
          {/* University Tag - Bold and Prominent */}
          <h2 className="text-base uppercase tracking-[0.3em] text-royal sm:text-lg font-black letter-spacing-wider">
            ODISEE UNIVERSITY OF APPLIED SCIENCES -<br className="hidden sm:block" />BRUSSELS CAMPUS
          </h2>

          <h1 className="mt-8 font-display text-4xl font-black leading-tight text-royal tracking-tight sm:text-5xl lg:text-6xl">
            Bridging the Gap
          </h1>
          <p className="mx-auto mt-3 max-w-5xl text-base font-black uppercase tracking-wide text-royal sm:text-lg lg:text-xl">
            Three evidence based tools to support success at Odisee Brussels
          </p>

          <div className="mt-4 flex justify-center sm:mt-6">
            <div className="w-full max-w-7xl">
              <img
                src={bridgeHero}
                alt="Bridge illustration with three support pillars and student success tools"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-4">
            <Link
              to="/our-three-tools"
              className="rounded-full bg-orange px-8 py-3 font-semibold text-ivory transition duration-300 hover:scale-105 hover:bg-orange-hover"
            >
              Explore the Tools
            </Link>
            <Link
              to="/implementation-plan"
              className="rounded-full border-2 border-royal bg-transparent px-8 py-3 font-semibold text-royal transition duration-300 hover:bg-royal hover:text-ivory"
            >
              View Implementation Plan
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-8 grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <Card className="bg-gradient-to-br from-main to-section">
          <h3 className="font-display text-2xl text-royal">Every student belongs here</h3>
          <p className="text-body/90">Support built into study</p>
        </Card>
        <Card className="bg-gradient-to-br from-section to-lavender">
          <h3 className="font-display text-2xl text-royal">3 Tools</h3>
          <p className="text-body/90">One integrated system</p>
          <p className="text-sm uppercase tracking-wider text-orange">Mentoring - Alert - Learning</p>
        </Card>
        <Card className="bg-gradient-to-br from-main to-section">
          <h3 className="font-display text-2xl text-royal">High potential, targeted support</h3>
          <p className="text-body/90">Right help, right time</p>
        </Card>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-main to-section p-8 shadow-soft">
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
              className="rounded-2xl border border-lavender/55 bg-gradient-to-br from-main to-section p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <h3 className="font-display text-2xl text-royal">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">Open section</p>
            </Link>
          ))}
        </div>
      </section>

    </>
  );
}

export default Home;
