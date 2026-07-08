type Project = {
  title: string;
  description: string;
  repo: string;
  language: string;
  topics: string[];
  highlight?: string;
};

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  );
}

const projects: Project[] = [
  {
    title: "Leo Explorer",
    description:
      "The next chapter — an AI-augmented, cross-platform file management solution being rewritten entirely in Rust (Tauri 2.0 + Dioxus). Soon to be publicly available as an open-source project for everyone to use.",
    repo: "https://github.com/cedrickcuencaalegsao/leoexplorer",
    language: "Rust · Dioxus",
    topics: ["Rust", "Tauri 2.0", "Dioxus", "AI", "Open Source"],
    highlight: "Coming Soon",
  },
  {
    title: "Leo Explorer (2025 Thesis)",
    description:
      "The original AI-augmented desktop application for thesis research — a 2025 Best in Design (Best in Thesis) awardee. Built on Tauri 2.0 with a TypeScript frontend and an AI bridge for an LLM-assisted exploration workflow.",
    repo: "https://github.com/cedrickcuencaalegsao/ThesisLeoExplorer-2025",
    language: "TypeScript · Rust",
    topics: ["Tauri 2.0", "React", "AI", "Desktop", "Thesis"],
    highlight: "Best in Design Project Awardee",
  },
  {
    title: "D-P-and-J",
    description:
      "A multi-platform app with a Laravel (DDD) backend, a Next.js web client, and a Flutter mobile app — built end-to-end as a 3rd-year capstone.",
    repo: "https://github.com/cedrickcuencaalegsao/D-P-and-J",
    language: "PHP · TypeScript · Dart",
    topics: ["Laravel", "Next.js", "Flutter", "Tailwind", "DDD"],
    highlight: "Software Engineering project",
  },
  {
    title: "HungerZone",
    description:
      "A Laravel web application — server-rendered Blade views, a RESTful backend, and a Vite-powered frontend. A small, focused build for exploring the Laravel stack end-to-end.",
    repo: "https://github.com/cedrickcuencaalegsao/HungerZone",
    language: "PHP · Blade",
    topics: ["Laravel", "Blade", "Vite"],
    highlight: "First Full-stack Laravel project",
  },
  {
    title: "Braddex Web Prototype",
    description:
      "An early web prototype exploring layout, motion, and component composition — a sandbox for trying out modern UI patterns.",
    repo: "https://github.com/cedrickcuencaalegsao/BraddexWebPrototype",
    language: "React · JavaScript",
    topics: ["React", "Prototyping", "UI"],
    highlight: "Prototype (not deployed)",
  },
  {
    title: "Dev Tools Client",
    description:
      "A simple client-side application for managing development tools — built with modern web technologies.",
    repo: "https://github.com/cedrickcuencaalegsao/dev-tools-client",
    language: "Css · JavaScript",
    topics: ["React", "Prototyping", "UI"],
    highlight: "Hachathon project (not deployed)",
  },
  {
    title: "Dev Tools Server",
    description:
      "A simple server-side application for managing development tools — built with modern web technologies.",
    repo: "https://github.com/cedrickcuencaalegsao/dev-tools-server",
    language: "Laravel · PHP · REST API · mySQL",
    topics: ["Laravel", "PHP", "REST API"],
    highlight: "Hachathon project (not deployed)",
  },
];

export function Work() {
  return (
    <section
      id="work"
      className="relative isolate scroll-mt-24 bg-background px-6 py-24 text-foreground md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Things I&apos;ve built.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-foreground/70">
              A small set of recent projects — from full-stack apps to
              quick prototypes. Each one taught me something I&apos;m now
              bringing to the next build.
            </p>
          </div>
          <a
            href="https://github.com/cedrickcuencaalegsao"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground/90 transition-colors hover:border-foreground/40 hover:bg-foreground/5"
          >
            <GitHubIcon className="h-4 w-4" aria-hidden="true" />
            See all on GitHub
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>

        {/* Project grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.repo}
              target="_blank"
              rel="noreferrer noopener"
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/[0.04] hover:shadow-xl hover:shadow-indigo-500/10 ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px circle at var(--mx,50%) var(--my,0%), color-mix(in oklab, var(--foreground) 8%, transparent), transparent 60%)",
                }}
              />

              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center rounded-xl bg-foreground/5 text-foreground/80 ring-1 ring-inset ring-foreground/10 ${
                      index === 0 ? "h-12 w-12" : "h-10 w-10"
                    }`}
                  >
                    <GitHubIcon
                      className={index === 0 ? "h-6 w-6" : "h-5 w-5"}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold tracking-tight text-foreground ${
                        index === 0 ? "text-2xl" : "text-lg"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-foreground/50">
                      {project.language}
                    </p>
                  </div>
                </div>
                {project.highlight ? (
                  <span
                    className={`rounded-full border border-indigo-400/30 bg-indigo-500/10 font-semibold uppercase tracking-wider text-indigo-300 ${
                      index === 0
                        ? "px-3 py-1 text-[11px]"
                        : "px-2.5 py-0.5 text-[10px]"
                    }`}
                  >
                    {project.highlight}
                  </span>
                ) : null}
              </div>

              <p
                className={`mt-5 leading-relaxed text-foreground/70 ${
                  index === 0 ? "text-base" : "text-sm"
                }`}
              >
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-foreground/10 bg-foreground/[0.03] px-2.5 py-0.5 text-xs text-foreground/70"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-foreground/10 pt-4 text-sm">
                <span className="inline-flex items-center gap-1.5 font-medium text-foreground/80">
                  View repository
                </span>
                <span
                  aria-hidden="true"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-foreground/15 text-foreground/70 transition-transform group-hover:translate-x-0.5 group-hover:border-foreground/30"
                >
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
