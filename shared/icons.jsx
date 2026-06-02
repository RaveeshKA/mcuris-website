// Stroke icons — Lucide-style at 1.75 stroke. Extends the base set
// with the icons we need for the marketing site.

const LP_ICONS = {
  // arrows & nav
  arrowRight:    <><path d="M5 12h14M13 5l7 7-7 7"/></>,
  arrowUpRight:  <><path d="M7 17 17 7M9 7h8v8"/></>,
  arrowLeft:     <><path d="M19 12H5M11 19l-7-7 7-7"/></>,
  chevronDown:   <><path d="m6 9 6 6 6-6"/></>,
  chevronRight:  <><path d="m9 6 6 6-6 6"/></>,
  external:      <><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></>,
  menu:          <><path d="M3 6h18M3 12h18M3 18h18"/></>,
  close:         <><path d="M18 6 6 18M6 6l12 12"/></>,

  // status
  check:         <><path d="M20 6 9 17l-5-5"/></>,
  checkCircle:   <><circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/></>,
  plus:          <><path d="M12 5v14M5 12h14"/></>,
  minus:         <><path d="M5 12h14"/></>,
  info:          <><circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/></>,
  alert:         <><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></>,

  // brand / clinical
  shield:        <><path d="M12 3 4 6v6c0 5 4 8.5 8 9 4-.5 8-4 8-9V6z"/></>,
  shieldCheck:   <><path d="M12 3 4 6v6c0 5 4 8.5 8 9 4-.5 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/></>,
  lock:          <><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>,
  spark:         <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></>,
  zap:           <><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></>,
  heart:         <><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/></>,
  heartPulse:    <><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/><path d="M3.22 12H9.5l1-2 2 5 1-3 1.5 1.5h5.27"/></>,

  // clinical/UI
  chart:         <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>,
  chartLine:     <><path d="M3 3v18h18"/><path d="m7 14 4-4 4 4 5-7"/></>,
  pill:          <><rect x="3" y="9" width="18" height="6" rx="3"/><path d="M12 9v6"/></>,
  capsule:       <><path d="M14 4 4 14a3.5 3.5 0 1 0 5 5L19 9a3.5 3.5 0 0 0-5-5z"/><path d="m14 4 5 5"/></>,
  flask:         <><path d="M9 3h6M10 3v7l-5 8a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-8V3"/></>,
  testTube:      <><path d="M14 2v12a3 3 0 1 1-6 0V2"/><path d="M7 2h8"/><path d="M8 14h6"/></>,
  microscope:    <><path d="M6 18h8M3 22h18M14 22V18M9 13l3 3L22 6l-3-3z"/></>,
  stethoscope:   <><path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 17v-2a4 4 0 0 1 8 0v2a3 3 0 1 1-3-3"/></>,
  hospital:      <><path d="M3 22V8l9-5 9 5v14"/><path d="M3 22h18M12 11v4M10 13h4M8 22V12M16 22V12"/></>,
  bed:           <><path d="M2 17v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5M2 17h20M2 17v3M22 17v3"/><circle cx="7" cy="13" r="2"/></>,
  bedDouble:     <><path d="M2 19v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4"/><path d="M2 19h20M2 19v2M22 19v2M6 13V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/></>,
  droplet:       <><path d="M12 2.5s7 7.5 7 12.5a7 7 0 1 1-14 0c0-5 7-12.5 7-12.5z"/></>,
  dropletFill:   <><path d="M12 2.5s7 7.5 7 12.5a7 7 0 1 1-14 0c0-5 7-12.5 7-12.5z"/><path d="M12 7s4 4.5 4 8a4 4 0 1 1-8 0c0-3.5 4-8 4-8z" fill="currentColor" stroke="none"/></>,
  bloodBag:      <><path d="M9 3h6M10 3v4a2 2 0 0 1-.6 1.4l-3.6 3.6A2 2 0 0 0 5 13.4V19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5.6a2 2 0 0 0-.6-1.4l-3.6-3.6A2 2 0 0 1 14 7V3"/><path d="M9 16h6"/></>,
  ambulance:     <><path d="M10 17h4M3 17h2l2-5h7l3 5h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M11 8h2M12 7v2"/></>,
  truck:         <><path d="M1 17V6a1 1 0 0 1 1-1h11v12H1zM13 9h4l3 3v5h-7"/><circle cx="6" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></>,
  route:         <><circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M6 16V8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4"/></>,

  // people
  userHeart:     <><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M19 9a2.5 2.5 0 0 0-3 .8 2.5 2.5 0 0 0-3-.8c-1.4 1-1.4 3 0 4l3 3 3-3c1.4-1 1.4-3 0-4z"/></>,
  user:          <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
  users:         <><circle cx="9" cy="8" r="4"/><path d="M3 21a6 6 0 0 1 12 0"/><circle cx="17" cy="6" r="3"/><path d="M21 14a4 4 0 0 0-4-4"/></>,

  // io
  send:          <><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></>,
  inbox:         <><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></>,
  search:        <><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></>,
  bell:          <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></>,
  phone:         <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></>,
  mail:          <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></>,
  mapPin:        <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,

  // misc
  link:          <><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></>,
  layers:        <><path d="m12 2 10 6-10 6L2 8z"/><path d="m2 14 10 6 10-6"/></>,
  globe:         <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
  api:           <><path d="M4 7h4l2 3-2 3H4M20 7h-4l-2 3 2 3h4M10 10h4M10 13h4"/></>,
  database:      <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></>,
  clock:         <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  calendar:      <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></>,
  fileText:      <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6M9 9h2"/></>,
  clipboard:     <><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></>,
  workflow:      <><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M6 9v3a2 2 0 0 0 2 2h7"/><path d="M15 18h-3a2 2 0 0 1-2-2v-3"/></>,
  refresh:       <><path d="M3 12a9 9 0 0 1 15.5-6.5L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.5L3 16"/><path d="M3 21v-5h5"/></>,
  building:      <><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/></>,
  navigation:    <><path d="m3 11 19-9-9 19-2-8z"/></>,
  steeringWheel: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M3.5 12h7M13.5 12h7M12 4v6M12 14v6"/></>,
  package:       <><path d="m12 3 9 5v8l-9 5-9-5V8z"/><path d="m3 8 9 5 9-5M12 13v10"/></>,
  syringe:       <><path d="m18 2 4 4M15 5l4 4M13 7l8 8M10 10l4 4M9 11l-3 3 3 3 3-3M5 14l-3 3"/></>,
  monitor:       <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>,
  video:         <><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m22 8-6 4 6 4z"/></>,
  videoChat:     <><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m22 8-6 4 6 4z"/><circle cx="9" cy="11" r="2.4"/><path d="M5.5 16a3.5 3.5 0 0 1 7 0"/></>,
  scan:          <><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M3 12h18"/></>,
  qrCode:        <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM21 14v3M14 21h3M17 17h4v4"/></>,
  shoppingBag:   <><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 1 1-8 0"/></>,
  handHeart:     <><path d="M11 14a2 2 0 1 1 4 0c0 1.4-2 3-2 3s-2-1.6-2-3z"/><path d="M22 13a2 2 0 0 0-3.5-1.3L13 17.5l-1.5-1.5a2 2 0 1 0-2.8 2.8L13 23l8.5-8.5A2 2 0 0 0 22 13z"/><path d="M2 8c.5-1.5 1.6-3 4-3 1.8 0 3 1 4 2 1-1 2.2-2 4-2 .8 0 1.5.2 2 .5"/></>,
  phoneMobile:   <><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M12 18h.01"/></>,
  cog:           <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.65 1.65 0 0 0-1.8-.3 1.65 1.65 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.65 1.65 0 0 0-1-1.5 1.65 1.65 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.65 1.65 0 0 0 .3-1.8 1.65 1.65 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.65 1.65 0 0 0 1.5-1 1.65 1.65 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.65 1.65 0 0 0 1.8.3h0a1.65 1.65 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.65 1.65 0 0 0 1 1.5h0a1.65 1.65 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.65 1.65 0 0 0-.3 1.8v0a1.65 1.65 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.65 1.65 0 0 0-1.5 1z"/></>,
  star:          <><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></>,
  quote:         <><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2H4c-1.25 0-2 .75-2 2v7c0 1.25.75 2 2 2h2c1 0 1 0 1 1 0 .9-2 4-4 4z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2h-4c-1.25 0-2 .75-2 2v7c0 1.25.75 2 2 2h2c1 0 1 0 1 1 0 .9-2 4-4 4z"/></>,
  award:         <><circle cx="12" cy="8" r="6"/><path d="m9 13.4-1.5 8.6L12 19l4.5 3-1.5-8.6"/></>,
  briefcase:     <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
  wifi:          <><path d="M5 12.55a11 11 0 0 1 14 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><path d="M12 20h.01"/></>,
  play:          <><polygon points="6,4 20,12 6,20"/></>,
  download:      <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></>,
};

function LpIcon({ name, size = 18, color = "currentColor", strokeWidth = 1.75 }) {
  const content = LP_ICONS[name];
  if (!content) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
         style={{ flex: "0 0 auto" }}>
      {content}
    </svg>
  );
}
window.LpIcon = LpIcon;
