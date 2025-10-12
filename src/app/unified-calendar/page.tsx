'use client'

import Link from 'next/link'

export default function LandingPage() {
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
                  <span className="text-slate-700">Will&apos;s Tutoring</span>
                  <span className="text-sm text-slate-500">Founder, $470K+ revenue</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-16">
            <a 
              href="#projects"
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-all duration-300 group"
            >
              <span>View my work</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>

          {/* Projects Section */}
          <section id="projects" className="mt-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Projects & Case Studies</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Tutoring Platform Card */}
              <Link href="/tutoring-platform">
                <div className="bg-sage-green rounded-2xl p-8 h-80 flex flex-col justify-end cursor-pointer hover:opacity-90 transition-opacity group relative overflow-hidden">
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity"></div>
                  
                  <div className="relative z-10">
                    <p className="text-white text-xs font-semibold uppercase tracking-wider mb-2">Case Study</p>
                    <h3 className="text-white text-2xl font-bold leading-tight">
                      Tutoring Platform: From Spreadsheet Chaos to Scalable Solution
                    </h3>
                  </div>
                </div>
              </Link>

              {/* Placeholder Card */}
              <div className="bg-sage-green rounded-2xl p-8 h-80 flex flex-col justify-end relative overflow-hidden opacity-60">
                <div className="relative z-10">
                  <p className="text-white text-xs font-semibold uppercase tracking-wider mb-2">Project</p>
                  <h3 className="text-white text-2xl font-bold leading-tight">
                    More Coming Soon
                  </h3>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}