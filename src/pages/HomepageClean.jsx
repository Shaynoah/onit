import React from 'react'

const HomepageClean = () => {
  return (
    <div className="page home hero-cream">

      {/* Bold full-bleed hero */}
      <section className="hero-strong relative">
        <div className="hero-strong-bg" aria-hidden="true" />
        <div className="container relative z-10 py-24">
          <div className="hero-strong-inner max-w-4xl mx-auto text-center relative">
            <h1 className="hero-strong-title">READY TO <span className="hero-strong-accent">START SAVING?</span></h1>
            <p className="hero-strong-sub mt-4">Open an account in minutes — save smarter, borrow safely, and grow with tools designed for you.</p>
            <div className="pop-bubble-container">
              <div className="pop-bubble flex flex-col items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                <span className="text-lg font-bold mt-2">Just fix it!</span>
              </div>
            </div>
            <div className="hero-cta-wrap mt-8 flex items-center justify-center gap-4">
            
            
            </div>
          </div>
        </div>
      </section>

      {/* Explore Onit Microfinance Bank Services */}
      <section className="services-explore py-20 bg-gradient-to-br from-indigo-700 via-blue-600 to-blue-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="explore-title text-white text-4xl font-bold mb-4">Explore Onit Microfinance Bank</h2>
            <p className="explore-subtitle text-white/90 text-lg">We offer tailor-made banking solutions to our clients drawn from various segments of the economy.</p>
          </div>

          <div className="services-explore-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Safe & Secure */}
            <div className="service-explore-item text-center text-white">
              <div className="explore-icon mb-4 flex justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 11V8C8 6.343 9.343 5 11 5H13C14.657 5 16 6.343 16 8V11" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Safe & Secure</h3>
              <p className="text-sm text-white/80">Our security practices along with a multi-level authentication system has been put in place to authenticate your identity when you access your online account.</p>
            </div>

            {/* Loans */}
            <div className="service-explore-item text-center text-white">
              <div className="explore-icon mb-4 flex justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 6v12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 9h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Loans</h3>
              <p className="text-sm text-white/80">We provide customers with loans at affordable interest rate to ensure customer satisfaction and business continuity.</p>
            </div>

            {/* Transfer Money */}
            <div className="service-explore-item text-center text-white">
              <div className="explore-icon mb-4 flex justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M3 12l7-7v4h11v6H10v4l-7-7z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Transfer Money</h3>
              <p className="text-sm text-white/80">Send money to friends, families, business associates and others from the comfort of your home.</p>
            </div>

            {/* 24/7 Personal Support */}
            <div className="service-explore-item text-center text-white">
              <div className="explore-icon mb-4 flex justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">24/7 Personal Support</h3>
              <p className="text-sm text-white/80">We offer customer support where and when you need it – in the branch, on your phone or online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="need-help py-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Question Icon Circle */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <div className="need-help-icon-wrapper">
                <div className="need-help-icon">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#0B69FF" strokeWidth="1.5"/>
                    <text x="12" y="16" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#0B69FF" fontFamily="Montserrat">?</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="need-help-title text-3xl md:text-4xl font-bold text-blue-900 mb-3">Need Help ?</h2>
              <p className="need-help-subtitle text-gray-600 text-lg mb-6">We are here, we will support you in case of any inquiry.</p>
              <a href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Trust Section */}
      <section className="stats-section py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="stats-title text-3xl md:text-4xl font-bold text-blue-900 mb-3">Why Trust Onit ?</h2>
            <p className="stats-subtitle text-gray-600 text-lg max-w-2xl mx-auto">Our commitment to excellence and customer satisfaction has made us a trusted partner for thousands of customers.</p>
          </div>

          <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="stat-card text-center">
              <div className="stat-number text-5xl font-bold text-blue-600 mb-3">10K+</div>
              <h3 className="stat-label font-semibold text-gray-800 mb-2">Active Customers</h3>
              <p className="stat-description text-gray-600 text-sm">Thousands of satisfied customers trust us with their financial needs</p>
            </div>

            {/* Stat 2 */}
            <div className="stat-card text-center">
              <div className="stat-number text-5xl font-bold text-blue-600 mb-3">99.9%</div>
              <h3 className="stat-label font-semibold text-gray-800 mb-2">Uptime</h3>
              <p className="stat-description text-gray-600 text-sm">Reliable and secure platform available 24/7 for all transactions</p>
            </div>

            {/* Stat 3 */}
            <div className="stat-card text-center">
              <div className="stat-number text-5xl font-bold text-blue-600 mb-3">50M+</div>
              <h3 className="stat-label font-semibold text-gray-800 mb-2">Transactions</h3>
              <p className="stat-description text-gray-600 text-sm">Millions of successful transactions processed securely every year</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomepageClean
