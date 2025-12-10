import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import microImg from '../images/micro2.png'
import Reveal from '../components/Reveal'
import AnimatedCounter from '../components/AnimatedCounter'

const HomepageClean = () => {
  const artRef = useRef(null)

  useEffect(() => {
    const el = artRef.current
    if (!el) return
    // use IntersectionObserver to trigger the entrance animation
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add('in-view')
          // if you want it only once, unobserve after triggered
          obs.unobserve(el)
        }
      })
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div className="page home hero-cream">

      {/* Modern Premium Hero */}
      <section className="hero-strong relative overflow-hidden reveal-auto">
        <div className="hero-strong-bg" aria-hidden="true" />
        {/* Animated background elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        {/* Mobile Banking Promo — larger, styled, positioned bottom-right on sm+ */}
        <div className="hidden sm:block absolute right-6 bottom-6 z-30">
          <div className="w-80 md:w-96">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-2xl p-4 md:p-5 shadow-2xl flex items-center gap-4 transform transition-all duration-200 hover:scale-102">
              <div className="flex-none w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center text-3xl md:text-4xl font-bold">📱</div>
              <div className="flex-1 min-w-0">
                <div className="text-base md:text-lg font-extrabold leading-snug">Mobile Banking — Dial <span className="font-mono bg-white/10 px-1 rounded">*356*</span></div>
                <div className="text-sm text-white/90 mt-1">24/7 transfers • Balance • Airtime • Bills</div>
                <div className="mt-2 text-xs text-white/80">No smartphone needed • Secure PIN verification</div>
              </div>
              <div className="flex-none">
                <a href="tel:*356*" className="inline-flex items-center justify-center bg-white text-indigo-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-white/95 transition">Dial *356*</a>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile fixed promo bar (visible on xs) */}
        <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40">
          <div className="mx-auto max-w-lg">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl p-3 flex items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl">📱</div>
                <div className="min-w-0">
                  <div className="text-sm font-bold truncate">Dial <span className="font-mono bg-white/10 px-1 rounded">*356*</span> — Mobile Banking</div>
                  <div className="text-[11px] text-white/90 mt-1 truncate">Transfers • Balance • Airtime</div>
                </div>
              </div>
              <a href="tel:*356*" className="ml-3 inline-flex items-center px-3 py-2 bg-white text-indigo-700 rounded-md font-semibold shadow-sm">Dial</a>
            </div>
          </div>
        </div>

        <div className="container relative z-10 py-12 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12 max-w-6xl mx-auto">
            {/* Left: Content */}
            <div className="hero-content text-center md:text-left">
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-400/30">
                <span className="text-sm font-semibold text-blue-700">💰 Financial Freedom Starts Here</span>
              </div>
              
              <h1 className="hero-strong-title text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight">
                Save Smart,<br />
                <span className="hero-strong-accent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Grow Faster</span>
              </h1>
              
              <p className="hero-strong-sub text-base md:text-lg text-gray-700 mb-4 md:mb-8 max-w-xl">
                Banking is now easier than ever.
              </p>
              
              <div className="flex justify-center md:justify-start mb-4 md:mb-8">
                <Link to="/contact" className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
                  Contact Us
                </Link>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-6 text-xs md:text-sm text-gray-700 pt-2 md:pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-2xl">⚡</span>
                  <span><strong>Instant</strong> account setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-2xl">🔒</span>
                  <span><strong>Bank-grade</strong> security</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-2xl">📱</span>
                  <span><strong>24/7</strong> support</span>
                </div>
              </div>
            </div>
            
            {/* Right: Visual showcase */}
            <div className="relative h-64 md:h-full min-h-64 md:min-h-96 flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Floating cards animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                <img src={microImg} alt="Onit App" className="relative w-full rounded-3xl shadow-2xl object-cover h-64 md:h-96 animate-float" />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 left-6 bg-white rounded-xl shadow-xl p-4 max-w-xs animate-bounce" style={{animationDelay: '0.5s'}}>
                  <div className="text-sm font-semibold text-gray-900">✓ Save up to 50% faster</div>
                  <div className="text-xs text-gray-600 mt-1">Join 10,000+ savers & borrowers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Spotlight — handpicked for you */}
      <Reveal>
        <section className="featured-products-hero py-20 reveal-auto relative overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
              <div>
                <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100">
                  <span className="text-sm font-semibold text-indigo-700">✨ Spotlight</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900">Your financial and banking needs deserve solutions that match</h2>
                <p className="text-gray-600 max-w-2xl text-base">Find out how we can help you turn dreams into your reality.</p>
              </div>

              <div className="hidden sm:flex items-center gap-4">
                <Link to="/services#account-products" className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow hover:scale-105 transition-all duration-300">
                  <span className="text-sm">Explore All Products</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-6">
              {/* MA01: Hero Mini - left */}
              <Link to="/services/ma01" className="hero-mini-card animate-fade-in-delay-1 group relative block p-6 rounded-3xl border border-gray-100 bg-white hover:shadow-2xl transform transition-all duration-400 hover:-translate-y-3 overflow-hidden" style={{animationDelay: '0.08s'}}>
                <div className="absolute -right-12 -top-12 w-52 h-52 rounded-full bg-indigo-100 opacity-30 blur-2xl" aria-hidden />
                <div className="relative z-10 flex items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white text-3xl font-extrabold shadow">💼</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-extrabold text-gray-900">Maisha Salary Account</h3>
                    <p className="text-gray-600 mt-1">Fast salary account — instant setup, fee-free maintenance, mobile access.</p>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="inline-block px-3 py-1 text-xs bg-indigo-50 text-indigo-700 rounded-full">Savings • MA01</span>
                      <span className="text-sm text-gray-500">Start in minutes</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* MA04: Hero Mini - right */}
              <Link to="/services/ma04" className="hero-mini-card animate-fade-in-delay-2 group relative block p-6 rounded-3xl border border-gray-100 bg-white hover:shadow-2xl transform transition-all duration-400 hover:-translate-y-3 overflow-hidden" style={{animationDelay: '0.18s'}}>
                <div className="absolute -left-12 -bottom-12 w-52 h-52 rounded-full bg-pink-100 opacity-30 blur-2xl" aria-hidden />
                <div className="relative z-10 flex items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-600 to-purple-500 flex items-center justify-center text-white text-3xl font-extrabold shadow">🚀</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-extrabold text-gray-900">Maisha Student Account</h3>
                    <p className="text-gray-600 mt-1">Student account for college students — low min balance and easy mobile access.</p>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="inline-block px-3 py-1 text-xs bg-pink-50 text-pink-700 rounded-full">Business • MA04</span>
                      <span className="text-sm text-gray-500">Build working capital</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="sm:hidden text-center mb-6">
              <Link to="/services#account-products" className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow hover:scale-105 transition-all duration-300">
                <span>Explore All Products</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Explore Onit Microfinance Bank Services */}
      <Reveal>
        <section className="services-explore py-20 bg-gradient-to-br from-indigo-700 via-blue-600 to-blue-800 reveal-auto">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="explore-title text-white text-4xl font-bold mb-4">Explore Onit Microfinance Bank</h2>
            <p className="explore-subtitle text-white/90 text-lg">We offer tailor-made banking solutions to our clients drawn from various segments of the economy.</p>
          </div>

          <div className="services-explore-layout grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="services-explore-grid grid grid-cols-1 md:grid-cols-2 gap-12">
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

            {/* Right-side artwork: visible on all screens */}
            <div className="services-explore-art flex justify-center items-center mt-8 md:mt-0">
              <div ref={artRef} className="art-frame w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-400">
                <img src={microImg} alt="Microfinance" className="w-full h-64 sm:h-80 md:h-96 object-cover img-float" />
              </div>
            </div>
          </div>
        </div>
        </section>
      </Reveal>

      {/* Need Help Section */}
      <Reveal>
        <section className="need-help py-20 bg-white reveal-auto">
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
      </Reveal>

      {/* Stats & Trust Section */}
      <section className="stats-section py-20 bg-gradient-to-r from-blue-50 to-indigo-50 reveal-auto">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="stats-title text-3xl md:text-4xl font-bold text-blue-900 mb-3">Why Choose Onit Microfinance  Bank ?</h2>
            <p className="stats-subtitle text-gray-600 text-lg max-w-2xl mx-auto">Our commitment to excellence and customer satisfaction has made us a trusted partner for thousands of customers.Numbers that speak about our quality of service.
              Our focus is firmly on the future and empowering our communities with relevant financial products. </p>
          </div>

          <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="stat-card text-center">
              <AnimatedCounter target={10000} duration={2500} suffix="+" />
              <h3 className="stat-label font-semibold text-gray-800 mb-2">Active Customers</h3>
              <p className="stat-description text-gray-600 text-sm">Thousands of satisfied customers trust us with their financial needs</p>
            </div>

            {/* Stat 2 */}
            <div className="stat-card text-center">
              <AnimatedCounter target={99.9} duration={2500} suffix="%" decimals={1} />
              <h3 className="stat-label font-semibold text-gray-800 mb-2">Uptime</h3>
              <p className="stat-description text-gray-600 text-sm">Reliable and secure platform available 24/7 for all transactions</p>
            </div>

            {/* Stat 3 */}
            <div className="stat-card text-center">
              <AnimatedCounter target={500000} duration={2500} suffix="+" />
              <h3 className="stat-label font-semibold text-gray-800 mb-2">Transactions</h3>
              <p className="stat-description text-gray-600 text-sm">Millions of successful transactions processed securely every year</p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="testimonials py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 reveal-auto">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Real stories from small businesses and entrepreneurs who grew with Onit.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card group p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-blue-100 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="flex items-start gap-1 mb-4">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium text-base italic">"Onit helped my shop stay afloat — the quick micro-loan was a lifesaver. Friendly support and simple app."</p>
              <div className="flex items-center gap-3 border-t pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">A</div>
                <div>
                  <div className="font-bold text-gray-900">Aisha</div>
                  <div className="text-xs text-gray-500">Market Vendor</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card group p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-purple-100 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-start gap-1 mb-4">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium text-base italic">"I automated savings for my staff and we finally had the cushion to expand. Their tools are practical."</p>
              <div className="flex items-center gap-3 border-t pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold">E</div>
                <div>
                  <div className="font-bold text-gray-900">Emmanuel</div>
                  <div className="text-xs text-gray-500">Café Owner</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card group p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-indigo-100 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="flex items-start gap-1 mb-4">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium text-base italic">"Fast transfers and transparent fees — makes day-to-day business easier. Highly recommended."</p>
              <div className="flex items-center gap-3 border-t pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white font-bold">G</div>
                <div>
                  <div className="font-bold text-gray-900">Grace</div>
                  <div className="text-xs text-gray-500">Tailor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  )
}

export default HomepageClean
