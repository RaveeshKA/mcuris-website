// Three hero variations, switchable via the Tweaks panel.
//
//   hero = "ecosystem"  → DARK spotlight card · ecosystem diagram
//   hero = "showcase"   → Consult chart + MyCare phone side by side
//   hero = "minimal"    → bold headline, M+ mark, circuit-trace accents
//
// All three share the same headline + CTA copy so the brand reads
// consistently across the choices.

const { useState: useHeroS, useRef: useHeroR, useEffect: useHeroE } = React;

// Spotlight component — a soft radial glow that follows the mouse.
// On idle / mobile, it sits in a fixed position. Inspired by the
// "Spotlight" pattern used on dark hero cards.
function Spotlight({ size = 800, color = "rgba(46, 196, 182, 0.18)" }) {
  const ref = useHeroR(null);
  const [pos, setPos] = useHeroS({ x: 0.4, y: 0.3 }); // fractional position

  useHeroE(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      if (x >= -0.2 && x <= 1.2 && y >= -0.2 && y <= 1.2) {
        setPos({ x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) });
      }
    };
    const onLeave = () => setPos({ x: 0.4, y: 0.3 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden",
        borderRadius: "inherit"
      }}>
      
      {/* Mouse-tracking glow */}
      <div
        style={{
          position: "absolute",
          left: `${pos.x * 100}%`, top: `${pos.y * 100}%`,
          width: size, height: size,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle at center, ${color} 0%, transparent 65%)`,
          transition: "left 360ms cubic-bezier(0.2, 0, 0, 1), top 360ms cubic-bezier(0.2, 0, 0, 1)",
          pointerEvents: "none"
        }} />
      
      {/* Static secondary glow — teal accent in opposite corner */}
      <div
        style={{
          position: "absolute",
          right: -200, bottom: -200,
          width: 560, height: 560,
          background: "radial-gradient(circle at center, rgba(30, 78, 143, 0.35) 0%, transparent 60%)",
          pointerEvents: "none"
        }} />
      
    </div>);

}

function HeroShell({ children, variant }) {
  if (variant === "ecosystem") {
    // Dark spotlight card treatment.
    return (
      <section style={{
        paddingTop: 56, paddingBottom: 56,
        background: "var(--bg-surface)"
      }}>
        <div className="shell">
          <div style={{
            position: "relative",
            borderRadius: 24,
            overflow: "hidden",
            background: "radial-gradient(ellipse at 20% 0%, #1E4E8F 0%, #14335C 50%, #0F2643 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 32px 64px -16px rgba(10,26,45,0.45)"
          }}>
            <Spotlight />
            {/* Circuit-trace decoration along top edge */}
            <svg aria-hidden style={{
              position: "absolute", top: 0, right: 0, width: 520, height: 320,
              opacity: 0.18, pointerEvents: "none"
            }} viewBox="0 0 520 320" fill="none">
              <g stroke="#2EC4B6" strokeWidth="1">
                <path d="M520 60 L400 60 L400 110 L300 110" strokeLinecap="round" />
                <circle cx="300" cy="110" r="4" fill="#0A1A2D" />
                <path d="M520 200 L460 200 L460 250 L380 250" strokeLinecap="round" />
                <circle cx="380" cy="250" r="4" fill="#0A1A2D" />
              </g>
            </svg>
            <div style={{ position: "relative", padding: "72px 56px", color: "rgb(14, 20, 28)", opacity: "1" }} className="hero-eco-inner">
              {children}
            </div>
          </div>
        </div>
      </section>);

  }

  return (
    <section style={{
      position: "relative",
      paddingTop: 72,
      paddingBottom: 96,
      background: variant === "minimal" ?
      "var(--bg-surface)" :
      "linear-gradient(180deg, #FBFCFD 0%, #F5F7FA 60%, #FFFFFF 100%)",
      overflow: "hidden"
    }}>
      {/* Subtle circuit-trace decoration top-right */}
      <svg aria-hidden style={{
        position: "absolute", top: -40, right: -40, width: 480, height: 480,
        opacity: variant === "minimal" ? 0.4 : 0.55, pointerEvents: "none"
      }} viewBox="0 0 400 400" fill="none">
        <g stroke="#2EC4B6" strokeWidth="1" opacity="0.45">
          <path d="M400 80 L320 80 L320 160 L240 160" strokeLinecap="round" />
          <circle cx="240" cy="160" r="4" fill="#fff" />
          <path d="M400 200 L360 200 L360 240 L300 240" strokeLinecap="round" />
          <circle cx="300" cy="240" r="4" fill="#fff" />
        </g>
        <g stroke="#1E4E8F" strokeWidth="1" opacity="0.35">
          <path d="M400 320 L340 320 L340 280 L280 280" strokeLinecap="round" />
          <circle cx="280" cy="280" r="4" fill="#fff" />
        </g>
      </svg>
      <div className="shell" style={{ position: "relative" }}>
        {children}
      </div>
    </section>);

}

function HeroHeadline({ size = "default" }) {
  const titleSize = size === "large" ?
  "clamp(44px, 6.4vw, 84px)" :
  "clamp(36px, 5.2vw, 68px)";
  return (
    <>
      <LpEyebrow>The connected clinical ecosystem</LpEyebrow>
      <h1 style={{
        margin: "16px 0 0",
        fontFamily: "var(--font-display)", fontWeight: 800,
        fontSize: titleSize, lineHeight: 1.02,
        letterSpacing: "-0.025em", color: "var(--fg-1)",
        textWrap: "balance"
      }}>
        Clinical software,{" "}
        <span className="ds-text-gradient">built around the patient</span>{" "}
        — not the billing code.
      </h1>
      <p style={{
        margin: "24px 0 0", maxWidth: 620,
        fontSize: 19, lineHeight: 1.55, color: "var(--fg-2)",
        textWrap: "pretty"
      }}>
        mCuris is one platform connecting the patient, the doctor, the lab, the pharmacy, the blood bank, the ambulance, and the virtual visit — so context arrives at the bedside, not three hours later.
      </p>
      <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
        <LpButton variant="primary" size="lg" iconRight="arrowRight" href="contact.html">
          Request a demo
        </LpButton>
        <LpButton variant="secondary" size="lg" iconRight="arrowUpRight" href="products.html">
          See the ecosystem
        </LpButton>
      </div>
      <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 18, color: "var(--fg-3)", fontSize: 13 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <LpIcon name="shieldCheck" size={14} color="var(--brand-teal-700)" />
          HIPAA-aligned by design
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <LpIcon name="lock" size={14} color="var(--brand-teal-700)" />
          End-to-end encrypted
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <LpIcon name="api" size={14} color="var(--brand-teal-700)" />
          FHIR-native
        </span>
      </div>
    </>);

}

// Dark-on-deep-blue headline used inside the ecosystem spotlight card.
function HeroHeadlineDark() {
  return (
    <>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 24, height: 1, background: "var(--brand-teal-300)" }} />
        <span style={{
          fontSize: 11, fontWeight: 800, letterSpacing: "0.10em",
          textTransform: "uppercase", color: "var(--brand-teal-300)"
        }}>
          The connected clinical ecosystem
        </span>
      </div>
      <h1 style={{
        margin: "20px 0 0",
        fontFamily: "var(--font-display)", fontWeight: 800,
        fontSize: "clamp(36px, 5.4vw, 68px)", lineHeight: 1.03,
        letterSpacing: "-0.025em",
        background: "linear-gradient(180deg, #FFFFFF 0%, #C2F2EC 55%, #56D6C8 100%)",
        WebkitBackgroundClip: "text", backgroundClip: "text",
        color: "transparent",
        textWrap: "balance"
      }}>
        Clinical software,{" "}
        <span style={{
          background: "linear-gradient(95deg, #2EC4B6 0%, #56D6C8 100%)",
          WebkitBackgroundClip: "text", backgroundClip: "text",
          color: "transparent"
        }}>
          built around the patient
        </span>{" "}
        — not the billing code.
      </h1>
      <p style={{
        margin: "24px 0 0", maxWidth: 560,
        fontSize: 19, lineHeight: 1.6, color: "rgba(255,255,255,0.72)",
        textWrap: "pretty"
      }}>
        One platform connecting the patient, the doctor, the lab, the pharmacy, the blood bank, the ambulance, and the virtual visit — so context arrives at the bedside, not three hours later.
      </p>
      <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
        <a href="contact.html" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "15px 24px", borderRadius: 10,
          background: "var(--brand-teal)", color: "#0A1A2D",
          fontSize: 15, fontWeight: 700, fontFamily: "var(--font-sans)",
          cursor: "pointer", transition: "all 160ms var(--ease-standard)",
          boxShadow: "0 8px 24px -6px rgba(46,196,182,0.45)"
        }}
        onMouseEnter={(e) => {e.currentTarget.style.background = "#56D6C8";e.currentTarget.style.transform = "translateY(-1px)";}}
        onMouseLeave={(e) => {e.currentTarget.style.background = "var(--brand-teal)";e.currentTarget.style.transform = "translateY(0)";}}>
          
          Request a demo
          <LpIcon name="arrowRight" size={15} strokeWidth={2.2} />
        </a>
        <a href="products.html" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "14px 22px", borderRadius: 10,
          background: "rgba(255,255,255,0.05)", color: "#fff",
          border: "1px solid rgba(255,255,255,0.16)",
          fontSize: 15, fontWeight: 600, fontFamily: "var(--font-sans)",
          cursor: "pointer", transition: "all 160ms var(--ease-standard)"
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
        onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}>
          
          See the ecosystem
          <LpIcon name="arrowUpRight" size={15} />
        </a>
      </div>
      <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 20, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <LpIcon name="shieldCheck" size={14} color="var(--brand-teal-300)" />
          HIPAA-aligned by design
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <LpIcon name="lock" size={14} color="var(--brand-teal-300)" />
          End-to-end encrypted
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <LpIcon name="api" size={14} color="var(--brand-teal-300)" />
          FHIR-native
        </span>
      </div>
    </>);

}

// --- Variant A: ecosystem diagram (dark spotlight card) ---
function HeroEcosystem() {
  return (
    <HeroShell variant="ecosystem">
      <div style={{
        display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
        gap: 48, alignItems: "center"
      }} className="hero-grid">
        <div style={{ position: "relative", zIndex: 2 }}>
          <HeroHeadlineDark />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <EcosystemDiagram size={620} theme="dark" />
        </div>
      </div>
    </HeroShell>);

}

// --- Variant B: product showcase ---
function HeroShowcase() {
  return (
    <HeroShell variant="showcase">
      <div style={{
        display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)",
        gap: 48, alignItems: "center"
      }} className="hero-grid">
        <div>
          <HeroHeadline />
        </div>
        <div style={{ position: "relative", minHeight: 580 }}>
          {/* Background chart - desktop UI */}
          <div style={{
            position: "absolute", top: 30, left: 0, right: 60,
            transform: "perspective(1400px) rotateY(-3deg) rotateX(2deg)",
            transformOrigin: "right center"
          }}>
            <ChartPreview />
          </div>
          {/* Foreground phone */}
          <div style={{
            position: "absolute", bottom: 0, right: 0,
            zIndex: 2, filter: "drop-shadow(0 24px 36px rgba(15, 38, 67, 0.18))"
          }}>
            <MyCarePhone width={250} />
          </div>
          {/* Tiny floating connection pill between them */}
          <div style={{
            position: "absolute", bottom: 280, right: 240, zIndex: 3,
            background: "#fff", border: "1px solid var(--border-subtle)",
            boxShadow: "var(--shadow-md)",
            padding: "8px 12px", borderRadius: 999,
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 12, fontWeight: 700, color: "var(--fg-1)"
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--brand-teal)" }} />
            Result sent to MyCare · 0.4s
          </div>
        </div>
      </div>
    </HeroShell>);

}

// --- Variant C: bold minimal ---
function HeroMinimal() {
  return (
    <HeroShell variant="minimal">
      <div style={{
        textAlign: "center", maxWidth: 920, margin: "0 auto"
      }}>
        <img
          src={(window.__resources && window.__resources.mark) || "assets/mcuris-mark.png"}
          alt=""
          style={{ width: 96, height: 96, margin: "0 auto 24px", display: "block" }} />
        
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
          <LpEyebrow>The connected clinical ecosystem</LpEyebrow>
        </div>
        <h1 style={{
          margin: "16px 0 0",
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(40px, 6.5vw, 88px)", lineHeight: 1.0,
          letterSpacing: "-0.03em", color: "var(--fg-1)",
          textWrap: "balance"
        }}>
          End death-by-a-<br />
          <span className="ds-text-gradient">thousand-clicks.</span>
        </h1>
        <p style={{
          margin: "28px auto 0", maxWidth: 600,
          fontSize: 20, lineHeight: 1.55, color: "var(--fg-2)",
          textWrap: "pretty"
        }}>
          One platform — patient, doctor, lab, pharmacy, blood bank, ambulance, virtual visit — sharing one chart, in real time.
        </p>
        <div style={{ marginTop: 36, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12 }}>
          <LpButton variant="primary" size="lg" iconRight="arrowRight" href="contact.html">
            Request a demo
          </LpButton>
          <LpButton variant="secondary" size="lg" iconRight="arrowUpRight" href="products.html">
            See the ecosystem
          </LpButton>
        </div>

        {/* Six product micro-tiles below */}
        <div style={{
          marginTop: 64,
          display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 14
        }} className="hero-tiles">
          {PRODUCTS.map((p) =>
          <a key={p.id} href={p.href} style={{
            padding: "16px 12px", borderRadius: 12,
            border: "1px solid var(--border-subtle)",
            background: "#fff",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
            transition: "all 180ms var(--ease-standard)"
          }}
          onMouseEnter={(e) => {e.currentTarget.style.borderColor = "var(--brand-teal-300)";e.currentTarget.style.transform = "translateY(-2px)";e.currentTarget.style.boxShadow = "var(--shadow-md)";}}
          onMouseLeave={(e) => {e.currentTarget.style.borderColor = "var(--border-subtle)";e.currentTarget.style.transform = "translateY(0)";e.currentTarget.style.boxShadow = "none";}}>
              <span style={{
              width: 38, height: 38, borderRadius: 10,
              background: "var(--brand-gradient-soft)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              color: "var(--brand-deep-blue)"
            }}>
                <LpIcon name={p.icon} size={20} />
              </span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--fg-1)" }}>{p.short.replace("For ", "")}</span>
            </a>
          )}
        </div>
      </div>
    </HeroShell>);

}

function Hero({ variant }) {
  if (variant === "showcase") return <HeroShowcase />;
  if (variant === "minimal") return <HeroMinimal />;
  return <HeroEcosystem />;
}

Object.assign(window, { Hero, HeroEcosystem, HeroShowcase, HeroMinimal });