import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/site-header"
import Footer from "@/components/site-footer"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "HomeDeal - Real Estate Solutions in Eastern India",
  description: "Your trusted partner for buying, selling, leasing, and renting properties in Bhubaneswar and beyond.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased bg-background text-foreground`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main className="min-h-dvh">{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
