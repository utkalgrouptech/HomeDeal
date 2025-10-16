const data = [
  {
    quote: "HomeDeal made our home-buying journey effortless. Transparent, responsive, and professional.",
    name: "Priya Sharma",
    role: "Homeowner",
  },
  {
    quote: "Found a premium rental within days. The virtual tour saved us so much time.",
    name: "Arjun Mehta",
    role: "Renter",
  },
  {
    quote: "Closed my villa sale 20% faster than expected. Highly recommend!",
    name: "Neha Verma",
    role: "Seller",
  },
]

export function Testimonials() {
  return (
    <div className="rounded-2xl border border-border bg-secondary p-6 md:p-10">
      <h2 className="text-2xl font-bold">What clients say</h2>
      <p className="mt-2 text-muted-foreground">Real stories from happy homeowners, renters, and sellers.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {data.map((t, i) => (
          <figure key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <blockquote className="text-pretty text-sm">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm font-medium">
              {t.name} <span className="text-muted-foreground">— {t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
