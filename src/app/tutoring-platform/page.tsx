'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function TutoringPlatformPage() {
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
                Automating My Tutoring Business:
                <span className="text-sage-green"> Scheduling, Payments, and Escalations</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                How I built a role-based platform to take myself out of the middle of my own business.
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
                I started tutoring in 9th grade, and by the time I graduated I was managing 10 tutors
                and over 100 students. What started as helping a few friends with math had quietly
                turned into a real business with real operational overhead.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The problem was that everything flowed through me. Matching tutors to students,
                coordinating schedules across time zones, tracking payments in spreadsheets, fielding
                calls from parents. By 2025, even though I had stepped back from teaching entirely,
                I was still spending 6+ hours a week on pure coordination. September came around and
                instead of focusing on growing the business, I was stuck updating spreadsheets and
                chasing down e-transfers.
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
                <div className="bg-slate-100 rounded-lg p-5 border border-slate-300">
                  <h4 className="font-medium text-slate-800 mb-3">Me (The Bottleneck)</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
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
                I knew the business well enough to have strong opinions about what to build, but I wanted to
                check those against what people actually cared about. I talked to a handful of parents and
                students, and ran a group call with my tutors. A few things kept coming up:
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
                One Platform, Three Dashboards
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                The common thread was that everyone wanted to see their own information without having to
                go through me. So the idea became straightforward: one platform where each user type
                gets a dashboard tailored to their role, and I stop being the middleman for every small request.
              </p>
            </div>

            {/* Role-Based Dashboard Preview */}
            <div className="bg-slate-50 rounded-xl p-8 mb-2">
              <h3 className="text-sm font-semibold text-slate-900 mb-6 text-center">What Each User Sees</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-5 border border-slate-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 bg-sage-green/10 rounded-full flex items-center justify-center">
                      <span className="text-sage-green text-xs font-semibold">S</span>
                    </div>
                    <h4 className="font-medium text-slate-900">Student</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    Browse tutors by subject, book sessions through Calendly links,
                    and track upcoming appointments and payment status in one place.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-slate-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 bg-sage-green/10 rounded-full flex items-center justify-center">
                      <span className="text-sage-green text-xs font-semibold">T</span>
                    </div>
                    <h4 className="font-medium text-slate-900">Tutor</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    See assigned students, log completed sessions, and track earnings
                    and pending payouts, without seeing other tutors&apos; data.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-slate-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 bg-sage-green/10 rounded-full flex items-center justify-center">
                      <span className="text-sage-green text-xs font-semibold">A</span>
                    </div>
                    <h4 className="font-medium text-slate-900">Admin</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    Full operations view: session volume, revenue tracking, outstanding
                    payments, tutor management, and items needing attention.
                  </p>
                </div>
              </div>
            </div>

            {/* Demo CTA */}
            <div className="text-center mt-6">
              <a
                href="https://tutoringdemo.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sage-green text-white px-6 py-3 rounded-lg hover:bg-sage-green/90 transition-colors font-medium"
              >
                Explore the Live Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <p className="text-sm text-slate-400 mt-3">
                Interactive demo with all three role views — resets on refresh
              </p>
            </div>
          </section>

          {/* EXECUTION */}
          <section id="execution" className="mb-20 scroll-mt-32">
            <h2 className="text-xs font-semibold text-sage-green uppercase tracking-wide mb-6">Execution</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-slate-600 leading-relaxed mb-6">
                I went with Next.js and Supabase, mostly because both have generous free tiers and
                I didn&apos;t want to spend money on infrastructure for something that might not work.
                The harder part was figuring out what <em>not</em> to build.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                I originally wanted to build everything from scratch: scheduling, payment processing,
                analytics. But I had to keep reminding myself that the goal was to stop being the
                bottleneck, not to build a SaaS product. So I kept Calendly for scheduling and made
                payments tracking-only. Cutting scope was painful in the moment, but it&apos;s the only
                reason I shipped in three weekends instead of three months.
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
                    After talking to everyone, I mapped out the user journeys and started on the database
                    schema. I decided early on to build role-based access into the data layer itself
                    using Supabase&apos;s Row Level Security, so that tutors could see student contact info
                    but not payment details, and parents could only see their own children.
                  </p>
                  <p className="text-sm text-slate-600 mb-4">
                    This was one of those decisions that felt like overkill at the time but saved me a
                    lot of headaches later.
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
                    Built out auth, tutor profiles, student management, and session logging. Auth alone
                    took longer than I expected due to password resets, email verification, session expiry.
                    All things I hadn&apos;t really thought about until I was in the middle of building them.
                  </p>
                  <p className="text-sm text-slate-600 mb-4">
                    I got three tutors to test it and immediately found gaps. They needed to see student
                    contact info for scheduling, but I hadn&apos;t separated that from payment history. Small
                    things like that matter a lot when people are trusting you with their data.
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
                    This was supposed to be the quick polish phase for mobile responsiveness, onboarding
                    flows, cleaning things up. It ended up taking just as long as building the core
                    features. Cancellations, no-shows, rescheduling conflicts... all the things that
                    don&apos;t show up on a feature list but are actually what people remember about using
                    your product.
                  </p>
                  <p className="text-sm text-slate-600 mb-4">
                    Deployed to Vercel, onboarded all the tutors on a group call, and went live.
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
              <p className="text-slate-600 leading-relaxed mb-6">
                A month in, the platform was running smoothly with almost no intervention from me.
                I went from 6 hours of weekly admin to about 15 minutes. But honestly, the operational
                time savings weren&apos;t the most interesting part.
              </p>
              <p className="text-slate-600 leading-relaxed">
                This project also raised a bigger question for me: if a platform could take me from 6 hours
                to 15 minutes, what would it take to go from 100 students to 1,000? That line of
                thinking became the <a href="/ai-prototype" className="text-sage-green hover:underline font-medium">AI-native prototype</a> I
                built next.
              </p>
            </div>

            {/* Key Learnings - 2x2 Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-3">Scope is the whole game</h3>
                <p className="text-sm text-slate-600">
                  I wanted to build my own scheduling system and payment processing, but keeping
                  Calendly and making payments tracking-only is the only reason this shipped in
                  three weekends. The right solution for the context isn&apos;t the perfect
                  solution but the one that actually exists.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-3">Edge cases are the product</h3>
                <p className="text-sm text-slate-600">
                  Nobody remembers a session that went smoothly. They remember the cancellation
                  that was handled poorly or the payment that seemed to disappear. I spent most
                  of weekend three on these &quot;exceptions&quot; and they ended up being the most
                  important part to get right.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-3">Building teaches you faster than planning</h3>
                <p className="text-sm text-slate-600">
                  I learned more in three weekends of building than months of planning could
                  have taught me. The permission gaps my tutors found, the edge cases I never
                  anticipated, none of that shows up in a spec doc. You only find it by
                  putting something real in front of people.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-3">AI closed the gap</h3>
                <p className="text-sm text-slate-600">
                  As a business student, I could wireframe and spec features all day, but
                  actually shipping code felt out of reach. Tools like Claude Code changed that.
                  The gap between &quot;I wish this worked differently&quot; and &quot;I just
                  fixed it&quot; collapsed to hours, and debugging became something I learned
                  from rather than got stuck on.
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
                href="https://tutoringdemo.vercel.app/"
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