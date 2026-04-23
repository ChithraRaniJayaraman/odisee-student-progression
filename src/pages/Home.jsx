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

  const shineStars = [
    { top: '14%', left: '18%', delay: '0.15s', size: 16 },
    { top: '20%', left: '36%', delay: '0.75s', size: 18 },
    { top: '12%', left: '58%', delay: '0.4s', size: 15 },
    { top: '18%', left: '78%', delay: '1.05s', size: 17 },
    { top: '28%', left: '88%', delay: '0.3s', size: 16 },
    { top: '30%', left: '9%', delay: '0.9s', size: 15 }
  ];

  return (
    <>
      {/* Hero Section - Clean, Open, One Connected Story */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#dcebd9] via-main to-section px-3 py-8 text-center sm:px-5 lg:px-6 lg:py-10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <span className="hero-blob hero-blob-one" />
          <span className="hero-blob hero-blob-two" />
          <span className="hero-blob hero-blob-three" />

          {shineStars.map((star, index) => (
            <span
              key={`star-${index}`}
              className="gold-star"
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: star.delay
              }}
            />
          ))}

          {sparkleDots.map((dot, index) => (
            <span
              key={`${dot.top}-${dot.left}-${index}`}
              className={`absolute ${dot.size} animate-pulse rounded-full bg-gold/70 shadow-[0_0_14px_rgba(208,154,97,0.65)]`}
              style={{ top: dot.top, left: dot.left, animationDelay: dot.delay }}
            />
          ))}
        </div>

        <div className="mx-auto max-w-[1440px]">
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-x-[10%] bottom-[6%] h-24 rounded-full bg-gold/45 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-[8%] top-[12%] h-24 rounded-full bg-emerald/45 blur-3xl" />
            <div className="relative w-full rounded-[2.35rem] border border-white/70 bg-white/28 p-3 shadow-[0_36px_90px_rgba(56,86,64,0.24)] backdrop-blur-2xl sm:p-4">
              <img
                src={bridgeHero}
                alt="Bridge illustration with three support pillars and student success tools"
                className="block h-auto w-full rounded-[1.8rem] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-8 grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <Card className="bg-gradient-to-br from-main/85 to-section/85">
          <h3 className="font-display text-2xl text-royal">Every student belongs here</h3>
          <p className="text-body/90">Support built into study</p>
        </Card>
        <Card className="bg-gradient-to-br from-section/85 to-lavender/85">
          <h3 className="font-display text-2xl text-royal">3 Tools</h3>
          <p className="text-body/90">One integrated system</p>
          <p className="text-sm uppercase tracking-wider text-orange">Mentoring - Alert - Learning</p>
        </Card>
        <Card className="bg-gradient-to-br from-main/85 to-section/85">
          <h3 className="font-display text-2xl text-royal">High potential, targeted support</h3>
          <p className="text-body/90">Right help, right time</p>
        </Card>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/60 bg-white/55 p-8 shadow-soft backdrop-blur-xl">
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
              className="rounded-3xl border border-white/55 bg-white/55 p-6 text-center shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/70 hover:shadow-card"
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
