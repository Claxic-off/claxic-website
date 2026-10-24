import { Link } from 'react-router-dom';
import { MessageCircle, ArrowUpRight, Globe, Code2 } from 'lucide-react';
import claxicLogo from '../assets/claxic logo.png';
import { buildWhatsAppUrl, getWhatsAppConfig } from '../lib/whatsapp';

const { number: WHATSAPP_NUMBER } = getWhatsAppConfig();
const WHATSAPP_URL = buildWhatsAppUrl(
  WHATSAPP_NUMBER,
  "Hi Claxic, I'd like to know more!"
);

const DIVISIONS = [
  {
    to: '/technologies',
    title: 'Claxic Technologies',
    description: 'Websites, applications, custom software and AI solutions.',
  },
  {
    to: '/academy',
    title: 'Claxic Academy',
    description: 'Practical courses and technology-focused learning.',
  },
];

const SOCIAL_LINKS = [
  {
    href: WHATSAPP_URL,
    label: 'Chat on WhatsApp',
    icon: MessageCircle,
    accent: true,
    external: true,
  },
  {
    href: 'https://www.instagram.com/claxic.off/',
    label: 'Instagram',
    icon: Globe,
    accent: false,
    external: true,
  },
  {
    href: 'https://github.com/Claxic-off',
    label: 'GitHub',
    icon: Code2,
    accent: false,
    external: true,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" aria-label="Claxic Home">
              <img
                src={claxicLogo}
                alt="Claxic logo"
                className="mb-3 h-8 w-auto object-contain sm:h-9"
                width="120"
                height="40"
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p className="text-sm text-[#D5DCE6] leading-relaxed max-w-xs">
              Technology · Innovation · Education. Building modern digital solutions and practical learning experiences.
            </p>

          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#D5DCE6] mb-3">Company</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Claxic' },
                { to: '/contact', label: 'Contact' },
                { to: '/faq', label: 'FAQ' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-[#D5DCE6] hover:text-[#FF2B12] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#D5DCE6] mb-3">Connect With Us</h3>
            <ul className="space-y-2.5">
              {SOCIAL_LINKS.filter(({ href }) => Boolean(href)).map(({ href, label, icon: Icon, accent, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center gap-2 text-sm transition-colors ${
                      accent ? 'text-[#FF2B12] hover:text-[#ff4d38] font-semibold' : 'text-[#D5DCE6] hover:text-[#FF2B12]'
                    }`}
                  >
                    <Icon size={15} strokeWidth={2.2} aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Divisions */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#D5DCE6] mb-3">Our Divisions</h3>
            <div className="space-y-3">
              {DIVISIONS.map(({ to, title, description }) => (
                <Link
                  key={to}
                  to={to}
                  className="group block rounded-xl border border-white/10 px-3 py-2.5 transition-colors hover:border-white/20 hover:bg-white/5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm sm:text-[0.96rem] font-semibold text-white leading-tight">
                        <span className="text-[#FF2B12]">Claxic</span> {title.replace('Claxic ', '')}
                      </p>
                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#9AA3AE]">
                        {description}
                      </p>
                    </div>
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-[#D5DCE6] transition-colors group-hover:border-[#FF2B12] group-hover:text-[#FF2B12]">
                      <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#D5DCE6]">
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
