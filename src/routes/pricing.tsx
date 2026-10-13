import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter, PageHero } from "@/components/site-footer";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Engagement Models | Brestone Africa Limited" },
      {
        name: "description",
        content:
          "Advisory, Build and Managed engagements with clear monthly pricing — plus answers to the questions clients ask before signing.",
      },
      { property: "og:title", content: "Pricing & Engagement Models" },
      {
        property: "og:description",
        content: "Advisory, Build and Managed engagements with clear monthly pricing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

const pricing = [
  {
    name: "Advisory",
    price: "$2,400",
    period: "/month",
    body: "Fractional CTO guidance, architecture reviews and a quarterly roadmap.",
    features: ["Monthly strategy sessions", "Architecture reviews", "Vendor selection"],
    featured: false,
  },
  {
    name: "Build",
    price: "$9,800",
    period: "/month",
    body: "A dedicated squad shipping product work with you every two weeks.",
    features: ["Senior engineering pod", "Fortnightly releases", "Shared backlog & metrics"],
    featured: true,
  },
  {
    name: "Managed",
    price: "Custom",
    period: "",
    body: "Round-the-clock operations, security monitoring and support for your stack.",
    features: ["24/7 monitoring", "Incident response SLA", "Compliance reporting"],
    featured: false,
  },
];

const faqs = [
  {
    q: "Is there a minimum commitment?",
    a: "Advisory and Build run on rolling three-month terms. Managed support is annual so we can staff the on-call rota.",
  },
  {
    q: "What happens after the first month?",
    a: "You get a costed roadmap and a working first milestone. If it isn't useful, you can stop there.",
  },
  {
    q: "Do you work with our existing team?",
    a: "Usually, yes. Most engagements are a mix of our specialists and your people, with knowledge handed over as we go.",
  },
  {
    q: "Who owns the code and infrastructure?",
    a: "You do, from day one. Repositories, cloud accounts and documentation sit in your organisation.",
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Engagements"
          title="Straightforward ways to work together"
          lead="Fixed monthly pricing, no lock-in beyond the current term, and everything we build stays yours."
        />

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <article
                key={plan.name}
                className={
                  plan.featured
                    ? "relative rounded-3xl border border-primary/40 bg-card p-8 shadow-elevated"
                    : "card-lift rounded-3xl border border-border bg-card p-8"
                }
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-8 rounded-full bg-[image:var(--gradient-primary)] px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most popular
                  </span>
                ) : null}
                <h2 className="text-lg font-semibold">{plan.name}</h2>
                <p className="mt-4 font-display text-4xl font-semibold">
                  {plan.price}
                  <span className="text-base font-medium text-muted-foreground">{plan.period}</span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{plan.body}</p>
                <ul className="mt-7 space-y-3 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={plan.featured ? "default" : "outline"}
                  className="mt-8 w-full rounded-full"
                >
                  <Link to="/contact">Talk to us</Link>
                </Button>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-secondary/50">
          <div className="mx-auto max-w-3xl px-6 py-24">
            <h2 className="text-3xl font-semibold sm:text-4xl">Common questions</h2>
            <div className="mt-10 space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-semibold">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
