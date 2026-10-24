import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import claxicLogo from '../assets/claxic logo.png';
import { buildWhatsAppUrl, getWhatsAppConfig } from '../lib/whatsapp';

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/technologies', label: 'Technologies' },
  { to: '/academy', label: 'Academy' },
  { to: '/members', label: 'Our Team' },
  { to: '/contact', label: 'Contact' },
];

const { number: WHATSAPP_NUMBER } = getWhatsAppConfig();
const WHATSAPP_URL = buildWhatsAppUrl(
  WHATSAPP_NUMBER,
  "Hi Claxic, I'd like to know more!"
);

function ClaxicLogo() {
  return (
    <Link to="/" aria-label="Claxic Home" className="flex items-center shrink-0">
      <img
        src={claxicLogo}
        alt="Claxic logo"
        className="h-8 w-auto sm:h-9 md:h-10 object-contain"
        width="120"
        height="40"
        style={{ objectFit: 'contain' }}
      />
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors relative after:absolute after:bottom-[-3px] after:left-0 after:h-0.5 after:bg-[#FF2B12] after:transition-all after:duration-200 ${
      isActive
        ? 'text-[#FF2B12] after:w-full'
        : 'text-[#151515] hover:text-[#FF2B12] after:w-0 hover:after:w-full'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : 'border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <ClaxicLogo />

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#FF2B12] hover:bg-[#e02410] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Get Started
              <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-gray-100`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation" className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#FFF0EC] text-[#FF2B12]'
                    : 'text-[#151515] hover:bg-gray-50 hover:text-[#FF2B12]'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          {WHATSAPP_URL && (
            <div className="pt-2 pb-1">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#FF2B12] text-white text-sm font-bold px-4 py-3 rounded-xl transition-colors hover:bg-[#e02410]"
                onClick={() => setMenuOpen(false)}
              >
                <MessageCircle size={16} strokeWidth={2.5} aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
