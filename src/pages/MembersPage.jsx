import { CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { MEMBERS } from '../data/members';

export default function MembersPage() {
  return (
    <>
 <SEO
  title="Nithesh Devaraj | Founder & CEO of Claxic Technologies"
  description="Nithesh Devaraj is the Founder and CEO of Claxic Technologies, building websites, custom software, digital products and AI-driven solutions. He also leads the vision behind Claxic Academy."
  canonicalPath="/members"
  robots="index, follow"
  ogType="profile"
/>
      {/* ── Hero ── */}
      <section className="bg-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF2B12] mb-3">
            People &amp; Culture
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-[#151515] leading-tight mb-5">
            The team building <span className="text-[#FF2B12]">Claxic</span>
          </h1>
          <p className="text-base sm:text-lg text-[#555B65] leading-relaxed max-w-2xl mx-auto mb-8" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.02em' }}>
            Passionate developers, creators, and educators working together to deliver modern digital solutions and practical learning experiences.
          </p>

        </div>
      </section>

      {/* ── Member Cards Grid ── */}
      <section className="bg-[#FAF9F7] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#FFCFC9] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Avatar + Badge */}
                  <div className="flex items-start justify-between mb-6 gap-3">
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-[22px] object-cover drop-shadow-md group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.18em] bg-[#FFF4EE] text-[#FF2B12] px-2.5 py-1.5 rounded-full border border-[#F9D7CC] whitespace-nowrap leading-none">
                      {member.badge}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#151515] group-hover:text-[#FF2B12] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#FF2B12] mt-1 mb-4">
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="text-sm text-[#555B65] leading-relaxed mb-6 text-justify" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.02em' }}>
                    {member.bio}
                  </p>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-semibold bg-[#F4F5F6] text-[#151515] px-2.5 py-1 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-medium text-[#555B65] flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    Working
                  </span>
                  <span className="text-[11px] font-medium text-[#555B65] opacity-0 pointer-events-none">&nbsp;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

