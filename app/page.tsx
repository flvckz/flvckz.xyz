"use client"

import { Dithering } from "@paper-design/shaders-react"

import { useState, useEffect } from "react"
import { RotatingLogo } from "@/components/rotating-logo"
import Link from "next/link"

export default function ResumePage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div
        className={`w-full md:w-1/2 p-4 md:p-8 font-mono ${isDarkMode ? "bg-black text-white" : "bg-gray-100 text-black"}`}
      >
        {/* Header with particle background */}
        <div className="mb-8 md:mb-12 relative">
          
          {/* Header content on top of particles */}
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4 md:mb-8">
              <div className="relative">
                <a 
                  href="https://flvckz.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group text-base md:text-lg font-normal hover:opacity-70 transition-opacity"
                >
                  flvckz.xyz
                  <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 text-xs opacity-0 group-hover:opacity-85 transition-opacity whitespace-nowrap">
                    (&larr; loop here!)
                  </span>
                </a>
              </div>
              {/* Theme toggle button */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode ? "hover:bg-white/10" : "hover:bg-black/10"
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  // Sun icon for light mode
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                ) : (
                  // Moon icon for dark mode
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
            </div>
            <div className="mb-4 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold">FELIPE FLUCK</h2>
              <h3 className="text-sm md:text-lg font-normal">customer and software engineer</h3>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <h1 className="text-xl md:text-2xl font-bold hover:opacity-70 transition-opacity mb-2 md:mb-0">Experience</h1>
        <div className="mb-8 md:mb-12 space-y-1 text-sm md:text-base">
          <div className="flex flex-wrap md:flex-nowrap">
            <a
              href="https://rpost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 underline hover:opacity-70 transition-opacity"
            >
              RPost
            </a>
            <span className="mx-2">cse - qa</span>
            <span className="mx-2 md:mx-4">2025 → ....</span>
          </div>
          <div className="flex flex-wrap md:flex-nowrap">
            <a
              href="https://www.linkedin.com/company/aptimia/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 underline hover:opacity-70 transition-opacity"
            >
              Aptimia
            </a>
            <span className="mx-2">swe - qa</span>
            <span className="mx-2 md:mx-4">2023 → 2025</span>
          </div>
          <div className="flex flex-wrap md:flex-nowrap">
            <a
              href="https://www.linkedin.com/company/100773012/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 underline hover:opacity-70 transition-opacity"
            >
              Placey
            </a>
            <span className="mx-2">swe - qa</span>
            <span className="mx-2 md:mx-4">2022 → 2023</span>
          </div>
        </div>

        {/* Projects */}
        <Link href="/projects">
          <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap mb-4 hover:opacity-70 transition-opacity cursor-pointer">
            Projects <span className="text-xs md:text-sm opacity-85">(click here for detailed view!)</span>
          </h1>
        </Link>
        <div className="mb-8 md:mb-12 space-y-1 text-sm md:text-base">
          <div className="flex flex-wrap md:flex-nowrap">
            
            <a
              href="https://github.com/flvckz/polygram"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              Polygram
            </a>
            <span className="mx-2 md:mx-4">Polymarket integrated Telegram Bot - In progress...</span>
          </div>
          <div className="flex flex-wrap md:flex-nowrap">
            
            <a
              href="https://aster-strategy.gitbook.io/asterstrategy-docs/WJ8wnrTo3CVgyulPgXC6"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              AsterStrategy
            </a>
            <span className="mx-2 md:mx-4">Web3 Token Treasury @ asterstrategy.org</span>
          </div>
          <div className="flex flex-wrap md:flex-nowrap">
            <a
              href="https://github.com/flvckz/park-it-finalversion"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              Park-It
            </a>
            <span className="mx-2">Native Android App @ ORT Labs</span>
          </div>
          <div className="flex flex-wrap md:flex-nowrap">
            <a
              href="https://www.figma.com/proto/nu0yPkjvf4tCbseICysLHD/Real-Estate-Landing-1?node-id=3-27&starting-point-node-id=3%3A27&t=XOTOC5cGIl8twJrp-1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              RE Landing
            </a>
            <span className="mx-2">Landing Page @ Aptimia</span>
          </div>
          <div className="flex flex-wrap md:flex-nowrap">
            <a
              href="https://github.com/nosoyunbott/of-pro"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              Of-Pro
            </a>
            <span className="mx-2">SaaS @ ORT Labs</span>
          </div>
          <div className="flex flex-wrap md:flex-nowrap">
            <a
              href="https://github.com/flvckz/parcial-tp3"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              Adopt-a-Dog
            </a>
            <span className="mx-2">SaaS @ ORT Labs</span>
          </div>
        </div>

        {/* Education + Achievements Section */}
        <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap mb-4">
          Education <span className="text-xs md:text-sm opacity-85">(cs graduated!)</span>
        </h1>
        <div className="mb-16 md:mb-12 space-y-1 text-sm md:text-base">
          <div className="flex flex-wrap md:flex-nowrap">
            <a
              href="https://www.ort.edu.ar/carreras-terciarias/analista-sistemas-almagro"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              Bachelor's Degree - Systems Analyst
            </a>
            <span className="mx-2 md:mx-4">2024 graduated</span>
          </div>
          <div className="flex flex-wrap md:flex-nowrap">
            <a
              href="https://www.linkedin.com/in/felipefluckdev/details/education/1635517796295/single-media-viewer/?profileId=ACoAADR-76IBIPic3hSu0dbePICLIHhpjwkjXLQ"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              EF Set @Cape Town
            </a>
            <span className="mx-2">6 week ESL course</span>
          </div>
          <div className="flex"></div>
        </div>

        {/* Footer Links Section */}
        <div className="relative md:absolute md:bottom-8 md:left-8 pb-4 md:pb-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-base md:text-lg font-mono">
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

      {/* Dithering panel */}
      <div className="hidden md:block md:w-1/2 relative">
        <Dithering
          style={{ height: "100%", width: "100%" }}
          colorBack={isDarkMode ? "#000000" : "#f2f5f6"}
          colorFront={isDarkMode ? "#991fe0f5" : "#bb7000ff"}
          shape="warp"
          type="4x4"
          size={2.8}
          speed={0.28}
          scale={1.56}
          rotation={80}
          offsetX={-0.62}
        />
      </div>

      {/* Rotating Logo */}
      <div className="hidden md:block">
        <RotatingLogo isDarkMode={isDarkMode} />
      </div>
    </div>
  )
}