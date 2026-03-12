'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const projects = [
  {
    id: 'tutoring-platform',
    title: 'Automating My Tutoring Business: Scheduling, Payments, and Escalations',
    tag: 'PROJECT · 2025',
    href: '/tutoring-platform',
  },
  {
    id: 'unified-calendar',
    title: 'Solving Calendar Fragmentation with a Unified ICS Aggregator',
    tag: 'PROJECT · 2025',
    href: '/unified-calendar',
  },
  {
    id: 'ai-prototype',
    title: 'What If My Tutoring Business Ran Itself? An AI-Native Prototype',
    tag: 'PROJECT · 2026',
    href: '/ai-prototype',
  },
  {
    id: 'pinterest-case',
    title: 'Writing an Ivey Case: Pinterest at a Strategic Crossroads',
    tag: 'CASE STUDY · 2025',
    href: '/pinterest-case',
  },
  {
    id: 'duolingo',
    title: 'Reimagining Streak Loss: A Duolingo Feature Concept',
    tag: 'CASE STUDY · 2025',
    href: '/duolingo',
  },
]

const experience = [
  { year: '2025–', company: 'Microsoft', role: 'Product Manager Intern' },
  { year: '2025', company: 'EY-Parthenon', role: 'Strategy Summer Associate' },
  { year: '2024', company: 'CIBC', role: 'AI Strategy Intern' },
  { year: '2019', company: 'Will\u2019s Tutoring', role: 'Founder' },
]

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)

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
      `}} />

      {/* Floating Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 lg:py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sage-green rounded-full"></div>
              <span className="text-lg font-semibold text-slate-900 tracking-tight">WILLIAM ZHAI</span>
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

      {/* Main content */}
      <main className="px-6 lg:px-12">
        <div style={{ maxWidth: 900 }} className="mx-auto">

          {/* Bio section */}
          <div
            style={{ paddingTop: '9rem', animation: 'fadeInUp 0.6s ease-out' }}
          >
            {/* Bio container */}
            <div className="bg-sage-green/5 border border-sage-green/20 rounded-2xl" style={{
              padding: '3.5rem 3rem',
            }}>
              {/* Mobile: stacked */}
              <div className="lg:hidden">
                <div>
                  <h1 style={{
                    fontSize: 46,
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                  }}
                  className="text-sage-green">
                    William Zhai
                  </h1>
                  <p style={{ fontSize: 20, color: '#64748b', marginTop: '0.5rem' }}>
                    Product & Strategy
                  </p>
                </div>
                <div
                  className="grid mt-8"
                  style={{
                    gridTemplateColumns: '50px 160px auto',
                    gap: '0 1.25rem',
                    rowGap: '0.45rem',
                  }}
                >
                  {experience.map((exp) => (
                    <React.Fragment key={exp.company}>
                      <span className="text-sage-green" style={{ fontSize: 12, fontVariantNumeric: 'tabular-nums' }}>
                        {exp.year}
                      </span>
                      <span style={{ fontSize: 13, fontWeight: 600, color: '#1e293b' }}>
                        {exp.company}
                      </span>
                      <span style={{ fontSize: 12, color: '#64748b' }}>
                        {exp.role}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Desktop: left/right split */}
              <div className="hidden lg:flex justify-between items-center">
                <div>
                  <h1 style={{
                    fontSize: 46,
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                  }}
                  className="text-sage-green">
                    William Zhai
                  </h1>
                  <p style={{ fontSize: 20, color: '#64748b', marginTop: '0.5rem' }}>
                    Product & Strategy
                  </p>
                </div>
                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: '50px 160px auto',
                    gap: '0 1.25rem',
                    rowGap: '0.45rem',
                  }}
                >
                  {experience.map((exp) => (
                    <React.Fragment key={exp.company}>
                      <span className="text-sage-green" style={{ fontSize: 12, fontVariantNumeric: 'tabular-nums' }}>
                        {exp.year}
                      </span>
                      <span style={{ fontSize: 13, fontWeight: 600, color: '#1e293b' }}>
                        {exp.company}
                      </span>
                      <span style={{ fontSize: 12, color: '#64748b' }}>
                        {exp.role}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section divider + label */}
          <div style={{ marginTop: '3rem', padding: '0 3rem', opacity: 0, animation: 'fadeInUp 0.8s ease-out 0.4s both' }}>
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }} />
            <h2 className="text-sage-green" style={{
              marginTop: '1rem',
              marginBottom: '1.5rem',
              fontSize: 19,
              fontWeight: 600,
              textAlign: 'center',
            }}>
              Projects & Case Studies
            </h2>
          </div>

          {/* Project list */}
          <div style={{ paddingBottom: '4rem', padding: '0 3rem 4rem 3rem' }}>
            {projects.map((project, i) => {
              const isLast = i === projects.length - 1
              const isHovered = hoveredRow === project.id
              return (
                <Link
                  key={project.id}
                  href={project.href}
                  className="block"
                  onMouseEnter={() => setHoveredRow(project.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                  style={{
                    opacity: 0,
                    animation: `fadeInUp 0.5s ease-out ${0.5 + i * 0.05}s both`,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1.25rem 12px',
                      borderBottom: isLast ? 'none' : '1px solid rgba(0,0,0,0.06)',
                      transition: 'background-color 0.2s ease',
                      backgroundColor: isHovered ? 'rgba(168,198,162,0.06)' : 'transparent',
                      marginLeft: -12,
                      marginRight: -12,
                      borderRadius: 6,
                    }}
                  >
                    <div style={{
                      transition: 'transform 0.2s ease',
                      transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
                    }}>
                      <h3 style={{
                        fontSize: 17,
                        fontWeight: 600,
                        color: '#1e293b',
                        lineHeight: 1.3,
                        letterSpacing: '-0.01em',
                      }}>
                        {project.title}
                      </h3>
                      <span className="text-sage-green" style={{
                        fontSize: 12,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginTop: 4,
                        display: 'inline-block',
                      }}>
                        {project.tag}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: isHovered ? '#2E4C3C' : '#A8C6A2',
                        border: `1px solid ${isHovered ? '#A8C6A2' : 'rgba(168,198,162,0.3)'}`,
                        padding: '0.4rem 1rem',
                        borderRadius: 9999,
                        whiteSpace: 'nowrap',
                        transition: 'all 0.2s ease',
                        flexShrink: 0,
                        marginLeft: '1.5rem',
                      }}
                    >
                      Read <span style={{
                        display: 'inline-block',
                        transition: 'transform 0.2s ease',
                        transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
                      }}>&rarr;</span>
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
