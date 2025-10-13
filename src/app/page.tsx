'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-cream">
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
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sage-green rounded-full"></div>
              <h1 className="text-lg font-semibold text-slate-900 tracking-tight">WILLIAM ZHAI</h1>
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Introduction */}
            <div className="animate-fade-in-up delay-100">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1]">
                Building products that{' '}
                <span className="text-sage-green">solve real problems</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Product manager and strategic thinker who bridges business strategy with technical execution.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#work"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-all duration-300 group"
                >
                  <span>View my work</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a 
                  href="mailto:wzhai.hba2026@ivey.ca"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg border border-slate-200 hover:border-sage-green hover:text-sage-green transition-all duration-300"
                >
                  <span>Contact me</span>
                </a>
              </div>
            </div>

            {/* Right: Experience Cards */}
            <div className="space-y-4 animate-fade-in-up delay-200">
              {/* Current Role - Featured */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-sage-green uppercase tracking-wider mb-2">Current</div>
                    <h3 className="text-3xl font-bold text-slate-900">Microsoft</h3>
                    <p className="text-lg text-slate-600 mt-2">Product Manager Intern</p>
                  </div>
                  <div className="w-12 h-12 bg-sage-green/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-sage-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-sage-green uppercase tracking-wider mb-2">Education</div>
                    <h4 className="font-semibold text-slate-900">Ivey Business School</h4>
                    <p className="text-sm text-slate-600 mt-1">HBA Candidate</p>
                  </div>
                  <div className="w-12 h-12 bg-sage-green/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-sage-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Previous Experience Compact */}
              <div className="bg-sage-green/5 rounded-2xl p-6 border border-sage-green/20">
                <div className="text-xs font-semibold text-sage-green uppercase tracking-wider mb-4">Previous Experience</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-900">EY-Parthenon</span>
                    <span className="text-sm text-slate-600">Summer Associate</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-900">Canadian Imperial Bank of Commerce</span>
                    <span className="text-sm text-slate-600">AI Strategy Intern</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-900">Will&apos;s Tutoring</span>
                    <span className="text-sm text-slate-600">Founder, $470K+ revenue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-fade-in-up delay-100">
            <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-4">
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Featured Work</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Case Studies & Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl">
              Deep dives into products I&apos;ve built, problems I&apos;ve solved, and lessons I&apos;ve learned.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 animate-fade-in-up delay-200">
            {/* Featured: Tutoring Platform */}
            <Link href="/tutoring-platform" className="group">
              <div className="relative rounded-3xl overflow-hidden h-[500px] flex flex-col justify-end p-8 transition-all duration-300 hover:scale-[1.02] border-2 border-sage-green">
              {/* Tutoring Platform Image */}
              <img 
                src="/images/tutoring-platform.svg"
                alt="Tutoring Platform Illustration"
                className="absolute inset-0 w-full h-full object-contain p-12"
              />
                {/* Sage Green Overlay */}
                <div className="absolute inset-0 bg-sage-green opacity-85"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-white uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                      Project
                    </span>
                    <span className="text-xs font-bold text-white uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                      2025
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                    Solving Operations for my Tutoring Business
                  </h3>
                  
                  <p className="text-white/90 mb-6">
                    Building a role-based platform that eliminated 95% of admin time while serving 100+ students
                  </p>

                  <div className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                    <span>Read project write-up</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Unified Calendar */}
            <Link href="/unified-calendar" className="group">
              <div className="relative rounded-3xl overflow-hidden h-[500px] flex flex-col justify-end p-8 transition-all duration-300 hover:scale-[1.02] border-2 border-sage-green">
              {/* Unified Calendar Image */}
              <img 
                src="/images/unified-calendar.svg"
                alt="Unified Calendar Illustration"
                className="absolute inset-0 w-full h-full object-contain p-12"
              />

                {/* Sage Green Overlay */}
                <div className="absolute inset-0 bg-sage-green opacity-85"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-white uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                      Project
                    </span>
                    <span className="text-xs font-bold text-white uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                      2025
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                    Building a Unified Calendar in a Day
                  </h3>
                  
                  <p className="text-white/90 mb-6">
                    A privacy-first calendar aggregator that solved my app-switching nightmare by unifying 4 calendars with zero authentication required
                  </p>

                  <div className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                    <span>Read project write-up</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Coming Soon */}
          <div className="mt-8 animate-fade-in-up delay-300">
            <div className="relative bg-slate-100 rounded-3xl overflow-hidden h-[500px] flex flex-col justify-end p-8 border-2 border-dashed border-slate-300">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-200 px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-slate-400 mb-3 leading-tight">
                  More Projects In Progress
                </h3>
                
                <p className="text-slate-500">
                  Currently working on new case studies and product explorations. Check back soon!
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}