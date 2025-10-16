"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setLoading(true)
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Failed")
      toast({ title: "Thanks! We’ll reach out shortly." })
      form.reset()
    } catch (err) {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className={compact ? "grid gap-4 md:grid-cols-2" : "grid gap-4 md:grid-cols-3"}>
        <div className="grid gap-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            Full name
          </label>
          <input
            required
            id="name"
            name="name"
            placeholder="John Doe"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            placeholder="+1 555 000 0000"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your requirement"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
      <div className="flex items-center gap-3">
        <select name="interest" className="rounded-md border border-input bg-background px-3 py-2 text-sm">
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
          <option value="sell">Sell</option>
          <option value="project">Project Inquiry</option>
        </select>
        <button
          disabled={loading}
          className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Inquiry"}
        </button>
      </div>
    </form>
  )
}
