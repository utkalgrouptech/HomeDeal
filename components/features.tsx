import type React from "react"
type Feature = {
  title: string
  description: string
  icon?: React.ReactNode
}

export function Features({ items, columns = 3 }: { items: Feature[]; columns?: 2 | 3 }) {
  return (
    <div className={`grid gap-6 md:grid-cols-${columns}`}>
      {items.map((f, i) => (
        <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="mt-1 size-9 shrink-0 rounded-md bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
              {/* Placeholder icon box */}
              <span className="block size-4 rounded-sm bg-primary" aria-hidden />
            </div>
            <div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
