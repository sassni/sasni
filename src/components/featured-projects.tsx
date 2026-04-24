"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import GlassCard from "./glass-card"

const projects = [
  {
    title: "Nutrix",
    description:
      "Engineered an AI platform isolating math computation to eliminate LLM 'hallucinations', integrating a custom TensorFlow/Keras model and Gemini 2.5 Flash API for personalized coaching.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "TensorFlow", "Google API"],
  },
  {
    title: "MessageFuture",
    description:
      "A secure emotional-messaging platform for scheduling encrypted messages and AI interactions, featuring robust data encryption for privacy compliance.",
    tags: ["React", "Next.js", "Python", "AWS", "Supabase", "AI"],
  },
  {
    title: "TravelMatelia",
    description:
      "An AI-powered travel planning platform featuring social trip pooling and automated itinerary generation, deployed on AWS.",
    tags: ["React", "Next.js", "PostgreSQL", "Supabase", "AWS"],
  },
  {
    title: "MCP Resume Server",
    description:
      "Resume parsing and Q&A system with WebSocket JSON-RPC and REST API fallback. Developed a Next.js playground and SMTP email integration.",
    tags: ["Next.js", "Node.js", "Express.js", "WebSocket"],
  },
  {
    title: "Kommon Poll",
    description:
      "An AI-powered sentiment analysis tool designed for precise keyword tracking and user sentiment evaluation.",
    tags: ["JavaScript", "PHP", "AI"],
  },
  {
    title: "Hotel Guest Management",
    description:
      "Built a full-stack hotel guest management system to manage guest records and bookings. Integrated PocketBase for real-time data handling.",
    tags: ["React", "TypeScript", "Tailwind CSS", "PocketBase"],
  },
  {
    title: "Breast Cancer Prediction System",
    description:
      "Classification and regression models predicting mortality and survival duration using clinical data with Logistic Regression, KNN, and Naive Bayes.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Spam Email Classification System",
    description:
      "Built a spam detection model using text preprocessing, TF-IDF vectorization, and a Multinomial Naive Bayes classifier.",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
  },
]

export default function FeaturedProjects() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <section id="projects" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
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
            Featured Work
          </h2>
          <h3
            className={`mt-4 font-mono text-4xl font-bold md:text-5xl transition-colors duration-500 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Projects
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px" }}
            >
              <GlassCard className="group h-full p-6">
                <div
                  className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    isDark ? "bg-gradient-to-br from-white/5 to-white/0" : "bg-gradient-to-br from-black/5 to-black/0"
                  }`}
                />
                <div className="relative z-10 flex h-full flex-col">
                  <h4
                    className={`mb-3 font-mono text-lg font-semibold transition-colors duration-500 ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    {project.title}
                  </h4>
                  <p
                    className={`mb-6 flex-grow font-sans text-sm leading-relaxed transition-colors duration-500 ${
                      isDark ? "text-white/60" : "text-black/60"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors duration-500 ${
                          isDark
                            ? "border-white/10 bg-white/5 text-white/70"
                            : "border-black/10 bg-black/5 text-black/70"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
