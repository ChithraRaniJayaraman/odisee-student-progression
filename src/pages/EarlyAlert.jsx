import React from 'react';
import Card from '../components/Card';
import PageHero from '../components/PageHero';

const protocolSteps = [
  { step: 1, title: 'Identification', description: 'Faculty or automated systems identify patterns of disengagement (missed classes, low assessment scores, lack of LMS activity).' },
  { step: 2, title: 'Evaluation', description: 'Student support teams assess the severity of the signal and determine the appropriate level of intervention.' },
  { step: 3, title: 'Initial Outreach', description: 'A "warm" contact (email, text, or call) is made, expressing concern rather than reprimand.' },
  { step: 4, title: 'Support Meeting', description: 'A collaborative session to identify barriers and develop a customized action plan.' },
  { step: 5, title: 'Follow-Up', description: 'Success and progress are tracked within 14 days to adjust support as needed.' }
];

const trafficLightSystem = [
  { level: 'Green', description: 'Low Risk', action: 'Standard academic advising and encouragement.' },
  { level: 'Amber', description: 'Moderate Risk', action: 'Personalized outreach from a student success coach or academic advisor.' },
  { level: 'Red', description: 'High Risk', action: 'Urgent coordinated intervention involving multiple departments (e.g., financial aid, mental health).' }
];

const roles = [
  { role: 'Faculty', responsibility: 'Report early warning signs and provide academic feedback.' },
  { role: 'Student Success Coaches', responsibility: 'Liaise between students and departments, providing direct coaching.' },
  { role: 'Academic Advisors', responsibility: 'Align success plans with degree requirements and course selections.' },
  { role: 'Support Services', responsibility: 'Specialized care (Counseling, Financial Aid, Accessibility Services).' }
];

const researchThemes = [
  { theme: 'Sense of Belonging', description: 'A student’s perceived social support and connectedness on campus.' },
  { theme: 'Self-Efficacy', description: 'The belief in one’s own ability to succeed in specific academic tasks.' },
  { theme: 'External Commitments', description: 'Managing the balance between work, family, and educational obligations.' }
];

const outreachAlternatives = [
  { type: 'Standard Email', example: "You've missed three classes. Please explain your absence." },
  { type: 'Warm Outreach', example: "Hi [Name], we noticed you've been away and wanted to check in to see how you're doing and if there's anything we can do to help." }
];

const universities = [
  { name: 'Georgia State University', achievement: 'Reduced the achievement gap using predictive analytics and proactive advising.' },
  { name: 'Purdue University', achievement: 'Signals project used a traffic light system to improve course completion rates.' },
  { name: 'Arizona State University', achievement: 'High-tech/high-touch model combining digital monitoring with human coaching.' }
];

const smartCriteria = [
  { criteria: 'Specific', detail: 'Clearly defined goal (e.g., Attend all tutorials).' },
  { criteria: 'Measurable', detail: 'Quantifiable progress indicator.' },
  { criteria: 'Achievable', detail: 'Realistic and within student reach.' },
  { criteria: 'Relevant', detail: 'Impacts academic success directly.' },
  { criteria: 'Time-bound', detail: 'Must be completed within a specific window.' }
];

function EarlyAlert() {
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <PageHero 
        title="Early Alert Protocol Complete Guide" 
        subtitle="A comprehensive framework for proactive student support, intervention, and retention management."
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
        <section>
          <Card title="Introduction to Early Alert">
            <p className="text-gray-700 leading-relaxed">
              The Early Alert Protocol is a systematic approach to identifying and responding to students who show signs of academic or personal struggle early in the semester. By intervening early, institutions can significantly improve retention rates and student success outcomes. This guide outlines the core components of a "warm, human-centered" protocol.
            </p>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Five-Step Protocol</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {protocolSteps.map((step) => (
              <Card key={step.step} title={`${step.step}. ${step.title}`}>
                <p className="text-sm text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Traffic Light System</h2>
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Level</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Immediate Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {trafficLightSystem.map((item) => (
                  <tr key={item.level}>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                      <span className={`px-2 py-1 rounded ${
                        item.level === 'Green' ? 'bg-green-100 text-green-800' :
                        item.level === 'Amber' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{item.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Roles</h2>
            <div className="space-y-4">
              {roles.map((r) => (
                <Card key={r.role} title={r.role}>
                  <p className="text-sm text-gray-600">{r.responsibility}</p>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Themes</h2>
            <div className="space-y-4">
              {researchThemes.map((rt) => (
                <Card key={rt.theme} title={rt.theme}>
                  <p className="text-sm text-gray-600">{rt.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Warm Outreach vs. Standard Communication</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {outreachAlternatives.map((alt) => (
              <Card key={alt.type} title={alt.type}>
                <blockquote className="italic border-l-4 border-indigo-500 pl-4 py-2 mt-2">
                  "{alt.example}"
                </blockquote>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Institutional Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {universities.map((uni) => (
              <Card key={uni.name} title={uni.name}>
                <p className="text-sm text-gray-600">{uni.achievement}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">SMART Action Planning</h2>
            <div className="bg-white rounded-lg shadow ring-1 ring-black ring-opacity-5">
              <ul className="divide-y divide-gray-200">
                {smartCriteria.map((s) => (
                  <li key={s.criteria} className="px-6 py-4">
                    <span className="font-bold text-indigo-600">{s.criteria}:</span> <span className="text-gray-600">{s.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">SWOT Analysis: Early Alert Integration</h2>
            <Card title="Self-Evaluation Protocol">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold">Strengths</h4>
                  <p className="text-xs text-gray-500">Existing staff commitment, rich data sources.</p>
                </div>
                <div>
                  <h4 className="font-bold">Weaknesses</h4>
                  <p className="text-xs text-gray-500">Manual data entry, siloed communication.</p>
                </div>
                <div>
                  <h4 className="font-bold">Opportunities</h4>
                  <p className="text-xs text-gray-500">Automated CRM, peer mentor pairing.</p>
                </div>
                <div>
                  <h4 className="font-bold">Threats</h4>
                  <p className="text-xs text-gray-500">Staff burnout, privacy concerns.</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EarlyAlert;
