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
  Download
} from 'lucide-react';


const AIAssessment = () => {
  const scrollRef = useRef(null);

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
          question: 'Does your organisation have a clear stance on adopting Artificial Intelligence (AI)?',
          hint: 'AI requires distinct strategic decisions — which tools are approved, what use cases are in-scope, and what guardrails apply.',
          options: [
            { value: 1, label: 'No AI strategy or policy exists' },
            { value: 2, label: 'Ad-hoc AI experiments with no formal position' },
            { value: 3, label: 'Pilots underway with a developing policy stance' },
            { value: 4, label: 'Defined AI strategy with approved use cases and tools' },
            { value: 5, label: 'Enterprise AI roadmap integrated into broader AI strategy' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 's2',
          question: 'Are AI use cases prioritized jointly by business and technology leaders?',
          hint: 'Strong prioritization requires both business owners and technical teams at the table — not just IT deciding alone.',
          options: [
            { value: 1, label: 'No prioritization framework exists' },
            { value: 2, label: 'Tech team prioritizes without business input' },
            { value: 3, label: 'Some joint prioritization, ad-hoc process' },
            { value: 4, label: 'Structured prioritization with ROI and feasibility criteria' },
            { value: 5, label: 'Portfolio approach with joint governance and scaling plans' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 's3',
          question: 'Does executive leadership visibly tie AI investment to strategic outcomes?',
          hint: 'Look beyond IT sponsorship — does the CEO, COO, or CFO actively champion AI in board communications and budget decisions?',
          options: [
            { value: 1, label: 'No executive awareness or support' },
            { value: 2, label: 'Low-level awareness, no active sponsorship' },
            { value: 3, label: 'C-level sponsors exist but follow-through is limited' },
            { value: 4, label: 'Strong C-level sponsorship with dedicated AI budget' },
            { value: 5, label: 'Board-level priority with AI tied to strategic planning' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
          {
          id: 's4',
          question: 'Are your AI goals explicitly linked to measurable business outcomes?',
          hint: 'Look for a documented AI strategy that maps to specific KPIs — not just general innovation ambitions.',
          options: [
            { value: 1, label: 'No documented AI goals exist' },
            { value: 2, label: 'Goals discussed informally, not tied to outcomes' },
            { value: 3, label: 'Documented goals with some KPIs, inconsistently tracked' },
            { value: 4, label: 'Clear goals with measurable KPIs reviewed regularly' },
            { value: 5, label: 'Enterprise-wide AI strategy with targets cascaded to business units' },
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
          question: 'How accessible is the data that AI teams need — and how clean is it?',
          hint: 'Access and quality are different problems. Consider whether teams face friction getting data, and whether it is reliable once they have it.',
          options: [
            { value: 1, label: 'Data is siloed, inconsistent, and hard to access' },
            { value: 2, label: 'Some usable data exists but gaps and errors are common' },
            { value: 3, label: 'Mostly accessible and consistent, but requires significant prep work' },
            { value: 4, label: 'High-quality, accessible data with documented lineage' },
            { value: 5, label: 'Enterprise data platform with real-time access and quality monitoring' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'd2',
          question: 'Are data owners defined at the domain level with accountability for quality?',
          hint: 'Policy existence is not enough — look for named data owners who are responsible for quality, access, and compliance within their domain.',
          options: [
            { value: 1, label: 'No data ownership or governance in place' },
            { value: 2, label: 'Informal policies, no clear ownership' },
            { value: 3, label: 'Basic governance framework with partial ownership defined' },
            { value: 4, label: 'Domain-level ownership with enforced quality standards' },
            { value: 5, label: 'Automated governance with stewardship and compliance tracking' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'd3',
          question: 'Can data be reliably prepared and reused across multiple AI use cases?',
          hint: 'Mature organisations build reusable pipelines rather than preparing data from scratch for every project.',
          options: [
            { value: 1, label: 'Data requires heavy manual cleaning for each project' },
            { value: 2, label: 'Manual preparation done per project with no reuse' },
            { value: 3, label: 'Some standard processes exist but reuse is limited' },
            { value: 4, label: 'Automated pipelines support multiple use cases with minimal rework' },
            { value: 5, label: 'Reusable, ML-ready pipelines with feature stores and catalogues' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'd4',
          question: 'Is your data infrastructure ready to support  AI workloads (e.g. RAG, embeddings, unstructured data)?',
          hint: 'AI often requires unstructured data (documents, emails, audio), vector databases, and retrieval-augmented generation pipelines — distinct from traditional ML data needs.',
          options: [
            { value: 1, label: 'No consideration given to AI data requirements' },
            { value: 2, label: 'Structured data only; unstructured data not managed' },
            { value: 3, label: 'Some unstructured data accessible but not pipeline-ready' },
            { value: 4, label: 'Unstructured data ingested and used in AI pilots' },
            { value: 5, label: 'Enterprise-grade retrieval and embedding infrastructure in place' },
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
          question: 'How modern and scalable is your cloud and compute foundation for AI workloads?',
          hint: 'Consider whether your infrastructure can handle model training, batch inference, and real-time serving — not just general compute.',
          options: [
            { value: 1, label: 'Very limited or legacy infrastructure' },
            { value: 2, label: 'Basic cloud or on-premises setup, not optimised for AI' },
            { value: 3, label: 'Dedicated AI resources allocated but not fully scalable' },
            { value: 4, label: 'Scalable cloud platform with GPU/TPU access on demand' },
            { value: 5, label: 'Hybrid enterprise AI platform with cost and performance optimisation' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 't2',
          question: 'Do you have automated deployment, monitoring, and rollback for AI models?',
          hint: 'Look for model versioning, drift detection, performance dashboards, and the ability to roll back a model if it underperforms in production.',
          options: [
            { value: 1, label: 'No AI models in production' },
            { value: 2, label: 'Manual deployment with no monitoring' },
            { value: 3, label: 'Basic CI/CD in place; monitoring is limited' },
            { value: 4, label: 'Automated pipelines with monitoring and versioning' },
            { value: 5, label: 'End-to-end MLOps with drift detection, rollback, and retraining' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 't3',
          question: 'How well does your AI stack integrate with core business systems (ERP, CRM, operational tools)?',
          hint: 'AI that cannot connect to where decisions are made has limited value. Distinguish between batch and real-time integration capability.',
          options: [
            { value: 1, label: 'No integrations exist' },
            { value: 2, label: 'Limited point integrations, mostly manual' },
            { value: 3, label: 'Batch integrations exist but real-time is limited' },
            { value: 4, label: 'Real-time API integrations with key systems' },
            { value: 5, label: 'Seamless, bi-directional enterprise integrations across all core systems' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 't4',
          question: 'Do you have approved infrastructure for accessing and managing third-party AI models (e.g. LLM APIs, prompt management, guardrails)?',
          hint: 'AI at scale requires more than API access — consider prompt versioning, rate limit management, cost controls, and output filtering.',
          options: [
            { value: 1, label: 'No approved AI tooling or infrastructure' },
            { value: 2, label: 'Ad-hoc API usage by individuals with no controls' },
            { value: 3, label: 'Approved tools in use but governance is limited' },
            { value: 4, label: 'Managed LLM access with cost controls and basic guardrails' },
            { value: 5, label: 'Enterprise AI platform with prompt management, guardrails, and audit trails' },
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
          question: 'Can business teams interpret, challenge, and act on AI outputs — not just consume them?',
          hint: 'Passive awareness is not enough. Look for whether teams can identify when a model is likely wrong or when outputs should not be trusted.',
          options: [
            { value: 1, label: 'Very limited AI awareness across the organisation' },
            { value: 2, label: 'Teams are aware of AI but accept outputs uncritically' },
            { value: 3, label: 'Core teams are competent; broader teams rely on outputs without scrutiny' },
            { value: 4, label: 'Wide training programmes building critical AI literacy' },
            { value: 5, label: 'Organisation-wide culture of responsible, critical AI use' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'p2',
          question: 'Do you have in-house AI talent — not just external vendors — with clear roles and accountability?',
          hint: 'Relying solely on external talent creates dependency and limits institutional learning. Look for internal data scientists, ML engineers, and AI product owners.',
          options: [
            { value: 1, label: 'No internal AI talent; fully vendor-dependent' },
            { value: 2, label: 'Primarily external vendors with minimal internal knowledge transfer' },
            { value: 3, label: 'Small internal team building capability alongside vendors' },
            { value: 4, label: 'Established internal team with defined roles and hiring roadmap' },
            { value: 5, label: 'AI Centre of Excellence with embedded champions across business units' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'p3',
          question: 'Are there documented change management plans for AI deployments that affect roles or workflows?',
          hint: 'AI rollouts that displace or change how people work require structured change management — not just a launch email.',
          options: [
            { value: 1, label: 'No change management process for AI initiatives' },
            { value: 2, label: 'Ad-hoc communication only' },
            { value: 3, label: 'Change management addressed at project level informally' },
            { value: 4, label: 'Structured change plans for AI deployments with stakeholder engagement' },
            { value: 5, label: 'Enterprise-wide change management capability for AI-driven transformation' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'p4',
          question: 'Are employees equipped and supported to work alongside AI tools responsibly?',
          hint: 'AI tools like copilots and chatbots require new behaviours — knowing when to trust output, how to prompt effectively, and what data is safe to share.',
          options: [
            { value: 1, label: 'No AI tools in use by employees' },
            { value: 2, label: 'AI tools used without guidance or training' },
            { value: 3, label: 'Basic guidelines exist but training is limited' },
            { value: 4, label: 'Structured onboarding and responsible use training for AI tools' },
            { value: 5, label: 'Ongoing upskilling with embedded responsible AI practices' },
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
          question: 'Are AI governance policies enforced — not just documented?',
          hint: 'Many organisations have policies that nobody follows. Look for evidence of enforcement: approvals required before deployment, regular policy reviews, and named accountability.',
          options: [
            { value: 1, label: 'No AI governance framework exists' },
            { value: 2, label: 'Informal efforts only; no enforced policies' },
            { value: 3, label: 'Policies documented but inconsistently applied' },
            { value: 4, label: 'Comprehensive framework with defined enforcement mechanisms' },
            { value: 5, label: 'Active ethics board with regular audits and policy refresh cycles' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'g2',
          question: 'Do you systematically test AI models for bias, fairness, and unintended outcomes?',
          hint: 'Ad-hoc checks are insufficient. Look for repeatable testing protocols applied before deployment and monitored post-deployment.',
          options: [
            { value: 1, label: 'Bias and fairness not addressed' },
            { value: 2, label: 'Awareness only; no formal testing' },
            { value: 3, label: 'Ad-hoc checks performed on some models' },
            { value: 4, label: 'Systematic pre-deployment testing protocols in place' },
            { value: 5, label: 'Automated bias detection, fairness monitoring, and mitigation in production' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'g3',
          question: 'Is your organisation tracking and preparing for AI-specific regulation and policies?',
          hint: 'Regulatory exposure varies by industry and geography. Finance, healthcare, and public sector face the most immediate obligations.',
          options: [
            { value: 1, label: 'No awareness of AI regulatory requirements' },
            { value: 2, label: 'Aware of regulation but no preparation underway' },
            { value: 3, label: 'Regulatory landscape assessed; gaps identified but not yet addressed' },
            { value: 4, label: 'Compliance roadmap in place; high-risk systems being addressed' },
            { value: 5, label: 'Proactive regulatory tracking with compliance integrated into AI delivery' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'g4',
          question: 'Do you have a documented understanding of AI-specific risks (e.g., hallucination, harmful outputs, PII leakage), and have you implemented specific guardrails to mitigate these risks in your deployment?',
          hint: 'GenAI introduces risks that traditional AI governance does not cover. Hallucinated facts, confidential data in prompts, and harmful content require dedicated controls.',
          options: [
            { value: 1, label: 'No awareness or controls for GenAI-specific risks' },
            { value: 2, label: 'Risks are informally understood but not documented or controlled' },
            { value: 3, label: 'Risks are documented; basic acceptable-use policy in place, but no technical guardrails' },
            { value: 4, label: 'Documented risk register and defined guardrails covering hallucination, harmful outputs, and PII leakage' },
            { value: 5, label: 'Comprehensive framework: documented risks, automated output filtering, PII detection, and human-in-the-loop review' },
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
          question: 'Is there a defined process for deciding whether to build, buy, or partner for AI capabilities?',
          hint: 'Mature organisations do not rebuild what already exists. A consistent build-vs-buy framework avoids wasted effort and accelerates delivery.',
          options: [
            { value: 1, label: 'No framework; decisions made ad-hoc' },
            { value: 2, label: 'Decisions vary by team with no consistency' },
            { value: 3, label: 'Informal guidance exists but is inconsistently applied' },
            { value: 4, label: 'Clear build-vs-buy criteria applied before new AI investments' },
            { value: 5, label: 'Enterprise framework governing build, buy, and partner decisions with review gates' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'e2',
          question: 'Do you monitor both technical model performance and business outcome metrics in production?',
          hint: 'A model can be technically stable while delivering declining business value. Both dimensions need monitoring.',
          options: [
            { value: 1, label: 'No models in production or no monitoring' },
            { value: 2, label: 'Limited technical monitoring only' },
            { value: 3, label: 'Technical metrics tracked; business outcomes monitored informally' },
            { value: 4, label: 'Both technical and business KPIs tracked post-deployment' },
            { value: 5, label: 'Automated monitoring with alerting across technical and business metrics' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'e3',
          question: 'Are AI initiatives reviewed post-deployment to confirm they delivered the original business case?',
          hint: 'ROI measurement must close the loop — not just track KPIs, but formally compare outcomes against the pre-investment business case.',
          options: [
            { value: 1, label: 'No post-deployment reviews conducted' },
            { value: 2, label: 'Anecdotal feedback only; no structured review' },
            { value: 3, label: 'Some KPIs tracked but not compared to original business case' },
            { value: 4, label: 'Formal post-deployment reviews comparing outcomes to business case' },
            { value: 5, label: 'Continuous value optimisation with findings fed back into future investment decisions' },
            { value: 0, label: 'Not sure of current status', isUnsure: true }
          ]
        },
        {
          id: 'e4',
          question: 'Do you have a managed lifecycle for AI solutions — including prompt versioning, model updates, and output quality reviews?',
          hint: 'AI solutions degrade over time as models are updated by vendors or prompts become stale. A managed lifecycle prevents silent quality drops.',
          options: [
            { value: 1, label: 'No AI solutions in production' },
            { value: 2, label: 'AI tools in use with no lifecycle management' },
            { value: 3, label: 'Some monitoring in place but no formal versioning or review process' },
            { value: 4, label: 'Prompt versioning and output quality reviews conducted regularly' },
            { value: 5, label: 'Full AI lifecycle management with automated quality checks and vendor update protocols' },
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
    setShowContactModal(false);
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

      setIsSubmitting(false);
      setShowContactModal(false);
      setShowResults(true);
    } catch (err) {
      setIsSubmitting(false);
      alert(err.message || 'Something went wrong. Please try again.');
    }
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
                <h3 className="font-bold text-lg sm:text-xl mb-3">Report On Its Way</h3>
                <p className="text-sm sm:text-base text-primary-100 mb-6">
                  Your detailed report and personalised roadmap have been sent to <span className="font-semibold">{contact.email}</span>.
                </p>
                <button
                  onClick={reset}
                  className="w-full bg-white text-primary-700 px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors font-semibold text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Retake Assessment
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

            {/* Results Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={reset}
                className="border border-gray-300 text-gray-700 px-4 py-2 sm:py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <RotateCcw className="w-4 h-4" />
                Retake Assessment
              </button>
              <Link to="/" className="text-sm text-primary-600 font-semibold underline sm:ml-auto self-center">
                Back to Home
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
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                  {idx + 1}. {q.question}
                </h3>
                {q.hint && (
                  <p className="text-xs sm:text-sm text-gray-500 italic mb-4 flex items-start gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
                    {q.hint}
                  </p>
                )}
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
                onClick={() => setShowContactModal(true)}
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
      {/* Contact Modal */}
            {showContactModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                  {/* Modal Header */}
                  <div className="bg-gradient-to-r from-indigo-600 via-green-600 to-green-600 text-white rounded-t-3xl p-6 sm:p-8 relative overflow-hidden">
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
                    <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-indigo-50 to-green-50 border border-indigo-100 rounded-xl">
                      <Send className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600">
                        Your detailed report and personalised roadmap will be sent to your email while you review your results.
                      </p>
                    </div>
      
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-gradient-to-r from-indigo-500 via-green-500 to-green-100 text-white px-6 py-4 rounded-xl hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
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