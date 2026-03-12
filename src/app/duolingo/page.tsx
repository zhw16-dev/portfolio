'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function DuolingoPage() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('context')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      const sections = ['context', 'solution', 'impact']
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
          </div>
        </div>
      </header>

      {/* Sidebar Navigation - Hidden on mobile */}
      <aside className="hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
        <nav className="flex flex-col gap-3">
          {[
            { id: 'context', label: 'Context' },
            { id: 'solution', label: 'Solution' },
            { id: 'impact', label: 'Impact' },
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-left text-sm transition-all duration-300 ${
                activeSection === section.id
                  ? 'text-sage-green font-medium translate-x-2'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex">
        <main className="flex-1 max-w-5xl mx-auto px-6 pt-32 pb-20">
          {/* Case Study Header */}
          <div className="mb-16">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 bg-sage-green/10 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                <span className="text-sm text-sage-green font-medium">Product Strategy</span>
                <span className="text-sm text-slate-500">&bull;</span>
                <span className="text-sm text-slate-500">2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Reimagining Streak Loss:
                <br />
                <span className="text-sage-green">A Duolingo Feature Concept</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                Designing a forgiveness mechanism that turns Duolingo&apos;s biggest quit trigger into a re-engagement opportunity.
              </p>
            </div>

            {/* Project Metadata */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Type</h4>
                <p className="font-medium text-slate-900">Case Study</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Timeline</h4>
                <p className="font-medium text-slate-900">2025</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Focus</h4>
                <p className="font-medium text-slate-900">Retention, Monetization</p>
              </div>
            </div>
          </div>

          {/* CONTEXT */}
          <section id="context" className="mb-20 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Context</h2>

            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed mb-6">
                I&apos;ve been a Duolingo user for years, and the streak mechanism is one of the best product innovations for retention I&apos;ve ever seen. But because users get so attached to their streaks, any streak lapse becomes an incredibly powerful lapse trigger. The reaction is always disproportionate: someone who&apos;s been learning daily for six months will just stop entirely, not because they lost interest in the language, but because starting over from zero feels pointless.
              </p>
            </div>

            {/* Quote Box */}
            <div className="bg-slate-50 border-l-4 border-sage-green rounded-r-xl p-6 mb-10">
              <p className="text-slate-700 italic leading-relaxed">
                &ldquo;I was at 185 days when I forgot for a weekend. You&apos;re not getting me to start over.&rdquo;
              </p>
              <p className="text-sm text-slate-500 mt-2">&mdash; A friend who refuses to start a friend streak with me</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                That emotional response is worth looking into from a product perspective. As of 2024, Duolingo had nearly 8 million users maintaining streaks over a year. But the existing features to mitigate or fix this feel weak. Streak Freeze prevents the loss, and Streak Repair lets you pay to prevent it. But neither really addresses the emotional moment or gets the user to re-engage with the core product, and neither are able to fix streak loss past 48 hours.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The question I wanted to work through: could you design a better recovery mechanism that was slightly more forgiving to improve retention, while still leveraging the same loss aversion that makes streaks work in the first place?
              </p>
            </div>
          </section>

          {/* SOLUTION */}
          <section id="solution" className="mb-20 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Solution</h2>

            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed mb-6">
                The concept I landed on was a time-bound challenge: complete 3 path lessons within 72 hours to fully restore your original streak. I called it the Phoenix Challenge. The constraints I set for myself were that it had to require real learning (not a payment), it had to feel urgent but not punishing, and it couldn&apos;t undermine the value of streaks for users who never lost theirs.
              </p>
            </div>

            {/* User Journey */}
            <h3 className="text-xl font-semibold text-slate-900 mb-6">The User Journey</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <div className="bg-sage-green/5 border border-sage-green/20 rounded-xl p-5">
                <div className="w-8 h-8 bg-sage-green/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-sage-green font-semibold text-sm">1</span>
                </div>
                <h4 className="font-medium text-slate-900 mb-2">Push Notification</h4>
                <p className="text-sm text-slate-600">Sent at the user&apos;s optimal engagement time to maximize open rate.</p>
              </div>
              <div className="bg-sage-green/5 border border-sage-green/20 rounded-xl p-5">
                <div className="w-8 h-8 bg-sage-green/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-sage-green font-semibold text-sm">2</span>
                </div>
                <h4 className="font-medium text-slate-900 mb-2">Opt-in Modal</h4>
                <p className="text-sm text-slate-600">Full-screen modal with explicit requirements so the user knows exactly what&apos;s expected.</p>
              </div>
              <div className="bg-sage-green/5 border border-sage-green/20 rounded-xl p-5">
                <div className="w-8 h-8 bg-sage-green/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-sage-green font-semibold text-sm">3</span>
                </div>
                <h4 className="font-medium text-slate-900 mb-2">Progress Banner</h4>
                <p className="text-sm text-slate-600">Persistent banner with a live countdown during the 72-hour challenge window.</p>
              </div>
              <div className="bg-sage-green/5 border border-sage-green/20 rounded-xl p-5">
                <div className="w-8 h-8 bg-sage-green/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-sage-green font-semibold text-sm">4</span>
                </div>
                <h4 className="font-medium text-slate-900 mb-2">Celebration</h4>
                <p className="text-sm text-slate-600">Streak restored with a celebration screen and a soft subscription upsell.</p>
              </div>
            </div>

            {/* Design Trade-offs */}
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Design Trade-offs</h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                The trickiest decisions were around eligibility and frequency. Making the challenge too accessible would devalue streaks; if anyone could recover at any time, the streak loses its meaning. Making it too rare would feel arbitrary and wouldn&apos;t actually solve the churn problem. Once per year for free users and monthly for subscribers felt like the right balance: rare enough to feel meaningful, frequent enough to be a genuine conversion lever.
              </p>
              <p className="text-slate-600 leading-relaxed">
                It should also replace the existing Streak Repair feature entirely. Repair was too passive: the user makes a one-off payment, the streak comes back, that&apos;s it. By replacing it with a challenge, we force the user to re-engage with the core loop they enjoy. And it also creates a nice subscription upsell opportunity rather than a one-off payment.
              </p>
            </div>
          </section>

          {/* IMPACT */}
          <section id="impact" className="mb-20 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Impact</h2>

            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed mb-6">
                To pressure-test whether this was worth building, I did some quick impact estimates. Because I expected improvements to retention and monetization, I modeled impact on DAU, corresponding subscription revenue saved, and also an estimate on revenue uplift from additional conversions. While the numbers are rough, a conservative estimate projected to save 40K DAU and generate over a million in additional revenue yearly. Not bad for a simple feature!
              </p>
              <p className="text-slate-600 leading-relaxed">
                To find the full projections, alongside user flows, UI mockups, A/B testing design, edge cases and more, you can read the deck below.
              </p>
            </div>
          </section>

          {/* READ THE DECK */}
          <section id="deck" className="mb-16 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Read the Deck</h2>

            {/* Download Card */}
            <a
              href="/Duolingo_Phoenix_Challenge.pdf"
              target="_blank"
              className="block bg-[#2E4C3C] hover:bg-[#243d30] transition-colors rounded-lg p-8 text-white group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">The Phoenix Challenge</h3>
                  <p className="text-white/80 text-sm">
                    Full feature presentation deck · PDF · 5 slides
                  </p>
                </div>
                <div className="flex items-center gap-2 text-white\80 group-hover:text-white group-hover:gap-3 transition-all">
                  <span className="text-sm font-medium">Read Deck</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </a>
          </section>

          {/* Footer */}
          <div className="border-t border-slate-200 pt-8">
            <div className="flex justify-between items-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-slate-600 hover:text-slate-900 flex items-center"
              >
                &larr; Back to top
              </button>
              <Link
                href="/"
                className="bg-sage-green text-white px-6 py-2 rounded hover:bg-sage-green/90 transition-colors inline-flex items-center"
              >
                View Other Projects &rarr;
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
