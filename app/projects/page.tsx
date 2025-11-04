"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Dithering } from "@paper-design/shaders-react"

export default function ProjectsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark")
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  const projects = [
    {
      name: "AsterStrategy - 2025",
      description: "Web3 Token Treasury @ asterstrategy.org",
      url: "https://aster-strategy.gitbook.io/asterstrategy-docs/WJ8wnrTo3CVgyulPgXC6",
      embedUrl: "https://aster-strategy.gitbook.io/asterstrategy-docs/WJ8wnrTo3CVgyulPgXC6",
      type: "gitbook",
    },
    {
      name: "Polygram - 2025",
      description: "Polymarket integrated Telegram Bot - WIP",
      url: "https://github.com/flvckz/polygram",
      embedUrl: "",
      type: "github",
    },
    {
      name: "Placey - 2022/23",
      description: "Web3 Lands Space backed by Decentraland",
      url: "https://www.figma.com/proto/5mwdl5uOm7aQ02IeK4ZwzD/Placey-Landing-Page?node-id=0-1&p=f&t=G8VvS7LUYFBpoLse-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      embedUrl:
        "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/5mwdl5uOm7aQ02IeK4ZwzD/Placey---Landing-Page?node-id=101-11&p=f&t=RvE6zg0gMXdeGt1M-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      type: "figma",
    },
    {
      name: "Park-It - 2021/22",
      description: "Native Android App @ ORT Labs",
      url: "https://github.com/flvckz/park-it-finalversion",
      embedUrl:
        "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/fsbnxXJ21Q6i7VsYT7jtRM/Park-It-%7C-Proyecto-Final-%7C-G3?node-id=15-1245&p=f&t=NJfL98TUEmka3ULp-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
      type: "figma",
    },
    {
      name: "RE Landing - 2023",
      description: "Landing Page for RE Business @ Aptimia",
      url: "https://www.figma.com/proto/nu0yPkjvf4tCbseICysLHD/Real-Estate-Landing-1?node-id=3-27&starting-point-node-id=3%3A27&t=XOTOC5cGIl8twJrp-1",
      embedUrl:
        "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/nu0yPkjvf4tCbseICysLHD/Real-Estate-Landing-1?node-id=3-27&starting-point-node-id=3%3A27&t=XOTOC5cGIl8twJrp-1",
      type: "figma",
    },
    {
      name: "Nazko Unique Bikes - 2023",
      description: "Landing for Nazo Unique Bikes @ Aptimia",
      url: "https://www.figma.com/proto/hDeftHJnAYJON0EqC1Zvxr/UNIQUE-BIKES--Community-?node-id=1-1038&p=f&t=RUdNptxxAFTT1Ib9-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A519",
      embedUrl:
        "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/hDeftHJnAYJON0EqC1Zvxr/UNIQUE-BIKES--Community-?node-id=1-1038&p=f&t=RUdNptxxAFTT1Ib9-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A519",
      type: "figma",
    },
    {
      name: "Adopt-a-Dog - 2023",
      description: "SaaS @ ORT Labs",
      url: "https://github.com/flvckz/parcial-tp3",
      embedUrl:
        "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/Ge3pN0x5aA4THbmVgWTLRQ/Parcial-Q2---2023--Copy-?node-id=1-3&p=f&t=h4x3AwLrTpfxupPV-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      type: "figma",
    },
  ]

  // Keep using the original local projects list and external links
  const slugMap: Record<string, string> = {
    'AsterStrategy - 2025': 'asterstrategy',
    'Polygram - 2025': 'polygram',
    'Placey - 2022/23': 'placey',
    'Park-It - 2021/22': 'park-it',
    'RE Landing - 2023': 're-landing',
    'Nazko Unique Bikes - 2023': 'unique-bikes',
    'Adopt-a-Dog - 2023': 'adopt-a-dog',
  }

  return (
    <div className={`min-h-screen font-mono ${isDarkMode ? "bg-black text-white" : "bg-gray-100 text-black"}`}>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* Header with Particle Background */}
      <div className="relative p-4 md:p-8 flex justify-between items-center h-20 md:h-32 overflow-hidden">

        {/* Back Arrow */}
        <Link
          href="/"
          className={`relative z-10 text-base md:text-lg hover:opacity-70 transition-opacity ${isDarkMode ? "text-white" : "text-black"}`}
        >
          ←
        </Link>

        {/* Centered Title */}
        <h1
          className={`absolute left-1/2 -translate-x-1/2 text-lg md:text-2xl font-bold z-10 ${isDarkMode ? "text-white" : "text-black"}`}
        >
          Projects
        </h1>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`relative z-10 p-2 rounded-full transition-colors ${
            isDarkMode ? "text-white hover:bg-white/10" : "text-black hover:bg-black/10"
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>

      {/* Projects Grid */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className={`border rounded-lg overflow-hidden hover:opacity-70 transition-opacity ${
              isDarkMode ? "border-white/20 bg-white/5" : "border-black/20 bg-white"
            }`}
          >
            <div className="p-3 md:p-4 border-b border-current">
              <h2 className="text-lg md:text-xl font-bold mb-2">{project.name}</h2>
              <p className="text-xs md:text-sm opacity-70 mb-2">{project.description}</p>
              <Link
                href={`/projects/${slugMap[project.name] ?? ''}`}
                className="text-xs md:text-sm underline hover:opacity-70 transition-opacity"
              >
                View Project →
              </Link>
            </div>
            <div className="aspect-video relative">
              {project.embedUrl ? (
                <iframe src={project.embedUrl} className="w-full h-full" allowFullScreen title={project.name} />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 mx-auto mb-4 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    <p className="text-sm opacity-70">GitHub Repository</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Centered Footer with Links */}
      <div className="py-4 md:py-8 flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-base md:text-lg font-mono px-4">
          <a
            href="https://linktr.ee/flvckz"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70 transition-opacity"
          >
            Links
          </a>
          <a
            href="https://x.com/04flvckz"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70 transition-opacity"
          >
            X
          </a>
          <a
            href="mailto:felipe@fluck.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70 transition-opacity"
          >
            Email
          </a>
          <a
            href="https://substack.com/@flvckz"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70 transition-opacity"
          >
            Substack
          </a>
        </div>
      </div>
    </div>
  )
}
