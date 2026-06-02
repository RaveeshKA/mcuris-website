// Interactive ecosystem diagram — circuit-trace network connecting
// all six mCuris apps to a central M+ hub.
//
// theme="light" (default) → on white/gradient-soft backgrounds
// theme="dark"            → on deep-blue-900 backgrounds (hero spotlight card)
//
// Hover/focus a node → that node + its trace highlight, others fade.
// Click → jump to the product detail page.

const { useState: useEcoS, useEffect: useEcoE } = React;

// Layout in a circle around the center — 7 nodes evenly spaced (heptagon).
//   patient/MyCare  (top)
//   doctor/Consult  (top-right)
//   telemedicine    (right)
//   lab             (bottom-right)
//   pharmacy        (bottom-left)
//   bloodbank       (left)
//   drive/ambulance (top-left)
//
// Coordinates are in a 600×520 viewBox; center at (300, 260), radius ~210.
const ECO_NODES = [
  { id: "mycare",       label: "Patient",      sub: "MyCare",       icon: "userHeart",   cx: 300, cy: 50,  side: "top",    color: "teal" },
  { id: "consult",      label: "Doctor",       sub: "Consult",      icon: "stethoscope", cx: 464, cy: 129, side: "right",  color: "blue" },
  { id: "telemedicine", label: "Telemedicine", sub: "Telemedicine", icon: "videoChat",   cx: 505, cy: 307, side: "right",  color: "teal" },
  { id: "lab",          label: "Lab",          sub: "Lab",          icon: "testTube",    cx: 391, cy: 449, side: "bottom", color: "blue" },
  { id: "pharmacy",     label: "Pharmacy",     sub: "Pharmacy",     icon: "capsule",     cx: 209, cy: 449, side: "bottom", color: "teal" },
  { id: "bloodbank",    label: "Blood Bank",   sub: "Blood Bank",   icon: "droplet",     cx: 95,  cy: 307, side: "left",   color: "blue" },
  { id: "drive",        label: "Ambulance",    sub: "Drive",        icon: "ambulance",   cx: 136, cy: 129, side: "left",   color: "teal" },
];
const CENTER = { x: 300, y: 260 };

function EcosystemDiagram({ size = 600, autoCycle = true, theme = "light" }) {
  const dark = theme === "dark";
  const [hover, setHover] = useEcoS(null);
  const [autoIdx, setAutoIdx] = useEcoS(0);

  // Auto-cycle highlight every 2.4s if nothing is hovered
  useEcoE(() => {
    if (!autoCycle) return;
    if (hover) return;
    const t = setInterval(() => setAutoIdx(i => (i + 1) % ECO_NODES.length), 2400);
    return () => clearInterval(t);
  }, [hover, autoCycle]);

  const activeId = hover || ECO_NODES[autoIdx].id;

  // Curve path from center to node — right-angled bends so traces feel circuit-like
  // even for non-axial nodes. We pick whichever bend reads cleaner per quadrant.
  const tracePath = (node) => {
    const { cx, cy } = node;
    const dx = cx - CENTER.x;
    const dy = cy - CENTER.y;
    // For axial nodes (purely top/bottom/left/right) keep a single L-bend.
    // For diagonal nodes, two bends — depart center horizontally, then vertical
    // halfway out, then horizontal again into the node.
    const horizontalFirst = Math.abs(dx) > Math.abs(dy);
    if (horizontalFirst) {
      const mx = CENTER.x + dx * 0.55;
      return `M ${CENTER.x} ${CENTER.y} L ${mx} ${CENTER.y} L ${mx} ${cy} L ${cx} ${cy}`;
    } else {
      const my = CENTER.y + dy * 0.55;
      return `M ${CENTER.x} ${CENTER.y} L ${CENTER.x} ${my} L ${cx} ${my} L ${cx} ${cy}`;
    }
  };

  // Theme tokens
  const t = dark ? {
    bgWash:        "#2EC4B6",      // teal halo behind hub
    bgWashOpacity: 0.18,
    hubOuter:      "url(#ecoHubDark)",
    hubOuterStroke:"rgba(46,196,182,0.55)",
    hubInner:      "url(#ecoHubInnerDark)",       // radial gradient that fades into the dark backdrop
    hubInnerStroke:"transparent",
    traceStroke:   "url(#ecoTraceDark)",
    traceOpacityIdle: 0.30,
    traceOpacityActive: 1.0,
    nodeHaloOpacityActive: 0.45,   // active glow halo around the circle
    nodeHaloOpacityIdle:   0.04,   // very subtle ambient glow
    nodeFill:      "rgba(255, 255, 255, 0.07)",   // frosted-glass — sits above the mid-blue card
    nodeStrokeIdle:"rgba(255, 255, 255, 0.20)",
    nodeIconIdle:  "rgba(255, 255, 255, 0.85)",
    nodeIconActive:"#FFFFFF",
    labelMain:     "#FFFFFF",
    labelMainIdle: "rgba(255,255,255,0.82)",
    labelSub:      "rgba(255,255,255,0.52)",
    activeRingGlow:"drop-shadow(0 0 14px rgba(46,196,182,0.65))",
    traceFilter:   "url(#ecoGlow)",
  } : {
    bgWash:        "#EEF3FA",
    bgWashOpacity: 0.50,
    hubOuter:      "url(#ecoHub)",
    hubOuterStroke:"#A6BFE0",
    hubInner:      "#fff",
    hubInnerStroke:"#DCE3EB",
    traceStroke:   "url(#ecoTrace)",
    traceOpacityIdle: 0.35,
    traceOpacityActive: 0.95,
    nodeHaloOpacityActive: 0.10,
    nodeHaloOpacityIdle:   0.04,
    nodeFill:      "#fff",
    nodeStrokeIdle:"#DCE3EB",
    nodeIconIdle:  null,           // use color
    nodeIconActive:null,
    labelMain:     "var(--fg-1)",
    labelMainIdle: "var(--fg-1)",
    labelSub:      "var(--fg-3)",
    activeRingGlow: "none",
    traceFilter:   "none",
  };

  return (
    <div style={{
      position: "relative",
      width: "100%", maxWidth: size,
      aspectRatio: "600/520",
      margin: "0 auto",
    }}>
      <svg viewBox="0 0 600 520" width="100%" height="100%" style={{ display: "block", overflow: "visible" }}>
        <defs>
          <linearGradient id="ecoTrace" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#1E4E8F" />
            <stop offset="100%" stopColor="#2EC4B6" />
          </linearGradient>
          <linearGradient id="ecoTraceDark" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#56D6C8" />
            <stop offset="100%" stopColor="#8AE5DB" />
          </linearGradient>
          <radialGradient id="ecoHub" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#EEF3FA" />
            <stop offset="100%" stopColor="#D5E1F1" />
          </radialGradient>
          <radialGradient id="ecoHubDark" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#2EC4B6" stopOpacity="0.55" />
            <stop offset="55%"  stopColor="#1E4E8F" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#0A1A2D" stopOpacity="0.95" />
          </radialGradient>
          <radialGradient id="ecoHubInnerDark" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#FFFFFF"  stopOpacity="0.95" />
            <stop offset="40%"  stopColor="#C2F2EC"  stopOpacity="0.55" />
            <stop offset="75%"  stopColor="#2EC4B6"  stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0A1A2D"  stopOpacity="0" />
          </radialGradient>
          <filter id="ecoSoft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="ecoGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="b"/>
            <feMerge>
              <feMergeNode in="b"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="ecoHubGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Background wash behind the hub */}
        <circle cx={CENTER.x} cy={CENTER.y} r={dark ? 150 : 120}
                fill={t.bgWash} opacity={t.bgWashOpacity}
                filter={dark ? "url(#ecoHubGlow)" : "url(#ecoSoft)"} />

        {/* Traces */}
        {ECO_NODES.map(node => {
          const isActive = node.id === activeId;
          return (
            <g key={`trace-${node.id}`} style={{ filter: isActive ? t.traceFilter : "none" }}>
              <path
                d={tracePath(node)}
                fill="none"
                stroke={t.traceStroke}
                strokeWidth={isActive ? 2.4 : 1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={isActive ? t.traceOpacityActive : t.traceOpacityIdle}
                style={{ transition: "all 380ms cubic-bezier(0.2, 0, 0, 1)" }}
              />
              {/* Pulse dot traveling on active trace */}
              {isActive && (
                <circle r={dark ? 4 : 3.5} fill={dark ? "#8AE5DB" : "#2EC4B6"}
                        style={{ filter: dark ? "drop-shadow(0 0 6px #2EC4B6)" : "none" }}>
                  <animateMotion dur="1.6s" repeatCount="indefinite" path={tracePath(node)} />
                </circle>
              )}
            </g>
          );
        })}

        {/* Hub — circular M+ frame. Dark mode collapses to a single radial
            gradient that fades into the backdrop; light mode keeps the
            classic two-ring well. */}
        <g style={{ filter: dark ? "drop-shadow(0 0 32px rgba(46,196,182,0.30))" : "none" }}>
          {dark ? (
            <>
              {/* Single soft halo that bleeds into the dark backdrop */}
              <circle cx={CENTER.x} cy={CENTER.y} r="118" fill="url(#ecoHubInnerDark)" />
              {/* Thin teal ring — purely visual frame, no fill */}
              <circle cx={CENTER.x} cy={CENTER.y} r="96" fill="none" stroke="rgba(46,196,182,0.45)" strokeWidth="1" />
            </>
          ) : (
            <>
              <circle cx={CENTER.x} cy={CENTER.y} r="98" fill={t.hubOuter} stroke={t.hubOuterStroke} strokeWidth="1" />
              <circle cx={CENTER.x} cy={CENTER.y} r="82" fill={t.hubInner} stroke={t.hubInnerStroke} strokeWidth="1" />
            </>
          )}
        </g>

        {/* Nodes */}
        {ECO_NODES.map(node => {
          const isActive = node.id === activeId;
          const color = node.color === "teal"
            ? "#2EC4B6"
            : (dark ? "#A6BFE0" : "#1E4E8F");   // brighter blue accent in dark mode
          return (
            <g
              key={node.id}
              transform={`translate(${node.cx}, ${node.cy})`}
              style={{ cursor: "pointer", transition: "transform 220ms", filter: isActive ? t.activeRingGlow : "none" }}
              onMouseEnter={() => setHover(node.id)}
              onMouseLeave={() => setHover(null)}
              onClick={() => { window.location.href = `product-${node.id}.html`; }}
            >
              {/* Halo */}
              <circle
                r={isActive ? 44 : 36}
                fill={color}
                opacity={isActive ? t.nodeHaloOpacityActive : t.nodeHaloOpacityIdle}
                style={{ transition: "all 280ms cubic-bezier(0.2, 0, 0, 1)" }}
              />
              <circle
                r="32"
                fill={t.nodeFill}
                stroke={isActive ? color : t.nodeStrokeIdle}
                strokeWidth={isActive ? 2 : 1}
                style={{ transition: "all 220ms" }}
              />
              {/* Icon */}
              <foreignObject x={-16} y={-16} width={32} height={32} style={{ pointerEvents: "none" }}>
                <div xmlns="http://www.w3.org/1999/xhtml" style={{
                  width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center",
                  color: dark ? (isActive ? t.nodeIconActive : t.nodeIconIdle) : color,
                  transition: "color 220ms",
                }}>
                  <LpIcon name={node.icon} size={22} strokeWidth={1.7} />
                </div>
              </foreignObject>

              {/* Label outside the node */}
              <g transform={
                node.side === "top"    ? "translate(0, -56)" :
                node.side === "bottom" ? "translate(0, 64)"  :
                node.side === "left"   ? "translate(-52, 5)" :
                                          "translate(52, 5)"
              }
                 style={{ textAnchor:
                   node.side === "left"   ? "end" :
                   node.side === "right"  ? "start" :
                   "middle"
                 }}>
                <text
                  fontFamily="Mulish, sans-serif"
                  fontSize="17"
                  fontWeight="700"
                  fill={isActive
                    ? (dark ? "#FFFFFF" : "var(--brand-deep-blue)")
                    : (dark ? t.labelMainIdle : "var(--fg-1)")
                  }
                  style={{ transition: "fill 220ms" }}
                >
                  {node.label}
                </text>
                <text
                  y="18"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="12"
                  fill={t.labelSub}
                  letterSpacing="0.04em"
                >
                  mCuris {node.sub}
                </text>
              </g>
            </g>
          );
        })}
      </svg>

      {/* Hub logo overlay — transparent mark, sized to fill the hub, with brand glow */}
      <div style={{
        position: "absolute",
        left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        filter: dark
          ? "drop-shadow(0 0 12px rgba(46,196,182,0.65)) drop-shadow(0 0 28px rgba(46,196,182,0.45)) drop-shadow(0 0 56px rgba(30,78,143,0.45)) brightness(1.08)"
          : "drop-shadow(0 0 14px rgba(46,196,182,0.45)) drop-shadow(0 0 32px rgba(30,78,143,0.20))",
        animation: "hubBreath 5.2s ease-in-out infinite",
      }}>
        <img
          src={(window.__resources && window.__resources.mark) || "assets/mcuris-mark.png"}
          alt=""
          style={{ width: 210, height: 210, display: "block" }}
        />
      </div>
      <style>{`
        @keyframes hubBreath {
          0%, 100% { filter: ${dark
            ? "drop-shadow(0 0 12px rgba(46,196,182,0.55)) drop-shadow(0 0 28px rgba(46,196,182,0.40)) drop-shadow(0 0 56px rgba(30,78,143,0.40)) brightness(1.08)"
            : "drop-shadow(0 0 12px rgba(46,196,182,0.35)) drop-shadow(0 0 28px rgba(30,78,143,0.15))"
          }; }
          50%      { filter: ${dark
            ? "drop-shadow(0 0 16px rgba(46,196,182,0.85)) drop-shadow(0 0 40px rgba(46,196,182,0.55)) drop-shadow(0 0 72px rgba(30,78,143,0.55)) brightness(1.10)"
            : "drop-shadow(0 0 18px rgba(46,196,182,0.55)) drop-shadow(0 0 40px rgba(30,78,143,0.25))"
          }; }
        }
      `}</style>
    </div>
  );
}

window.EcosystemDiagram = EcosystemDiagram;
