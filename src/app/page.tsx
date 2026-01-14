'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const caseStudies = [
  {
    id: 'tutoring-platform',
    title: 'Can I Make My Tutoring Business Run Itself?',
    year: '2025',
    href: '/tutoring-platform',
    bgColor: 'bg-[#2E4C3C]',
    textColor: 'text-white',
  },
  {
    id: 'unified-calendar',
    title: 'Building a Calendar for Work, School, and Life',
    year: '2025',
    href: '/unified-calendar',
    bgColor: 'bg-sage-green',
    textColor: 'text-white',
  },
  {
    id: 'project-3',
    title: 'Simplifying Group Trip Planning - Write Up Soon',
    year: '2026',
    href: '#',
    bgColor: 'bg-[#5a7c6f]',
    textColor: 'text-white',
  },
  {
    id: 'coming-soon',
    title: 'More Coming Soon!',
    year: '',
    href: '#',
    bgColor: 'bg-white border-2 border-slate-200',
    textColor: 'text-slate-400',
  },
]

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)
  const [rotationOffset, setRotationOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Stacking - adjusted for viewport fitting
  const stackPositions = [
    { rotation: 0, offsetX: 0, offsetY: 0 },
    { rotation: 5, offsetX: 10, offsetY: -70 },
    { rotation: -4, offsetX: -7, offsetY: -140 },
    { rotation: 6, offsetX: 12, offsetY: -210 },
  ]

  const getCardPosition = (cardIndex: number) => {
    const totalCards = caseStudies.length
    const position = (cardIndex - rotationOffset + totalCards) % totalCards
    return position
  }

  const getCardStyle = (cardIndex: number) => {
    const position = getCardPosition(cardIndex)
    const pos = stackPositions[position]
    
    return {
      transform: `rotate(${pos.rotation}deg) translate(${pos.offsetX}px, ${pos.offsetY}px)`,
      zIndex: 100 - position,
    }
  }

  const goToNext = () => {
    setRotationOffset((prev) => (prev + 1) % caseStudies.length)
  }

  const goToPrev = () => {
    setRotationOffset((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden bg-cream">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
      `}} />

      {/* Floating Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 lg:py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sage-green rounded-full"></div>
              <span className="text-lg font-semibold text-slate-900 tracking-tight">WILLIAM ZHAI</span>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/zhw16-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/wzhai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-600 transition-colors flex items-center gap-1.5"
                aria-label="Resume"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm font-medium">Resume</span>
              </a>
            </div>
          </div>
          <a 
            href="mailto:wzhai.hba2026@ivey.ca" 
            className="text-sm text-slate-600 hover:text-sage-green transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </header>

      {/* Main Content - viewport constrained on desktop */}
      <main className="pt-24 pb-20 px-6 lg:px-12 lg:h-screen lg:flex lg:items-center lg:pt-16 lg:pb-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Hero + Info Cards */}
            <div>
              {/* Hero Text */}
              <div className="mb-6 lg:mb-8 animate-fade-in-up pl-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-600 leading-[1.2]">
                  Hi, I&apos;m <span className="text-sage-green">Will!</span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-500 mt-2">
                  Product & Strategy
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-3 animate-fade-in-up delay-200">
                {/* Current Role */}
                <div className="bg-white rounded-2xl p-4 lg:p-5 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-sage-green uppercase tracking-wider mb-1">Current</div>
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900">Microsoft</h3>
                      <p className="text-sm lg:text-base text-slate-600">Product Manager Intern</p>
                    </div>
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-sage-green/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-sage-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="bg-white rounded-2xl p-4 lg:p-5 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-sage-green uppercase tracking-wider mb-1">Education</div>
                      <h4 className="font-semibold text-slate-900">Ivey Business School</h4>
                      <p className="text-sm text-slate-600">HBA Candidate</p>
                    </div>
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-sage-green/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-sage-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Previous Experience */}
                <div className="bg-sage-green/5 rounded-2xl p-4 lg:p-5 border border-sage-green/20">
                  <div className="text-xs font-semibold text-sage-green uppercase tracking-wider mb-3">Previous Experience</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-900 text-sm">EY-Parthenon</span>
                      <span className="text-xs text-slate-600">Strategy Summer Associate</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-900 text-sm">Canadian Imperial Bank of Commerce</span>
                      <span className="text-xs text-slate-600">AI Strategy Intern</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-900 text-sm">Will&apos;s Tutoring</span>
                      <span className="text-xs text-slate-600">Founder ($500k revenue)</span>
                    </div>
                  </div>
                </div>

                {/* Projects CTA */}
                <div className="hidden lg:flex items-center gap-2 text-slate-500 pt-2 pl-2">
                  <span className="text-sm">Check out my case studies</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column: Stacked Case Study Cards */}
            <div>
              {/* Section header - mobile only */}
              <div className="lg:hidden text-xs font-semibold text-slate-500 uppercase tracking-wider mb-6">
                Case Studies
              </div>
              
              {/* Stacked cards */}
              <div className="animate-fade-in-up delay-300">
                {/* Card Stack Container */}
                <div className="flex justify-center pt-52 lg:pt-48 pb-4">
                  <div 
                    className="relative"
                    style={{ 
                      width: 'min(240px, 65vw)', 
                      height: 'min(320px, 85vw)',
                    }}
                  >
                    {caseStudies.map((study, index) => {
                      const style = getCardStyle(index)
                      
                      return (
                        <Link
                          key={study.id}
                          href={study.href}
                          onClick={(e) => {
                            if (study.href === '#') {
                              e.preventDefault()
                            }
                          }}
                          className="absolute inset-0 group cursor-pointer"
                          style={{
                            transform: style.transform,
                            transformOrigin: 'center bottom',
                            zIndex: style.zIndex,
                            transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement
                            const position = getCardPosition(index)
                            el.style.transform = `${style.transform} scale(1.03)`
                            if (position === 0) {
                              el.style.zIndex = '150'
                            }
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement
                            el.style.transform = style.transform
                            el.style.zIndex = String(style.zIndex)
                          }}
                        >
                          <div 
                            className={`
                              ${study.bgColor} 
                              rounded-2xl p-5 w-full h-full 
                              flex flex-col justify-between 
                              transition-shadow duration-300
                              shadow-2xl
                            `}
                            style={{
                              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 12px 24px -8px rgba(0, 0, 0, 0.3)',
                            }}
                          >
                            {/* Top: Title */}
                            <div>
                              <h3 className={`text-lg lg:text-xl font-bold ${study.textColor} leading-tight`}>
                                {study.title}
                              </h3>
                            </div>
                            
                            {/* Bottom: Tag + CTA */}
                            <div>
                              {study.year && (
                                <span className={`text-xs font-medium ${study.textColor} opacity-70 uppercase tracking-wider`}>
                                  Project · {study.year}
                                </span>
                              )}
                              {study.href !== '#' && (
                                <div className={`flex items-center gap-2 ${study.textColor} font-medium group-hover:gap-3 transition-all mt-3`}>
                                  <span className="text-sm">Read Write-Up</span>
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                  </svg>
                                </div>
                              )}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Arrow Navigation */}
                <div className="flex justify-center items-center gap-6 mt-4">
                  <button
                    onClick={goToPrev}
                    className="w-9 h-9 rounded-full border-2 border-slate-300 flex items-center justify-center hover:border-sage-green hover:text-sage-green transition-colors text-slate-400"
                    aria-label="Previous card"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  {/* Position indicator */}
                  <div className="flex gap-2">
                    {caseStudies.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          getCardPosition(index) === 0 ? 'bg-sage-green' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={goToNext}
                    className="w-9 h-9 rounded-full border-2 border-slate-300 flex items-center justify-center hover:border-sage-green hover:text-sage-green transition-colors text-slate-400"
                    aria-label="Next card"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}