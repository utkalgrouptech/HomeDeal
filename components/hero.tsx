import Link from "next/link"
import type React from "react"

type HeroProps = {
  title: string
  subtitle: string
  primaryCta?: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
  imageAlt?: string
  eyebrow?: string
  children?: React.ReactNode
}

export function Hero({ title, subtitle, primaryCta, secondaryCta, eyebrow, children }: HeroProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary">
      <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
        <div className="flex flex-col justify-center">
          {eyebrow && (
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
              <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden />
              {eyebrow}
            </span>
          )}
          <h1 className="text-pretty text-3xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-4 text-muted-foreground md:text-lg">{subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground shadow hover:opacity-90 transition"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
          {children && <div className="mt-6">{children}</div>}
        </div>
        <div className="relative">
          <img
            src="/modern-apartment-interior.png"
            alt="Showcase property interior"
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/10" aria-hidden />
        </div>
      </div>
    </div>
  )
}
