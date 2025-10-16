import { type Property, PropertyCard } from "./property-card"

export function PropertyGrid({ items, title, subtitle }: { items: Property[]; title?: string; subtitle?: string }) {
  return (
    <div>
      {title && <h2 className="text-2xl font-bold">{title}</h2>}
      {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  )
}
