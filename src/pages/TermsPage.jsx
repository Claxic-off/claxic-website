import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#555B65] hover:text-[#FF2B12] mb-8 transition-colors">
          <ArrowLeft size={16} aria-hidden="true" /> Back to Home
        </Link>
        <h1 className="text-4xl font-black text-[#151515] mb-4">Terms of Use</h1>
        <p className="text-sm text-[#555B65] mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}</p>

        <div className="space-y-6 text-[#555B65] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#151515] mb-2">1. Use of this website</h2>
            <p>By accessing and using the Claxic website, you agree to use it for lawful purposes only and in a way that does not infringe the rights of others.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#151515] mb-2">2. Intellectual property</h2>
            <p>All content on this website — including text, illustrations, design and branding — is the property of Claxic. You may not reproduce, distribute or use this content without express written permission.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#151515] mb-2">3. Services and courses</h2>
            <p>Information about services and courses on this website is provided for general guidance. Specific terms, fees and conditions are agreed directly between Claxic and each client or student before any service is provided.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#151515] mb-2">4. Accuracy of information</h2>
            <p>We aim to keep all information on this website accurate and up to date. However, we do not make any warranties regarding completeness or accuracy. Please contact us directly for the most current details.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#151515] mb-2">5. External links</h2>
            <p>This website may contain links to external platforms such as WhatsApp. We are not responsible for the content or privacy practices of external websites or services.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#151515] mb-2">6. Limitation of liability</h2>
            <p>Claxic shall not be liable for any indirect, incidental or consequential damages arising from your use of this website or reliance on its content.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#151515] mb-2">7. Changes</h2>
            <p>We may update these terms at any time. The most current version will always be available on this page. Continued use of the website constitutes acceptance of the updated terms.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#151515] mb-2">8. Contact</h2>
            <p>For any questions about these terms, please contact us via the <Link to="/contact" className="text-[#FF2B12] hover:underline">Contact page</Link>.</p>
          </section>
        </div>
      </div>
    </section>
  );
}
