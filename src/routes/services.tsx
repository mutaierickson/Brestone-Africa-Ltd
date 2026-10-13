import { createFileRoute, Link } from "@tanstack/react-router";
import { Cloud, Code2, Cpu, Database, Lock, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter, PageHero } from "@/components/site-footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "IT Services — Cloud, Security & Software | Brestone Africa Limited" },
      {
        name: "description",
        content:
          "Consulting, cloud migration, cyber security, software engineering, data platforms and managed support from one senior Brestone Africa Limited team.",
      },
      { property: "og:title", content: "IT Services — Cloud, Security & Software" },
      {
        property: "og:description",
        content:
          "Consulting, cloud, security, software, data and managed support from one senior team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Workflow,
    title: "IT Consulting",
    body: "A clear technology roadmap that matches how your business actually operates.",
    points: ["Architecture review", "Vendor selection", "Quarterly roadmap"],
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    body: "Move workloads to the cloud without downtime, surprises or runaway bills.",
    points: ["Landing zone setup", "Zero-downtime cutover", "Cost tuning"],
  },
  {
    icon: Lock,
    title: "Cyber Security",
    body: "Continuous monitoring, hardening and incident response built into daily work.",
    points: ["Zero-trust rollout", "Threat monitoring", "Compliance evidence"],
  },
  {
    icon: Code2,
    title: "Software Engineering",
    body: "Custom products and internal tools shipped in small, reviewable increments.",
    points: ["Product discovery", "Fortnightly releases", "Automated testing"],
  },
  {
    icon: Database,
    title: "Data Platforms",
    body: "Pipelines and dashboards that turn scattered records into decisions.",
    points: ["Warehouse design", "Pipeline automation", "Reporting layer"],
  },
  {
    icon: Cpu,
    title: "Managed Support",
    body: "Proactive maintenance and a response team on call when things break.",
    points: ["24/7 monitoring", "Patch management", "Incident response SLA"],
  },
];

const process = [
  { step: "01", title: "Discover", body: "Two weeks mapping systems, risks and priorities." },
  { step: "02", title: "Plan", body: "A costed roadmap with the first milestone scoped." },
  { step: "03", title: "Build", body: "Delivery in fortnightly increments you review." },
  { step: "04", title: "Run", body: "Monitoring, support and continuous improvement." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Services"
          title="Everything your technology needs, under one team"
          lead="Strategy, engineering and operations sit together, so decisions turn into working systems quickly."
        />

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="card-lift rounded-3xl border border-border bg-card p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <s.icon className="h-5.5 w-5.5" aria-hidden="true" />
                </span>
                <h2 className="mt-6 text-lg font-semibold">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <h2 className="text-3xl font-semibold sm:text-4xl">How an engagement runs</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {process.map((p) => (
                <div key={p.step} className="rounded-3xl border border-border bg-card p-6">
                  <p className="font-display text-sm font-semibold text-primary">{p.step}</p>
                  <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Button asChild size="lg" className="rounded-full px-7">
                <Link to="/contact">Start a project</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
