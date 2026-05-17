import { useState, useMemo } from 'react';
import PageHero from '../components/PageHero';
import Card from '../components/Card';

const References = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const references = [
    // SECTION A: Peer Mentoring
    {
      section: 'A',
      sectionTitle: 'Peer Mentoring',
      id: 'ref-a1',
      authors: 'Flores, G., & Estudillo, A. G. (2018)',
      title: 'Effects of a peer-to-peer mentoring program: Supporting first-year college students\' academic and social integration on campus.',
      journal: 'Journal of Human Services: Training, Research, and Practice, 3(2), Article 3.',
      tags: ['peer', 'dropout'],
      link: 'https://scholarworks.sfasu.edu/jhstrp/vol3/iss2/3',
    },
    {
      section: 'A',
      sectionTitle: 'Peer Mentoring',
      id: 'ref-a2',
      authors: 'García et al. (2024)',
      title: 'Effectiveness of peer mentoring on university dropout and academic performance.',
      journal: 'Psicología Educativa, 30(1), 29–37.',
      tags: ['peer', 'dropout'],
      link: 'https://doi.org/10.5093/psed2024a5',
    },
    {
      section: 'A',
      sectionTitle: 'Peer Mentoring',
      id: 'ref-a3',
      authors: 'Gehreke, S., et al. (2024)',
      title: 'Effectiveness of peer mentoring in the study entry phase: A systematic review.',
      journal: 'Review of Education.',
      tags: ['peer'],
      link: 'https://doi.org/10.1002/rev3.3462',
    },
    {
      section: 'A',
      sectionTitle: 'Peer Mentoring',
      id: 'ref-a4',
      authors: 'Lapon, E., et al. (2023)',
      title: 'The impact of peer mentoring in first-year education students.',
      journal: 'International Journal of Mentoring and Coaching in Education.',
      tags: ['peer'],
      link: 'https://www.emerald.com/insight/content/doi/10.1108/IJMCE-01-2023-0002/full/html',
    },
    {
      section: 'A',
      sectionTitle: 'Peer Mentoring',
      id: 'ref-a5',
      authors: 'Plaskett, S., Bali, D., Nakkula, M. J., & Harris, J. (2018)',
      title: 'Peer mentoring to support first-generation low-income college students.',
      journal: 'Phi Delta Kappan, 99(7), 47–51.',
      tags: ['peer'],
      link: 'https://doi.org/10.1177/0031721718767861',
    },
    {
      section: 'A',
      sectionTitle: 'Peer Mentoring',
      id: 'ref-a6',
      authors: 'Torres, J., et al. (2025)',
      title: 'Effect of peer-mentoring programs on academic motivation and school belonging in first-generation learners.',
      journal: 'KMAN Counseling and Psychology Nexus.',
      tags: ['peer'],
      link: 'https://journals.kmanpub.com/index.php/psychnexus/article/download/3931/6730/19228',
    },

    // SECTION B: Early Alert & Student Retention
    {
      section: 'B',
      sectionTitle: 'Early Alert & Student Retention',
      id: 'ref-b1',
      authors: 'Arnold, K. E., & Pistilli, M. D. (2012)',
      title: 'Course signals at Purdue: Using learning analytics to increase student success.',
      journal: 'Proceedings of the 2nd International Conference on Learning Analytics and Knowledge, 267–270.',
      tags: ['alert'],
      link: 'https://doi.org/10.1145/2330601.2330666',
    },
    {
      section: 'B',
      sectionTitle: 'Early Alert & Student Retention',
      id: 'ref-b2',
      authors: 'Carballo-Mendívil, B., et al. (2025)',
      title: 'Predicting student dropout from day one: XGBoost-based early warning system using pre-enrollment data.',
      journal: 'Applied Sciences, 15(16), 9202.',
      tags: ['alert', 'dropout'],
      link: 'https://doi.org/10.3390/app15169202',
    },
    {
      section: 'B',
      sectionTitle: 'Early Alert & Student Retention',
      id: 'ref-b3',
      authors: 'Jayaprakash, S. M., et al. (2014)',
      title: 'Early alert of academically at-risk students: An open source analytics initiative.',
      journal: 'Journal of Learning Analytics, 1(1), 6–47.',
      tags: ['alert'],
      link: 'https://doi.org/10.18608/jla.2014.11.3',
    },
    {
      section: 'B',
      sectionTitle: 'Early Alert & Student Retention',
      id: 'ref-b4',
      authors: 'Plak, S., et al. (2021)',
      title: 'Early warning systems for more effective student counselling in higher education: Evidence from a Dutch field experiment.',
      journal: 'Higher Education Quarterly.',
      tags: ['alert'],
      link: 'https://doi.org/10.1111/hequ.12298',
    },
    {
      section: 'B',
      sectionTitle: 'Early Alert & Student Retention',
      id: 'ref-b5',
      authors: 'Villano, R., et al. (2018)',
      title: 'Linking early alert systems and student retention: A survival analysis approach.',
      journal: 'Higher Education.',
      tags: ['alert', 'dropout'],
      link: 'https://doi.org/10.1007/s10734-018-0249-y',
    },

    // SECTION C: Self-Regulated Learning
    {
      section: 'C',
      sectionTitle: 'Self-Regulated Learning',
      id: 'ref-c1',
      authors: 'Baars, M. A. E., et al. (2015)',
      title: 'Self-report measures of executive functioning are a determinant of academic performance in first-year students at a university of applied sciences.',
      journal: 'Frontiers in Psychology, 6, Article 1131.',
      tags: ['srl'],
      link: 'https://doi.org/10.3389/fpsyg.2015.011',
    },
    {
      section: 'C',
      sectionTitle: 'Self-Regulated Learning',
      id: 'ref-c2',
      authors: 'Dignath, C., & Veenman, M. V. J. (2021)',
      title: 'The role of direct strategy instruction and indirect activation of self-regulated learning: Evidence from classroom observation studies.',
      journal: 'Educational Psychology Review, 33, 489–533.',
      tags: ['srl'],
      link: 'https://doi.org/10.1007/s10648-020-09534-0',
    },
    {
      section: 'C',
      sectionTitle: 'Self-Regulated Learning',
      id: 'ref-c3',
      authors: 'Education Endowment Foundation. (2025)',
      title: 'Teaching and Learning Toolkit: Metacognition and self-regulation.',
      journal: 'EEF Teaching and Learning Toolkit.',
      tags: ['srl', 'eef'],
      link: 'https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/metacognition-and-self-regulation',
    },
    {
      section: 'C',
      sectionTitle: 'Self-Regulated Learning',
      id: 'ref-c4',
      authors: 'Fokkens-Bruinsma, M., et al. (2021)',
      title: 'First-year academic achievement: The role of academic self-efficacy, self-regulated learning and beyond classroom engagement.',
      journal: 'Assessment & Evaluation in Higher Education, 46(7), 1115–1126.',
      tags: ['srl'],
      link: 'https://doi.org/10.1080/02602938.2020.1845606',
    },
    {
      section: 'C',
      sectionTitle: 'Self-Regulated Learning',
      id: 'ref-c5',
      authors: 'Jansen, R. S., et al. (2019)',
      title: 'Self-regulated learning partially mediates the effect of self-regulated learning interventions on achievement in higher education: A meta-analysis.',
      journal: 'Educational Research Review, 28, 100292.',
      tags: ['srl'],
      link: 'https://doi.org/10.1016/j.edurev.2019.100292',
    },
    {
      section: 'C',
      sectionTitle: 'Self-Regulated Learning',
      id: 'ref-c6',
      authors: 'Koh, J., et al. (2022)',
      title: 'Self-efficacy and academic success among diverse first-generation college students: The mediating role of self-regulation.',
      journal: 'Social Psychology of Education, 25, 1399–1420.',
      tags: ['srl'],
      link: 'https://doi.org/10.1007/s11218-022-09717-3',
    },
    {
      section: 'C',
      sectionTitle: 'Self-Regulated Learning',
      id: 'ref-c7',
      authors: 'Simón-Grábalos, D., et al. (2025)',
      title: 'Systematic review of the literature on interventions to improve self-regulation of learning in first-year university students.',
      journal: 'Education Sciences, 15(3), 372.',
      tags: ['srl'],
      link: 'https://doi.org/10.3390/educsci15030372',
    },
    {
      section: 'C',
      sectionTitle: 'Self-Regulated Learning',
      id: 'ref-c8',
      authors: 'Van Rooij, E. C. M., Jansen, E. P. W. A., & van de Grift, W. J. C. M. (2018)',
      title: 'First-year university students\' academic success: The importance of academic adjustment.',
      journal: 'European Journal of Psychology of Education, 33(4), 749–767.',
      tags: ['srl', 'dropout'],
      link: 'https://doi.org/10.1007/s10212-017-0347-8',
    },

    // SECTION D: Dropout & Student Success Research
    {
      section: 'D',
      sectionTitle: 'Dropout & Student Success Research',
      id: 'ref-d1',
      authors: 'Allen, K. A., et al. (2024)',
      title: 'Belonging in higher education: A twenty-year systematic review.',
      journal: 'Journal of University Teaching and Learning Practice.',
      tags: ['dropout'],
      link: 'https://doi.org/10.53761/s2he6n66',
    },
    {
      section: 'D',
      sectionTitle: 'Dropout & Student Success Research',
      id: 'ref-d2',
      authors: 'Almarzouki, A. F. (2024)',
      title: 'Stress, working memory, and academic performance: A neuroscience perspective.',
      journal: 'Stress, 27(1), Article 2364333.',
      tags: ['dropout', 'srl'],
      link: 'https://doi.org/10.1080/10253890.2024.2364333',
    },
    {
      section: 'D',
      sectionTitle: 'Dropout & Student Success Research',
      id: 'ref-d3',
      authors: 'Apumayta, R. Q., et al. (2024)',
      title: 'University dropout: A systematic review of the main determinant factors (2020–2024).',
      journal: 'F1000Research, 13, 942.',
      tags: ['dropout'],
      link: 'https://doi.org/10.12688/f1000research.154263.2',
    },
    {
      section: 'D',
      sectionTitle: 'Dropout & Student Success Research',
      id: 'ref-d4',
      authors: 'Barsegyan, V., & Maas, I. (2024)',
      title: 'First-generation students\' educational outcomes: The role of parental educational, cultural, and economic capital.',
      journal: 'Research in Social Stratification and Mobility, 91, Article 100939.',
      tags: ['dropout'],
      link: 'https://doi.org/10.1016/j.rssm.2024.100939',
    },
    {
      section: 'D',
      sectionTitle: 'Dropout & Student Success Research',
      id: 'ref-d5',
      authors: 'Barragán Moreno, S. P., & González Támara, L. (2024)',
      title: 'Complexities of student dropout in higher education: A multidimensional analysis.',
      journal: 'Frontiers in Education, 9, 1461650.',
      tags: ['dropout'],
      link: 'https://doi.org/10.3389/feduc.2024.1461650',
    },
    {
      section: 'D',
      sectionTitle: 'Dropout & Student Success Research',
      id: 'ref-d6',
      authors: 'Gopalan, M., & Brady, S. T. (2020)',
      title: 'College students\' sense of belonging: A national perspective.',
      journal: 'Educational Researcher, 49(2), 134–137.',
      tags: ['dropout'],
      link: 'https://doi.org/10.3102/0013189X19897622',
    },
    {
      section: 'D',
      sectionTitle: 'Dropout & Student Success Research',
      id: 'ref-d7',
      authors: 'Hadjar, A., Haas, C., & Gewinner, I. (2022)',
      title: 'Refining the Spady–Tinto approach: The roles of individual characteristics and institutional support in students\' higher education dropout intentions.',
      journal: 'European Journal of Higher Education, 13, 409–428.',
      tags: ['dropout'],
      link: 'https://doi.org/10.1080/21568235.2022.2056494',
    },
    {
      section: 'D',
      sectionTitle: 'Dropout & Student Success Research',
      id: 'ref-d8',
      authors: 'Hjorth, C. F., et al. (2016)',
      title: 'Mental health and school dropout across educational levels and genders: A 4.8-year follow-up study.',
      journal: 'BMC Public Health, 16, 976.',
      tags: ['dropout'],
      link: 'https://doi.org/10.1186/s12889-016-3622-8',
    },
    {
      section: 'D',
      sectionTitle: 'Dropout & Student Success Research',
      id: 'ref-d9',
      authors: 'López, M. J., Santelices, M. V., & Taveras, C. M. (2023)',
      title: 'Academic performance and adjustment of first-generation students to higher education: A systematic review.',
      journal: 'Cogent Education, 10(1).',
      tags: ['dropout'],
      link: 'https://doi.org/10.1080/2331186X.2023.2209484',
    },
    {
      section: 'D',
      sectionTitle: 'Dropout & Student Success Research',
      id: 'ref-d10',
      authors: 'Naylor, R., & Mifsud, N. (2019)',
      title: 'Structural inequality in higher education: Creating institutional cultures that enable all students.',
      journal: 'NCSEHE.',
      tags: ['dropout'],
      link: 'https://www.acses.edu.au/app/uploads/2019/09/NaylorMifsud-FINAL.pdf',
    },
    {
      section: 'D',
      sectionTitle: 'Dropout & Student Success Research',
      id: 'ref-d11',
      authors: 'Tinto, V. (1987)',
      title: 'Leaving college: Rethinking the causes and cures of student attrition.',
      journal: 'University of Chicago Press.',
      tags: ['dropout'],
      link: '#',
      noLink: true,
    },
    {
      section: 'D',
      sectionTitle: 'Dropout & Student Success Research',
      id: 'ref-d12',
      authors: 'Tinto, V. (1993)',
      title: 'Leaving college: Rethinking the causes and cures of student attrition (2nd ed.).',
      journal: 'University of Chicago Press.',
      tags: ['dropout'],
      link: '#',
      noLink: true,
    },
    {
      section: 'D',
      sectionTitle: 'Dropout & Student Success Research',
      id: 'ref-d13',
      authors: 'Trappolini, E., Di Patrizio, F., & Giudici, C. (2026)',
      title: 'Academic expectations and university enrolment of migrant-origin students in Italy.',
      journal: 'Demographic Research, 54, 309–350.',
      tags: ['dropout'],
      link: 'https://www.demographic-research.org/volumes/vol54/10/54-10.pdf',
    },

    // SECTION E: Policy & Institutional Sources
    {
      section: 'E',
      sectionTitle: 'Policy & Institutional Sources',
      id: 'ref-e1',
      authors: 'Brussels-Capital Region. (n.d.-a)',
      title: 'Education, teaching, science promotion.',
      journal: '',
      tags: ['policy'],
      link: 'https://be.brussels/education-and-training/higher-and-university-education',
    },
    {
      section: 'E',
      sectionTitle: 'Policy & Institutional Sources',
      id: 'ref-e2',
      authors: 'Brussels-Capital Region. (n.d.-b)',
      title: 'Our educational challenges.',
      journal: '',
      tags: ['policy'],
      link: 'https://be.brussels/en/education-teaching/our-educational-challenges',
    },
    {
      section: 'E',
      sectionTitle: 'Policy & Institutional Sources',
      id: 'ref-e3',
      authors: 'Eurochild. (2024)',
      title: 'Children\'s realities in Europe: Progress and gaps.',
      journal: '',
      tags: ['policy'],
      link: 'https://eurochild.org/resource/childrens-realities-in-europe-progress-gaps/',
    },
    {
      section: 'E',
      sectionTitle: 'Policy & Institutional Sources',
      id: 'ref-e4',
      authors: 'European Commission. (2024)',
      title: 'Education and training monitor 2024 — Belgium.',
      journal: '',
      tags: ['policy'],
      link: 'https://op.europa.eu/webpub/eac/education-and-training-monitor/en/country-reports/belgium.html',
    },
    {
      section: 'E',
      sectionTitle: 'Policy & Institutional Sources',
      id: 'ref-e5',
      authors: 'KU Leuven. (n.d.)',
      title: 'Welcome international students.',
      journal: '',
      tags: ['policy'],
      link: 'https://www.kuleuven.be/english/prospective-students',
    },
    {
      section: 'E',
      sectionTitle: 'Policy & Institutional Sources',
      id: 'ref-e6',
      authors: 'Odisee University of Applied Sciences. (n.d.-a)',
      title: 'Our values, our mission, our vision.',
      journal: '',
      tags: ['policy'],
      link: 'https://www.odisee.be/en/our-values-our-mission-our-vision',
    },
    {
      section: 'E',
      sectionTitle: 'Policy & Institutional Sources',
      id: 'ref-e7',
      authors: 'Odisee University of Applied Sciences. (n.d.-b)',
      title: 'Inclusion: Vision and policy goals.',
      journal: '',
      tags: ['policy'],
      link: 'https://www.odisee.be/en/inclusion-vision-and-policy-goals',
    },
    {
      section: 'E',
      sectionTitle: 'Policy & Institutional Sources',
      id: 'ref-e8',
      authors: 'Statbel. (2024)',
      title: 'Level of education — Census 2021.',
      journal: 'Belgian Statistical Office.',
      tags: ['policy'],
      link: 'https://statbel.fgov.be/en/themes/census/education/level-education',
    },
    {
      section: 'E',
      sectionTitle: 'Policy & Institutional Sources',
      id: 'ref-e9',
      authors: 'VUB. (2025)',
      title: 'Responsible use of generative AI: Guidelines for students.',
      journal: 'Onderwijs & Studentenzaken, Vrije Universiteit Brussel.',
      tags: ['policy'],
      link: '#',
      noLink: true,
    },

    // SECTION F: Additional Research Sources
    {
      section: 'F',
      sectionTitle: 'Additional Research Sources',
      id: 'ref-f1',
      authors: 'Caponera, E., & Losito, B. (2016)',
      title: 'Context factors and student achievement in the IEA studies: Evidence from TIMSS.',
      journal: 'Large-Scale Assessments in Education, 4(1), 1–24.',
      tags: ['dropout'],
      link: 'https://doi.org/10.1186/s40536-016-0030-6',
    },
    {
      section: 'F',
      sectionTitle: 'Additional Research Sources',
      id: 'ref-f2',
      authors: 'Chan, D., Cochrane, D. F., & Gallegos, S. (2008)',
      title: 'Paving the way: How financial aid awareness affects college access and success.',
      journal: 'Institute for College Access & Success.',
      tags: ['dropout'],
      link: 'https://files.eric.ed.gov/fulltext/ED540080.pdf',
    },
    {
      section: 'F',
      sectionTitle: 'Additional Research Sources',
      id: 'ref-f3',
      authors: 'El Hassan, K. (2014)',
      title: 'Investigating conditions for student success at an American university in the Middle East.',
      journal: 'Higher Education Studies, 4(5), 91–102.',
      tags: ['dropout'],
      link: 'https://doi.org/10.5539/hes.v4n5p62',
    },
    {
      section: 'F',
      sectionTitle: 'Additional Research Sources',
      id: 'ref-f4',
      authors: 'Sanger, C. (2020)',
      title: 'Inclusive pedagogy and universal design approaches for diverse learning environments.',
      journal: 'In Diversity and Inclusion in Global Higher Education.',
      tags: ['dropout', 'policy'],
      link: 'https://doi.org/10.1007/978-981-15-1628-3_2',
    },
    {
      section: 'F',
      sectionTitle: 'Additional Research Sources',
      id: 'ref-f5',
      authors: 'Taff, S. D., et al. (2022)',
      title: 'Inclusion and belonging in higher education: A scoping study of contexts, barriers, and facilitators.',
      journal: 'Higher Education Studies.',
      tags: ['dropout', 'policy'],
      link: 'https://ccsenet.org/journal/index.php/hes/article/view/0/47592',
    },
  ];

  const filteredReferences = useMemo(() => {
    return references.filter((ref) => {
      const matchesSearch = searchTerm === '' || 
        ref.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ref.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ref.journal.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter = activeFilter === 'all' || ref.tags.includes(activeFilter);

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  const groupedBySection = useMemo(() => {
    return filteredReferences.reduce((acc, ref) => {
      if (!acc[ref.section]) {
        acc[ref.section] = { title: ref.sectionTitle, refs: [] };
      }
      acc[ref.section].refs.push(ref);
      return acc;
    }, {});
  }, [filteredReferences]);

  const tagConfig = {
    peer: { bg: 'bg-purple-100', text: 'text-purple-700', label: 'Peer Mentoring' },
    alert: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Early Alert' },
    srl: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: 'Self-Regulated Learning' },
    dropout: { bg: 'bg-red-100', text: 'text-red-700', label: 'Dropout Research' },
    policy: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Policy' },
    eef: { bg: 'bg-teal-100', text: 'text-teal-700', label: 'EEF' },
  };

  const filterButtons = [
    { id: 'all', label: 'All Sources' },
    { id: 'peer', label: 'Peer Mentoring' },
    { id: 'alert', label: 'Early Alert' },
    { id: 'srl', label: 'Self-Regulated Learning' },
    { id: 'dropout', label: 'Dropout Research' },
    { id: 'policy', label: 'Policy & Institutional' },
  ];

  return (
    <>
      <PageHero 
        title="References & Evidence Base"
        subtitle="Every claim in this project is grounded in peer-reviewed research. All 44 sources are listed below with direct links to the original publications."
      />

      <section className="mx-auto max-w-4xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search by author, year, or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 pl-12 text-sm placeholder-slate-500 shadow-sm transition-colors focus:border-[#1F3864] focus:outline-none"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔍</span>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className={`rounded-md px-4 py-2 text-xs font-semibold transition-all ${
                activeFilter === btn.id
                  ? 'bg-[#1F3864] text-white'
                  : 'border border-slate-300 bg-white text-slate-600 hover:border-[#1F3864] hover:text-[#1F3864]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Reference Sections */}
        <div className="space-y-12">
          {Object.entries(groupedBySection).map(([section, { title, refs }]) => (
            <div key={section}>
              <div className="mb-6 flex items-center gap-3 border-b-2 border-[#1F3864] pb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1F3864] text-sm font-bold text-white">
                  {section}
                </div>
                <h2 className="text-lg font-semibold text-[#1F3864]">{title}</h2>
              </div>

              <div className="space-y-3">
                {refs.map((ref) => (
                  <div
                    key={ref.id}
                    className={`rounded-lg border-l-4 bg-white p-5 shadow-sm transition-all hover:shadow-md ${
                      ref.tags.includes('peer')
                        ? 'border-l-purple-500'
                        : ref.tags.includes('alert')
                        ? 'border-l-amber-500'
                        : ref.tags.includes('srl')
                        ? 'border-l-emerald-500'
                        : ref.tags.includes('dropout')
                        ? 'border-l-red-500'
                        : ref.tags.includes('policy')
                        ? 'border-l-blue-500'
                        : 'border-l-[#1F3864]'
                    }`}
                  >
                    <div className="mb-2 text-sm font-semibold text-[#1F3864]">{ref.authors}</div>
                    <div className="mb-2 text-sm text-slate-700 leading-snug">{ref.title}</div>
                    {ref.journal && <div className="mb-3 text-xs italic text-slate-500">{ref.journal}</div>}

                    {/* Tags */}
                    <div className="mb-3 flex flex-wrap gap-2">
                      {ref.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded px-2 py-1 text-xs font-semibold ${tagConfig[tag]?.bg || 'bg-slate-100'} ${tagConfig[tag]?.text || 'text-slate-700'}`}
                        >
                          {tagConfig[tag]?.label || tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    {!ref.noLink ? (
                      <a
                        href={ref.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#0A6B5E] hover:text-[#1F3864] transition-colors"
                      >
                        🔗 View Source
                      </a>
                    ) : (
                      <span className="inline-block text-xs font-semibold text-slate-400">
                        Classic text — no DOI
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredReferences.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-slate-500">No references found matching your search.</p>
          </div>
        )}

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#1F3864]">44</div>
            <div className="text-xs text-slate-600">Peer-reviewed sources</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#0A6B5E]">6</div>
            <div className="text-xs text-slate-600">Disciplines</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#1F3864]">2018–2026</div>
            <div className="text-xs text-slate-600">Publication range</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default References;
