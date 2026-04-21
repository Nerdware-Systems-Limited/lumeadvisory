import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle,
  TrendingUp,
  Target,
  Database,
  Cpu,
  Users,
  Shield,
  Zap,
  HelpCircle,
  BarChart3,
  Download
} from 'lucide-react';


const AIAssessment = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const pillarIcons = {
    'Strategy & Business Alignment': Target,
    'Data Readiness': Database,
    'Technology & Infrastructure': Cpu,
    'People & Culture': Users,
    'Governance & Ethics': Shield,
    'AI Execution & Model Management': Zap
  };

  const pillars = [
    {
      name: 'Strategy & Business Alignment',
      description: 'Aligning AI initiatives with business objectives and securing executive support',
      questions: [
        {
          id: 's1',
          question: 'Are your AI goals explicitly linked to business outcomes?',
          options: [
            { value: 1, label: 'No documented goals' },
            { value: 2, label: 'Discussed but not formalized' },
            { value: 3, label: 'Documented with limited KPIs' },
            { value: 4, label: 'Clear goals with measurable KPIs' },
            { value: 5, label: 'Enterprise-wide AI strategy with targets' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 's2',
          question: 'Do you prioritize AI use cases by business value?',
          options: [
            { value: 1, label: 'No prioritization framework' },
            { value: 2, label: 'Ad-hoc prioritization' },
            { value: 3, label: 'Some prioritized pilots' },
            { value: 4, label: 'Prioritization with ROI estimates' },
            { value: 5, label: 'Portfolio approach with scaling plans' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 's3',
          question: 'Is leadership actively sponsoring AI work?',
          options: [
            { value: 1, label: 'No executive support' },
            { value: 2, label: 'Low awareness at leadership level' },
            { value: 3, label: 'Sponsors but limited follow-through' },
            { value: 4, label: 'Strong C-level sponsorship' },
            { value: 5, label: 'Board-level priority and funding' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        }
      ]
    },
    {
      name: 'Data Readiness',
      description: 'Ensuring data quality, accessibility, and governance for AI applications',
      questions: [
        {
          id: 'd1',
          question: 'Is your data accessible and of consistent quality?',
          options: [
            { value: 1, label: 'Siloed with poor quality' },
            { value: 2, label: 'Some usable data with gaps' },
            { value: 3, label: 'Mostly consistent but requires work' },
            { value: 4, label: 'High quality and accessible' },
            { value: 5, label: 'Enterprise platform with real-time access' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'd2',
          question: 'Are there governance and ownership policies for data?',
          options: [
            { value: 1, label: 'No governance in place' },
            { value: 2, label: 'Ad-hoc or nascent policies' },
            { value: 3, label: 'Basic governance framework' },
            { value: 4, label: 'Clear ownership and controls' },
            { value: 5, label: 'Automated compliance and stewardship' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'd3',
          question: 'Is data prepared for model training and deployment?',
          options: [
            { value: 1, label: 'Requires heavy cleaning' },
            { value: 2, label: 'Manual prep per project' },
            { value: 3, label: 'Some standard processes' },
            { value: 4, label: 'Automated pipelines for many use cases' },
            { value: 5, label: 'ML-ready with feature stores' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        }
      ]
    },
    {
      name: 'Technology & Infrastructure',
      description: 'Building scalable compute, storage, and deployment infrastructure',
      questions: [
        {
          id: 't1',
          question: 'Do you have scalable compute and storage for AI?',
          options: [
            { value: 1, label: 'Very limited resources' },
            { value: 2, label: 'Basic cloud or on-premises setup' },
            { value: 3, label: 'Dedicated resources allocated' },
            { value: 4, label: 'Scalable cloud with GPU access' },
            { value: 5, label: 'Hybrid enterprise platform' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 't2',
          question: 'Are deployment and monitoring automated (MLOps)?',
          options: [
            { value: 1, label: 'No deployments yet' },
            { value: 2, label: 'Manual deployment processes' },
            { value: 3, label: 'Basic CI/CD implementation' },
            { value: 4, label: 'Automated pipelines with monitoring' },
            { value: 5, label: 'End-to-end MLOps with retraining' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 't3',
          question: 'Does your stack integrate with core systems via APIs?',
          options: [
            { value: 1, label: 'No integrations' },
            { value: 2, label: 'Limited point integrations' },
            { value: 3, label: 'Integration requires custom development' },
            { value: 4, label: 'Good API integrations' },
            { value: 5, label: 'Seamless enterprise integrations' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        }
      ]
    },
    {
      name: 'People & Culture',
      description: 'Developing AI talent, skills, and organizational readiness',
      questions: [
        {
          id: 'p1',
          question: 'What is the level of AI literacy across teams?',
          options: [
            { value: 1, label: 'Very limited understanding' },
            { value: 2, label: 'Awareness only' },
            { value: 3, label: 'Core teams competent' },
            { value: 4, label: 'Wide training programs in place' },
            { value: 5, label: 'Continuous learning culture' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'p2',
          question: 'Do you have the right AI talent and structure?',
          options: [
            { value: 1, label: 'No internal AI talent' },
            { value: 2, label: 'Rely on external vendors' },
            { value: 3, label: 'Small internal team' },
            { value: 4, label: 'Established team with defined roles' },
            { value: 5, label: 'Center of Excellence with champions' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'p3',
          question: 'How receptive is the organisation to AI-driven change?',
          options: [
            { value: 1, label: 'Resistant to change' },
            { value: 2, label: 'Cautious approach' },
            { value: 3, label: 'Moderately open' },
            { value: 4, label: 'Supportive with change management' },
            { value: 5, label: 'Proactive innovation culture' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        }
      ]
    },
    {
      name: 'Governance & Ethics',
      description: 'Establishing responsible AI practices, bias testing, and compliance',
      questions: [
        {
          id: 'g1',
          question: 'Are AI governance and oversight defined?',
          options: [
            { value: 1, label: 'No governance framework' },
            { value: 2, label: 'Informal efforts only' },
            { value: 3, label: 'Basic policies documented' },
            { value: 4, label: 'Comprehensive framework in place' },
            { value: 5, label: 'Active ethics board with audits' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'g2',
          question: 'Do you test for bias and fairness in models?',
          options: [
            { value: 1, label: 'Not addressed' },
            { value: 2, label: 'Awareness only' },
            { value: 3, label: 'Ad-hoc checks performed' },
            { value: 4, label: 'Systematic testing protocols' },
            { value: 5, label: 'Automated bias detection and mitigation' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'g3',
          question: 'Is there a risk and compliance process for AI?',
          options: [
            { value: 1, label: 'No formal risk process' },
            { value: 2, label: 'Ad-hoc assessments' },
            { value: 3, label: 'Project-level assessments' },
            { value: 4, label: 'Integrated risk management' },
            { value: 5, label: 'Proactive regulatory tracking' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        }
      ]
    },
    {
      name: 'AI Execution & Model Management',
      description: 'Standardizing development, monitoring, and measuring AI value',
      questions: [
        {
          id: 'e1',
          question: 'Are development processes standardized for AI?',
          options: [
            { value: 1, label: 'No standards in place' },
            { value: 2, label: 'Varied approaches' },
            { value: 3, label: 'Some standards defined' },
            { value: 4, label: 'Clear methodologies and templates' },
            { value: 5, label: 'Enterprise lifecycle standards' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'e2',
          question: 'Do you monitor and maintain models effectively?',
          options: [
            { value: 1, label: 'No production models' },
            { value: 2, label: 'Limited monitoring' },
            { value: 3, label: 'Basic tracking in place' },
            { value: 4, label: 'Comprehensive monitoring' },
            { value: 5, label: 'Automated retrain and optimization' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'e3',
          question: 'Can you demonstrate business value of AI initiatives?',
          options: [
            { value: 1, label: 'No measurement in place' },
            { value: 2, label: 'Anecdotal evidence only' },
            { value: 3, label: 'Some KPIs tracked' },
            { value: 4, label: 'Clear ROI measurement' },
            { value: 5, label: 'Continuous value optimization' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        }
      ]
    }
  ];

  const [answers, setAnswers] = useState({});
  const [currentPillar, setCurrentPillar] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswerChange = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleContactChange = (e) => {
    setContact(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const calculatePillarScore = (pillar, excludeUnsure = false) => {
    const qs = pillar.questions;
    let sum = 0, count = 0;
    qs.forEach(q => {
      const v = answers[q.id];
      if (v !== undefined && v !== null) {
        if (excludeUnsure && v === 0) {
          // Skip unsure answers when calculating actual score
          return;
        }
        if (v > 0) {
          sum += v;
          count++;
        }
      }
    });
    return count ? (sum / (count * 5)) * 100 : 0;
  };

  const calculateOverallScore = () => {
    let sum = 0, count = 0;
    pillars.forEach(p => p.questions.forEach(q => {
      const v = answers[q.id];
      if (v && v > 0) { 
        sum += v; 
        count++; 
      }
    }));
    return count ? Math.round((sum / (count * 5)) * 100) : 0;
  };

  const getUnsureCount = (pillar) => {
    return pillar.questions.filter(q => answers[q.id] === 0).length;
  };

  const getTotalUnsureCount = () => {
    let count = 0;
    pillars.forEach(p => p.questions.forEach(q => {
      if (answers[q.id] === 0) count++;
    }));
    return count;
  };

  const getMaturityLevel = (score) => {
    if (score >= 80) return { level: 'Advanced', color: 'text-emerald-600', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200' };
    if (score >= 60) return { level: 'Developing', color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' };
    if (score >= 40) return { level: 'Emerging', color: 'text-amber-600', bgColor: 'bg-amber-50', borderColor: 'border-amber-200' };
    if (score >= 20) return { level: 'Initial', color: 'text-orange-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' };
    return { level: 'Not Started', color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200' };
  };

  const getHeatmapColor = (score) => {
    if (score >= 80) return 'bg-emerald-500';
    if (score >= 60) return 'bg-blue-500';
    if (score >= 40) return 'bg-amber-500';
    if (score >= 20) return 'bg-orange-500';
    if (score > 0) return 'bg-red-500';
    return 'bg-gray-300';
  };

  const isPillarComplete = (index) =>
    pillars[index].questions.every(q => answers[q.id] !== undefined && answers[q.id] !== null);

  const allAnswered = () =>
    pillars.every(p => p.questions.every(q => answers[q.id] !== undefined && answers[q.id] !== null));

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPillar, showResults]);

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPillar < pillars.length - 1) {
      setCurrentPillar(currentPillar + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentPillar > 0) {
      setCurrentPillar(currentPillar - 1);
    }
  };

  const reset = () => {
    setAnswers({});
    setCurrentPillar(0);
    setShowResults(false);
    setContact({
      name: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      website: ''
    });
  };

  const handleSendAssessment = async (e) => {
    e.preventDefault();
    if (contact.website) return;

    if (!contact.name || !contact.email || !contact.company) {
      alert('Please fill Name, Email and Company before sending.');
      return;
    }
    if (!allAnswered()) {
      alert('Please answer all questions before sending.');
      return;
    }

    setIsSubmitting(true);

    const overall = calculateOverallScore();
    const unsureTotal = getTotalUnsureCount();
    const pillarDetails = pillars.map(p => ({
      name: p.name,
      score: Math.round(calculatePillarScore(p, true)),
      maturity: getMaturityLevel(Math.round(calculatePillarScore(p, true))).level,
      unsureCount: getUnsureCount(p)
    }));

    // Simulate email send (replace with actual emailjs logic)
    // setTimeout(() => {
    //   console.log('Assessment sent:', { contact, overall, pillarDetails, unsureTotal });
    //   setIsSubmitting(false);
    //   navigate('/thank-you');
    // }, 1500);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/send-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      form_type: 'ai-assessment',
      data: {
        full_name: contact.name,
        email: contact.email,
        phone: contact.phone,
        company: contact.company,
        role: contact.role,
        overall_score: overall,
        maturity_level: getMaturityLevel(overall).level,
        strategy_score: Math.round(calculatePillarScore(pillars[0], true)),
        data_score: Math.round(calculatePillarScore(pillars[1], true)),
        tech_score: Math.round(calculatePillarScore(pillars[2], true)),
        people_score: Math.round(calculatePillarScore(pillars[3], true)),
        governance_score: Math.round(calculatePillarScore(pillars[4], true)),
        execution_score: Math.round(calculatePillarScore(pillars[5], true))
      }
    })
  });

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.error || 'Submission failed');
  }

  navigate('/thank-you');
  };

  if (showResults) {
    const overall = calculateOverallScore();
    const maturity = getMaturityLevel(overall);
    const unsureTotal = getTotalUnsureCount();

    return (
      <div ref={scrollRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-8 sm:py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-12">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mb-4">
                <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">AI Readiness Results</h1>
              <p className="text-sm sm:text-base text-gray-600">Comprehensive view of your organizational AI maturity</p>
            </div>

            {/* Overall Score Card */}
            <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="lg:col-span-2 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 sm:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Overall Score</h2>
                    <p className="text-xs sm:text-sm text-gray-600">Aggregate across all pillars</p>
                  </div>
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
                </div>
                
                <div className="flex items-end gap-4 mb-4">
                  <div className={`text-5xl sm:text-6xl lg:text-7xl font-bold ${maturity.color}`}>
                    {overall}%
                  </div>
                  <div className={`text-lg sm:text-xl font-semibold ${maturity.color} mb-2`}>
                    {maturity.level}
                  </div>
                </div>

                {unsureTotal > 0 && (
                  <div className="flex items-start gap-2 p-3 sm:p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-amber-900">
                        {unsureTotal} question{unsureTotal > 1 ? 's' : ''} marked as "Not Sure"
                      </p>
                      <p className="text-xs text-amber-700 mt-1">
                        These areas may benefit from assessment or documentation
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-6 sm:p-8 rounded-xl">
                <h3 className="font-bold text-lg sm:text-xl mb-3">Next Step</h3>
                <p className="text-sm sm:text-base text-primary-100 mb-6">
                  Share your details and we'll help you tailor a roadmap to address your gap
                </p>
                <button
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                  className="w-full bg-white text-primary-700 px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors font-semibold text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Assessment
                </button>
              </div>
            </div>

            {/* Heatmap Visualization */}
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Maturity Heatmap
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {pillars.map((pillar, idx) => {
                  const Icon = pillarIcons[pillar.name];
                  return (
                    <div key={idx} className="bg-white rounded-lg p-3 sm:p-4">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 flex-shrink-0" />
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-900 flex-1 min-w-0">
                          {pillar.name}
                        </h4>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                        {pillar.questions.map((q, qIdx) => {
                          const answer = answers[q.id];
                          const score = answer > 0 ? (answer / 5) * 100 : 0;
                          const isUnsure = answer === 0;
                          
                          return (
                            <div
                              key={qIdx}
                              className="relative group"
                              title={q.question}
                            >
                              <div 
                                className={`h-16 sm:h-20 rounded-lg ${isUnsure ? 'bg-gray-300 border-2 border-dashed border-gray-400' : getHeatmapColor(score)} transition-all hover:scale-105 hover:shadow-lg cursor-help`}
                              >
                                {isUnsure && (
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                                  </div>
                                )}
                              </div>
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                                <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 max-w-xs whitespace-normal shadow-xl">
                                  <p className="font-medium mb-1">Q{qIdx + 1}</p>
                                  <p className="text-gray-300">{q.question}</p>
                                  <p className="mt-1 font-semibold">
                                    {isUnsure ? 'Not Sure' : `${Math.round(score)}%`}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Legend */}
              <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-3">Maturity Scale</p>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-red-500"></div>
                    <span className="text-gray-600">0-20%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-orange-500"></div>
                    <span className="text-gray-600">20-40%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-amber-500"></div>
                    <span className="text-gray-600">40-60%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-blue-500"></div>
                    <span className="text-gray-600">60-80%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-emerald-500"></div>
                    <span className="text-gray-600">80-100%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gray-300 border-2 border-dashed border-gray-400"></div>
                    <span className="text-gray-600">Not Sure</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar Breakdown */}
            {/* <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Pillar Breakdown
              </h3>
              {pillars.map((p, idx) => {
                const score = Math.round(calculatePillarScore(p, true));
                const pm = getMaturityLevel(score);
                const Icon = pillarIcons[p.name];
                const unsureCount = getUnsureCount(p);
                
                return (
                  <div key={idx} className={`border-l-4 ${pm.borderColor} bg-gray-50 rounded-r-xl p-4 sm:p-6`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 flex-shrink-0" />
                          <h4 className="text-base sm:text-lg font-semibold text-gray-900">{p.name}</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">{p.description}</p>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                          <span className="font-medium text-gray-700">Score: {score}%</span>
                          <span className={`font-semibold ${pm.color}`}>{pm.level}</span>
                          {unsureCount > 0 && (
                            <span className="flex items-center gap-1 text-amber-600">
                              <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                              {unsureCount} unsure
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="w-full sm:w-48">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 sm:h-3">
                          <div style={{ width: `${score}%` }} className={`${getHeatmapColor(score)} h-2.5 sm:h-3 rounded-full transition-all`} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}

            {/* Contact Form */}
            <form onSubmit={handleSendAssessment} className="space-y-6 p-4 sm:p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Send className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Get Your Detailed Report and Personalized Roadmap</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    value={contact.name}
                    onChange={handleContactChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={contact.email}
                    onChange={handleContactChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="company"
                    value={contact.company}
                    onChange={handleContactChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Role</label>
                  <input
                    name="role"
                    value={contact.role}
                    onChange={handleContactChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="CTO / Head of Data"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    name="phone"
                    value={contact.phone}
                    onChange={handleContactChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>

                <input
                  name="website"
                  value={contact.website}
                  onChange={handleContactChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Assessment
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={reset}
                  className="border border-gray-300 text-gray-700 px-4 py-2 sm:py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>

                <Link to="/" className="text-sm text-primary-600 font-semibold underline sm:ml-auto self-center">
                  Back to Home
                </Link>
              </div>

              <p className="text-xs sm:text-sm text-gray-500">
                By sending this assessment you agree to be contacted by our team. We handle your data according to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Main Assessment Flow
  const pillar = pillars[currentPillar];
  const progress = Math.round(((currentPillar + 1) / pillars.length) * 100);
  const Icon = pillarIcons[pillar.name];

  return (
    <div ref={scrollRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-8 sm:py-12 lg:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-12">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              AI Readiness Assessment
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Answer questions across 6 pillars to gauge organizational maturity
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
              <span className="text-xs sm:text-sm font-semibold text-gray-700">
                Pillar {currentPillar + 1} of {pillars.length}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-primary-600">
                {progress}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
              <div 
                className="bg-primary-600 h-2 sm:h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${progress}%` }} 
              />
            </div>
          </div>

          {/* Pillar Navigation Pills */}
          <div className="mb-6 overflow-x-auto">
            <div className="flex gap-2 pb-2 min-w-max sm:min-w-0">
              {pillars.map((p, idx) => {
                const PillarIcon = pillarIcons[p.name];
                const isComplete = isPillarComplete(idx);
                const isCurrent = idx === currentPillar;
                
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentPillar(idx)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                      isCurrent
                        ? 'bg-primary-600 text-white shadow-md'
                        : isComplete
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {isComplete && !isCurrent && (
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                    <PillarIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{idx + 1}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Pillar Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">{pillar.name}</h2>
                <p className="text-xs sm:text-sm text-primary-100">{pillar.description}</p>
                <p className="text-xs sm:text-sm text-primary-100 mt-2">
                  {pillar.questions.length} questions to answer
                </p>
              </div>
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
            {pillar.questions.map((q, idx) => (
              <div key={q.id} className="border-l-4 border-primary-200 pl-4 sm:pl-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
                  {idx + 1}. {q.question}
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {q.options.map(opt => (
                    <label
                      key={opt.value}
                      className={`flex items-start p-3 sm:p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        answers[q.id] === opt.value
                          ? opt.isUnsure
                            ? 'border-amber-500 bg-amber-50'
                            : 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={opt.value}
                        checked={answers[q.id] === opt.value}
                        onChange={() => handleAnswerChange(q.id, opt.value)}
                        className="mt-1 mr-3 sm:mr-4 w-4 h-4 text-primary-600 focus:ring-primary-500 flex-shrink-0"
                      />
                      <span className="text-sm sm:text-base text-gray-700 flex-1">
                        {opt.isUnsure && (
                          <span className="inline-flex items-center gap-1 mr-2">
                            <HelpCircle className="w-4 h-4 text-amber-600" />
                          </span>
                        )}
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Footer */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-6 border-t">
            <button
              onClick={handlePrevious}
              disabled={currentPillar === 0}
              className={`order-2 sm:order-1 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base ${
                currentPillar === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <div className="order-1 sm:order-2 text-center">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">
                {pillar.questions.filter(q => answers[q.id] !== undefined && answers[q.id] !== null).length} of {pillar.questions.length} answered
              </p>
              {!isPillarComplete(currentPillar) && (
                <p className="text-xs text-amber-600 flex items-center justify-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Answer all questions to continue
                </p>
              )}
            </div>

            {currentPillar === pillars.length - 1 ? (
              <button
                onClick={() => setShowResults(true)}
                disabled={!allAnswered()}
                className={`order-3 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base ${
                  allAnswered()
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                View Results
                <BarChart3 className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!isPillarComplete(currentPillar)}
                className={`order-3 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base ${
                  isPillarComplete(currentPillar)
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Next Pillar
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssessment;