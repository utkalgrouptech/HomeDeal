import { Section } from "@/components/section"
import { Hero } from "@/components/hero"
import { PropertyGrid } from "@/components/property-grid"
import { Features } from "@/components/features"
import { FAQ } from "@/components/faq"
import { CTABanner } from "@/components/cta-banner"

const items = [
  {
    id: "b1",
    title: "Premium 3BHK at IT Hub",
    location: "Hitech City, Hyderabad",
    price: "₹1.8 Cr",
    beds: 3,
    baths: 3,
    area: "1500 sqft",
    tag: "Premium",
  },
  {
    id: "b2",
    title: "Luxury Villa with Pool",
    location: "Varthur, Bengaluru",
    price: "₹4.2 Cr",
    beds: 4,
    baths: 5,
    area: "3800 sqft",
    tag: "Hot",
  },
  {
    id: "b3",
    title: "Skyline 2BHK",
    location: "Powai, Mumbai",
    price: "₹1.6 Cr",
    beds: 2,
    baths: 2,
    area: "1100 sqft",
    tag: "New",
  },
  {
    id: "b4",
    title: "City Center Duplex",
    location: "Golf Course Rd, Gurugram",
    price: "₹3.1 Cr",
    beds: 3,
    baths: 4,
    area: "2300 sqft",
  },
  {
    id: "b5",
    title: "Riverside Apartment",
    location: "Baner, Pune",
    price: "₹1.2 Cr",
    beds: 2,
    baths: 2,
    area: "980 sqft",
  },
  {
    id: "b6",
    title: "Golf View Residences",
    location: "Kharadi, Pune",
    price: "₹1.9 Cr",
    beds: 3,
    baths: 3,
    area: "1380 sqft",
  },
]

export default function BuyPage() {
  return (
    <>
      <Section>
        <Hero
          title="Buy your dream home with confidence."
          subtitle="Explore curated, verified listings from top builders with transparent pricing."
          primaryCta={{ href: "/contact", label: "Get Expert Help" }}
          secondaryCta={{ href: "/projects", label: "View Projects" }}
        />
      </Section>

      <Section>
        <PropertyGrid
          items={items as any}
          title="Top picks for buyers"
          subtitle="Premium units in sought‑after neighborhoods."
        />
      </Section>

      <Section>
        <Features
          items={[
            { title: "Transparent Pricing", description: "No hidden costs. See all charges upfront." },
            { title: "Legal Assistance", description: "Title checks and documentation support." },
            { title: "On-time Handover", description: "Track construction and possession timelines." },
          ]}
        />
      </Section>

      <Section>
        <FAQ title="Buying FAQs" />
      </Section>

      <Section>
        <CTABanner />
      </Section>
    </>
  )
}
