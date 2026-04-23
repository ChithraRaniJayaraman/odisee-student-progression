import { Link } from 'react-router-dom';
import Card from '../components/Card';
import bridgeHero from '../../Every Student Belongs Here.png';

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
      <section className="relative overflow-hidden bg-gradient-to-b from-main via-section to-lavender px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
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

        <div className="mx-auto max-w-7xl">
          <div className="mt-6 grid items-center gap-8 lg:mt-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:gap-10">
            <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
              <h1 className="font-display text-5xl font-bold leading-[0.95] text-[#2F5D50] sm:text-6xl lg:text-[5.6rem]">
                Bridging
                <br />
                the Gap
              </h1>
              <p className="mt-8 text-3xl font-semibold leading-tight text-[#1F2F2A] sm:text-4xl lg:text-[2.8rem]">
                Every Student
                <br />
                Belongs Here
              </p>
              <p className="mt-8 text-xl leading-relaxed text-ink/95 sm:text-2xl lg:text-[2rem]">
                Three evidence-based tools working together to support student success, retention, and progression at Odisee
                University of Applied Sciences.
              </p>
            </div>

            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-x-[16%] bottom-[8%] h-20 rounded-full bg-gold/35 blur-2xl" />
              <div className="relative w-full rounded-[2.25rem] border border-white/60 bg-white/22 p-3 shadow-[0_30px_80px_rgba(68,82,60,0.18)] backdrop-blur-2xl sm:p-4">
                <img
                  src={bridgeHero}
                  alt="Bridge illustration with three support pillars and student success tools"
                  className="block h-auto w-full rounded-[1.6rem] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 sm:mt-16 lg:justify-start">
            <Link
              to="/our-three-tools"
              className="rounded-full border border-[#E6C76A]/70 bg-[#E6C76A] px-8 py-3 font-semibold text-royal shadow-[0_16px_34px_rgba(224,191,106,0.24)] backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#dcb957]"
            >
              Explore the Tools
            </Link>
            <Link
              to="/implementation-plan"
              className="rounded-full border border-white/70 bg-white/55 px-8 py-3 font-semibold text-royal shadow-soft backdrop-blur-md transition duration-300 hover:bg-white/75"
            >
              View Implementation Plan
            </Link>
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
