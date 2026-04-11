import Card from '../components/Card';
import PageHero from '../components/PageHero';

function PeerMentoring() {
  return (
    <>
      <PageHero
        title="Peer Mentoring Toolkit"
        subtitle="A structured, relationship-based programme that interrupts disengagement and supports student belonging."
      />
      <section className="mx-auto max-w-7xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
        <Card title="What Is Peer Mentoring?">
          <p>
            Peer mentoring connects first-year students with trained second-year mentors for biweekly one-to-one sessions.
            It is a safe, practical space for questions, encouragement, and next-step planning.
          </p>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Why Peer Mentoring Works">
            <p>Evidence consistently links peer mentoring with stronger belonging, confidence, and persistence.</p>
            <p>Mentors also gain leadership, communication, and deeper academic mastery through guided support.</p>
          </Card>
          <Card title="How the Programme Works">
            <ul className="list-disc space-y-2 pl-5">
              <li>Biweekly sessions with a five-step meeting structure</li>
              <li>Head mentor check-ins to support mentor quality</li>
              <li>Clear escalation pathway to coordinator when needed</li>
            </ul>
          </Card>
        </div>

        <Card title="What Mentors Gain" className="bg-lavender/10">
          <ul className="grid gap-3 md:grid-cols-2">
            <li>Certificate of participation for CV</li>
            <li>Leadership identity and confidence</li>
            <li>Communication and listening practice</li>
            <li>Meaningful contribution to student success</li>
          </ul>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="SMART Criteria">
            <ul className="list-disc space-y-2 pl-5">
              <li>Specific: biweekly mentoring for first-year mentees</li>
              <li>Measurable: attendance, reflections, mentee feedback</li>
              <li>Achievable: uses existing students and spaces</li>
              <li>Relevant: tackles belonging and transition barriers</li>
              <li>Time-bound: full academic-year cycle with checkpoints</li>
            </ul>
          </Card>
          <Card title="Strengths and Challenges">
            <p><strong>Strengths:</strong> trust, relatability, low-cost implementation.</p>
            <p><strong>Challenges:</strong> mentor consistency, scope boundaries, escalation confidence.</p>
          </Card>
        </div>
      </section>
    </>
  );
}

export default PeerMentoring;
