import Image from "next/image";
import logo from "../muon_logo.png";
import {
  ecosystemPillars,
  navigationLinks,
  platformProof,
  products,
  researchAreas,
} from "./siteContent";

export default function Home() {
  return (
    <main className="shell">
      <section className="hero">
        <nav className="topbar">
          <span className="brand-mark">Muon Mechatronics</span>
          <div className="nav-links" aria-label="Primary navigation">
            {navigationLinks.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">AI product ecosystem</p>
            <h1>Building AI companions that help people think, learn, and create.</h1>
            <p className="lede">
              Muon Mechatronics is becoming a focused AI product company.
              Across study tools, personal workspaces, creative software, and
              finance assistants, the throughline is the same: AI that augments
              human capability.
            </p>

            <div className="cta-row">
              <a href="#products" className="primary-cta">
                Explore products
              </a>
              <a href="/research" className="secondary-cta">
                Read the research
              </a>
            </div>

            <ul className="signal-list" aria-label="Platform highlights">
              {platformProof.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="hero-card">
            <div className="logo-wrap">
              <Image
                src={logo}
                alt="Muon Mechatronics logo"
                priority
                className="hero-logo"
              />
            </div>
            <div className="status-panel">
              <span>Parent brand</span>
              <strong>Products for learning, organization, creativity, and life</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Products</p>
          <h2>AI products that help people learn, organize, create, and communicate.</h2>
        </div>

        <div className="product-grid">
          {products.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`info-card product-card accent-${item.accent}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="product-topline">
                <span className="product-badge">{item.tagline}</span>
                <span className="product-open">Open</span>
              </div>
              <div className="product-image-wrap">
                <Image
                  src={item.image}
                  alt={`${item.title} brand artwork`}
                  width={320}
                  height={320}
                  className="product-art"
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="vision" className="section-band">
        <div className="section-heading compact">
          <p className="eyebrow">Vision</p>
          <h2>Muon is the holding company. The products are the stars.</h2>
        </div>

        <div className="pillar-grid">
          {ecosystemPillars.map((item) => (
            <article key={item.title} className="info-card pillar-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading compact">
          <p className="eyebrow">Shipped stack</p>
          <h2>Real product work, not generic startup language.</h2>
        </div>

        <div className="stack-grid">
          {platformProof.map((item) => (
            <div key={item} className="bullet-item stack-item">
              <span className="bullet-glow" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="research" className="section-block research-block">
        <div className="section-heading compact">
          <p className="eyebrow">Research</p>
          <h2>A place for experiments, technical essays, and future-facing prototypes.</h2>
        </div>

        <div className="research-panel">
          {researchAreas.map((item) => (
            <article key={item.title} className="research-item">
              <span className="bullet-glow" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section-actions">
          <a href="/research" className="secondary-cta">
            Open research journal
          </a>
        </div>
      </section>

      <section className="section-block duo-grid">
        <article id="about" className="info-card narrative-card">
          <p className="eyebrow">About</p>
          <h3>Muon Mechatronics is evolving from a general tech identity into a focused family of AI products.</h3>
          <p>
            The company story now starts with what has been shipped: AI tools
            for studying, personal organization, music, images, video, and
            finance. Each product stands on its own, but all of them belong to
            the same idea of amplifying human intelligence.
          </p>
        </article>

        <article id="updates" className="info-card narrative-card">
          <p className="eyebrow">Updates</p>
          <h3>Continuous progress should be visible.</h3>
          <p>
            Product launches, research notes, experiments, and platform
            milestones belong here so visitors can see an ecosystem that keeps
            moving instead of a static company brochure.
          </p>
          <div className="section-actions narrative-actions">
            <a href="/updates" className="secondary-cta">
              View updates
            </a>
          </div>
        </article>
      </section>

      <section id="contact" className="contact-panel">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Talk to the team behind the ecosystem.</h2>
          <p>
            Muon Mechatronics now reads best as the parent brand for a growing
            family of AI products. Reach out for product partnerships,
            research conversations, or platform collaboration.
          </p>
        </div>

        <a className="primary-cta large" href="mailto:muonmechatronics@gmail.com">
          muonmechatronics@gmail.com
        </a>
      </section>
    </main>
  );
}