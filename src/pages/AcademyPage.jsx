import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { buildWhatsAppUrl, getWhatsAppConfig } from '../lib/whatsapp';
import { ArrowRight, BrainCircuit, BriefcaseBusiness, BookOpenText, MessageCircle, Palette, Sparkles } from 'lucide-react';
import onlineClassStudyScene from '../assets/10 Cheerful Online Class Study Scene.png';
import aiBrainInterfaceScene from '../assets/11 Holographic Neural Brain Interface.png';
import aiWorkspaceScene from '../assets/12 Modern 3D Terminal Icon.png';
import dataScienceScene from '../assets/08 Inspired Student with Coding Icons.png';
import productivityScene from '../assets/05 Cheerful Lightbulb Badge.png';
import creativeScene from '../assets/01 Creative Learning Desk with Idea Bulb.png';
import roadmapScene from '../assets/13 Pastel Learning Journey Roadmap.png';
import CourseCatalogue from '../components/CourseCatalogue';
import WhatsAppButton from '../components/WhatsAppButton';

const CATEGORIES = [
  { title: 'AI', icon: BrainCircuit, desc: 'Beginner AI learning, practical workflows, prompt thinking and generative AI foundations.' },
  { title: 'Web Development', icon: BriefcaseBusiness, desc: 'Frontend, backend, product thinking and modern web experiences.' },
  { title: 'Data Science', icon: BookOpenText, desc: 'Data literacy, analysis, visualization and practical problem-solving skills.' },
  { title: 'Tools & Productivity', icon: Sparkles, desc: 'Helpful AI tools, workflows and digital efficiency for everyday learning and work.' },
  { title: 'Creative Projects', icon: Palette, desc: 'Hands-on creative work that turns ideas into polished outcomes and portfolio-ready projects.' },
];

const LEARNING_PATH = [
  {
    number: '01',
    title: 'Learn Basics',
    desc: 'Build a strong foundation with clear concepts.',
    bullets: ['Core concepts', 'Beginner-friendly lessons', 'Essential skills'],
    accent: '#FF321E',
  },
  {
    number: '02',
    title: 'Practice',
    desc: 'Apply what you learn through guided exercises.',
    bullets: ['Practice tasks', 'Step-by-step guidance', 'Real examples'],
    accent: '#FF321E',
  },
  {
    number: '03',
    title: 'Build Projects',
    desc: 'Turn knowledge into useful projects.',
    bullets: ['Hands-on builds', 'Portfolio practice', 'Problem solving'],
    accent: '#FF321E',
  },
  {
    number: '04',
    title: 'Review & Improve',
    desc: 'Review your work and strengthen your skills.',
    bullets: ['Feedback', 'Testing', 'Refinement'],
    accent: '#FF321E',
  },
  {
    number: '05',
    title: 'Keep Growing',
    desc: 'Continue exploring new skills and challenges.',
    bullets: ['Advanced topics', 'New tools', 'Ongoing learning'],
    accent: '#FF321E',
  },
];

const { number: WHATSAPP_NUMBER } = getWhatsAppConfig();
const WHATSAPP_TALK_URL = buildWhatsAppUrl(
  WHATSAPP_NUMBER,
  'Hi Claxic Academy, I want to start learning and would like to know the next steps.'
);

export default function AcademyPage() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index * 80, 380)}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>   
      <SEO
        title="Claxic Academy | AI, Web Development & Data Science"
        description="Learn AI, web development and data science with practical beginner-friendly courses from Claxic Academy. Build digital skills through guided learning and hands-on projects."
        canonicalPath="/academy"
        robots="index, follow"
        ogType="website"
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700;800;900&family=Courier+Prime:wght@400;700&display=swap');

        .academy-page {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          background: #f7f0ea;
          color: #171717;
        }

        .academy-shell {
          max-width: 1200px;
          margin: 0 auto;
        }

        .academy-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.56s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--reveal-delay, 0ms);
        }

        .academy-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .academy-eyebrow {
          display: inline-block;
          margin-bottom: 1rem;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ff2b12;
        }

        .academy-section-title {
          margin: 0;
          font-size: clamp(2rem, 3vw, 3.2rem);
          line-height: 1.08;
          letter-spacing: -0.06em;
          font-weight: 800;
          color: #151515;
          font-family: 'Courier New', 'Lucida Console', monospace;
        }

        .academy-lead {
          margin: 0;
          color: #4f5b6d;
          line-height: 1.75;
          font-size: 1.05rem;
        }

        .academy-hero {
          position: relative;
          overflow: hidden;
          background: #f5e9e3;
          padding: 1.2rem 1rem 2.4rem;
          border-bottom: 1px solid rgba(20, 20, 20, 0.08);
        }

        .academy-hero-grid {
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          align-items: center;
          gap: 1.5rem;
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .academy-hero-copy {
          max-width: 700px;
        }

        .academy-hero-label {
          display: inline-block;
          margin-bottom: 1.2rem;
          color: #ff4028;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .academy-hero h1 {
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.06em;
          font-size: clamp(3.2rem, 5vw, 6.8rem);
          line-height: 0.9;
          letter-spacing: -0.05em;
          font-weight: 900;
          color: #171717;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          text-transform: none;
        }

        .academy-hero h1 .academy-head-line {
          display: block;
        }

        .academy-hero h1 .academy-head-line-dark {
          color: #171717;
        }

        .academy-hero h1 .academy-head-line-accent {
          color: #FF321E;
        }

        .academy-hero p {
          margin-top: 1.7rem;
          max-width: 560px;
          color: #2a2a2a;
          font-size: clamp(1.1rem, 1.7vw, 1.55rem);
          line-height: 1.24;
          letter-spacing: -0.02em;
          font-family: 'Courier New', 'Lucida Console', monospace;
          font-weight: 700;
        }

        .academy-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2.1rem;
        }

        .academy-primary-btn,
        .academy-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          min-height: 62px;
          border-radius: 0;
          padding: 1rem 1.8rem;
          font-size: 1rem;
          font-weight: 700;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
          text-transform: none;
          letter-spacing: -0.02em;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          box-shadow: 0 0 0 2px rgba(16, 16, 16, 0.95);
        }

        .academy-primary-btn {
          background: #ff4028;
          color: #fff;
          border: 2px solid #161616;
          box-shadow: 6px 6px 0 #111111;
        }

        .academy-primary-btn:hover,
        .academy-secondary-btn:hover {
          transform: translateY(-2px);
        }

        .academy-secondary-btn {
          border: 2px solid #111111;
          background: rgba(255, 255, 255, 0.2);
          color: #111111;
          box-shadow: 6px 6px 0 #111111;
        }

        .academy-hero-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-top: 1.75rem;
        }

        .academy-hero-highlight {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 0.8rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(21, 21, 21, 0.08);
          color: #1b1b1b;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .academy-hero-highlight::before {
          content: '';
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #ff2b12;
          display: inline-block;
        }

        .academy-hero-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 420px;
        }

        .academy-illustration-card {
          position: relative;
          width: min(100%, 660px);
          padding: 0;
          background: transparent;
          border: none;
          box-shadow: none;
          backdrop-filter: none;
          z-index: 1;
        }

        .academy-illustration-card img {
          display: block;
          width: 100%;
          max-width: 640px;
          height: auto;
          margin: 0 auto;
          filter: drop-shadow(0 18px 24px rgba(35, 28, 23, 0.1));
          animation: floatImage 5.6s ease-in-out infinite;
        }

        @keyframes drift {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }

        @keyframes floatSquare {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes floatImage {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(0.9); opacity: 0.45; }
          50% { transform: scale(1.2); opacity: 0.9; }
        }

        .academy-categories,
        .academy-path,
        .academy-courses,
        .academy-final-cta {
          padding: 3.5rem 1rem;
        }

        .academy-categories {
          background: #fff5f1;
        }

        .academy-section-head {
          margin-bottom: 2.25rem;
          text-align: center;
        }

        .academy-section-head p {
          margin: 0 auto 0.7rem;
          max-width: 700px;
          color: #53657a;
          line-height: 1.7;
        }

        .academy-section-head .academy-eyebrow {
          margin-bottom: 0.8rem;
        }

        .academy-category-subtitle {
          margin: 0.35rem auto 0;
          color: #5d6873;
          font-size: 1.05rem;
          line-height: 1.7;
          letter-spacing: -0.02em;
          font-family: 'Courier New', 'Lucida Console', monospace;
          font-weight: 700;
        }

        .academy-category-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 1rem;
          max-width: 1280px;
          margin: 0 auto;
          align-items: stretch;
        }

        .category-box-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          min-height: 350px;
          padding: 1rem 1rem 0.95rem;
          border-radius: 1.35rem;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid #f4d9d0;
          box-shadow: 0 10px 18px rgba(34, 18, 13, 0.04);
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .category-box-card::before {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          right: 18px;
          top: 18px;
          background: #ff321e;
          border-radius: 2px;
          opacity: 0.9;
        }

        .category-box-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 28px rgba(34, 18, 13, 0.08);
          border-color: rgba(255, 50, 30, 0.2);
        }

        .category-box-card .card-badge {
          position: absolute;
          left: 18px;
          top: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 34px;
          height: 28px;
          padding: 0 0.5rem;
          border-radius: 999px;
          background: rgba(255, 50, 30, 0.08);
          color: #ff321e;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .category-box-card .card-illustration {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 156px;
          margin: 2.4rem 0 0.7rem;
          padding: 0.2rem;
        }

        .category-box-card .card-illustration img {
          display: block;
          width: 100%;
          max-width: 170px;
          height: 100%;
          object-fit: contain;
          object-position: center;
          filter: none;
          transition: transform 0.25s ease;
        }

        .category-box-card:hover .card-illustration img {
          transform: scale(1.03);
        }

        .category-box-card .card-title {
          margin: 0;
          font-size: 1.02rem;
          line-height: 1.3;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: #171717;
          font-family: 'Courier New', 'Lucida Console', monospace;
        }

        .category-box-card .card-copy {
          margin: 0.45rem 0 0;
          color: #586879;
          font-size: 0.86rem;
          line-height: 1.6;
          letter-spacing: -0.01em;
          font-family: 'Courier New', 'Lucida Console', monospace;
          font-weight: 700;
        }

        .category-box-card .card-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 50, 30, 0.12);
          margin: 0.9rem 0 0.8rem;
        }

        .category-box-card .card-content {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
        }

        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        .academy-path {
          background: #fff5f1;
          padding: 1rem 1rem 3rem;
          font-family: 'Roboto Slab', 'Georgia', 'Times New Roman', serif;
        }

        .academy-path-shell {
          max-width: 1280px;
          margin: 0 auto;
        }

        .academy-path-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .academy-path-header .academy-eyebrow {
          margin-bottom: 0.8rem;
          font-family: 'Courier Prime', 'Courier New', monospace;
          font-weight: 700;
          letter-spacing: 0.14em;
          font-size: 0.78rem;
        }

        .academy-path-header h2 {
          margin: 0;
          font-size: clamp(2.2rem, 3vw, 3.3rem);
          line-height: 1.04;
          letter-spacing: -0.06em;
          font-weight: 800;
          color: #171717;
          font-family: 'Roboto Slab', 'Georgia', serif;
        }

        .academy-path-header h2 .accent {
          color: #ff321e;
        }

        .academy-path-header p {
          max-width: 680px;
          margin: 0.8rem auto 0;
          color: #596b85;
          font-size: 1.02rem;
          line-height: 1.7;
          letter-spacing: -0.02em;
          font-family: 'Courier Prime', 'Courier New', monospace;
          font-weight: 700;
        }

        .academy-path-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 1rem;
          align-items: stretch;
        }

        .path-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          min-height: 340px;
          padding: 1rem 1rem 0.9rem;
          border: 1px solid #f4d9d0;
          border-radius: 1.25rem;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 12px 28px rgba(23, 23, 23, 0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          overflow: hidden;
        }

        .path-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 30px rgba(23, 23, 23, 0.08);
          border-color: rgba(255, 50, 30, 0.2);
        }

        .path-card::after {
          content: '';
          position: absolute;
          right: 0.9rem;
          bottom: 0.9rem;
          width: 10px;
          height: 10px;
          background: #ff321e;
          border-radius: 2px;
        }

        .path-card-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 32px;
          border-radius: 999px;
          background: rgba(255, 50, 30, 0.08);
          color: #ff321e;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          font-family: 'Courier Prime', 'Courier New', monospace;
        }

        .path-card h3 {
          margin-top: 1.1rem;
          margin-bottom: 0.75rem;
          color: #171717;
          font-size: 1.04rem;
          line-height: 1.28;
          letter-spacing: -0.04em;
          font-weight: 800;
          font-family: 'Roboto Slab', 'Georgia', serif;
        }

        .path-card-desc {
          margin: 0;
          color: #596b85;
          font-size: 0.9rem;
          line-height: 1.6;
          letter-spacing: -0.02em;
          font-family: 'Courier Prime', 'Courier New', monospace;
          font-weight: 700;
        }

        .path-card-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 50, 30, 0.12);
          margin: 1rem 0 0.8rem;
        }

        .path-card-bullets {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .path-card-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          color: #404d5d;
          font-size: 0.8rem;
          line-height: 1.45;
          letter-spacing: -0.02em;
          font-family: 'Courier Prime', 'Courier New', monospace;
          font-weight: 700;
        }

        .path-card-bullets li::before {
          content: '';
          width: 7px;
          height: 7px;
          margin-top: 0.36rem;
          background: #ff321e;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .path-card-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          min-width: 118px;
          margin-top: auto;
          padding: 0.72rem 1.2rem;
          border: 1px solid rgba(255, 50, 30, 0.8);
          border-radius: 0.9rem;
          background: transparent;
          color: #171717;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          font-family: 'Courier Prime', 'Courier New', monospace;
          transition: background-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }

        .path-card-btn:hover {
          background: #ff321e;
          color: white;
          transform: translateY(-2px);
        }

        .academy-courses {
          background: #f5efe9;
          padding-top: 4rem;
          padding-bottom: 4rem;
        }

        .academy-course-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
          max-width: 1280px;
          margin: 0 auto 2rem;
        }

        .academy-course-header-copy {
          max-width: 760px;
        }

        .academy-course-header .academy-eyebrow {
          margin-bottom: 0.8rem;
          color: #ff2b12;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          font-weight: 700;
          font-family: 'Courier Prime', 'Courier New', monospace;
        }

        .academy-course-header h2 {
          margin: 0;
          font-family: 'Roboto Slab', 'Georgia', serif;
          font-size: clamp(2.1rem, 3vw, 4rem);
          line-height: 1.05;
          letter-spacing: -0.06em;
          font-weight: 800;
          color: #171717;
        }

        .academy-course-header h2 .accent-stop {
          color: #ff2b12;
        }

        .academy-course-subtitle {
          margin-top: 0.9rem;
          max-width: 730px;
          color: #64748b;
          font-size: 1rem;
          line-height: 1.7;
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        .academy-course-header .academy-course-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          min-height: 48px;
          padding: 0.8rem 1.35rem;
          border: 1.5px solid #ff2b12;
          border-radius: 999px;
          background: #fff;
          color: #ff2b12;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          text-decoration: none;
          transition: all 0.2s ease;
          white-space: nowrap;
          box-shadow: none;
          margin-top: 0.8rem;
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        .academy-course-header .academy-course-cta:hover {
          background: #ff2b12;
          color: #fff;
          transform: translateY(-1px);
        }

        .academy-course-header .academy-course-cta svg {
          flex-shrink: 0;
        }

        .academy-final-cta {
          padding: 0.35rem 1rem 3.5rem;
        }

        .academy-final-cta-inner {
          max-width: 1240px;
          margin: 0 auto;
          background: #171717;
          border-radius: 28px;
          padding: 3rem 1.5rem 2.5rem;
          text-align: center;
          color: white;
          box-shadow: 0 14px 22px rgba(17, 17, 17, 0.08);
          opacity: 1 !important;
          transform: none !important;
          transition: none !important;
        }

        .academy-final-cta-inner .academy-eyebrow {
          display: inline-block;
          margin-bottom: 1rem;
          color: #ff2b12;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          font-weight: 700;
          text-transform: uppercase;
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        .academy-final-cta-inner h2 {
          margin: 0 auto;
          max-width: 760px;
          font-size: clamp(2.1rem, 4vw, 4rem);
          line-height: 1.06;
          letter-spacing: -0.06em;
          font-weight: 800;
          color: #ffffff;
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        .academy-final-cta-inner p {
          max-width: 700px;
          margin: 1rem auto 0;
          color: rgba(255,255,255,0.74);
          line-height: 1.8;
          font-size: 1.02rem;
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        .academy-final-btns {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
          opacity: 1 !important;
          transform: none !important;
          transition: none !important;
        }

        .academy-btn-light,
        .academy-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          min-height: 52px;
          padding: 0.9rem 1.5rem;
          border-radius: 999px;
          font-weight: 700;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
          text-decoration: none;
        }

        .academy-btn-light {
          background: #ffffff;
          color: #171717;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .academy-btn-light:hover {
          background: #f3f4f6;
          transform: translateY(-1px);
        }

        .academy-btn-secondary {
          background: #ff2b12;
          color: #ffffff;
          border: 1px solid #ff2b12;
        }

        .academy-btn-secondary:hover {
          background: #e1220f;
          transform: translateY(-1px);
        }

        .academy-btn-light svg,
        .academy-btn-secondary svg {
          flex-shrink: 0;
        }

        @media (max-width: 1100px) {
          .academy-category-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .academy-path-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 860px) {
          .academy-category-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .academy-path-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .academy-path {
            padding-top: 0.5rem;
          }

          .academy-category-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .category-box-card {
            min-height: 320px;
          }

          .category-box-card .card-illustration {
            height: 120px;
            margin-top: 2rem;
          }

          .academy-hero {
            padding-top: 3rem;
            padding-bottom: 2.75rem;
          }

          .academy-hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .academy-hero h1 {
            font-size: clamp(2.5rem, 9vw, 4.2rem);
            letter-spacing: -0.065em;
          }

          .academy-hero-copy {
            max-width: 100%;
          }

          .academy-illustration-wrap {
            min-height: auto;
          }

          .academy-illustration-wrap::before {
            left: 8%;
            right: 8%;
            top: 10%;
            bottom: 12%;
          }

          .academy-cta-row,
          .academy-final-btns {
            flex-direction: column;
          }

          .academy-primary-btn,
          .academy-secondary-btn,
          .academy-btn-light,
          .academy-whatsapp-btn {
            width: 100%;
          }

          .academy-path-grid {
            grid-template-columns: 1fr;
          }

          .academy-course-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .academy-reveal,
          .academy-reveal.is-visible,
          .academy-square,
          .academy-primary-btn,
          .academy-secondary-btn,
          .academy-btn-light,
          .academy-btn-secondary,
          .category-box-card,
          .category-box-card .card-illustration img,
          .path-card,
          .academy-final-cta-inner,
          .academy-final-btns {
            transition: none !important;
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <div className="academy-page">
        <section className="academy-hero" id="academy-hero">
          <div className="academy-hero-grid">
            <div className="academy-hero-copy">
              <div className="academy-reveal" data-reveal>
                <span className="academy-hero-label">CLAXIC ACADEMY</span>
              </div>

              <h1 className="academy-reveal" data-reveal>
                <span className="academy-head-line academy-head-line-dark">Learn AI online</span>{' '}
                <span className="academy-head-line academy-head-line-accent">for beginners.</span>
              </h1>

              <p className="academy-reveal" data-reveal style={{ '--reveal-delay': '120ms' }}>
                Claxic Academy helps beginners build practical AI and digital skills through clear learning, guided support and hands-on projects designed for real-world use.
              </p>

              <div className="academy-cta-row">
                <a href="#featured-courses" className="academy-reveal academy-primary-btn" data-reveal style={{ '--reveal-delay': '200ms' }}>
                  Explore Courses
                  <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
                </a>

                <div className="academy-reveal" data-reveal style={{ '--reveal-delay': '260ms' }}>
                  <WhatsAppButton
                    message="Hi Claxic Academy, I'd like to learn more about available courses."
                    label="Ask on WhatsApp"
                    variant="outline"
                    className="academy-whatsapp-btn academy-secondary-btn"
                  />
                </div>
              </div>

            </div>

            <div className="academy-hero-visual academy-reveal" data-reveal style={{ '--reveal-delay': '220ms' }}>
              <div className="academy-illustration-card">
                <img
                  src={onlineClassStudyScene}
                  alt="Cheerful online class study scene"
                  className="w-full max-w-[620px] h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="academy-categories bg-[#fdf7f3]">
          <div className="academy-shell">
            <div className="academy-section-head academy-reveal" data-reveal>
              <p className="academy-eyebrow">Learning categories</p>
              <h2 className="academy-section-title">Build skills that move you forward.</h2>
              <p className="academy-category-subtitle">Explore AI learning and practical digital skills for your next step.</p>
            </div>

            <div className="academy-category-grid academy-reveal" data-reveal style={{ '--reveal-delay': '90ms' }}>
              {[
                { title: 'AI', desc: CATEGORIES[0].desc, image: aiBrainInterfaceScene, number: '01' },
                { title: 'Web Development', desc: CATEGORIES[1].desc, image: aiWorkspaceScene, number: '02' },
                { title: 'Data Science', desc: CATEGORIES[2].desc, image: dataScienceScene, number: '03' },
                { title: 'Tools & Productivity', desc: CATEGORIES[3].desc, image: productivityScene, number: '04' },
                { title: 'Creative Projects', desc: CATEGORIES[4].desc, image: creativeScene, number: '05' }
              ].map(({ title, desc, image, number }, index) => (
                <article key={title} className="category-box-card academy-reveal" data-reveal style={{ '--reveal-delay': `${index * 90}ms` }}>
                  <span className="card-badge">{number}</span>

                  <div className="card-illustration">
                    <img src={image} alt={`${title} illustration`} />
                  </div>

                  <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-copy">{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="academy-path">
          <div className="academy-path-shell">
            <div className="academy-path-header academy-reveal" data-reveal>
              <p className="academy-eyebrow">Learning path</p>
              <h2>
                From learning to <span className="accent">real-world skills.</span>
              </h2>
              <p>A simple journey from learning the basics to building with confidence.</p>
            </div>

            <div className="academy-path-grid">
              {LEARNING_PATH.map(({ number, title, desc, bullets }, index) => (
                <article key={title} className="path-card academy-reveal" data-reveal style={{ '--reveal-delay': `${index * 100}ms` }}>
                  <span className="path-card-number">{number}</span>
                  <h3>{title}</h3>
                  <p className="path-card-desc">{desc}</p>
                  <span className="path-card-divider" aria-hidden="true" />
                  <ul className="path-card-bullets">
                    {bullets.map((bullet) => (
                      <li key={`${title}-${bullet}`}>{bullet}</li>
                    ))}
                  </ul>
                  <a href="#featured-courses" className="path-card-btn">Learn More</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="academy-courses" id="featured-courses">
          <div className="academy-shell">
            <div className="academy-course-header academy-reveal" data-reveal>
              <div className="academy-course-header-copy">
                <p className="academy-eyebrow">FEATURED COURSES</p>
                <h2>
                  Choose a course that matches your next step<span className="accent-stop">.</span>
                </h2>
                <p className="academy-course-subtitle">
                  Practical, beginner-friendly courses designed to help you build real skills and achieve your goals.
                </p>
              </div>

              <WhatsAppButton
                message="Hi Claxic Academy, I would like to know more about your available courses."
                label="Ask About a Course"
                variant="outline"
                className="academy-course-cta"
              />
            </div>

            <CourseCatalogue />
          </div>
        </section>

      </div>
    </>
  );
}
