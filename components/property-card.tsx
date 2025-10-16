import { cn } from "@/lib/utils"
import { Heart } from "lucide-react"

export type Property = {
  id: string
  title: string
  location: string
  price: string
  beds: number
  baths: number
  area: string
  image?: string
  tag?: "New" | "Premium" | "Hot"
}

export function PropertyCard({ property, className }: { property: Property; className?: string }) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md",
        className,
      )}
    >
      <div className="relative">
        <img
          src={
            property.image ||
            "/placeholder.svg?height=240&width=480&query=modern%20residential%20building%20exterior" ||
            "/placeholder.svg" ||
            "/placeholder.svg"
          }
          alt={`${property.title} exterior view`}
          className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
        {property.tag && (
          <span className="absolute left-3 top-3 rounded-md bg-accent px-2 py-1 text-[11px] font-medium text-accent-foreground shadow">
            {property.tag}
          </span>
        )}
        <button
          aria-label="Save to favorites"
          className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur transition hover:bg-background"
        >
          <Heart className="size-4 text-foreground/70" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="line-clamp-1 text-sm font-semibold md:text-base">{property.title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{property.location}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-primary">{property.price}</span>
          <span className="text-xs text-muted-foreground">{property.area}</span>
        </div>
        <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
          <span>{property.beds} Beds</span>
          <span aria-hidden>•</span>
          <span>{property.baths} Baths</span>
        </div>
        <button className="mt-4 w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm font-medium hover:bg-secondary/80 transition">
          View Details
        </button>
      </div>
    </article>
  )
}
