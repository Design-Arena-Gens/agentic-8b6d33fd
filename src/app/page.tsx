export default function Home() {
  const skills = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Data Visualization",
    "OpenCV",
    "Prompt Engineering",
    "Scikit-learn",
    "C++",
  ];

  const highlights = [
    {
      title: "ZCOER B.Tech • First Year",
      description:
        "Building a strong foundation in electronics, mathematics, and computer science while exploring AI research avenues.",
    },
    {
      title: "AI/ML Engineer",
      description:
        "Designing intelligent systems with a focus on generative AI, computer vision, and natural language applications.",
    },
    {
      title: "Curious Builder",
      description:
        "Translating ideas into polished prototypes and sharing insights through writing, workshops, and open-source.",
    },
  ];

  const projects = [
    {
      name: "NeuroVision",
      summary:
        "Real-time image recognition pipeline that identifies lab equipment and streamlines experiment documentation.",
      tags: ["Computer Vision", "Python", "Streamlit"],
    },
    {
      name: "Pulse AI Notes",
      summary:
        "AI-powered study assistant that transforms lecture audio into distilled notes, flashcards, and study prompts.",
      tags: ["NLP", "Transformers", "TypeScript"],
    },
    {
      name: "Campus Insight",
      summary:
        "Large Language Model interface trained on college knowledge base to answer student queries instantly.",
      tags: ["LLMs", "RAG", "Next.js"],
    },
  ];

  const learningGoals = [
    "Develop robotics perception models tailored for autonomous navigation.",
    "Publish open-source notebooks that demystify complex ML concepts.",
    "Collaborate with research labs to build solutions with positive social impact.",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(147,197,253,0.18),_rgba(15,23,42,0.9)),_radial-gradient(circle_at_bottom,_rgba(244,114,182,0.18),_rgba(15,23,42,0.95))]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover opacity-20 mix-blend-overlay" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-28 px-6 pb-24 pt-20 sm:px-10 lg:px-20">
        <header className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/80 px-4 py-1 text-sm tracking-wide text-slate-300 backdrop-blur">
              AI & ML Engineer • Aspirational Researcher
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Hey, I&apos;m{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-fuchsia-400 bg-clip-text text-transparent">
                an AI & ML engineer
              </span>
              . I design intelligent systems that learn, adapt, and inspire.
            </h1>
            <p className="text-lg leading-relaxed text-slate-300">
              I&apos;m an Artificial Intelligence & Machine Learning engineer
              currently in my first year at Zeal College of Engineering and
              Research (ZCOER). I love transforming data into stories, building
              models that understand the world, and crafting experiences that
              feel magical.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@aimlportfolio.dev"
                className="group inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-400"
              >
                Let&apos;s Collaborate
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 px-6 py-3 font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
              >
                View Portfolio
              </a>
            </div>
          </div>
          <div className="w-full max-w-sm rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur">
            <div className="rounded-2xl bg-gradient-to-br from-sky-500/25 via-blue-500/10 to-fuchsia-500/20 p-6">
              <p className="font-medium text-slate-200">
                Current Mission
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Explore how LLMs and computer vision can assist students and
                researchers, while mastering the math, code, and creativity that
                power groundbreaking AI systems.
              </p>
              <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                <span>ZCOER • Pune</span>
                <span>Class of 2028</span>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-3" id="about">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="group rounded-3xl border border-slate-800 bg-slate-950/60 p-8 transition hover:border-sky-500/60 hover:bg-slate-900/80"
            >
              <h3 className="text-lg font-semibold text-white">
                {highlight.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {highlight.description}
              </p>
            </div>
          ))}
        </section>

        <section className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-white">What I build</h2>
            <p className="mt-3 text-slate-300">
              My projects reveal how I blend design intuition, algorithmic rigor,
              and storytelling to craft thoughtful AI experiences.
            </p>
            <div className="mt-8 space-y-6" id="portfolio">
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="rounded-3xl border border-slate-800/80 bg-slate-950/50 p-6 transition hover:border-sky-500/60 hover:bg-slate-900/70"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium text-white">
                      {project.name}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-sky-400">
                      Featured
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8">
              <h2 className="text-3xl font-semibold text-white">
                Toolbelt & Stack
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                A dynamic mix of programming languages, ML frameworks, and
                product tools I use to prototype fast and iterate even faster.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-200 sm:grid-cols-3">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-2xl border border-slate-800/70 bg-slate-900/60 px-4 py-2 text-center transition hover:border-sky-500/60 hover:text-sky-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-sky-600/20 via-fuchsia-500/20 to-slate-900/90 p-8">
              <h2 className="text-3xl font-semibold text-white">
                Learning Roadmap
              </h2>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-200">
                {learningGoals.map((goal) => (
                  <li key={goal} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-sky-400/70 text-xs text-sky-300">
                      ★
                    </span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-4">
              <h2 className="text-3xl font-semibold text-white">
                Let&apos;s create the future of intelligence.
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                I&apos;m eager to collaborate on research projects, internships,
                and hackathons that push AI beyond the expected. Reach out with
                opportunities, ideas, or just to say hello.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-sm text-slate-200">
              <a
                href="mailto:hello@aimlportfolio.dev"
                className="rounded-full border border-sky-500/60 bg-sky-500/10 px-6 py-3 text-center font-medium text-sky-200 transition hover:bg-sky-500/20"
              >
                hello@aimlportfolio.dev
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-800 px-6 py-3 text-center transition hover:border-sky-400/70 hover:text-sky-200"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-slate-800/80 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Emerging Intelligence. Crafted with
            curiosity.
          </span>
          <span>Located in Pune • Available for remote collaborations</span>
        </footer>
      </main>
    </div>
  );
}
