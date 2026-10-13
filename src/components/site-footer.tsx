import { Link } from "@tanstack/react-router";
import { navItems } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="font-display font-semibold">Brestone Africa Limited</span>
        </Link>
        <nav aria-label="Footer" className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Brestone Africa Limited
        </p>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="surface-hero border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] font-semibold sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {lead}
        </p>
      </div>
    </section>
  );
}
