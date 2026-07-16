import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/hero.jpg";
import aerialImg from "../assets/aerial.jpg";
import farmersImg from "../assets/farmers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neofarm — Smart Farming for Future Generations" },
      { name: "description", content: "AI-driven agritech that helps farmers optimize land, water, and yield. Send, receive, and track finances with transparency." },
      { property: "og:title", content: "Neofarm — Smart Farming for Future Generations" },
      { property: "og:description", content: "AI-driven agritech optimizing land, water, and finance for modern farms." },
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
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> AI-Driven Agritech
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] md:text-7xl lg:text-8xl">
            Smart Farming for<br />
            <span className="text-accent">Future Generations.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
            Send, receive, and track every dollar and drop. Neofarm bridges traditional agriculture with data-driven insight — so every acre works smarter.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition hover:brightness-95">
              Start Investing
            </Link>
            <Link to="/about" className="rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-primary-foreground/15">
              Meet the Farmers
            </Link>
            <Link to="/contact" className="rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground/80 transition hover:text-primary-foreground">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4">
          <Stat value="500+" label="AI Solutions Deployed" />
          <Stat value="40k+" label="Farms Supported" />
          <Stat value="32%" label="Avg. Water Saved" />
          <Stat value="24/7" label="Field Intelligence" />
        </div>
      </section>

      {/* VALUE PROP */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary/70">The Belief</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Finance and farming, finally on the same field.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Neofarm gives farmers, investors, and communities one transparent view of the land and the ledger. Track yield, monitor water, and move capital where it grows the most.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { t: "Sustainability", d: "Practices that preserve tomorrow's soil." },
                { t: "Efficiency", d: "AI that minimizes waste, maximizes yield." },
                { t: "Empowerment", d: "Financial tools built for farmers." },
                { t: "Transparency", d: "Real-time tracking, always." },
              ].map((v) => (
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
              <img src={aerialImg} alt="Aerial view of optimized farmland" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-xl sm:block">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Yield Forecast</div>
              <div className="mt-1 font-display text-3xl font-bold text-primary">+18.4%</div>
              <div className="text-xs text-muted-foreground">vs. last season</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">
              Meet the people <span className="text-accent">growing</span> the future.
            </h2>
            <p className="mt-4 max-w-xl text-primary-foreground/75">
              From family farms to co-ops of thousands, our community is proving that smart, sustainable, and profitable belong in the same sentence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground">Explore Solutions</Link>
              <Link to="/contact" className="rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold">Join the Network</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img src={farmersImg} alt="Diverse farmers reviewing crop data on a tablet" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
