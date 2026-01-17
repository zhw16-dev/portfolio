'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function PinterestCasePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link 
            href="/" 
            className="text-slate-600 hover:text-sage-green transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/zhw16-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sage-green transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/wzhai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sage-green transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="/Will_Zhai_Resume.pdf" 
              target="_blank"
              className="text-slate-400 hover:text-sage-green transition-colors text-sm font-medium"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 bg-sage-green/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-sage-green rounded-full"></div>
              <span className="text-sm text-sage-green font-medium">Project</span>
              <span className="text-sm text-slate-500">•</span>
              <span className="text-sm text-slate-500">2025</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Going from Solving Cases to <span className="text-sage-green">Writing One</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Stepping behind the curtain to experience the other side of case-based learning. 
            </p>
          </div>

          {/* Project Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Role</h4>
              <p className="font-medium text-slate-900">Case Author</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Timeline</h4>
              <p className="font-medium text-slate-900">Fall 2025</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Supervisor</h4>
              <p className="font-medium text-slate-900">Prof. Mengxia Zhang</p>
            </div>
          </div>

          {/* CONTEXT */}
          <section id="context" className="mb-16 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Context</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                Ivey&apos;s case method is one of the program&apos;s main selling points. Every class, you&apos;re handed a business scenario and asked to think like the decision-maker. Going into my final year, I got the chance to understand what went into creating one.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Working with Professor Zhang, I chose to write a case suitable for the HBA1 Marketing class. I picked Pinterest&apos;s major downswing in 2022 from pandemic highs. With the arrival of new CEO Bill Ready, the company was caught between two identities—on one hand trying to compete with TikTok and Reels for user attention, but on the other trying to commercialize into a shopping platform.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The company had invested heavily in both directions, making it a real dilemma forcing students to think about platform strategy, differentiation, and competitive positioning, particularly when you&apos;re a smaller player.
              </p>
            </div>
          </section>

          {/* REFLECTION */}
          <section id="reflection" className="mb-16 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Reflection</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed">
                Beyond what it aims to teach students, the writing process taught me a lot too. In one word, I&apos;d summarize it as <span className="font-medium text-slate-800">intentionality</span>. How could I present the information so it was thought-provoking but unbiased? Between earnings calls, SEC filings, company announcements, and news articles, what sources were reliable? And between the market context, competitors, financial data, the executive comments, the product launches, what level of detail was appropriate? Every section needed to have a purpose, and distilling down to what matters most was the biggest throughline of the case writing process.
              </p>
            </div>
          </section>

          {/* READ THE CASE */}
          <section id="case" className="mb-16 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Read the Case</h2>

            {/* Download Card */}
            <a 
              href="/Pinterest_Identity_Crisis.pdf" 
              target="_blank"
              className="block bg-[#2E4C3C] hover:bg-[#243d30] transition-colors rounded-lg p-8 text-white group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pinterest&apos;s Identity Crisis</h3>
                  <p className="text-white/80 text-sm">
                    Full case study · PDF · 11 pages
                  </p>
                </div>
                <div className="flex items-center gap-2 text-white/80 group-hover:text-white group-hover:gap-3 transition-all">
                  <span className="text-sm font-medium">Read Case</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </a>
          </section>

          {/* Footer Navigation */}
          <div className="pt-8 border-t border-slate-200 flex justify-between items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-slate-500 hover:text-sage-green transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to top
            </button>
            
            <Link
              href="/"
              className="bg-sage-green hover:bg-sage-green/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              View Other Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </main>
    </div>
  )
}