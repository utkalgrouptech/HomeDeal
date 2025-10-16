import Link from "next/link"

export function CTABanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-primary p-8 text-primary-foreground md:p-12">
      <div className="relative z-10">
        <h3 className="text-pretty text-2xl font-bold md:text-3xl">Ready to find your perfect home?</h3>
        <p className="mt-2 text-primary-foreground/90">Talk to our experts and get curated recommendations today.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/buy"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
          >
            Explore Buying
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-primary-foreground/20 bg-primary-foreground px-5 py-2.5 text-sm font-medium text-foreground hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
