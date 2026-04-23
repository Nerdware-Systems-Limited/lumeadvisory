import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const TermsOfService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - Lume Advisory",
    "description": "Terms and conditions for using Lume Advisory's website and engaging our ICT consulting services."
  };

  return (
    <>
      <SEO
        title="Terms of Service - Lume Advisory"
        description="Terms and conditions for using Lume Advisory's website and engaging our ICT consulting services."
        keywords="Lume Advisory terms of service"
        structuredData={structuredData}
      />

      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Scope</h2>
                <p className="text-gray-600 mb-4">
                  Lume Advisory provides ICT consulting services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                  <li>ICT Investment Advisory</li>
                  <li>AI Strategy & Implementation</li>
                  <li>Cloud Services</li>
                  <li>ICT Project Consulting</li>
                </ul>
                <p className="text-gray-600">
                  Specific service terms and conditions will be outlined in separate service agreements for each engagement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <p className="text-gray-600 mb-4">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Lume Advisory and its licensors. The Service is protected by copyright, trademark, and other laws of both the Kenya and foreign countries.
                </p>
                <p className="text-gray-600">
                  Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Lume Advisory.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations of Liability</h2>
                <p className="text-gray-600 mb-4">
                  In no event shall Lume Advisory, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                  <li>Your access to or use of or inability to access or use the Service</li>
                  <li>Any conduct or content of any third party on the Service</li>
                  <li>Any content obtained from the Service</li>
                  <li>Unauthorized access, use or alteration of your transmissions or content</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-600">
                  These Terms shall be governed and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className="text-gray-600 mt-2">
                  Lume Advisory<br />
                  Email: legal@lumeadvisory.africa<br />
                  Phone: +254 XXX XXX XXX
                </p>
                <p className="text-gray-600 mt-4">
                  Please also review our <Link to="/privacy-policy" className="text-primary-600 hover:text-primary-700">Privacy Policy</Link> which explains how we collect, use, and protect your personal information.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsOfService;
