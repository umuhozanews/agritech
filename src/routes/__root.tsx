import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This field hasn't been sown yet.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to AgriTech Advisor
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something didn't grow right</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Try again, or head back to the homestead.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "author", content: "AgriTech Advisor" },
      { title: "AgriTech Advisor — Smart Farming Intelligence, Even Without Internet" },
      { name: "description", content: "Offline-first agritech helping Rwandan smallholder farmers diagnose crops, monitor soil, forecast weather, and sell smarter." },
      { property: "og:site_name", content: "AgriTech Advisor" },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "AgriTech Advisor — Smart Farming Intelligence" },
      { property: "og:description", content: "Offline-first agritech for Rwandan smallholder farmers. Diagnose, monitor, forecast, and sell smarter." },
      { property: "og:image", content: "https://kacci.oryntechltd.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "AgriTech Advisor — Smart Farming Intelligence in Rwanda" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AgriTech Advisor — Smart Farming Intelligence" },
      { name: "twitter:description", content: "Offline-first agritech for Rwandan smallholder farmers." },
      { name: "twitter:image", content: "https://kacci.oryntechltd.com/og-image.jpg" },
      { name: "twitter:image:alt", content: "AgriTech Advisor — Smart Farming Intelligence in Rwanda" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "alternate icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2c-4 6-4 12 0 20"/><path d="M12 12c4-2 8-2 10 0"/><path d="M12 12c-4-2-8-2-10 0"/>
            </svg>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">AgriTech Advisor</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }} className="text-foreground/70 transition hover:text-foreground">Home</Link>
          <Link to="/about" activeProps={{ className: "text-primary" }} className="text-foreground/70 transition hover:text-foreground">Features</Link>
          <Link to="/contact" activeProps={{ className: "text-primary" }} className="text-foreground/70 transition hover:text-foreground">Contact</Link>
          <a href="https://agritech-mobile-app.pages.dev" target="_blank" rel="noopener noreferrer" className="text-foreground/70 transition hover:text-foreground">Live App Demo</a>
        </nav>
        <a
          href="https://github.com/umuhozanews/agritech/releases/download/v1.0.0/AgriTech-Advisor-v1.0.0.apk"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition hover:brightness-95"
          download
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          <span>Download APK</span>
        </a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-foreground">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2c-4 6-4 12 0 20"/><path d="M12 12c4-2 8-2 10 0"/><path d="M12 12c-4-2-8-2-10 0"/>
              </svg>
            </span>
            <span className="font-display text-lg font-semibold">AgriTech Advisor</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
            Empowering Rwandan Farmers — offline-first smart farming intelligence for diagnosis, sensing, weather, and market.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent">Features & Roadmap</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact & Support</Link></li>
            <li><a href="https://agritech-mobile-app.pages.dev" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Live Web App</a></li>
            <li><a href="/sitemap.xml" className="hover:text-accent">Sitemap</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Legal</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-accent">Terms of Service</a></li>
            <li><a href="#" className="hover:text-accent">Cookies Settings</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© 2025 AgriTech Advisor. Built with Flutter & Claude AI.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-accent">Instagram</a>
            <a href="#" aria-label="X" className="hover:text-accent">X</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-accent">LinkedIn</a>
            <a href="#" aria-label="YouTube" className="hover:text-accent">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
