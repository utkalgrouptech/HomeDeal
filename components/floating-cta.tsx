"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function FloatingCTA() {
  const pathname = usePathname()
  // Hide on contact page where a form is already front-and-center
  if (pathname === "/contact") return null
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Link
        href="/contact#contact"
        className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-lg hover:opacity-90 transition"
      >
        Inquire Now
        <span aria-hidden className="inline-block size-2 rounded-full bg-foreground/60" />
      </Link>
    </div>
  )
}
