import Card from '../components/Card';
import PageHero from '../components/PageHero';

function Challenge() {
  return (
    <>
      <PageHero
        title="Understanding the Challenge"
        subtitle="A strengths-based analysis of why proactive support is essential for student progression in Brussels."
      />
      <section className="mx-auto max-w-7xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Why Odisee Brussels">
            <p>
              Odisee Brussels is a vibrant campus where learners bring multilingual assets, resilience, and motivation.
              The campus context also includes complex transitions into higher education, especially for first-generation students.
            </p>
          </Card>
          <Card title="Why the Project Matters Now">
            <p>
              Small barriers can become cumulative setbacks. Bridging the Gap responds with early, coordinated support before
              disengagement becomes departure.
            </p>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Brussels Higher Education Context">
            <p>High diversity and high potential require support systems that are coordinated, culturally responsive, and human.</p>
          </Card>
          <Card title="First-Generation Students">
            <p>Many students are the first in their family to navigate university systems, procedures, and expectations.</p>
          </Card>
          <Card title="Multilingual and Migrant-Background Learners">
            <p>Language, identity, and belonging interact with academic adaptation; support should build on strengths, not deficits.</p>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Financial Pressure and Barriers">
            <p>Housing, commuting costs, and work-study balance can quietly affect attendance, confidence, and continuity.</p>
          </Card>
          <Card title="Belonging and Connection">
            <p>
              Belonging is a core academic resource. Students persist when they feel seen, connected, and supported by people
              and systems that act early.
            </p>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Individual Factors" className="bg-lavender/10">
            <ul className="list-disc space-y-2 pl-5">
              <li>Self-confidence, study habits, wellbeing, and social support</li>
              <li>Time management, feedback use, and help-seeking behavior</li>
              <li>Transition literacy: understanding how higher education works</li>
            </ul>
          </Card>
          <Card title="Institutional Factors" className="bg-emerald/10">
            <ul className="list-disc space-y-2 pl-5">
              <li>Clarity of communication and programme expectations</li>
              <li>Access to timely guidance and warm referral pathways</li>
              <li>Coordination across mentors, lecturers, and support services</li>
            </ul>
          </Card>
        </div>

        <Card title="Need for Proactive Support">
          <p>
            The aim is not to monitor students, but to build confidence through timely support, practical tools, and coordinated
            care. Every student is capable; structured support helps capability translate into sustained success.
          </p>
        </Card>
      </section>
    </>
  );
}

export default Challenge;
