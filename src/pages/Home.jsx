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

        {/* Partners Section */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">
                Trusted Technology Partners
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Backed by the World's Leading Platforms
              </h2>
            </div>

            {/* Scrolling marquee track */}
            <div className="relative overflow-hidden">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              <div className="flex animate-[marquee_18s_linear_infinite] gap-16 w-max">
                {[
                  {
                    name: 'Google',
                    logo: (
                      <svg className="h-8" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                        <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
                        <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
                        <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
                        <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
                        <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.70-8.23-4.70-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
                        <path d="M35.29 41.41V32h31.09c.31 1.55.47 3.38.47 5.37 0 6.68-1.83 14.94-7.73 20.84-5.74 5.98-13.07 9.16-22.83 9.16C16.01 67.37.5 52.41.5 32.69.5 12.97 16.01-2 36.29-2c10.09 0 17.28 3.95 22.7 9.12l-6.39 6.39c-3.87-3.61-9.12-6.43-16.31-6.43-13.33 0-23.74 10.74-23.74 24.07 0 13.33 10.41 24.07 23.74 24.07 8.64 0 13.57-3.47 16.72-6.62 2.56-2.56 4.24-6.22 4.91-11.21l-21.63.02z" fill="#4285F4"/>
                      </svg>
                    )
                  },
                  {
                    name: 'Microsoft',
                    logo: (
                      <svg className="h-8" viewBox="0 0 108 23" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h10.93v10.93H0z" fill="#F25022"/>
                        <path d="M11.93 0h10.93v10.93H11.93z" fill="#7FBA00"/>
                        <path d="M0 11.93h10.93v10.93H0z" fill="#00A4EF"/>
                        <path d="M11.93 11.93h10.93v10.93H11.93z" fill="#FFB900"/>
                        <text x="28" y="17" fontFamily="Segoe UI, Arial, sans-serif" fontSize="15" fontWeight="600" fill="#737373">Microsoft</text>
                      </svg>
                    )
                  },
                  {
                    name: 'AWS',
                    logo: (
                      <svg className="h-8" viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.96 14.62c0 .57.06 1.03.17 1.36.13.33.29.7.52 1.09.08.13.12.26.12.38 0 .17-.1.34-.31.51l-1.03.69c-.15.1-.3.15-.43.15-.17 0-.34-.08-.51-.24a5.3 5.3 0 01-.61-.8 13.1 13.1 0 01-.52-1.02c-1.31 1.55-2.96 2.32-4.94 2.32-1.41 0-2.54-.4-3.36-1.2-.82-.8-1.24-1.87-1.24-3.2 0-1.42.5-2.57 1.51-3.43 1.01-.86 2.35-1.3 4.05-1.3.56 0 1.14.05 1.75.14.61.09 1.24.23 1.9.4v-1.2c0-1.25-.26-2.12-.77-2.63-.52-.51-1.4-.76-2.65-.76-.57 0-1.16.07-1.76.21-.6.14-1.19.32-1.76.55-.26.12-.46.19-.57.22-.11.03-.2.05-.26.05-.23 0-.34-.17-.34-.51v-.8c0-.27.03-.47.1-.59.07-.12.2-.24.4-.36.57-.29 1.25-.53 2.04-.72a9.82 9.82 0 012.41-.29c1.84 0 3.18.42 4.04 1.25.85.84 1.28 2.11 1.28 3.82v5.03zm-6.84 2.56c.54 0 1.1-.1 1.69-.29.59-.2 1.11-.56 1.55-1.06.26-.31.46-.65.56-1.04.1-.38.17-.85.17-1.39v-.67a13.6 13.6 0 00-1.52-.28 12.44 12.44 0 00-1.55-.1c-1.1 0-1.9.22-2.44.66-.54.44-.8 1.06-.8 1.88 0 .77.2 1.34.6 1.73.39.38.96.56 1.74.56zm13.17 1.77c-.3 0-.5-.05-.63-.16-.13-.1-.25-.32-.35-.63l-3.9-12.83c-.1-.32-.15-.54-.15-.65 0-.26.13-.4.39-.4h1.6c.31 0 .52.05.64.16.13.1.24.32.34.63l2.79 10.99 2.59-10.99c.09-.32.2-.53.32-.63.13-.1.35-.16.65-.16h1.3c.31 0 .52.05.65.16.12.1.24.32.32.63l2.62 11.13 2.87-11.13c.1-.32.22-.53.35-.63.13-.1.34-.16.63-.16h1.52c.26 0 .4.13.4.4 0 .08-.01.16-.03.25-.02.09-.06.22-.12.39l-4 12.83c-.1.32-.22.53-.35.63-.13.1-.34.16-.62.16h-1.41c-.31 0-.52-.05-.65-.16-.13-.11-.24-.33-.32-.64l-2.57-10.72-2.56 10.71c-.09.32-.2.53-.32.64-.13.11-.35.16-.65.16h-1.4zm21.22.46c-.85 0-1.7-.1-2.52-.29-.82-.2-1.46-.41-1.89-.65-.26-.15-.44-.31-.5-.47a1.18 1.18 0 01-.1-.46v-.83c0-.34.12-.51.37-.51.1 0 .2.02.3.05.1.04.24.1.4.17.54.24 1.13.43 1.74.56.63.13 1.24.2 1.86.2 1 0 1.77-.17 2.3-.52.54-.34.82-.84.82-1.48 0-.44-.14-.8-.41-1.1-.28-.29-.8-.56-1.58-.8l-2.27-.7c-1.15-.36-2-.89-2.52-1.6a3.79 3.79 0 01-.78-2.31c0-.67.14-1.26.43-1.77.29-.51.68-.96 1.17-1.32.5-.37 1.06-.65 1.71-.84.65-.19 1.33-.28 2.04-.28.36 0 .73.02 1.09.07.37.05.71.12 1.05.2.32.09.62.19.9.3.28.1.5.21.65.32.22.14.38.28.47.43.09.14.14.32.14.54v.77c0 .34-.13.51-.38.51-.13 0-.34-.07-.62-.2a7.48 7.48 0 00-3.14-.64c-.9 0-1.61.14-2.1.44-.5.3-.75.74-.75 1.36 0 .44.15.82.46 1.11.3.3.86.59 1.67.85l2.23.7c1.14.36 1.96.86 2.46 1.5.5.65.74 1.39.74 2.22 0 .69-.14 1.31-.41 1.85-.28.54-.67 1.02-1.17 1.4-.5.4-1.1.69-1.79.9-.72.22-1.48.33-2.29.33z" fill="#252F3E"/>
                        <path d="M54.47 25.6c-6.38 4.71-15.64 7.2-23.61 7.2-11.17 0-21.22-4.13-28.82-10.99-.6-.54-.06-1.28.65-.86 8.21 4.77 18.35 7.65 28.81 7.65 7.06 0 14.82-1.46 21.96-4.5.97-.53 2.02.63 1.01 1.5z" fill="#FF9900"/>
                        <path d="M57.15 22.52c-.82-1.05-5.42-.5-7.49-.25-.63.07-.72-.47-.16-.87 3.66-2.57 9.67-1.83 10.37-.97.7.87-.18 6.89-3.62 9.76-.53.45-1.03.21-.8-.38.77-1.93 2.52-6.24 1.7-7.29z" fill="#FF9900"/>
                      </svg>
                    )
                  },
                  {
                    name: 'AIdeology',
                    logo: (
                      <span className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-bold text-sm">AI</span>
                        <span className="text-xl font-bold text-gray-700 tracking-tight">deology</span>
                      </span>
                    )
                  }
                ].concat([
                  // Duplicate for seamless loop
                  {
                    name: 'Google',
                    logo: (
                      <svg className="h-8" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                        <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
                        <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
                        <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
                        <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
                        <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.70-8.23-4.70-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
                        <path d="M35.29 41.41V32h31.09c.31 1.55.47 3.38.47 5.37 0 6.68-1.83 14.94-7.73 20.84-5.74 5.98-13.07 9.16-22.83 9.16C16.01 67.37.5 52.41.5 32.69.5 12.97 16.01-2 36.29-2c10.09 0 17.28 3.95 22.7 9.12l-6.39 6.39c-3.87-3.61-9.12-6.43-16.31-6.43-13.33 0-23.74 10.74-23.74 24.07 0 13.33 10.41 24.07 23.74 24.07 8.64 0 13.57-3.47 16.72-6.62 2.56-2.56 4.24-6.22 4.91-11.21l-21.63.02z" fill="#4285F4"/>
                      </svg>
                    )
                  },
                  {
                    name: 'Microsoft',
                    logo: (
                      <svg className="h-8" viewBox="0 0 108 23" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h10.93v10.93H0z" fill="#F25022"/>
                        <path d="M11.93 0h10.93v10.93H11.93z" fill="#7FBA00"/>
                        <path d="M0 11.93h10.93v10.93H0z" fill="#00A4EF"/>
                        <path d="M11.93 11.93h10.93v10.93H11.93z" fill="#FFB900"/>
                        <text x="28" y="17" fontFamily="Segoe UI, Arial, sans-serif" fontSize="15" fontWeight="600" fill="#737373">Microsoft</text>
                      </svg>
                    )
                  },
                  {
                    name: 'AWS',
                    logo: (
                      <svg className="h-8" viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.96 14.62c0 .57.06 1.03.17 1.36.13.33.29.7.52 1.09.08.13.12.26.12.38 0 .17-.1.34-.31.51l-1.03.69c-.15.1-.3.15-.43.15-.17 0-.34-.08-.51-.24a5.3 5.3 0 01-.61-.8 13.1 13.1 0 01-.52-1.02c-1.31 1.55-2.96 2.32-4.94 2.32-1.41 0-2.54-.4-3.36-1.2-.82-.8-1.24-1.87-1.24-3.2 0-1.42.5-2.57 1.51-3.43 1.01-.86 2.35-1.3 4.05-1.3.56 0 1.14.05 1.75.14.61.09 1.24.23 1.9.4v-1.2c0-1.25-.26-2.12-.77-2.63-.52-.51-1.4-.76-2.65-.76-.57 0-1.16.07-1.76.21-.6.14-1.19.32-1.76.55-.26.12-.46.19-.57.22-.11.03-.2.05-.26.05-.23 0-.34-.17-.34-.51v-.8c0-.27.03-.47.1-.59.07-.12.2-.24.4-.36.57-.29 1.25-.53 2.04-.72a9.82 9.82 0 012.41-.29c1.84 0 3.18.42 4.04 1.25.85.84 1.28 2.11 1.28 3.82v5.03zm-6.84 2.56c.54 0 1.1-.1 1.69-.29.59-.2 1.11-.56 1.55-1.06.26-.31.46-.65.56-1.04.1-.38.17-.85.17-1.39v-.67a13.6 13.6 0 00-1.52-.28 12.44 12.44 0 00-1.55-.1c-1.1 0-1.9.22-2.44.66-.54.44-.8 1.06-.8 1.88 0 .77.2 1.34.6 1.73.39.38.96.56 1.74.56zm13.17 1.77c-.3 0-.5-.05-.63-.16-.13-.1-.25-.32-.35-.63l-3.9-12.83c-.1-.32-.15-.54-.15-.65 0-.26.13-.4.39-.4h1.6c.31 0 .52.05.64.16.13.1.24.32.34.63l2.79 10.99 2.59-10.99c.09-.32.2-.53.32-.63.13-.1.35-.16.65-.16h1.3c.31 0 .52.05.65.16.12.1.24.32.32.63l2.62 11.13 2.87-11.13c.1-.32.22-.53.35-.63.13-.1.34-.16.63-.16h1.52c.26 0 .4.13.4.4 0 .08-.01.16-.03.25-.02.09-.06.22-.12.39l-4 12.83c-.1.32-.22.53-.35.63-.13.1-.34.16-.62.16h-1.41c-.31 0-.52-.05-.65-.16-.13-.11-.24-.33-.32-.64l-2.57-10.72-2.56 10.71c-.09.32-.2.53-.32.64-.13.11-.35.16-.65.16h-1.4zm21.22.46c-.85 0-1.7-.1-2.52-.29-.82-.2-1.46-.41-1.89-.65-.26-.15-.44-.31-.5-.47a1.18 1.18 0 01-.1-.46v-.83c0-.34.12-.51.37-.51.1 0 .2.02.3.05.1.04.24.1.4.17.54.24 1.13.43 1.74.56.63.13 1.24.2 1.86.2 1 0 1.77-.17 2.3-.52.54-.34.82-.84.82-1.48 0-.44-.14-.8-.41-1.1-.28-.29-.8-.56-1.58-.8l-2.27-.7c-1.15-.36-2-.89-2.52-1.6a3.79 3.79 0 01-.78-2.31c0-.67.14-1.26.43-1.77.29-.51.68-.96 1.17-1.32.5-.37 1.06-.65 1.71-.84.65-.19 1.33-.28 2.04-.28.36 0 .73.02 1.09.07.37.05.71.12 1.05.2.32.09.62.19.9.3.28.1.5.21.65.32.22.14.38.28.47.43.09.14.14.32.14.54v.77c0 .34-.13.51-.38.51-.13 0-.34-.07-.62-.2a7.48 7.48 0 00-3.14-.64c-.9 0-1.61.14-2.1.44-.5.3-.75.74-.75 1.36 0 .44.15.82.46 1.11.3.3.86.59 1.67.85l2.23.7c1.14.36 1.96.86 2.46 1.5.5.65.74 1.39.74 2.22 0 .69-.14 1.31-.41 1.85-.28.54-.67 1.02-1.17 1.4-.5.4-1.1.69-1.79.9-.72.22-1.48.33-2.29.33z" fill="#252F3E"/>
                        <path d="M54.47 25.6c-6.38 4.71-15.64 7.2-23.61 7.2-11.17 0-21.22-4.13-28.82-10.99-.6-.54-.06-1.28.65-.86 8.21 4.77 18.35 7.65 28.81 7.65 7.06 0 14.82-1.46 21.96-4.5.97-.53 2.02.63 1.01 1.5z" fill="#FF9900"/>
                        <path d="M57.15 22.52c-.82-1.05-5.42-.5-7.49-.25-.63.07-.72-.47-.16-.87 3.66-2.57 9.67-1.83 10.37-.97.7.87-.18 6.89-3.62 9.76-.53.45-1.03.21-.8-.38.77-1.93 2.52-6.24 1.7-7.29z" fill="#FF9900"/>
                      </svg>
                    )
                  },
                  {
                    name: 'AIdeology',
                    logo: (
                      <span className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-bold text-sm">AI</span>
                        <span className="text-xl font-bold text-gray-700 tracking-tight">deology</span>
                      </span>
                    )
                  }
                ]).map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center min-w-[200px] h-16 px-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  >
                    {partner.logo}
                  </div>
                ))}
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
