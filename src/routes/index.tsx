import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  Lock,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import aboutInfra from "@/assets/about-infra.jpg";
import heroImg1 from "@/assets/image-1.jpg";
import heroImg2 from "@/assets/image-2.jpg";
import heroImg3 from "@/assets/image-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brestone Africa Limited — Modern IT Services for Growing Teams" },
      {
        name: "description",
        content:
          "Cloud, security and software engineering delivered by a senior team. Brestone Africa Limited helps businesses modernise infrastructure and ship faster.",
      },
      { property: "og:title", content: "Brestone Africa Limited — Modern IT Services for Growing Teams" },
      {
        property: "og:description",
        content:
          "Cloud, security and software engineering delivered by a senior team. Modernise infrastructure and ship faster.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: heroImg1,
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Workflow,
    title: "IT Consulting",
    body: "A clear technology roadmap that matches how your business actually operates.",
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    body: "Move workloads to the cloud without downtime, surprises or runaway bills.",
  },
  {
    icon: Lock,
    title: "Cyber Security",
    body: "Continuous monitoring, hardening and incident response built into daily work.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    body: "Custom products and internal tools shipped in small, reviewable increments.",
  },
  {
    icon: Database,
    title: "Data Platforms",
    body: "Pipelines and dashboards that turn scattered records into decisions.",
  },
  {
    icon: Cpu,
    title: "Managed Support",
    body: "Proactive maintenance and a response team on call when things break.",
  },
];

const stats = [
  { value: "18+", label: "Years in the field" },
  { value: "240", label: "Projects delivered" },
  { value: "99.98%", label: "Uptime maintained" },
  { value: "4.9/5", label: "Client rating" },
];

const work = [
  {
    tag: "Fintech",
    title: "Rebuilt a payments core on managed cloud",
    result: "Processing costs down 34%",
  },
  {
    tag: "Healthcare",
    title: "Zero-trust rollout across 12 clinics",
    result: "Incidents down to zero in 9 months",
  },
  {
    tag: "Retail",
    title: "Unified inventory data platform",
    result: "Stock accuracy up to 98%",
  },
];

const partnerModules = import.meta.glob("../assets/patners/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const partnerSlides = Object.entries(partnerModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, image]) => {
    const file = path.split(/[/\\]/).pop() ?? "Partner";
    const name = file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");
    return { name, image, alt: name };
  });

const heroImages = [
  {
    src: heroImg1,
    alt: "Brestone Africa Limited enterprise technology and infrastructure",
    caption: "Enterprise Infrastructure & Modern Data Centers",
  },
  {
    src: heroImg2,
    alt: "Cybersecurity, threat monitoring and cloud solutions",
    caption: "Zero-Trust Cybersecurity & Threat Defense",
  },
  {
    src: heroImg3,
    alt: "Engineering reliable hardware and software systems",
    caption: "Resilient Network Operations & Endpoint Control",
  },
];

const marqueePartners = [...partnerSlides, ...partnerSlides, ...partnerSlides, ...partnerSlides];

function Index() {
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="top">
        {/* Hero - Full width from left to right */}
        <section className="relative w-full overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center border-b border-border">
          {/* Full-width sliding hero images occupying from left to right */}
          <div className="absolute inset-0 z-0">
            {heroImages.map((img, idx) => (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === heroSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={1600}
                  height={1200}
                  loading={idx === 0 ? "eager" : "lazy"}
                  fetchPriority={idx === 0 ? "high" : "auto"}
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
                {/* Dark gradient scrim on the left edge for crystal-clear text visibility over dark tech imagery with zero whitish wash */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 sm:via-black/40 sm:to-transparent" />
              </div>
            ))}
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white/90 uppercase shadow-sm backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Enterprise Security & Modern IT Partner
              </span>
              <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl text-white">
                Technology that protects & moves your business forward
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
                We plan, build and run the systems behind growing companies — cloud
                infrastructure, endpoint defense, and software your team can rely on every day.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="rounded-full px-7 shadow-elevated bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/contact">
                    Start a project
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-7 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-md">
                  <Link to="/work">View our projects</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Slider Caption & Indicators at bottom right */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-4 rounded-full border border-white/20 bg-black/50 px-4 py-2 shadow-sm backdrop-blur-md">
            <p className="text-xs font-medium text-white/90 hidden sm:block">
              {heroImages[heroSlide].caption}
            </p>
            <div className="flex gap-1.5">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setHeroSlide(idx)}
                  aria-label={`Show slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === heroSlide
                      ? "w-6 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Trusted partners - Continuous marquee with prominent square cards */}
        <section className="border-b border-border bg-card/60 py-10 sm:py-12 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-6">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-primary uppercase text-center sm:text-left">
              Trusted Partners & OEM Technologies
            </p>
          </div>

          <div className="relative w-full overflow-hidden">
            {/* Edge fade gradients */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20 sm:w-36 bg-gradient-to-r from-card via-card/70 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20 sm:w-36 bg-gradient-to-l from-card via-card/70 to-transparent" />

            {/* Continuous Marquee Track */}
            <div className="animate-marquee flex items-center gap-5 sm:gap-7 py-3">
              {marqueePartners.map((partner, idx) => (
                <div
                  key={`${partner.name}-${idx}`}
                  className="flex h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-white dark:bg-card p-3.5 sm:p-4 shadow-xs transition-transform hover:scale-105"
                >
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    width={140}
                    height={140}
                    decoding="async"
                    className="h-full w-full object-contain opacity-95 transition-opacity hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                Services
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Everything your technology needs, under one team
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              No handoffs between agencies. Strategy, engineering and operations sit together, so
              decisions turn into working systems quickly.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.title}
                to="/services"
                className="card-lift group rounded-3xl border border-border bg-card p-7 text-left"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <s.icon className="h-5.5 w-5.5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-y border-border bg-secondary/50">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
            <div className="relative">
              <img
                src={aboutInfra}
                alt="Data centre corridor with illuminated server racks"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full rounded-[2rem] border border-border object-cover shadow-soft"
              />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                About us
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                A small senior team, deliberately
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Brestone Africa Limited is thirty engineers, architects and security specialists. We take on a
                limited number of clients so every project gets people who have solved the problem
                before — not a rotating bench.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-5">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-border bg-card p-5">
                    <p className="font-display text-3xl font-semibold">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/about">More about Brestone Africa Limited</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Selected work
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Outcomes we can point at
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {work.map((item) => (
              <article
                key={item.title}
                className="card-lift flex flex-col justify-between rounded-3xl border border-border bg-card p-7"
              >
                <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {item.tag}
                </span>
                <h3 className="mt-8 text-lg leading-snug font-semibold">{item.title}</h3>
                <p className="mt-4 border-t border-border pt-4 text-sm font-medium text-primary">
                  {item.result}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/work">View all case studies</Link>
            </Button>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
          <div className="surface-hero overflow-hidden rounded-[2.5rem] border border-border bg-card px-8 py-16 text-center sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold sm:text-4xl">
              Tell us what you're trying to build
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
              A 30-minute call with an engineer, not a salesperson. You'll leave with a clear view
              of scope, cost and the first sensible step.
            </p>
            <div className="mt-9 flex justify-center">
              <Button asChild size="lg" className="rounded-full px-7">
                <Link to="/contact">Book a call</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
