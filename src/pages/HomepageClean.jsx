import React from 'react'

const HomepageClean = () => {
  return (
    <div className="page home hero-cream">

      {/* Bold full-bleed hero */}
      <section className="hero-strong relative">
        <div className="hero-strong-bg" aria-hidden="true" />
        <div className="container relative z-10 py-24">
          <div className="hero-strong-inner max-w-4xl mx-auto text-center">
            <h1 className="hero-strong-title">READY TO <span className="hero-strong-accent">START SAVING?</span></h1>
            <div className="pop-bubble inline-flex items-center gap-3 mt-6 mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="#061739" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="#fff"/></svg>
              <span>Just fix it!</span>
            </div>
            <p className="hero-strong-sub mt-4">Open an account in minutes — save smarter, borrow safely, and grow with tools designed for you.</p>
            <div className="hero-cta-wrap mt-8 flex items-center justify-center gap-4">
              <a className="btn-primary hero-cta cta-green" href="/get-started">Open Free Account</a>
              <a className="btn-ghost hero-cta-secondary" href="/contact">Give feedback</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomepageClean
