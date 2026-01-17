'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function UnifiedCalendarPage() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('context')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Update active section based on scroll position
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
                <span className="text-sm text-sage-green font-medium">Project</span>
                <span className="text-sm text-slate-500">•</span>
                <span className="text-sm text-slate-500">2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Building a calendar for
                <span className="text-sage-green"> work, school, and life</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                A one-day sprint to solve my own coordination nightmare: aggregating school, work, and personal calendars into a single view with privacy-first architecture.
              </p>
            </div>

            {/* Project Metadata */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Role</h4>
                <p className="font-medium text-slate-900">Solo Developer</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Timeline</h4>
                <p className="font-medium text-slate-900">1 Day</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Stack</h4>
                <p className="font-medium text-slate-900">Next.js + ICS</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Outcome</h4>
                <p className="font-medium text-slate-900">4 Calendars Unified</p>
              </div>
            </div>
          </div>

          {/* CONTEXT (merged Overview + Context) */}
          <section id="context" className="mb-16 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Context</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-slate-600 leading-relaxed mb-6">
                Going into my fourth year, I found myself busier than ever. I was juggling full-time work at Microsoft, coordinating my tutoring business, and running my consulting club, all while being a full-time student at Ivey.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The problem wasn&apos;t the workload. It was that my previously effective time management strategies completely broke down at this load. Each commitment lived in its own silo: Google Calendar for personal life, Microsoft Outlook for work, Outlook again for Ivey, and Notion for tutoring schedules.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Just a month in, I found myself constantly thinking about meeting times. I&apos;d try to book a meeting thinking I was free, then have to double check all my calendars only to realize I&apos;d double booked. The mental load of maintaining separate context for each calendar was a constant drain.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I needed a way to see everything at once. I tried to move everything into Google Calendar using ICS feeds, but this created its own problems. I could only import as read-only, and I couldn&apos;t make quick edits or hide events.
              </p>
            </div>

            {/* Problem Visualization */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 mb-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">The App-Switching Problem</h3>
                <p className="text-sm text-slate-500">Managing four different calendar systems simultaneously</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-4">Daily Workflow Reality</h4>
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>Check Google Calendar for personal commitments</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>Switch to Outlook for Microsoft work meetings</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>Open my work Outlook for Ivey classes</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>Check Notion for tutoring schedules</span>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-4">The Consequences</h4>
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>5-10 minutes daily just checking calendars</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>Constantly thinking about missed meetings</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>No clear picture of actual availability</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SOLUTION */}
          <section id="solution" className="mb-16 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Solution</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                A local-first calendar aggregator with optional cloud integration
              </h3>
              <p className="text-slate-600 leading-relaxed">
                I needed to build my own solution. The must-haves: an aggregated view of all of my calendars, updating in-real time, and the ability to organize events. 
              </p>
            </div>

            {/* Calendar Mockup */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                  <div>
                    <h4 className="font-semibold text-slate-900">Unified Calendar View</h4>
                    <p className="text-sm text-slate-500">All calendars in one place</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                    <span className="text-sm text-slate-600">4 sources</span>
                  </div>
                </div>
                
                {/* Sample Events */}
                <div className="space-y-2 mb-6">
                  <div className="bg-blue-100 border-l-4 border-blue-500 p-3 rounded">
                    <div className="font-medium text-blue-900 text-sm">Microsoft Team Sync</div>
                    <div className="text-xs text-blue-700">Outlook • 10:00 AM</div>
                  </div>
                  <div className="bg-purple-100 border-l-4 border-purple-500 p-3 rounded">
                    <div className="font-medium text-purple-900 text-sm">Ivey Class</div>
                    <div className="text-xs text-purple-700">School • 5:00 PM</div>
                  </div>
                  <div className="bg-green-100 border-l-4 border-green-500 p-3 rounded">
                    <div className="font-medium text-green-900 text-sm">Gym</div>
                    <div className="text-xs text-green-700">Personal • 7:00 PM</div>
                  </div>
                </div>
                
                {/* Calendar Sources */}
                <div className="pt-4 border-t border-slate-200">
                  <h5 className="text-xs font-medium text-slate-900 mb-3">Active Calendars</h5>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-blue-900">Microsoft Outlook</span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-900">Google Calendar</span>
                    </div>
                    <div className="flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-xs text-purple-900">Ivey School</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm italic text-slate-400 mt-4 text-center">
                Note: This view is an illustrative mockup. The actual app can be demo&apos;d at <a href="https://unified-calendar.vercel.app" className="text-sage-green hover:underline">unified-calendar.vercel.app</a>
              </p>
            </div>
          </section>

          {/* EXECUTION */}
          <section id="execution" className="mb-16 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Execution</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-slate-600 leading-relaxed">
                I challenged myself to build this in a single day. The architecture ended up being three layers: calendar sources (ICS feeds, Google Calendar API), a processing layer for CORS proxying and ICS parsing, and client-side storage with React Big Calendar for rendering.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              {/* Phase 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <span className="text-slate-600 font-semibold text-sm">01</span>
                </div>
                <div className="flex-1 pb-8 border-b border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-slate-900">Authentication & Google Calendar</h3>
                    <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Morning</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Started with NextAuth setup and Google Calendar API integration. Got the OAuth flow working and successfully fetched events. Initial approach required authentication to use the app—seemed like the right pattern since I was already using Google&apos;s API.
                  </p>
                  <p className="text-sm text-slate-600 mb-4">
                    First OAuth attempt didn&apos;t include calendar scope. Had to reconfigure NextAuth and re-authorize. Small issue, but a good reminder to verify scopes upfront.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">NextAuth</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">OAuth 2.0</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Google Calendar API</span>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-sage-green/10 rounded-full flex items-center justify-center">
                  <span className="text-sage-green font-semibold text-sm">02</span>
                </div>
                <div className="flex-1 pb-8 border-b border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-slate-900">The Microsoft OAuth Roadblock</h3>
                    <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Midday</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Hit a wall with Microsoft Graph API. My work and school accounts are organizational tenants that require admin approval for third-party OAuth apps. This would take weeks to get approved—if ever.
                  </p>
                  <p className="text-sm text-slate-600 mb-4">
                    Realized both Outlook and Google Calendar offer ICS feed URLs that update in real-time. These don&apos;t require OAuth—just a URL. Pivoted the entire architecture to be ICS-first with optional Google auth for enhanced features.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Architecture Pivot</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">ICS Feeds</span>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-sage-green/10 rounded-full flex items-center justify-center">
                  <span className="text-sage-green font-semibold text-sm">03</span>
                </div>
                <div className="flex-1 pb-8 border-b border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-slate-900">ICS Integration & CORS</h3>
                    <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Afternoon</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    ICS feeds can&apos;t be fetched directly from the browser due to CORS restrictions. Created an API route that fetches ICS feeds server-side and passes them to the client, bypassing CORS entirely. Used ical.js to parse the feeds, including handling recurring events (RRULE).
                  </p>
                  <p className="text-sm text-slate-600 mb-4">
                    Built calendar source management UI: add by URL, assign custom colors, toggle on/off. All preferences persist in localStorage, so they survive page refreshes without needing a backend.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Server-side Proxy</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">ical.js</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">localStorage</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">RRULE</span>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-sage-green rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">04</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-slate-900">UX Polish & Advanced Features</h3>
                    <span className="text-xs text-white bg-sage-green px-3 py-1 rounded-full">Evening</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Added the ability to hide individual events (a feature I desperately needed for colleagues&apos; OOO notifications). Right-click any event to hide it. Event IDs stored in localStorage and filtered client-side before rendering. Used Set for O(1) lookup performance when filtering thousands of events.
                  </p>
                  <p className="text-sm text-slate-600 mb-4">
                    Overlapping events with transparency were hard to distinguish. Removed opacity, added 2px white borders between events. Also fixed a bug where different ICS calendars had events with identical UIDs, causing duplicate React keys—fixed by prefixing event IDs with feed ID.
                  </p>
                  <p className="text-sm text-slate-600 mb-4">
                    The final architecture is privacy-first: the app works completely offline after initial load. No data leaves your browser unless you explicitly enable Google Calendar integration. All preferences stored locally.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Hide Events</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">React Big Calendar</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Local-first</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Deploy</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* REFLECTION (merged Results + Reflection) */}
          <section id="reflection" className="mb-16 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Reflection</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-slate-600 leading-relaxed mb-6">
                The app completely solved my calendar coordination problem. I now see all my commitments in one place, can quickly identify free time, and haven&apos;t double-booked myself since launch. The privacy-first architecture means I can use it without worrying about data sharing, and the ability to hide annoying events was a hugely needed quality-of-life improvement.
              </p>
            </div>

            {/* Key Learnings */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-3">Complex isn't always better</h3>
                <p className="text-sm text-slate-600">
                  My initial instinct was that a 'serious' app needed auth. But not every app needs a login wall - here, the best user experience is immediate functionality. 
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-3">Be adaptable</h3>
                <p className="text-sm text-slate-600">
                  The Microsoft OAuth roadblock forced me to leverage ICS feeds. Unexpected complications happen, and they can be useful to help find another way.
                </p>
              </div>

            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-slate-200 pt-8">
            <div className="flex justify-between items-center">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-slate-600 hover:text-slate-900 flex items-center"
              >
                ← Back to top
              </button>
              <a 
                href="https://unified-calendar.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage-green text-white px-6 py-2 rounded hover:bg-sage-green/90 transition-colors inline-flex items-center"
              >
                View Live Demo →
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}