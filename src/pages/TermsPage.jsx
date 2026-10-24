import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <>
      <SEO
  title="Terms & Conditions | Claxic Technologies"
  description="Read the Terms and Conditions for Claxic Technologies and Claxic Academy, including website use, software development services, educational content, payments and user responsibilities."
  canonicalPath="/terms"
  robots="index, follow"
  ogType="website"
/>
      <section className="legal-page bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="legal-shell max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#555B65] hover:text-[#FF2B12] mb-8 transition-colors">
          <ArrowLeft size={16} aria-hidden="true" /> Back to Home
        </Link>

        <h1>Terms and Conditions</h1>
        <p className="last-updated mb-8">Last updated: 24 October 2026</p>

        <div className="space-y-8 text-[#555B65] leading-relaxed">
          <p>
            Welcome to Claxic Technologies and Claxic Academy (“Claxic”, “we”, “our”, or “us”).
          </p>

          <p>
            These Terms and Conditions govern your access to and use of our website,{' '}
            <a href="https://www.claxic.in/" target="_blank" rel="noreferrer" className="text-[#FF2B12] hover:underline">https://www.claxic.in</a>, and the services and educational content we provide through Claxic Technologies and Claxic Academy.
          </p>

          <p>
            By accessing or using our website, you agree to these Terms and Conditions. If you do not agree, please discontinue use of the website.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mt-8 mb-3">1. About Claxic</h2>
            <p>
              Claxic Technologies provides information about software development, website development, web applications, and related technology services.
            </p>
            <p className="mt-3">
              Claxic Academy provides educational content and live online learning opportunities.
            </p>
            <p className="mt-3">
              Specific services, course details, deliverables, fees, timelines, and other conditions may be governed by separate agreements or service-specific terms where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mt-8 mb-3">2. Eligibility and Acceptable Use</h2>
            <p>You may browse our publicly available website and use its features only for lawful purposes.</p>
            <p className="mt-3">You agree not to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Use the website for unlawful, fraudulent, abusive, or misleading activities.</li>
              <li>Attempt to gain unauthorised access to the website, its systems, or its data.</li>
              <li>Introduce malware, malicious code, or other harmful material.</li>
              <li>Interfere with website security, availability, or normal operation.</li>
              <li>Submit false, misleading, or unauthorised information through our forms.</li>
              <li>Copy, misuse, or redistribute protected content in violation of applicable law or third-party rights.</li>
            </ul>
            <p className="mt-3">If you are a minor, you should involve a parent or legal guardian where required by applicable law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mt-8 mb-3">3. Website Information and Availability</h2>
            <p>We aim to keep website information accurate and up to date. However, descriptions of services, courses, features, and availability may change.</p>
            <p className="mt-3">We do not guarantee that all website content will always be complete, current, uninterrupted, or error-free.</p>
            <p className="mt-3">We may modify, suspend, or discontinue website features when reasonably necessary, subject to applicable law and any relevant contractual commitments.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mt-8 mb-3">4. Technology and Development Services</h2>
            <p>Claxic Technologies may provide software development, website development, web application development, and related technology services.</p>
            <p className="mt-3">Project scope, pricing, deliverables, milestones, timelines, payment terms, revisions, maintenance, and ownership of project materials should be agreed upon separately in writing before work begins.</p>
            <p className="mt-3">Submitting an enquiry or contacting Claxic does not automatically create a service contract or guarantee project acceptance.</p>
            <p className="mt-3">Where a separate written agreement exists, its applicable terms will govern the relevant project. Mandatory legal rights remain unaffected.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mt-8 mb-3">5. Claxic Academy and Educational Content</h2>
            <p>Claxic Academy provides educational information and live online courses.</p>
            <p className="mt-3">Course topics, schedules, instructors, delivery methods, access conditions, and availability may vary by course.</p>
            <p className="mt-3">By participating in a course, you agree to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Provide accurate information when making an enquiry or registering, where registration is available.</li>
              <li>Respect instructors and other learners.</li>
              <li>Avoid disruptive, abusive, fraudulent, or unlawful conduct.</li>
              <li>Avoid sharing course materials in ways that violate applicable intellectual property rights or course-specific rules.</li>
            </ul>
            <p className="mt-3">Course-specific fees, cancellation conditions, refunds, attendance requirements, recordings, and access periods will be communicated separately where applicable.</p>
            <p className="mt-3">We do not guarantee any particular academic result, job placement, salary, certification, or career outcome unless expressly agreed in writing.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mt-8 mb-3">6. Fees and Payments</h2>
            <p>Any applicable fees and payment conditions will be communicated before you commit to a paid service or course.</p>
            <p className="mt-3">Online payment and account features are planned and are not represented as currently active under these Terms.</p>
            <p className="mt-3">If online payments are introduced, we will provide applicable payment, cancellation, and refund information before users make a purchase. Payment processing may be subject to the terms of the relevant payment provider.</p>
            <p className="mt-3">Nothing in these Terms excludes any refund or other right required by applicable law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mt-8 mb-3">7. Intellectual Property</h2>
            <p>Unless otherwise stated, website content created by Claxic, including text, branding, logos, graphics, original educational materials, and other original content, is owned by or licensed to Claxic and is protected by applicable intellectual property laws.</p>
            <p className="mt-3">You may access and use website content for personal, informational, or educational purposes as permitted by law.</p>
            <p className="mt-3">Unless authorised by us or permitted by applicable law, you must not reproduce, republish, sell, redistribute, modify, or commercially exploit our protected content without prior permission.</p>
            <p className="mt-3">Third-party names, trademarks, software, and materials remain the property of their respective owners.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mt-8 mb-3">8. User Submissions and Communications</h2>
            <p>When you submit information through our contact forms, email, or linked communication services, you are responsible for ensuring that the information you provide is accurate and that you have the right to share it.</p>
            <p className="mt-3">Please do not submit confidential, sensitive, or legally restricted information unless it is necessary and you have an appropriate basis to share it.</p>
            <p className="mt-3">Personal information is handled in accordance with our Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mt-8 mb-3">9. Third-Party Links and Services</h2>
            <p>Our website may contain links to external websites or services, including WhatsApp and third-party technology or educational platforms.</p>
            <p className="mt-3">These services operate independently and may have their own terms, privacy policies, and availability conditions.</p>
            <p className="mt-3">We are not responsible for third-party content or services that we do not control. Your use of those services is subject to their applicable terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mt-8 mb-3">10. Disclaimers</h2>
            <p>To the extent permitted by applicable law, the website and its general information are provided on an “as available” basis.</p>
            <p className="mt-3">We do not guarantee that the website will always be uninterrupted, secure, compatible with every device, or free from errors.</p>
            <p className="mt-3">Information provided through educational content is for learning and informational purposes. It should not be treated as a guarantee of specific results.</p>
            <p className="mt-3">Nothing in these Terms excludes a guarantee, right, or remedy that cannot lawfully be excluded.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mt-8 mb-3">11. Limitation of Liability</h2>
            <p>To the extent permitted by applicable law, Claxic will not be responsible for indirect or consequential losses arising from the use of, or inability to use, the website or general informational content.</p>
            <p className="mt-3">Any liability relating to a specific paid service or course will be assessed under the applicable agreement and law.</p>
            <p className="mt-3">Nothing in these Terms limits liability where such limitation is prohibited by applicable law, including any mandatory consumer rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mt-8 mb-3">12. Suspension and Termination</h2>
            <p>We may restrict or suspend access to website features where reasonably necessary to address security threats, unlawful activity, misuse, or a violation of these Terms.</p>
            <p className="mt-3">Where appropriate and legally required, we will provide notice or an opportunity to resolve the issue.</p>
            <p className="mt-3">Any separate service agreement or course-specific cancellation conditions will continue to apply where relevant.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mt-8 mb-3">13. Privacy</h2>
            <p>Your use of the website is also subject to our Privacy Policy, which explains how personal information may be collected and handled.</p>
            <p className="mt-3">
              Read our Privacy Policy through the relevant link on{' '}
              <a href="https://www.claxic.in/" target="_blank" rel="noreferrer" className="text-[#FF2B12] hover:underline">https://www.claxic.in</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mt-8 mb-3">14. Changes to These Terms</h2>
            <p>We may update these Terms when our services, website features, or legal obligations change.</p>
            <p className="mt-3">The revised version will be published on this page with an updated “Last updated” date.</p>
            <p className="mt-3">Your continued use of the website after revised Terms are published may constitute acceptance where permitted by applicable law. Where affirmative consent or separate notice is legally required, we will follow the applicable requirements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mt-8 mb-3">15. Governing Law</h2>
            <p>These Terms are intended to be governed by the applicable laws of India, subject to mandatory legal protections and rules concerning jurisdiction.</p>
            <p className="mt-3">Nothing in this section removes any consumer rights or legal remedies available under applicable law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#151515] mt-8 mb-3">16. Contact Us</h2>
            <p>For questions about these Terms and Conditions, contact:</p>
            <p className="mt-3 font-semibold text-[#151515]">Claxic Technologies / Claxic Academy</p>
            <p className="mt-2">Website: <a href="https://www.claxic.in/" target="_blank" rel="noreferrer" className="text-[#FF2B12] hover:underline">https://www.claxic.in</a></p>
            <p className="mt-2">Email: <a href="mailto:support.claxic@gmail.com" className="text-[#FF2B12] hover:underline">support.claxic@gmail.com</a></p>
          </section>
        </div>
      </div>
    </section>
    </>
  );
}


