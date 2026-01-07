import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import bg from '../assets/bg.png'

const Home = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI Strategy & Implementation',
      description: 'Transform AI from buzzword to business value. Comprehensive readiness assessment, strategy development, and implementation advisory.',
      link: '/services/ai-strategy-implementation'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'ICT Investment Advisory',
      description: 'Navigate complex ICT landscapes with confidence. We provide feasibility studies, regulatory guidance, and sustainability planning tailored to your market.',
      link: '/services/ict-investment-advisory'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud Services',
      description: 'Accelerate your cloud journey without costly mistakes. Expert strategy, migration planning, and managed services for scalable growth.',
      link: '/services/cloud-services'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'ICT Project Consulting',
      description: 'Ensure technology projects deliver measurable business value. End-to-end consulting from strategic alignment to continuous improvement.',
      link: '/services/ict-project-consulting'
    }
  ];

  const valueProps = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Deep Expertise',
      description: 'Decades of combined experience in ICT strategy, AI implementation, and digital transformation'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Results-Driven',
      description: 'Focus on measurable business outcomes, not just technology implementation'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Agile & Adaptive',
      description: 'Flexible engagement models that scale with your evolving business needs'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'End-to-End Support',
      description: 'Comprehensive guidance from strategy through implementation to continuous improvement'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lume Advisory",
    "url": "https://www.lumeadvisory.africa",
    "logo": "https://www.lumeadvisory.africa/images/logo.png",
    "description": "Expert ICT investment advisory, AI strategy, cloud migration, and digital transformation consulting for forward-thinking enterprises globally",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@lumeadvisory.africa",
      "contactType": "Customer Service",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://linkedin.com/company/lumeadvisory",
      "https://twitter.com/lumeadvisory"
    ]
  };

  return (
    <>
      <SEO
        title="ICT Advisory & AI Strategy Experts | Lume Advisory"
        description="Lume Advisory delivers ICT investment guidance, AI strategy, cloud migration, and digital transformation consulting for forward-thinking enterprises worldwide."
        keywords="ICT advisory, digital transformation consulting, AI strategy, cloud migration, technology consulting"
        structuredData={structuredData}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 via-white to-indigo-50 py-20 lg:py-28">
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb- leading-tight relative">
                <span className="inline-block bg-gradient-to-r from-gray-900 via-primary-600 to-primary-700 bg-clip-text text-transparent animate-[gradient_8s_ease-in-out_infinite] bg-[length:200%_auto] pb-4">
                  Enabling
                </span>
                <span className="inline-block text-gray-900 mx-2 animate-[pulse_3s_ease-in-out_infinite]">
                  .
                </span>
                <span className="inline-block bg-gradient-to-r from-primary-700 via-primary-600 to-gray-900 bg-clip-text text-transparent animate-[gradient_8s_ease-in-out_infinite_1s] bg-[length:200%_auto] pb-4">
                  Digital
                </span>
                <span className="inline-block text-gray-900 mx-2 animate-[pulse_3s_ease-in-out_infinite_1s]">
                  .
                </span>
                <span className="inline-block bg-gradient-to-r from-gray-900 via-blue-900 to-primary-600 bg-clip-text text-transparent animate-[gradient_8s_ease-in-out_infinite_2s] bg-[length:200%_auto] pb-4">
                  Value
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The future will run on AI, and so can you. We are here to guide you into the future and make your business unstoppable with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  to="/ai-assessment"
                  className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get AI Readiness Assessment
                </Link>
              </div>
              <p className="text-sm text-gray-500">
                Trusted by organizations across multiple industries and markets
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How we can help Maximimize Business Value
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From Insight to implementation, we deliver expert advice to transform your potential to performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group p-8 rounded-xl border-2 border-gray-100 hover:border-primary-500 hover:shadow-xl transition-all duration-300 bg-white"
                >
                  <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="text-primary-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        {/* <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Organizations Choose Lume Advisory
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {valueProps.map((prop, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                    {prop.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600">
                    {prop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Metrics Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Measurable Impact
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
              <div>
                <div className="text-5xl font-bold text-primary-600 mb-2">50+</div>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary-600 mb-2">95%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary-600 mb-2">4</div>
                <p className="text-gray-600">Countries Served</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary-600 mb-2">15+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Unlock Digital Value?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Schedule a no-obligation consultation with our ICT experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-all font-semibold text-lg"
              >
                Send Us a Message
              </Link>
            </div>
            <p className="text-sm mt-6 text-primary-100">
              Average response time: 24 hours
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
