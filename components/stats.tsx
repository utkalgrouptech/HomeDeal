const stats = [
  { label: "Properties Listed", value: "12,500+" },
  { label: "Happy Families", value: "8,400+" },
  { label: "Avg. Days to Close", value: "21" },
  { label: "Top Cities", value: "15+" },
]

export function Stats() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
      <h2 className="text-2xl font-bold">Trusted at scale</h2>
      <p className="mt-2 text-muted-foreground">Numbers that reflect our commitment and performance.</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="rounded-lg bg-secondary p-5 text-center">
            <div className="text-2xl font-extrabold text-primary">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
