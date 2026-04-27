"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export default function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <motion.div
      className="group/card relative h-full w-full rounded-2xl transform-gpu will-change-transform"
      whileHover={
        hoverEffect
          ? {
              y: -4,
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* RGB Glow Element */}
      <div
        className={cn(
          "absolute -inset-0.5 rounded-2xl bg-[linear-gradient(to_right,theme(colors.red.500),theme(colors.orange.500),theme(colors.yellow.500),theme(colors.green.500),theme(colors.blue.500),theme(colors.indigo.500),theme(colors.purple.500),theme(colors.red.500))] bg-[length:200%_auto] animate-[gradient_2s_linear_infinite] blur-md opacity-0 transition duration-500",
          hoverEffect && "group-hover/card:opacity-100",
        )}
      />

      {/* Protect the Card Content */}
      <div
        className={cn(
          "relative z-10 h-full w-full overflow-hidden rounded-2xl transition-colors duration-500",
          isDark ? "bg-zinc-900 border border-white/10" : "bg-gray-100 border border-black/10",
          className,
        )}
      >
        {children}
      </div>
    </motion.div>
  )
}
