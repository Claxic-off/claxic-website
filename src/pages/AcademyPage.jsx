import { useEffect } from 'react';
import { ArrowRight, BrainCircuit, BriefcaseBusiness, BookOpenText, Palette, Sparkles } from 'lucide-react';
import onlineClassStudyScene from '../assets/10 Cheerful Online Class Study Scene.png';
import aiBrainInterfaceScene from '../assets/11 Holographic Neural Brain Interface.png';
import aiWorkspaceScene from '../assets/12 Modern 3D Terminal Icon.png';
import dataScienceScene from '../assets/08 Inspired Student with Coding Icons.png';
import productivityScene from '../assets/05 Cheerful Lightbulb Badge.png';
import creativeScene from '../assets/01 Creative Learning Desk with Idea Bulb.png';
import CourseCatalogue from '../components/CourseCatalogue';
import WhatsAppButton from '../components/WhatsAppButton';

const CATEGORIES = [
  { title: 'AI', icon: BrainCircuit, desc: 'Machine learning, AI workflows, prompt thinking, and practical applications.' },
  { title: 'Web Development', icon: BriefcaseBusiness, desc: 'Frontend, backend, product thinking, and modern web experiences.' },
  { title: 'Data Science', icon: BookOpenText, desc: 'Data literacy, analysis, visualization, and real problem-solving skills.' },
  { title: 'Tools & Productivity', icon: Sparkles, desc: 'Helpful workflows, collaboration tools, and digital efficiency.' },
  { title: 'Creative Projects', icon: Palette, desc: 'Hands-on creative work that turns ideas into polished outcomes.' },
];

const LEARNING_PATH = [
  { title: 'Learn the Fundamentals', desc: 'Start with the essentials so you build a clear base before moving into advanced work.', accent: '#ff5b3d' },
  { title: 'Practice with Guidance', desc: 'Work through examples, feedback, and guided activities to turn learning into momentum.', accent: '#8d5cf6' },
  { title: 'Build Real Projects', desc: 'Apply your skills to real tasks that sharpen your thinking and confidence.', accent: '#3a82ff' },
  { title: 'Review & Improve', desc: 'Reflect, refine, and strengthen weak spots with iterative feedback and practice.', accent: '#19a76a' },
  { title: 'Keep Growing', desc: 'Take the next step with ongoing support, new challenges, and practical growth.', accent: '#f4a33d' },
];

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

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
          background: #f8efe9;
        }

        .academy-path-shell {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          align-items: start;
          gap: 2.5rem;
          max-width: 1280px;
          margin: 0 auto;
        }

        .academy-path-intro {
          max-width: 520px;
          padding-top: 0.35rem;
        }

        .academy-path-copy {
          margin-top: 1.1rem;
          max-width: 430px;
          color: #4d5865;
          font-size: 1.02rem;
          line-height: 1.7;
          letter-spacing: -0.02em;
        }

        .academy-path-steps {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .path-step-row {
          display: flex;
          align-items: flex-start;
          gap: 1.1rem;
          padding: 1.15rem 0;
          border-top: 1px solid rgba(23, 23, 23, 0.08);
          transition: transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
        }

        .path-step-row:last-child {
          border-bottom: 1px solid rgba(23, 23, 23, 0.08);
        }

        .path-step-row:hover {
          transform: translateX(4px);
          background: rgba(255, 255, 255, 0.14);
        }

        .path-step-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          min-width: 72px;
          height: 72px;
          border-radius: 0.9rem;
          color: #171717;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          box-shadow: inset 0 0 0 1px rgba(23, 23, 23, 0.08), 0 12px 20px rgba(23, 23, 23, 0.04);
        }

        .path-step-body {
          flex: 1;
          min-width: 0;
          padding-top: 0.25rem;
        }

        .path-step-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .path-step-label {
          margin: 0;
          color: #171717;
          font-size: clamp(1.15rem, 1.9vw, 1.7rem);
          line-height: 1.2;
          letter-spacing: -0.06em;
          font-weight: 800;
        }

        .path-step-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(23, 23, 23, 0.04);
          color: #171717;
          flex-shrink: 0;
        }

        .path-step-body p:last-child {
          margin: 0.5rem 0 0;
          color: #4d5865;
          font-size: 0.96rem;
          line-height: 1.7;
          letter-spacing: -0.02em;
        }

        .academy-course-header {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 1rem;
          margin-bottom: 1.75rem;
        }

        .academy-course-header h2 {
          margin: 0;
        }

        .academy-final-cta {
          padding-bottom: 5.5rem;
        }

        .academy-final-cta-inner {
          background: linear-gradient(135deg, #171717 0%, #20242b 100%);
          border-radius: 2rem;
          padding: 3rem 1.5rem;
          text-align: center;
          color: white;
          box-shadow: 0 24px 40px rgba(17, 24, 39, 0.16);
        }

        .academy-final-cta-inner p {
          max-width: 600px;
          margin: 1rem auto 0;
          color: rgba(255,255,255,0.72);
          line-height: 1.8;
          font-size: 1.02rem;
        }

        .academy-final-cta-inner h2 {
          margin: 0;
          font-size: clamp(2rem, 3vw, 3rem);
          line-height: 1.06;
          letter-spacing: -0.06em;
          font-weight: 800;
        }

        .academy-final-btns {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .academy-btn-light {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          min-height: 52px;
          padding: 0.9rem 1.4rem;
          border-radius: 999px;
          background: #fff;
          color: #171717;
          font-weight: 700;
          transition: transform 0.2s ease;
        }

        .academy-btn-light:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 1100px) {
          .academy-category-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .academy-path-shell {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .academy-path-intro {
            max-width: 100%;
          }
        }

        @media (max-width: 860px) {
          .academy-category-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
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

          .academy-category-grid,
          .academy-path-grid {
            grid-template-columns: 1fr;
          }

          .academy-course-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .path-step:not(:last-child)::after {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .academy-reveal,
          .academy-reveal.is-visible,
          .academy-square,
          .academy-primary-btn,
          .academy-secondary-btn,
          .academy-btn-light,
          .category-box-card,
          .category-box-card .card-illustration img {
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
                <span className="academy-head-line academy-head-line-dark">Skills for a</span>
                <span className="academy-head-line academy-head-line-accent">Better Tomorrow.</span>
              </h1>

              <p className="academy-reveal" data-reveal style={{ '--reveal-delay': '120ms' }}>
                Learn practical, future-ready skills with structured guidance, live learning support, and hands-on projects that help you build with confidence.
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
              <p className="academy-category-subtitle">Explore practical skills for your next step.</p>
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
            <div className="academy-path-intro academy-reveal" data-reveal>
              <p className="academy-eyebrow">How you learn</p>
              <h2 className="academy-section-title">From your first idea to real-world skills.</h2>
              <p className="academy-path-copy">A practical learning journey designed to help you move from curiosity to confidence with clarity, feedback, and hands-on momentum.</p>
            </div>

            <div className="academy-path-steps">
              {LEARNING_PATH.map(({ title, desc, accent }, index) => (
                <div key={title} className="path-step-row academy-reveal" data-reveal style={{ '--reveal-delay': `${index * 100}ms` }}>
                  <div className="path-step-number" style={{ background: `${accent}1A` }}>{`0${index + 1}`}</div>

                  <div className="path-step-body">
                    <div className="path-step-top">
                      <p className="path-step-label">{title}</p>
                      <span className="path-step-arrow" aria-hidden="true">
                        <ArrowRight size={14} strokeWidth={2.5} />
                      </span>
                    </div>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="academy-courses bg-[#f4f5f6]" id="featured-courses">
          <div className="academy-shell">
            <div className="academy-course-header academy-reveal" data-reveal>
              <div>
                <p className="academy-eyebrow">Featured courses</p>
                <h2 className="academy-section-title">Choose a course that matches your next step.</h2>
              </div>

              <WhatsAppButton
                message="Hi Claxic Academy, I would like to know more about your available courses."
                label="Ask About a Course"
                variant="outline"
              />
            </div>

            <CourseCatalogue />
          </div>
        </section>

        <section className="academy-final-cta">
          <div className="academy-shell">
            <div className="academy-final-cta-inner academy-reveal" data-reveal>
              <p className="academy-eyebrow" style={{ color: '#ffaf9e', marginBottom: '1rem' }}>Start learning</p>
              <h2>Start Your Learning Journey Today.</h2>
              <p>Take the next step with practical learning designed to help you build real skills, confidence, and momentum.</p>

              <div className="academy-final-btns">
                <a href="#featured-courses" className="academy-btn-light">
                  Explore courses
                  <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
                </a>

                <div>
                  <WhatsAppButton
                    message="Hi Claxic Academy, I want to start learning and would like to know the next steps."
                    label="Talk to Us"
                    variant="primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
