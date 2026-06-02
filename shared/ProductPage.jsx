// Generic product detail page. Each product-*.html instantiates
// this with its product id.
//
// Structure:
//   - Page hero (eyebrow with product name, headline, lede, preview right)
//   - Pillars (4 feature cards)
//   - Workflow (numbered steps)
//   - "Connected to" strip (links to the other products it touches)
//   - FAQ accordion
//   - CTA

const { useState: useProdS } = React;

function ProductHero({ product, details }) {
  return (
    <section style={{
      background: "var(--brand-gradient-soft)",
      borderBottom: "1px solid var(--border-subtle)",
      paddingTop: 80, paddingBottom: 64,
      position: "relative", overflow: "hidden",
    }}>
      <div className="shell">
        <div style={{
          display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.05fr)",
          gap: 56, alignItems: "center",
        }} className="prod-hero-grid">
          <div>
            <a href="products.html" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 13, fontWeight: 700, color: "var(--brand-deep-blue)",
              padding: "6px 12px", borderRadius: 999,
              border: "1px solid var(--border-subtle)", background: "rgba(255,255,255,0.7)",
              marginBottom: 24,
            }}>
              <LpIcon name="arrowLeft" size={13} />
              All products
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <span style={{
                width: 56, height: 56, borderRadius: 14,
                background: "#fff", border: "1px solid var(--brand-deep-blue-200)",
                color: "var(--brand-deep-blue)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}>
                <LpIcon name={product.icon} size={28} />
              </span>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.10em", textTransform: "uppercase", color: "var(--brand-teal-700)" }}>
                  {product.short}
                </div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "var(--fg-1)", letterSpacing: "-0.01em" }}>
                  {product.name}
                </div>
              </div>
            </div>
            <h1 style={{
              margin: 0, fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(34px, 4.6vw, 56px)", lineHeight: 1.05,
              letterSpacing: "-0.025em", color: "var(--fg-1)", textWrap: "balance",
            }}>
              {details.tagline}
            </h1>
            <p style={{
              margin: "20px 0 0", maxWidth: 540,
              fontSize: 17, lineHeight: 1.6, color: "var(--fg-2)", textWrap: "pretty",
            }}>
              {details.description}
            </p>
            <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <LpButton variant="primary" size="lg" iconRight="arrowRight" href="contact.html">
                Request a demo
              </LpButton>
              <LpButton variant="secondary" size="lg" iconRight="arrowUpRight" href="products.html">
                See the full ecosystem
              </LpButton>
            </div>

            <ProductHeroAppCTAs product={product} />
          </div>
          </div>

          {/* Right: preview */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 480 }}>
            <ProductPreview id={product.id} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarsSection({ details }) {
  return (
    <section className="section">
      <div className="shell">
        <LpSectionHead
          eyebrow="What it does"
          title="The four pillars."
        />
        <div style={{
          marginTop: 56,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
        }}>
          {details.pillars.map(p => (
            <div key={p.title} className="card">
              <span style={{
                width: 44, height: 44, borderRadius: 10,
                background: "var(--brand-gradient-soft)",
                color: "var(--brand-deep-blue)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16,
              }}>
                <LpIcon name={p.icon} size={22} />
              </span>
              <h3 className="ds-h5" style={{ margin: "0 0 6px", fontSize: 17 }}>{p.title}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--fg-2)" }}>{p.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection({ details }) {
  return (
    <section className="section" style={{
      background: "var(--bg-app)",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)",
    }}>
      <div className="shell">
        <LpSectionHead
          eyebrow="A typical workflow"
          title="From the first hand-off to the last sign."
        />
        <div style={{
          marginTop: 56,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 0,
          background: "#fff",
          border: "1px solid var(--border-subtle)",
          borderRadius: 16,
          overflow: "hidden",
        }}>
          {details.workflow.map((step, i) => (
            <div key={step.step} style={{
              padding: "28px 24px",
              borderRight: i < details.workflow.length - 1 ? "1px solid var(--border-subtle)" : "none",
              position: "relative",
            }}>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11, fontWeight: 700,
                color: "var(--brand-teal-700)",
                letterSpacing: "0.06em", textTransform: "uppercase",
                marginBottom: 10,
              }}>
                Step {i + 1}
              </div>
              <h4 className="ds-h5" style={{ margin: "0 0 10px", fontSize: 17 }}>{step.step}</h4>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--fg-2)" }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConnectedToSection({ activeId }) {
  const others = PRODUCTS.filter(p => p.id !== activeId);
  return (
    <section className="section">
      <div className="shell">
        <LpSectionHead
          eyebrow="Better together"
          title="Connected to the rest of mCuris."
          lede="Every action here shows up in the right place, instantly. No nightly batch jobs, no portal toggling."
        />
        <div style={{
          marginTop: 40,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
        }}>
          {others.map(p => (
            <a key={p.id} href={p.href} className="card card-interactive" style={{
              display: "flex", gap: 14, alignItems: "flex-start",
              textDecoration: "none", padding: 18,
            }}>
              <span style={{
                width: 40, height: 40, borderRadius: 10,
                background: "var(--brand-gradient-soft)",
                color: "var(--brand-deep-blue)",
                display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <LpIcon name={p.icon} size={20} />
              </span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--fg-1)", marginBottom: 2 }}>{p.name}</div>
                <div style={{ fontSize: 12.5, color: "var(--fg-3)", lineHeight: 1.4 }}>{p.one_liner}</div>
              </div>
              <LpIcon name="arrowUpRight" size={14} color="var(--fg-4)" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({ details }) {
  const [open, setOpen] = useProdS(0);
  return (
    <section className="section" style={{ background: "var(--bg-app)", borderTop: "1px solid var(--border-subtle)" }}>
      <div className="shell-narrow">
        <LpSectionHead eyebrow="Common questions" title="Frequently asked." />
        <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 8 }}>
          {details.faq.map((f, i) => (
            <div key={f.q} style={{
              background: "#fff",
              border: "1px solid var(--border-subtle)",
              borderRadius: 12,
              overflow: "hidden",
              transition: "all 180ms var(--ease-standard)",
            }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: "100%", textAlign: "left",
                  display: "flex", alignItems: "center", gap: 16,
                  padding: "20px 24px",
                  background: "transparent", border: 0, cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                }}>
                <span style={{ flex: 1, fontSize: 16, fontWeight: 700, color: "var(--fg-1)" }}>{f.q}</span>
                <span style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: open === i ? "var(--brand-deep-blue)" : "var(--bg-surface-sunken)",
                  color: open === i ? "#fff" : "var(--brand-deep-blue)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  transition: "all 180ms var(--ease-standard)",
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                }}>
                  <LpIcon name="plus" size={14} strokeWidth={2.5} />
                </span>
              </button>
              {open === i && (
                <div style={{
                  padding: "0 24px 22px", fontSize: 15, lineHeight: 1.65, color: "var(--fg-2)",
                  textWrap: "pretty",
                }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPage({ id }) {
  const product = PRODUCTS.find(p => p.id === id);
  const details = PRODUCT_DETAILS[id];
  if (!product || !details) {
    return <div style={{ padding: 80, textAlign: "center" }}>Product not found.</div>;
  }
  return (
    <>
      <SiteNav active="products" />
      <main>
        <ProductHero product={product} details={details} />
        <PillarsSection details={details} />
        <WorkflowSection details={details} />
        <ConnectedToSection activeId={id} />
        <FAQSection details={details} />
        <CtaBanner />
      </main>
      <SiteFooter />
    </>
  );
}

window.ProductPage = ProductPage;

// Generic, data-driven CTA strip for the product hero — reads from product.apps.
// - If product has native apps → show App Store + Play badges and a web link.
// - If product is hostedIn others (telemedicine, blood-bank patient side) →
//     show "Built into MyCare/Consult" with links to those products.
// - Otherwise (web-only) → show a "Sign in to the web app" button.
function ProductHeroAppCTAs({ product }) {
  const apps = product.apps || {};
  const hasNative = apps.apple || apps.google;
  const hostedIn  = apps.hostedIn && apps.hostedIn.length > 0;

  // Header label
  let headerLabel = "Get the app";
  if (product.id === "mycare")        headerLabel = "Get MyCare on your phone";
  else if (product.id === "consult")  headerLabel = "Get Consult on your phone";
  else if (product.id === "lab")      headerLabel = "Get Lab on your phone";
  else if (product.id === "pharmacy") headerLabel = "Get Pharmacy on your phone";
  else if (product.id === "drive")    headerLabel = "Get Drive on your phone";
  else if (hostedIn)                  headerLabel = "Where to find it";
  else if (apps.web)                  headerLabel = "Open the web app";

  return (
    <div style={{ marginTop: 36 }}>
      <div style={{
        fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
        textTransform: "uppercase", color: "var(--brand-teal-700)",
        marginBottom: 12,
      }}>
        {headerLabel}
      </div>

      {hasNative && (
        <>
          <AppStoreBadges
            size="md" variant="dark"
            links={apps}
            productName={product.name}
          />
          {apps.web && (
            <div style={{ marginTop: 14, fontSize: 13, color: "var(--fg-3)" }}>
              Or open the web app at{" "}
              <a href={apps.web} target="_blank" rel="noopener noreferrer" style={{
                color: "var(--brand-deep-blue)", fontWeight: 700, fontFamily: "var(--font-mono)",
              }}>{apps.web.replace(/^https?:\/\//, "")}</a>
            </div>
          )}
        </>
      )}

      {!hasNative && hostedIn && (
        <ProductHostedInCards hosts={apps.hostedIn} webHref={apps.web} />
      )}

      {!hasNative && !hostedIn && apps.web && (
        <WebAppLoginButton
          variant="secondary" size="md"
          href={apps.web}
          label={`Sign in to ${product.name.replace("mCuris ", "")}`}
        />
      )}
    </div>
  );
}

// Cards showing the parent products that *host* a non-standalone surface.
function ProductHostedInCards({ hosts, webHref }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 10,
      }}>
        {hosts.map(hostId => {
          const host = PRODUCTS.find(p => p.id === hostId);
          if (!host) return null;
          return (
            <a key={hostId} href={host.href} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 14px", borderRadius: 12,
              background: "#fff", border: "1px solid var(--border-subtle)",
              textDecoration: "none",
              transition: "all 160ms var(--ease-standard)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--brand-deep-blue-200)"; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-subtle)"; e.currentTarget.style.boxShadow = "none"; }}>
              <span style={{
                width: 36, height: 36, borderRadius: 9,
                background: "var(--brand-gradient-soft)",
                color: "var(--brand-deep-blue)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <LpIcon name={host.icon} size={18} />
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11.5, color: "var(--fg-3)" }}>Inside</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--fg-1)" }}>{host.name}</div>
              </div>
              <LpIcon name="arrowUpRight" size={14} color="var(--fg-4)" />
            </a>
          );
        })}
      </div>
      {webHref && (
        <div style={{ fontSize: 13, color: "var(--fg-3)" }}>
          Web fallback for clinicians:{" "}
          <a href={webHref} target="_blank" rel="noopener noreferrer" style={{
            color: "var(--brand-deep-blue)", fontWeight: 700, fontFamily: "var(--font-mono)",
          }}>{webHref.replace(/^https?:\/\//, "")}</a>
        </div>
      )}
    </div>
  );
}
