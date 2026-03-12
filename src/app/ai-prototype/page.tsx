'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AIPrototypePage() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('context')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      const sections = ['context', 'solution', 'execution', 'reflection']
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
            { id: 'execution', label: 'Execution' },
            { id: 'reflection', label: 'Reflection' },
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
                <span className="text-sm text-sage-green font-medium">AI Prototype</span>
                <span className="text-sm text-slate-500">&bull;</span>
                <span className="text-sm text-slate-500">2026</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                What If My Tutoring Business Ran Itself?
                <br />
                <span className="text-sage-green">An AI-Native Prototype</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                Designing an AI agent layer to go from 100 to 1000.
              </p>
            </div>

            {/* Project Metadata */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Role</h4>
                <p className="font-medium text-slate-900">Designer</p>
                <p className="text-sm text-slate-600">&nbsp;</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Timeline</h4>
                <p className="font-medium text-slate-900">2026</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Stack</h4>
                <p className="font-medium text-slate-900">Next.js + Claude API</p>
                <p className="text-sm text-slate-600">TypeScript</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Outcome</h4>
                <p className="font-medium text-slate-900"> Prototype</p>
                <p className="text-sm text-slate-600">Autonomous ops + action queue</p>
              </div>
            </div>
          </div>

          {/* CONTEXT */}
          <section id="context" className="mb-20 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Context</h2>

            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed mb-6">
                For seven years, I was the sole operator of my tutoring business. I previously wrote about how I built a two-sided marketplace platform to automate the majority of the purely administrative tasks, saving me hours each week. You can find that write-up and demo <Link href="/tutoring-platform" className="text-sage-green hover:underline">here</Link>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                As a result of that build, I no longer needed to manually tutor-match or calculate payments, which allowed me to cleanly handle 100 students at a time. But having now left the business, I wondered how the business could have realistically scaled past that mark, leading me to ask: how could this business have become AI native?
              </p>
            </div>
          </section>

          {/* SOLUTION */}
          <section id="solution" className="mb-20 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Solution</h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-slate-600 leading-relaxed mb-6">
                When I was designing the system, I tried to conceptualize where the line between human involvement and AI execution should lie. Fundamentally, not everything requires the same level of human involvement; some decisions are pure logic, some need human judgment informed by data, and some should never be delegated. This led to a three-tier model of responsibility.
              </p>
            </div>

            {/* Three Tiers */}
            <div className="space-y-6 mb-10">
              {/* Tier 1 */}
              <div className="bg-sage-green/5 border border-sage-green/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-sage-green/20 rounded-full flex items-center justify-center">
                    <span className="text-sage-green font-semibold text-sm">1</span>
                  </div>
                  <h3 className="font-semibold text-slate-900">Autonomous Operations</h3>
                  <span className="text-xs text-sage-green bg-sage-green/10 px-2 py-1 rounded-full ml-auto">AI acts independently</span>
                </div>
                <p className="text-sm text-slate-600">
                  This includes payment reconciliation, payout processing, schedule conflict detection, and data integrity validation. These are purely logic-based decisions with clear right answers. If a parent&apos;s payment matches the invoice amount and lands on time, the system confirms it and moves on. If a tutor&apos;s schedule has a double-booking, the system flags and resolves it based on priority rules. For the baseline of the business, there is no human judgment needed day-to-day.
                </p>
              </div>

              {/* Tier 2 */}
              <div className="bg-amber-50/50 border border-amber-200/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-amber-700 font-semibold text-sm">2</span>
                  </div>
                  <h3 className="font-semibold text-slate-900">Action Queue</h3>
                  <span className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded-full ml-auto">AI analyzes, human decides</span>
                </div>
                <p className="text-sm text-slate-600">
                  With access to the full data layer, the agent is able to surface patterns that require judgment through a scan each day. This includes flags like attendance declines that signal churn risk, tutor capacity imbalances, cohort-level engagement drops, tutor quality issues from session feedback. For each, it provides the underlying data, a recommended response, and a pre-drafted communication. All the operator needs to do is review the analysis, determine whether or not to act, and make changes to the messaging as needed. AI gets 90% of the way there but the operator retains the judgement call.
                </p>
              </div>

              {/* Tier 3 */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-semibold text-slate-900">Human-Only</h3>
                  <span className="text-xs text-slate-600 bg-slate-200 px-2 py-1 rounded-full ml-auto">AI must stop</span>
                </div>
                <p className="text-sm text-slate-600">
                  Fundamentally, tutoring is built on relationships. Parents trust you to act in their child&apos;s best interest, tutors rely on fair and transparent processes, and both parties trust you&apos;ll act fairly as an administrator when their interests are sometimes opposed. So all human interactions carry emotional and reputation weight, and at the end of the day, that&apos;s what matters for retention. So for any concerns, escalations, that has to belong to a person.
                </p>
              </div>
            </div>
          </section>

          {/* EXECUTION */}
          <section id="execution" className="mb-20 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Execution</h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-slate-600 leading-relaxed mb-6">
                I built the prototype using Next.js, TypeScript, and the Claude API. The architecture is straightforward: a daily processing pipeline ingests the full business state (session logs, payment records, attendance data, tutor availability, and parent communications) and the agent works through it systematically.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                For Tier 1 operations, the agent executes autonomously and logs what it did. For Tier 2, it populates an action queue: each item includes the raw data, the pattern it detected, its confidence level, a recommended action, and a pre-drafted message ready for review. The operator opens the queue, reviews each item with full context, and approves, edits, or dismisses.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The goal is to 100x the human in the loop, and under this system, one person could realistically manage 1,000+ students. With the AI taking care of the bulk tasks, the human is left with about a dozen or so tickets that need the most attention.
              </p>
            </div>
          </section>

          {/* REFLECTION */}
          <section id="reflection" className="mb-20 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Reflection</h2>

            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed">
                I built this prototype to practice thinking about system design, and also to see what it really means for something to be AI-first. While I learned a lot about working with Claude&apos;s API, seeing how it interacted with the data layer, and the best way for users to interface with all of it, I also wondered... what does it really mean to be 100x?
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed">
                It&apos;s a fun thought experiment to think about &ldquo;how we can 10x, 100x&rdquo; a person&apos;s capability. However, while I&apos;m confident that the technical architecture in this case scales very cleanly, I&apos;m doubtful this would actually work in practice. When I worked with students and parents, I brought context from hours of phone calls, personalized teaching plans, and existing trust built over months. Tutoring is a relationship-based business, and that&apos;s how you can effect change. But if the business scales to 1,000 students, the operator is talking to parents they&apos;ve never spoken to about students they&apos;ve never met based entirely on the AI&apos;s analysis. At that point, the approval becomes performative more than effective. So realistically, the right approach isn&apos;t just automating more and more of the business. It&apos;s finding the sweet spot where you&apos;re maximizing the relationship context and allowing the human to apply their judgement as efficiently as possible.
              </p>
            </div>
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
              <a
                href="https://wz-system-demo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage-green text-white px-6 py-2 rounded hover:bg-sage-green/90 transition-colors inline-flex items-center"
              >
                View Live Demo &rarr;
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
