import { createFileRoute, Link } from "@tanstack/react-router";
import aerialImg from "../assets/aerial.jpg";
import farmersImg from "../assets/farmers.jpg";
import sproutImg from "../assets/sprout.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Features & Roadmap — AgriTech Advisor" },
      { name: "description", content: "Six modules, three languages, one offline-first app. See how AgriTech Advisor helps Rwandan smallholder farmers, phase by phase." },
      { property: "og:title", content: "Features & Roadmap — AgriTech Advisor" },
      { property: "og:description", content: "Explore the six modules and the phase-by-phase roadmap behind AgriTech Advisor." },
    ],
  }),
  component: About,
});

const pillars = [
  { t: "Farm Task Manager & Alerts", d: "Schedule planting, irrigation, and harvest tasks. Push notifications for critical alerts — even fully offline.", n: "05" },
  { t: "Built for Rural Rwanda", d: "Full offline support with a local database. Switch instantly between English, French, and Kinyarwanda.", n: "06" },
  { t: "Crop Disease Detection", d: "On-device TFLite model identifies diseases from a photo. Claude AI provides a detailed fallback when connected.", n: "02" },
  { t: "Soil & Sensor Monitoring", d: "Pair an ESP32 sensor via QR. Track pH, moisture, temperature, and NPK with local trend charts.", n: "03" },
];

const steps = [
  { t: "Download & Set Up", d: "Install the app, scan your soil sensor QR code, and select your crops. No account required to start." },
  { t: "Scan, Monitor & Advise", d: "Point at a diseased leaf, check soil readings, or view this week's weather advisory — all in one tap." },
  { t: "Sell Smarter", d: "Check market prices from farmers near you before heading out. See 30-day trends and get notified of price spikes." },
];

const timeline = [
  { p: "Phase 1", t: "Foundation", d: "App scaffold, local database, routing, and design system." },
  { p: "Phase 2", t: "Disease Scanner", d: "On-device plant disease detection with Claude AI fallback." },
  { p: "Phase 3", t: "Soil Monitoring", d: "ESP32 sensor pairing via QR code with live data charts." },
  { p: "Phase 4", t: "Weather", d: "Hyperlocal forecasts and smart farm advisories." },
  { p: "Phase 5", t: "Market Prices", d: "Crowdsourced prices with 30-day trends and outlier detection." },
  { p: "Phase 6", t: "Tasks & Alerts", d: "Farm task scheduler, push notifications, and full i18n." },
];

const stack = ["Flutter", "Dart", "TFLite", "Claude AI", "Drift (SQLite)", "Supabase", "ESP32", "OpenWeatherMap", "Firebase Cloud Messaging", "Flutter i18n (en/fr/rw)", "fl_chart"];

function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-25">
          <img src={sproutImg} alt="" className="h-full w-full object-cover" width={1200} height={1400} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Features & Roadmap</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[1.05] md:text-7xl">
            Everything a farmer needs, in one offline app.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Six powerful modules across diagnosis, sensing, weather, market, and tasks — built for low-connectivity, low-bandwidth environments and shipped phase by phase.
          </p>
        </div>
      </section>

      {/* More features */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <h2 className="max-w-2xl text-4xl font-bold md:text-5xl">More of the toolkit.</h2>
          <span className="hidden text-sm text-muted-foreground md:block">Additional modules</span>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.n} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition hover:border-accent">
              <div className="font-display text-5xl font-bold text-accent/70">{p.n}</div>
              <h3 className="mt-6 text-xl font-semibold">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Gallery + quote */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="row-span-2 overflow-hidden rounded-3xl">
              <img src={farmersImg} alt="Rwandan farmers using the app" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img src={aerialImg} alt="Aerial view of farm plots" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-between rounded-3xl bg-primary p-8 text-primary-foreground">
              <p className="text-sm uppercase tracking-widest text-accent">Our mission</p>
              <p className="mt-4 font-display text-2xl leading-tight">
                "Smallholder farmers produce 70% of Africa's food — yet they have the least access to agricultural data."
              </p>
              <p className="mt-6 text-sm text-primary-foreground/70">Designed for Rwanda. Built for scale.</p>
            </div>
            <div className="overflow-hidden rounded-3xl md:col-span-2">
              <img src={sproutImg} alt="Hands holding a sprout in dark soil" width={1200} height={1400} loading="lazy" className="h-64 w-full object-cover md:h-80" />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/70">How it works</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Simple enough for any farmer.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.t} className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-accent-foreground">
                {i + 1}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary/70">Tech stack</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Built with modern, proven technology.</h2>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {stack.map((s) => (
              <span key={s} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/70">Timeline</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Built phase by phase.</h2>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {timeline.map((t) => (
            <div key={t.p} className="flex gap-5 rounded-3xl border border-border bg-card p-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                  ✓
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-accent-foreground/80">
                  <span className="rounded-full bg-accent px-2 py-0.5">{t.p}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">{t.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap gap-3">
          <Link to="/contact" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Contact the team</Link>
          <Link to="/" className="rounded-full border px-6 py-3 text-sm font-semibold hover:bg-accent hover:text-accent-foreground">Back to home</Link>
        </div>
      </section>
    </>
  );
}
