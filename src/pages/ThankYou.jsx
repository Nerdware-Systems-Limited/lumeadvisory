import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const ThankYou = () => {
  return (
    <>
      <SEO
        title="Thank You - We'll Be In Touch Soon"
        description="We've received your message. A Lume Advisory expert will contact you within 24 hours to discuss your ICT needs."
      />

      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary-50 to-indigo-50 min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              {/* Success Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Thank You for Reaching Out!
              </h1>
              
              <p className="text-xl text-gray-600 mb-12">
                We've received your message and one of our ICT advisory experts will contact you within 24 hours to discuss your needs.
              </p>

              {/* What's Next */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-12 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  What Happens Next?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Review (1-2 hours)</h3>
                      <p className="text-gray-600">Our team will review your information and prepare for your consultation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Contact (within 24 hours)</h3>
                      <p className="text-gray-600">We'll email you to schedule a convenient time for a detailed discussion</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Consultation</h3>
                      <p className="text-gray-600">We'll have a detailed conversation about your challenges and how we can help</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* While You Wait */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  While You Wait
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link
                    to="/services"
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="text-primary-600 mb-4">
                      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      Download Services Guide
                    </h3>
                    <p className="text-sm text-gray-600">
                      Learn more about our comprehensive ICT services
                    </p>
                  </Link>

                  <Link
                    to="/case-studies"
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="text-primary-600 mb-4">
                      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      Read Success Stories
                    </h3>
                    <p className="text-sm text-gray-600">
                      See how we've helped organizations like yours
                    </p>
                  </Link>

                  <Link
                    to="/resources"
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="text-primary-600 mb-4">
                      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      Explore Resources
                    </h3>
                    <p className="text-sm text-gray-600">
                      Access our latest ICT insights and guides
                    </p>
                  </Link>
                </div>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us for ICT Insights
                </h3>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://linkedin.com/company/lumeadvisory" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors shadow-sm"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com/lumeadvisory" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors shadow-sm"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-600">
                  Questions? Email us at{' '}
                  <a href="mailto:info@lumeadvisory.africa" className="text-primary-600 hover:text-primary-700 font-semibold">
                    info@lumeadvisory.africa
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ThankYou;
