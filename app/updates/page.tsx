import Link from "next/link";
import { navigationLinks, updateItems } from "../siteContent";

export default function UpdatesPage() {
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
          <p className="eyebrow">Updates</p>
          <h1>Progress across products, research, and platform work.</h1>
          <p className="lede interior-lede">
            This route gives visitors a place to track momentum across launches,
            experiments, infrastructure, and strategic shifts in the Muon
            ecosystem.
          </p>
        </div>
      </section>

      <section className="update-list">
        {updateItems.map((item) => (
          <article key={item.title} className="info-card update-card">
            <div className="update-meta">
              <span className="eyebrow">{item.date}</span>
            </div>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="contact-panel interior-cta">
        <div>
          <p className="eyebrow">Next layer</p>
          <h2>Turn this into a changelog, blog, or progress journal.</h2>
          <p>
            The structure is in place for regular product notes, release posts,
            or founder updates that make ongoing execution visible.
          </p>
        </div>

        <Link href="/" className="primary-cta large">
          Back to ecosystem
        </Link>
      </section>
    </main>
  );
}
