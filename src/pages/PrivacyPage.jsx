import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | Claxic"
        description="Read Claxic's Privacy Policy covering personal information, website use, contact enquiries, and privacy practices across Claxic Technologies and Claxic Academy."
        canonicalPath="/privacy"
        robots="index, follow"
        ogType="website"
      />
      <section className="legal-page bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="legal-shell max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#555B65] hover:text-[#FF2B12] mb-8 transition-colors">
          <ArrowLeft size={16} aria-hidden="true" /> Back to Home
        </Link>

        <h1>Privacy Policy</h1>
        <p className="last-updated mb-8">Last updated: 24 October 2026</p>

        <div className="space-y-8 text-[#555B65] leading-relaxed">
          <p>
            Claxic Technologies and Claxic Academy (“Claxic”, “we”, “our”, or “us”) respect your privacy and are committed to handling your personal information responsibly.
          </p>

          <p>
            This Privacy Policy explains how we may collect, use, store, and protect information when you visit{' '}
            <a href="https://www.claxic.in/" target="_blank" rel="noopener noreferrer" className="text-[#FF2B12] hover:underline">
              https://www.claxic.in
            </a>{' '}
            , contact us, or interact with our services and live online courses.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mb-3">1. Information We Collect</h2>
            <p>Depending on how you interact with our website and services, we may collect the following information:</p>

            <div className="mt-4">
              <h3 className="text-lg font-bold text-[#151515] mb-2">Information You Provide</h3>
              <p>When you contact us through our website, we may collect:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number, if provided</li>
                <li>Message or enquiry details</li>
              </ul>
              <p className="mt-3">
                If you enquire about our services, projects, or Claxic Academy courses, we may also process information you voluntarily provide in connection with that enquiry.
              </p>
            </div>

            <div className="mt-5">
              <h3 className="text-lg font-bold text-[#151515] mb-2">Technical Information</h3>
              <p>
                When you visit our website, certain technical information may be processed by the website or its hosting infrastructure, such as browser type, device information, IP address, and basic usage or diagnostic information. The exact information collected depends on the technologies and services enabled on the website.
              </p>
              <p className="mt-3">
                <strong>Analytics and cookies:</strong> Our use of Google Analytics, other analytics tools, and non-essential cookies has not yet been confirmed. This section must be updated once the website’s actual configuration is verified.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mb-3">2. How We Use Your Information</h2>
            <p>We may use the information you provide to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Respond to enquiries and contact requests.</li>
              <li>Communicate with you about our services, projects, and courses.</li>
              <li>Provide customer support.</li>
              <li>Respond to questions about Claxic Academy’s live courses.</li>
              <li>Maintain and improve website functionality and user experience.</li>
              <li>Protect the website against misuse, spam, and security threats.</li>
              <li>Meet applicable legal obligations.</li>
            </ul>
            <p className="mt-3">
              We will not use your contact information for unrelated promotional communications unless we have an appropriate legal basis to do so.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mb-3">3. Contact Through WhatsApp</h2>
            <p>
              Our website may provide a link to contact Claxic through WhatsApp. If you select that link, you may be redirected to WhatsApp or another associated service.
            </p>
            <p className="mt-3">
              Any information you share through WhatsApp is also subject to the applicable terms and privacy practices of that service. Please avoid sending sensitive personal information through messaging platforms unless necessary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mb-3">4. Claxic Academy and Live Courses</h2>
            <p>
              Claxic Academy provides educational content and live online courses.
            </p>
            <p className="mt-3">
              If you contact us about a course, we may use the information you provide to respond to your enquiry and communicate relevant course information.
            </p>
            <p className="mt-3">
              Online account registration, login systems, and payment processing are planned features and are not represented as currently active in this policy. If these features are introduced, we will update this Privacy Policy to explain the relevant information collection and processing before or when those features become available, as appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mb-3">5. Cookies and Similar Technologies</h2>
            <p>
              Cookies and similar technologies may be used by websites to support functionality, remember preferences, measure performance, or understand website usage.
            </p>
            <p className="mt-3">
              We have not yet confirmed whether Claxic currently uses analytics cookies or other non-essential tracking technologies. Once our website configuration is verified, this section will be updated to identify the technologies used and explain any applicable choices or consent options.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mb-3">6. Sharing of Information</h2>
            <p>We do not intend to sell your personal information.</p>
            <p className="mt-3">Information may be shared where necessary:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>With service providers that support website hosting, communications, security, or website operations, if such providers process information on our behalf.</li>
              <li>When required by applicable law or a lawful request.</li>
              <li>When reasonably necessary to protect our rights, website, users, or security.</li>
            </ul>
            <p className="mt-3">
              The specific third-party providers used by Claxic will depend on the services and tools enabled on the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mb-3">7. Data Storage and Retention</h2>
            <p>
              We aim to retain personal information only for as long as reasonably necessary for the purpose for which it was collected, including responding to enquiries, maintaining relevant records, resolving disputes, and meeting legal obligations.
            </p>
            <p className="mt-3">
              Our specific retention periods and deletion procedures have not yet been finalised in this notice. They should be reviewed and documented as part of our operational privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mb-3">8. Data Security</h2>
            <p>
              We take reasonable steps appropriate to our operations to protect information against unauthorised access, disclosure, alteration, or destruction.
            </p>
            <p className="mt-3">
              However, no website, internet transmission, or electronic storage method can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mb-3">9. Your Privacy Choices and Rights</h2>
            <p>
              Subject to applicable law, you may contact us to request information about the personal data we hold about you, request correction or deletion, or raise concerns about how your information is handled.
            </p>
            <p className="mt-3">
              You can submit a privacy-related request using the contact details below. We may need to verify your identity before acting on certain requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mb-3">10. Children’s Privacy</h2>
            <p>
              Claxic’s educational content may be relevant to people of different ages. However, the collection and processing of children’s personal data must comply with applicable laws and requirements.
            </p>
            <p className="mt-3">
              Parents or legal guardians who believe that a child has provided personal information inappropriately may contact us so that we can review the matter.
            </p>
            <p className="mt-3">
              Before introducing features that collect children’s personal data, Claxic should establish appropriate age-related safeguards and consent procedures where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mb-3">11. Third-Party Websites and Services</h2>
            <p>
              Our website may contain links to third-party websites or services, including WhatsApp and external educational or technology platforms.
            </p>
            <p className="mt-3">
              We do not control the privacy practices of third-party services. We encourage users to review the privacy policies of those services before providing information to them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mb-3">12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy when our website, services, technologies, or legal obligations change.
            </p>
            <p className="mt-3">
              Any updated version will be published on this page with a revised “Last updated” date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mb-3">13. Contact Us</h2>
            <p>For privacy questions, requests, or concerns, contact us at:</p>
            <div className="mt-3 rounded-xl border border-[#EAE3DF] bg-[#FFFDFB] p-4 text-[#151515]">
              <p className="font-semibold">Claxic Technologies / Claxic Academy</p>
              <p className="mt-2">
                Website:{' '}
                <a href="https://www.claxic.in/" target="_blank" rel="noopener noreferrer" className="text-[#FF2B12] hover:underline">
                  https://www.claxic.in
                </a>
              </p>
              <p className="mt-1">
                Email:{' '}
                <a href="mailto:support.claxic@gmail.com" className="text-[#FF2B12] hover:underline">
                  support.claxic@gmail.com
                </a>
              </p>
            </div>
            <p className="mt-3">
              We will review privacy-related enquiries and respond as appropriate under applicable law.
            </p>
          </section>
        </div>
      </div>
    </section>
    </>
  );
}
