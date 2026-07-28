import Link from "next/link";
import { navigationLinks, researchAreas } from "../siteContent";

export default function ResearchPage() {
  return (
    <main className="shell interior-shell">
      <section className="interior-hero">
        <nav className="topbar">
          <Link href="/" className="brand-mark">
            Muon Mechatronics
          </Link>
          <div className="nav-links" aria-label="Primary navigation">
            {navigationLinks.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="section-heading interior-heading">
          <p className="eyebrow">Research</p>
          <h1>Technical exploration that informs the product ecosystem.</h1>
          <p className="lede interior-lede">
            This is where Muon Mechatronics can publish articles, experiments,
            prototypes, and technical essays without diluting product clarity on
            the homepage.
          </p>
        </div>
      </section>

      <section className="interior-grid">
        {researchAreas.map((item) => (
          <article key={item.title} className="info-card interior-card">
            <p className="eyebrow">Track</p>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="contact-panel interior-cta">
        <div>
          <p className="eyebrow">Publishing plan</p>
          <h2>Use this section for essays, experiments, prototypes, and notes.</h2>
          <p>
            When you are ready, this route can grow into a full research index
            backed by markdown, a CMS, or generated docs.
          </p>
        </div>

        <Link href="/" className="primary-cta large">
          Back to ecosystem
        </Link>
      </section>
    </main>
  );
}
