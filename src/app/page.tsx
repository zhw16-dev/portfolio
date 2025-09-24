'use client'

import { useState, useEffect } from 'react'

export default function CaseStudyPage() {
  const [activeSection, setActiveSection] = useState('overview')
  const [showSidebar, setShowSidebar] = useState(false)

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
      const aboutSection = document.getElementById('about-me')
      const caseStudyStart = document.getElementById('case-study-start')
      
      if (aboutSection && caseStudyStart) {
        const aboutHeight = aboutSection.offsetHeight
        const scrollY = window.scrollY
        
        // Show sidebar when past the about section
        setShowSidebar(scrollY > aboutHeight - 100)
      }

      // Update active section
      const sections = ['overview', 'context', 'research', 'solution', 'execution', 'results', 'reflection']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPosition && 
            element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'context', label: 'Context' },
    { id: 'research', label: 'Research' },
    { id: 'solution', label: 'Solution' },
    { id: 'execution', label: 'Execution' },
    { id: 'results', label: 'Results' },
    { id: 'reflection', label: 'Reflection' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-slate-900">WILLIAM ZHAI</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="mailto:wzhai.hba2026@ivey.ca" className="text-slate-600 hover:text-slate-900">Contact Email</a>
          </nav>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about-me" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Status Indicator */}
          <div className="flex items-center justify-center gap-3 mb-12">
          </div>

          {/* Main Introduction */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light text-sage-green mb-8 tracking-tight">
              William Zhai
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-6 font-medium">
                Product manager and strategic thinker focused on 
                <span className="text-sage-green"> solving real problems</span> for users.
              </p>
            </div>
          </div>

          {/* Experience Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Current */}
            <div>
              <h3 className="text-xs font-semibold text-slate-900 mb-6 uppercase tracking-wider">Currently</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-sage-green pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-slate-900">Microsoft</h4>
                  </div>
                  <p className="text-sm text-slate-600">Product Manager Intern</p>
                </div>
                <div className="border-l-2 border-slate-200 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-slate-900">Ivey Business School</h4>
                  </div>
                  <p className="text-sm text-slate-600">HBA Candidate</p>
                </div>
              </div>
            </div>

            {/* Previous */}
            <div>
              <h3 className="text-xs font-semibold text-slate-900 mb-6 uppercase tracking-wider">Previously</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">EY-Parthenon</span>
                  <span className="text-sm text-slate-500">Strategy Associate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">CIBC</span>
                  <span className="text-sm text-slate-500">AI Strategy Intern</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Will's Tutoring</span>
                  <span className="text-sm text-slate-500">Founder, $470K+ revenue</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button 
              onClick={() => scrollToSection('case-study-start')}
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-all duration-300 group"
            >
              <span>View case study</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <div id="case-study-start" className="flex">
        {/* Sidebar Navigation - Only show when scrolled past about section */}
        <aside className={`hidden lg:block w-64 p-6 sticky top-0 h-screen transition-all duration-300 ${
          showSidebar ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
        }`}>
          <div className="mb-6">
            <button 
              onClick={() => document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-slate-500 hover:text-slate-700 flex items-center"
            >
              ← Back
            </button>
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
        </aside>

        {/* Main Case Study Content */}
        <main className="flex-1 max-w-5xl mx-auto p-6 lg:p-12">
          {/* Case Study Header */}
          <div className="mb-16">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 bg-sage-green/10 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                <span className="text-sm text-sage-green font-medium">Case Study</span>
                <span className="text-sm text-slate-500">•</span>
                <span className="text-sm text-slate-500">2024</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                How I vibe-coded my tutoring business from 
                <span className="text-sage-green"> spreadsheet chaos</span> into a scalable solution
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                The full product cycle, from ideation and prototyping to testing, development, 
                and full-scale launch serving 100+ students.
              </p>
            </div>
          </div>

          {/* Project Details in Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">My Role</h4>
              <div className="space-y-2">
                <p className="font-medium text-slate-900">Troubled Founder</p>
                <p className="text-sm text-slate-600">Product Owner</p>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">Duration</h4>
              <div className="space-y-2">
                <p className="font-medium text-slate-900">Three Weekends</p>
                <p className="text-sm text-slate-600">September 2025</p>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">Impact</h4>
              <div className="space-y-2">
                <p className="font-medium text-sage-green">90% Time Saved</p>
                <p className="text-sm text-slate-600">100+ students managed</p>
                <p className="text-sm text-slate-600">100% user satisfaction</p>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">Tech Stack</h4>
              <div className="space-y-2">
                <p className="font-medium text-slate-900">Next.js</p>
                <p className="text-sm text-slate-600">Supabase</p>
                <p className="text-sm text-slate-600">Vercel</p>
              </div>
            </div>
          </div>

          {/* Project Showcase */}
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Platform Overview</h3>
              <p className="text-sm text-slate-600">Live dashboard showing current operations</p>
            </div>
            
            {/* Interactive Dashboard Demo */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900">Tutoring Operations Dashboard</h4>
                    <p className="text-sm text-slate-500">Will's Tutoring Platform</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                    <span className="text-sm text-slate-600">Live Data</span>
                  </div>
                </div>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-sage-green/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-sage-green">23</div>
                    <div className="text-xs text-slate-600">Sessions This Week</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-slate-700">8</div>
                    <div className="text-xs text-slate-600">Active Tutors</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-slate-700">47</div>
                    <div className="text-xs text-slate-600">Students Served</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-slate-700">$1,840</div>
                    <div className="text-xs text-slate-600">Weekly Revenue</div>
                  </div>
                </div>
                
                {/* Session List */}
                <div className="space-y-3">
                  <h5 className="font-medium text-slate-900 text-sm">Upcoming Sessions</h5>
                  <div className="bg-sage-green/5 p-4 rounded border-l-4 border-sage-green">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-slate-900 text-sm">Sarah Chen - AP Calculus</div>
                        <div className="text-xs text-slate-600">with Alex Thompson • Today 4:00 PM</div>
                      </div>
                      <span className="bg-sage-green text-white text-xs px-2 py-1 rounded">Confirmed</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded border-l-4 border-slate-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-slate-900 text-sm">Mike Rodriguez - SAT Prep</div>
                        <div className="text-xs text-slate-600">with Emma Park • Tomorrow 2:00 PM</div>
                      </div>
                      <span className="bg-slate-400 text-white text-xs px-2 py-1 rounded">Pending</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded border-l-4 border-slate-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-slate-900 text-sm">Jessica Kim - French Conversation</div>
                        <div className="text-xs text-slate-600">with Marie Dubois • Wednesday 6:00 PM</div>
                      </div>
                      <span className="bg-slate-400 text-white text-xs px-2 py-1 rounded">Scheduled</span>
                    </div>
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div className="mt-6 flex gap-3">
                  <button className="bg-sage-green text-white text-sm px-4 py-2 rounded hover:bg-sage-green/90 transition-colors">
                    Add Session
                  </button>
                  <button className="border border-slate-300 text-slate-700 text-sm px-4 py-2 rounded hover:bg-slate-50 transition-colors">
                    View Reports
                  </button>
                  <button className="border border-slate-300 text-slate-700 text-sm px-4 py-2 rounded hover:bg-slate-50 transition-colors">
                    Manage Tutors
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <section id="overview" className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase text-xs tracking-wide">Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-slate-700 mb-6">
                When I was a kid, my dream job was to be a university professor. I loved learning more than anything, 
                and thought the best job in the world was one that could support that curiosity. So as any wannabe 
                professor does, I started tutoring in 9th grade. First with elementary math, then expanding to French, 
                English, Economics, Biology, Physics, and SAT prep as I progressed through high school.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mb-6">
                By graduation, I'd grown to a point where I had to bring on five tutors to teach ten subjects 
                for fifty students at once. What started as a simple side project had become something much larger.
              </p>
              <p className="text-slate-600 leading-relaxed">
                With this extra scale came a coordination nightmare. There was no convenient and cost-effective 
                solution to manage tutoring operations at this level. For years, I slogged through spreadsheet hell. I manually 
                matched tutors, coordinated class schedules, managed payments and payouts. By 2025, despite stepping away 
                from personally teaching classes, I found myself more involved in operations than ever.
              </p>
            </div>
          </section>

          {/* Context Section */}
          <section id="context" className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase text-xs tracking-wide">Context</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                What if we could eliminate my biggest blocker: the time spent on coordination?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                At the time of starting this project, I was managing 10 tutors and over 100 students with different 
                schedules, subjects, and payment terms. This created a three-way coordination problem where every 
                scheduling conflict cascaded into hours of phone calls and manual spreadsheet updates.
              </p>
            </div>

            {/* Problem Visualization - Redesigned Manual Process Flow */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 mb-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">The Highly Manual Process Flow</h3>
                <p className="text-sm text-slate-500">Every interaction required manual coordination through a single point of failure</p>
              </div>
              
              <div className="max-w-6xl mx-auto">
                {/* Three Column Layout with Visual Connections */}
                <div className="grid md:grid-cols-3 gap-8 relative">
                  
                  {/* Students & Parents Column */}
                  <div className="relative">
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 h-full">
                      <div className="flex items-center mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900">Students & Parents</h4>
                          <p className="text-sm text-red-600 font-medium">~100 active students</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 border border-red-200">
                          <p className="text-sm font-medium text-slate-900 mb-2">Manual Process Steps</p>
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-slate-600">Call or email me directly for tutoring needs</span>
                            </div>
                            <div className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-slate-600">Describe subject and scheduling needs over phone</span>
                            </div>
                            <div className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-slate-600">Wait for me to find and suggest tutor matches</span>
                            </div>
                            <div className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-slate-600">Coordinate payment details separately</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow pointing to center - hidden on mobile */}
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <svg className="w-8 h-8 text-red-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Admin Bottleneck Column */}
                  <div className="relative">
                    <div className="bg-slate-50 border-2 border-slate-300 rounded-xl p-6 h-full">
                      <div className="flex items-center mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900">Admin Bottleneck</h4>
                          <p className="text-sm text-slate-600 font-medium">Every transaction flows through me</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 border border-slate-300">
                          <p className="text-sm font-medium text-slate-900 mb-2">Manual Coordination Tasks</p>
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-slate-600">Manually match students with available tutors</span>
                            </div>
                            <div className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-slate-600">Track all sessions across 9 different spreadsheets</span>
                            </div>
                            <div className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-slate-600">Process payments, handle cancellations manually</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tutors Column */}
                  <div className="relative">
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 h-full">
                      <div className="flex items-center mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900">Tutors</h4>
                          <p className="text-sm text-red-600 font-medium">10 tutors requiring manual updates</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 border border-red-200">
                          <p className="text-sm font-medium text-slate-900 mb-2">Manual Process Steps</p>
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-slate-600">Receive student assignments from me via text</span>
                            </div>
                            <div className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-slate-600">Schedule sessions directly with families</span>
                            </div>
                            <div className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-slate-600">Report completed sessions back to me</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow pointing to center from right - hidden on mobile */}
                    <div className="hidden md:block absolute top-1/2 -left-4 transform -translate-y-1/2">
                      <svg className="w-8 h-8 text-red-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Impact Statement */}
                <div className="mt-8 text-center">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
                    <h4 className="text-lg font-semibold text-red-800 mb-2">The Result</h4>
                    <p className="text-sm text-red-700">
                      1 overwhelmed founder handling 100+ weekly touchpoints with 3 hours of daily coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Research Section */}
          <section id="research" className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase text-xs tracking-wide">Research</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-slate-600 leading-relaxed">
                I knew my business inside and out, but to build something that truly served all users, 
                I scheduled calls with students and parents, and ran a focus group with my tutors. 
                I wanted to build a platform based not only on my pain points, but on what features 
                my users needed most.
              </p>
            </div>

            {/* Simplified Research Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">🎓</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-3">Students & Parents</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    <span className="font-medium">Top Need:</span> Finding the right tutor match
                  </p>
                  <p className="text-sm text-slate-600">
                    <span className="font-medium">Pain Point:</span> "We never know if a tutor is available until we call"
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">👨‍🏫</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-3">Tutors</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    <span className="font-medium">Top Need:</span> Predictable payment schedule
                  </p>
                  <p className="text-sm text-slate-600">
                    <span className="font-medium">Pain Point:</span> "I spend 20 minutes every day updating spreadsheets"
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">👨‍💼</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-3">Admin (Me)</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    <span className="font-medium">Top Need:</span> Eliminate manual coordination
                  </p>
                  <p className="text-sm text-slate-600">
                    <span className="font-medium">Pain Point:</span> "Every transaction flows through me"
                  </p>
                </div>
              </div>
            </div>

            {/* Key Research Insights */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Key Research Findings</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-sage-green rounded-full mr-3 mt-2"></div>
                  <p className="text-slate-600">
                    <span className="font-medium">Self-service expectations:</span> Users expected the same self-service experience they get from booking restaurants or appointments
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-sage-green rounded-full mr-3 mt-2"></div>
                  <p className="text-slate-600">
                    <span className="font-medium">Real-time visibility:</span> All stakeholders wanted immediate access to session status and updates without calling or texting
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section id="solution" className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase text-xs tracking-wide">Solution</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                A role-based platform providing real-time coordination for all stakeholders
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Instead of managing multiple spreadsheets and constant phone calls, I built a single 
                platform where everyone gets exactly what they need, when they need it.
              </p>
            </div>

            {/* Solution Architecture */}
            <div className="bg-sage-green/5 border border-sage-green/20 rounded-lg p-8 mb-12">
              <h3 className="font-semibold text-slate-900 mb-6">Core Solution: Single Source of Truth</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded border">
                  <h4 className="font-medium text-sage-green mb-4">For Tutors</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Schedule management & availability</li>
                    <li>• Session logging and edge case handling</li>
                    <li>• Payment tracking and history</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded border">
                  <h4 className="font-medium text-sage-green mb-4">For Students and Parents</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Tutor discoverability and profiles</li>
                    <li>• On-demand booking system</li>
                    <li>• Payment history and reminders</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded border">
                  <h4 className="font-medium text-sage-green mb-4">For Admin</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Fully automated booking workflow</li>
                    <li>• Complete operational visibility</li>
                    <li>• Data-driven analytics and insights</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Student View Section */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Student & Parent Dashboard</h3>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                {/* Student Dashboard Mockup - More Realistic */}
                <div className="bg-slate-50 rounded-lg p-6 mb-4">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                    <div>
                      <h4 className="text-lg font-medium text-slate-900">Sarah Chen</h4>
                      <p className="text-sm text-slate-500">Grade 11 • 4 active subjects</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">3 sessions this week</span>
                    </div>
                  </div>
                  
                  {/* Navigation Tabs */}
                  <div className="flex space-x-6 mb-6 border-b border-slate-200">
                    <button className="pb-2 border-b-2 border-sage-green text-sage-green text-sm font-medium">Find Tutors</button>
                    <button className="pb-2 text-slate-500 text-sm">My Sessions</button>
                    <button className="pb-2 text-slate-500 text-sm">Payment</button>
                  </div>
                  
                  {/* Tutor Discovery */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-sm font-medium text-slate-900">Available Tutors for AP Calculus</h5>
                      <button className="text-xs text-sage-green">Filter</button>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white border border-sage-green rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-sage-green rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-medium">AT</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-slate-900">Alex Thompson</p>
                              <div className="flex items-center text-xs text-slate-600">
                                <span className="text-yellow-500">★★★★★</span>
                                <span className="ml-1">4.9 (23 reviews)</span>
                                <span className="mx-2">•</span>
                                <span>$45/hr</span>
                              </div>
                              <p className="text-xs text-slate-600 mt-1">Available today 4:00 PM - 8:00 PM</p>
                            </div>
                          </div>
                          <button className="bg-sage-green text-white text-xs px-3 py-2 rounded">Book Now</button>
                        </div>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-medium">JS</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-slate-900">Jordan Smith</p>
                              <div className="flex items-center text-xs text-slate-600">
                                <span className="text-yellow-500">★★★★☆</span>
                                <span className="ml-1">4.7 (18 reviews)</span>
                                <span className="mx-2">•</span>
                                <span>$40/hr</span>
                              </div>
                              <p className="text-xs text-slate-500 mt-1">Next available: Tomorrow 2:00 PM</p>
                            </div>
                          </div>
                          <button className="border border-slate-300 text-slate-600 text-xs px-3 py-2 rounded">View Profile</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white rounded p-3 text-center border border-slate-200">
                      <div className="text-lg font-semibold text-slate-900">12</div>
                      <div className="text-xs text-slate-600">Sessions this month</div>
                    </div>
                    <div className="bg-white rounded p-3 text-center border border-slate-200">
                      <div className="text-lg font-semibold text-sage-green">$540</div>
                      <div className="text-xs text-slate-600">Total spent</div>
                    </div>
                    <div className="bg-white rounded p-3 text-center border border-slate-200">
                      <div className="text-lg font-semibold text-slate-900">4.8</div>
                      <div className="text-xs text-slate-600">Avg tutor rating</div>
                    </div>
                  </div>
                </div>
                <p className="text-sm italic text-slate-600">
                  <span className="font-medium">Key Features:</span> Real-time tutor availability with ratings and reviews, 
                  one-click booking system, session history, and transparent payment tracking
                </p>
              </div>
            </div>

            {/* Tutor View Section */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Tutor Dashboard</h3>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                {/* Tutor Dashboard Mockup - More Realistic */}
                <div className="bg-slate-50 rounded-lg p-6 mb-4">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-sage-green rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-medium">AT</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-slate-900">Alex Thompson</h4>
                        <p className="text-sm text-slate-500">Math Tutor • 23 active students</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-slate-900">This Week</div>
                      <div className="text-lg font-semibold text-sage-green">$315</div>
                    </div>
                  </div>
                  
                  {/* Navigation Tabs */}
                  <div className="flex space-x-6 mb-6 border-b border-slate-200">
                    <button className="pb-2 border-b-2 border-sage-green text-sage-green text-sm font-medium">Today's Schedule</button>
                    <button className="pb-2 text-slate-500 text-sm">Profile</button>
                    <button className="pb-2 text-slate-500 text-sm">Earnings</button>
                  </div>
                  
                  {/* Today's Sessions */}
                  <div className="mb-6">
                    <h5 className="text-sm font-medium text-slate-900 mb-4">Tuesday, September 22nd</h5>
                    <div className="space-y-3">
                      <div className="bg-white border border-sage-green rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <p className="text-sm font-medium text-slate-900">Sarah Chen - AP Calculus</p>
                            <p className="text-xs text-slate-600">4:00 PM - 5:30 PM • Derivatives & Chain Rule</p>
                          </div>
                          <span className="bg-sage-green text-white text-xs px-2 py-1 rounded">In Progress</span>
                        </div>
                        <div className="flex space-x-2 mt-3">
                          <select className="text-xs border border-slate-300 rounded px-2 py-1 flex-1">
                            <option>Mark Complete</option>
                            <option>Student No-Show</option>
                            <option>Cancelled</option>
                          </select>
                          <button className="text-xs bg-slate-100 border border-slate-300 px-3 py-1 rounded">Add Notes</button>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-slate-200 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <p className="text-sm font-medium text-slate-900">Mike Rodriguez - SAT Prep</p>
                            <p className="text-xs text-slate-600">7:00 PM - 8:00 PM • Practice Test Review</p>
                          </div>
                          <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">Upcoming</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Prep materials: Practice Test #4, Math sections 3-4</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-3">
                    <button className="bg-sage-green text-white text-sm py-2 rounded">Update Availability</button>
                    <button className="border border-slate-300 text-slate-700 text-sm py-2 rounded">View Calendar</button>
                    <button className="border border-slate-300 text-slate-700 text-sm py-2 rounded">Payout History</button>
                  </div>
                </div>
                <p className="text-sm italic text-slate-600">
                  <span className="font-medium">Key Features:</span> Real-time session management with status updates, 
                  integrated note-taking, automated earnings tracking, and availability control
                </p>
              </div>
            </div>


          </section>

          {/* Execution Section */}
          <section id="execution" className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase text-xs tracking-wide">Execution</h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-slate-600 leading-relaxed">
                I wanted to get everything up and running by the end of September, when school starts to pick up and parents start calling. To get there, I had three weekends: the first for user research, then two weekends of 
                development to get the MVP running. Each day taught me an incredible amount about development.
              </p>
            </div>

            {/* Development Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>
              
              <div className="space-y-16">
                {/* Weekend One */}
                <div className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center relative z-10">
                      <span className="text-slate-600 font-semibold">01</span>
                    </div>
                    <div className="ml-8 flex-1">
                      <div className="bg-white border border-slate-200 rounded-xl p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-xl font-semibold text-slate-900">Strategic Foundation</h3>
                          <span className="text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-full">Weekend One</span>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-medium text-slate-900 mb-3">Build vs Buy Analysis</h4>
                            <p className="text-sm text-slate-600 mb-4">
                              Mapped complete user journeys and determined feature requirements. Initially wanted to 
                              clone Calendly functionality within the platform and integrate payments for full control.
                            </p>
                            <p className="text-sm text-slate-600 mb-4">
                              As a solo developer on a deadline, I chose strategic integrations instead. Using existing 
                              payment APIs and limiting scope to payment tracking made sense for development speed and security.
                            </p>
                            <div className="bg-slate-50 border-l-4 border-sage-green p-4 rounded-r">
                              <p className="text-sm text-sage-green font-medium">
                                Key Learning: Perfect solutions vs. right solutions for context, considering time, resources, and risk.
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-slate-900 mb-3">Technology Architecture</h4>
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="text-center p-4 bg-blue-50 rounded-lg">
                                <div className="font-medium text-slate-900 mb-1">Next.js</div>
                                <div className="text-xs text-slate-600">Full-stack React framework</div>
                              </div>
                              <div className="text-center p-4 bg-green-50 rounded-lg">
                                <div className="font-medium text-slate-900 mb-1">Supabase</div>
                                <div className="text-xs text-slate-600">Database + Authentication</div>
                              </div>
                              <div className="text-center p-4 bg-purple-50 rounded-lg">
                                <div className="font-medium text-slate-900 mb-1">Vercel</div>
                                <div className="text-xs text-slate-600">Deployment + Hosting</div>
                              </div>
                            </div>
                            <p className="text-xs text-slate-500">
                              Chosen for current scale with clear path to future scalability as business grows.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Weekend Two */}
                <div className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-sage-green rounded-full flex items-center justify-center relative z-10 shadow-sm">
                      <span className="text-sage-green font-bold">02</span>
                    </div>
                    <div className="ml-8 flex-1">
                      <div className="bg-white border border-slate-200 rounded-xl p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-xl font-semibold text-slate-900">Security & User Management</h3>
                          <span className="text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-full">Weekend Two</span>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-medium text-slate-900 mb-3">Security-First Development</h4>
                            <p className="text-sm text-slate-600 mb-4">
                              Built authentication and role-based access control as the foundation. Implemented Row Level Security (RLS) 
                              to ensure users only access their relevant data. Put myself in each user's shoes: what do they actually 
                              need to see? How can I provide that access safely?
                            </p>
                            <p className="text-sm text-slate-600 mb-4">
                              Testing with 3 tutors immediately revealed the need for granular permission levels. Tutors needed 
                              to see student contact info but not payment details, parents needed session history but not 
                              other families' data.
                            </p>
                            <div className="bg-slate-50 border-l-4 border-sage-green p-4 rounded-r">
                              <p className="text-sm text-sage-green font-medium">
                                PM Insight: Security and privacy requirements surface immediately in real user testing. Build these constraints into user stories from day one.
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-slate-900 mb-3">Profile Setup & Discovery</h4>
                            <p className="text-sm text-slate-600 mb-4">
                              Built tutor and student profile systems with discoverability features. Key decision: 
                              what information is actually necessary vs. nice-to-have? What should be visible to whom?
                            </p>
                            <div className="bg-slate-50 border-l-4 border-sage-green p-4 rounded-r">
                              <p className="text-sm text-sage-green font-medium">
                                PM Insight: Information architecture decisions directly impact user trust and platform adoption. Over-collecting creates friction; under-collecting limits effectiveness.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Weekend Three */}
                <div className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-sage-green rounded-full flex items-center justify-center relative z-10">
                      <span className="text-white font-semibold">03</span>
                    </div>
                    <div className="ml-8 flex-1">
                      <div className="bg-white border border-slate-200 rounded-xl p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-xl font-semibold text-slate-900">Core Features & Polish</h3>
                          <span className="text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-full">Weekend Three</span>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-medium text-slate-900 mb-3">Session Management & Edge Cases</h4>
                            <p className="text-sm text-slate-600 mb-4">
                              Implemented core session logging and booking functionality. The complexity came from handling 
                              real-world scenarios: no-shows, schedule changes, emergency cancellations, makeup sessions. 
                              Each edge case that emerged in testing became a core feature requirement.
                            </p>
                            <div className="bg-slate-50 border-l-4 border-sage-green p-4 rounded-r">
                              <p className="text-sm text-sage-green font-medium">
                                PM Insight: Edge cases aren't exceptions—they're your core user stories. Products succeed based on how gracefully they handle messy reality.
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-slate-900 mb-3">Polish & User Experience</h4>
                            <p className="text-sm text-slate-600 mb-4">
                              Performance optimization, mobile responsiveness, and onboarding flows. This phase took 
                              as much time as building core features. Creating intuitive user experiences requires 
                              as much effort as building functional ones.
                            </p>
                            <div className="bg-slate-50 border-l-4 border-sage-green p-4 rounded-r">
                              <p className="text-sm text-sage-green font-medium">
                                PM Insight: User experience polish determines whether users actually adopt your solution. Budget for UX refinement as a core deliverable.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
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
                A month later, I'm processing 100+ sessions weekly with minimal manual intervention. 
                The transformation freed me to focus on strategic growth instead of getting bogged down 
                in logistics. All user feedback has been tremendously positive.
              </p>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center bg-white border border-slate-200 rounded-lg p-6">
                <div className="text-3xl font-bold text-sage-green mb-2">95%</div>
                <div className="font-medium text-slate-900 text-sm mb-1">Admin Time Saved</div>
                <div className="text-xs text-slate-600">From 3 hours to 10 minutes weekly</div>
              </div>
              <div className="text-center bg-white border border-slate-200 rounded-lg p-6">
                <div className="text-3xl font-bold text-sage-green mb-2">100%</div>
                <div className="font-medium text-slate-900 text-sm mb-1">Users Satisfied</div>
                <div className="text-xs text-slate-600">All stakeholders prefer new system</div>
              </div>
              <div className="text-center bg-white border border-slate-200 rounded-lg p-6">
                <div className="text-3xl font-bold text-sage-green mb-2">100+</div>
                <div className="font-medium text-slate-900 text-sm mb-1">Students Served</div>
                <div className="text-xs text-slate-600">Current platform scale</div>
              </div>
              <div className="text-center bg-white border border-slate-200 rounded-lg p-6">
                <div className="text-3xl font-bold text-sage-green mb-2">9</div>
                <div className="font-medium text-slate-900 text-sm mb-1">Spreadsheets Eliminated</div>
                <div className="text-xs text-slate-600">Now a single source of truth</div>
              </div>
            </div>

            {/* Before/After Comparison - No Gradient */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-8 text-center">Operational Transformation</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-xl">😔</span>
                    </div>
                    <h4 className="font-bold text-red-800">Before: Manual Chaos</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-red-500 rounded text-white text-xs flex items-center justify-center mr-3 mt-1">3h</div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Weekly Coordination Time</p>
                        <p className="text-xs text-slate-600">Phone calls, emails, spreadsheet updates</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-red-500 rounded text-white text-xs flex items-center justify-center mr-3 mt-1">9</div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Separate Spreadsheets</p>
                        <p className="text-xs text-slate-600">Version conflicts, manual errors</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-red-500 rounded text-white text-xs flex items-center justify-center mr-3 mt-1">0</div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Real-time Visibility</p>
                        <p className="text-xs text-slate-600">No one knew current status</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-xl">🚀</span>
                    </div>
                    <h4 className="font-bold text-green-800">After: Easy and Automated</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-500 rounded text-white text-xs flex items-center justify-center mr-3 mt-1">10m</div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Weekly Coordination Time</p>
                        <p className="text-xs text-slate-600">Exception handling only</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-500 rounded text-white text-xs flex items-center justify-center mr-3 mt-1">1</div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Unified Platform</p>
                        <p className="text-xs text-slate-600">Single source of truth</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-500 rounded text-white text-xs flex items-center justify-center mr-3 mt-1">✓</div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Real-time Visibility</p>
                        <p className="text-xs text-slate-600">All stakeholders stay updated</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reflection Section */}
          <section id="reflection" className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase text-xs tracking-wide">Reflection</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-slate-600 leading-relaxed">
                This project taught me that the best products solve problems you deeply understand. 
                Having skin in the game made every design decision feel consequential.
              </p>
            </div>

            {/* PM Insights with Numbers and Color */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-slate-600 font-semibold text-sm">01</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Solve for your users, not just yourself</h3>
                    <p className="text-sm text-slate-600">
                      User research still unearthed different priorities and pain points. Understanding real behavior 
                      patterns beats feature intuition every time.
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
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Constraints require ruthless prioritization</h3>
                    <p className="text-sm text-slate-600">
                      Time and resource constraints are an inevitability. Navigating that and  
                      focusing on what truly creates user value is key.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage-green/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-sage-green font-semibold text-sm">03</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Edge cases define product quality</h3>
                    <p className="text-sm text-slate-600">
                      Users judge your product by how it handles exceptions, not happy path scenarios. 
                      Edge cases aren't bugs, they're feature requirements that determine user trust.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sage-green rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-sm">04</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Build analytics from day one</h3>
                    <p className="text-sm text-slate-600">
                      Data-driven product decisions require instrumentation as a core feature, not an afterthought. 
                      Every user interaction should teach you something about product-market fit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current State & Vision */}
            <div className="bg-sage-green/5 border border-sage-green/20 rounded-lg p-8">
              <h3 className="font-semibold text-slate-900 mb-4">Current State & Next Steps</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                The platform now handles our entire operation automatically. We're processing all sessions 
                with minimal intervention, and I can focus on strategic work instead of coordination.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                <strong>What's next:</strong> With more time, I'd want to fully build a calendar for internal use to replace the need for Calendly entirely. I'm also considering automated scheduling suggestions, integrating email/push notifications, and actual payments support.
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-slate-200 pt-8">
            <div className="flex justify-between items-center">
              <button 
                onClick={() => document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-600 hover:text-slate-900 flex items-center"
              >
                ← Back to top
              </button>
              <a 
                href="https://tutoringdemo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage-green text-white px-6 py-2 rounded hover:bg-sage-green/90 transition-colors inline-flex items-center"
              >
                Live demo coming soon! →
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}