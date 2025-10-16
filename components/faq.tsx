const faqs = [
  { q: "Do you charge for property listing?", a: "Basic listings are free. Premium placements are available." },
  { q: "Can I schedule a visit online?", a: "Yes, pick a slot and our team will confirm your visit." },
  { q: "Do you help with paperwork?", a: "Absolutely—our experts assist from offer to registration." },
  { q: "Are virtual tours available?", a: "Yes, most projects include HD virtual tours and floor plans." },
]

export function FAQ({ title = "Frequently asked questions" }: { title?: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-6 divide-y divide-border rounded-xl border border-border bg-card">
        {faqs.map((f, i) => (
          <details key={i} className="group open:bg-secondary/60">
            <summary className="cursor-pointer list-none p-4 font-medium transition hover:bg-secondary">{f.q}</summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground">{f.a}</div>
          </details>
        ))}
      </div>
    </div>
  )
}
