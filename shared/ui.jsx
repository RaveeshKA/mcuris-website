const { useState: useLpUiS } = React;

function LpButton({ variant = "primary", size = "md", icon, iconRight, children, href = "#", style }) {
  const [h, setH] = useLpUiS(false);
  const sizes = {
    sm: { padding: "8px 14px", fontSize: 13, gap: 6 },
    md: { padding: "12px 20px", fontSize: 14, gap: 8 },
    lg: { padding: "15px 24px", fontSize: 15, gap: 10 },
  };
  const variants = {
    primary: { bg: "var(--brand-deep-blue)", fg: "#fff", border: "1px solid transparent",
               hover: { bg: "var(--brand-deep-blue-700)" } },
    accent:  { bg: "var(--brand-teal)", fg: "#fff", border: "1px solid transparent",
               hover: { bg: "var(--brand-teal-600)" } },
    secondary: { bg: "transparent", fg: "var(--brand-deep-blue)", border: "1px solid var(--border-default)",
                 hover: { bg: "var(--brand-deep-blue-50)" } },
    ghost: { bg: "transparent", fg: "var(--fg-1)", border: "1px solid transparent",
             hover: { bg: "var(--bg-surface-sunken)" } },
    inverse: { bg: "#fff", fg: "var(--brand-deep-blue)", border: "1px solid transparent",
               hover: { bg: "var(--brand-deep-blue-50)" } },
  };
  const v = variants[variant];
  const s = sizes[size];
  return (
    <a href={href}
       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
       style={{
         display: "inline-flex", alignItems: "center", gap: s.gap, lineHeight: 1,
         fontWeight: 600, fontFamily: "var(--font-sans)",
         borderRadius: 8, border: v.border,
         background: h ? v.hover.bg : v.bg, color: v.fg,
         padding: s.padding, fontSize: s.fontSize,
         cursor: "pointer", transition: "all 140ms var(--ease-standard)",
         ...style,
       }}>
      {icon && <LpIcon name={icon} size={s.fontSize + 2} />}
      {children}
      {iconRight && <LpIcon name={iconRight} size={s.fontSize + 2} />}
    </a>
  );
}

function LpEyebrow({ children, color = "var(--brand-teal-700)" }) {
  return (
    <div className="lp-eyebrow-row">
      <span className="lp-eyebrow-rule" style={{ background: color }} />
      <span style={{
        fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
        color,
      }}>{children}</span>
    </div>
  );
}

function LpPill({ tone = "teal", children, icon }) {
  const tones = {
    teal:    { bg: "var(--brand-teal-50)",      fg: "var(--brand-teal-800)" },
    blue:    { bg: "var(--brand-deep-blue-50)", fg: "var(--brand-deep-blue-700)" },
    warn:    { bg: "var(--status-warn-bg)",     fg: "var(--status-warn-fg)" },
    crit:    { bg: "var(--status-critical-bg)", fg: "var(--status-critical-fg)" },
    neutral: { bg: "var(--bg-surface-sunken)",  fg: "var(--fg-2)" },
  }[tone];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: "3px 9px", borderRadius: 999,
      fontSize: 11, fontWeight: 700, letterSpacing: "0.01em",
      background: tones.bg, color: tones.fg,
    }}>
      {icon && <LpIcon name={icon} size={11} />}
      {children}
    </span>
  );
}

// --- Section header used across feature blocks ---
function LpSectionHead({ eyebrow, title, lede, align = "left", color = "var(--brand-teal-700)" }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === "center" ? 720 : 780, margin: align === "center" ? "0 auto" : 0 }}>
      {eyebrow && <div style={{ marginBottom: 16 }}><LpEyebrow color={color}>{eyebrow}</LpEyebrow></div>}
      <h2 style={{
        margin: 0, fontFamily: "var(--font-display)", fontWeight: 800,
        fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.05,
        letterSpacing: "-0.02em", color: "var(--fg-1)",
        textWrap: "balance",
      }}>{title}</h2>
      {lede && <p style={{
        margin: "20px 0 0", fontSize: 18, lineHeight: 1.55, color: "var(--fg-2)",
        textWrap: "pretty",
      }}>{lede}</p>}
    </div>
  );
}

Object.assign(window, { LpButton, LpEyebrow, LpPill, LpSectionHead });
