import PageHero from '../components/PageHero';
import ToolkitAccordion, { Tbl, Note, Template, SubHeading, Flow } from '../components/ToolkitAccordion';

const sections = [
  {
    id: 'glance',
    title: 'Protocol at a Glance',
    content: (
      <>
        <Flow
          steps={[
            'Visible signal',
            'Green / Amber / Red',
            'Warm check-in',
            'Connect to support',
            '7–14 day follow-up'
          ]}
        />
        <Tbl
          head={['Step', 'Simple logic']}
          rows={[
            ['1', 'Visible concern signal appears.'],
            ['2', 'Concern level is considered: Green, Amber or Red.'],
            ['3', 'A warm check-in is made where appropriate.'],
            ['4', 'The student is connected to an appropriate support route if needed.'],
            ['5', 'A 7–14 day follow-up, closure, monitoring or handover is recorded.']
          ]}
        />
        <SubHeading>Intended users</SubHeading>
        <p>
          Lecturers, student coaches, learning coaches, programme coordinators or designated implementation leads, and
          student support services involved in first-year student support at Odisee Brussels. Peer mentors use only the
          referral-cue elements when a concern appears during peer support.
        </p>
        <SubHeading>When it is used</SubHeading>
        <p>
          When visible academic, engagement or practical concern signals appear, such as repeated absence, missed
          deadlines, non-response, withdrawal from participation, visible stress, or difficulty keeping up with
          coursework.
        </p>
        <Note title="This protocol is not">
          A surveillance system; a disciplinary procedure; a replacement for student support services; a requirement
          for lecturers or peer mentors to solve specialised concerns alone.
        </Note>
      </>
    )
  },
  {
    id: 'purpose',
    title: 'Purpose, Scope and Safeguards',
    content: (
      <>
        <p>
          The protocol helps Odisee Brussels respond earlier to visible signs of first-year disengagement. It supports
          lecturers in noticing concern signals, student coaches in first contact, intake and redirection, and learning
          coaches, programme coordinators and student support services in connecting students to the most appropriate
          support route. The aim is to prevent temporary academic or practical difficulties from becoming silent
          withdrawal, while keeping the process manageable for staff and supportive for students.
        </p>
        <p>
          It is intended for a small pilot in one or two first-year programmes and does not require a new digital
          monitoring system. It can be implemented with existing communication channels, a short concern note and a
          simple tracking sheet. Digital automation or LMS integration may be considered later.
        </p>
        <Tbl
          head={['Safeguard', 'How it is applied']}
          rows={[
            ['Care, not control', 'Early contact is framed as a support invitation, not a warning, punishment or judgement. Messages use clear, accessible, non-judgemental language, with Dutch, French or English adaptations where appropriate.'],
            ['Visible signals only', 'The protocol is based on observable academic or engagement-related signs. It does not require staff or mentors to collect sensitive personal information.'],
            ['Low-burden documentation', 'Concern notes are short, factual and limited to what is needed for follow-up or referral. Access is limited to the relevant coordinator and support actors directly involved.'],
            ['Student autonomy', 'Students may accept support, decline support or choose which route feels appropriate. Declining support is not misconduct and being contacted creates no academic penalty.'],
            ['Clear boundaries', 'Lecturers and peer mentors are not counsellors, case managers or crisis responders. Student coaches provide first contact, intake and redirection, not long-term in-depth support.'],
            ['Single contact point', 'Where possible, one person coordinates the first contact to avoid repeated or confusing messages to the student.']
          ]}
        />
      </>
    )
  },
  {
    id: 'rationale',
    title: 'Design Rationale: Evidence to Design',
    content: (
      <>
        <p>
          The design logic is simple: if early concern signals are noticed earlier, and students receive a warm,
          low-pressure support invitation, Odisee can connect students to appropriate support before temporary
          difficulties become silent withdrawal or preventable dropout, while keeping outreach feasible for staff.
        </p>
        <Tbl
          head={['Evidence source', 'Key insight', 'Design response']}
          rows={[
            ["Retention literature, including Tinto's perspective", 'Persistence is shaped by academic and social integration and institutional support. Disengagement can develop gradually before dropout.', 'An institutional support routine for noticing early concern signals and connecting students to support.'],
            ['Early alert and proactive outreach literature (Arnold & Pistilli, 2012; Villano et al., 2018)', 'Early identification and timely outreach help institutions respond before academic difficulty becomes severe.', 'An early concern signals checklist, concern levels and a 7–14 day follow-up routine.'],
            ['Help-seeking literature (Karabenick & Knapp, 1991)', 'Students do not always ask for help; help-seeking can be delayed by uncertainty, embarrassment or not knowing where to go.', 'Warm, non-judgemental messages that link students to peer mentoring or support navigation rather than waiting for self-referral.'],
            ['Odisee partner and stakeholder input', 'First-year study efficiency must improve, but staff workload must remain manageable.', 'Lecturers only notice visible signals; student coaches handle intake and redirection; learning coaches, trajectory counsellors, language coaches and support services each keep their role.'],
            ['Limited informal student input', 'Support may be available, but individual difficulties can remain unnoticed unless students speak up.', 'The protocol enables low-burden check-ins when repeated concern signals become visible, rather than waiting for formal help requests.'],
            ['Field visit and feasibility considerations', "Support tools must fit Odisee's existing capacity and not duplicate services.", 'Existing communication channels, short concern notes and referral to existing support actors rather than a separate monitoring system.']
          ]}
        />
      </>
    )
  },
  {
    id: 'signals',
    title: 'Early Concern Signals Checklist',
    content: (
      <>
        <p>
          This checklist helps staff notice visible signs that a first-year student may be becoming disengaged. A
          single signal does not automatically mean a student is at risk. The protocol is based on patterns, repeated
          signals or combinations of concerns. It is a support tool, not a judgement tool.
        </p>
        <Tbl
          head={['Signal area', 'Visible concern signals']}
          rows={[
            ['Attendance and participation', 'Repeated absence from class or mentoring sessions; sudden decline in participation; leaving group work unfinished; withdrawing from class interaction.'],
            ['Coursework and deadlines', 'Repeated missed deadlines; incomplete assignments; sudden decline in quality of submitted work; difficulty keeping up with weekly tasks or assessment preparation.'],
            ['Communication and responsiveness', 'No response to repeated programme messages; sudden silence after earlier participation; difficulty confirming meetings; repeated missed appointments.'],
            ['Academic adjustment', 'Difficulty understanding expectations; confusion about independent study; repeated problems with planning, workload or exam preparation.'],
            ['Practical pressures', 'Commuting difficulties, work pressure, financial pressure, housing pressure or difficulty balancing study with other responsibilities.'],
            ['Belonging and social connection', 'Student appears isolated, disconnected from peers, reluctant to ask questions, or uncertain whether support is meant for them.'],
            ['Wellbeing or urgent concern', "Visible distress, crisis disclosure, serious concern raised by a peer mentor, or signs the student may need specialised support. Urgent concerns are referred promptly according to Odisee's internal procedures."]
          ]}
        />
        <Note title="Use patterns, not assumptions">
          One missed class or one late assignment should not automatically trigger an alert. A supportive check-in
          becomes appropriate when signals are repeated, combined, or noticeably different from the student&apos;s
          usual engagement pattern.
        </Note>
        <SubHeading>Before recording a concern, ask</SubHeading>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>What did I actually observe?</li>
          <li>Is this a repeated or combined signal?</li>
          <li>Would a warm check-in be supportive rather than intrusive?</li>
          <li>Is this something I can handle through a simple message, or should it be referred?</li>
        </ul>
      </>
    )
  },
  {
    id: 'levels',
    title: 'Concern Levels and Five-Step Workflow',
    content: (
      <>
        <p>
          Concern levels help decide what response is proportionate. They are not labels for students. They are a
          manual guide for deciding whether to monitor, check in, or refer. No automated or colour-coded digital system
          is required.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-royal/20 bg-lavender/70 p-5">
            <p className="font-display text-lg text-royal">Green: Monitor</p>
            <p className="mt-2 text-sm">
              One isolated signal, such as one missed class or one late task. No formal follow-up needed yet; continue
              normal contact and observe.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald/70 bg-emerald/18 p-5">
            <p className="font-display text-lg text-royal">Amber: Warm check-in</p>
            <p className="mt-2 text-sm">
              Repeated or combined signals: two or more missed sessions, repeated late work, non-response, visible
              stress or withdrawal. A supportive, non-judgemental check-in within one week.
            </p>
          </div>
          <div className="rounded-2xl border border-royal/30 bg-royal/8 p-5">
            <p className="font-display text-lg text-royal">Red: Urgent referral</p>
            <p className="mt-2 text-sm">
              Serious or urgent concern: complete disappearance, crisis disclosure, severe distress, immediate dropout
              risk. Refer promptly to the student coach, coordinator or support services. Never handled alone.
            </p>
          </div>
        </div>
        <SubHeading>Five-step workflow</SubHeading>
        <Tbl
          head={['Step', 'Action', 'Description']}
          rows={[
            ['1. Notice', 'Identify a visible concern signal.', 'A lecturer, student coach, coordinator or peer mentor notices a visible concern signal. Peer mentors pass cues to the student coach or coordinator rather than operating the protocol independently.'],
            ['2. Record briefly', 'Use a short factual concern note.', 'Describe what was observed, when it happened, and whether it is repeated or combined with other signals.'],
            ['3. Reach out warmly', 'Send a supportive first message.', 'One appropriate contact person sends a warm, non-judgemental message making clear this is a support invitation, not a formal warning.'],
            ['4. Connect to support', 'Guide the student to the right route.', 'Peer mentor, student coach, learning coach, lecturer, trajectory counsellor, language coach, study support, student support services or the Self-Regulated Learning Guide.'],
            ['5. Follow up or close', 'Check status within 7–14 days.', 'Check whether the student responded, was referred, or no longer needs follow-up. Close, monitor, or hand over to the appropriate support actor.']
          ]}
        />
        <Note title="Mini flow">
          Visible signal &rarr; Green, Amber or Red &rarr; monitor, warm check-in or urgent referral &rarr; connect to
          support &rarr; 7–14 day follow-up &rarr; close, monitor or hand over.
        </Note>
      </>
    )
  },
  {
    id: 'roles',
    title: 'Roles, Boundaries and Special Situations',
    content: (
      <>
        <p>
          The aim is to distribute follow-up across the first-year support pathway, rather than placing full
          responsibility on lecturers or peer mentors. Lecturers handle subject-related questions and visible signals;
          student coaches conduct intake and redirect; learning coaches support learning strategies and study habits;
          trajectory counsellors support study-path questions; language coaches support language barriers; buddy or
          peer-support actors provide low-threshold connection; coordinators prevent duplicated follow-up.
        </p>
        <Tbl
          head={['Actor', 'Main responsibility', 'Boundary']}
          rows={[
            ['Lecturers', 'Notice visible academic or engagement signals, answer subject-related questions, pass repeated or serious cues to the student coach or coordinator. May initiate a warm check-in where locally appropriate.', 'Not expected to diagnose personal problems, act as counsellors, or manage ongoing cases alone.'],
            ['Peer mentor', 'Provide low-threshold relational support; help students interpret support options; encourage help-seeking; share concern cues with staff where appropriate.', 'Do not handle urgent, specialised or crisis concerns alone; should not promise confidentiality when safety is involved.'],
            ['Programme coordinator / implementation lead', 'Coordinate the pilot; receive Amber or Red concerns; prevent duplicated contact; check follow-up and referral; review patterns after the pilot.', 'Does not need to solve every concern personally, but ensures the right support actor is involved.'],
            ['Student support services', 'Provide specialised support for wellbeing, financial or practical needs; advise on referral routes.', 'Not responsible for noticing every early classroom signal. The protocol helps make those signals visible earlier.'],
            ['Student', 'Receives a support invitation; may accept, decline or choose a preferred route; may explain the situation if they wish.', 'Not punished for being contacted; declining support is not misconduct.']
          ]}
        />
        <SubHeading>Special situations</SubHeading>
        <Tbl
          head={['Situation', 'Recommended response']}
          rows={[
            ['No response after first contact', 'Send one follow-up message within 7 days. If still no response and signals continue, inform the coordinator or continue monitoring depending on the concern level.'],
            ['Student declines support', 'Respect the decision. Share one clear support route for later. Record "support declined" and close or monitor without penalty.'],
            ['Student explains a practical reason', 'If temporary (illness, commuting, family responsibility), provide relevant support information and close or monitor the concern.'],
            ['Student is already receiving support', 'Avoid duplicate intervention. Confirm a support actor is involved and record only what is necessary.'],
            ['Multiple signals across courses or settings', 'The coordinator reviews whether a pattern exists across contexts, with student coaches supporting intake and redirection. Avoid over-collecting personal information.'],
            ['Urgent or specialised concern', "Refer promptly according to Odisee's internal procedures. Lecturers and peer mentors do not handle serious wellbeing, safety or crisis disclosure alone."]
          ]}
        />
        <Note title="Connection to the other deliverables">
          The Peer Mentoring Toolkit (D1) provides a low-threshold relational route for warm check-ins where
          appropriate. The First-Year Self-Regulated Learning Guide (D3) provides student-facing guidance on study
          routines, help-seeking and where to go for academic, practical or personal support.
        </Note>
      </>
    )
  },
  {
    id: 'templates',
    title: 'Ready-to-Use Templates',
    content: (
      <>
        <p>These templates can be adapted to Odisee Brussels&apos; communication channels and programme context.</p>
        <Template title="Template 1: Warm first check-in message">
          {`Hi [Name], I noticed that you have missed a few recent [sessions / deadlines / check-ins] and wanted to check in. Is everything manageable at the moment?

If useful, I can help you find the right person or support route to contact. This is only a support check-in, not a formal warning.

Best, [Name]`}
        </Template>
        <Template title="Template 2: Follow-up after no response">
          {`Hi [Name], I just wanted to follow up on my previous message. You do not need to explain everything, but if you need support with attendance, deadlines, study planning or personal circumstances, we can help you find the right contact point.

You can reply to this message, contact your peer mentor, or use the First-Year Self-Regulated Learning Guide shared with first-year students.

Best, [Name]`}
        </Template>
        <Template title="Template 3: Referral suggestion message">
          {`Hi [Name], thank you for letting me know. Based on what you described, it may be useful to contact [support route / student coach / learning coach / lecturer / trajectory counsellor / language coach / student support services].

They can help with [brief description of support]. If you want, I can help you find the contact details or explain what to expect.

Best, [Name]`}
        </Template>
        <Template title="Template 4: Student declines support">
          {`Hi [Name], thank you for replying. I respect your decision. I will not follow up further about this unless another concern comes up.

If you need support later, you can contact [support route] or use the First-Year Self-Regulated Learning Guide.

Best, [Name]`}
        </Template>
        <SubHeading>Template 5: Urgent referral note</SubHeading>
        <Tbl
          head={['Field', 'Information to record']}
          rows={[
            ['Student code/name', ' '],
            ['Date', ' '],
            ['Concern level', ' '],
            ['Visible concern observed', ' '],
            ['Why urgent or specialised support may be needed', ' '],
            ['First contact already made?', 'Yes / No'],
            ['Student response, if any', ' '],
            ['Suggested referral route', ' '],
            ['Person submitting note', ' ']
          ]}
        />
        <SubHeading>Simple concern note template</SubHeading>
        <Tbl
          head={['Field', 'Information to record']}
          rows={[
            ['Student code/name', ' '],
            ['Date', ' '],
            ['Observed concern signal', ' '],
            ['Signal area', 'Attendance / Coursework / Communication / Academic adjustment / Practical pressure / Belonging / Wellbeing'],
            ['Concern level', 'Green / Amber / Red'],
            ['Repeated or combined with other signals?', 'Yes / No / Unsure'],
            ['First contact person and date', ' '],
            ['Referral suggested?', 'Yes / No'],
            ['Follow-up date', ' '],
            ['Status', 'Monitor / Closed / Referred / Handed over'],
            ['Short factual note', ' ']
          ]}
        />
        <SubHeading>Simple tracking sheet (columns)</SubHeading>
        <Tbl
          head={['Student code', 'Date signal noted', 'Signal area', 'Level', 'First contact date', 'Referral route', 'Follow-up date', 'Status']}
          rows={[[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']]}
        />
      </>
    )
  },
  {
    id: 'evaluation',
    title: 'Pilot Evaluation Indicators',
    content: (
      <>
        <Tbl
          head={['Evaluation focus', 'Possible indicator', 'Data source']}
          rows={[
            ['Early identification', 'Number of concern signals recorded during the pilot.', 'Tracking sheet'],
            ['Warm outreach', 'Number of Amber concerns receiving a first check-in within one week.', 'Concern notes / tracking sheet'],
            ['Referral process', 'Number of students connected to peer mentor, coordinator or student support route.', 'Tracking sheet'],
            ['Follow-up consistency', 'Number of Amber or Red concerns with 7–14 day follow-up recorded.', 'Concern notes'],
            ['Workload feasibility', 'Lecturer, peer mentor and coordinator perceptions of workload and role clarity.', 'Short staff/mentor feedback form'],
            ['Student support clarity', 'Students’ perceived clarity about where and how to seek support.', 'Short student feedback form']
          ]}
        />
        <Note title="End-of-pilot review">
          Odisee reviews anonymised patterns from the tracking sheet and feedback forms: did the protocol make early
          concerns more visible, did follow-up remain manageable, and were referral routes clear enough for students
          and staff?
        </Note>
      </>
    )
  },
  {
    id: 'references',
    title: 'References',
    content: (
      <ul className="list-disc space-y-2 pl-5 text-sm">
        <li>Arnold, K. E., &amp; Pistilli, M. D. (2012). Course signals at Purdue: Using learning analytics to increase student success. In <em>Proceedings of the 2nd International Conference on Learning Analytics and Knowledge</em> (pp. 267–270). ACM.</li>
        <li>Hadjar, A., Haas, C., &amp; Gewinner, I. (2023). Refining the Spady–Tinto approach: The roles of individual characteristics and institutional support in students&apos; higher education dropout intentions in Luxembourg. <em>European Journal of Higher Education, 13</em>(4), 409–428.</li>
        <li>Karabenick, S. A., &amp; Knapp, J. R. (1991). Relationship of academic help seeking to the use of learning strategies. <em>Journal of Educational Psychology, 83</em>(2), 221–230.</li>
        <li>Odisee. (2026). <em>Odisee – Students&apos; academic success</em> [Partner challenge brief]. Case Studies Change and Innovation, Vrije Universiteit Brussel.</li>
        <li>Tinto, V. (1975). Dropout from higher education: A theoretical synthesis of recent research. <em>Review of Educational Research, 45</em>(1), 89–125.</li>
        <li>Villano, R. A., Harrison, S., Lynch, G., &amp; Chen, G. (2018). Linking early alert systems and student retention: A survival analysis approach. <em>Higher Education, 76</em>(5), 903–920.</li>
      </ul>
    )
  }
];

export default function EarlyAlert() {
  return (
    <div className="pb-16">
      <PageHero
        title="Early Alert and Follow-Up Protocol"
        subtitle="Deliverable 2 of 3: pilot-ready guidance for early concern signals, warm outreach and referral within Odisee Brussels' first-year support pathway"
      />

      <div className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-3xl border border-white/55 bg-card/72 p-6 shadow-soft backdrop-blur-xl sm:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">Positioning note</p>
          <p className="mt-3 leading-relaxed text-body">
            This protocol translates the Early Alert and Follow-Up Protocol described in the case study into a
            pilot-ready, low-burden tool for Odisee Brussels. It helps lecturers notice visible concern signals, while
            student coaches, programme coordinators and relevant support actors coordinate warm outreach, intake,
            redirection and referral. Peer mentors may pass concern cues to staff, but do not operate the protocol
            independently. It is not a parallel monitoring or disciplinary system. It is a simple support pathway for
            responding to early signs of disengagement before temporary difficulties become silent withdrawal or
            preventable dropout.
          </p>
        </div>

        <ToolkitAccordion sections={sections} navLabel="Early Alert Protocol sections" />
      </div>
    </div>
  );
}
