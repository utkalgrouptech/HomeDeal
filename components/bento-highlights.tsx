export function BentoHighlights() {
  return (
    <div className="grid gap-6 md:grid-cols-6">
      <div className="rounded-2xl border border-border bg-card p-6 md:col-span-4">
        <h3 className="text-lg font-semibold">Premium locations</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Curated neighborhoods with top schools, connectivity, and amenities.
        </p>
        <img
          src="/city-skyline-premium-neighborhood.jpg"
          alt="Premium neighborhoods"
          className="mt-4 h-40 w-full rounded-lg object-cover"
        />
      </div>

      <div className="rounded-2xl border border-border bg-secondary p-6 md:col-span-2">
        <h3 className="text-lg font-semibold">Assisted site visits</h3>
        <p className="mt-2 text-sm text-muted-foreground">Virtual or in-person tours at your convenience.</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-16 rounded-lg border border-border bg-card" />
          <div className="h-16 rounded-lg border border-border bg-card" />
          <div className="h-16 rounded-lg border border-border bg-card" />
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 md:col-span-3">
        <h3 className="text-lg font-semibold">Zero brokerage (select)</h3>
        <p className="mt-2 text-sm text-muted-foreground">Save on charges with partner-exclusive offers.</p>
        <img
          src="/modern-residential-amenities.jpg"
          alt="Exclusive offers"
          className="mt-4 h-28 w-full rounded-lg object-cover"
        />
      </div>

      <div className="rounded-2xl border border-border bg-accent/10 p-6 md:col-span-3">
        <h3 className="text-lg font-semibold">Trusted developers</h3>
        <p className="mt-2 text-sm text-muted-foreground">Work only with verified, top-tier builders.</p>
        <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
          <li className="rounded-md border border-border bg-background px-3 py-2">On-time delivery track records</li>
          <li className="rounded-md border border-border bg-background px-3 py-2">RERA compliance verified</li>
          <li className="rounded-md border border-border bg-background px-3 py-2">Best-in-class amenities</li>
        </ul>
      </div>
    </div>
  )
}
