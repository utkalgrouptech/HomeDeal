"use client"

import type React from "react"

import { useState } from "react"

export function SearchBar() {
  const [loading, setLoading] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // purely UI for now
    setLoading(true)
    setTimeout(() => setLoading(false), 800)
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-3 rounded-xl border border-border bg-background/80 p-3 shadow-sm backdrop-blur md:grid-cols-5"
      role="search"
      aria-label="Property quick search"
    >
      <input
        name="location"
        placeholder="Location (e.g., Andheri, Whitefield)"
        aria-label="Location"
        className="rounded-md border border-input bg-background px-3 py-2 text-sm md:col-span-2"
      />
      <select
        name="type"
        aria-label="Property type"
        className="rounded-md border border-input bg-background px-3 py-2 text-sm"
      >
        <option>Any type</option>
        <option>Apartment</option>
        <option>Villa</option>
        <option>Plot</option>
      </select>
      <input
        name="budget"
        placeholder="Budget (₹)"
        aria-label="Budget"
        className="rounded-md border border-input bg-background px-3 py-2 text-sm"
      />
      <button
        disabled={loading}
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  )
}
