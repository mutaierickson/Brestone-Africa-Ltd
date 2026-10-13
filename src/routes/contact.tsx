import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Linkedin, MapPin, Twitter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { PageHero, SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Brestone Africa Limited" },
      {
        name: "description",
        content:
          "Have questions about our marvelous engineering and technology solutions? Reach out to Brestone Africa Limited for inquiries, support, or feedback.",
      },
      { property: "og:title", content: "Contact Us | Brestone Africa Limited" },
      {
        property: "og:description",
        content: "Reach out to Brestone Africa Limited for inquiries, support, or feedback.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { label: "X", href: "https://x.com/", icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Contact Us"
          title="Have questions about our marvelous engineering and technology solutions?"
          lead="We're here to help. Reach out to us for inquiries, support, or feedback."
        />

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-7">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-lg font-semibold">Visit Us</h2>
                  <a
                    href="https://www.google.com/search?q=barclays+bank+nairobi+west"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                  >
                    Barclays House, Nairobi West
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7">
              <h2 className="text-lg font-semibold">General Inquiries</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                For general inquiries, please reach out to us at:
              </p>
              <a href="tel:+254720815593" className="mt-4 block text-sm font-medium hover:text-primary">
                +254720815593
              </a>
              <a
                href="mailto:info@brestone.co.ke"
                className="mt-2 block text-sm text-primary hover:underline"
              >
                info@brestone.co.ke
              </a>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7">
              <h2 className="text-lg font-semibold">Need Support?</h2>
              <p className="mt-2 text-sm text-muted-foreground">For technical support:</p>
              <a href="tel:+254720815593" className="mt-4 block text-sm font-medium hover:text-primary">
                +254720815593
              </a>
              <a
                href="mailto:support@brestone.co.ke"
                className="mt-2 block text-sm text-primary hover:underline"
              >
                support@brestone.co.ke
              </a>
            </div>

            <div className="rounded-3xl border border-border bg-secondary/60 p-7">
              <h2 className="text-lg font-semibold">Connect With Us</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Follow us on social media for the latest updates and news about our products and
                services.
              </p>
              <div className="mt-5 flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:text-primary"
                  >
                    <social.icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            className="rounded-3xl border border-border bg-card p-8 lg:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  required
                  className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={7}
                required
                className="mt-2 w-full rounded-xl border border-border bg-background p-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <Button type="submit" size="lg" className="mt-7 rounded-full px-7">
              Send Message
            </Button>
            {sent ? (
              <p className="mt-4 text-sm font-medium text-primary">
                Thanks — we'll reply within one working day.
              </p>
            ) : null}
          </form>
        </section>

        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Our Location
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Be Ready to Transform Your IT Solutions with Us
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Join us in creating a better future through technology. Our team is dedicated to
              providing you with the best solutions tailored to your needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild className="rounded-full px-6">
                <a href="/services">Solutions We Offer?</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <a href="/work">Explore our Portfolio</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
