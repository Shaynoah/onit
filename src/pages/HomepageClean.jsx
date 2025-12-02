import React from 'react'

const HomepageClean = () => {
  return (
    <div className="page home hero-cream">
      <main className="hero-main hero-cream" aria-label="Hero">
        {/* Top headline borrowed from the user's fragment */}
        <div className="container">
          <div className="top-title-wrap text-center mb-6">
            <h2 className="top-title">READY TO <span className="text-accent">START SAVING?</span></h2>
          </div>
        </div>
        <div className="container hero-inner">
          <div className="hero-grid">
            <section className="hero-left">
              <div className="badge-pill">Trusted by 50,000+ customers</div>
              <h1 className="hero-title">
                Banking Made <span className="accent-text">Simple</span> for <strong>Everyone</strong>
              </h1>

              <p className="hero-sub">Empowering individuals and small businesses with accessible financial services. Get loans, save smarter, and grow your wealth with Onit Bank.</p>

              <div className="hero-cta-wrap">
                <a className="btn-primary hero-cta cta-green" href="/get-started">Open Free Account</a>
                <a className="btn-ghost hero-cta-secondary" href="/services">Explore Services</a>
              </div>

              <div className="hero-stats mt-8 flex gap-6 items-center">
                <span className="stat-item"><span className="stat-dot" />Bank-level Security</span>
                <span className="stat-item"><span className="stat-dot" />Low Interest Rates</span>
                <span className="stat-item"><span className="stat-dot" />24/7 Support</span>
              </div>
            </section>

            <aside className="hero-right" aria-hidden="true">
              <div className="balance-card animate-hero-card" role="img" aria-label="Account preview">
                <div className="balance-flag">This Month <span className="flag-amount">+₦85,000</span></div>
                <div className="balance-inner">
                  <div className="balance-row">
                    <div className="balance-title">Total Balance</div>
                    <div className="balance-amount">₦2,450,000</div>
                  </div>

                  <div className="balance-cards-grid">
                    <div className="mini-card">
                      <div className="mini-title">Savings</div>
                      <div className="mini-amount">₦1,200,000</div>
                      <div className="mini-note">+12.5% APY</div>
                    </div>
                    <div className="mini-card">
                      <div className="mini-title">Loan Balance</div>
                      <div className="mini-amount">₦250,000</div>
                      <div className="mini-note">5% interest</div>
                    </div>
                  </div>

                  <div className="balance-actions">
                    <button className="btn-primary cta-green">Quick Transfer</button>
                  </div>
                </div>
                <div className="balance-toast">Loan Approved!</div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* CTA hero borrowed layout: left character + right CTA */}
      <section className="container py-12 cta-hero-block" aria-label="Quick start">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="cta-left flex justify-center">
            <img src="/hero_character.png" alt="Happy customer" className="cta-hero-image" />
          </div>

          <div className="cta-right">
            <div className="cta-bubble">
              Just fix it!
            </div>
            <p className="mt-4 text-lg">Dial <span className="ussd-code">*281#</span> on Safaricom or Airtel</p>

            <div className="appstore-row mt-6 flex gap-4">
              <img src="/googleplay.png" alt="Google Play" className="app-store-icon" />
              <img src="/appstore.png" alt="Apple Store" className="app-store-icon" />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 services-section" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto text-center mb-6">
          <h2 id="services-heading" className="services-heading text-3xl font-bold mb-2">
            <span className="services-title">Our Services</span>
           
            <span className="services-deco" aria-hidden="true">✨</span>
          </h2>
          <h3 className="services-subheading text-2xl font-semibold mt-1">Financial Solutions for Every Need</h3>
          <p className="text-slate-600 mb-8">From personal banking to business financing, we offer a comprehensive range of services designed to help you achieve your financial goals.</p>
        </div>

          <div className="container max-w-6xl mx-auto">
          <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Our services">
            <article className="service-card service-card--large animate-service" style={{animationDelay:'60ms'}} aria-labelledby="svc-1">
              <div className="service-icon" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8z" stroke="#0B69FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 8V6a3 3 0 1 1 6 0v2" stroke="#0B69FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <div className="service-body">
                <h3 id="svc-1" className="font-semibold">Business accounts</h3>
                <p className="text-slate-600 mt-2">Open business accounts with multiple users, automated statements, and easy reconciliation.</p>
              </div>
              <a className="service-link" href="/services/accounts"><span>Learn more</span> <span className="chev">→</span></a>
            </article>

            
              <article className="service-card service-card--small animate-service" style={{animationDelay:'160ms'}} aria-labelledby="svc-2">
              <div className="service-icon" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#12B76A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <div className="service-body">
                <h3 id="svc-2" className="font-semibold">Payments</h3>
                <p className="text-slate-600 mt-2">Send local & international payments easily with transparent fees and tracking.</p>
              </div>
              <a className="service-link" href="/services/payments"><span>Get started</span> <span className="chev">→</span></a>
              </article>

              <article className="service-card service-card--small animate-service" style={{animationDelay:'260ms'}} aria-labelledby="svc-3">
              <div className="service-icon" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" stroke="#061739" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 11V8C8 6.343 9.343 5 11 5H13C14.657 5 16 6.343 16 8V11" stroke="#061739" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <div className="service-body">
                <h3 id="svc-3" className="font-semibold">Insights & lending</h3>
                <p className="text-slate-600 mt-2">Access business insights, reports, and short-term micro-loans tailored for small growth.</p>
              </div>
              <a className="service-link" href="/services/lending"><span>Apply</span> <span className="chev">→</span></a>
              </article>

              <article className="service-card service-card--small animate-service" style={{animationDelay:'320ms'}} aria-labelledby="svc-4">
                <div className="service-icon" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#0B69FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 12h8" stroke="#0B69FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                <div className="service-body">
                  <h3 id="svc-4" className="font-semibold">Invoicing & collections</h3>
                  <p className="text-slate-600 mt-2">Create, send, and collect invoices on autopilot—manage receivables in one place.</p>
                </div>
                <a className="service-link" href="/services/invoicing"><span>Manage</span> <span className="chev">→</span></a>
              </article>
            <article className="service-card animate-service" style={{animationDelay:'380ms'}} aria-labelledby="svc-5">
                <div className="service-icon" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h16v4H3zM3 13h16v4H3z" stroke="#12B76A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                <div className="service-body">
                  <h3 id="svc-5" className="font-semibold">Payroll & HR</h3>
                  <p className="text-slate-600 mt-2">Automate payroll, employee payouts and benefits with built-in compliance tools.</p>
                </div>
                <a className="service-link" href="/services/payroll"><span>Launch</span> <span className="chev">→</span></a>
              </article>
              <article className="service-card service-card--accent animate-service" aria-labelledby="svc-6" style={{animationDelay:'420ms'}}>
                <div className="service-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1v10" stroke="#0B69FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 22h16" stroke="#0B69FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                <div className="service-body"><h4 className="font-semibold">Quick transfer</h4><p className="text-slate-600">Move funds in seconds</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="container py-12 why-choose">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="features-heading text-3xl font-bold mb-4">Why choose <span className="gradient-text">ONIT Bank</span></h2>
          <p className="text-slate-600 mb-8">We're mission-driven to serve small businesses. Fast transfers, transparent pricing, and tools that help you grow.</p>

          <div className="why-grid grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-label="Why choose ONIT Bank">
            <article className="why-card animate-whyCard why-card--accent-blue" role="listitem" aria-labelledby="why-1" style={{animationDelay:'80ms'}}>
              <div className="why-icon" aria-hidden="true">
                {/* SVG Icon: Briefcase */}
                <svg aria-hidden="true" focusable="false" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3H14V5H19C20.1 5 21 5.9 21 7V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V7C3 5.9 3.9 5 5 5H10V3Z" stroke="#0B69FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 10H17" stroke="#0B69FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 id="why-1" className="font-semibold">Built for SMEs</h3>
              <p className="text-slate-600 mt-2">Products and loans designed specifically for entrepreneurs and small business owners.</p>
              <span className="top-badge">Popular</span>
              <a className="why-card-cta" href="/features/sme" aria-label="Learn more about ONIT services for SMEs"><span>Learn more</span> <span className="chev">→</span></a>
            </article>

            <article className="why-card animate-whyCard why-card--accent-green" role="listitem" aria-labelledby="why-2" style={{animationDelay:'200ms'}}>
              <div className="why-icon" aria-hidden="true">
                {/* SVG Icon: Lightning */}
                <svg aria-hidden="true" focusable="false" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#12B76A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 id="why-2" className="font-semibold">Instant Transfers</h3>
              <p className="text-slate-600 mt-2">Move money within seconds with transparent rates and no hidden fees.</p>
              <span className="top-badge">Instant</span>
              <a className="why-card-cta" href="/features/transfers" aria-label="See how transfers are instant"><span>See how</span> <span className="chev">→</span></a>
            </article>

            <article className="why-card animate-whyCard why-card--accent-rose" role="listitem" aria-labelledby="why-3" style={{animationDelay:'320ms'}}>
              <div className="why-icon" aria-hidden="true">
                {/* SVG Icon: Lock */}
                <svg aria-hidden="true" focusable="false" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" stroke="#061739" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 11V8C8 6.343 9.343 5 11 5H13C14.657 5 16 6.343 16 8V11" stroke="#061739" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 id="why-3" className="font-semibold">Secure & Reliable</h3>
              <p className="text-slate-600 mt-2">Bank-grade security, data protection, and reliable systems to protect your business.</p>
              <span className="top-badge">Safe</span>
              <a className="why-card-cta" href="/security" aria-label="View ONIT security practices"><span>Security</span> <span className="chev">→</span></a>
            </article>
          </div>
        </div>
      </section>
    
        {/* Bottom brand bar (borrowed) */}
        <div className="bottom-brand bg-white text-black w-full py-6 mt-10 flex flex-row justify-between px-10 items-center">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold tracking-widest text-accent-dark">ONIT BANK</h2>
            <span className="text-sm text-gray-600">Microfinance Bank</span>
          </div>

          <div className="text-right">
            <p className="font-semibold text-accent-dark">A better way to access</p>
            <p className="text-red-500 font-bold text-xl -mt-1">MORE</p>
          </div>
        </div>
      <section className="container py-12 digital-experience">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">Digital Banking Experience</h2>
            <p className="text-slate-600 mb-6">Designed for speed — modern interfaces for tracking, paying, and reconciling. Built for the way small businesses work.</p>

            <div className="dx-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
              <article className="dx-feature animate-dxFeature" style={{animationDelay:'60ms'}} aria-labelledby="dx-1">
                <div className="dx-feature-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8z" stroke="#0B69FF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 8V6a3 3 0 1 1 6 0v2" stroke="#0B69FF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="dx-feature-body">
                  <h4 id="dx-1" className="font-semibold">Fast onboarding</h4>
                  <p className="text-slate-600">Open an account in minutes and start sending money quickly, with identity checks streamlined for businesses.</p>
                </div>
                <a className="dx-feature-cta" href="/get-started">Try it →</a>
              </article>

              <article className="dx-feature animate-dxFeature" style={{animationDelay:'140ms'}} aria-labelledby="dx-2">
                <div className="dx-feature-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12H7" stroke="#12B76A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 6H3v12h18" stroke="#12B76A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="dx-feature-body">
                  <h4 id="dx-2" className="font-semibold">One-click Payments</h4>
                  <p className="text-slate-600">Schedule, repeat, and authorize payments securely with a single tap — built for teams and vendors.</p>
                </div>
                <a className="dx-feature-cta" href="/features/payments">See demo →</a>
              </article>

              <article className="dx-feature animate-dxFeature" style={{animationDelay:'220ms'}} aria-labelledby="dx-3">
                <div className="dx-feature-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="#061739" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 8h.01" stroke="#061739" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 8h.01" stroke="#061739" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div className="dx-feature-body">
                  <h4 id="dx-3" className="font-semibold">Real-time insights</h4>
                  <p className="text-slate-600">Dashboards show balances, inflows, trends, and everything you need for smarter cashflow management.</p>
                </div>
                <a className="dx-feature-cta" href="/features/insights">Explore →</a>
              </article>

              <article className="dx-feature animate-dxFeature" style={{animationDelay:'300ms'}} aria-labelledby="dx-4">
                <div className="dx-feature-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h14l4 4v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" stroke="#0B69FF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="dx-feature-body">
                  <h4 id="dx-4" className="font-semibold">Seamless integrations</h4>
                  <p className="text-slate-600">Connect with accounting, ERPs, and invoicing tools for a frictionless reconciliation flow.</p>
                </div>
                <a className="dx-feature-cta" href="/integrations">Connect →</a>
              </article>
            </div>
          </div>

          <div className="dx-preview" aria-hidden="true">
            <div className="dx-stack" role="img" aria-label="Onit app card previews">
              <div className="dx-stack-card dx-stack-card--back" style={{animationDelay:'520ms'}}>
                <div className="dx-card-head">Accounts</div>
                <div className="dx-card-row" />
                <div className="dx-card-row short" />
                <div className="dx-card-row" />
              </div>
              <div className="dx-stack-card dx-stack-card--mid" style={{animationDelay:'640ms'}}>
                <div className="dx-card-head">Payments</div>
                <div className="dx-card-row" />
                <div className="dx-card-row short" />
                <div className="dx-card-row" />
              </div>
              <div className="dx-stack-card dx-stack-card--front" style={{animationDelay:'760ms'}}>
                <div className="dx-card-head">Insights</div>
                <div className="dx-card-row" />
                <div className="dx-card-row short" />
                <div className="dx-card-row" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomepageClean
