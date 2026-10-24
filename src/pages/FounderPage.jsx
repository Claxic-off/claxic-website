
import SEO from '../components/SEO';

const FounderPage = () => {
  const skills = [
    'React.js & Web Development',
    'Node.js & Backend Development',
    'AI & Machine Learning',
    'Data Science',
    'Software Architecture',
    'Product Development',
  ];

  const profileUrl =
    'https://www.linkedin.com/in/nithesh-deva-02736736b';

  return (
    <main
      className="min-h-screen bg-white text-slate-900"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <SEO
        title="Nithesh Devaraj | Founder & CEO of Claxic Technologies"
        description="Nithesh Devaraj is the Founder and CEO of Claxic Technologies, building websites, custom software, digital products and AI-driven solutions."
        canonicalPath="/founder"
        robots="index, follow"
        ogType="profile"
      />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p
              className="mb-5 text-sm font-bold uppercase tracking-[0.18em]"
              style={{ color: '#ff321e' }}
            >
              Founder & CEO · Claxic Technologies
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
              Nithesh Devaraj
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Software developer, technology entrepreneur, and
              Artificial Intelligence and Data Science student,
              focused on building practical digital solutions
              that solve real-world problems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg px-6 py-3 font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: '#ff321e' }}
              >
                Connect on LinkedIn ↗
              </a>

              <a
                href="/"
                className="inline-flex items-center rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Explore Claxic
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <div
                className="mx-auto flex h-28 w-28 items-center justify-center rounded-full text-4xl font-extrabold"
                style={{
                  backgroundColor: '#fff0ed',
                  color: '#ff321e',
                }}
              >
                ND
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-950">
                Nithesh Devaraj
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Founder & Chief Executive Officer
              </p>

              <p className="mt-4 text-sm font-semibold">
                <a
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#ff321e' }}
                  className="hover:underline"
                >
                  LinkedIn Profile ↗
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-widest"
            style={{ color: '#ff321e' }}
          >
            Profile
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            About
          </h2>

          <div className="mt-6 max-w-4xl space-y-5 text-base leading-8 text-slate-600">
            <p>
              Nithesh Devaraj is the Founder and CEO of Claxic
              Technologies, an early-stage technology venture
              focused on website development, web applications,
              custom software, AI and machine learning solutions,
              and digital product development.
            </p>

            <p>
              Through Claxic Academy, he aims to make technology
              education more accessible through practical,
              beginner-friendly learning experiences.
            </p>

            <p>
              His interests include software engineering,
              artificial intelligence, data science, business
              automation, and building user-friendly digital products.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <p
          className="mb-3 text-sm font-bold uppercase tracking-widest"
          style={{ color: '#ff321e' }}
        >
          Expertise
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-slate-950">
          Technical Skills & Interests
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-200 bg-white p-5 font-medium text-slate-700 transition hover:border-orange-300 hover:shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p
            className="text-sm font-bold uppercase tracking-[0.18em]"
            style={{ color: '#ff8a7c' }}
          >
            Building with purpose
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The vision behind Claxic
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
            The vision behind Claxic is to build useful digital
            solutions for businesses while creating practical
            learning opportunities through Claxic Academy.
            The focus is on thoughtful engineering, continuous
            learning, and technology that addresses meaningful needs.
          </p>

          <a
            href="https://www.claxic.in/"
            className="mt-8 inline-flex rounded-lg px-6 py-3 font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: '#ff321e' }}
          >
            Visit Claxic Technologies ↗
          </a>
        </div>
      </section>
    </main>
  );
};

export default FounderPage;
