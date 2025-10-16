"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { PropertyCard, type Property } from "@/components/property-card"

export function PropertyCarousel({ items, title }: { items: Property[]; title?: string }) {
  return (
    <div className="relative">
      {title && <h2 className="text-2xl font-bold">{title}</h2>}
      <div className="mt-6">
        <Carousel className="relative" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-2">
            {items.map((p) => (
              <CarouselItem key={p.id} className="pl-2 sm:basis-1/2 lg:basis-1/3">
                <PropertyCard property={p} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6 bg-background/90" />
          <CarouselNext className="-right-6 bg-background/90" />
        </Carousel>
      </div>
    </div>
  )
}
