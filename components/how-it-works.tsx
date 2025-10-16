const steps = [
  { title: "Discover", desc: "Browse curated properties with high-quality images and precise details." },
  { title: "Shortlist", desc: "Compare amenities, locations, and pricing to shortlist your favorites." },
  { title: "Visit", desc: "Schedule site visits or virtual tours with one click." },
  { title: "Close", desc: "Negotiate seamlessly and finalize paperwork with expert support." },
]

export function HowItWorks() {
  return (
    <div>
      <h2 className="text-2xl font-bold">How it works</h2>
      <p className="mt-2 text-muted-foreground">Move from discovery to keys-in-hand in four simple steps.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                {i + 1}
              </span>
              <h3 className="font-semibold">{s.title}</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
