import { Link } from 'react-router-dom';
import { ArrowRight, Laptop, GraduationCap, Users, Zap } from 'lucide-react';
import creativeLearningDesk from '../assets/01 Creative Learning Desk with Idea Bulb.png';
import techCharacter from '../assets/02 Cheerful Cartoon Coder Workspace.png';
import academyCharacter from '../assets/03 Cheerful Online Learning Desk Scene.png';
import rocketBadge from '../assets/04 Glossy Blue Rocket Badge.png';
import lightbulbBadge from '../assets/05 Cheerful Lightbulb Badge.png';
import teamBadge from '../assets/06 Glossy Red Team Badge.png';
const WHATSAPP_NUMBER = import.meta.env.VITE_CLAXIC_WHATSAPP || '';
const PROJECT_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Claxic, I'd like to discuss a project.")}`
  : '/contact';

const BENEFITS = [
  {
    icon: Laptop,
    title: 'Modern Development',
    desc: 'Websites, web applications and custom software.',
  },
  {
    icon: GraduationCap,
    title: 'Practical Learning',
    desc: 'Online courses with live classes and doubt support.',
  },
  {
    icon: Users,
    title: 'Support for Growth',
    desc: 'For individuals, businesses and future creators.',
  },
  {
    icon: Zap,
    title: 'Real-World Focus',
    desc: 'Practical solutions and skills that make an impact.',
  },
];

const HOW_WE_HELP = [
  {
    title: 'Build',
    desc: 'We develop useful digital solutions for real-world needs.',
    image: rocketBadge,
  },
  {
    title: 'Learn',
    desc: 'We offer practical learning experiences through online courses and guided materials.',
    image: lightbulbBadge,
  },
  {
    title: 'Grow',
    desc: 'We help people build skills and turn ideas into reality.',
    image: teamBadge,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white pt-6 pb-12 sm:pt-8 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A8494] mb-3 sm:mb-4">
              Technology · Innovation · Education
            </p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#151515] leading-[1.08] tracking-tight mb-5 sm:mb-6">
              Digital solutions <br className="hidden sm:inline" />
              for <span className="text-[#FF2B12]">real-world needs</span>
            </h1>
            <p className="text-base sm:text-lg text-[#555B65] leading-relaxed mb-8 max-w-lg" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.02em' }}>
              Claxic builds modern digital solutions and practical learning experiences for individuals, businesses and future creators.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                to="/technologies"
                className="inline-flex items-center gap-2 bg-[#FF2B12] hover:bg-[#e02410] text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 shadow-sm"
              >
                Explore Technologies
                <ArrowRight size={17} strokeWidth={2.5} aria-hidden="true" />
              </Link>
              <Link
                to="/academy"
                className="inline-flex items-center gap-2 border-2 border-[#FF2B12] text-[#FF2B12] bg-white hover:bg-[#FFF0EC] font-bold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Explore Academy
                <ArrowRight size={17} strokeWidth={2.5} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Hero Illustration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <img
              src={creativeLearningDesk}
              alt="Creative learning desk with idea bulb"
              className="w-full max-w-[620px] lg:max-w-[720px] h-auto object-contain drop-shadow-sm"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ── Feature Highlights Bar ── */}
      <section className="bg-white border-y border-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {BENEFITS.map(({ icon: Icon, title, desc }, index) => (
              <div
                key={title}
                className={`flex items-center gap-3.5 ${index > 0 ? 'sm:pl-6 lg:pl-8' : ''} pt-4 sm:pt-0`}
              >
                <div className="w-12 h-12 rounded-full bg-[#FFF0EC] flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-[#FF2B12]" strokeWidth={2.2} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-[#151515] text-sm">{title}</h3>
                  <p className="text-xs text-[#555B65] mt-0.5 leading-snug" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.02em' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Side-by-Side Pillar Cards (Technologies & Academy) ── */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* ── Card 1: Claxic Technologies ── */}
            <div className="bg-[#f3efe9] border border-[#e5dfd7] rounded-[2rem] p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="max-w-xs z-10">
                  <p className="text-xs font-black uppercase tracking-wider text-[#FF2B12] mb-3">
                    CLAXIC TECHNOLOGIES
                  </p>
                  <h2 className="text-[1.35rem] sm:text-[1.6rem] font-black text-[#151515] mb-3 leading-[0.9] whitespace-nowrap">
                    Build • Develop • Innovate
                  </h2>
                  <p className="text-xs sm:text-sm text-[#555B65] leading-relaxed mb-6" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.02em' }}>
                    Website development, web applications and custom software for modern needs.
                  </p>
                  <Link
                    to="/technologies"
                    className="inline-flex items-center gap-2 bg-[#FF2B12] hover:bg-[#e02410] text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
                  >
                    Know More
                    <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
                  </Link>
                </div>
                <div className="w-full sm:w-auto flex justify-center sm:justify-end shrink-0 -ml-5 sm:-ml-4">
                  <img
                    src={techCharacter}
                    alt="Claxic Technologies"
                    className="h-32 sm:h-36 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* ── Card 2: Claxic Academy ── */}
            <div className="bg-[#f3efe9] border border-[#e5dfd7] rounded-[2rem] p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="max-w-xs z-10">
                  <p className="text-xs font-black uppercase tracking-wider text-[#FF2B12] mb-3">
                    CLAXIC ACADEMY
                  </p>
                  <h2 className="text-[1.35rem] sm:text-[1.6rem] font-black text-[#151515] mb-3 leading-[0.9] whitespace-nowrap">
                    Learn • Practice • Grow
                  </h2>
                  <p className="text-xs sm:text-sm text-[#555B65] leading-relaxed mb-6" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.02em' }}>
                    Online courses, live classes and WhatsApp learning communities.
                  </p>
                  <Link
                    to="/academy"
                    className="inline-flex items-center gap-2 border-2 border-[#FF2B12] text-[#FF2B12] bg-white hover:bg-[#FFF0EC] font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    Know More
                    <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
                  </Link>
                </div>
                <div className="w-full sm:w-auto flex justify-center sm:justify-end shrink-0 -ml-8 sm:-ml-6">
                  <img
                    src={academyCharacter}
                    alt="Claxic Academy"
                    className="h-32 sm:h-36 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How Claxic Helps ── */}
      <section className="bg-white py-4 sm:py-5 lg:py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-5 sm:mb-6">
            <span className="hidden sm:block h-px flex-1 max-w-[110px] bg-[#D9E0EA]" aria-hidden="true" />
            <h2 className="text-[0.72rem] sm:text-[0.78rem] font-semibold tracking-[0.28em] uppercase text-[#566174] text-center whitespace-nowrap">
              HOW CLAXIC HELPS YOU
            </h2>
            <span className="hidden sm:block h-px flex-1 max-w-[110px] bg-[#D9E0EA]" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 items-center">
            {HOW_WE_HELP.map(({ title, desc, image }) => (
              <div key={title} className="flex items-center justify-center gap-2.5 md:gap-3 text-left">
                <div className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#FFF0EC] flex items-center justify-center shrink-0">
                  <img src={image} alt={title} className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] object-contain" loading="lazy" />
                </div>

                <div className="max-w-[210px]">
                  <h3 className="text-[0.96rem] sm:text-[1.08rem] font-black text-[#151515] leading-none tracking-[-0.04em] mb-1">
                    {title}
                  </h3>
                  <p className="text-[0.68rem] sm:text-[0.74rem] text-[#566174] leading-[1.35]" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.02em' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-6 lg:px-8 py-0 sm:py-0 pb-3 sm:pb-4">
        <div className="relative max-w-[1500px] mx-auto bg-[#FFF1ED] rounded-[22px] px-3 sm:px-4 lg:px-5 py-3 sm:py-3 lg:py-2 overflow-visible transition-shadow duration-300 ease-in-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-[2px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-4 min-h-[76px] lg:min-h-[82px]">
            <div className="min-w-0 flex-1 text-left lg:pl-2 lg:pr-4">
              <h2 className="text-[1.2rem] sm:text-[1.75rem] lg:text-[clamp(20px,1.7vw,28px)] font-extrabold leading-[1.08] tracking-[-0.05em] text-[#151515]">
                Have an idea?{' '}
                <span className="text-[#FF2B12]">Let’s build something useful.</span>
              </h2>
              <p className="mt-1 text-[0.68rem] sm:text-[0.74rem] lg:text-[0.8rem] text-[#566174] leading-[1.35] max-w-[760px]" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.02em' }}>
                Get in touch to discuss a project, explore our services or find out which course is right for you.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center lg:gap-3.5 shrink-0 py-0">
              <a
                href={PROJECT_URL}
                target={WHATSAPP_NUMBER ? '_blank' : undefined}
                rel={WHATSAPP_NUMBER ? 'noopener noreferrer' : undefined}
                className="inline-flex h-[38px] w-full items-center justify-center gap-2 bg-[#FF2B12] hover:bg-[#e02410] text-white font-bold text-[0.82rem] px-4 rounded-[12px] transition-all duration-200 hover:scale-[1.02] active:scale-95 sm:min-w-[170px]"
              >
                Discuss a Project
                <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
              </a>
              <Link
                to="/academy"
                className="inline-flex h-[38px] w-full items-center justify-center gap-2 border-2 border-[#FF2B12] bg-transparent text-[#FF2B12] hover:bg-white/60 font-bold text-[0.82rem] px-4 rounded-[12px] transition-all duration-200 hover:scale-[1.02] active:scale-95 sm:min-w-[170px]"
              >
                Explore Academy
                <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
