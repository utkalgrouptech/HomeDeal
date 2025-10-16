import { Section } from "@/components/section"
import { Hero } from "@/components/hero"
import { PropertyGrid } from "@/components/property-grid"
import { Features } from "@/components/features"
import { FAQ } from "@/components/faq"
import { CTABanner } from "@/components/cta-banner"

const items = [
  {
    id: "r1",
    title: "Furnished 2BHK Near Metro",
    location: "Kukatpally, Hyderabad",
    price: "₹38k/mo",
    beds: 2,
    baths: 2,
    area: "980 sqft",
    tag: "New",
  },
  {
    id: "r2",
    title: "Studio at City Center",
    location: "MG Road, Bengaluru",
    price: "₹28k/mo",
    beds: 1,
    baths: 1,
    area: "520 sqft",
  },
  {
    id: "r3",
    title: "Sea View Apartment",
    location: "Bandra, Mumbai",
    price: "₹85k/mo",
    beds: 2,
    baths: 2,
    area: "1200 sqft",
    tag: "Premium",
  },
  {
    id: "r4",
    title: "Family 3BHK",
    location: "Kalyani Nagar, Pune",
    price: "₹55k/mo",
    beds: 3,
    baths: 3,
    area: "1500 sqft",
  },
  {
    id: "r5",
    title: "Garden Facing 1BHK",
    location: "Noida Sector 62",
    price: "₹22k/mo",
    beds: 1,
    baths: 1,
    area: "650 sqft",
  },
  {
    id: "r6",
    title: "IT Park Adjacent 2BHK",
    location: "Whitefield, Bengaluru",
    price: "₹42k/mo",
    beds: 2,
    baths: 2,
    area: "980 sqft",
  },
]

export default function RentPage() {
  return (
    <>
      <Section>
        <Hero
          title="Find rentals that fit your lifestyle."
          subtitle="From studio apartments to family homes, discover rentals with flexible terms."
          primaryCta={{ href: "/contact", label: "Request Shortlist" }}
          secondaryCta={{ href: "/buy", label: "Switch to Buying" }}
        />
      </Section>

      <Section>
        <PropertyGrid items={items as any} title="Popular rentals" subtitle="Move-in ready homes in prime locations." />
      </Section>

      <Section>
        <Features
          items={[
            { title: "Verified Owners", description: "Avoid brokers—connect with verified owners or partners." },
            { title: "Flexible Terms", description: "Choose furnished/unfurnished, short/long term." },
            { title: "Maintenance Support", description: "We help coordinate pre-move checks." },
          ]}
        />
      </Section>

      <Section>
        <FAQ title="Rental FAQs" />
      </Section>

      <Section>
        <CTABanner />
      </Section>
    </>
  )
}
