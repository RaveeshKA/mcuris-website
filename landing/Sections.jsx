// All non-hero landing-page sections.
// Each component is a top-level export to window for use in App.jsx.

const { useState: useSecS } = React;

// =================================================================
// TRUST STRIP — compliance signals, sits right under the hero
// =================================================================
function TrustStrip() {
  const items = [
    { icon: "shieldCheck", label: "HIPAA-aligned" },
    { icon: "lock",        label: "End-to-end encryption" },
    { icon: "api",         label: "FHIR & HL7 native" },
    { icon: "database",    label: "Your data, your tenant" },
    { icon: "globe",       label: "Multi-region hosting" },
    { icon: "award",       label: "SOC 2 in progress" },
  ];
  return (
    <div style={{
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)",
      padding: "24px 0",
      background: "#fff",
    }}>
      <div className="shell" style={{
        display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center", justifyContent: "center",
      }}>
        {items.map(it => (
          <span key={it.label} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 13, fontWeight: 600, color: "var(--fg-3)",
          }}>
            <LpIcon name={it.icon} size={16} color="var(--brand-teal-700)" />
            {it.label}
          </span>
        ))}
      </div>
    </div>
  );
}

// =================================================================
// PRODUCT TABS — the interactive product demo
// Tabs the user can click through; each tab shows a different
// preview of one of the six products.
// =================================================================
function ProductTabs() {
  const [active, setActive] = useSecS(PRODUCTS[0].id);
  const product = PRODUCTS.find(p => p.id === active);

  return (
    <section className="section" style={{ background: "var(--bg-app)" }}>
      <div className="shell">
        <LpSectionHead
          eyebrow="One platform, seven surfaces"
          title="Seven apps. One chart. One source of truth."
          lede="Every surface in the mCuris ecosystem reads from and writes to the same patient record. A barcode scan at the lab updates the chart in Consult; a cross-match in Blood Bank flows back to the order; a script signed in Consult is queued in Pharmacy — instantly."
        />

        {/* Tabs */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 8,
          marginTop: 40,
          padding: 6,
          background: "#fff",
          border: "1px solid var(--border-subtle)",
          borderRadius: 14,
          width: "fit-content",
        }}>
          {PRODUCTS.map(p => {
            const on = p.id === active;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 14px", borderRadius: 10,
                  border: 0, cursor: "pointer",
                  background: on ? "var(--brand-deep-blue)" : "transparent",
                  color: on ? "#fff" : "var(--fg-2)",
                  fontSize: 13, fontWeight: 700, fontFamily: "var(--font-sans)",
                  transition: "all 160ms var(--ease-standard)",
                }}>
                <LpIcon name={p.icon} size={15} />
                {p.short.replace("For ", "")}
              </button>
            );
          })}
        </div>

        {/* Tab content — split: details left, preview right */}
        <div style={{
          marginTop: 32,
          display: "grid", gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.2fr)",
          gap: 48,
          alignItems: "stretch",
        }} className="tabs-grid">
          {/* Left: copy */}
          <div style={{
            padding: 32,
            background: "#fff",
            border: "1px solid var(--border-subtle)",
            borderRadius: 14,
            display: "flex", flexDirection: "column",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{
                width: 44, height: 44, borderRadius: 10,
                background: "var(--brand-gradient-soft)",
                color: "var(--brand-deep-blue)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}>
                <LpIcon name={product.icon} size={24} />
              </span>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brand-teal-700)" }}>
                  {product.short}
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.01em", color: "var(--fg-1)" }}>
                  {product.name}
                </div>
              </div>
            </div>
            <h3 style={{
              margin: "24px 0 12px",
              fontSize: 28, fontFamily: "var(--font-display)", fontWeight: 800,
              letterSpacing: "-0.015em", lineHeight: 1.15,
              color: "var(--fg-1)",
            }}>
              {product.one_liner}
            </h3>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--fg-2)" }}>
              {product.blurb}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
              {product.features.map(f => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--fg-1)" }}>
                  <LpIcon name="check" size={15} color="var(--brand-teal-600)" strokeWidth={2.2} />
                  {f}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "auto", paddingTop: 24, display: "flex", gap: 12 }}>
              <LpButton variant="primary" size="md" iconRight="arrowRight" href={product.href}>
                Tour {product.name.replace("mCuris ", "")}
              </LpButton>
            </div>
          </div>

          {/* Right: per-product preview */}
          <div style={{
            background: "#fff",
            border: "1px solid var(--border-subtle)",
            borderRadius: 14,
            padding: 24,
            display: "flex", alignItems: "center", justifyContent: "center",
            minHeight: 480,
            overflow: "hidden",
          }}>
            <ProductPreview id={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

// =================================================================
// Per-product mini preview — visual switches per active tab.
// These are scenario snapshots, not full UIs.
// =================================================================
function ProductPreview({ id }) {
  if (id === "consult")      return <PreviewConsult />;
  if (id === "mycare")       return <PreviewMyCare />;
  if (id === "telemedicine") return <PreviewTelemedicine />;
  if (id === "lab")          return <PreviewLab />;
  if (id === "pharmacy")     return <PreviewPharmacy />;
  if (id === "bloodbank")    return <PreviewBloodBank />;
  if (id === "drive")        return <PreviewDrive />;
  return null;
}

function PreviewWrap({ children, title, subtitle, icon }) {
  return (
    <div style={{
      width: "100%", maxWidth: 560,
      border: "1px solid var(--border-subtle)", borderRadius: 12,
      background: "#fff", overflow: "hidden",
      boxShadow: "var(--shadow-sm)",
    }}>
      <div style={{
        padding: "10px 14px", borderBottom: "1px solid var(--border-subtle)",
        background: "var(--bg-surface-2)", display: "flex", alignItems: "center", gap: 8,
      }}>
        <LpIcon name={icon} size={14} color="var(--brand-deep-blue)" />
        <span style={{ fontSize: 12, fontWeight: 700, color: "var(--fg-1)" }}>{title}</span>
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--fg-3)" }}>{subtitle}</span>
      </div>
      {children}
    </div>
  );
}

function PreviewConsult() {
  return (
    <PreviewWrap icon="stethoscope" title="Consult · Margaret Walsh" subtitle="MRN 40-71-332">
      <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{
          padding: 14, borderRadius: 10,
          background: "linear-gradient(135deg, #EEF3FA 0%, #E6FAF8 100%)",
          border: "1px solid var(--brand-teal-100)",
        }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <LpIcon name="spark" size={14} color="var(--brand-deep-blue)" />
            <span style={{ fontSize: 11, fontWeight: 800, color: "var(--brand-deep-blue-700)", letterSpacing: "0.04em", textTransform: "uppercase" }}>Chart summary · 2.1s</span>
          </div>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: "var(--fg-2)" }}>
            <b style={{ color: "var(--fg-1)" }}>Day 3 of CHF exacerbation.</b> Net negative 2.4L since admission. BNP trending down (1840 → 920). K⁺ rose to 6.2 — hold lisinopril, recheck in 4h.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
          {[
            { l: "HR", v: "92", u: "bpm" },
            { l: "BP", v: "148/86", u: "mmHg", flag: true },
            { l: "SpO₂", v: "94%", u: "", flag: true },
            { l: "Temp", v: "37.1", u: "°C" },
          ].map(v => (
            <div key={v.l} style={{ padding: "10px 8px", borderRadius: 8, background: "var(--bg-surface-sunken)" }}>
              <div style={{ fontSize: 10, color: "var(--fg-3)", fontWeight: 700, textTransform: "uppercase" }}>{v.l}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 16, fontWeight: 600, color: v.flag ? "var(--status-warn-fg)" : "var(--fg-1)", marginTop: 2 }}>{v.v}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-4)" }}>{v.u}</div>
            </div>
          ))}
        </div>
        <div style={{
          padding: 12, borderRadius: 10, border: "1px solid var(--brand-deep-blue-200)",
          background: "var(--brand-deep-blue-50)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <LpIcon name="pill" size={14} color="var(--brand-deep-blue)" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--fg-1)" }}>Furosemide 40 mg IV</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)" }}>BID · 48h</div>
            </div>
            <button style={{
              padding: "6px 12px", borderRadius: 6, border: 0,
              background: "var(--brand-deep-blue)", color: "#fff", fontSize: 11, fontWeight: 700,
              cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 5,
            }}>Sign & send <LpIcon name="send" size={11} /></button>
          </div>
        </div>
      </div>
    </PreviewWrap>
  );
}

function PreviewMyCare() {
  return (
    <div style={{ padding: 16 }}>
      <MyCarePhone width={260} />
    </div>
  );
}

function PreviewTelemedicine() {
  return (
    <PreviewWrap icon="videoChat" title="Telemedicine · Live visit" subtitle="Dr. Patel · Cardiology">
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 12, padding: 14 }}>
        {/* Main video */}
        <div style={{
          aspectRatio: "4 / 3", borderRadius: 10,
          background: "linear-gradient(135deg, #0F2643 0%, #14335C 60%, #1E4E8F 100%)",
          position: "relative", overflow: "hidden",
        }}>
          {/* Stylized patient silhouette */}
          <svg viewBox="0 0 240 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="tmGlow" cx="50%" cy="35%" r="55%">
                <stop offset="0%" stopColor="rgba(46,196,182,0.35)" />
                <stop offset="100%" stopColor="rgba(15,38,67,0)" />
              </radialGradient>
            </defs>
            <rect width="240" height="180" fill="url(#tmGlow)" />
            {/* Patient bust */}
            <g transform="translate(120, 95)">
              <circle r="36" fill="rgba(255,255,255,0.15)" />
              <circle r="26" fill="rgba(248,228,210,0.85)" />
              <path d="M-44 75 Q-44 35 0 35 Q44 35 44 75 Z" fill="rgba(160,200,230,0.65)" />
            </g>
          </svg>
          {/* Recording indicator */}
          <div style={{
            position: "absolute", top: 10, left: 10,
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "4px 9px", borderRadius: 999,
            background: "rgba(15,38,67,0.65)", color: "#fff",
            fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF5C6B" }} />
            REC · 18:42
          </div>
          {/* Live vitals overlay */}
          <div style={{
            position: "absolute", bottom: 10, left: 10, right: 10,
            display: "flex", gap: 6,
          }}>
            {[
              { l: "HR", v: "78", u: "bpm" },
              { l: "SpO₂", v: "98%", u: "" },
              { l: "BP", v: "128/82", u: "" },
            ].map(v => (
              <div key={v.l} style={{
                flex: 1, padding: "5px 8px", borderRadius: 6,
                background: "rgba(15,38,67,0.65)", backdropFilter: "blur(6px)",
                color: "#fff",
              }}>
                <div style={{ fontSize: 8.5, fontWeight: 700, color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{v.l}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700 }}>{v.v}<span style={{ fontSize: 9, marginLeft: 2, opacity: 0.7 }}>{v.u}</span></div>
              </div>
            ))}
          </div>
          {/* Self view */}
          <div style={{
            position: "absolute", top: 10, right: 10,
            width: 56, height: 42, borderRadius: 6,
            background: "linear-gradient(135deg, #2A6FA8 0%, #14335C 100%)",
            border: "2px solid rgba(255,255,255,0.18)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "rgba(255,255,255,0.6)",
          }}>
            <LpIcon name="user" size={16} />
          </div>
        </div>

        {/* Side panel — actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{
            padding: "9px 11px", borderRadius: 8,
            background: "var(--brand-deep-blue-50)",
            border: "1px solid var(--brand-deep-blue-200)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <LpIcon name="spark" size={12} color="var(--brand-deep-blue)" />
              <span style={{ fontSize: 9.5, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--brand-deep-blue-700)" }}>Live transcript</span>
            </div>
            <p style={{ margin: "6px 0 0", fontSize: 11, lineHeight: 1.4, color: "var(--fg-2)" }}>
              "…chest pain worse on exertion, no radiation. Started 3 days ago…"
            </p>
          </div>
          <button style={{
            padding: "8px 10px", borderRadius: 8, border: 0,
            background: "var(--brand-deep-blue)", color: "#fff",
            fontSize: 11.5, fontWeight: 700, cursor: "pointer",
            display: "inline-flex", alignItems: "center", gap: 6, justifyContent: "flex-start",
          }}>
            <LpIcon name="pill" size={12} /> Send script to pharmacy
          </button>
          <button style={{
            padding: "8px 10px", borderRadius: 8, border: "1px solid var(--border-default)",
            background: "#fff", color: "var(--fg-1)",
            fontSize: 11.5, fontWeight: 700, cursor: "pointer",
            display: "inline-flex", alignItems: "center", gap: 6, justifyContent: "flex-start",
          }}>
            <LpIcon name="flask" size={12} color="var(--brand-deep-blue)" /> Order labs
          </button>
          <button style={{
            padding: "8px 10px", borderRadius: 8, border: "1px solid var(--border-default)",
            background: "#fff", color: "var(--fg-1)",
            fontSize: 11.5, fontWeight: 700, cursor: "pointer",
            display: "inline-flex", alignItems: "center", gap: 6, justifyContent: "flex-start",
          }}>
            <LpIcon name="calendar" size={12} color="var(--brand-deep-blue)" /> Schedule follow-up
          </button>
          <div style={{
            marginTop: "auto", display: "flex", gap: 4, justifyContent: "center",
            padding: "8px 0",
          }}>
            <span style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--bg-surface-sunken)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--fg-2)" }}>
              <LpIcon name="video" size={14} />
            </span>
            <span style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--bg-surface-sunken)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--fg-2)" }}>
              <LpIcon name="phone" size={14} />
            </span>
            <span style={{ width: 30, height: 30, borderRadius: "50%", background: "#D24856", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
              <LpIcon name="close" size={14} strokeWidth={2.4} />
            </span>
          </div>
        </div>
      </div>
    </PreviewWrap>
  );
}

function PreviewLab() {
  return (
    <PreviewWrap icon="testTube" title="Lab · Specimen workbench" subtitle="3 pending · 2 critical">
      <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          { id: "L-44218", test: "Complete blood count", pt: "Walsh, M.", flag: "crit", v: "WBC 18.2" },
          { id: "L-44219", test: "Basic metabolic panel", pt: "Walsh, M.", flag: "warn", v: "K⁺ 6.2" },
          { id: "L-44220", test: "Troponin I, high-sensitivity", pt: "Cho, J.", flag: "ok", v: "< 5" },
          { id: "L-44221", test: "Lipid panel", pt: "Reyes, A.", flag: "ok", v: "LDL 142" },
        ].map(r => (
          <div key={r.id} style={{
            padding: "10px 12px", borderRadius: 8,
            border: "1px solid var(--border-subtle)",
            display: "flex", alignItems: "center", gap: 12,
          }}>
            <span style={{
              width: 6, height: 32, borderRadius: 2,
              background: r.flag === "crit" ? "var(--status-critical)" : r.flag === "warn" ? "var(--status-warn)" : "var(--brand-teal)",
            }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--fg-1)" }}>{r.test}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)" }}>{r.id} · {r.pt}</div>
            </div>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600,
              color: r.flag === "crit" ? "var(--status-critical-fg)" : r.flag === "warn" ? "var(--status-warn-fg)" : "var(--fg-2)",
            }}>{r.v}</span>
            {r.flag !== "ok" && (
              <span style={{
                padding: "3px 8px", borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase",
                background: r.flag === "crit" ? "var(--status-critical-bg)" : "var(--status-warn-bg)",
                color: r.flag === "crit" ? "var(--status-critical-fg)" : "var(--status-warn-fg)",
              }}>
                {r.flag === "crit" ? "Critical" : "Watch"}
              </span>
            )}
          </div>
        ))}
        <div style={{
          marginTop: 6, padding: "8px 12px", borderRadius: 8,
          background: "var(--brand-deep-blue-50)",
          display: "flex", alignItems: "center", gap: 8,
          fontSize: 12, color: "var(--brand-deep-blue-700)", fontWeight: 600,
        }}>
          <LpIcon name="zap" size={13} />
          Critical paged to Dr. Patel · acknowledged at 14:42.
        </div>
      </div>
    </PreviewWrap>
  );
}

function PreviewPharmacy() {
  return (
    <PreviewWrap icon="capsule" title="Pharmacy · Medication reconciliation" subtitle="Walsh, M. · admission">
      <div style={{ padding: 18 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <div style={{ borderRadius: 8, background: "var(--bg-surface-sunken)", padding: 10 }}>
            <div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--fg-3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Home meds</div>
            {["Lisinopril 20 mg PO", "Metformin 1000 mg BID", "Atorvastatin 40 mg HS"].map(m => (
              <div key={m} style={{ fontSize: 12, padding: "6px 0", color: "var(--fg-1)", fontFamily: "var(--font-mono)" }}>{m}</div>
            ))}
          </div>
          <div style={{ borderRadius: 8, background: "var(--brand-deep-blue-50)", padding: 10 }}>
            <div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--brand-deep-blue-700)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Inpatient</div>
            {["Furosemide 40 mg IV BID", "Metformin (continue)", "Atorvastatin (continue)"].map(m => (
              <div key={m} style={{ fontSize: 12, padding: "6px 0", color: "var(--fg-1)", fontFamily: "var(--font-mono)" }}>{m}</div>
            ))}
          </div>
        </div>
        <div style={{
          marginTop: 12, padding: 12, borderRadius: 10,
          background: "var(--status-warn-bg)", color: "var(--status-warn-fg)",
          display: "flex", gap: 10, alignItems: "flex-start",
        }}>
          <LpIcon name="alert" size={16} />
          <div style={{ fontSize: 12.5, lineHeight: 1.5 }}>
            <b>Lisinopril held.</b> K⁺ 6.2 mEq/L on overnight labs. Auto-flagged by interaction checker; reviewer: PharmD Park.
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <button style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: "1px solid var(--border-default)", background: "#fff", fontSize: 12.5, fontWeight: 700, color: "var(--fg-1)", cursor: "pointer" }}>Save draft</button>
          <button style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: 0, background: "var(--brand-deep-blue)", color: "#fff", fontSize: 12.5, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            Mark ready for pickup <LpIcon name="check" size={12} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </PreviewWrap>
  );
}

function PreviewBloodBank() {
  const inventory = [
    { type: "O−",   units: 6,  status: "ok",   note: "Universal donor" },
    { type: "O+",   units: 14, status: "ok" },
    { type: "A−",   units: 4,  status: "warn", note: "Below threshold" },
    { type: "A+",   units: 11, status: "ok" },
    { type: "B−",   units: 1,  status: "crit", note: "Critical low" },
    { type: "B+",   units: 7,  status: "ok" },
    { type: "AB−",  units: 2,  status: "warn" },
    { type: "AB+",  units: 3,  status: "ok",   note: "Universal recipient" },
  ];
  const colors = {
    ok:   { bg: "var(--brand-deep-blue-50)", border: "var(--brand-deep-blue-200)", fg: "var(--brand-deep-blue-700)" },
    warn: { bg: "var(--status-warn-bg)",     border: "#F0D7A5",                    fg: "var(--status-warn-fg)" },
    crit: { bg: "var(--status-critical-bg)", border: "#F2B5BC",                    fg: "var(--status-critical-fg)" },
  };
  return (
    <PreviewWrap icon="droplet" title="Blood Bank · Inventory" subtitle="Red cells · live count">
      <div style={{ padding: 18 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {inventory.map(b => {
            const c = colors[b.status];
            return (
              <div key={b.type} style={{
                aspectRatio: "1 / 1", borderRadius: 10,
                background: c.bg, border: `1px solid ${c.border}`,
                padding: 10, display: "flex", flexDirection: "column", justifyContent: "space-between",
                position: "relative",
              }}>
                {b.status === "crit" && (
                  <span style={{
                    position: "absolute", top: 6, right: 6,
                    width: 7, height: 7, borderRadius: "50%",
                    background: "var(--status-critical)",
                    boxShadow: "0 0 0 4px rgba(210,72,86,0.18)",
                  }} />
                )}
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: 22, color: c.fg, letterSpacing: "-0.02em",
                }}>{b.type}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 18, fontWeight: 700, color: c.fg, lineHeight: 1 }}>
                    {b.units}
                    <span style={{ fontSize: 10, marginLeft: 3, opacity: 0.7 }}>u</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{
          marginTop: 12, padding: "10px 12px", borderRadius: 8,
          background: "var(--status-critical-bg)",
          border: "1px solid #F2B5BC",
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <LpIcon name="alert" size={15} color="var(--status-critical-fg)" />
          <div style={{ fontSize: 12.5, color: "var(--status-critical-fg)", flex: 1, lineHeight: 1.45 }}>
            <b>B−</b> below safety stock (1u remaining). Auto-page to medical director sent at 14:38.
          </div>
        </div>
        <div style={{ marginTop: 10, display: "flex", gap: 8, fontSize: 11, color: "var(--fg-3)", flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: colors.ok.bg, border: `1px solid ${colors.ok.border}` }} />
            In stock
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: colors.warn.bg, border: `1px solid ${colors.warn.border}` }} />
            Below threshold
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: colors.crit.bg, border: `1px solid ${colors.crit.border}` }} />
            Critical
          </span>
        </div>
      </div>
    </PreviewWrap>
  );
}

function PreviewDrive() {
  return (
    <PreviewWrap icon="ambulance" title="Drive · Ambulance 412" subtitle="ETA 7 min · 4.2 km">
      <div style={{ padding: 0 }}>
        {/* Map sketch */}
        <div style={{
          height: 200, position: "relative",
          background: "linear-gradient(135deg, #EEF3FA 0%, #E6FAF8 100%)",
          borderBottom: "1px solid var(--border-subtle)",
        }}>
          <svg viewBox="0 0 400 200" width="100%" height="100%" preserveAspectRatio="none" style={{ position: "absolute", inset: 0 }}>
            {/* Streets */}
            <g stroke="#fff" strokeWidth="14" strokeLinecap="round">
              <path d="M0 50 L400 50" />
              <path d="M0 140 L400 140" />
              <path d="M120 0 L120 200" />
              <path d="M260 0 L260 200" />
            </g>
            <g stroke="#A6BFE0" strokeWidth="0.5" strokeDasharray="4 4">
              <path d="M0 50 L400 50" />
              <path d="M0 140 L400 140" />
              <path d="M120 0 L120 200" />
              <path d="M260 0 L260 200" />
            </g>
            {/* Route */}
            <path
              d="M40 170 L40 140 L120 140 L120 50 L260 50 L260 30"
              stroke="#1E4E8F" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"
            />
            {/* Start dot */}
            <circle cx="40" cy="170" r="6" fill="#fff" stroke="#1E4E8F" strokeWidth="2" />
            {/* Ambulance marker */}
            <g transform="translate(120, 95)">
              <circle r="14" fill="#2EC4B6" />
              <circle r="20" fill="#2EC4B6" opacity="0.18">
                <animate attributeName="r" values="14;26;14" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
              </circle>
              <text textAnchor="middle" y="4" fontSize="11" fontWeight="800" fill="#fff" fontFamily="var(--font-sans)">412</text>
            </g>
            {/* End - hospital */}
            <g transform="translate(260, 30)">
              <rect x="-9" y="-9" width="18" height="18" rx="3" fill="#fff" stroke="#1E4E8F" strokeWidth="1.5" />
              <path d="M-5 0 H5 M0 -5 V5" stroke="#D24856" strokeWidth="2" strokeLinecap="round" />
            </g>
          </svg>
        </div>
        <div style={{ padding: 14, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[
            { l: "Patient", v: "Cho, J.", k: "user" },
            { l: "Chief complaint", v: "Chest pain", k: "heartPulse" },
            { l: "Receiving", v: "ED · Bed 4", k: "hospital" },
          ].map(it => (
            <div key={it.l}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>{it.l}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--fg-1)" }}>{it.v}</div>
            </div>
          ))}
        </div>
      </div>
    </PreviewWrap>
  );
}

// =================================================================
// VALUES — the four mCuris values
// =================================================================
function ValuesSection() {
  const values = [
    {
      icon: "minus",
      title: "Radical Simplicity",
      blurb: "Every screen subtracts a click. A clinician on a 14-hour shift doesn't have time for a tour, a tooltip, or a redundant confirmation dialog.",
    },
    {
      icon: "link",
      title: "Fierce Interoperability",
      blurb: "FHIR-native, HL7-fluent, API-first. We refuse walled gardens. If your lab, billing, or imaging system speaks a standard, we listen.",
    },
    {
      icon: "heart",
      title: "Empathetic Engineering",
      blurb: "Built for the 2 AM shift, not the quiet office. Designed with clinicians who've actually lived through the chart they're using.",
    },
    {
      icon: "shieldCheck",
      title: "Principled Accountability",
      blurb: "Stability over speed. We own bugs transparently, post incident reports, and don't ship to clinical surfaces without staged rollout.",
    },
  ];
  return (
    <section className="section">
      <div className="shell">
        <LpSectionHead
          eyebrow="What we believe"
          title="Four values that show up in every screen we ship."
          lede="The EMR became a billing tool. mCuris is rebuilding the clinical surface as a decision-support copilot — and these are the constraints we hold ourselves to."
        />
        <div style={{
          marginTop: 56,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
        }}>
          {values.map(v => (
            <div key={v.title} className="card">
              <span style={{
                width: 44, height: 44, borderRadius: 10,
                background: "var(--brand-gradient-soft)",
                color: "var(--brand-deep-blue)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                marginBottom: 18,
              }}>
                <LpIcon name={v.icon} size={22} />
              </span>
              <h3 className="ds-h5" style={{ margin: "0 0 8px", fontSize: 18 }}>{v.title}</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "var(--fg-2)" }}>{v.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =================================================================
// HOW THE PIECES TALK — a one-row workflow diagram
// =================================================================
function FlowSection() {
  const steps = [
    { icon: "user",       label: "Patient arrives",     sub: "MyCare check-in" },
    { icon: "ambulance",  label: "EMT brief",           sub: "Drive → Consult" },
    { icon: "droplet",    label: "Type & cross",         sub: "Blood Bank" },
    { icon: "stethoscope",label: "Doctor admits",       sub: "Consult chart" },
    { icon: "testTube",   label: "Labs drawn",          sub: "Lab workbench" },
    { icon: "capsule",    label: "Meds reconciled",     sub: "Pharmacy" },
    { icon: "heartPulse", label: "Result released",     sub: "MyCare push" },
  ];
  return (
    <section className="section" style={{
      background: "var(--bg-app)",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)",
    }}>
      <div className="shell">
        <LpSectionHead
          eyebrow="How the pieces talk"
          title="One patient. One thread. Every hand-off, accountable."
          lede="From the moment the ambulance is dispatched to the moment the discharge summary lands in the patient's phone, every event is written to the same record — visible to everyone with a reason to see it."
        />
        <div style={{
          marginTop: 56,
          background: "#fff", border: "1px solid var(--border-subtle)",
          borderRadius: 16, padding: "28px 24px",
          overflowX: "auto",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 0, minWidth: 760 }}>
            {steps.map((s, i) => (
              <React.Fragment key={s.label}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, minWidth: 90 }}>
                  <span style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: "var(--brand-gradient-soft)",
                    color: "var(--brand-deep-blue)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid var(--brand-deep-blue-100)",
                  }}>
                    <LpIcon name={s.icon} size={22} />
                  </span>
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: "var(--fg-1)", textAlign: "center" }}>{s.label}</span>
                  <span style={{ fontSize: 10.5, fontFamily: "var(--font-mono)", color: "var(--fg-3)", textAlign: "center" }}>{s.sub}</span>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ flex: 1, minWidth: 30, height: 1, background: "var(--brand-teal)", margin: "0 6px", position: "relative", opacity: 0.5 }}>
                    <span style={{
                      position: "absolute", right: -4, top: -3, width: 7, height: 7, borderRadius: "50%",
                      background: "#fff", border: "1.5px solid var(--brand-teal)",
                    }} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =================================================================
// SECURITY — built for trust
// =================================================================
function SecuritySection() {
  return (
    <section className="section">
      <div className="shell">
        <div style={{
          display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
          gap: 64, alignItems: "center",
        }} className="security-grid">
          <div>
            <LpEyebrow>Built for trust</LpEyebrow>
            <h2 className="ds-h2" style={{ margin: "16px 0 20px", fontSize: "clamp(32px, 4vw, 44px)" }}>
              Patient data is not a feature flag.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--fg-2)" }}>
              Every record in mCuris is encrypted in transit and at rest. Every access is logged. Every tenant is isolated. We've designed the platform for HIPAA from day one, and we're on the road to SOC 2 Type II.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                "AES-256 at rest",
                "TLS 1.3 in transit",
                "BAA available on day one",
                "Tenant-isolated storage",
                "Immutable audit log",
                "Quarterly pen tests",
              ].map(c => (
                <li key={c} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--fg-1)" }}>
                  <LpIcon name="check" size={16} color="var(--brand-teal-600)" strokeWidth={2.2} />
                  {c}
                </li>
              ))}
            </ul>
            <LpButton variant="primary" iconRight="arrowRight" href="security.html">
              Read the security overview
            </LpButton>
          </div>

          {/* visual: stacked compliance badge cards */}
          <div style={{
            position: "relative",
            padding: 32,
            background: "radial-gradient(ellipse at 20% 0%, #1E4E8F 0%, #14335C 50%, #0F2643 100%)",
            borderRadius: 20,
            color: "#fff",
            overflow: "hidden",
          }}>
            {/* circuit trace pattern */}
            <svg aria-hidden style={{ position: "absolute", inset: 0, opacity: 0.18 }} viewBox="0 0 400 400" fill="none">
              <g stroke="#2EC4B6" strokeWidth="0.8">
                <path d="M0 100 L80 100 L80 60 L160 60" />
                <circle cx="160" cy="60" r="3" fill="#2EC4B6" />
                <path d="M400 300 L320 300 L320 340 L240 340" />
                <circle cx="240" cy="340" r="3" fill="#2EC4B6" />
                <path d="M40 400 L40 250 L120 250 L120 200" />
                <circle cx="120" cy="200" r="3" fill="#2EC4B6" />
              </g>
            </svg>
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--brand-teal)" }} />
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.10em", textTransform: "uppercase", color: "var(--brand-teal-300)" }}>Compliance posture</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { l: "HIPAA Privacy & Security",   v: "Aligned",          tone: "ok" },
                  { l: "SOC 2 Type II",              v: "In progress",      tone: "progress" },
                  { l: "HITRUST CSF",                v: "Roadmap · 2026",   tone: "future" },
                  { l: "Data residency",             v: "US (multi-AZ)",    tone: "neutral" },
                  { l: "BAA signed on day one",      v: "Standard",         tone: "ok" },
                ].map(row => {
                  const tone = {
                    ok:       { bg: "rgba(46,196,182,0.15)", color: "#8AE5DB" },
                    progress: { bg: "rgba(232,155,44,0.15)", color: "#F0C481" },
                    future:   { bg: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" },
                    neutral:  { bg: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)" },
                  }[row.tone];
                  return (
                    <div key={row.l} style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "12px 16px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 10,
                    }}>
                      <span style={{ fontSize: 13.5, fontWeight: 600, color: "rgba(255,255,255,0.92)" }}>{row.l}</span>
                      <span style={{
                        padding: "4px 10px", borderRadius: 999,
                        fontSize: 11, fontWeight: 700, letterSpacing: "0.04em",
                        background: tone.bg, color: tone.color,
                      }}>{row.v}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =================================================================
// APPS STRIP — five native apps + clinician web app
// =================================================================
function AppsStrip() {
  // Five products that have their own native apps
  const nativeApps = PRODUCTS.filter(p => p.apps && p.apps.apple && p.apps.google);
  // Surfaces that live inside other apps
  const embedded = PRODUCTS.filter(p => p.apps && p.apps.hostedIn);

  return (
    <section style={{
      padding: "96px 0",
      background: "linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-surface-2) 100%)",
      borderTop: "1px solid var(--border-subtle)",
    }}>
      <div className="shell">
        <LpSectionHead
          eyebrow="Download · sign in"
          title="One ecosystem, five apps."
          lede="Each role has its own native app on iOS and Android. Telemedicine lives inside MyCare and Consult. Blood Bank runs in the browser. All sign-ins use SSO where available."
        />

        <div style={{
          marginTop: 56,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
        }}>
          {nativeApps.map(p => (
            <div key={p.id} style={{
              padding: 24, borderRadius: 14,
              background: "#fff", border: "1px solid var(--border-subtle)",
              display: "flex", flexDirection: "column", gap: 14,
              position: "relative", overflow: "hidden",
              transition: "all 180ms var(--ease-standard)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--brand-deep-blue-200)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-subtle)"; e.currentTarget.style.boxShadow = "none"; }}>
              {/* Circuit corner */}
              <svg aria-hidden style={{ position: "absolute", top: 0, right: 0, width: 100, height: 100, opacity: 0.35, pointerEvents: "none" }} viewBox="0 0 100 100" fill="none">
                <g stroke={p.accent === "teal" ? "#2EC4B6" : "#1E4E8F"} strokeWidth="0.7" opacity="0.6">
                  <path d="M100 25 L70 25 L70 55 L40 55" />
                  <circle cx="40" cy="55" r="2.5" fill="#fff" stroke={p.accent === "teal" ? "#2EC4B6" : "#1E4E8F"} />
                </g>
              </svg>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{
                  width: 44, height: 44, borderRadius: 11,
                  background: "var(--brand-gradient-soft)",
                  color: p.accent === "teal" ? "var(--brand-teal-700)" : "var(--brand-deep-blue)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}>
                  <LpIcon name={p.icon} size={22} />
                </span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: p.accent === "teal" ? "var(--brand-teal-700)" : "var(--brand-deep-blue)" }}>
                    {p.short}
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: "var(--fg-1)", letterSpacing: "-0.005em" }}>
                    {p.name.replace("mCuris ", "")}
                  </div>
                </div>
              </div>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.5, color: "var(--fg-2)" }}>
                {p.one_liner}
              </p>
              <AppStoreBadges size="sm" variant="dark" links={p.apps} productName={p.name} />
              {p.apps.web && (
                <a href={p.apps.web} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: 12.5, fontWeight: 700, color: "var(--brand-deep-blue)",
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontFamily: "var(--font-mono)",
                }}>
                  <LpIcon name="monitor" size={13} />
                  {p.apps.web.replace(/^https?:\/\//, "")}
                  <LpIcon name="external" size={11} color="var(--fg-4)" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Embedded surfaces (telemedicine, blood-bank patient side) */}
        <div style={{
          marginTop: 24, padding: 22, borderRadius: 14,
          background: "var(--bg-brand-soft)",
          border: "1px dashed var(--brand-deep-blue-200)",
          display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap",
        }}>
          <LpIcon name="layers" size={22} color="var(--brand-deep-blue)" />
          <div style={{ flex: 1, minWidth: 240 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--fg-1)", marginBottom: 4 }}>
              Embedded surfaces, not separate apps
            </div>
            <div style={{ fontSize: 13.5, color: "var(--fg-2)", lineHeight: 1.5 }}>
              <b style={{ color: "var(--fg-1)" }}>Telemedicine</b> opens inside MyCare for patients and Consult for clinicians.{" "}
              <b style={{ color: "var(--fg-1)" }}>Blood Bank</b> is a web workbench for techs; patients access donation features from MyCare.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =================================================================
// CTA banner — final call to action
// =================================================================
function CtaBanner() {
  return (
    <section style={{ padding: "96px 0 120px", background: "#fff" }}>
      <div className="shell">
        <div style={{
          position: "relative",
          padding: "64px 56px",
          borderRadius: 24,
          background: "radial-gradient(ellipse at 20% 0%, #1E4E8F 0%, #14335C 50%, #0F2643 100%)",
          color: "#fff", overflow: "hidden",
          textAlign: "center",
        }} className="cta-banner">
          {/* Decorative circuit trace */}
          <svg aria-hidden style={{ position: "absolute", top: 0, right: 0, width: 320, height: "100%", opacity: 0.18 }} viewBox="0 0 320 240" fill="none">
            <g stroke="#fff" strokeWidth="1">
              <path d="M320 50 L260 50 L260 100 L200 100" />
              <circle cx="200" cy="100" r="4" fill="#fff" />
              <path d="M320 180 L260 180 L260 140 L210 140" />
              <circle cx="210" cy="140" r="4" fill="#fff" />
            </g>
          </svg>
          <div style={{ position: "relative" }}>
            <h2 style={{
              margin: 0, fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(32px, 4.4vw, 52px)", lineHeight: 1.1,
              letterSpacing: "-0.02em", textWrap: "balance",
            }}>
              Get your clinicians back to the bedside.
            </h2>
            <p style={{
              margin: "20px auto 0", maxWidth: 560,
              fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,0.88)",
              textWrap: "pretty",
            }}>
              See a live walkthrough — pick any product, or all six. We'll tailor the demo to your specialty and team size.
            </p>
            <div style={{ marginTop: 36, display: "inline-flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              <LpButton variant="inverse" size="lg" iconRight="arrowRight" href="contact.html">
                Request a demo
              </LpButton>
              <a href="mailto:hello@mcuris.health" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "15px 24px", borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#fff", fontSize: 15, fontWeight: 600,
                transition: "background 140ms",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                <LpIcon name="mail" size={16} />
                hello@mcuris.health
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  TrustStrip, ProductTabs, ProductPreview, ValuesSection, FlowSection,
  SecuritySection, AppsStrip, CtaBanner,
});
