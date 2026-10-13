import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  ExternalLink,
  HeartPulse,
  Layers,
  Server,
  Shield,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter, PageHero } from "@/components/site-footer";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Impactful Projects & Case Studies | Brestone Africa Limited" },
      {
        name: "description",
        content:
          "Dive into our portfolio showcasing innovative IT solutions, ICT modernization, and cybersecurity deployments across enterprise and public sector organizations.",
      },
      { property: "og:title", content: "Impactful Projects & Case Studies | Brestone Africa Limited" },
      {
        property: "og:description",
        content:
          "Explore in-depth case studies of our most impactful work in infrastructure, cybersecurity, healthcare, and finance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

type Project = {
  id: string;
  industry: "Infrastructure" | "Cybersecurity" | "Healthcare" | "Finance";
  client: string;
  title: string;
  overview: string;
  solution: string;
  technologies: string[];
  highlights: string[];
  results: { value: string; label: string }[];
  caseStudyUrl: string;
};

const projects: Project[] = [
  {
    id: "kpa-modernization",
    industry: "Infrastructure",
    client: "Kenya Ports Authority",
    title: "Kenya Ports Authority – ICT Modernization & Security Infrastructure",
    overview:
      "Led the modernization of Kenya Ports Authority’s IT infrastructure, implementing robust hardware systems, advanced endpoint security, Commvault data protection, and secure networking to enhance operational efficiency and communication across port facilities.",
    solution:
      "We upgraded the data center with modern servers, implemented a secure LAN/WAN architecture, deployed enterprise-grade firewalls, and set up Commvault intelligent data backup and disaster recovery solutions. Additionally, we rolled out CrowdStrike for next-generation endpoint protection, deployed the KPA Network Access Control (NAC) solution for strict zero-trust access governance, and introduced Adaptiva and ManageEngine for automated endpoint configuration and software lifecycle management.",
    technologies: [
      "CrowdStrike Falcon",
      "Commvault Data Protection",
      "KPA NAC Solution",
      "Adaptiva",
      "ManageEngine",
      "Dell PowerEdge Servers",
      "Cisco Switches & Firewalls",
      "Fiber Optic Backbone",
      "HP ProDesk Workstations",
      "VMware vSphere",
      "Windows Server 2022",
      "Structured Cabling Systems",
    ],
    highlights: [
      "Established a redundant and secure network backbone across port facilities",
      "Centralized IT resources through server virtualization and modern data center architecture",
      "Implemented Commvault intelligent data protection for automated backup and rapid disaster recovery",
      "Deployed CrowdStrike Falcon for real-time endpoint threat hunting and automated response",
      "Implemented KPA Network Access Control (NAC) solution for zero-trust device verification",
      "Automated endpoint patching and software distribution using Adaptiva and ManageEngine",
      "Enhanced system uptime with proactive monitoring and automated disaster recovery tools",
    ],
    results: [
      { value: "99.9%", label: "Network uptime after deployment" },
      { value: "80%", label: "Reduction in hardware-related incidents" },
      { value: "50%", label: "Faster internal communication & data access" },
      { value: "3x", label: "Increase in overall IT capacity & performance" },
    ],
    caseStudyUrl: "https://millenium.co.ke/casestudy1",
  },
  {
    id: "kaa-cybersecurity",
    industry: "Cybersecurity",
    client: "Kenya Airports Authority",
    title: "Kenya Airports Authority – Enterprise Endpoint Cybersecurity",
    overview:
      "Partnered with Kenya Airports Authority to deploy mission-critical CrowdStrike Falcon endpoint security and proactive threat hunting, safeguarding airport operations, flight support workstations, and digital infrastructure across regional airports.",
    solution:
      "We deployed CrowdStrike Falcon across all airport endpoints, flight support workstations, and server environments for continuous behavioral threat detection, rapid threat hunting, and automated incident containment across distributed airport terminals.",
    technologies: [
      "CrowdStrike Falcon EDR",
      "Zero Trust Architecture",
      "Aviation Infrastructure Hardening",
      "Enterprise Endpoint Security",
      "SIEM Integration",
      "Threat Intelligence",
    ],
    highlights: [
      "Enterprise-wide CrowdStrike Falcon deployment protecting critical aviation endpoints",
      "24/7 automated threat containment minimizing dwell time across all airport terminals",
      "Proactive threat hunting and behavioral telemetry across distributed airport stations",
      "Secure isolation of operational flight systems and corporate IT environments",
      "Full alignment with civil aviation cybersecurity standards and regulatory compliance",
    ],
    results: [
      { value: "100%", label: "Endpoint visibility across airport stations" },
      { value: "0", label: "Disruptive ransomware or cyber breaches" },
      { value: "99.99%", label: "Service availability for core operations" },
      { value: "<15m", label: "Average incident containment response time" },
    ],
    caseStudyUrl: "https://millenium.co.ke/casestudy1",
  },
  {
    id: "kenya-railways",
    industry: "Infrastructure",
    client: "Kenya Railways Corporation",
    title: "Kenya Railways Corporation – ICT Systems Revamp",
    overview:
      "Partnered with Kenya Railways Corporation to overhaul their outdated ICT infrastructure, enhancing communication systems, hardware reliability, and centralized operations across regional stations.",
    solution:
      "We executed a structured ICT infrastructure upgrade including installation of industrial-grade servers, network backbone modernization, high-speed internet connectivity, surveillance systems, and reliable power backup solutions. The overhaul supported future scalability and integration of smart transport systems.",
    technologies: [
      "Lenovo ThinkSystem Servers",
      "Fortinet Network Firewalls",
      "Fiber Optic Backbone",
      "Access Control & CCTV Systems",
      "Enterprise Wi-Fi (Ubiquiti/Aruba)",
      "Smart Power Backup & UPS Systems",
    ],
    highlights: [
      "Established secure, high-speed LAN/WAN across regional railway stations",
      "Minimized hardware downtime through industrial-grade replacements",
      "Enabled centralized user authentication and asset management",
      "Improved data security and overall system resilience",
      "Built a scalable foundation for upcoming smart transport system integrations",
    ],
    results: [
      { value: "85%", label: "Increase in system reliability" },
      { value: "60%", label: "Reduction in network-related delays" },
      { value: "50%", label: "Boost in internal communication efficiency" },
      { value: "4x", label: "Faster data exchange between regional hubs" },
    ],
    caseStudyUrl: "https://millenium.co.ke/casestudy1",
  },
  {
    id: "nms-health",
    industry: "Healthcare",
    client: "Nairobi Metropolitan Services",
    title: "Nairobi Metropolitan Services – Digital Health Platform",
    overview:
      "Developed a comprehensive, secure telehealth platform to modernize service delivery for Nairobi Metropolitan Services (NMS), enhancing patient experience and operational efficiency.",
    solution:
      "We engineered a full-stack digital platform connecting patients, providers, and health centers via real-time communication tools. Core features included online ticketing, live monitoring, fleet and asset tracking, and integrated electronic health records. The platform centralized information flow through a Command & Control system with intuitive dashboards for improved decision-making.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "WebRTC",
      "Twilio Video",
      "AWS (EC2, Shield, RDS)",
      "Docker",
    ],
    highlights: [
      "Secure real-time video consultations and online appointment scheduling",
      "Integrated EHR and automated patient data synchronization",
      "Live dashboards for Command & Control visibility",
      "Fleet and emergency medical asset management with geolocation tracking",
      "Role-based access control and HIPAA-grade end-to-end encryption",
    ],
    results: [
      { value: "98%", label: "Patient satisfaction rate reported" },
      { value: "50%", label: "Reduction in missed appointments" },
      { value: "70%", label: "Increase in remote healthcare access" },
      { value: "65%", label: "Improved operational decision-making speed" },
    ],
    caseStudyUrl: "https://millenium.co.ke/projects/nms-digital-health",
  },
  {
    id: "dfid-biosim",
    industry: "Finance",
    client: "DFID / BioSIM",
    title: "DFID Project – BioSIM Supply Chain Finance Platform",
    overview:
      "Developed an intelligent financial and operational planning system to optimize supply chain performance, align business objectives, and automate sales invoicing for the confectionery industry.",
    solution:
      "We implemented a centralized planning system that integrates cross-functional inputs to generate short-, mid-, and long-term supply forecasts. The system leverages real-time demand and supply signals to optimize inventory levels and mitigate constraints. A built-in finance module automates sales invoicing and aligns production targets with financial and operational KPIs.",
    technologies: [
      "Power BI",
      "Python",
      "Microsoft Dynamics 365",
      "Azure SQL Database",
      "SAP FICO",
      "Excel Macros",
    ],
    highlights: [
      "Integrated financial planning and supply chain alignment",
      "Automated sales invoicing across multiple distribution channels",
      "Real-time inventory and demand-supply visibility",
      "Improved planning accuracy through data-driven predictive insights",
      "Collaborative cross-functional platform unifying disparate business units",
    ],
    results: [
      { value: "80%", label: "Reduction in supply-demand mismatches" },
      { value: "65%", label: "Increase in invoicing efficiency" },
      { value: "40%", label: "Decrease in inventory holding costs" },
      { value: "90%", label: "Alignment between financial and operational KPIs" },
    ],
    caseStudyUrl: "https://millenium.co.ke/projects/finance-biosim",
  },
  {
    id: "src-cybersecurity",
    industry: "Cybersecurity",
    client: "Salaries & Remuneration Commission",
    title: "Salaries & Remuneration Commission – Data Protection and Cybersecurity Platform",
    overview:
      "Implemented a government-grade cybersecurity framework to safeguard sensitive payroll data, ensure regulatory compliance, and mitigate risks associated with insider threats and external breaches.",
    solution:
      "We developed and deployed a secure digital infrastructure focused on Data Loss Prevention (DLP), identity and access management (IAM), and continuous monitoring. The platform includes automated encryption protocols, user behavior analytics, and incident response workflows. We also ensured alignment with Kenya's Data Protection Act and ISO/IEC 27001 standards.",
    technologies: [
      "Microsoft Defender for Endpoint",
      "Fortinet DLP",
      "Zecurion DLP",
      "AWS KMS (Key Management Service)",
      "SIEM",
      "OAuth 2.0 / SAML",
      "Zero Trust Network Access (ZTNA)",
    ],
    highlights: [
      "Implemented real-time DLP and access control across all endpoints",
      "Encrypted sensitive payroll and national remuneration records",
      "Automated threat detection and rapid incident mitigation system",
      "Role-based access management and granular policy enforcement",
      "Auditable compliance logs, real-time alerting, and reporting",
    ],
    results: [
      { value: "100%", label: "Regulatory compliance with Kenya’s Data Protection Act" },
      { value: "75%", label: "Reduction in potential data breach vectors" },
      { value: "60%", label: "Decrease in internal data access violations" },
      { value: "90%", label: "Improved visibility into cybersecurity posture" },
    ],
    caseStudyUrl: "https://millenium.co.ke/casestudy2",
  },
];

const industries = ["All", "Infrastructure", "Cybersecurity", "Healthcare", "Finance"] as const;

function WorkPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const filteredProjects =
    selectedIndustry === "All"
      ? projects
      : projects.filter((p) => p.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <PageHero
          eyebrow="Featured Projects"
          title="Discover Our Impactful Projects"
          lead="Dive into our portfolio showcasing innovative IT solutions that drive success across diverse industries. In-depth case studies of our most impactful work."
        />

        {/* Flagship Deployments Banner */}
        <section className="border-b border-border bg-secondary/30 py-8">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Shield className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-sm font-semibold text-foreground">
                    Flagship Enterprise Deployments
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Trusted by Kenya's leading critical infrastructure and public authorities
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full border border-border bg-card px-3 py-1 font-medium text-foreground">
                  CrowdStrike @ KPA & KAA
                </span>
                <span className="rounded-full border border-border bg-card px-3 py-1 font-medium text-foreground">
                  Commvault @ KPA
                </span>
                <span className="rounded-full border border-border bg-card px-3 py-1 font-medium text-foreground">
                  KPA NAC Solution
                </span>
                <span className="rounded-full border border-border bg-card px-3 py-1 font-medium text-foreground">
                  Adaptiva & ManageEngine
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          {/* Industry Filter Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                Filter by Sector
              </p>
              <h2 className="mt-1 text-2xl font-semibold sm:text-3xl">In-Depth Case Studies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => {
                const count =
                  industry === "All"
                    ? projects.length
                    : projects.filter((p) => p.industry === industry).length;
                const isActive = selectedIndustry === industry;

                return (
                  <button
                    key={industry}
                    type="button"
                    onClick={() => setSelectedIndustry(industry)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {industry}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                        isActive
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Case Studies List */}
          <div className="space-y-12">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                id={project.id}
                className="overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10 transition-all hover:border-primary/40"
              >
                {/* Header */}
                <div className="flex flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                        {project.industry === "Cybersecurity" && (
                          <Shield className="h-3.5 w-3.5" aria-hidden="true" />
                        )}
                        {project.industry === "Infrastructure" && (
                          <Server className="h-3.5 w-3.5" aria-hidden="true" />
                        )}
                        {project.industry === "Healthcare" && (
                          <HeartPulse className="h-3.5 w-3.5" aria-hidden="true" />
                        )}
                        {project.industry === "Finance" && (
                          <BarChart3 className="h-3.5 w-3.5" aria-hidden="true" />
                        )}
                        {project.industry}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        Client: <strong className="text-foreground">{project.client}</strong>
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold sm:text-3xl text-foreground">
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary shrink-0"
                  >
                    View Case Study
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>

                {/* Overview */}
                <div className="py-6">
                  <h4 className="text-xs font-semibold tracking-wider text-primary uppercase">
                    Overview
                  </h4>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {project.overview}
                  </p>
                </div>

                {/* Our Approach & Solution */}
                <div className="my-2 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-7">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                    Our Approach & Solution
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                    {project.solution}
                  </p>
                </div>

                {/* Key Technologies */}
                <div className="py-6 border-t border-border mt-4">
                  <h4 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    Key Technologies & Platforms
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Highlights */}
                <div className="py-6 border-t border-border">
                  <h4 className="text-xs font-semibold tracking-wider text-primary uppercase">
                    Project Highlights
                  </h4>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm text-foreground/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tangible Results */}
                <div className="mt-4 rounded-2xl border border-border bg-secondary/40 p-6">
                  <h4 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    Tangible Results & Performance Impact
                  </h4>
                  <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {project.results.map((res) => (
                      <div
                        key={res.label}
                        className="rounded-xl border border-border bg-card p-4 text-center sm:text-left"
                      >
                        <p className="font-display text-2xl sm:text-3xl font-bold text-primary">
                          {res.value}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground font-medium">
                          {res.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-20 rounded-3xl border border-border bg-gradient-to-br from-card via-card to-secondary/50 p-8 sm:p-12">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <span className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                  Let's Build Together
                </span>
                <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                  Have an enterprise or public sector project in mind?
                </h3>
                <p className="mt-2 max-w-xl text-muted-foreground">
                  From large-scale ICT modernization to defense-grade cybersecurity and disaster
                  recovery, our certified engineers deliver measurable results.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full px-7 shadow-elevated">
                  <Link to="/contact">
                    Discuss your project
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-7">
                  <Link to="/services">Explore our services</Link>
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

