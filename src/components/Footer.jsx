import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import claxicLogo from '../assets/claxic logo.png';

const WHATSAPP_NUMBER = import.meta.env.VITE_CLAXIC_WHATSAPP || '';
const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Claxic%2C%20I%27d%20like%20to%20know%20more!`
  : '#contact';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#151515] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" aria-label="Claxic Home">
              <img src={claxicLogo} alt="CLAXIC" className="h-8 w-auto mb-4 object-contain" width="96" height="32" />
            </Link>
            <p className="text-sm text-[#566174] leading-relaxed max-w-xs">
              Technology · Innovation · Education. Building modern digital solutions and practical learning experiences.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[#FF2B12] hover:text-[#ff4d38] font-semibold transition-colors"
            >
              <MessageCircle size={15} strokeWidth={2.5} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#566174] mb-4">Company</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Claxic' },
                { to: '/contact', label: 'Contact' },
                { to: '/faq', label: 'FAQ' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-[#566174] hover:text-[#FF2B12] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#566174] mb-4">Technologies</h3>
            <ul className="space-y-2.5">
              {[
                'Website Development',
                'Web Application Development',
                'Custom Software',
                'UI/UX Design',
                'API Integration',
              ].map((item) => (
                <li key={item}>
                  <Link to="/technologies" className="text-sm text-[#566174] hover:text-[#FF2B12] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#566174] mb-4">Academy</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/academy', label: 'Available Courses' },
                { to: '/academy#learning-approach', label: 'Learning Approach' },
                { to: '/academy#live-classes', label: 'Live Classes' },
                { to: '/academy#communities', label: 'Communities' },
                { to: '/academy#how-to-join', label: 'How to Join' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-[#566174] hover:text-[#FF2B12] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#566174]">
          <p>© {year} Claxic. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#FF2B12] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#FF2B12] transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
