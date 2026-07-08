import Image from "next/image";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: string;
  iconSize: { width: number; height: number };
  external?: boolean;
};

const socials: ContactLink[] = [
  {
    label: "GitHub",
    value: "@cedrickcuencaalegsao",
    href: "https://github.com/cedrickcuencaalegsao",
    icon: "/pictures/github.png",
    iconSize: { width: 1838, height: 1792 },
    external: true,
  },
  {
    label: "Facebook",
    value: "Cedrick Alegsao",
    href: "https://www.facebook.com/cedricoalessio/",
    icon: "/pictures/facebook.png",
    iconSize: { width: 1600, height: 1600 },
    external: true,
  },
  {
    label: "Instagram",
    value: "@cedrick.cuenca.alegsao",
    href: "https://www.instagram.com/cedrick.cuenca.alegsao/",
    icon: "/pictures/instagram.png",
    iconSize: { width: 1000, height: 1000 },
    external: true,
  },
];

const directs: ContactLink[] = [
  {
    label: "Email",
    value: "cedrickcuencaalegsao@gmail.com",
    href: "mailto:cedrickcuencaalegsao@gmail.com",
    icon: "/pictures/gmail.png",
    iconSize: { width: 4096, height: 4096 },
  },
  {
    label: "Viber",
    value: "+63 946 899 2065",
    href: "viber://chat?number=%2B639468992065",
    icon: "/pictures/viber.png",
    iconSize: { width: 512, height: 512 },
  },
  {
    label: "Location",
    value: "Lapu-Lapu City, Cebu, Philippines",
    href: "https://maps.google.com/?q=Cebu+Philippines",
    icon: "/pictures/location.png",
    iconSize: { width: 816, height: 1200 },
    external: true,
  },
];

function ContactRow({ link }: { link: ContactLink }) {
  return (
    <a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer noopener" : undefined}
      className="group flex items-center gap-4 rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-4 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-foreground/[0.04] hover:shadow-lg hover:shadow-indigo-500/10"
    >
      <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-foreground/5 ring-1 ring-inset ring-foreground/10">
        <Image
          src={link.icon}
          alt={`${link.label} icon`}
          width={link.iconSize.width}
          height={link.iconSize.height}
          className="h-7 w-7 object-contain"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wider text-foreground/50">
          {link.label}
        </p>
        <p className="mt-0.5 truncate text-sm font-semibold text-foreground sm:text-base">
          {link.value}
        </p>
      </div>
      <svg
        className="h-4 w-4 flex-shrink-0 text-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground/70"
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
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 bg-background px-6 py-24 text-foreground md:py-32"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s build something together.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/70">
            I&apos;m always open to new projects, collaborations, or just a
            friendly chat. Reach out through any of the channels below — I
            usually reply within a day.
          </p>
        </div>

        {/* Two columns: direct contact + socials */}
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Direct contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/60">
              Direct
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              {directs.map((link) => (
                <ContactRow key={link.label} link={link} />
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/60">
              Socials
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              {socials.map((link) => (
                <ContactRow key={link.label} link={link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
