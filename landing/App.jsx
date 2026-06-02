// Landing page app — composes all sections.
// Tweakable hero variant.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": "ecosystem"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  return (
    <>
      <SiteNav active="home" />

      <main>
        <Hero variant={tweaks.hero} />
        <TrustStrip />
        <ProductTabs />
        <ValuesSection />
        <FlowSection />
        <SecuritySection />
        <AppsStrip />
        <CtaBanner />
      </main>

      <SiteFooter />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Hero variation" subtitle="Three directions to choose from.">
          <TweakRadio
            value={tweaks.hero}
            options={[
              { value: "ecosystem", label: "Ecosystem" },
              { value: "showcase",  label: "Showcase" },
              { value: "minimal",   label: "Minimal" },
            ]}
            onChange={(v) => setTweak("hero", v)}
          />
          <div style={{ marginTop: 8, fontSize: 12, color: "var(--fg-3)", lineHeight: 1.5 }}>
            <b style={{ color: "var(--fg-2)" }}>Ecosystem:</b> the connected-network diagram.<br/>
            <b style={{ color: "var(--fg-2)" }}>Showcase:</b> Consult chart + MyCare phone preview.<br/>
            <b style={{ color: "var(--fg-2)" }}>Minimal:</b> bold headline, mark, and six product tiles.
          </div>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
