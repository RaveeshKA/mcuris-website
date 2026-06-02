// MyCare phone mockup — a real-looking patient-portal home screen.
// Designed to read at ~290px wide on the landing hero.

function MyCarePhone({ width = 290 }) {
  return (
    <div style={{
      width, aspectRatio: "9 / 19.5",
      background: "#1F2630",
      borderRadius: 36,
      padding: 8,
      boxShadow: "var(--shadow-xl), 0 0 0 2px rgba(15,38,67,0.04)",
      fontFamily: "var(--font-sans)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Inner screen */}
      <div style={{
        width: "100%", height: "100%",
        borderRadius: 28,
        background: "#fff",
        overflow: "hidden",
        position: "relative",
        display: "flex", flexDirection: "column",
      }}>
        {/* Notch */}
        <div style={{
          position: "absolute", top: 6, left: "50%", transform: "translateX(-50%)",
          width: 78, height: 18, borderRadius: 999, background: "#1F2630", zIndex: 10,
        }} />

        {/* Status bar */}
        <div style={{
          height: 32, padding: "10px 18px 0", fontSize: 10.5, fontWeight: 700,
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          color: "var(--fg-1)", zIndex: 5,
        }}>
          <span style={{ fontFeatureSettings: '"tnum"' }}>9:41</span>
          <span style={{ display: "inline-flex", gap: 4, alignItems: "center" }}>
            <LpIcon name="wifi" size={10} />
            <span style={{ width: 14, height: 7, border: "1px solid currentColor", borderRadius: 2, padding: 1, display: "inline-flex" }}>
              <span style={{ flex: 1, background: "currentColor", borderRadius: 1 }} />
            </span>
          </span>
        </div>

        {/* App header */}
        <div style={{ padding: "12px 18px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src={(window.__resources && window.__resources.mark) || "assets/mcuris-mark.png"} alt="" style={{ width: 18, height: 18 }} />
            <span style={{ fontSize: 12, fontWeight: 800, color: "var(--brand-deep-blue)" }}>MyCare</span>
            <span style={{ marginLeft: "auto", width: 28, height: 28, borderRadius: "50%", background: "var(--brand-teal-100)", color: "var(--brand-teal-800)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10.5, fontWeight: 700 }}>RJ</span>
          </div>
          <div style={{ marginTop: 14, fontSize: 20, fontWeight: 800, letterSpacing: "-0.01em", lineHeight: 1.15 }}>
            Hi Rachel —
          </div>
          <div style={{ fontSize: 12.5, color: "var(--fg-3)", marginTop: 2 }}>
            You have 2 new results & 1 message.
          </div>

          {/* Find care search */}
          <div style={{
            marginTop: 12,
            display: "flex", alignItems: "center", gap: 8,
            padding: "9px 12px", borderRadius: 999,
            background: "var(--bg-surface-sunken)",
            border: "1px solid var(--border-subtle)",
          }}>
            <LpIcon name="search" size={13} color="var(--fg-3)" />
            <span style={{ fontSize: 11.5, color: "var(--fg-3)", flex: 1 }}>Find a hospital, doctor, or specialty…</span>
          </div>

          {/* Quick actions row — patient-facing ecosystem reach */}
          <div style={{
            marginTop: 12,
            display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 5,
          }}>
            {[
              { icon: "videoChat", label: "Visit",  tint: "var(--brand-teal-50)",     fg: "var(--brand-teal-800)" },
              { icon: "flask",     label: "Tests",  tint: "var(--brand-deep-blue-50)", fg: "var(--brand-deep-blue-700)" },
              { icon: "capsule",   label: "Meds",   tint: "var(--brand-teal-50)",     fg: "var(--brand-teal-800)" },
              { icon: "ambulance", label: "Ride",   tint: "var(--brand-deep-blue-50)", fg: "var(--brand-deep-blue-700)" },
              { icon: "droplet",   label: "Blood",  tint: "var(--status-critical-bg)", fg: "var(--status-critical-fg)" },
            ].map(a => (
              <div key={a.label} style={{
                padding: "8px 2px 6px", borderRadius: 8,
                background: a.tint, textAlign: "center",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
              }}>
                <LpIcon name={a.icon} size={14} color={a.fg} />
                <span style={{ fontSize: 8.5, fontWeight: 700, color: a.fg }}>{a.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Next appointment card */}
        <div style={{
          margin: "12px 14px 0", padding: 11, borderRadius: 12,
          background: "linear-gradient(135deg, #1E4E8F 0%, #2A6FA8 60%, #2EC4B6 130%)",
          color: "#fff", boxShadow: "var(--shadow-sm)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <LpIcon name="calendar" size={12} color="rgba(255,255,255,0.85)" />
            <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>Next visit</span>
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, marginTop: 6 }}>Dr. Patel · Cardiology</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.85)", marginTop: 2 }}>Thu, 10:30 AM · Telehealth</div>
          <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
            <span style={{ padding: "5px 10px", borderRadius: 999, background: "rgba(255,255,255,0.18)", fontSize: 10, fontWeight: 700 }}>Join visit</span>
            <span style={{ padding: "5px 10px", borderRadius: 999, background: "rgba(255,255,255,0.08)", fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>Reschedule</span>
          </div>
        </div>

        {/* Recent results list */}
        <div style={{ padding: "12px 14px 0" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-3)" }}>Recent results</span>
            <span style={{ marginLeft: "auto", fontSize: 10, color: "var(--brand-deep-blue)", fontWeight: 700 }}>View all</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {[
              { name: "Cholesterol panel", note: "Slightly elevated", status: "warn" },
              { name: "Basic metabolic", note: "All values normal", status: "ok" },
            ].map(r => (
              <div key={r.name} style={{
                padding: "9px 10px", borderRadius: 10,
                background: "#fff", border: "1px solid var(--border-subtle)",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: r.status === "warn" ? "var(--status-warn-bg)" : "var(--brand-teal-50)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  color: r.status === "warn" ? "var(--status-warn-fg)" : "var(--brand-teal-800)",
                }}>
                  <LpIcon name="flask" size={13} />
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: "var(--fg-1)" }}>{r.name}</div>
                  <div style={{ fontSize: 10, color: "var(--fg-3)" }}>{r.note}</div>
                </div>
                <LpIcon name="chevronRight" size={12} color="var(--fg-4)" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <div style={{
          marginTop: "auto",
          padding: "10px 14px 22px",
          borderTop: "1px solid var(--border-subtle)",
          background: "var(--bg-surface-2)",
          display: "flex", justifyContent: "space-between",
        }}>
          {[
            { icon: "heartPulse", label: "Care", active: true },
            { icon: "calendar", label: "Visits" },
            { icon: "inbox", label: "Inbox" },
            { icon: "user", label: "Me" },
          ].map(n => (
            <div key={n.label} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
              color: n.active ? "var(--brand-deep-blue)" : "var(--fg-3)",
            }}>
              <LpIcon name={n.icon} size={16} />
              <span style={{ fontSize: 9, fontWeight: 700 }}>{n.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.MyCarePhone = MyCarePhone;
