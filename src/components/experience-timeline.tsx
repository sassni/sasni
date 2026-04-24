"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import GlassCard from "./glass-card"

const experiences = [
  {
    title: "Associate Software Engineer (Full Stack)",
    company: "NukyLabs LLC",
    period: "Sep 2025 – Present",
    description: "Developed scalable full-stack applications and AI-powered platforms, including secure messaging and travel planning systems.",
    details: [
      "Built scalable full-stack applications using React, Next.js, and Python backends deployed on AWS",
      "Developed secure user authentication systems and implemented robust data encryption for privacy compliance",
      "Integrated advanced AI models to power core features like interactive avatars and automated itinerary generation",
      "Built automated n8n content workflows and Python CLI scripts for Airtable optimization",
      "Managed secure corporate WordPress deployments on AWS",
    ],
    skills: ["React", "Next.js", "TypeScript", "Python", "Fast API", "Supabase", "PostgreSQL", "AWS"],
  },
  {
    title: "Full Stack Software Engineer - Intern",
    company: "Synapse AI Labs",
    period: "Oct 2023 – Oct 2024",
    description:
      "Engineered full-stack components for sentiment analysis tools and redesigned corporate web platforms.",
    details: [
      "Engineered full-stack components for Kommon Poll, resolving critical application bugs",
      "Improved AI keyword tracking accuracy and enhanced platform UI responsiveness",
      "Led the complete UI/UX redesign of the corporate website for mobile responsiveness",
      "Integrated custom WordPress plugins to support new business service architectures",
      "Optimized end-to-end system performance across multiple web-based platforms",
    ],
    skills: ["JavaScript", "PHP", "WordPress", "HTML", "CSS"],
  },
]

export default function ExperienceTimeline() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <section id="experience" className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px" }}
          className="mb-16 text-center"
        >
          <h2
            className={`font-sans text-sm uppercase tracking-[0.3em] transition-colors duration-500 ${
              isDark ? "text-white/40" : "text-black/40"
            }`}
          >
            Career Path
          </h2>
          <h3
            className={`mt-4 font-mono text-4xl font-bold md:text-5xl transition-colors duration-500 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Experience
          </h3>
        </motion.div>

        <div className="relative">
          <div
            className={`absolute left-8 top-0 h-full w-px md:left-1/2 md:-translate-x-px transition-colors duration-500 ${
              isDark
                ? "bg-gradient-to-b from-white/50 via-white/30 to-transparent"
                : "bg-gradient-to-b from-black/50 via-black/30 to-transparent"
            }`}
          />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "0px" }}
              className="relative mb-12 pl-20 md:pl-0 md:odd:pr-[calc(50%+2rem)] md:even:pl-[calc(50%+2rem)]"
            >
              <motion.div
                className={`absolute left-6 top-8 h-4 w-4 rounded-full border-2 md:left-1/2 md:-translate-x-1/2 transition-colors duration-500 ${
                  isDark ? "border-white/60 bg-black" : "border-black/60 bg-white"
                }`}
                whileInView={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "0px" }}
              >
                <div
                  className={`absolute inset-0 animate-ping rounded-full transition-colors duration-500 ${
                    isDark ? "bg-white/30" : "bg-black/30"
                  }`}
                />
              </motion.div>

              <GlassCard className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-xs transition-colors duration-500 ${
                      isDark ? "bg-white/10 text-white/80" : "bg-black/10 text-black/80"
                    }`}
                  >
                    {experience.period}
                  </span>
                </div>
                <h4
                  className={`mb-1 font-mono text-xl font-semibold transition-colors duration-500 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  {experience.title}
                </h4>
                <p
                  className={`mb-4 font-sans text-sm transition-colors duration-500 ${
                    isDark ? "text-white/60" : "text-black/60"
                  }`}
                >
                  {experience.company}
                </p>
                <ul className="mb-6 space-y-2">
                  {experience.details.map((detail, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2 font-sans text-sm leading-relaxed transition-colors duration-500 ${
                        isDark ? "text-white/60" : "text-black/60"
                      }`}
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full transition-colors duration-500 ${
                          isDark ? "bg-white/60" : "bg-black/60"
                        }`}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors duration-500 ${
                        isDark ? "border-white/10 bg-white/5 text-white/70" : "border-black/10 bg-black/5 text-black/70"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
