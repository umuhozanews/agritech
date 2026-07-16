import { createFileRoute, Link } from "@tanstack/react-router";
import aerialImg from "../assets/aerial.jpg";
import farmersImg from "../assets/farmers.jpg";
import sproutImg from "../assets/sprout.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Solutions — Neofarm" },
      { name: "description", content: "Neofarm integrates smart farming solutions with data-driven insights across four pillars: environment, strategy, performance, and impact." },
      { property: "og:title", content: "About & Solutions — Neofarm" },
      { property: "og:description", content: "Our mission, pillars, and how smart farming delivers real results." },
    ],
  }),
  component: About,
});

const pillars = [
  { t: "Environmental-First", d: "Every recommendation starts with the soil, the watershed, and the horizon beyond this season.", n: "01" },
  { t: "Strategic Solutions", d: "Playbooks tailored to crop, climate, and cash flow — not a one-size-fits-all dashboard.", n: "02" },
  { t: "Performance Intelligence", d: "Sensors, satellites, and models that translate raw data into decisions farmers can act on.", n: "03" },
  { t: "Worldwide Impact", d: "A network spanning continents, sharing what works across climates and cultures.", n: "04" },
];

const steps = [
  { t: "Map your land", d: "Upload boundaries or sync from your equipment. We build a digital twin of every parcel." },
  { t: "Get AI insights", d: "Water, nutrients, planting windows, risk alerts — delivered where you work." },
  { t: "Track & grow", d: "Watch yield, cost, and impact update in real time. Move capital, prove outcomes." },
];

function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-25">
          <img src={sproutImg} alt="" className="h-full w-full object-cover" width={1200} height={1400} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Mission</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[1.05] md:text-7xl">
            Integrating smart farming with data-driven insight.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            We build the tools that let farmers work with the land, not against it — bridging generations of know-how with the intelligence of modern AI.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <h2 className="max-w-2xl text-4xl font-bold md:text-5xl">Four pillars, one field.</h2>
          <span className="hidden text-sm text-muted-foreground md:block">Neofarm operating principles</span>
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

      {/* Gallery */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="row-span-2 overflow-hidden rounded-3xl">
              <img src={farmersImg} alt="Farmers using a tablet in the field" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img src={aerialImg} alt="Aerial view of geometric farm plots" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-between rounded-3xl bg-primary p-8 text-primary-foreground">
              <p className="text-sm uppercase tracking-widest text-accent">In the field</p>
              <p className="mt-4 font-display text-2xl leading-tight">
                "Neofarm gave us back an hour a day and 22% of our irrigation budget."
              </p>
              <p className="mt-6 text-sm text-primary-foreground/70">— Elena R., Almond Grower, CA</p>
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
            Smart farming made easy. <span className="text-muted-foreground">Results that deliver.</span>
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
        <div className="mt-16 flex flex-wrap gap-3">
          <Link to="/contact" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Book a walkthrough</Link>
          <Link to="/" className="rounded-full border px-6 py-3 text-sm font-semibold hover:bg-accent hover:text-accent-foreground">Back to home</Link>
        </div>
      </section>
    </>
  );
}
