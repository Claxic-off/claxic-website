import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#555B65] hover:text-[#FF2B12] mb-8 transition-colors">
          <ArrowLeft size={16} aria-hidden="true" /> Back to Home
        </Link>
        <h1 className="text-4xl font-black text-[#151515] mb-4">Privacy Policy</h1>
        <p className="text-sm text-[#555B65] mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}</p>

        <div className="prose prose-sm max-w-none space-y-6 text-[#555B65] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#151515] mb-2">1. Who we are</h2>
            <p>This website is operated by Claxic. We take your privacy seriously and are committed to protecting any information you share with us.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#151515] mb-2">2. Information we collect</h2>
            <p>We may collect the following information when you contact us:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Your name</li>
              <li>Your email address</li>
              <li>The content of messages you send us</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#151515] mb-2">3. How we use your information</h2>
            <p>Information you provide is used solely to respond to your enquiry. We do not sell, rent or share your personal details with third parties for marketing purposes.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#151515] mb-2">4. WhatsApp communication</h2>
            <p>If you contact us via WhatsApp, your phone number and messages are subject to WhatsApp's own privacy policy. Please review WhatsApp's terms if you have concerns about that platform.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#151515] mb-2">5. Cookies</h2>
            <p>This website may use minimal technical cookies necessary for it to function. We do not currently use advertising or tracking cookies.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#151515] mb-2">6. Your rights</h2>
            <p>You have the right to request access to, correction of, or deletion of personal information we hold about you. Contact us to make a request.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#151515] mb-2">7. Changes to this policy</h2>
            <p>We may update this policy from time to time. The most current version will always be available on this page.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#151515] mb-2">8. Contact</h2>
            <p>If you have any questions about this privacy policy, please contact us via the <Link to="/contact" className="text-[#FF2B12] hover:underline">Contact page</Link>.</p>
          </section>
        </div>
      </div>
    </section>
  );
}
