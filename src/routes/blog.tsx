import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter, PageHero } from "@/components/site-footer";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights on Cloud, Security & Delivery | Brestone Africa Limited" },
      {
        name: "description",
        content:
          "Practical notes from the Brestone Africa Limited team on cloud cost control, zero-trust security, data platforms and shipping software predictably.",
      },
      { property: "og:title", content: "Insights on Cloud, Security & Delivery" },
      {
        property: "og:description",
        content: "Practical notes from the Brestone Africa Limited team on cloud, security and delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    tag: "Cloud",
    date: "12 August 2026",
    title: "Cutting a cloud bill without slowing anything down",
    body: "Where the money actually goes, and the five changes that usually pay for themselves in a month.",
  },
  {
    tag: "Security",
    date: "28 July 2026",
    title: "Zero trust, minus the buzzwords",
    body: "What identity-first access looks like in practice for a mid-sized organisation.",
  },
  {
    tag: "Delivery",
    date: "9 July 2026",
    title: "Why fortnightly releases beat big launches",
    body: "Smaller increments make estimates honest and rollbacks boring. Here's how we structure them.",
  },
  {
    tag: "Data",
    date: "21 June 2026",
    title: "One warehouse, many opinions",
    body: "Getting teams to agree on definitions is harder — and more valuable — than the pipeline itself.",
  },
  {
    tag: "Operations",
    date: "3 June 2026",
    title: "Designing an on-call rota people can live with",
    body: "Alert hygiene, escalation paths and the handover ritual that keeps engineers rested.",
  },
  {
    tag: "Strategy",
    date: "17 May 2026",
    title: "Buy, build, or leave it alone",
    body: "A simple test for deciding which systems deserve your team's attention this year.",
  },
];

function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Insights"
          title="Notes from the work"
          lead="Short, practical pieces from the engineers and architects doing the delivery."
        />

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="card-lift flex flex-col rounded-3xl border border-border bg-card p-7"
              >
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-accent px-3 py-1 font-semibold text-accent-foreground">
                    {post.tag}
                  </span>
                  <time className="text-muted-foreground">{post.date}</time>
                </div>
                <h2 className="mt-6 text-lg leading-snug font-semibold">{post.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
