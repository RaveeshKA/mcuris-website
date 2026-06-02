// A real-looking, miniature Consult chart used in the hero — not a screenshot.
// Designed to read at ~640px wide.
function ChartPreview() {
  return (
    <div style={{
      width: "100%", maxWidth: 720, background: "#fff",
      borderRadius: 14, overflow: "hidden",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-xl)",
      fontFamily: "var(--font-sans)",
      transformOrigin: "top right",
    }}>
      {/* Window chrome */}
      <div style={{
        height: 32, background: "var(--bg-surface-sunken)",
        borderBottom: "1px solid var(--border-subtle)",
        display: "flex", alignItems: "center", padding: "0 12px", gap: 8,
      }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E0606A" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E8B842" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#5BB76C" }} />
        <div style={{
          marginLeft: 10, fontSize: 11, color: "var(--fg-3)",
          fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: 6,
        }}>
          <LpIcon name="lock" size={10} />
          consult.mcuris.health/chart/4071332
        </div>
      </div>

      {/* App top bar */}
      <div style={{
        display: "flex", alignItems: "center", gap: 12,
        padding: "10px 16px", borderBottom: "1px solid var(--border-subtle)",
        background: "#fff",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img src={(window.__resources && window.__resources.mark) || "assets/mcuris-mark.png"} alt="" style={{ width: 22, height: 22 }} />
          <span style={{ fontSize: 13, fontWeight: 800, color: "var(--brand-deep-blue)" }}>Consult</span>
        </div>
        <div style={{
          marginLeft: 12, flex: 1, maxWidth: 260,
          display: "flex", alignItems: "center", gap: 6,
          background: "var(--bg-surface-sunken)", borderRadius: 6,
          padding: "5px 10px", fontSize: 11, color: "var(--fg-3)",
        }}>
          <LpIcon name="search" size={12} />
          <span style={{ fontFamily: "var(--font-mono)" }}>Jump to chart, order, note…</span>
          <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-4)" }}>⌘K</span>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10, color: "var(--fg-3)" }}>
          <LpIcon name="bell" size={14} />
          <div style={{
            width: 24, height: 24, borderRadius: "50%",
            background: "var(--brand-deep-blue-100)", color: "var(--brand-deep-blue-700)",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontSize: 10, fontWeight: 700,
          }}>JR</div>
        </div>
      </div>

      {/* Patient banner */}
      <div style={{
        padding: "14px 16px",
        background: "linear-gradient(180deg, #FBFCFD 0%, #FFFFFF 100%)",
        borderBottom: "1px solid var(--border-subtle)",
        display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap",
      }}>
        <div style={{
          width: 38, height: 38, borderRadius: "50%",
          background: "var(--brand-deep-blue-100)", color: "var(--brand-deep-blue-700)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          fontWeight: 700, fontSize: 13,
        }}>MW</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.01em", color: "var(--fg-1)" }}>Margaret Walsh</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)" }}>67 F · MRN 40-71-332</span>
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
            <LpPill tone="warn">CHF</LpPill>
            <LpPill tone="warn">CKD st 3</LpPill>
            <LpPill tone="crit" icon="zap">Penicillin</LpPill>
            <LpPill tone="neutral">Code: Full</LpPill>
          </div>
        </div>
        <div style={{
          marginLeft: "auto", display: "flex", gap: 8, alignItems: "center",
        }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "5px 10px", borderRadius: 999,
            background: "var(--brand-teal-50)", color: "var(--brand-teal-800)",
            fontSize: 11, fontWeight: 700,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--brand-teal)" }} />
            Admitted · Day 3
          </span>
        </div>
      </div>

      {/* Body grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", background: "#fff" }}>

        {/* Left: vitals + problem list */}
        <div style={{ padding: 16, borderRight: "1px solid var(--border-subtle)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "var(--fg-3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Vitals · last 4h</span>
            <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-4)" }}>14:42</span>
          </div>

          {/* Vitals row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 16 }}>
            {[
              { l: "HR", v: "92", u: "bpm", flag: "ok" },
              { l: "BP", v: "148/86", u: "mmHg", flag: "warn" },
              { l: "SpO₂", v: "94", u: "%", flag: "warn" },
              { l: "Temp", v: "37.1", u: "°C", flag: "ok" },
            ].map(v => (
              <div key={v.l} style={{
                padding: "10px 8px", borderRadius: 8,
                background: "var(--bg-surface-sunken)",
              }}>
                <div style={{ fontSize: 10, color: "var(--fg-3)", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>{v.l}</div>
                <div style={{
                  fontFamily: "var(--font-mono)", fontWeight: 600,
                  fontSize: 16, color: v.flag === "warn" ? "var(--status-warn-fg)" : "var(--fg-1)",
                  lineHeight: 1.1, marginTop: 2,
                }}>{v.v}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-4)" }}>{v.u}</div>
              </div>
            ))}
          </div>

          {/* Vitals trendline (mini) */}
          <div style={{
            marginBottom: 18, padding: 10, borderRadius: 8,
            border: "1px solid var(--border-subtle)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: "var(--fg-3)", letterSpacing: "0.04em", textTransform: "uppercase" }}>BP trend · 24h</span>
              <span style={{ marginLeft: "auto", fontSize: 10, color: "var(--fg-4)", fontFamily: "var(--font-mono)" }}>140↑ 80↓</span>
            </div>
            <svg viewBox="0 0 280 56" width="100%" height="48">
              <defs>
                <linearGradient id="bpGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#1E4E8F" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#1E4E8F" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,32 L20,28 L40,30 L60,22 L80,20 L100,26 L120,18 L140,24 L160,16 L180,14 L200,20 L220,12 L240,18 L260,10 L280,14 L280,56 L0,56 Z"
                    fill="url(#bpGrad)" />
              <path d="M0,32 L20,28 L40,30 L60,22 L80,20 L100,26 L120,18 L140,24 L160,16 L180,14 L200,20 L220,12 L240,18 L260,10 L280,14"
                    fill="none" stroke="#1E4E8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="280" cy="14" r="3" fill="#1E4E8F" />
            </svg>
          </div>

          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--fg-3)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Problem list</div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              { name: "Acute on chronic systolic heart failure", code: "I50.23", since: "since 2019" },
              { name: "Hypertension, essential", code: "I10", since: "since 2003" },
              { name: "CKD, stage 3a", code: "N18.31", since: "since 2021" },
              { name: "Type 2 diabetes mellitus", code: "E11.9", since: "since 2014" },
            ].map(p => (
              <li key={p.code} style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "7px 10px", borderRadius: 6,
                background: "#fff", border: "1px solid var(--border-subtle)",
              }}>
                <span style={{ width: 4, height: 14, background: "var(--brand-deep-blue)", borderRadius: 2 }} />
                <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25, flex: 1, minWidth: 0 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "var(--fg-1)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-3)" }}>{p.code} · {p.since}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: order + AI summary */}
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>

          {/* AI summary card */}
          <div style={{
            padding: 14, borderRadius: 10,
            background: "linear-gradient(135deg, #EEF3FA 0%, #E6FAF8 100%)",
            border: "1px solid var(--brand-teal-100)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <LpIcon name="spark" size={14} color="var(--brand-deep-blue)" />
              <span style={{ fontSize: 11, fontWeight: 700, color: "var(--brand-deep-blue-700)", letterSpacing: "0.04em", textTransform: "uppercase" }}>Chart summary</span>
              <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-3)" }}>2.1s</span>
            </div>
            <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.55, color: "var(--neutral-700)" }}>
              <b style={{ color: "var(--fg-1)" }}>Day 3 of CHF exacerbation.</b> Net negative 2.4L since admission, BNP trending down (1840 → 920). K+ rose to 6.2 on overnight labs — hold lisinopril, recheck in 4h.
            </p>
            <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 8px", borderRadius: 999, background: "rgba(255,255,255,0.7)", fontSize: 10, color: "var(--fg-2)", fontFamily: "var(--font-mono)" }}>
                ↑ BNP 920
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 8px", borderRadius: 999, background: "rgba(255,255,255,0.7)", fontSize: 10, color: "var(--status-warn-fg)", fontFamily: "var(--font-mono)" }}>
                K⁺ 6.2 mEq/L
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 8px", borderRadius: 999, background: "rgba(255,255,255,0.7)", fontSize: 10, color: "var(--fg-2)", fontFamily: "var(--font-mono)" }}>
                I/O −2.4L
              </span>
            </div>
          </div>

          {/* Order entry sliver */}
          <div style={{
            border: "1px solid var(--border-subtle)", borderRadius: 10, overflow: "hidden",
          }}>
            <div style={{
              padding: "9px 12px", display: "flex", alignItems: "center", gap: 8,
              borderBottom: "1px solid var(--border-subtle)",
              background: "var(--bg-surface-sunken)",
            }}>
              <LpIcon name="plus" size={13} color="var(--brand-deep-blue)" />
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--fg-1)" }}>New order</span>
              <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-3)" }}>3 pending sig</span>
            </div>
            <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "8px 10px", borderRadius: 6,
                border: "1px solid var(--brand-deep-blue-200)",
                background: "var(--brand-deep-blue-50)",
              }}>
                <LpIcon name="pill" size={14} color="var(--brand-deep-blue)" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--fg-1)" }}>Furosemide 40 mg IV</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--fg-3)" }}>BID · start now · 48h</div>
                </div>
                <LpPill tone="teal">ready</LpPill>
              </div>
              <div style={{
                padding: "8px 10px", borderRadius: 6,
                background: "var(--status-warn-bg)",
                display: "flex", alignItems: "flex-start", gap: 8,
                fontSize: 11.5, color: "var(--status-warn-fg)", lineHeight: 1.45,
              }}>
                <LpIcon name="zap" size={13} color="var(--status-warn-fg)" />
                <span>
                  <b>Interaction · moderate.</b> Concurrent lisinopril (held 06:00) — re-evaluate after K⁺ recheck.
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 6, marginTop: 2 }}>
                <button style={{
                  padding: "6px 12px", borderRadius: 6, border: "1px solid var(--border-default)",
                  background: "#fff", color: "var(--fg-2)", fontSize: 11.5, fontWeight: 600, cursor: "pointer",
                }}>Cancel</button>
                <button style={{
                  padding: "6px 12px", borderRadius: 6, border: 0,
                  background: "var(--brand-deep-blue)", color: "#fff", fontSize: 11.5, fontWeight: 600, cursor: "pointer",
                  display: "inline-flex", alignItems: "center", gap: 6,
                }}>Sign & send <LpIcon name="send" size={12} /></button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

window.ChartPreview = ChartPreview;
