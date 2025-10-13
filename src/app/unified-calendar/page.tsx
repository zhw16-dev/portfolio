'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function UnifiedCalendarPage() {
  const [activeSection, setActiveSection] = useState('overview')
  const [showSidebar, setShowSidebar] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Smooth scrolling function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      const sections = ['overview', 'context', 'solution', 'execution', 'results', 'reflection']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPosition && 
            element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section)
          break
        }
      }
      
      setShowSidebar(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'context', label: 'Context' },
    { id: 'solution', label: 'Solution' },
    { id: 'execution', label: 'Execution' },
    { id: 'results', label: 'Results' },
    { id: 'reflection', label: 'Reflection' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white border-b border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-2 h-2 bg-sage-green rounded-full"></div>
              <h1 className="text-lg font-semibold text-slate-900 tracking-tight">WILLIAM ZHAI</h1>
            </Link>
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

      {/* Case Study Section */}
      <div className="flex pt-20">
        {/* Sidebar Navigation */}
        <aside className="hidden xl:block xl:w-64 xl:fixed xl:left-0 xl:top-24 xl:h-[calc(100vh-6rem)] xl:z-40">
          <div className={`transition-all duration-300 ${
            showSidebar ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="p-6">
              <div className="mb-6">
                <Link 
                  href="/"
                  className="text-sm text-slate-500 hover:text-slate-700 flex items-center"
                >
                  ← Back to Portfolio
                </Link>
              </div>
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                      activeSection === item.id 
                        ? 'bg-sage-green text-white' 
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Case Study Content */}
        <main className="flex-1 max-w-5xl mx-auto p-6 lg:p-12">
          {/* Case Study Header */}
          <div className="mb-16">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 bg-sage-green/10 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                <span className="text-sm text-sage-green font-medium">Personal Project</span>
                <span className="text-sm text-slate-500">•</span>
                <span className="text-sm text-slate-500">2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Building a unified calendar in a day because
                <span className="text-sage-green"> calendar app-switching</span> was not working out
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                A one-day sprint to solve my own coordination nightmare: aggregating school, work, and personal calendars into a single view with privacy-first architecture.
              </p>
            </div>
          </div>

          {/* Project Details in Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">My Role</h4>
              <div className="space-y-2">
                <p className="font-medium text-slate-900">Solo Developer</p>
                <p className="text-sm text-slate-600">End-to-end</p>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">Duration</h4>
              <div className="space-y-2">
                <p className="font-medium text-slate-900">One Day Sprint</p>
                <p className="text-sm text-slate-600">October 2025</p>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">Impact</h4>
              <div className="space-y-2">
                <p className="font-medium text-slate-900">Eliminated App-Switching</p>
                <p className="text-sm text-slate-600">Daily productivity win</p>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">Tech Stack</h4>
              <div className="space-y-2">
                <p className="font-medium text-slate-900">Next.js + TypeScript</p>
                <p className="text-sm text-slate-600">React Big Calendar</p>
              </div>
            </div>
          </div>

          {/* Project Showcase */}
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Unified Calendar View</h3>
              <p className="text-sm text-slate-600">All calendars, one interface</p>
            </div>
            
            {/* Calendar Demo Mockup */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-4">
                    <h4 className="font-semibold text-slate-900">October 2024</h4>
                    <div className="flex gap-2">
                      <button className="text-sm px-3 py-1 bg-sage-green text-white rounded">Week</button>
                      <button className="text-sm px-3 py-1 text-slate-600 hover:bg-slate-100 rounded">Month</button>
                      <button className="text-sm px-3 py-1 text-slate-600 hover:bg-slate-100 rounded">Day</button>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-sm text-slate-600">← Prev</button>
                    <button className="text-sm px-3 py-1 border border-slate-300 rounded">Today</button>
                    <button className="text-sm text-slate-600">Next →</button>
                  </div>
                </div>
                
                {/* Calendar Grid - Week View Simulation */}
                <div className="space-y-3">
                  {/* Time slots with events */}
                  <div className="grid grid-cols-8 gap-2 text-xs">
                    <div className="text-slate-500 text-right pr-2">9:00 AM</div>
                    <div></div>
                    <div className="bg-blue-100 border-l-4 border-blue-500 p-2 rounded col-span-2">
                      <div className="font-medium text-blue-900">Microsoft Team Sync</div>
                      <div className="text-blue-700">Outlook</div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  
                  <div className="grid grid-cols-8 gap-2 text-xs">
                    <div className="text-slate-500 text-right pr-2">1:00 PM</div>
                    <div></div>
                    <div></div>
                    <div className="bg-purple-100 border-l-4 border-purple-500 p-2 rounded">
                      <div className="font-medium text-purple-900">Ivey Class</div>
                      <div className="text-purple-700">School</div>
                    </div>
                    <div></div>
                    <div className="bg-green-100 border-l-4 border-green-500 p-2 rounded">
                      <div className="font-medium text-green-900">Gym</div>
                      <div className="text-green-700">Personal</div>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                  
                  <div className="grid grid-cols-8 gap-2 text-xs">
                    <div className="text-slate-500 text-right pr-2">4:00 PM</div>
                    <div className="bg-blue-100 border-l-4 border-blue-500 p-2 rounded">
                      <div className="font-medium text-blue-900">1:1 Meeting</div>
                      <div className="text-blue-700">Outlook</div>
                    </div>
                    <div></div>
                    <div></div>
                    <div className="bg-purple-100 border-l-4 border-purple-500 p-2 rounded col-span-2">
                      <div className="font-medium text-purple-900">Consulting Club</div>
                      <div className="text-purple-700">School</div>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                
                {/* Calendar Sources */}
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <h5 className="text-xs font-medium text-slate-900 mb-3">Active Calendars</h5>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-blue-900">Microsoft Outlook</span>
                      <button className="text-blue-700 hover:text-blue-900">×</button>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-900">Google Calendar</span>
                      <button className="text-green-700 hover:text-green-900">×</button>
                    </div>
                    <div className="flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-xs text-purple-900">Ivey School</span>
                      <button className="text-purple-700 hover:text-purple-900">×</button>
                    </div>
                    <button className="text-xs text-sage-green border border-sage-green px-3 py-1 rounded-full hover:bg-sage-green/10">
                      + Add Calendar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Demo Mockup */}
            <div className="max-w-4xl mx-auto">
              {/* Add this caption */}
              <p className="text-sm italic text-slate-600 mt-4 text-center">
                Note: This is a design mockup for demonstration purposes.
              </p>
            </div>
          </div>



          {/* Overview Section */}
          <section id="overview" className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase text-xs tracking-wide">Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                Going into my fourth year, I found myself busier than ever. I was juggling full-time work at Microsoft, coordinating my tutoring business, and running my consulting club, all while being a full-time student at Ivey.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The problem wasn't the workload itself. It was that my previously effective time management strategies completely broke down at this load. Each commitment lived in its own silo: Google Calendar for personal life, Microsoft Outlook for work, Outlook again for Ivey, and Notion for tutoring schedules.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Just a month in, I found myself constantly thinking about meeting times. I'd try to book a meeting thinking I was free, then have to double check all my calendars only to realize I'd double booked. The mental load of maintaining separate context for each calendar was a constant drain.
              </p>
            </div>
          </section>

          {/* Context Section */}
          <section id="context" className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase text-xs tracking-wide">Context</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                The coordination challenge of living in multiple calendar ecosystems
              </h3>
              <p className="text-slate-600 leading-relaxed">
                I needed a way to see everything at once. I tried to move everything into Google Calendar using ICS feeds, but this created its own problems. I could only import as read-only, and I couldn't make quick edits or hide events. 
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

        {/* Solution Section */}
        <section id="solution" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase text-xs tracking-wide">Solution</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              A local-first calendar aggregator with optional cloud integration
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Instead of forcing users into authentication or requiring migration, I built a system that works immediately with ICS feeds. Users can optionally sign in with Google for additional features, but the core functionality requires zero authentication.
            </p>
          </div>

          {/* Requirements Analysis */}
          <div className="bg-slate-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-slate-900 mb-4">Core Requirements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-sage-green">Must Have</h4>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-sage-green rounded-full mr-3 mt-2"></div>
                    <p className="text-sm text-slate-600">Aggregate multiple calendar sources in real-time</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-sage-green rounded-full mr-3 mt-2"></div>
                    <p className="text-sm text-slate-600">Work with read-only ICS feeds (no API approval needed)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-sage-green rounded-full mr-3 mt-2"></div>
                    <p className="text-sm text-slate-600">Hide specific events without deleting them</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-sage-green rounded-full mr-3 mt-2"></div>
                    <p className="text-sm text-slate-600">Custom colors per calendar source</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-slate-600">Nice to Have</h4>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2"></div>
                    <p className="text-sm text-slate-600">Optional Google Calendar API integration for two-way sync</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2"></div>
                    <p className="text-sm text-slate-600">Privacy-first: work without authentication</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2"></div>
                    <p className="text-sm text-slate-600">Client-side data storage (no server required)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="bg-sage-green/5 border border-sage-green/20 rounded-lg p-8">
            <h3 className="font-semibold text-slate-900 mb-6">Technical Architecture</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded border">
                <h4 className="font-medium text-sage-green mb-3">Data Sources</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <p><span className="font-medium">Primary:</span> ICS feeds from any calendar provider (Google, Outlook, iCloud, school systems)</p>
                  <p><span className="font-medium">Optional:</span> Google Calendar API for enhanced features</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded border">
                <h4 className="font-medium text-sage-green mb-3">Processing Layer</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <p><span className="font-medium">Server-side proxy:</span> Bypasses CORS restrictions when fetching external ICS feeds</p>
                  <p><span className="font-medium">ICS parser:</span> Converts feed data to standardized event format, handles recurring events (RRULE)</p>
                  <p><span className="font-medium">Event aggregator:</span> Combines multiple sources, applies user preferences (hidden events, colors)</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded border">
                <h4 className="font-medium text-sage-green mb-3">Storage & UI</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <p><span className="font-medium">Client-side storage:</span> All preferences saved in localStorage—no database needed</p>
                  <p><span className="font-medium">Real-time rendering:</span> React Big Calendar with custom styling for overlapping events</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Execution Section */}
        <section id="execution" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase text-xs tracking-wide">Execution</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-slate-600 leading-relaxed">
              I challenged myself to build this in a single day. After completing the PRD, I broke this project into four phases.
            </p>
          </div>

          {/* Development Timeline */}
          <div className="space-y-8 mb-8">
            {/* Phase 1 */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Phase 1: Authentication & Google Calendar</h3>
                <span className="text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-full">Morning</span>
              </div>
              <div className="space-y-4 text-sm text-slate-600">
                <p>
                  Started with NextAuth setup and Google Calendar API integration. Got the OAuth flow working and successfully fetched events. Initial approach required authentication to use the app—seemed like the right pattern since I was already using Google's API.
                </p>
                <div className="bg-slate-50 p-4 rounded">
                  <p className="font-medium text-slate-900 mb-2">Challenge: Token Scopes</p>
                  <p className="text-xs">
                    First OAuth attempt didn't include calendar scope. Had to completely revoke permissions and re-authenticate to get the correct token. Learned that Google's consent screen caches permissions aggressively.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Phase 2: The Microsoft Roadblock & Architecture Pivot</h3>
                <span className="text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-full">Midday</span>
              </div>
              <div className="space-y-4 text-sm text-slate-600">
                <p>
                  Attempted to add Microsoft OAuth for Outlook calendars. Set up Azure app registration, configured credentials, added the provider to NextAuth. Then hit a wall: "This app isn't verified by Microsoft and is requesting access to data in your organization."
                </p>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r">
                  <p className="font-medium text-red-900 mb-2">The Blocker</p>
                  <p className="text-xs text-red-800">
                    Organizational calendars require admin approval. My school/work Outlook accounts have enterprise restrictions. Getting IT approval for a personal project was unlikely.
                  </p>
                </div>
                
                <p className="space-y-4 text-sm text-slate-600">
                  This forced me to step back and reconsider the entire approach. Did I actually need OAuth to solve my problem?
                </p>
                
                <div className="bg-sage-green/10 border-l-4 border-sage-green p-4 rounded-r">
                  <p className="font-medium text-sage-green mb-2">OAuth vs ICS</p>
                  <p className="text-xs text-slate-700 mb-3">
                    ICS feeds are universal web standards that work without OAuth. They're publicly accessible via URL, supported by all major calendar providers, and require zero authentication. Perfect for bypassing organizational restrictions.
                  </p>
                  <p className="text-xs text-slate-700">
                    More importantly: if ICS feeds could handle the core functionality, why force users through OAuth at all? Forcing authentication would be limited by organizational restrictions, whereas switching to ICS first, optional authentication second would enable immediate access for everyone. This way, I respect user choice, remove friction, and improve accessibility.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <p className="space-y-4 text-sm text-slate-600">
                      Ultimately, I chose ICS over API. It was more resilient, no rate limits, no admin approval needed, and worked with any calendar system. This meant that the architecture was now local-first, with all user data stored in browser localStorage. No database, no backend, no data sharing. It would be private by design with instant setup.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Phase 3: ICS Integration & Core Features</h3>
                <span className="text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-full">Afternoon</span>
              </div>
              <div className="space-y-4 text-sm text-slate-600">
                <p>
                  Built ICS parser using ical.js library. Added server-side proxy to bypass CORS restrictions. Implemented multi-calendar management with custom colors and toggle visibility. Removed the login gate and made the dashboard publicly accessible. This is when the app really came together.
                </p>
                <div className="space-y-3">
                  <div className="bg-slate-50 p-3 rounded">
                    <p className="font-medium text-slate-900 text-xs mb-1">Implementation: Server-Side Proxy</p>
                    <p className="text-xs text-slate-600">
                      Browsers block cross-origin requests to external ICS URLs. Created an API route that fetches ICS feeds server-side and passes them to the client, bypassing CORS restrictions entirely.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded">
                    <p className="font-medium text-slate-900 text-xs mb-1">Implementation: Multi-Calendar Management</p>
                    <p className="text-xs text-slate-600">
                      Built calendar source management UI: add by URL, assign custom colors, toggle on/off. All preferences persist in localStorage, so they survive page refreshes without needing a backend.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Phase 4: UX Polish & Advanced Features</h3>
                <span className="text-sm text-slate-500 bg-sage-green px-3 py-1 rounded-full text-white">Evening</span>
              </div>
              <div className="space-y-4 text-sm text-slate-600">
                <p>
                  Added the ability to hide individual events (a feature I desperately needed for colleagues' OOO notifications), improved visual hierarchy for overlapping events, and finalized the privacy-first architecture.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-slate-50 p-3 rounded">
                    <p className="font-medium text-slate-900 text-xs mb-1">Feature: Hide Events</p>
                    <p className="text-xs text-slate-600">
                      Right-click any event to hide it. Event IDs stored in localStorage and filtered client-side before rendering. Can view list of hidden events and unhide them anytime. Used Set for O(1) lookup performance when filtering thousands of events.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-3 rounded">
                    <p className="font-medium text-slate-900 text-xs mb-1">UX Fix: Overlapping Events</p>
                    <p className="text-xs text-slate-600">
                      Overlapping events with transparency were hard to distinguish. Removed opacity, added 2px white borders between events. Much cleaner visual separation.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-3 rounded">
                    <p className="font-medium text-slate-900 text-xs mb-1">Bug Fix: Duplicate React Keys</p>
                    <p className="text-xs text-slate-600">
                      Different ICS calendars had events with identical UIDs. Fixed by prefixing event IDs with feed ID: <code className="bg-white px-1 rounded">feedId_eventUid</code>
                    </p>
                  </div>
                </div>

                <div className="bg-sage-green/10 border border-sage-green/20 rounded-lg p-4 mt-4">
                  <p className="font-medium text-sage-green mb-3 text-xs">Privacy-First & Progressive Enhancement</p>
                  <div className="space-y-2 text-xs text-slate-700">
                    <p>
                      <span className="font-medium">Privacy-First:</span> The app works completely offline after initial load. No data leaves your browser unless you explicitly enable Google Calendar integration. All calendar preferences, hidden events, and customizations are stored locally.
                    </p>
                    <p>
                      <span className="font-medium">Progressive Enhancement:</span> Start with read-only ICS feeds for instant setup. Optionally sign in with Google to enable two-way sync, creating and editing events. The app adapts to your privacy preferences—basic functionality for everyone, enhanced features for power users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

          {/* Results Section */}
          <section id="results" className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase text-xs tracking-wide">Results</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-slate-600 leading-relaxed">
                The app completely solved my calendar coordination problem. I now see all my commitments in one place, can quickly identify free time, and haven't double-booked myself since launch. The privacy-first architecture means I can use it without worrying about data sharing, and the ability to hide annoying events (like colleagues' OOO notifications) was an hugely needed quality-of-life improvement.
              </p>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center bg-white border border-slate-200 rounded-lg p-6">
                <div className="text-3xl font-bold text-sage-green mb-2">100%</div>
                <div className="font-medium text-slate-900 text-sm mb-1">Time Saved</div>
                <div className="text-xs text-slate-600">No more app-switching</div>
              </div>
              <div className="text-center bg-white border border-slate-200 rounded-lg p-6">
                <div className="text-3xl font-bold text-sage-green mb-2">4</div>
                <div className="font-medium text-slate-900 text-sm mb-1">Calendars Unified</div>
                <div className="text-xs text-slate-600">Google, Outlook × 2, Notion</div>
              </div>
              <div className="text-center bg-white border border-slate-200 rounded-lg p-6">
                <div className="text-3xl font-bold text-sage-green mb-2">Zero</div>
                <div className="font-medium text-slate-900 text-sm mb-1">Authentication Required</div>
                <div className="text-xs text-slate-600">Privacy-first design</div>
              </div>
              <div className="text-center bg-white border border-slate-200 rounded-lg p-6">
                <div className="text-3xl font-bold text-sage-green mb-2">1 Day</div>
                <div className="font-medium text-slate-900 text-sm mb-1">Development Time</div>
                <div className="text-xs text-slate-600">Concept to deployment</div>
              </div>
            </div>

            {/* Feature Comparison */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Why This Works Better Than Alternatives</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-medium text-sage-green mb-3">vs. Google Calendar Import</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Can hide specific events without deleting</li>
                    <li>• Better visual hierarchy for overlapping events</li>
                    <li>• Optional Google integration vs. forced migration</li>
                    <li>• Custom calendar colors and organization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sage-green mb-3">vs. Third-Party Tools (Morgen, etc.)</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Privacy-first: works without sharing data</li>
                    <li>• No subscription fees or paywalls</li>
                    <li>• Direct control over all features and customizations</li>
                    <li>• Works with any calendar provider via ICS</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Reflection Section */}
          <section id="reflection" className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase text-xs tracking-wide">Reflection</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-slate-600 leading-relaxed mb-6">
                This project taught me that constraints often reveal better solutions. The Microsoft OAuth roadblock forced me to lean on ICS feeds, which turned out to be superior for this use case altogether: more universal, no admin approval, better privacy. Sometimes what looks like a blocker is actually redirection toward a better path.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The architecture pivot from OAuth-required to optional authentication was equally valuable. My initial instinct was that a "serious" app needs authentication. But questioning that assumption led to a more accessible product. Not every app needs a login wall. Sometimes the best user experience is immediate functionality.
              </p>
            </div>

          {/* Key Learnings */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-slate-600 font-semibold text-sm">01</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Constraints force creativity</h3>
                    <p className="text-sm text-slate-600">
                      Microsoft's admin wall forced me to discover ICS feeds—a simpler, more universal solution. The one-day deadline forced ruthless prioritization. Constraints clarify what actually matters and often reveal better paths.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white border-2 border-sage-green rounded-full flex items-center justify-center mr-4">
                    <span className="text-sage-green font-semibold text-sm">02</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Question default patterns</h3>
                    <p className="text-sm text-slate-600">
                      "Apps need authentication" seemed obvious. But challenging that assumption led to better UX. Don't cargo-cult patterns from other apps—design for your specific use case. First principles thinking beats convention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage-green rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-sm">03</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Progressive enhancement</h3>
                    <p className="text-sm text-slate-600">
                      Start with core functionality that works for everyone. Add optional enhancements for power users. This respects user choice and removes friction while enabling advanced features.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Learnings */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-slate-900 mb-4">Technical Skills Developed</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-sage-green mb-2">Authentication</h4>
                  <ul className="space-y-1 text-slate-600 text-xs">
                    <li>• OAuth 2.0 implementation with NextAuth</li>
                    <li>• Managing token scopes and permissions</li>
                    <li>• Building optional vs. required auth flows</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sage-green mb-2">Calendar APIs</h4>
                  <ul className="space-y-1 text-slate-600 text-xs">
                    <li>• Google Calendar API integration</li>
                    <li>• ICS feed parsing with ical.js</li>
                    <li>• Handling recurring events (RRULE)</li>
                    <li>• Server-side CORS proxying</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sage-green mb-2">Architecture</h4>
                  <ul className="space-y-1 text-slate-600 text-xs">
                    <li>• Client-side state management</li>
                    <li>• localStorage for persistence</li>
                    <li>• Progressive enhancement patterns</li>
                    <li>• Local-first application design</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Future Enhancements */}
            <div className="bg-white border border-slate-200 rounded-lg p-8">
              <h3 className="font-semibold text-slate-900 mb-6">Future Enhancements (If Time Permitted)</h3>
              <p className="text-slate-600 mb-4">With more time, I'd add:</p>
              <ul className="space-y-3 text-slate-600 mb-6">
                <li className="flex items-start">
                  <span className="text-sage-green mr-3 mt-1">•</span>
                  <span><strong>Two-way sync with Google Calendar, Microsoft, and others</strong> — create and edit events directly from the unified view</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-green mr-3 mt-1">•</span>
                  <span><strong>Smart conflict detection and time blocking</strong> — automatically flag overlapping events and suggest resolution times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-green mr-3 mt-1">•</span>
                  <span><strong>Mobile app</strong> — React Native version for on-the-go access with push notifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-green mr-3 mt-1">•</span>
                  <span><strong>Calendar analytics</strong> — visualize time allocation across different calendar sources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-green mr-3 mt-1">•</span>
                  <span><strong>Export combined calendar</strong> — generate ICS feed of unified view for sharing</span>
                </li>
                  <li className="flex items-start">
                  <span className="text-sage-green mr-3 mt-1">•</span>
                  <span><strong>To-do list integration</strong> — tie to-do list items to events and integrate with smart blockings</span>
                </li>
              </ul>
              <p className="text-slate-600 italic text-sm">
                To try this app live or look at at the GitHub, check the links below!
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
                ← Back to top
              </button>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/zhw16-dev/unified-calendar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-300 text-slate-700 px-6 py-2 rounded hover:bg-slate-50 transition-colors inline-flex items-center"
                >
                  View on GitHub →
                </a>
                <a 
                  href="https://unified-calendar.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sage-green text-white px-6 py-2 rounded hover:bg-sage-green/90 transition-colors inline-flex items-center"
                >
                  Try it live →
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}