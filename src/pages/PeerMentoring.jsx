import React from 'react';
import PageHero from '../components/PageHero';
import Card from '../components/Card';

function AccordionSection({ title, children }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-t">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-left"
        aria-expanded={open}
      >
        <span className="text-lg font-semibold">{title}</span>
        <span className="ml-4 text-2xl">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="pb-4 pt-2 text-sm text-gray-700">{children}</div>}
    </div>
  );
}

function PeerMentoring() {
  const pdfPath = 'assets/DELIVERABLES/D1.pdf';

  return (
    <>
      <PageHero title="Peer Mentoring Toolkit" subtitle="Deliverable 1: peer support, check-ins, referral cues, and first-year belonging" />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-4 space-x-3">
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-royal px-4 py-2 text-white"
          >
            Open Full D1 Toolkit
          </a>

          <a
            href={pdfPath}
            download
            className="inline-flex items-center rounded-md border border-royal px-4 py-2 text-royal bg-white"
          >
            Download D1 PDF
          </a>
        </div>

        <div className="mb-6">
          <iframe
            title="D1 Peer Mentoring Toolkit"
            src={pdfPath}
            className="w-full h-[800px] border"
          />
        </div>

        <Card title="Toolkit summary">
          <p className="mb-4">Deliverable 1: Peer Mentoring Toolkit is a pilot-ready guide for strengthening first-year belonging through low-threshold peer support, short check-ins, support conversations, referral cues, and follow-up. It helps peer mentors understand their role clearly: they can welcome first-year students, listen without judgement, share transition experience, help identify one small next step, and guide students toward the right support route when needed. Peer mentors should not act as tutors, counsellors, case managers, crisis responders, or replacements for Odisee’s formal support services.</p>

          <p className="mb-4">To navigate the toolkit, start with Toolkit at a Glance for the overall support flow: peer connection, check-in, support conversation, one small next step, navigation or referral, and follow-up. Then read Purpose, Scope and Safeguards to understand how the toolkit should be used safely. Use Roles and Boundaries to clarify what peer mentors can and cannot do. Use Suggested Check-In Structure for the five-step check-in flow, and Conversation Prompts and Referral Cues for practical questions and handover guidance. The final sections include ready-to-use message templates, a peer mentor reflection form, pilot preparation steps, evaluation indicators, and references.</p>

          <p className="mb-4">Quick navigation: pages 1–2 give the overview and purpose, page 5 explains mentor roles and boundaries, page 6 gives the check-in structure, page 7 provides conversation prompts and referral cues, pages 8–9 include templates and reflection tools, and pages 10–11 explain pilot implementation and evaluation.</p>

          <AccordionSection title="Purpose, scope and safeguards">
            The toolkit strengthens first-year belonging by structuring existing buddy or peer-support practices without replacing them. It is pilot-ready and includes clear role boundaries, privacy safeguards and brief factual referral notes to keep mentoring low-burden and safe.
          </AccordionSection>

          <AccordionSection title="Design rationale">
            Built from evidence on belonging and peer mentoring, the toolkit focuses on social integration and practical help-seeking. It provides role clarity, prompts and referral cues so mentors can support transitions without taking on specialised responsibilities.
          </AccordionSection>

          <AccordionSection title="Toolkit components">
            Key components include a peer mentor role card, boundaries guide, five-step check-in structure, conversation prompts, referral cues, message templates and short reflection forms. These pieces are designed to make mentoring consistent and easy to pilot.
          </AccordionSection>

          <AccordionSection title="Roles and boundaries">
            Peer mentors listen, share experience and guide students to appropriate support but must not act as counsellors or handle crises. Programme coordinators and student coaches receive referral cues and manage staff-led follow-up.
          </AccordionSection>

          <AccordionSection title="Suggested check-in structure">
            Use a five-step flow: welcome, discuss upcoming pressures, surface the main concern, agree one small next step, and confirm the follow-up or support route. Keep check-ins short (15–30 minutes) and use them at key transition moments.
          </AccordionSection>

          <AccordionSection title="Conversation prompts & referral cues">
            Mentors use flexible prompts about belonging, study routines and practical pressures; referral cues indicate when to involve learning coaches, programme coordinators or student support services. Visible distress, repeated withdrawal, or sustained academic difficulty should be escalated promptly.
          </AccordionSection>

          <AccordionSection title="Connection to other deliverables">
            This toolkit links into the Early Alert & Follow-Up Protocol (staff-led escalation) and the First-Year Self-Regulated Learning Guide (study routines and help-seeking). Use those deliverables for formal follow-up and student-facing study guidance.
          </AccordionSection>

          <AccordionSection title="Ready-to-use templates">
            Includes short templates for first contact, follow-up messages, support navigation and concise referral notes so mentors can communicate quickly and consistently.
          </AccordionSection>

          <AccordionSection title="Pilot use & mentor preparation">
            Run a small pilot in one or two programmes: adapt contacts, select and brief mentors, run check-ins, collect short feedback and refine. Brief mentors on boundaries, privacy and when to escalate.
          </AccordionSection>

          <AccordionSection title="Pilot evaluation indicators">
            Measure student belonging, mentor confidence, referral clarity and workload feasibility using short feedback forms and mentor reflection notes during and after the pilot.
          </AccordionSection>
        </Card>
      </section>
    </>
  );
}

export default PeerMentoring;
