// App store badges + web app login button. Reusable across the site.
//
// Each badge accepts an `href` prop so per-product links can be passed in.
// If no href is given, it falls back to the global APP_LINKS defaults below
// (used by the footer + nav for MyCare / the generic web app).

const APP_LINKS = {
  apple:  "https://apps.apple.com/app/mcuris-mycare",
  google: "https://play.google.com/store/apps/details?id=health.mcuris.mycare",
  webapp: "https://app.mcuris.health",
};
window.APP_LINKS = APP_LINKS;

// ---- App Store badge ----
// Renders a self-contained black pill matching the Apple/Google badge style.
// Inline SVG so we don't depend on external image assets.
function AppStoreBadge({ store, size = "md", variant = "dark", href, label }) {
  const dark = variant === "dark";
  const heights = { sm: 38, md: 48, lg: 56 };
  const h = heights[size] || heights.md;

  const bg     = dark ? "#000000" : "#FFFFFF";
  const fg     = dark ? "#FFFFFF" : "#000000";
  const border = dark ? "1px solid #2a2a2a" : "1px solid #d4d4d4";

  const small = h * 0.18;
  const big   = h * 0.30;

  if (store === "apple") {
    return (
      <a
        href={href || APP_LINKS.apple}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label || "Download on the App Store"}
        style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          height: h, padding: `0 ${h * 0.32}px`,
          background: bg, color: fg, borderRadius: h * 0.18,
          border, textDecoration: "none",
          transition: "transform 140ms var(--ease-standard), box-shadow 140ms var(--ease-standard)",
          boxSizing: "border-box",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
      >
        {/* Apple glyph */}
        <svg height={h * 0.55} viewBox="0 0 24 24" fill={fg} aria-hidden style={{ flexShrink: 0 }}>
          <path d="M17.05 12.39c.02-2.06 1.69-3.05 1.76-3.1-.96-1.41-2.45-1.6-2.98-1.62-1.27-.13-2.48.75-3.13.75-.65 0-1.65-.73-2.71-.71-1.39.02-2.68.81-3.4 2.05-1.45 2.52-.37 6.24 1.04 8.28.69 1 1.51 2.13 2.59 2.09 1.04-.04 1.43-.67 2.69-.67 1.26 0 1.61.67 2.71.65 1.12-.02 1.83-1.02 2.51-2.02.79-1.16 1.12-2.29 1.14-2.35-.03-.01-2.19-.84-2.22-3.35zM15.34 6.4c.57-.7.96-1.66.85-2.62-.83.03-1.83.55-2.42 1.24-.53.62-1 1.6-.87 2.54.92.07 1.86-.47 2.44-1.16z"/>
        </svg>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1, fontFamily: "var(--font-sans)" }}>
          <span style={{ fontSize: small, fontWeight: 400, letterSpacing: "0.01em" }}>Download on the</span>
          <span style={{ fontSize: big, fontWeight: 600, marginTop: h * 0.045, letterSpacing: "-0.01em" }}>App Store</span>
        </div>
      </a>
    );
  }

  if (store === "google") {
    return (
      <a
        href={href || APP_LINKS.google}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label || "Get it on Google Play"}
        style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          height: h, padding: `0 ${h * 0.32}px`,
          background: bg, color: fg, borderRadius: h * 0.18,
          border, textDecoration: "none",
          transition: "transform 140ms var(--ease-standard), box-shadow 140ms var(--ease-standard)",
          boxSizing: "border-box",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
      >
        {/* Google Play glyph (4-color triangle) */}
        <svg height={h * 0.6} viewBox="0 0 24 24" aria-hidden style={{ flexShrink: 0 }}>
          <path d="M3.6 2.2 14.5 13 3.6 21.8c-.4-.3-.6-.8-.6-1.3V3.5c0-.5.2-1 .6-1.3z" fill="#00C2FF"/>
          <path d="M14.5 13 3.6 21.8c.3.2.7.3 1.1.2l11.6-6.4L14.5 13z" fill="#00E676"/>
          <path d="m14.5 11 1.8-1.8 3-1.6-3.1-1.7L4.7 1.5c-.4-.1-.8-.1-1.1.2L14.5 11z" fill="#FFD600"/>
          <path d="m16.3 11.2 3.7-2c.7-.4.7-1.4 0-1.8l-3.7-2L13.5 12l2.8.8z" fill="#FF3D00"/>
        </svg>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1, fontFamily: "var(--font-sans)" }}>
          <span style={{ fontSize: small, fontWeight: 400, letterSpacing: "0.01em" }}>GET IT ON</span>
          <span style={{ fontSize: big, fontWeight: 600, marginTop: h * 0.045, letterSpacing: "-0.01em" }}>Google Play</span>
        </div>
      </a>
    );
  }

  return null;
}

// ---- Both badges side-by-side ----
// Pass `links` (e.g. product.apps) to point at product-specific stores.
function AppStoreBadges({ size = "md", variant = "dark", links = null, productName = null }) {
  const appleHref  = links?.apple  || APP_LINKS.apple;
  const googleHref = links?.google || APP_LINKS.google;
  const label = productName ? `mCuris ${productName.replace("mCuris ", "")}` : "mCuris";
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      <AppStoreBadge store="apple"  size={size} variant={variant} href={appleHref}  label={`Download ${label} on the App Store`} />
      <AppStoreBadge store="google" size={size} variant={variant} href={googleHref} label={`Get ${label} on Google Play`} />
    </div>
  );
}

// ---- Web app login button — for clinicians + admins on desktop ----
function WebAppLoginButton({ variant = "primary", size = "md", label = "Sign in to mCuris", href = null, subdomain = null }) {
  const heights = { sm: 38, md: 48, lg: 56 };
  const fontSize = { sm: 13, md: 14, lg: 15 }[size] || 14;
  const h = heights[size] || heights.md;

  const styles = variant === "primary" ? {
    background: "var(--brand-deep-blue)", color: "#fff", border: 0,
  } : variant === "ghost" ? {
    background: "transparent", color: "#fff",
    border: "1px solid rgba(255,255,255,0.20)",
  } : {
    background: "#fff", color: "var(--brand-deep-blue)",
    border: "1px solid var(--border-default)",
  };

  const resolved = href || APP_LINKS.webapp;
  const displayUrl = resolved.replace(/^https?:\/\//, "");

  return (
    <a
      href={resolved}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        height: h, padding: `0 ${h * 0.32}px`,
        borderRadius: h * 0.18,
        textDecoration: "none", fontFamily: "var(--font-sans)",
        fontSize, fontWeight: 700,
        transition: "transform 140ms var(--ease-standard), box-shadow 140ms var(--ease-standard), background 140ms",
        boxSizing: "border-box",
        ...styles,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span style={{
        width: h * 0.55, height: h * 0.55, borderRadius: h * 0.13,
        background: variant === "primary" ? "rgba(255,255,255,0.16)" : "var(--bg-app)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <LpIcon name="monitor" size={h * 0.32} color="currentColor" />
      </span>
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <span style={{ fontSize: fontSize - 3, fontWeight: 500, opacity: 0.7 }}>{displayUrl}</span>
        <span style={{ fontSize, fontWeight: 700, marginTop: 2 }}>{label}</span>
      </span>
    </a>
  );
}

Object.assign(window, { AppStoreBadge, AppStoreBadges, WebAppLoginButton, APP_LINKS });
