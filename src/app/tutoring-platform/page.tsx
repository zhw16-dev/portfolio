'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function TutoringPlatformPage() {
  const [activeSection, setActiveSection] = useState('context')
  const [showSidebar, setShowSidebar] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      const sections = ['context', 'solution', 'execution', 'reflection']
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
    { id: 'context', label: 'Context' },
    { id: 'solution', label: 'Solution' },
    { id: 'execution', label: 'Execution' },
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

      {/* Case Study Section */}
      <div className="flex pt-28">
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

        {/* Main Content */}
        <main className="flex-1 max-w-5xl mx-auto p-6 lg:p-12">
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
                Can I Make My Tutoring Business
                <span className="text-sage-green"> Run Itself?</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                Building a role-based platform to eliminate the operational chaos of managing 10 tutors and 100+ students.
              </p>
            </div>

            {/* Project Metadata */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Role</h4>
                <p className="font-medium text-slate-900">Founder</p>
                <p className="text-sm text-slate-600">Product & Engineering</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Timeline</h4>
                <p className="font-medium text-slate-900">3 Weekends</p>
                <p className="text-sm text-slate-600">September 2025</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Stack</h4>
                <p className="font-medium text-slate-900">Next.js + Supabase</p>
                <p className="text-sm text-slate-600">Deployed on Vercel</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-5">
                <h4 className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Outcome</h4>
                <p className="font-medium text-slate-900">95% Time Saved</p>
                <p className="text-sm text-slate-600">6 hrs → 15 min weekly</p>
              </div>
            </div>
          </div>

          {/* CONTEXT */}
          <section id="context" className="mb-20 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Context</h2>
            
            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed mb-6">
                I started tutoring in 9th grade. By the time I graduated, I was managing 10 tutors 
                and over 100 students. What started as a side hustle had become a real business.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                With that scale came a coordination nightmare. I was manually matching tutors to students, 
                coordinating schedules across time zones, tracking payments in spreadsheets, and fielding 
                calls constantly. By 2025, despite stepping back from teaching, I was spending 6+ hours 
                a week on pure operations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                September was supposed to be growth season. Instead, I was drowning in logistics.
              </p>
            </div>

            {/* Simplified 3-Column Visual */}
            <div className="bg-slate-50 rounded-xl p-8 mb-8">
              <h3 className="text-sm font-semibold text-slate-900 mb-6 text-center">The Coordination Problem</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Students/Parents */}
                <div className="bg-white rounded-lg p-5 border border-slate-200">
                  <h4 className="font-medium text-slate-900 mb-3">Students & Parents</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Find and book tutors</li>
                    <li>• Track upcoming sessions</li>
                    <li>• Know when payment is due</li>
                  </ul>
                </div>
                
                {/* Me (center) */}
                <div className="bg-red-50 rounded-lg p-5 border border-red-200">
                  <h4 className="font-medium text-red-800 mb-3">Me (The Bottleneck)</h4>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• Manual tutor matching</li>
                    <li>• Spreadsheet updates</li>
                    <li>• Payment chasing</li>
                    <li>• Constant phone calls</li>
                  </ul>
                </div>
                
                {/* Tutors */}
                <div className="bg-white rounded-lg p-5 border border-slate-200">
                  <h4 className="font-medium text-slate-900 mb-3">Tutors</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Get student assignments</li>
                    <li>• Log completed sessions</li>
                    <li>• Track their earnings</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-sm text-slate-500 mt-6">
                Every request flowed through one person. 50+ touchpoints per week.
              </p>
            </div>
          </section>

          {/* SOLUTION */}
          <section id="solution" className="mb-20 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Solution</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-slate-600 leading-relaxed mb-6">
                I knew the business inside and out, but I wanted to validate my assumptions. I scheduled 
                calls with parents and students, and ran a focus group with my tutors. A few insights stood out:
              </p>
            </div>

            {/* Research Insights as Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <div className="bg-sage-green/5 border border-sage-green/20 rounded-lg p-5">
                <h4 className="font-medium text-slate-900 mb-2">Self-service expectations</h4>
                <p className="text-sm text-slate-600">
                  Users expected the same booking experience they get from restaurants or hair salons
                </p>
              </div>
              <div className="bg-sage-green/5 border border-sage-green/20 rounded-lg p-5">
                <h4 className="font-medium text-slate-900 mb-2">Payment confusion</h4>
                <p className="text-sm text-slate-600">
                  Students didn&apos;t know when payment was due; parents forgot. Tutors weren&apos;t sure when they&apos;d get paid.
                </p>
              </div>
              <div className="bg-sage-green/5 border border-sage-green/20 rounded-lg p-5">
                <h4 className="font-medium text-slate-900 mb-2">Visibility gap</h4>
                <p className="text-sm text-slate-600">
                  Everyone wanted to see their own data without having to ask me for it
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                The Core Idea: A Single Source of Truth
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Instead of managing multiple spreadsheets and constant messages, I would build one platform 
                where each user type gets exactly what they need. Role-based access would replace manual gatekeeping.
              </p>
            </div>

            {/* Admin Dashboard Mockup */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="bg-slate-50 rounded-lg p-6">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                  <div>
                    <h4 className="font-semibold text-slate-900">Operations Overview</h4>
                    <p className="text-sm text-slate-500">Will&apos;s Tutoring</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                    <span className="text-sm text-slate-600">Live</span>
                  </div>
                </div>
                
                {/* Metrics Row */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg text-center border border-slate-200">
                    <div className="text-2xl font-bold text-sage-green">23</div>
                    <div className="text-xs text-slate-600">Sessions This Week</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center border border-slate-200">
                    <div className="text-2xl font-bold text-slate-700">8</div>
                    <div className="text-xs text-slate-600">Active Tutors</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center border border-slate-200">
                    <div className="text-2xl font-bold text-slate-700">$2.4k</div>
                    <div className="text-xs text-slate-600">Pending Payments</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center border border-slate-200">
                    <div className="text-2xl font-bold text-slate-700">3</div>
                    <div className="text-xs text-slate-600">Action Items</div>
                  </div>
                </div>

                {/* Recent Sessions */}
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border-l-4 border-sage-green flex justify-between items-center">
                    <div>
                      <div className="font-medium text-slate-900 text-sm">Alex Chen - Calculus</div>
                      <div className="text-xs text-slate-500">with Sarah M. • Today 4:00 PM</div>
                    </div>
                    <span className="bg-sage-green/10 text-sage-green text-xs px-2 py-1 rounded">Confirmed</span>
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-amber-400 flex justify-between items-center">
                    <div>
                      <div className="font-medium text-slate-900 text-sm">Emma Wilson - Physics</div>
                      <div className="text-xs text-slate-500">with James K. • Tomorrow 5:30 PM</div>
                    </div>
                    <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded">Pending</span>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-slate-400 mt-4 italic">Mockup of the admin dashboard</p>
            </div>
          </section>

          {/* EXECUTION */}
          <section id="execution" className="mb-20 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Execution</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-slate-600 leading-relaxed mb-6">
                I chose Next.js for the frontend and Supabase for the backend. Both have generous free 
                tiers and would scale if needed. Three weekends to ship.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                I initially wanted to build everything: my own scheduling system, payment processing, analytics. 
                But as a solo developer on a deadline, I scoped down. I kept Calendly for scheduling and made 
                payments tracking-only. The goal was eliminating my bottleneck, not building a complete SaaS product.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              {/* Week 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <span className="text-slate-600 font-semibold text-sm">01</span>
                </div>
                <div className="flex-1 pb-8 border-b border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-slate-900">Foundation & Architecture</h3>
                    <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Weekend 1</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    After completing user interviews, I mapped out user journeys and determined the critical path. 
                    Set up the database schema with role-based access in mind from day one. This decision saved 
                    countless hours later.
                  </p>
                  <p className="text-sm text-slate-600 mb-4">
                    I chose Supabase&apos;s Row Level Security (RLS) so users could only see data relevant to their role. 
                    Tutors see student contact info but not payment details. Parents see their own children only.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">User Research</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">DB Schema</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">RLS Policies</span>
                  </div>
                </div>
              </div>

              {/* Week 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-sage-green/10 rounded-full flex items-center justify-center">
                  <span className="text-sage-green font-semibold text-sm">02</span>
                </div>
                <div className="flex-1 pb-8 border-b border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-slate-900">Core Features & Permissions</h3>
                    <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Weekend 2</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Built authentication, tutor profiles, student management, and session logging. The auth flow 
                    alone took longer than expected. Handling edge cases like password resets, email verification, 
                    and session expiry added up.
                  </p>
                  <p className="text-sm text-slate-600 mb-4">
                    Testing with 3 tutors immediately revealed gaps. They needed granular permissions I had not 
                    considered: access to student contact info for scheduling, but not payment history. Information 
                    architecture decisions directly impact user trust.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Auth Flow</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Profiles</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Session CRUD</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Permissions</span>
                  </div>
                </div>
              </div>

              {/* Week 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-sage-green rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">03</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-slate-900">Polish & Launch</h3>
                    <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Weekend 3</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Mobile responsiveness, onboarding flows, edge case handling. This phase took as much time 
                    as building core features, and that surprised me. What about cancellations? No-shows? 
                    Rescheduling conflicts?
                  </p>
                  <p className="text-sm text-slate-600 mb-4">
                    These &quot;exceptions&quot; are actually core to how users perceive the product. Handling them 
                    gracefully matters more than feature count. Deployed to Vercel, onboarded all tutors 
                    in a group call, and went live.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Responsive</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Onboarding</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Edge Cases</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Launch</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* REFLECTION */}
          <section id="reflection" className="mb-20 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Reflection</h2>
            
            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-slate-600 leading-relaxed">
                A month later, the platform runs smoothly with minimal intervention. I went from 6 hours 
                of weekly admin to about 15 minutes. More importantly, I learned things that will stick with me.
              </p>
            </div>

            {/* Key Learnings - 2x2 Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-3">Scope ruthlessly</h3>
                <p className="text-sm text-slate-600">
                  I wanted to build everything: scheduling, payments, analytics. But the right solution 
                  for context is not the perfect solution. Keeping Calendly and tracking payments manually 
                  let me ship in 3 weeks instead of 3 months.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-3">Edge cases define the experience</h3>
                <p className="text-sm text-slate-600">
                  The happy path was easy. What about cancellations? No-shows? Payment disputes? These 
                  &quot;exceptions&quot; are actually core to how users perceive the product. Handling them gracefully 
                  took as much effort as building the main features.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-3">Ship fast, learn faster</h3>
                <p className="text-sm text-slate-600">
                  I learned more in three weekends of building than months of planning ever could have 
                  taught me. A working product today helps users more than perfect code next month. 
                  The tight feedback loop of build, test with real users, iterate was everything.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-3">AI collapsed the gap</h3>
                <p className="text-sm text-slate-600">
                  As a business student, I could wireframe and spec features. But actually shipping code 
                  felt out of reach. Tools like Claude Code changed that. Debugging became a teaching 
                  moment, not a blocker. The gap between &quot;I wish this worked differently&quot; and &quot;I fixed it&quot; 
                  collapsed to hours.
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
                href="#"
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