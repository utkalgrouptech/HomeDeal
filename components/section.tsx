"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  containerClassName?: string
  children: React.ReactNode
  id?: string
}

export function Section({ className, containerClassName, children, id }: Props) {
  return (
    <section id={id} className={cn("py-16 md:py-20", className)}>
      <div className={cn("mx-auto max-w-7xl px-4", containerClassName)}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
