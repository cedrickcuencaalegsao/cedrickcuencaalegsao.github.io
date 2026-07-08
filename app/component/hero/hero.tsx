import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-background text-foreground"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--foreground)_8%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--foreground)_8%,transparent)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col-reverse items-center gap-12 px-6 py-16 md:flex-row md:gap-16 md:py-24">
        <div className="flex w-full flex-1 flex-col items-start text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-3 py-1 text-xs font-medium tracking-wide text-foreground/80 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </span>

          <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
            Hi, I&apos;m Cedrick
          </p>
          <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-foreground/60">
            <svg
              className="h-4 w-4 text-foreground/50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 1.7 3.6 3 6 3s6-1.3 6-3v-5" />
            </svg>
            BS in Computer Science
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Building{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              delightful
            </span>{" "}
            digital experiences.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            A passionate developer crafting modern web experiences with thoughtful
            design, clean code, and a love for the details that make interfaces
            feel alive.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:opacity-90 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              View my work
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L10.94 10 7.23 6.29a.75.75 0 111.04-1.08l4.25 4.25a.75.75 0 010 1.08l-4.25 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:border-foreground/40 hover:bg-foreground/5"
            >
              Get in touch
            </a>
          </div>

          {/* <div className="mt-10 flex items-center gap-6 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
              <span>Next.js · React · TypeScript</span>
            </div>
          </div> */}
        </div>

        <div className="relative w-full max-w-sm flex-shrink-0 md:max-w-md">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/30 blur-2xl" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/5 shadow-2xl shadow-indigo-500/10">
            <Image
              src="/pictures/resume_2.png"
              alt="Portrait of Cedrick Alegsao"
              fill
              preload
              sizes="(min-width: 768px) 28rem, 80vw"
              className="object-cover"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl border border-foreground/10 bg-background/80 px-4 py-3 shadow-xl backdrop-blur md:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2 15 8l7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-foreground/60">Crafting since</p>
              <p className="text-sm font-semibold text-foreground">2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
