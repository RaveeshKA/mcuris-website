// Site-wide product registry — keeps naming, icons, and copy in one place.
// Used by the nav mega-menu, the products page, product detail pages, and footer.
//
// `apps` field, per product:
//   - apple  / google : native app store URLs (omit if no native app)
//   - web              : web app URL (omit if no separate web surface)
//   - hostedIn         : products this surface lives *inside* of (used for
//                        Telemedicine, Blood Bank patient-side — they don't
//                        ship as separate apps, they're features of others)

const PRODUCTS = [
  {
    id: "consult",
    name: "mCuris Consult",
    short: "For doctors",
    audience: "Clinicians, nurses, allied health",
    href: "product-consult.html",
    icon: "stethoscope",
    accent: "deep-blue",
    one_liner: "The clinical workspace.",
    blurb: "Charts, orders, notes, and decision support — built around the patient, not the billing code.",
    features: [
      "Orders & e-prescribing",
      "Smart chart summary",
      "Inline decision support",
      "Voice-to-note dictation",
    ],
    apps: {
      apple:  "https://apps.apple.com/app/mcuris-consult",
      google: "https://play.google.com/store/apps/details?id=health.mcuris.consult",
      web:    "https://app.mcuris.health/consult",
    },
  },
  {
    id: "mycare",
    name: "mCuris MyCare",
    short: "For patients",
    audience: "Patients & caregivers",
    href: "product-mycare.html",
    icon: "userHeart",
    accent: "teal",
    one_liner: "The patient mobile app.",
    blurb: "Find any hospital, doctor, lab, or pharmacy in the network. Book visits, order tests, buy medicines, call an ambulance, manage donations.",
    features: [
      "Find any hospital, doctor, or specialty",
      "Order tests · scan & send to any lab",
      "Buy medicines · scan & send prescriptions",
      "Call an ambulance from the app",
      "Find blood group · volunteer to donate",
    ],
    apps: {
      apple:  "https://apps.apple.com/app/mcuris-mycare",
      google: "https://play.google.com/store/apps/details?id=health.mcuris.mycare",
      web:    "https://app.mcuris.health/mycare",
    },
  },
  {
    id: "telemedicine",
    name: "mCuris Telemedicine",
    short: "For virtual visits",
    audience: "Patients, doctors, remote specialists",
    href: "product-telemedicine.html",
    icon: "videoChat",
    accent: "teal",
    one_liner: "Video visits — built into MyCare and Consult.",
    blurb: "Telemedicine isn't a separate app. Patients tap to join from MyCare; clinicians join from Consult — with vitals, orders, and the full chart in-call.",
    features: [
      "One-tap join from MyCare or Consult",
      "Real-time vitals via wearables",
      "In-call e-prescribing & lab orders",
      "Recordings stored in the chart",
    ],
    apps: {
      // No native apps of its own — runs inside the host apps below.
      hostedIn: ["mycare", "consult"],
      web: "https://app.mcuris.health/visit",
    },
  },
  {
    id: "lab",
    name: "mCuris Lab",
    short: "For labs",
    audience: "Lab technicians, ordering clinicians",
    href: "product-lab.html",
    icon: "testTube",
    accent: "deep-blue",
    one_liner: "Order in, results out.",
    blurb: "Specimen tracking, results delivery, and reflex orders — with no portal toggling.",
    features: [
      "Barcode specimen tracking",
      "Reflex ordering",
      "Auto-release when stable",
      "Critical result paging",
    ],
    apps: {
      apple:  "https://apps.apple.com/app/mcuris-lab",
      google: "https://play.google.com/store/apps/details?id=health.mcuris.lab",
      web:    "https://app.mcuris.health/lab",
    },
  },
  {
    id: "pharmacy",
    name: "mCuris Pharmacy",
    short: "For pharmacy",
    audience: "Pharmacists & techs",
    href: "product-pharmacy.html",
    icon: "capsule",
    accent: "teal",
    one_liner: "Reconcile, dispense, deliver.",
    blurb: "Medication reconciliation that catches interactions before the patient gets to the bedside.",
    features: [
      "Real-time interaction checks",
      "Single-screen reconciliation",
      "Inventory linkage",
      "Discharge-meds workflow",
    ],
    apps: {
      apple:  "https://apps.apple.com/app/mcuris-pharmacy",
      google: "https://play.google.com/store/apps/details?id=health.mcuris.pharmacy",
      web:    "https://app.mcuris.health/pharmacy",
    },
  },
  {
    id: "bloodbank",
    name: "mCuris Blood Bank",
    short: "For transfusion services",
    audience: "Blood bank techs, transfusion services",
    href: "product-bloodbank.html",
    icon: "droplet",
    accent: "deep-blue",
    one_liner: "Type, cross-match, release — without the paper trail.",
    blurb: "Real-time inventory of every blood product on the shelf. Cross-match orders flow in from Consult; release is tracked unit by unit.",
    features: [
      "Live blood-product inventory",
      "Type & cross-match workflow",
      "Critical / emergency release",
      "Transfusion chain of custody",
    ],
    apps: {
      // Web-only workbench. Patients access blood-donation features via MyCare.
      web: "https://app.mcuris.health/bloodbank",
      hostedIn: ["mycare"],
    },
  },
  {
    id: "drive",
    name: "mCuris Drive",
    short: "For ambulance crews",
    audience: "EMTs, paramedics, dispatch",
    href: "product-drive.html",
    icon: "ambulance",
    accent: "teal",
    one_liner: "Ambulance — on the way.",
    blurb: "Live routing, pre-arrival patient brief, and en-route vitals — so the receiving ED sees the patient before the gurney rolls in. Patients can request non-emergency rides directly from MyCare.",
    features: [
      "Live route & ETA",
      "Pre-arrival patient brief",
      "En-route vitals to receiving ED",
      "Patient-initiated rides from MyCare",
    ],
    apps: {
      apple:  "https://apps.apple.com/app/mcuris-drive",
      google: "https://play.google.com/store/apps/details?id=health.mcuris.drive",
      web:    "https://app.mcuris.health/drive",
    },
  },
];

window.PRODUCTS = PRODUCTS;
