// Site-wide header (nav) + footer for every marketing page.
//
// Usage:
//   <SiteNav active="home" />
//   <SiteFooter />
//
// All product names + hrefs come from window.PRODUCTS (products.jsx).

const { useState: useNavS, useEffect: useNavE } = React;

function SiteNav({ active }) {
  const [megaOpen, setMegaOpen] = useNavS(false);
  const [mobileOpen, setMobileOpen] = useNavS(false);

  // close mega on escape
  useNavE(() => {
    const onKey = (e) => {if (e.key === "Escape") {setMegaOpen(false);setMobileOpen(false);}};
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-nav" onMouseLeave={() => setMegaOpen(false)}>
      <div className="site-nav-inner">
        <a href="index.html" className="nav-logo" aria-label="mCuris home">
          <img src={(window.__resources && window.__resources.mark) || "assets/mcuris-mark.png"} alt="" style={{ width: "75px", height: "75px", objectFit: "scale-down" }} />
          <span>mCuris</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          <a
            href="products.html"
            className={`nav-link ${active === "products" ? "active" : ""}`}
            onMouseEnter={() => setMegaOpen(true)}
            onFocus={() => setMegaOpen(true)}>
            
            Products
            <svg className="nav-link-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
          </a>
          <a href="about.html" className={`nav-link ${active === "about" ? "active" : ""}`}
          onMouseEnter={() => setMegaOpen(false)}>
            About
          </a>
          <a href="security.html" className={`nav-link ${active === "security" ? "active" : ""}`}
          onMouseEnter={() => setMegaOpen(false)}>
            Security
          </a>
          <a href="pricing.html" className={`nav-link ${active === "pricing" ? "active" : ""}`}
          onMouseEnter={() => setMegaOpen(false)}>
            Pricing
          </a>
        </nav>

        <div className="nav-spacer" />

        <div className="nav-cta-group">
          <a href={APP_LINKS ? APP_LINKS.webapp : "https://app.mcuris.health"} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: window.innerWidth < 520 ? "none" : "inline-flex" }}>
            Sign in
            <LpIcon name="external" size={11} />
          </a>
          <a href="contact.html" className="btn btn-primary btn-sm" style={{ backgroundColor: "rgb(20, 51, 92)" }}>
            Request a demo
            <LpIcon name="arrowRight" size={14} />
          </a>
        </div>

        <button
          className="nav-mobile-toggle"
          aria-label="Open menu"
          onClick={() => setMobileOpen((o) => !o)}>
          
          <LpIcon name={mobileOpen ? "close" : "menu"} size={18} />
        </button>
      </div>

      {/* Mega menu (desktop) */}
      <div className={`nav-mega ${megaOpen ? "open" : ""}`} onMouseEnter={() => setMegaOpen(true)}>
        <div className="nav-mega-inner">
          {PRODUCTS.map((p) =>
          <a key={p.id} href={p.href} className="nav-mega-item">
              <span className="nav-mega-icon">
                <LpIcon name={p.icon} size={20} color="var(--brand-deep-blue)" />
              </span>
              <div style={{ minWidth: 0 }}>
                <div className="nav-mega-title">{p.name}</div>
                <div className="nav-mega-desc">{p.one_liner}</div>
              </div>
            </a>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen &&
      <div style={{
        background: "#fff", borderBottom: "1px solid var(--border-subtle)",
        boxShadow: "var(--shadow-md)", padding: "16px 20px 24px"
      }}>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", color: "var(--brand-teal-700)", textTransform: "uppercase", marginBottom: 10 }}>Products</div>
          <div style={{ display: "grid", gap: 4, marginBottom: 16 }}>
            {PRODUCTS.map((p) =>
          <a key={p.id} href={p.href} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "10px 8px", borderRadius: 8,
            color: "var(--fg-1)", fontSize: 14, fontWeight: 600
          }}>
                <LpIcon name={p.icon} size={18} color="var(--brand-deep-blue)" />
                {p.name}
              </a>
          )}
          </div>
          <div style={{ height: 1, background: "var(--border-subtle)", margin: "8px 0 12px" }} />
          <div style={{ display: "grid", gap: 4 }}>
            <a href="about.html" style={{ padding: "10px 8px", fontSize: 14, fontWeight: 600 }}>About</a>
            <a href="security.html" style={{ padding: "10px 8px", fontSize: 14, fontWeight: 600 }}>Security</a>
            <a href="pricing.html" style={{ padding: "10px 8px", fontSize: 14, fontWeight: 600 }}>Pricing</a>
            <a href="contact.html" style={{ padding: "10px 8px", fontSize: 14, fontWeight: 600 }}>Contact</a>
          </div>
        </div>
      }
    </header>);

}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-logo">
              <img src={(window.__resources && window.__resources.mark) || "assets/mcuris-mark.png"} alt="" style={{ width: "75px", height: "75px" }} />
              mCuris
            </div>
            <p className="footer-tagline">
              A connected clinical ecosystem. Built so clinicians can spend less time in software and more time with patients.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href="contact.html" className="btn btn-accent btn-sm" style={{ alignSelf: "flex-start" }}>
                Request a demo
                <LpIcon name="arrowRight" size={13} />
              </a>
              <div>
                <div className="footer-col-head" style={{ marginBottom: 10, color: "var(--brand-teal-300)" }}>
                  Get MyCare
                </div>
                <AppStoreBadges size="sm" variant="dark" />
              </div>
              <div>
                <div className="footer-col-head" style={{ marginBottom: 10, color: "var(--brand-teal-300)" }}>
                  Clinicians
                </div>
                <WebAppLoginButton variant="ghost" size="sm" label="Sign in to mCuris" />
              </div>
            </div>
          </div>

          <div>
            <div className="footer-col-head">Product</div>
            <ul className="footer-links">
              {PRODUCTS.map((p) =>
              <li key={p.id}><a href={p.href}>{p.name.replace("mCuris ", "")}</a></li>
              )}
              <li><a href="products.html">All products</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-head">Company</div>
            <ul className="footer-links">
              <li><a href="about.html">About</a></li>
              <li><a href="about.html#mission">Mission</a></li>
              <li><a href="about.html#careers">Careers</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-head">Trust & legal</div>
            <ul className="footer-links">
              <li><a href="security.html">Security & compliance</a></li>
              <li><a href="security.html#hipaa">HIPAA notice</a></li>
              <li><a href="security.html#privacy">Privacy</a></li>
              <li><a href="security.html#terms">Terms of service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} mCuris Health, Inc. All rights reserved.</div>
          <div className="footer-mini-links">
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <LpIcon name="shieldCheck" size={13} color="var(--brand-teal-300)" />
              HIPAA-aligned
            </span>
            <span>·</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <LpIcon name="lock" size={13} color="var(--brand-teal-300)" />
              SOC 2 in progress
            </span>
          </div>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { SiteNav, SiteFooter });