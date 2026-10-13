import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const navItems = [
  { label: "Home", to: "/", dropdown: false },
  { label: "About Us", to: "/about", dropdown: true },
  { label: "Solutions", to: "/services", dropdown: true },
  { label: "Projects", to: "/work", dropdown: true },
  { label: "Contact Us", to: "/contact", dropdown: false },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsExpanded(currentScrollY > previousScrollY && currentScrollY >= 24);
      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-xl">
      <div
        className={`relative mx-auto flex max-w-7xl items-center justify-center px-6 transition-[min-height,padding] duration-300 lg:px-8 ${
          isExpanded ? "min-h-24 py-2" : "min-h-[4.5rem] py-3"
        }`}
      >
        <Link
          to="/"
          className="absolute left-6 flex items-center transition-opacity hover:opacity-80"
        >
          <img
            src="/brestone-logo.png"
            alt="Brestone Africa Limited"
            className={`w-auto object-contain transition-[height,max-width] duration-300 ${
              isExpanded
                ? "h-14 max-w-[180px] lg:h-[4.5rem] lg:max-w-[260px]"
                : "h-11 max-w-[150px] lg:h-14 lg:max-w-[220px]"
            }`}
          />
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              className="flex items-center gap-1 text-base font-medium leading-none text-foreground transition-colors hover:text-primary"
            >
              {item.label}
              {item.dropdown ? <ChevronDown className="h-4 w-4" aria-hidden="true" /> : null}
            </Link>
          ))}
        </nav>

        <div className="absolute right-6 flex items-center gap-3 lg:right-8">
          <span className="hidden h-8 w-px bg-border sm:block" aria-hidden="true" />
          <button
            type="button"
            onClick={() => document.documentElement.classList.toggle("dark")}
            aria-label="Toggle dark mode"
            className="inline-flex h-10 w-10 items-center justify-center text-primary transition-colors hover:text-primary/80"
          >
            <Sun className="h-6 w-6" aria-hidden="true" />
          </button>
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Talk To Us
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-border/60 px-6 py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-1 py-3 text-base font-medium text-foreground"
                >
                  {item.label}
                  {item.dropdown ? <ChevronDown className="h-4 w-4" aria-hidden="true" /> : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
