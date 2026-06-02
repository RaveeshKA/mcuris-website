// Extended product registry with detailed copy for product detail pages.
// Augments PRODUCTS with per-product workflow, FAQ, and headline content.
// Keep this file the single source of truth for product page content.

const PRODUCT_DETAILS = {
  consult: {
    tagline: "The clinical workspace, rebuilt around the chart.",
    description:
      "Consult is where the work happens. Orders, notes, decision support, and the AI summary that catches what a tired clinician shouldn't have to remember at 3 AM.",
    heroPreview: "consult",
    pillars: [
      { icon: "spark",       title: "Chart summary",       blurb: "An AI brief at the top of every chart. Day, trajectory, last-changed values, things to watch." },
      { icon: "pill",        title: "Smart orders",        blurb: "Interaction checks, allergy flags, and dose-by-weight built in. Bundles for common scenarios." },
      { icon: "fileText",    title: "Voice-to-note",       blurb: "Dictate while you examine. Notes are structured, searchable, and signed in one tap." },
      { icon: "shield",      title: "Decision support",    blurb: "Sepsis bundles, stroke protocols, anticoag dosing — inline, not in a separate window." },
    ],
    workflow: [
      { step: "Pre-arrival", body: "EMT brief from Drive lands in Consult before the patient does." },
      { step: "Bedside",     body: "Open the chart from your phone or tablet — pinned to the patient by NFC tap." },
      { step: "Plan",        body: "Order, note, and sign — all from one screen. AI flags interactions inline." },
      { step: "Hand-off",    body: "Discharge or transfer is one button. Pharmacy queues take-home meds; Blood Bank closes the transfusion record automatically." },
    ],
    faq: [
      { q: "Is Consult a full EMR replacement?",
        a: "It is. Consult is the chart of record, with notes, orders, results, problem list, meds, and audit log. It's certified for HIPAA from day one." },
      { q: "Does it run on phone / tablet / desktop?",
        a: "All three. The same chart, optimized per surface. Order entry on desktop, summary + sign on phone, rounding on tablet." },
      { q: "How does the AI summary work?",
        a: "It reads the chart in your tenant, never the public model. Summaries are deterministic — same inputs, same outputs — and every sentence is sourced back to the underlying note or value." },
    ],
  },

  mycare: {
    tagline: "The patient's command center for the entire mCuris ecosystem.",
    description:
      "MyCare connects the patient to every other surface in the network. Find any hospital, doctor, lab, or pharmacy. Order tests, buy medicines, scan prescriptions, manage donations — and read everything in plain language.",
    heroPreview: "mycare",
    pillars: [
      { icon: "search",      title: "Find care anywhere",         blurb: "Search any hospital, doctor, or specialty in the network. Filter by insurance, language, distance, and availability — book in one tap." },
      { icon: "videoChat",   title: "Virtual visits",             blurb: "Video consults with any doctor in the ecosystem. One-tap join — no separate app, no email link." },
      { icon: "flask",       title: "Order tests · any lab",      blurb: "Pick a lab, schedule a draw, or scan a paper requisition. Results land in MyCare in plain language with severity tagged." },
      { icon: "capsule",     title: "Buy medicines · any pharmacy", blurb: "Find the closest pharmacy with your medicine in stock. Scan a paper prescription and have it filled or delivered." },
      { icon: "ambulance",   title: "Call an ambulance",          blurb: "One-tap ambulance request with live location, chief complaint, and pre-arrival brief — sent straight to the receiving ED." },
      { icon: "droplet",     title: "Blood bank access",          blurb: "Find a rare blood group near you, or volunteer to donate. The blood bank sees compatible donors in real time." },
      { icon: "heart",       title: "Plain-language results",     blurb: "ALT 84 becomes 'Liver enzyme, slightly elevated. Your provider will follow up.' No naked numbers, no panic." },
      { icon: "users",       title: "Caregiver access",           blurb: "Grant a family member proxy access with one tap. Revoke just as easily." },
    ],
    workflow: [
      { step: "Search & book",   body: "Patient searches 'cardiology near me' or a specific doctor or hospital. Sees real-time availability, in-network status, and ratings. Books with one tap — telehealth or in-person." },
      { step: "Order & scan",    body: "Need a test or medicine? Scan a paper requisition or prescription. MyCare routes it to the lab or pharmacy of the patient's choice." },
      { step: "Result released", body: "Lab releases a result; pharmacy confirms a script ready. MyCare translates the technical name, tags severity, and sends a push notification." },
      { step: "Loop closed",     body: "Patient asks a follow-up question; the provider replies in Consult. Answer lands in MyCare with the original result or order attached." },
    ],
    faq: [
      { q: "Can patients see doctors outside their usual hospital?",
        a: "Yes. The search covers every hospital, clinic, and provider in the mCuris network. Coverage and in-network status are shown alongside availability so patients know up front what's covered." },
      { q: "How does scan-and-send work for prescriptions and lab orders?",
        a: "The patient takes a photo of a paper prescription or lab requisition. MyCare uses on-device OCR plus a verification handshake with the issuing provider — no patient should ever be able to forward a script that didn't come from a real clinician." },
      { q: "How does blood donation in MyCare work?",
        a: "Patients can register as donors, set eligibility windows, and opt in to alerts for their blood type. Blood Bank surfaces compatible volunteers in real time during shortages or emergency requests." },
      { q: "Is MyCare available on iOS and Android?",
        a: "Yes — both, with a responsive web fallback. The app uses native biometrics for sign-in." },
      { q: "Who owns the data the patient sees?",
        a: "The patient does. Patients can export their record at any time in a standard FHIR bundle." },
    ],
  },

  telemedicine: {
    tagline: "Virtual visits, built into the chart.",
    description:
      "mCuris Telemedicine is HD video plus a live clinical workspace. The patient joins from MyCare with one tap; the clinician joins from Consult with the full chart open. Vitals from wearables stream in; orders, scripts, and labs flow out — all without a second platform.",
    heroPreview: "telemedicine",
    pillars: [
      { icon: "video",       title: "One-tap join",          blurb: "Patient joins from MyCare; clinician joins from Consult. No separate app, no email link, no download." },
      { icon: "heartPulse",  title: "Live vitals in-call",   blurb: "Apple Health, Fitbit, Withings — wearables stream vitals into the visit so the doctor sees what the patient is feeling." },
      { icon: "pill",        title: "Orders without leaving the call", blurb: "E-prescribe to any pharmacy, order labs, schedule follow-ups — inline. The patient sees them in MyCare immediately." },
      { icon: "fileText",    title: "Recordings & transcripts", blurb: "Optional encrypted recording with auto-generated visit summary. Stored in the chart, accessible to the patient." },
    ],
    workflow: [
      { step: "Book",            body: "Patient picks a doctor and slot in MyCare; visit is created in Consult with intake notes attached." },
      { step: "Join",            body: "Both parties tap to join from their respective surface — patient on phone or laptop, clinician on desktop." },
      { step: "Examine",         body: "Live vitals stream from the patient's wearable. Clinician orders labs, scripts, and follow-ups inline, with decision support active." },
      { step: "Discharge",       body: "Visit summary auto-generates. Patient gets a plain-language recap in MyCare; chart is signed in Consult." },
    ],
    faq: [
      { q: "What devices do patients need?",
        a: "Any smartphone or laptop with a camera. iOS, Android, and modern desktop browsers (Chrome, Safari, Edge, Firefox). No download required." },
      { q: "Is the video HIPAA-compliant?",
        a: "Yes — end-to-end encrypted, hosted entirely within the mCuris tenant boundary. We don't route video through a third-party meeting provider." },
      { q: "Can specialists do consult-to-consult video?",
        a: "Yes. Two clinicians can join the same visit from Consult — useful for tumor boards, second opinions, and on-call consults." },
      { q: "What about low-bandwidth patients?",
        a: "Audio-only fallback runs at ~30 kbps. Patients in low-connectivity areas can still complete a structured visit with vitals + voice." },
    ],
  },

  lab: {
    tagline: "Order in, results out. Nothing in between you don't see.",
    description:
      "Lab is built so a tech can run a shift without a Post-it note. Specimens are barcoded at draw, tracked through the analyzer, and released to the chart the moment they pass QC.",
    heroPreview: "lab",
    pillars: [
      { icon: "search",      title: "Barcode tracking",  blurb: "Every specimen has a chain of custody from the draw to the analyzer to the result." },
      { icon: "refresh",     title: "Reflex ordering",   blurb: "If a value is abnormal, the next test is auto-ordered per your lab's protocol. Tech reviews and releases." },
      { icon: "checkCircle", title: "Auto-release",      blurb: "Stable values release to the chart without a click. Anything outside reference ranges holds for review." },
      { icon: "zap",         title: "Critical paging",   blurb: "Critical results page the responsible clinician directly. Acknowledgement is tracked." },
    ],
    workflow: [
      { step: "Order placed",   body: "Doctor signs an order in Consult. It arrives in Lab queued by collection time." },
      { step: "Specimen drawn", body: "Phlebotomist scans the patient band and prints labels at the bedside." },
      { step: "Run & QC",       body: "Specimens are tracked through the analyzer; QC results are visible per-batch." },
      { step: "Released",       body: "Normal values auto-release to the chart. Critical and abnormal hold for tech review and page the clinician." },
    ],
    faq: [
      { q: "Which analyzers does Lab integrate with?",
        a: "Lab supports HL7 v2 and ASTM out of the box for Roche, Siemens, Beckman, Sysmex, and most reference-lab middleware." },
      { q: "Can we customize reflex panels?",
        a: "Yes. Reflex rules are author-able by your lab director with a visual rule builder; every change is versioned." },
      { q: "What about send-out labs?",
        a: "Send-outs are tracked through the same workbench. Results from the reference lab return via HL7 and post to the patient's chart on receipt." },
    ],
  },

  pharmacy: {
    tagline: "Reconcile, dispense, deliver — without a phone call.",
    description:
      "Pharmacy is the surface where home meds and inpatient orders meet. Every reconciliation flags interactions in real time; every dispensed dose is logged; every script can be handed off to Drive for delivery.",
    heroPreview: "pharmacy",
    pillars: [
      { icon: "layers",      title: "Side-by-side reconciliation", blurb: "Home meds and inpatient orders on one screen. Drag to continue, hold, or discontinue." },
      { icon: "alert",       title: "Real-time interaction checks", blurb: "Severity-graded. Major interactions block; moderate flag for review; minor surface as info." },
      { icon: "database",    title: "Inventory linkage",            blurb: "Live stock visibility per location. Substitution suggestions if a brand is out." },
      { icon: "send",        title: "Discharge-meds workflow",       blurb: "Take-home meds queued by patient. Pickup at the pharmacy or mailed — patient picks at checkout." },
    ],
    workflow: [
      { step: "Admit",        body: "MyCare home med list is imported. PharmD reconciles against the new admit." },
      { step: "Inpatient",    body: "Inpatient orders flow from Consult. PharmD verifies; interaction checks run in real time." },
      { step: "Dispense",     body: "Doses pulled from inventory are logged automatically. Wasted doses require an electronic countersign." },
      { step: "Discharge",    body: "Discharge meds are queued. Patient can pick up at the pharmacy or have them mailed." },
    ],
    faq: [
      { q: "Does Pharmacy meet e-prescribing standards?",
        a: "Yes. We support NCPDP SCRIPT and EPCS for controlled substances, with two-factor required on every controlled-sub script." },
      { q: "Can we use Pharmacy without the rest of mCuris?",
        a: "Yes. Pharmacy operates standalone with HL7 inbound from any major EMR; the deeper hand-offs (live interaction in the chart, Drive routing) require the broader platform." },
      { q: "How are formulary rules managed?",
        a: "Formulary is authored per facility. Substitutions follow your rules, and overrides require an attestation." },
    ],
  },

  bloodbank: {
    tagline: "Type, cross-match, release — without the paper trail.",
    description:
      "Blood Bank is the surface where transfusion services live. Every unit on the shelf has a live status; every cross-match request flows in with the patient's history attached; every release is tracked unit by unit with full chain of custody.",
    heroPreview: "bloodbank",
    pillars: [
      { icon: "droplet",     title: "Live product inventory",     blurb: "Every unit on the shelf — red cells, platelets, plasma, cryo — with type, expiry, and location at a glance." },
      { icon: "shieldCheck", title: "Type & cross-match",         blurb: "ABO/Rh and antibody screen tracked per patient. Compatible units surface automatically; incompatibles are blocked." },
      { icon: "zap",         title: "Critical / emergency release", blurb: "Massive transfusion protocol with one-tap activation. O-negative units release with a co-sign audit trail." },
      { icon: "package",     title: "Chain of custody",           blurb: "Every unit scanned at issue, at the bedside, and at return. Wastage and disposition logged automatically." },
    ],
    workflow: [
      { step: "Order placed",     body: "Doctor orders a transfusion in Consult. Type & screen flows to Blood Bank with the patient's prior antibody history attached." },
      { step: "Cross-match",      body: "Tech selects compatible units from live inventory. Compatibility check runs against the patient's antibody profile in real time." },
      { step: "Release",          body: "Unit scanned out. Drive can deliver to the floor with a temperature-tracked cooler; status is visible to the floor in Consult." },
      { step: "Transfusion",      body: "Bedside scan confirms patient-band + unit-band match. Vitals during transfusion log to the chart; reactions are flagged for review." },
    ],
    faq: [
      { q: "Does Blood Bank support antibody work-ups?",
        a: "Yes — type & screen, antibody identification, and panel work-ups are first-class workflows. Historical antibodies persist across visits and follow the patient across facilities in your network." },
      { q: "How does emergency release work?",
        a: "Massive transfusion protocol activates with one tap from Consult. O-negative units release without full cross-match against a co-signed audit trail. The full work-up runs in parallel." },
      { q: "Can Blood Bank track product wastage?",
        a: "Yes. Every disposition — transfused, returned, discarded — is logged with reason codes. Wastage reports run by tech, by service, by month." },
    ],
  },

  drive: {
    tagline: "Ambulance — on the way, with the chart already open.",
    description:
      "Drive is the ambulance crew's app. Live routing, en-route vitals, pre-arrival patient brief — so the receiving ED knows the patient before the doors open. Patients can request non-emergency rides from MyCare; emergencies still route through 911 and your CAD.",
    heroPreview: "drive",
    pillars: [
      { icon: "route",        title: "Live route & ETA",          blurb: "Traffic-aware routing. ETA updates push to the receiving department so the bed and team are ready." },
      { icon: "phoneMobile",  title: "Patient-initiated rides",   blurb: "Patients can request a non-emergency ride from MyCare with one tap; emergencies still route through 911 / dispatch." },
      { icon: "clipboard",    title: "Pre-arrival patient brief", blurb: "EMT writes the brief on the way; it lands in Consult before the patient hits the door." },
      { icon: "heartPulse",   title: "En-route vitals",           blurb: "Vitals from on-board monitors stream straight into the chart. The receiving team sees the trend, not just a snapshot." },
    ],
    workflow: [
      { step: "Dispatch",     body: "911 or transfer request arrives. Drive picks the nearest unit; ETA is shared with the receiving ED." },
      { step: "En route",     body: "EMT documents vitals and complaint. Brief and live vitals appear in Consult on the receiving end in real time." },
      { step: "Arrive",       body: "Hand-off scan: patient band → Consult chart opens before the gurney rolls. Receiving team sees the brief and trends instantly." },
      { step: "Patient ride", body: "For non-emergency transport requested from MyCare, the same workflow applies — the receiving clinic sees an arrival ETA and visit reason." },
    ],
    faq: [
      { q: "Does Drive cover specimen or prescription delivery?",
        a: "No. Drive is for patient transport only. Specimen and prescription delivery aren't part of mCuris — those move through whatever pickup, mail, or courier arrangement your lab and pharmacy already use." },
      { q: "Does Drive support ambulance fleets we don't own?",
        a: "Yes. Drive is white-label-friendly; partner agencies can run on it with their own branding and dispatch protocols." },
      { q: "What hardware do the drivers use?",
        a: "Any modern Android or iOS device with a camera (for patient-band scanning at hand-off). Ruggedized devices are supported, and the app runs in-cab on tablet mounts." },
      { q: "Does it integrate with 911 dispatch?",
        a: "We integrate with NEMSIS-compliant dispatch systems and major CAD platforms. Custom integrations are in scope for enterprise tier." },
    ],
  },
};

window.PRODUCT_DETAILS = PRODUCT_DETAILS;
