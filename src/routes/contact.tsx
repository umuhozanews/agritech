import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AgriTech Advisor — Pilot & Partner in Rwanda" },
      { name: "description", content: "Partner with AgriTech Advisor to pilot offline-first smart agriculture solutions for cooperatives, NGOs, and farmers across Rwanda. Reach out to our team in Kigali." },
      { property: "og:title", content: "Contact AgriTech Advisor — Pilot & Partner in Rwanda" },
      { property: "og:description", content: "Partner with AgriTech Advisor to pilot offline-first smart agriculture solutions for cooperatives, NGOs, and farmers across Rwanda." },
      { property: "og:url", content: "https://kacci.oryntechltd.com/contact" },
      { property: "og:image", content: "https://kacci.oryntechltd.com/og-image.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Contact AgriTech Advisor — Pilot & Partner in Rwanda" },
      { name: "twitter:description", content: "Get in touch with the team behind AgriTech Advisor in Kigali, Rwanda." },
      { name: "twitter:image", content: "https://kacci.oryntechltd.com/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://kacci.oryntechltd.com/contact" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/70">Contact</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-bold leading-[1.05] md:text-7xl">
            Let's empower <span className="text-accent-foreground bg-accent px-3 rounded-lg">farmers</span> together.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Partner with us to pilot, deploy, or extend AgriTech Advisor across Rwanda and beyond. Available in English, Français, and Kinyarwanda.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-border bg-card p-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary/70">Support</h3>
              <p className="mt-4 font-display text-2xl font-semibold">hello@agritechadvisor.rw</p>
              <p className="mt-1 text-sm text-muted-foreground">Mon–Fri, 8am–6pm CAT</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary/70">Based in</h3>
              <p className="mt-4 font-display text-xl font-semibold">Kigali, Rwanda</p>
              <p className="text-muted-foreground">Serving smallholder farmers nationwide</p>
            </div>
            <div className="rounded-3xl bg-primary p-8 text-primary-foreground">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">Follow along</h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Instagram", "X (Twitter)", "LinkedIn", "YouTube"].map((s) => (
                  <a key={s} href="#" className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm font-medium transition hover:border-accent hover:text-accent">
                    {s} →
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-card p-8 md:p-10"
          >
            <h2 className="text-3xl font-bold">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">We'll get back within one business day.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Name</span>
                <input required className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-accent/40" placeholder="Jane Grower" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Email</span>
                <input required type="email" className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-accent/40" placeholder="jane@farm.com" />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium">I'm interested in</span>
                <select className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-accent/40">
                  <option>Piloting AgriTech Advisor with a farmer cooperative</option>
                  <option>Integrating ESP32 soil sensors</option>
                  <option>Partnering as an NGO or government agency</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium">Message</span>
                <textarea required rows={5} className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-accent/40" placeholder="Tell us about your farm or goals..." />
              </label>
            </div>

            <button type="submit" className="mt-8 w-full rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition hover:brightness-95 sm:w-auto">
              {sent ? "Message sent ✓" : "Send message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
