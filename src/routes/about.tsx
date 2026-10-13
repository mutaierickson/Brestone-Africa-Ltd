import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Target,
  Zap,
  ArrowRight,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter, PageHero } from "@/components/site-footer";
import aboutInfra from "@/assets/about-infra.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Brestone Africa Limited — Enterprise Security Solutions" },
      {
        name: "description",
        content:
          "Brestone Africa Limited is a dynamic enterprise security company delivering best-in-class protection solutions, powered by an innovative workforce.",
      },
      { property: "og:title", content: "About Brestone Africa Limited — Enterprise Security Solutions" },
      {
        property: "og:description",
        content:
          "We’re a team of passionate security experts dedicated to helping businesses protect their assets, data and operations so they can grow with confidence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const coreValues = [
  {
    title: "Excellence",
    icon: Award,
    body: "We strive for excellence in every project, delivering security solutions that exceed expectations and create lasting value.",
  },
  {
    title: "Integrity",
    icon: ShieldCheck,
    body: "We act with honesty and discretion. Our clients trust us with their most sensitive systems and information, and we protect that trust.",
  },
  {
    title: "Innovation",
    icon: Zap,
    body: "We keep pace with a constantly changing threat landscape, exploring new technologies and approaches to stay ahead of emerging risks.",
  },
  {
    title: "Commitment",
    icon: HeartHandshake,
    body: "We are committed to our clients’ security and success, providing ongoing support, monitoring and guidance throughout their security journey.",
  },
];

const pillars = [
  "Cybersecurity & Network Security",
  "Endpoint Protection",
  "Identity & Access Management (IAM)",
  "Data Protection",
  "Product Life Cycle Advisory",
  "Strategic OEM Partnerships",
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <PageHero
          eyebrow="About Brestone Africa Limited"
          title="Protecting your assets, data and operations so you can grow with confidence"
          lead="We’re a team of passionate security experts dedicated to helping businesses protect their assets, data and operations so they can grow with confidence."
        />

        {/* Our Story Section */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative">
              <img
                src={aboutInfra}
                alt="Brestone Africa Limited enterprise security operations and infrastructure"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                className="w-full rounded-[2rem] border border-border object-cover shadow-soft"
              />
              <div className="mt-6 flex flex-wrap gap-2.5">
                {pillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    <Shield className="h-3 w-3 text-primary" aria-hidden="true" />
                    {pillar}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                Enterprise Protection
              </span>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Our Story</h2>

              <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Brestone Africa Limited is a dynamic enterprise security company delivering
                  best-in-class protection solutions, powered by an innovative workforce with
                  youthful energy and unwavering focus. We work with all major OEMs in
                  cybersecurity, network security, endpoint protection, identity and access
                  management, and data protection.
                </p>
                <p>
                  We bring a fresh perspective to enterprise security, with a commitment to
                  exceeding the expectations of businesses of all sizes. Our strength lies in our
                  versatility, reliability and flexibility, which make us easy to work with as we
                  craft security solutions that make you future-ready. At our core, we are
                  dedicated to building strong, trustworthy and lasting relationships.
                </p>
                <p>
                  Our pride lies in providing security solutions that not only solve our customers’
                  problems but also give them peace of mind as they run their operations. Our
                  strategic partnerships with leading global security providers allow us to offer
                  professional support and advisory services across the entire product life cycle,
                  delivered by a skilled, certified and experienced team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="border-y border-border bg-secondary/40 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                Purpose & Direction
              </span>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Our Mission & Vision</h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                What drives Brestone Africa Limited forward?
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {/* Mission Card */}
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-sm">
                  <Target className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                  Mission
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  To be the leading provider of cutting-edge security solutions, changing how
                  businesses protect their people, data and infrastructure in a rapidly evolving
                  threat environment.
                </p>
              </div>

              {/* Vision Card */}
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-sm">
                  <Compass className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                  Vision
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  To empower businesses with comprehensive and innovative security solutions that
                  reduce risk, strengthen resilience and enable sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Guiding Principles
            </span>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((val) => (
              <article
                key={val.title}
                className="card-lift flex flex-col justify-between rounded-3xl border border-border bg-card p-7"
              >
                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                    <val.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{val.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{val.body}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-card via-card to-secondary/50 p-8 sm:p-12">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-semibold sm:text-3xl">Ready to secure your business?</h3>
                <p className="mt-2 max-w-xl text-muted-foreground">
                  Connect with our team of security experts to explore bespoke enterprise protection,
                  OEM solutions, and product lifecycle advisory.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full px-7 shadow-elevated">
                  <Link to="/contact">
                    Work with us
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-7">
                  <Link to="/services">Explore services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
