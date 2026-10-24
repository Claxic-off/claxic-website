import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowRight, Check, ExternalLink, Sparkles } from 'lucide-react';
import techHeroImage from '../assets/09 Pixel-Art AI Robot Coding Workspace.png';
import ServiceCard from '../components/ServiceCard';
import {
  services,
  processSteps,
  portfolioProjects,
  technologyGroups,
  companyPrinciples,
} from '../data/services';

export default function TechnologiesPage() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll('[data-reveal]'));

    if (!revealTargets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -4% 0px' }
    );

    revealTargets.forEach((target, index) => {
      target.style.setProperty('--reveal-delay', `${Math.min(index * 55, 300)}ms`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  const renderProcessIcon = (title) => {
    const common = {
      width: 20,
      height: 20,
      viewBox: '0 0 20 20',
      fill: 'none',
      stroke: '#171717',
      strokeWidth: 1.5,
      strokeLinecap: 'square',
      strokeLinejoin: 'miter',
      'aria-hidden': 'true',
    };

    switch (title) {
      case 'Discover':
        return (
          <svg {...common}>
            <circle cx="8" cy="8" r="4.5" />
            <path d="M11.5 11.5L16 16" />
            <path d="M6 8H10" />
          </svg>
        );
      case 'Plan':
        return (
          <svg {...common}>
            <rect x="4" y="4" width="12" height="12" rx="0.5" />
            <path d="M7 8H13M7 11H13M7 14H11" />
            <path d="M4 6H16" />
          </svg>
        );
      case 'Develop':
        return (
          <svg {...common}>
            <rect x="3" y="4" width="14" height="12" rx="0.5" />
            <path d="M7 8L5 10L7 12M12 8L14 10L12 12" />
            <path d="M10 7L9 13" />
          </svg>
        );
      case 'Test':
        return (
          <svg {...common}>
            <rect x="4" y="4" width="12" height="12" rx="0.5" />
            <path d="M7 9L9 11L13 7" />
            <path d="M7 14H13" />
          </svg>
        );
      case 'Launch & Improve':
        return (
          <svg {...common}>
            <path d="M10 4L13 8L12 12L8 14L5 10L6 6L10 4Z" />
            <path d="M9 14L7 18M11 14L13 18" />
            <path d="M6 8H8" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <SEO
  title="Claxic Technologies | Web & Software Development"
  description="Claxic Technologies builds custom websites, web applications and software solutions for businesses in India. Explore our development and digital services."
  canonicalPath="/technologies"
  robots="index, follow"
  ogType="website"
/>
      <style>{`
        @keyframes techFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes sparklePulse {
          0%, 100% { opacity: 0.28; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.18); }
        }

        @keyframes pixelDrift {
          0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.18; }
          50% { transform: translate3d(8px, -12px, 0); opacity: 0.7; }
        }

        @keyframes pixelDriftSide {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(14px, 0, 0); }
        }

        .tech-hero-title {
          display: block;
          width: min(100%, 620px);
          max-width: 620px;
          font-family: 'Press Start 2P', 'Courier New', monospace;
          font-size: clamp(2.2rem, 2.4vw, 2.9rem);
          line-height: 1.25;
          letter-spacing: 0.02em;
          white-space: nowrap;
          text-transform: uppercase;
        }

        .tech-hero-description,
        .tech-hero-feature-label,
        .pixel-btn {
          font-family: 'Press Start 2P', 'Courier New', monospace;
        }

        .tech-hero-description {
          font-size: 0.72rem;
          line-height: 1.8;
          letter-spacing: 0.02em;
          text-transform: none;
        }

        .tech-hero-feature-label {
          font-size: 0.62rem;
          line-height: 1.5;
          letter-spacing: 0.02em;
          text-transform: none;
        }

        .pixel-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          min-height: 52px;
          padding: 0.85rem 1.3rem;
          border: 3px solid #171717;
          border-radius: 0;
          box-shadow: 4px 4px 0 0 rgba(23, 23, 23, 0.8);
          font-size: 0.62rem;
          letter-spacing: 0.02em;
          text-transform: none;
          line-height: 1.4;
          transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, background-color 0.18s ease, color 0.18s ease;
        }

        .pixel-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 0 rgba(23, 23, 23, 0.9);
        }

        .pixel-btn:active {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0 0 rgba(23, 23, 23, 0.8);
        }

        .pixel-btn--primary {
          background: #FF2B12;
          color: #FFFFFF;
          border-color: #171717;
        }

        .pixel-btn--secondary {
          background: #FFFFFF;
          color: #171717;
          border-color: #171717;
        }

        .pixel-btn--secondary:hover {
          background: #FFF5F1;
          color: #FF2B12;
          border-color: #FF2B12;
        }

        .hero-feature-card {
          border: 2px solid rgba(255, 43, 18, 0.18);
          background: rgba(255, 255, 255, 0.18);
          box-shadow: none;
        }

        .hero-feature-card .hero-feature-icon {
          border-color: #171717;
          box-shadow: 2px 2px 0 0 rgba(23, 23, 23, 0.12);
        }

        .tech-page {
          font-family: 'Press Start 2P', 'Courier New', monospace;
        }

        .tech-reveal {
          opacity: 0;
          transform: translateY(14px) scale(0.992);
          transition: opacity 0.36s cubic-bezier(0.22, 1, 0.36, 1), transform 0.46s cubic-bezier(0.22, 1, 0.36, 1), filter 0.28s ease;
          transition-delay: var(--reveal-delay, 0ms);
          will-change: opacity, transform;
        }

        .tech-reveal.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .tech-hero-visual {
          transform: translateY(18px) scale(0.96);
        }

        .tech-hero-visual.is-visible {
          transform: translateY(0) scale(1);
        }

        .tech-process-card .tech-process-step,
        .tech-process-card .tech-process-icon {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease;
        }

        .tech-process-step {
          transform: scale(0.9);
        }

        .tech-process-icon {
          transform: scale(0.9);
        }

        .tech-process-card.is-visible .tech-process-step {
          transform: scale(1);
        }

        .tech-process-card.is-visible .tech-process-icon {
          transform: scale(1) rotate(0deg);
        }

        .tech-page h2,
        .tech-page h3,
        .tech-page p,
        .tech-page li,
        .tech-page span,
        .tech-page a,
        .tech-page button,
        .tech-page div {
          font-family: 'Press Start 2P', 'Courier New', monospace;
        }

        .tech-page .tech-section-eyebrow {
          font-size: 0.62rem;
          line-height: 1.6;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .tech-page .tech-section-title {
          font-size: clamp(1.4rem, 1.8vw, 2.2rem);
          line-height: 1.5;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .tech-page .tech-section-copy,
        .tech-page .tech-project-copy,
        .tech-page .tech-project-problem,
        .tech-page .tech-project-feature,
        .tech-page .tech-process-description,
        .tech-page .tech-principle-copy,
        .tech-page .tech-cta-copy,
        .tech-page .tech-technology-card p,
        .tech-page .tech-technology-card span,
        .tech-page .tech-tech-group-title,
        .tech-page .tech-tech-chip,
        .tech-page .tech-process-card h3,
        .tech-page .tech-process-card p,
        .tech-page .tech-principle-item p {
          font-size: 0.7rem;
          line-height: 1.7;
          letter-spacing: 0.02em;
        }

        .tech-page .tech-section-copy,
        .tech-page .tech-project-copy,
        .tech-page .tech-project-problem,
        .tech-page .tech-project-feature,
        .tech-page .tech-process-description,
        .tech-page .tech-principle-copy,
        .tech-page .tech-cta-copy {
          color: #566174;
        }

        .tech-page .tech-project-card .tech-project-title,
        .tech-page .tech-project-card h3,
        .tech-page .tech-project-card .tech-project-label,
        .tech-page .tech-project-card .tech-project-meta,
        .tech-page .tech-service-card h3,
        .tech-page .tech-tech-group-title,
        .tech-page .tech-process-card h3,
        .tech-page .tech-principle-item p,
        .tech-page .tech-cta-title {
          font-size: 1rem;
          line-height: 1.5;
          letter-spacing: 0.02em;
        }

        .tech-page .tech-service-grid article {
          border-radius: 1.25rem;
        }

        .tech-page .tech-service-grid article h3 {
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 0.75rem;
        }

        .tech-page .tech-service-grid article p,
        .tech-page .tech-service-grid article li {
          font-size: 0.68rem;
          line-height: 1.7;
          letter-spacing: 0.02em;
        }

        .tech-page .tech-project-card,
        .tech-page .tech-tech-group-card,
        .tech-page .tech-process-card,
        .tech-page .tech-principle-item {
          font-family: 'Press Start 2P', 'Courier New', monospace;
        }

        .tech-page .tech-project-card .tech-project-tag,
        .tech-page .tech-project-card .tech-project-chip,
        .tech-page .tech-tech-chip,
        .tech-page .tech-project-link {
          font-size: 0.56rem;
          line-height: 1.4;
          letter-spacing: 0.04em;
        }

        .tech-page .tech-process-step {
          font-size: 0.78rem;
          line-height: 1.2;
          letter-spacing: 0.04em;
        }

        .tech-stack-section {
          background: #FFF1ED;
        }

        .tech-stack-header,
        .tech-stack-subtitle {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tech-stack-header.is-visible,
        .tech-stack-subtitle.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .tech-stack-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.24);
          border-radius: 1.5rem;
          padding: 1.5rem;
          opacity: 0;
          transform: translateY(24px);
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s ease, border-color 0.28s ease, filter 0.28s ease, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: var(--card-delay, 0ms);
          isolation: isolate;
        }

        .tech-stack-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .tech-stack-card:hover {
          transform: translateY(-6px);
          filter: brightness(1.04);
        }

        .tech-stack-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent 48%);
          pointer-events: none;
          z-index: 0;
        }

        .tech-stack-card::after {
          content: '';
          position: absolute;
          left: 1rem;
          right: 1rem;
          bottom: 0.7rem;
          height: 1px;
          background: rgba(255,255,255,0.25);
          pointer-events: none;
          z-index: 0;
        }

        .tech-stack-card-number {
          position: absolute;
          top: 0.9rem;
          right: 0.95rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 2.1rem;
          padding: 0.3rem 0.5rem;
          border: 1px solid rgba(255,255,255,0.32);
          background: rgba(255,255,255,0.08);
          border-radius: 0.45rem;
          color: rgba(255,255,255,0.92);
          font-size: 0.58rem;
          line-height: 1;
          letter-spacing: 0.08em;
          z-index: 1;
        }

        .tech-stack-card-pixel,
        .tech-stack-card-pixel-sm,
        .tech-stack-card-pixel-line {
          position: absolute;
          display: block;
          background: rgba(255,255,255,0.7);
          opacity: 0.4;
          z-index: 1;
        }

        .tech-stack-card-pixel {
          width: 8px;
          height: 8px;
          animation: pixelDrift 7.5s ease-in-out infinite;
        }

        .tech-stack-card-pixel-sm {
          width: 6px;
          height: 6px;
          opacity: 0.55;
          animation: pixelDriftSide 8s ease-in-out infinite;
        }

        .tech-stack-card-pixel-line {
          height: 2px;
          border-radius: 999px;
          opacity: 0.7;
          animation: pixelDrift 9s ease-in-out infinite;
        }

        .tech-stack-card-title {
          position: relative;
          z-index: 1;
          margin-bottom: 0.75rem;
          color: #FFFFFF;
          font-size: clamp(1rem, 1vw + 0.7rem, 1.25rem);
          line-height: 1.5;
        }

        .tech-stack-card-description {
          position: relative;
          z-index: 1;
          margin-bottom: 1rem;
          color: rgba(255,255,255,0.9);
          font-size: 0.63rem;
          line-height: 1.8;
          letter-spacing: 0.02em;
        }

        .tech-stack-chip-list {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-stack-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.4rem;
          border: 1px solid rgba(255,255,255,0.24);
          background: rgba(255,255,255,0.08);
          color: #FFFFFF;
          padding: 0.5rem 0.7rem;
          font-size: 0.54rem;
          line-height: 1.3;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(8px);
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.28s ease, border-color 0.28s ease, opacity 0.28s ease;
          transition-delay: var(--chip-delay, 0ms);
        }

        .tech-stack-card.is-visible .tech-stack-chip {
          opacity: 1;
          transform: translateY(0);
        }

        .tech-stack-card:hover .tech-stack-chip {
          transform: translateY(-1px);
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.4);
        }

        .tech-process-section {
          position: relative;
          background: #FFF8F5;
        }

        .tech-process-heading {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tech-process-heading.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .tech-process-grid {
          position: relative;
          display: grid;
          gap: 1.1rem;
          align-items: stretch;
        }

        .tech-process-grid::before {
          content: '';
          position: absolute;
          left: 7%;
          right: 7%;
          top: 2.2rem;
          height: 2px;
          background: linear-gradient(90deg, rgba(255, 43, 18, 0.1), rgba(255, 43, 18, 0.9), rgba(255, 43, 18, 0.12));
          opacity: 0;
          pointer-events: none;
          z-index: 0;
          transform: scaleX(0.96);
          transform-origin: center;
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .tech-process-grid.is-visible::before {
          opacity: 1;
          transform: scaleX(1);
        }

        .tech-process-card {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 1.1rem 1rem 1.25rem;
          border: 2px solid rgba(23, 23, 23, 0.12);
          border-radius: 1.25rem;
          background: #FFF8F5;
          box-shadow: 0 4px 0 rgba(23, 23, 23, 0.06);
          opacity: 0;
          transform: translateY(16px);
          transition: transform 0.26s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.24s ease, border-color 0.24s ease, opacity 0.38s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: var(--card-delay, 0ms);
        }

        .tech-process-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .tech-process-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 43, 18, 0.35);
          box-shadow: 0 12px 18px rgba(32, 32, 32, 0.08);
        }

        .tech-process-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.9rem;
        }

        .tech-process-step {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.35rem;
          height: 2.35rem;
          padding: 0;
          border: 2px solid #171717;
          border-radius: 0.45rem;
          background: #FF2B12;
          color: #FFFFFF;
          font-size: 0.72rem;
          line-height: 1;
          box-shadow: 0 0 0 2px rgba(255, 43, 18, 0.12);
          flex-shrink: 0;
        }

        .tech-process-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.15rem;
          height: 2.15rem;
          border: 2px solid rgba(23, 23, 23, 0.8);
          border-radius: 0.4rem;
          background: rgba(255, 255, 255, 0.68);
          color: #171717;
          transition: transform 0.28s ease, background-color 0.28s ease;
          flex-shrink: 0;
        }

        .tech-process-card:hover .tech-process-icon {
          transform: translateY(-2px) rotate(-2deg);
          background: rgba(255, 255, 255, 0.9);
        }

        .tech-process-card h3 {
          margin-bottom: 0.6rem;
          color: #202020;
          font-size: 0.9rem;
          line-height: 1.5;
          letter-spacing: 0.03em;
        }

        .tech-process-card p {
          color: #566174;
          font-size: 0.63rem;
          line-height: 1.8;
          letter-spacing: 0.02em;
          margin: 0;
        }

        @media (min-width: 1024px) {
          .tech-process-grid::before {
            opacity: 1;
          }
        }

        @media (max-width: 1023px) {
          .tech-process-grid::before {
            display: none;
          }
        }

        @media (min-width: 1024px) {
          .hero-copy {
            padding-right: 0.5rem;
          }
        }

        .tech-hero-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          opacity: 0.9;
        }

        .tech-pixel {
          position: absolute;
          display: block;
          width: 6px;
          height: 6px;
          background: rgba(255, 90, 54, 0.7);
          box-shadow: 0 0 0 1px rgba(255, 90, 54, 0.16);
          opacity: 0.25;
          animation: pixelDrift 7s ease-in-out infinite;
        }

        .tech-pixel--warm {
          background: rgba(255, 184, 77, 0.7);
        }

        .tech-pixel--cream {
          background: rgba(255, 246, 232, 0.9);
        }

        .tech-pixel--slow {
          animation-duration: 10s;
        }

        .tech-pixel--side {
          animation-name: pixelDriftSide;
          animation-duration: 12s;
        }

        @media (max-width: 767px) {
          .pixel-btn {
            width: 100%;
            justify-content: center;
          }

          .tech-hero-title {
            width: 100%;
            max-width: 100%;
            white-space: normal;
            font-size: clamp(1.8rem, 7vw, 2.5rem);
            line-height: 1.2;
          }

          .tech-hero-description {
            font-size: 0.7rem;
          }

          .tech-hero-particles {
            opacity: 0.45;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-reveal,
          .tech-reveal.is-visible,
          .tech-hero-visual,
          .tech-hero-visual.is-visible,
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            transform: none !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <section className="relative overflow-hidden bg-[#FFF1ED] px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pb-10 lg:pt-16">
        <div className="tech-hero-particles" aria-hidden="true">
          <span className="tech-pixel tech-pixel--warm" style={{ left: '8%', top: '18%', animationDelay: '0.2s' }} />
          <span className="tech-pixel tech-pixel--cream tech-pixel--slow" style={{ left: '15%', top: '58%', animationDelay: '1s' }} />
          <span className="tech-pixel tech-pixel--warm tech-pixel--slow" style={{ right: '14%', top: '12%', animationDelay: '1.4s' }} />
          <span className="tech-pixel tech-pixel--cream" style={{ right: '24%', top: '58%', animationDelay: '0.8s' }} />
          <span className="tech-pixel tech-pixel--warm tech-pixel--side" style={{ right: '8%', top: '68%', animationDelay: '1.6s' }} />
          <span className="tech-pixel tech-pixel--cream tech-pixel--slow" style={{ right: '34%', bottom: '22%', animationDelay: '2.2s' }} />
          <span className="tech-pixel" style={{ left: '42%', bottom: '16%', animationDelay: '1.3s' }} />
        </div>

        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-center gap-8 lg:grid-cols-[58%_42%] lg:gap-10 xl:gap-12">
            <div className="hero-copy mx-auto max-w-[640px] text-left lg:mx-0 lg:text-left">
              <p className="tech-reveal mb-[1.1rem] text-[0.66rem] font-black uppercase tracking-[0.22em] text-[#FF2B12] sm:text-[0.72rem]" data-reveal>
                CLAXIC TECHNOLOGIES
              </p>

              <h1 className="tech-hero-title">
                <span className="tech-reveal block text-[#171717]" data-reveal style={{ '--reveal-delay': '90ms' }}>CUSTOM WEBSITE</span>{' '}
                <span className="tech-reveal block text-[#FF2B12]" data-reveal style={{ '--reveal-delay': '180ms' }}>DEVELOPMENT SERVICES.</span>
              </h1>

              <p className="tech-reveal tech-hero-description mt-6 max-w-[560px] text-[#53657A]" data-reveal style={{ '--reveal-delay': '260ms' }}>
                Claxic Technologies builds custom websites, web applications and digital solutions for businesses that need practical, reliable technology and a clearer online presence.
              </p>

              <div className="mt-7 flex flex-wrap gap-3.5">
                <a
                  href="#projects"
                  className="tech-reveal pixel-btn pixel-btn--primary"
                  data-reveal
                  style={{ '--reveal-delay': '360ms' }}
                >
                  <span>Explore Our Work</span>
                  <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
                </a>

                <Link
                  to="/contact"
                  className="tech-reveal pixel-btn pixel-btn--secondary"
                  data-reveal
                  style={{ '--reveal-delay': '440ms' }}
                >
                  Discuss a Project
                </Link>
              </div>

            </div>

            <div className="tech-hero-visual tech-reveal relative z-10 flex min-h-[320px] items-center justify-center lg:ml-3 lg:mt-[-8px] lg:justify-end" data-reveal style={{ '--reveal-delay': '520ms' }}>
              <img
                src={techHeroImage}
                alt="Pixel-art AI robot coding workspace"
                className="relative z-10 block w-full max-w-[560px] object-contain"
                style={{ animation: 'techFloat 6s ease-in-out infinite' }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="tech-page">
        <section className="border-t border-[#F1D9D0] bg-[#FFF7F3] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="tech-reveal tech-section-eyebrow text-[#FF2B12]" data-reveal>About Claxic Technologies</p>
              <h2 className="tech-reveal tech-section-title mt-4 text-[#202020]" data-reveal style={{ '--reveal-delay': '120ms' }}>
                Website development and digital product solutions.
              </h2>
            </div>

            <p className="tech-reveal tech-section-copy mx-auto mt-6 max-w-3xl text-[#566174]" data-reveal style={{ '--reveal-delay': '220ms' }}>
              Claxic Technologies helps businesses and founders build custom websites, digital products and software that support growth, communication and day-to-day operations.
            </p>

            <p className="tech-reveal tech-section-copy mx-auto mt-5 max-w-3xl text-[#566174]" data-reveal style={{ '--reveal-delay': '320ms' }}>
              Whether you need a business website, a web application, UI/UX support, integrations or a custom software solution, we can help you shape the right approach and move from idea to implementation.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <h2 className="tech-reveal tech-section-title text-[#202020]" data-reveal>
                <span className="text-[#171717]">WHAT WE </span>
                <span className="text-[#FF2B12]">BUILD</span>
              </h2>
              <p className="tech-reveal tech-section-copy mx-auto mt-3 max-w-2xl text-[#566174]" data-reveal style={{ '--reveal-delay': '120ms' }}>
                From websites to intelligent applications, we create digital solutions designed around real needs.
              </p>
            </div>

            <div className="tech-service-grid grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  {...service}
                  number={String(index + 1).padStart(2, '0')}
                  className="tech-reveal"
                  style={{ '--reveal-delay': `${index * 140}ms` }}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="tech-stack-section px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="tech-reveal tech-stack-header tech-section-title text-[#202020] uppercase" data-reveal>
                TOOLS BEHIND THE SOLUTIONS
              </h2>
              <p className="tech-reveal tech-stack-subtitle tech-section-copy mx-auto mt-3 max-w-2xl text-[#566174]" data-reveal style={{ '--reveal-delay': '120ms' }}>
                We choose suitable technologies based on each project's needs and goals.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {technologyGroups.map((group, index) => (
                <article
                  key={group.title}
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                  className="tech-reveal tech-stack-card group"
                  data-reveal
                  style={{
                    backgroundColor: group.background,
                    borderColor: group.accent,
                    boxShadow: 'none',
                    '--card-delay': `${index * 150}ms`,
                    '--reveal-delay': `${index * 150 + 180}ms`,
                  }}
                >
                  <span className="tech-stack-card-number" style={{ borderColor: 'rgba(255,255,255,0.28)', background: 'rgba(255,255,255,0.08)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="relative z-10">
                    <h3 className="tech-stack-card-title">{group.title}</h3>
                    <p className="tech-stack-card-description">{group.description}</p>

                    <div className="tech-stack-chip-list">
                      {group.items.map((item, chipIndex) => (
                        <span
                          key={item}
                          className="tech-stack-chip"
                          style={{
                            borderColor: 'rgba(255,255,255,0.22)',
                            background: group.accentSoft,
                            transitionDelay: `${chipIndex * 70}ms`,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tech-process-section bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="tech-reveal tech-process-heading tech-section-title text-[#202020]" data-reveal>
                From Idea to Implementation
              </h2>
            </div>

            <div className="tech-reveal tech-process-grid md:grid-cols-2 xl:grid-cols-5" data-reveal style={{ '--reveal-delay': '140ms' }}>
              {processSteps.map(({ step, title, description }, index) => (
                <div
                  key={title}
                  className="tech-reveal tech-process-card"
                  data-reveal
                  style={{ '--card-delay': `${index * 90}ms`, '--reveal-delay': `${index * 55 + 30}ms` }}
                >
                  <div className="tech-process-top">
                    <div className="tech-process-step">{step}</div>
                    <div className="tech-process-icon">{renderProcessIcon(title)}</div>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="tech-reveal tech-section-title text-[#202020]" data-reveal>
              Let&apos;s Build Something Useful.
            </h2>
            <p className="tech-reveal tech-cta-copy mx-auto mt-4 max-w-2xl text-[#566174]" data-reveal style={{ '--reveal-delay': '120ms' }}>
              Have an idea for a website, web application, custom software or AI-powered product? Let&apos;s discuss how to bring it to life.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="tech-reveal inline-flex items-center gap-2 rounded-full bg-[#FF2B12] px-6 py-3 text-sm font-bold text-white shadow-[4px_4px_0_0_rgba(32,32,32,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(32,32,32,0.14)]"
                data-reveal
                style={{ '--reveal-delay': '220ms' }}
              >
                Start a Project
              </Link>
              <Link
                to="/contact"
                className="tech-reveal inline-flex items-center gap-2 rounded-full border-2 border-[#202020] bg-white px-6 py-3 text-sm font-bold text-[#202020] shadow-[3px_3px_0_0_rgba(32,32,32,0.08)] transition-all duration-200 hover:border-[#FF2B12] hover:text-[#FF2B12]"
                data-reveal
                style={{ '--reveal-delay': '300ms' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

