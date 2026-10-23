
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code2,
  GraduationCap,
  Rocket,
  Target,
  Users,
  Check,
} from 'lucide-react';

import heroIllustration from '../assets/08 Inspired Student with Coding Icons.png';

const brandCards = [
  {
    title: 'Claxic Technologies',
    description:
      'We develop custom software, websites and web applications to help individuals, businesses and organizations solve real-world problems.',
    icon: Code2,
    to: '/technologies',
    accent: 'bg-[#FFF0EC]',
  },
  {
    title: 'Claxic Academy',
    description:
      'We create beginner-friendly learning resources, practical courses and a supportive community for students and learners.',
    icon: GraduationCap,
    to: '/academy',
    accent: 'bg-[#FFF7F2]',
  },
];

const purposeItems = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To build practical digital solutions and provide accessible, high-quality learning resources that help people develop real-world skills.',
  },
  {
    icon: Rocket,
    title: 'Our Vision',
    text: 'To create opportunities where technology, education and community come together to help people learn, build and grow.',
  },
  {
    icon: Users,
    title: 'Our Values',
    list: [
      'Practical and useful',
      'Beginner-friendly',
      'Quality and consistency',
      'Community-driven',
      'Continuous growth',
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ABOUT HERO */}
      <section className="bg-white px-4 pb-0 pt-4 sm:px-6 sm:pb-0 sm:pt-6 lg:px-8 lg:pb-0 lg:pt-8">
        <div className="mx-auto max-w-[1280px] px-2 py-4 sm:px-5 sm:py-5 lg:px-8 lg:py-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
            {/* LEFT CONTENT */}
            <div className="min-w-0">
              <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#FF2B12] sm:text-xs">
                About Us
              </p>

              <h1 className="max-w-[760px] text-[2.35rem] font-black leading-[1.02] tracking-[-0.04em] text-[#151515] sm:text-[3rem] lg:text-[3.5rem]">
                <span className="block lg:whitespace-nowrap">
                  A Platform to Build Skills
                </span>

                <span className="block lg:whitespace-nowrap">
                  and{' '}
                  <span className="text-[#FF2B12]">
                    Real Solutions
                  </span>
                </span>
              </h1>

              <p className="mt-5 max-w-[560px] text-base leading-relaxed text-[#566174] text-justify sm:text-lg" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.02em' }}>
                We are a technology and learning initiative focused on
                creating practical digital solutions and accessible
                education. We bring development, learning and community
                together to help people build skills and turn ideas into
                reality.
              </p>
            </div>

            {/* RIGHT ILLUSTRATION */}
            <div className="flex items-center justify-center">
              <img
                src={heroIllustration}
                alt="Students learning, coding and exploring ideas together"
                className="h-auto w-full max-w-[520px] object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TWO BRANDS */}
      <section className="bg-white px-4 pt-2 pb-6 sm:px-6 sm:pt-3 sm:pb-8 lg:px-8 lg:pt-4 lg:pb-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-6 text-center sm:mb-7">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#FF2B12] sm:text-xs">
              Our Brands
            </p>

            <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#151515] sm:text-3xl lg:text-[2.2rem]">
              Two Brands{' '}
              <span className="text-[#FF2B12]">One Vision</span>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#566174] sm:text-base" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.02em' }}>
              We operate through two focused brands — one for technology
              solutions and one for learning — working together to make
              technology, education and community more accessible.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {brandCards.map(
              ({ title, description, icon: Icon, to, accent }) => (
                <Link
                  key={title}
                  to={to}
                  className="group rounded-[1.5rem] border border-[#F0D4CD] bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(0,0,0,0.08)] motion-reduce:transform-none motion-reduce:transition-none sm:p-7"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-black tracking-[-0.02em] sm:text-2xl">
                        <span className="text-[#FF2B12]">{title.split(' ')[0]}</span>{' '}
                        <span className="text-[#151515]">{title.split(' ').slice(1).join(' ')}</span>
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-[#566174] sm:text-base" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.02em' }}>
                        {description}
                      </p>
                    </div>


                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* OUR PURPOSE */}
      <section className="bg-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-6">
            <div className="max-w-[520px] self-start">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#FF2B12] sm:text-xs">
                Our Purpose
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-[#151515] sm:text-4xl">
                Why We <span className="text-[#FF2B12]">Exist</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#566174] text-justify" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.02em' }}>
                We believe technology and education should be practical,
                accessible and useful for everyone. Our goal is to help
                people learn, build and grow through real-world
                applications and a supportive community.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:pt-2">
              {purposeItems.map(
                ({ icon: Icon, title, text, list }) => (
                  <div
                    key={title}
                    className="rounded-[1.5rem] border border-[#EBEEF3] bg-white p-4 shadow-sm sm:p-5"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF0EC] text-[#FF2B12]">
                      <Icon
                        size={20}
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-[1.2rem] font-black tracking-[-0.04em] text-[#151515] sm:text-[1.35rem]">
                      {title}
                    </h3>

                    {text ? (
                      <p className="mt-3 text-sm leading-relaxed text-[#566174]" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.02em' }}>
                        {text}
                      </p>
                    ) : (
                      <ul className="mt-3 space-y-2">
                        {list.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm leading-relaxed text-[#566174]"
                            style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.02em' }}
                          >
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FFF0EC] text-[#FF2B12]">
                              <Check
                                size={10}
                                strokeWidth={3}
                                aria-hidden="true"
                              />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
