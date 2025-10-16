const brands = ["Skyline", "UrbanNest", "VistaHomes", "PrimePlots", "VillaLux", "BlueStone"]

export function Partners() {
  return (
    <div className="rounded-2xl border border-border bg-secondary p-6 md:p-10">
      <h2 className="text-2xl font-bold">Trusted by leading developers</h2>
      <p className="mt-2 text-muted-foreground">We collaborate with premium builders and verified partners.</p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {brands.map((b, i) => (
          <div
            key={i}
            className="flex h-16 items-center justify-center rounded-md border border-border bg-card text-sm font-semibold text-muted-foreground"
          >
            {b}
          </div>
        ))}
      </div>
    </div>
  )
}
