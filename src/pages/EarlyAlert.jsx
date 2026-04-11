import Card from '../components/Card';
import PageHero from '../components/PageHero';

function EarlyAlert() {
  return (
    <>
      <PageHero
        title="Early Alert Protocol"
        subtitle="A warm, human-centered intervention pathway focused on early signals, coordinated response, and timely follow-up."
      />
      <section className="mx-auto max-w-7xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
        <Card title="What Is the Early Alert Protocol?">
          <p>
            The protocol identifies risk signals early and triggers supportive outreach. It is proactive support, not surveillance.
            Language remains respectful, strengths-based, and practical.
          </p>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Warning Signs">
            <ul className="list-disc space-y-2 pl-5">
              <li>Repeated absences or missed sessions</li>
              <li>Sudden drop in assignment submission</li>
              <li>Withdrawal from communication</li>
              <li>Visible stress, overwhelm, or confusion</li>
            </ul>
          </Card>
          <Card title="The Traffic Light System" className="bg-lavender/10">
            <p><strong>Green:</strong> minor concern, monitor and encourage.</p>
            <p><strong>Amber:</strong> emerging pattern, initiate structured check-in.</p>
            <p><strong>Red:</strong> significant risk, coordinated action and rapid support referral.</p>
          </Card>
        </div>

        <Card title="The Five-Step Protocol">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Notice and log early signal</li>
            <li>Warm contact with student (no blame language)</li>
            <li>Jointly identify immediate barriers and priorities</li>
            <li>Connect student to relevant support pathway</li>
            <li>Follow-up within 14 days to confirm progress</li>
          </ol>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Where It Has Worked">
            <p>
              International practice shows early alerts are strongest when data signals are paired with personal outreach and clear referral pathways.
            </p>
          </Card>
          <Card title="SMART Criteria">
            <p>Targeted risk signals, measurable outreach timelines, and time-bound follow-up within 14 days.</p>
          </Card>
        </div>

        <Card title="Strengths and Threats to Manage">
          <p><strong>Strengths:</strong> faster response, reduced drift, shared accountability.</p>
          <p><strong>Threats:</strong> inconsistent communication tone, delayed follow-up, role confusion across teams.</p>
        </Card>
      </section>
    </>
  );
}

export default EarlyAlert;
