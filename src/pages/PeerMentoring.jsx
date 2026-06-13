import PageHero from '../components/PageHero';
import ToolkitAccordion, { Tbl, Note, Template, SubHeading, Flow } from '../components/ToolkitAccordion';
import flowDiagram from '../../diagram-peer-mentoring-flow.png';
import banner from '../../banner-peer-mentoring.png';

const sections = [
  {
    id: 'glance',
    title: 'Toolkit at a Glance',
    content: (
      <>
        <figure className="my-2">
          <img
            src={flowDiagram}
            alt="Peer mentoring support flow in six steps: peer connection, check-in, support conversation, one small next step, navigation or referral, and follow-up."
            className="mx-auto block h-auto w-full max-w-3xl rounded-2xl border border-white/70 bg-card/70 p-3 shadow-soft"
          />
        </figure>
        <Tbl
          head={['Step', 'Simple logic', 'Main actor']}
          rows={[
            ['1', 'A first-year student is connected to a peer mentor through an existing buddy or peer-support practice.', 'Programme coordinator / peer mentor'],
            ['2', 'The peer mentor makes a low-threshold first contact.', 'Peer mentor'],
            ['3', 'The mentor uses check-in prompts to discuss belonging, study routines, practical concerns and support awareness.', 'Peer mentor and student'],
            ['4', 'The mentor helps the student identify one small next step.', 'Peer mentor and student'],
            ['5', 'If the student needs more than peer support, the mentor guides the student to the right support route or contacts the student coach or programme coordinator.', 'Peer mentor / coordinator'],
            ['6', 'The mentor records only a short reflection or, where needed, a factual referral cue.', 'Peer mentor / coordinator']
          ]}
        />
        <SubHeading>Intended users</SubHeading>
        <p>
          Second-year or senior peer mentors or buddy actors, first-year students, student coaches, learning coaches,
          lecturers, programme coordinators or designated implementation leads, trajectory counsellors, language coaches
          and student support services involved in first-year student support at Odisee Brussels.
        </p>
        <SubHeading>When it is used</SubHeading>
        <p>
          During orientation, early first-year transition, preparation for first assessments, moments of reduced
          engagement, or any point where first-year students need approachable guidance before formal support is needed.
        </p>
        <Note title="This toolkit is not">
          A replacement for Odisee&apos;s existing buddy or peer-support practices; a full new mentoring programme
          requiring major extra capacity; peer tutoring or course-content teaching; counselling, case management or
          crisis support; a monitoring or disciplinary system.
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
          The purpose of this toolkit is to make peer support more consistent, approachable and connected to Odisee
          Brussels&apos; first-year support pathway. First-year students do not always approach formal support
          immediately, even when help is available. A peer mentor provides a low-threshold first contact who helps
          students feel less alone, ask questions earlier and identify the right support route when needed.
        </p>
        <p>
          The toolkit is intended for a small pilot in one or two first-year programmes. It can be adapted to existing
          buddy systems, orientation activities, programme-level peer support or student support initiatives. It does
          not require new technology, a new staff role or a full academic-year mentoring programme.
        </p>
        <Tbl
          head={['Safeguard', 'How it is applied']}
          rows={[
            ['Low-threshold support', 'Peer mentoring should feel approachable and informal, while still having clear structure. The first contact is framed as support, not assessment.'],
            ['Role clarity', 'Peer mentors are second-year or senior students who listen, share experience, guide and refer. They are not lecturers, tutors, counsellors, case managers or crisis responders.'],
            ['Student autonomy', 'First-year students may accept, decline or pause peer support. They should not be pressured to disclose personal information.'],
            ['Boundaries and privacy', 'Mentors should not collect sensitive personal information. Any referral note is short, factual and shared only with the student coach or programme coordinator where needed.'],
            ['Referral when needed', 'Concerns beyond ordinary peer support are passed to the student coach or programme coordinator for intake and redirection, or to the relevant support actor.'],
            ['Feasible workload', 'Short check-ins, ready-to-use prompts and simple templates keep peer support from becoming a heavy parallel system.']
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
          The toolkit translates research on belonging, peer mentoring, help-seeking and first-year transition into
          practical tools adapted to Odisee Brussels.
        </p>
        <Tbl
          head={['Evidence source', 'Key insight', 'Design response']}
          rows={[
            ["Tinto's student retention perspective", 'Persistence is shaped by academic and social integration. Disconnection can develop before formal dropout.', 'Peer mentoring is positioned as a social integration tool that helps first-year students feel connected earlier.'],
            ['Belonging literature (Gopalan & Brady, 2020)', 'Sense of belonging is linked to engagement, wellbeing and use of support services.', 'Low-threshold check-ins and conversation prompts focused on belonging, confidence and support awareness.'],
            ['Peer mentoring literature (Crisp & Cruz, 2009; Collings et al., 2014)', 'Peer mentoring supports transition, integration and persistence when roles and support structures are clear.', 'A peer mentor role card, check-in structure, boundaries and referral cues.'],
            ['Help-seeking literature (Karabenick & Knapp, 1991)', 'Students may delay asking for help because they are unsure where to go or feel uncomfortable approaching formal support.', 'Warm message templates and prompts that help students name difficulties and move toward appropriate support.'],
            ['Odisee partner brief and stakeholder input', 'Odisee Brussels wants to improve first-year study efficiency and prevent unnecessary dropout while keeping support feasible.', 'An adaptable framework that structures and connects existing practices rather than replacing them.'],
            ['Limited informal student input', 'Friends and group chats are useful informal support, but difficulties can remain unnoticed unless students speak up.', 'Informal peer connection becomes a more reliable first support route, connected to staff and support services when needed.'],
            ['Field visit and feasibility considerations', 'Support tools should fit existing institutional capacity and avoid heavy staff workload.', 'Short preparation, simple check-in prompts, clear boundaries and a designated referral route.']
          ]}
        />
      </>
    )
  },
  {
    id: 'components',
    title: 'Toolkit Components',
    content: (
      <Tbl
        head={['Component', 'Main user', 'Purpose', 'Output']}
        rows={[
          ['Peer mentor role card', 'Peer mentor', 'Clarify what the mentor does and does not do.', 'Shared understanding of the mentor role.'],
          ['Boundaries and confidentiality guide', 'Peer mentor / coordinator', 'Prevent role overload and unsafe promises of confidentiality.', 'Clear referral boundaries.'],
          ['Suggested check-in structure', 'Peer mentor', 'Give mentors a repeatable structure for conversations.', 'More consistent peer contact.'],
          ['Conversation prompts', 'Peer mentor', 'Help mentors ask useful questions without sounding formal or intrusive.', 'Better support conversations.'],
          ['Referral cues', 'Peer mentor / coordinator', 'Identify when a concern goes beyond ordinary peer support.', 'Safer handover to staff or support services.'],
          ['Connection guide to Deliverables 2 and 3', 'Peer mentor / coordinator', 'Clarify when to use the Early Alert Protocol or the Self-Regulated Learning Guide.', 'Integrated support pathway.'],
          ['Message templates', 'Peer mentor', 'Make first contact and follow-up easier.', 'Low-burden communication.'],
          ['Short referral or handover note', 'Peer mentor / coordinator', 'Record only essential factual information when a concern needs staff support.', 'Clear, minimal handover.'],
          ['Peer mentor reflection form', 'Peer mentor', 'Help mentors reflect on support quality and role boundaries.', 'Feedback for pilot improvement.'],
          ['Pilot evaluation indicators', 'Coordinator / support services', 'Assess usability, clarity and feasibility.', 'Evidence for refinement after the pilot.']
        ]}
      />
    )
  },
  {
    id: 'roles',
    title: 'Roles and Boundaries',
    content: (
      <>
        <p>
          The toolkit works only if each actor understands both their responsibility and their limits. Peer mentors can
          be more approachable than formal support services, but they should not carry specialised concerns alone.
        </p>
        <Tbl
          head={['Actor', 'Main responsibility', 'Boundary']}
          rows={[
            ['First-year student / mentee', 'Receives peer support, asks questions, chooses whether to accept support and identifies next steps with the mentor.', 'Not required to disclose personal difficulties; may decline peer support.'],
            ['Peer mentor (second-year or senior student)', 'Provides approachable check-ins, listens, shares transition experience, helps identify one small next step and guides the student toward support routes.', 'Not a tutor, counsellor, case manager, crisis responder or replacement for student support services.'],
            ['Programme coordinator / implementation lead / student coach', 'Adapts the toolkit, prepares mentors, receives referral cues, prevents duplicated contact and connects concerns to the right support actor.', 'Does not need to solve every concern personally, but ensures the right support route is activated.'],
            ['Lecturers', 'May refer students to peer mentoring or share visible concern signals with the coordinator where appropriate.', 'Not responsible for ongoing mentoring or informal peer support.'],
            ['Student support services', 'Provide specialised support when peer support is not enough, alongside learning coaches for study habits and language coaches for language barriers.', 'Not responsible for every informal peer question; provide guidance for complex or specialised concerns.']
          ]}
        />
        <SubHeading>Peer mentor role card</SubHeading>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-royal/15 bg-lavender/70 p-5">
            <p className="font-semibold text-royal">A peer mentor can</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm">
              <li>Welcome a first-year student and create a low-threshold contact point</li>
              <li>Listen without judgement and share first-year transition experience</li>
              <li>Help the student identify one small next step</li>
              <li>Encourage help-seeking when the student is unsure where to go</li>
              <li>Guide the student toward the Self-Regulated Learning Guide</li>
              <li>Notice referral cues and contact the student coach or programme coordinator</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-royal/25 bg-emerald/12 p-5">
            <p className="font-semibold text-royal">A peer mentor should not</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm">
              <li>Teach course content as a tutor</li>
              <li>Diagnose academic, personal, financial or wellbeing problems</li>
              <li>Act as a counsellor or case manager</li>
              <li>Promise absolute confidentiality when safety concerns are involved</li>
              <li>Handle urgent, specialised or crisis concerns alone</li>
              <li>Collect sensitive personal information or replace staff and support services</li>
            </ul>
          </div>
        </div>
        <Note title="Core role definition">
          A peer mentor is a low-threshold relational support actor: a second-year or senior student who supports
          first-year students through approachable check-ins, shared transition experience and guidance toward
          appropriate support routes.
        </Note>
      </>
    )
  },
  {
    id: 'checkin',
    title: 'Suggested Check-In Structure',
    content: (
      <>
        <p>
          The check-in structure gives mentors a simple way to hold useful conversations. It can be used in short 15
          to 30 minute check-ins or longer mentoring conversations, depending on programme context.
        </p>
        <SubHeading>Suggested check-in moments</SubHeading>
        <Tbl
          head={['Moment', 'Why it matters']}
          rows={[
            ['First weeks of the semester', 'Students are still learning academic routines, campus expectations and available support routes.'],
            ['Before first major deadlines or assessments', 'Workload and uncertainty often become visible before assessment periods.'],
            ['After early assessment feedback', 'Students may need help interpreting feedback and identifying next steps.'],
            ['Mid-semester', 'Patterns of absence, workload pressure or weak belonging may begin to appear.'],
            ['Before exams or final assessment period', 'Study planning, stress and help-seeking become especially important.'],
            ['After a referral cue or student request', 'A check-in can help the student move toward the right support route.']
          ]}
        />
        <SubHeading>Five-step check-in flow</SubHeading>
        <Tbl
          head={['Step', 'Action', 'Mentor prompt']}
          rows={[
            ['1. Welcome and personal check-in', "Start with the student's general experience, not immediately with grades.", '"How have the last few weeks been for you?"'],
            ['2. What is coming up?', 'Ask about deadlines, classes, group work, exams or practical pressures.', '"What is coming up soon that feels important or difficult?"'],
            ['3. Main concern or question', 'Let the student name one issue they want to discuss.', '"Is there one thing you would like to figure out today?"'],
            ['4. One small next step', 'Help the student choose a realistic action before the next contact.', '"What is one small step you could take this week?"'],
            ['5. Confirm contact or support route', 'Close by confirming the next meeting, message or support route.', '"Would it help to check in again, or should we look at who you could contact?"']
          ]}
        />
        <Note>
          The aim is not to solve everything in one conversation. The aim is to help the student feel less alone, make
          the next step clearer and connect to support when needed.
        </Note>
      </>
    )
  },
  {
    id: 'prompts',
    title: 'Conversation Prompts and Referral Cues',
    content: (
      <>
        <SubHeading>Conversation prompts</SubHeading>
        <p>Mentors do not need to ask every question. They choose prompts that fit the conversation.</p>
        <Tbl
          head={['Focus area', 'Possible prompts']}
          rows={[
            ['Belonging and connection', '"Do you feel connected to people in your programme?" "Is there anything that makes it hard to ask questions in class or in your group?"'],
            ['Study routines and workload', '"How are you keeping track of deadlines?" "Are there moments where the workload becomes difficult to manage?"'],
            ['Academic adjustment', '"Is anything about studying at Odisee different from what you expected?" "Are course expectations clear at the moment?"'],
            ['Support awareness', '"Do you know where you would go if you needed academic or personal support?" "Would it help to look together at which support route fits your situation?"'],
            ['Practical pressures', '"Are commuting, work, finances or other responsibilities making study routines harder?"'],
            ['Confidence and help-seeking', '"Is there a question you would feel more comfortable asking a student than a lecturer?" "What would make it easier to ask for help earlier?"'],
            ['Next step', '"What is one thing you can do before we check in again?"']
          ]}
        />
        <SubHeading>Referral cues</SubHeading>
        <p>
          Referral cues are not labels for students. They are signs that a peer mentor should involve the student coach
          or programme coordinator, or guide the student toward a support route.
        </p>
        <Tbl
          head={['Situation', 'Recommended response']}
          rows={[
            ['Ordinary first-year questions about campus, deadlines, group work or study routines.', 'Continue peer mentor support and help the student identify one small next step.'],
            ['Student does not know which support service to contact.', 'Use the Self-Regulated Learning Guide or help the student find the relevant support route.'],
            ['Repeated workload difficulty, confusion about expectations or difficulty keeping up.', 'Encourage contact with the learning coach or study support route. If repeated concern signals are visible, inform the student coach or programme coordinator.'],
            ['Student repeatedly does not respond, misses check-ins or appears to withdraw.', 'Do not classify the student independently. Share the concern cue with the student coach or programme coordinator, who can apply the Early Alert Protocol where appropriate.'],
            ['Visible distress or disclosure of a serious wellbeing, financial, housing, safety or crisis concern.', "Do not handle alone. Contact the student coach, programme coordinator or student support services promptly according to Odisee's internal procedures."],
            ['Student declines peer support.', 'Respect the decision. Share one support route they can use later and close the peer check-in without pressure.']
          ]}
        />
        <Note title="Important boundary">
          Peer mentors may notice concern cues during check-ins, but they do not operate the Early Alert and Follow-Up
          Protocol independently. They do not diagnose, classify risk or manage cases. When a concern goes beyond
          ordinary peer support, the mentor contacts the student coach, programme coordinator or relevant support
          actor, who then applies the protocol where appropriate.
        </Note>
      </>
    )
  },
  {
    id: 'connection',
    title: 'Connection to the Other Deliverables',
    content: (
      <>
        <Tbl
          head={['Deliverable', 'Role in the support chain', 'Connection to this toolkit']}
          rows={[
            ['D1: Peer Mentoring Toolkit', 'Builds connection, trust and low-threshold peer support.', 'Peer mentors provide the first approachable contact and help students identify next steps.'],
            ['D2: Early Alert and Follow-Up Protocol', 'Makes repeated or serious concern signals visible and guides warm follow-up.', 'If a mentor notices concern cues beyond ordinary peer support, the mentor contacts the student coach or programme coordinator. The formal follow-up route belongs to D2.'],
            ['D3: First-Year Self-Regulated Learning Guide', 'Helps students build study routines, prepare help-seeking messages and identify support routes.', 'Peer mentors can use the guide to help students find the right academic, practical or student support route.']
          ]}
        />
        <Note title="Simple decision logic">
          Peer support question &rarr; stay within Deliverable 1. Study routine, help-seeking or support route question
          &rarr; use Deliverable 3. Repeated or combined concern cue &rarr; contact the student coach or programme
          coordinator and use Deliverable 2 where appropriate. Urgent or specialised concern &rarr; refer promptly to
          student support services or the relevant internal procedure.
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
        <Template title="Template 1: First check-in message">
          {`Hi [Name], I am [Name], your peer mentor / buddy for the start of the year. I am a [second-year / senior] student in [programme], so I know that the first weeks can bring a lot of new information.

Would you like to have a short check-in this week or next week? We can talk about how things are going, what feels unclear and where to find support if you need it.

Best, [Name]`}
        </Template>
        <Template title="Template 2: Follow-up after first conversation">
          {`Hi [Name], thanks for talking today. The small next step we agreed on was: [one small next step].

If it helps, we can check in again on [date/time], or I can help you find the right support route.

Best, [Name]`}
        </Template>
        <Template title="Template 3: Support navigation message">
          {`Hi [Name], based on what you mentioned, it may help to look at the First-Year Self-Regulated Learning Guide. It can help you think through study routines, prepare a help-seeking message and decide whether to contact a peer mentor, student coach, learning coach, lecturer, study support or student support services.

If you want, we can look at the options together and identify the most useful next step.

Best, [Name]`}
        </Template>
        <Template title="Template 4: Referral cue message to designated staff contact">
          {`Student code/name (where appropriate): [ ]
Date: [ ]
Mentor name: [ ]
Observed concern cue: [ ]
Repeated or combined with other cues? [Yes / No / Unsure]
Student response, if any: [ ]
Support already suggested, if any: [ ]
Reason for handover: [ ]
Short factual note: [write only what is necessary for follow-up, avoid sensitive details unless needed for safety or referral]`}
        </Template>
        <Template title="Template 5: Student declines peer support">
          {`Hi [Name], thanks for letting me know. That is completely okay. I will not keep following up about peer mentoring unless you want to use it later.

If you need support at another point, you can use the first-year support information or contact [support route/contact].

Best, [Name]`}
        </Template>
        <SubHeading>Template 6: Peer mentor reflection form</SubHeading>
        <Tbl
          head={['Question', 'Short response']}
          rows={[
            ['Date of check-in', ' '],
            ['Was the conversation mainly about belonging, study routine, support navigation, practical pressure or another topic?', ' '],
            ['Did the student identify one small next step?', 'Yes / No'],
            ['Did the student need support navigation information?', 'Yes / No'],
            ['Did any referral cue appear?', 'Yes / No / Unsure'],
            ['If yes, was the student coach or programme coordinator informed?', 'Yes / No / Not applicable'],
            ['Did the mentor stay within role boundaries?', 'Yes / No / Unsure'],
            ['What should be improved in the toolkit or prompts?', ' ']
          ]}
        />
        <Note>
          Mentor reflection forms are for pilot learning and mentor support. They should not become heavy case files.
        </Note>
      </>
    )
  },
  {
    id: 'pilot',
    title: 'Pilot Use and Mentor Preparation',
    content: (
      <>
        <SubHeading>Suggested pilot steps</SubHeading>
        <Tbl
          head={['Step', 'Action']}
          rows={[
            ['1. Adapt the toolkit', 'Add local programme contacts, existing buddy practices and relevant support routes.'],
            ['2. Select peer mentors', 'Use second-year or senior students who are approachable, reliable and willing to respect boundaries.'],
            ['3. Brief mentors', 'Provide a short practical briefing on role boundaries, check-in structure, referral cues, privacy and use of Deliverables 2 and 3.'],
            ['4. Introduce the toolkit to students', 'Explain that peer mentoring is a support option, not a formal assessment or disciplinary route.'],
            ['5. Run check-ins', 'Use the suggested check-in structure and prompts during key transition moments.'],
            ['6. Use referral cues when needed', 'Mentors pass concerns to the student coach or programme coordinator when concerns go beyond peer support.'],
            ['7. Collect feedback', 'Gather short feedback from students, mentors, coordinators and support actors.'],
            ['8. Refine the toolkit', 'Adjust prompts, role descriptions, referral cues and templates before wider use.']
          ]}
        />
        <SubHeading>Mentor preparation topics</SubHeading>
        <Tbl
          head={['Topic', 'What mentors should understand']}
          rows={[
            ['Purpose of peer mentoring', 'The aim is belonging, low-threshold support and support navigation, not tutoring or counselling.'],
            ['Role boundaries', 'Mentors support, listen and guide. They do not diagnose, teach, counsel or manage serious cases.'],
            ['Check-in structure', 'Mentors can use the five-step check-in flow flexibly.'],
            ['Conversation prompts', 'Mentors can ask about belonging, workload, support awareness and next steps.'],
            ['Referral cues', 'Mentors should know when to involve the student coach or programme coordinator.'],
            ['Connection to other deliverables', 'Deliverable 2 is used for staff-led early follow-up; Deliverable 3 helps students navigate support options.'],
            ['Privacy and minimal notes', 'Mentors avoid collecting sensitive information and record only what is necessary.']
          ]}
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
            ['Student belonging and support clarity', 'Students report that peer contact helped them feel more connected or clearer about where to seek support.', 'Short student feedback form'],
            ['Peer mentor confidence', 'Peer mentors report confidence using check-in prompts, boundaries and referral cues.', 'Peer mentor feedback form'],
            ['Usefulness of check-in structure', 'Mentors and students find the five-step check-in structure clear and usable.', 'Mentor reflection form / student feedback'],
            ['Referral boundary clarity', 'Mentors know when a concern should be passed to the student coach or programme coordinator.', 'Mentor feedback / coordinator review'],
            ['Connection to support navigation', 'Students are guided to the Self-Regulated Learning Guide when they need study routine or help-seeking guidance.', 'Mentor reflection form / student feedback'],
            ['Link to Early Alert Protocol', 'Repeated or serious concern cues are passed to staff rather than handled by mentors alone.', 'Coordinator review'],
            ['Workload feasibility', 'Coordinators and mentors perceive the toolkit as manageable during the pilot.', 'Staff and mentor feedback'],
            ['Improvement of toolkit', 'Feedback leads to concrete changes in prompts, templates or referral cues.', 'End-of-pilot review']
          ]}
        />
        <Note title="End-of-pilot review">
          Odisee reviews anonymised feedback from students, peer mentors, coordinators and support services: did the
          toolkit strengthen belonging, make support easier to approach, clarify mentor boundaries and connect students
          to the wider first-year support pathway without creating excessive workload? If feasible and useful, the
          toolkit can be refined and adapted for other programmes or campuses.
        </Note>
      </>
    )
  },
  {
    id: 'references',
    title: 'References',
    content: (
      <ul className="list-disc space-y-2 pl-5 text-sm">
        <li>Collings, R., Swanson, V., &amp; Watkins, R. (2014). The impact of peer mentoring on levels of student wellbeing, integration and retention. <em>Higher Education, 68</em>(6), 927–942.</li>
        <li>Crisp, G., &amp; Cruz, I. (2009). Mentoring college students: A critical review of the literature between 1990 and 2007. <em>Research in Higher Education, 50</em>(6), 525–545.</li>
        <li>Gopalan, M., &amp; Brady, S. T. (2020). College students&apos; sense of belonging: A national perspective. <em>Educational Researcher, 49</em>(2), 134–137.</li>
        <li>Karabenick, S. A., &amp; Knapp, J. R. (1991). Relationship of academic help seeking to the use of learning strategies. <em>Journal of Educational Psychology, 83</em>(2), 221–230.</li>
        <li>Odisee. (2026). <em>Odisee – Students&apos; academic success</em> [Partner challenge brief]. Case Studies Change and Innovation, Vrije Universiteit Brussel.</li>
        <li>Tinto, V. (1975). Dropout from higher education: A theoretical synthesis of recent research. <em>Review of Educational Research, 45</em>(1), 89–125.</li>
      </ul>
    )
  }
];

export default function PeerMentoring() {
  return (
    <div className="pb-16">
      <PageHero
        icon="users"
        title="Peer Mentoring Toolkit"
        subtitle="Deliverable 1 of 3: pilot-ready guidance for first-year belonging, low-threshold peer support and referral within Odisee Brussels' first-year support pathway"
      />

      <div className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 lg:px-8">
        <figure className="mb-10">
          <img
            src={banner}
            alt="Illustration of two students talking warmly at a table with a speech bubble, representing peer mentoring and belonging."
            className="block h-auto w-full rounded-3xl border border-white/60 shadow-soft"
          />
        </figure>
        <div className="mb-10 rounded-3xl border border-white/55 bg-card/72 p-6 shadow-soft backdrop-blur-xl sm:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">Positioning note</p>
          <p className="mt-3 leading-relaxed text-body">
            This toolkit translates the peer mentoring deliverable described in the case study into a pilot-ready,
            low-burden tool for Odisee Brussels. It helps second-year or senior students support first-year students
            through approachable check-ins, shared transition experience, role clarity and referral guidance. It does
            not create a new large-scale programme or replace existing buddy, peer-support or student support
            practices. It structures and strengthens what already exists. It responds most directly to the barrier of
            relational disconnection and weak belonging, and connects to the Early Alert and Follow-Up Protocol (D2)
            and the First-Year Self-Regulated Learning Guide (D3).
          </p>
        </div>

        <ToolkitAccordion sections={sections} navLabel="Peer Mentoring Toolkit sections" />
      </div>
    </div>
  );
}