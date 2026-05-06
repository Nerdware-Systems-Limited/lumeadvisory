import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  Download,
  Sparkles,
  ArrowRight,
  Brain
} from 'lucide-react';

const AIAssessment = () => {
  const scrollRef = useRef(null);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [hoveredOption, setHoveredOption] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [questionAnimations, setQuestionAnimations] = useState({});

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
  const [showContactModal, setShowContactModal] = useState(false);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animate progress on mount and pillar change
  useEffect(() => {
    const targetProgress = Math.round(((currentPillar + 1) / pillars.length) * 100);
    const timer = setTimeout(() => setAnimatedProgress(targetProgress), 100);
    return () => clearTimeout(timer);
  }, [currentPillar]);

  // Animate questions on pillar change
  useEffect(() => {
    const newAnimations = {};
    pillars[currentPillar]?.questions.forEach((q, idx) => {
      newAnimations[q.id] = false;
    });
    setQuestionAnimations(newAnimations);

    const timer = setTimeout(() => {
      const animations = {};
      pillars[currentPillar]?.questions.forEach((q, idx) => {
        animations[q.id] = true;
      });
      setQuestionAnimations(animations);
    }, 100);

    return () => clearTimeout(timer);
  }, [currentPillar]);

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
    if (score >= 80) return { level: 'Advanced', color: 'text-emerald-600', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200', gradient: 'from-emerald-500 to-teal-600' };
    if (score >= 60) return { level: 'Developing', color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200', gradient: 'from-blue-500 to-indigo-600' };
    if (score >= 40) return { level: 'Emerging', color: 'text-amber-600', bgColor: 'bg-amber-50', borderColor: 'border-amber-200', gradient: 'from-amber-500 to-orange-600' };
    if (score >= 20) return { level: 'Initial', color: 'text-orange-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-200', gradient: 'from-orange-500 to-red-600' };
    return { level: 'Not Started', color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200', gradient: 'from-red-500 to-pink-600' };
  };

  const getHeatmapColor = (score) => {
    if (score >= 80) return 'bg-emerald-500';
    if (score >= 60) return 'bg-blue-500';
    if (score >= 40) return 'bg-amber-500';
    if (score >= 20) return 'bg-orange-500';
    if (score > 0) return 'bg-red-500';
    return 'bg-gray-300';
  };

  const getScaleLabel = (value) => {
    const labels = {
      1: { label: 'Ad hoc', desc: 'Not established' },
      2: { label: 'Early', desc: 'Limited / pilot' },
      3: { label: 'Developing', desc: 'Partially structured' },
      4: { label: 'Advanced', desc: 'Well defined' },
      5: { label: 'Leading', desc: 'Optimized / enterprise-grade' }
    };
    return labels[value] || null;
  };

  const isPillarComplete = (index) =>
    pillars[index].questions.every(q => answers[q.id] !== undefined && answers[q.id] !== null);

  const allAnswered = () =>
    pillars.every(p => p.questions.every(q => answers[q.id] !== undefined && answers[q.id] !== null));

  const getTotalAnsweredCount = () => {
    let count = 0;
    pillars.forEach(p => p.questions.forEach(q => {
      if (answers[q.id] !== undefined && answers[q.id] !== null) count++;
    }));
    return count;
  };

  const getTotalQuestions = () => {
    return pillars.reduce((acc, p) => acc + p.questions.length, 0);
  };

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
    setIsTransitioning(true);
    setTimeout(() => {
      if (currentPillar < pillars.length - 1) {
        setCurrentPillar(currentPillar + 1);
      } else {
        setShowResults(true);
      }
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (currentPillar > 0) {
        setCurrentPillar(currentPillar - 1);
      }
      setIsTransitioning(false);
    }, 300);
  };

  const reset = () => {
    setAnswers({});
    setCurrentPillar(0);
    setShowResults(false);
    setShowContactModal(false);
    setAnimatedProgress(0);
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

    try {
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

      setShowContactModal(false);
      setShowResults(true);
      setIsSubmitting(false);
    } catch (err) {
      alert('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (showResults) {
    const overall = calculateOverallScore();
    const maturity = getMaturityLevel(overall);
    const unsureTotal = getTotalUnsureCount();

    return (
      <div ref={scrollRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-8 sm:py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 border border-gray-100">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg shadow-purple-500/30 transform rotate-3 hover:rotate-6 transition-transform duration-500">
                <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-3">
                AI Readiness Results
              </h1>
              <p className="text-base sm:text-lg text-gray-600">Comprehensive view of your organizational AI maturity</p>
            </div>

            {/* Overall Score Card */}
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="lg:col-span-2 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 sm:p-10 border border-indigo-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Overall Score</h2>
                      <p className="text-sm sm:text-base text-gray-600">Aggregate across all pillars</p>
                    </div>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex items-end gap-4 mb-6">
                    <div className={`text-6xl sm:text-7xl lg:text-8xl font-bold ${maturity.color} tracking-tight`}>
                      {overall}%
                    </div>
                    <div className={`text-2xl sm:text-3xl font-bold ${maturity.color} mb-3`}>
                      {maturity.level}
                    </div>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full bg-white/60 rounded-full h-3 sm:h-4 overflow-hidden shadow-inner">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${maturity.gradient} transition-all duration-1000 ease-out shadow-lg`}
                      style={{ width: `${overall}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                    <Brain className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Your AI Journey</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Your organization is on the path to AI maturity. Discover how to accelerate your progress.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-gray-300">{getTotalAnsweredCount()} questions answered</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-gray-300">{pillars.length} pillars assessed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Heatmap Visualization */}
            <div className="mb-8 sm:mb-12 p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                Maturity Heatmap
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {pillars.map((pillar, idx) => {
                  const Icon = pillarIcons[pillar.name];
                  const score = Math.round(calculatePillarScore(pillar, true));
                  const pillarMaturity = getMaturityLevel(score);

                  return (
                    <div key={idx} className="bg-white rounded-xl p-4 sm:p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3 sm:gap-4 mb-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${pillarMaturity.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm sm:text-base font-bold text-gray-900 truncate">{pillar.name}</h4>
                          <p className="text-xs sm:text-sm text-gray-500">{pillar.description}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className={`text-xl sm:text-2xl font-bold ${pillarMaturity.color}`}>{score}%</div>
                          <div className={`text-xs font-semibold ${pillarMaturity.color}`}>{pillarMaturity.level}</div>
                        </div>
                      </div>
                      <div className="h-2 sm:h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${pillarMaturity.gradient} transition-all duration-700 ease-out`}
                          style={{ width: `${score}%` }}
                        ></div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                        {pillar.questions.map((q, qIdx) => {
                          const answer = answers[q.id];
                          const qScore = answer > 0 ? (answer / 5) * 100 : 0;
                          const isUnsure = answer === 0;

                          return (
                            <div
                              key={qIdx}
                              className="relative group"
                              title={q.question}
                            >
                              <div
                                className={`h-16 sm:h-20 rounded-xl ${isUnsure ? 'bg-gray-200 border-2 border-dashed border-gray-300' : getHeatmapColor(qScore)} transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-help flex items-center justify-center`}
                              >
                                <span className="text-white font-bold text-sm sm:text-base drop-shadow-lg">{isUnsure ? '?' : Math.round(qScore)}%</span>
                              </div>
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-20">
                                <div className="bg-gray-900 text-white text-xs rounded-xl py-3 px-4 max-w-xs shadow-2xl">
                                  <p className="font-semibold mb-1">Q{qIdx + 1}</p>
                                  <p className="text-gray-300 text-[10px] sm:text-xs leading-relaxed">{q.question}</p>
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
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-4">Maturity Scale</p>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-lg bg-red-500 shadow-md"></div>
                    <span className="text-gray-600 font-medium">0-20%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-lg bg-orange-500 shadow-md"></div>
                    <span className="text-gray-600 font-medium">20-40%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-lg bg-amber-500 shadow-md"></div>
                    <span className="text-gray-600 font-medium">40-60%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-lg bg-blue-500 shadow-md"></div>
                    <span className="text-gray-600 font-medium">60-80%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-lg bg-emerald-500 shadow-md"></div>
                    <span className="text-gray-600 font-medium">80-100%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-lg bg-gray-200 border-2 border-dashed border-gray-400"></div>
                    <span className="text-gray-600 font-medium">Not Sure</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-100">
              <button
                onClick={reset}
                className="group flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 font-semibold text-sm sm:text-base"
              >
                <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                Retake Assessment
              </button>
              <Link to="/" className="text-sm sm:text-base text-indigo-600 font-semibold hover:text-indigo-700 transition-colors flex items-center gap-1">
                Back to Home
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Assessment Flow
  const pillar = pillars[currentPillar];
  const progress = Math.round(((currentPillar + 1) / pillars.length) * 100);
  const Icon = pillarIcons[pillar.name];
  const answeredCount = getTotalAnsweredCount();
  const totalQuestions = getTotalQuestions();

  return (
    <div ref={scrollRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 pt-20 sm:pt-16 lg:pt-16 pb-6 sm:pb-10 lg:pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8 lg:p-12 border border-gray-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100/50 via-purple-100/30 to-pink-100/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

          <div className="relative">
            {/* Header */}
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 transform -rotate-3">
                  <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    AI Readiness Assessment
                  </h1>
                  <p className="text-sm sm:text-base text-gray-600">
                    Answer questions across 6 pillars to gauge organizational maturity
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8 sm:mb-10">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
                    Pillar {currentPillar + 1} of {pillars.length}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-indigo-600">
                    {progress}% Complete
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>{answeredCount} / {totalQuestions} questions answered</span>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5 sm:h-3 overflow-hidden shadow-inner">
                <div
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2.5 sm:h-3 rounded-full transition-all duration-700 ease-out shadow-lg shadow-purple-500/30"
                  style={{ width: `${animatedProgress}%` }}
                ></div>
              </div>
            </div>

            {/* Pillar Navigation Pills */}
            <div className="mb-8 overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0">
              <div className="flex gap-2 min-w-max sm:min-w-0">
                {pillars.map((p, idx) => {
                  const PillarIcon = pillarIcons[p.name];
                  const isComplete = isPillarComplete(idx);
                  const isCurrent = idx === currentPillar;

                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentPillar(idx)}
                      className={`group flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                        isCurrent
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-purple-500/30 transform scale-105'
                          : isComplete
                          ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-200 hover:bg-emerald-100'
                          : 'bg-gray-50 text-gray-600 border-2 border-gray-100 hover:border-indigo-200 hover:bg-indigo-50'
                      }`}
                    >
                      {isComplete && !isCurrent && (
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
                      )}
                      <PillarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" />
                      <span className="hidden sm:inline">{idx + 1}. {p.name.split(' ')[0]}</span>
                      <span className="sm:hidden">{idx + 1}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Current Pillar Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl p-5 sm:p-8 mb-8 sm:mb-10 relative overflow-hidden shadow-xl shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative flex items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs sm:text-sm font-bold bg-white/20 px-2 py-0.5 rounded-full">
                      0{currentPillar + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white/80">PILLAR</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{pillar.name}</h2>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">{pillar.description}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex gap-1">
                      {pillar.questions.map((q, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            answers[q.id] !== undefined
                              ? 'bg-white'
                              : 'bg-white/30'
                          }`}
                        ></div>
                      ))}
                    </div>
                    <span className="text-xs text-white/60">
                      {pillar.questions.filter(q => answers[q.id] !== undefined).length} of {pillar.questions.length} answered
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className={`space-y-6 sm:space-y-8 mb-8 sm:mb-10 transition-all duration-300 ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
              {pillar.questions.map((q, idx) => (
                <div
                  key={q.id}
                  className={`transform transition-all duration-500 ${questionAnimations[q.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 sm:p-8 border border-gray-100 hover:border-indigo-100 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-4 sm:gap-6 mb-6">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg flex-shrink-0 transition-all duration-300 ${
                        answers[q.id] !== undefined
                          ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {answers[q.id] !== undefined ? (
                          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                        ) : (
                          idx + 1
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 leading-relaxed">
                          {q.question}
                        </h3>
                      </div>
                    </div>

                    {/* Scale Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
                      {q.options.filter(opt => opt.value > 0).map(opt => {
                        const scaleInfo = getScaleLabel(opt.value);
                        const isSelected = answers[q.id] === opt.value;
                        const isHovered = hoveredOption === `${q.id}-${opt.value}`;

                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onMouseEnter={() => setHoveredOption(`${q.id}-${opt.value}`)}
                            onMouseLeave={() => setHoveredOption(null)}
                            onClick={() => handleAnswerChange(q.id, opt.value)}
                            className={`relative p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 text-center group ${
                              isSelected
                                ? 'border-indigo-500 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg shadow-indigo-500/20 transform scale-[1.02]'
                                : 'border-gray-200 bg-white hover:border-indigo-300 hover:bg-gradient-to-br hover:from-gray-50 hover:to-indigo-50'
                            }`}
                          >
                            <div className={`text-2xl sm:text-3xl font-bold mb-1 transition-colors duration-300 ${
                              isSelected ? 'text-indigo-600' : isHovered ? 'text-indigo-500' : 'text-gray-400'
                            }`}>
                              {opt.value}
                            </div>
                            <div className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 transition-colors duration-300 ${
                              isSelected ? 'text-indigo-700' : 'text-gray-700'
                            }`}>
                              {scaleInfo?.label}
                            </div>
                            <div className="hidden sm:block text-[9px] text-gray-500 leading-tight">
                              {scaleInfo?.desc}
                            </div>
                            {isSelected && (
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Unsure Option */}
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => handleAnswerChange(q.id, 0)}
                        className={`w-full p-3 rounded-xl border-2 transition-all duration-300 text-center ${
                          answers[q.id] === 0
                            ? 'border-amber-500 bg-amber-50'
                            : 'border-gray-200 bg-white hover:border-amber-300 hover:bg-amber-50/50'
                        }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <HelpCircle className={`w-4 h-4 ${answers[q.id] === 0 ? 'text-amber-600' : 'text-gray-400'}`} />
                          <span className={`text-sm font-medium ${answers[q.id] === 0 ? 'text-amber-700' : 'text-gray-600'}`}>
                            Not sure of current status
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Footer */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-8 border-t border-gray-100">
              <button
                onClick={handlePrevious}
                disabled={currentPillar === 0}
                className={`order-2 sm:order-1 group px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                  currentPillar === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-lg'
                }`}
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                Previous
              </button>

              <div className="order-1 sm:order-2 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {pillar.questions.map((q, idx) => (
                    <div
                      key={idx}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        answers[q.id] !== undefined
                          ? 'bg-indigo-500 scale-110'
                          : 'bg-gray-300'
                      }`}
                    ></div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  {pillar.questions.filter(q => answers[q.id] !== undefined).length} of {pillar.questions.length} answered
                </p>
                {!isPillarComplete(currentPillar) && (
                  <p className="text-xs text-amber-600 flex items-center justify-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    Answer all questions to continue
                  </p>
                )}
              </div>

              {currentPillar === pillars.length - 1 ? (
                <button
                  onClick={() => {
                    setShowContactModal(true);
                  }}
                  disabled={!allAnswered()}
                  className={`order-3 px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                    allAnswered()
                      ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  View Results
                  <Sparkles className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!isPillarComplete(currentPillar)}
                  className={`order-3 px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                    isPillarComplete(currentPillar)
                      ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Next Pillar
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Dimension Navigation Dots */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {pillars.map((p, idx) => {
            const isComplete = isPillarComplete(idx);
            const isCurrent = idx === currentPillar;

            return (
              <button
                key={idx}
                onClick={() => setCurrentPillar(idx)}
                className={`w-8 sm:w-10 h-2.5 rounded-full transition-all duration-300 ${
                  isCurrent
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-purple-500/30'
                    : isComplete
                    ? 'bg-emerald-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Jump to dimension ${idx + 1}`}
              ></button>
            );
          })}
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-t-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"></div>
              <div className="relative flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold">Almost There!</h2>
                    <p className="text-xs sm:text-sm text-white/80 mt-1">Enter your details to view your results and receive a personalised roadmap by email.</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-white/70 hover:text-white transition-colors flex-shrink-0 mt-0.5"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSendAssessment} className="p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    value={contact.name}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={contact.email}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="company"
                    value={contact.company}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
                  <input
                    name="role"
                    value={contact.role}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="CTO / Head of Data"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    name="phone"
                    value={contact.phone}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>

                {/* Honeypot */}
                <input
                  name="website"
                  value={contact.website}
                  onChange={handleContactChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              {/* Email notification hint */}
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl">
                <Send className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  Your detailed report and personalised roadmap will be sent to your email while you review your results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <BarChart3 className="w-5 h-5" />
                      View My Results
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowContactModal(false)}
                  className="border-2 border-gray-200 text-gray-700 px-6 py-4 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-sm"
                >
                  Cancel
                </button>
              </div>

              <p className="text-xs text-gray-400 text-center">
                By submitting you agree to be contacted by our team. We handle your data per our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssessment;