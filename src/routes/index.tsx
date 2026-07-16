import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/hero.jpg";
import aerialImg from "../assets/aerial.jpg";
import farmersImg from "../assets/farmers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AgriTech Advisor — Smart Farming Intelligence, Even Without Internet" },
      { name: "description", content: "Helping smallholder farmers in Rwanda diagnose crops, track weather, monitor soil, and sell smarter — fully offline-first." },
      { property: "og:title", content: "AgriTech Advisor — Smart Farming Intelligence" },
      { property: "og:description", content: "Offline-first agritech for Rwandan smallholder farmers. Diagnose, monitor, forecast, and sell smarter." },
    ],
  }),
  component: Home,
});

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl font-bold text-primary md:text-5xl">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

const features = [
  { t: "Crop Disease Detection", d: "Point your camera at any crop. Our on-device AI identifies diseases instantly — no internet required. Claude AI provides a detailed fallback when connected." },
  { t: "Soil & Sensor Monitoring", d: "Pair your ESP32 soil sensor via QR code. Track pH, moisture, temperature, and NPK with interactive trend graphs, all stored locally." },
  { t: "Hyperlocal Weather", d: "Daily forecasts with farm-specific advisories like \"Ideal planting window this week\" or \"Frost risk — cover seedlings tonight.\"" },
  { t: "Crowdsourced Market Prices", d: "Real-time crop prices from farmers across Rwanda. 30-day trend charts with automatic outlier flagging keep data trustworthy." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Smart tractor at sunset in a green field" className="h-full w-full object-cover" width={1920} height={1200} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        </div>
        <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-center px-6 py-24 text-primary-foreground">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-widest backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> AgriTech Advisor
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] md:text-7xl lg:text-8xl">
            Smart farming intelligence —<br />
            <span className="text-accent">even without internet.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
            Helping smallholder farmers in Rwanda diagnose crops, track weather, monitor soil, and sell smarter.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/about" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition hover:brightness-95">
              Learn More
            </Link>
            <Link to="/about" className="rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-primary-foreground/15">
              View Features
            </Link>
            <div className="flex items-center gap-2 rounded-full px-4 py-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">
              English · Français · Kinyarwanda
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4">
          <Stat value="6" label="Core Modules" />
          <Stat value="3" label="Languages Supported" />
          <Stat value="100%" label="Offline-First" />
          <Stat value="AI-Powered" label="Crop Diagnosis" />
        </div>
      </section>

      {/* VALUE PROP / FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary/70">The Modules</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Everything a farmer needs, in one app.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Six powerful modules, all working offline. Diagnose disease, monitor soil, forecast weather, and reach the market — from a single tap on any low-bandwidth device.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((v) => (
                <div key={v.t} className="rounded-2xl border border-border bg-card p-5">
                  <div className="mb-2 h-1.5 w-8 rounded-full bg-accent" />
                  <h3 className="font-semibold">{v.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img src={aerialImg} alt="Aerial view of Rwandan farmland" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-xl sm:block">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">On-device AI</div>
              <div className="mt-1 font-display text-3xl font-bold text-primary">100% Offline</div>
              <div className="text-xs text-muted-foreground">TFLite + Drift DB</div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION QUOTE STRIP */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              "Smallholder farmers produce <span className="text-accent">70% of Africa's food</span> — yet they have the least access to agricultural data. AgriTech Advisor changes that."
            </h2>
            <p className="mt-6 text-primary-foreground/75">
              Designed for Rwanda. Built for scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground">Explore Features</Link>
              <Link to="/contact" className="rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold">Get in Touch</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img src={farmersImg} alt="Rwandan farmers reviewing crop data" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
