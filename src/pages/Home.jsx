import { Link } from 'react-router-dom';
import Card from '../components/Card';
import bridgeHero from '../untitled-design-7.png';

const quickLinks = [
  { title: 'Understanding the Challenge', path: '/understanding-the-challenge' },
  { title: 'Our Three Tools', path: '/our-three-tools' },
  { title: 'Best Practices', path: '/best-practices' },
  { title: 'Implementation Plan', path: '/implementation-plan' }
];

function Home() {
  return (
    <>
      {/* Hero Section - Clean, Open, One Connected Story */}
      <section className="relative bg-gradient-to-b from-[#f8f3ed] via-[#f3ebe0] to-[#eadfce] px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          {/* University Tag - Bold and Prominent */}
          <h2 className="text-base uppercase tracking-[0.3em] text-[#233b74] sm:text-lg font-black letter-spacing-wider">
            ODISEE UNIVERSITY OF APPLIED SCIENCES -<br className="hidden sm:block" />BRUSSELS CAMPUS
          </h2>

          {/* Main Heading - "Bridging the Gap" in large elegant serif */}
          <h1 className="mt-8 font-display text-7xl sm:text-8xl lg:text-9xl font-black leading-tight text-[#233b74] tracking-tight">
            Bridging the Gap
          </h1>

          <p className="mx-auto mt-1 max-w-5xl text-xl font-black uppercase tracking-wide text-[#233b74] sm:text-2xl">
            Three evidence based tools to support success at Odisee Brussels
          </p>

          <div className="mt-0 sm:mt-1 flex justify-center">
            {/* Use the full image with a soft beige tone to match page palette */}
            <div className="w-full max-w-7xl">
              <img
                src={bridgeHero}
                alt="Bridge illustration with three support pillars and student success tools"
                className="block h-auto w-full object-contain mix-blend-multiply"
              />
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-4">
            <Link
              to="/our-three-tools"
              className="rounded-full bg-[#e79a2f] px-8 py-3 font-semibold text-white transition hover:bg-[#cc7f14] transform hover:scale-105 duration-300"
            >
              Explore the Tools
            </Link>
            <Link
              to="/implementation-plan"
              className="rounded-full border-2 border-[#233b74] bg-transparent px-8 py-3 font-semibold text-[#233b74] transition hover:bg-[#233b74] hover:text-white duration-300"
            >
              View Implementation Plan
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-8 grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <Card className="bg-gradient-to-br from-[#f8f3ed] to-[#f1e7d9]">
          <h3 className="font-display text-2xl text-royal">Every student belongs here</h3>
          <p className="text-body/90">Support built into study</p>
        </Card>
        <Card className="bg-gradient-to-br from-[#f3ebe0] to-[#eadfce]">
          <h3 className="font-display text-2xl text-royal">3 Tools</h3>
          <p className="text-body/90">One integrated system</p>
          <p className="text-sm uppercase tracking-wider text-orange">Mentoring - Alert - Learning</p>
        </Card>
        <Card className="bg-gradient-to-br from-[#f8f3ed] to-[#efe4d4]">
          <h3 className="font-display text-2xl text-royal">High potential, targeted support</h3>
          <p className="text-body/90">Right help, right time</p>
        </Card>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#f8f3ed] to-[#eee3d2] p-8 shadow-soft">
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
              className="rounded-2xl border border-royal/15 bg-gradient-to-br from-[#f8f3ed] to-[#eee3d2] p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <h3 className="font-display text-2xl text-royal">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">Open section</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-orange/30 bg-gradient-to-br from-[#f3ebe0] to-[#e8dccb] p-8 text-center">
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
