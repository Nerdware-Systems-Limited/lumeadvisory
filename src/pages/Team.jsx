import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import placeholder from '../assets/placeholder.jpg';

const Team = () => {
  const teamMembers = [
    {
      category: 'Leadership Team',
      role: 'Strategic Vision & Direction',
      description: 'Our leadership team brings decades of combined experience in ICT strategy, digital transformation, and enterprise technology across diverse industries and markets.',
      miniMembers: [
        {
          name: "Stanley Kamanguya, OGW",
          title: "Digital Transformation Advisor & Former CEO, ICT Authority Kenya",
          img: placeholder,
          bio: "18 years of IT and business leadership across public and private sectors. Former CEO of the ICT Authority of Kenya and Director of IFMIS at the National Treasury."
        }
      ],
      expertise: [
        'Digital Transformation Strategy',
        'Public Sector ICT Leadership',
        'Public Finance Systems (IFMIS)',
        'Strategic Advisory & Governance'
      ],
    },
    {
      category: 'Technical Experts',
      role: 'Implementation Excellence',
      description: 'Certified professionals who bring deep technical expertise across cloud architecture, AI/ML, cybersecurity, and enterprise systems to deliver robust solutions.',
      miniMembers: [
        {
          name: "Kevin Otieno",
          title: "Senior Cloud Architect",
          img: placeholder,
          bio: "Specializes in building scalable multi-cloud environments and optimizing enterprise workloads."
        },
        {
          name: "Anita Shah",
          title: "AI/ML Engineering Lead",
          img: placeholder,
          bio: "Designs and deploys advanced machine learning systems for automation, analytics, and prediction."
        },
        {
          name: "Melvin Chondo",
          title: "AI & ICT Solutions Architect | Lead Software Developer",
          img: placeholder,
          bio: "Transforms complex business requirements into secure, scalable systems. Built multi-tenant lending platforms adopted by 5+ microfinance institutions and engineered fraud detection solutions at KRA."
        },
      ],
      expertise: [
        'Cloud Architecture (AWS, Azure, GCP)',
        'AI/ML Engineering',
        'Enterprise Systems Integration',
        'Cybersecurity & Compliance',
        'Solution Architecture & REST APIs',
        'Fraud & Risk Systems'  
      ]
    },
    {
      category: 'Advisory Consultants',
      role: 'Business Value Delivery',
      description: 'Industry specialists who understand sector-specific challenges and translate technology capabilities into measurable business outcomes.',
      miniMembers: [
        {
          name: "Lucy Wanjiku",
          title: "Business Transformation Consultant",
          img: placeholder,
          bio: "Helps organizations streamline processes and align technology initiatives with strategic goals."
        },
        {
          name: "Michael Roberts",
          title: "Change Management Specialist",
          img: placeholder,
          bio: "Guides teams through digital adoption with structured frameworks and stakeholder engagement."
        }
      ],
      expertise: [
        'Business Process Optimization',
        'Change Management',
        'ROI Analysis & Modeling',
        'Stakeholder Engagement'
      ]
    },
    {
      category: 'AI Strategists',
      role: 'AI Transformation',
      description: 'Specialized team focused on helping organizations navigate AI adoption—from readiness assessment to ethical implementation and workforce enablement.',
      miniMembers: [
        {
          name: "Dr. Amina Khalid",
          title: "Lead AI Strategist",
          img: placeholder,
          bio: "Develops enterprise AI roadmaps and ensures responsible, ethical, and high-impact adoption."
        },
        {
          name: "Peter Kamau",
          title: "MLOps & Automation Engineer",
          img: placeholder,
          bio: "Builds automated ML pipelines, ensuring models deploy, scale, and perform reliably in production."
        }
      ],
      expertise: [
        'AI Strategy & Roadmaps',
        'Use Case Identification',
        'AI Governance Frameworks',
        'ML Operations (MLOps)'
      ]
    }
  ];

  const MiniMemberCard = ({ member }) => {
    return (
      <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
        <img
          src={member.img}
          alt={member.name}
          className="w-16 h-16 rounded-full object-cover border border-gray-200"
        />
        <div>
          <h4 className="font-bold text-gray-900">{member.name}</h4>
          <p className="text-sm text-primary-600 font-medium">{member.title}</p>
          <p className="text-sm text-gray-600 mt-1">{member.bio}</p>
        </div>
      </div>
    );
  };


  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional',
    'Microsoft Azure Solutions Expert',
    'Certified Information Systems Security Professional (CISSP)',
    'Project Management Professional (PMP)',
    'Certified ScrumMaster (CSM)',
    'ITIL Expert',
    'Certified Data Professional (CDP)'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Our Team - Lume Advisory",
    "description": "Meet the expert team behind Lume Advisory's ICT consulting and digital transformation services"
  };

  return (
    <>
      <SEO
        title="Our Expert Team | Lume Advisory"
        description="Meet the ICT strategy, AI implementation, and digital transformation experts at Lume Advisory. Certified professionals delivering measurable business value."
        keywords="ICT consulting team, AI strategy experts, digital transformation consultants, cloud architects"
        structuredData={structuredData}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Meet Our Expert Team
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A diverse group of ICT strategists, technical architects, and business advisors united by a commitment to delivering exceptional value through technology.
              </p>
            </div>
          </div>
        </section>

        {/* Team Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Expertise That Drives Results
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team combines strategic vision, technical excellence, and business acumen to help organizations navigate complex technology decisions and achieve measurable outcomes. With decades of collective experience and industry-leading certifications, we bring the depth and breadth of expertise your digital transformation requires.
              </p>
            </div>
          </div>
        </section>

        {/* Team Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.category}
                    </h3>
                    <p className="text-primary-600 font-semibold text-lg">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  {member.miniMembers && (
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">Meet the Team:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {member.miniMembers.map((m, i) => (
                          <MiniMemberCard key={i} member={m} />
                        ))}
                      </div>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Expertise:</h4>
                    <ul className="space-y-2">
                      {member.expertise.map((skill, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Credentials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Industry-Leading Certifications
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                Our team holds prestigious certifications from leading technology vendors and industry bodies, ensuring you receive guidance based on best practices and proven methodologies.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Our Commitment to You
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Continuous Learning</h3>
                  <p className="text-gray-600">We invest in ongoing training to stay current with emerging technologies and industry trends</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Collaborative Approach</h3>
                  <p className="text-gray-600">We work as an extension of your team, fostering knowledge sharing and capability building</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">Every engagement undergoes rigorous quality review to ensure exceptional delivery standards</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Work With Our Team?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your digital transformation goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-all font-semibold text-lg"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Team;