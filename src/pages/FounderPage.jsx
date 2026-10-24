
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
    <main className="min-h-screen bg-white text-slate-800">
      <SEO
        title="Nithesh Devaraj | Founder & CEO of Claxic Technologies"
        description="Meet Nithesh Devaraj, Founder and CEO of Claxic Technologies. Explore his work in software development, digital products, AI, and technology education."
        canonicalPath="/founder"
        robots="index, follow"
        ogType="profile"
      />

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className="grid items-center gap-12 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Founder & CEO · Claxic Technologies
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Nithesh Devaraj
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
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
                className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Connect on LinkedIn
              </a>

              <a
                href="/"
                className="inline-flex items-center rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Explore Claxic
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-100 text-4xl font-bold text-blue-700">
                ND
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-900">
                Nithesh Devaraj
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Founder & Chief Executive Officer
              </p>

              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:underline"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            About
          </h2>

          <div className="mt-6 max-w-4xl space-y-5 leading-8 text-slate-600">
            <p>
              Nithesh Devaraj is the Founder and CEO of Claxic
              Technologies, an early-stage technology venture
              focused on website development, web applications,
              custom software, AI and machine learning solutions,
              and digital product development.
            </p>

            <p>
              Through Claxic Academy, he also aims to make
              technology education more accessible through
              practical, beginner-friendly learning experiences.
            </p>

            <p>
              His interests include software engineering,
              artificial intelligence, data science, business
              automation, and building user-friendly digital
              products.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Technical Skills & Interests
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-200 bg-white p-5 font-medium text-slate-700 transition hover:border-blue-300 hover:shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Building with purpose
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            The vision behind Claxic
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-slate-300">
            The vision behind Claxic is to build useful digital
            solutions for businesses while creating practical
            learning opportunities through Claxic Academy.
            The focus is on continuous learning, thoughtful
            engineering, and technology that addresses
            meaningful needs.
          </p>

          <a
            href="https://www.claxic.in/"
            className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Visit Claxic Technologies ↗
          </a>
        </div>
      </section>
    </main>
  );
};

export default FounderPage;
