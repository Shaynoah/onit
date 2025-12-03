import React, { useState } from 'react'
import historyImg from '../images/Our History.jpg'
import boardImg from '../images/Board of Directors.jpg'

const About = () => {
  const [open, setOpen] = useState(null)

  const toggle = (key) => setOpen(open === key ? null : key)

  return (
    <section className="page about">
      <div className="container py-8">
        <div className="about-hero rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 p-12 shadow-sm mb-8">
          <h1 className="about-title">About</h1>
          <div className="about-statements mt-6 grid gap-4 sm:grid-cols-3">
            <div className="about-statement">
              <p className="statement-text">We believe financial access is a right, not a privilege.</p>
            </div>
            <div className="about-statement">
              <p className="statement-text">Empowering entrepreneurs transforms communities.</p>
            </div>
            <div className="about-statement">
              <p className="statement-text">Your success is our mission.</p>
            </div>
          </div>
        </div>

        <div className="our-purpose-section mt-12">
          <h2 className="our-purpose-heading">Our Purpose</h2>
          <p className="our-purpose-subheading ">We exist to make a positive impact in Africa.</p>
        </div>

        <div className="mission-vision-values mt-16">
          <div className="mvv-item">
            <div className="mvv-icon">🎯</div>
            <div className="mvv-body">
              <h3 className="mvv-heading">Mission</h3>
              <p className="mvv-content">To expand access to affordable financial services that empower underserved entrepreneurs and households to thrive.</p>
            </div>
          </div>

          <div className="mvv-item">
            <div className="mvv-icon">🌟</div>
            <div className="mvv-body">
              <h3 className="mvv-heading">Vision</h3>
              <p className="mvv-content">To be our customers’ most trusted lifetime partner, passionate about helping them achieve their financial goals. And, by helping generations achieve those goals, help build the financial prosperity of the societies, businesses and shareholders we engage with.</p>
            </div>
          </div>

          <div className="mvv-item">
            <div className="mvv-icon">💎</div>
            <div className="mvv-body">
              <h3 className="mvv-heading">Core Values</h3>
              <ul className="mvv-list">
                <li><strong>Integrity:</strong> We operate transparently and responsibly.</li>
                <li><strong>Customer-first:</strong> Our services are designed around real community needs.</li>
                <li><strong>Innovation:</strong> We leverage technology to lower barriers and costs.</li>
                <li><strong>Impact:</strong> We measure success by positive outcomes for clients.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-intro mt-12 mb-6">
          <h2 className="about-intro-heading">Get to know more about us</h2>
          <p className="about-intro-sub">Get to know our leaders as well as our initiatives to uplift our communities.</p>
        </div>

        <div className="about-info-cards mt-20">
          <a href="/history" className="info-card-link" aria-label="Our History">
            <div className="info-card" role="button">
              <div className="info-card-bg" style={{ backgroundImage: `url(${historyImg})` }} />
              <div className="info-card-overlay">
                <h3 className="info-card-title">Our History</h3>
              </div>
            </div>
          </a>

          <a href="/board-of-directors" className="info-card-link" aria-label="Board of Directors">
            <div className="info-card" role="button">
              <div className="info-card-bg" style={{ backgroundImage: `url(${boardImg})` }} />
              <div className="info-card-overlay">
                <h3 className="info-card-title">Board of Directors</h3>
              </div>
            </div>
          </a>

          <a href="/senior-management" className="info-card-link" aria-label="Senior Management">
            <div className="info-card">
              <div className="info-card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop')" }} />
              <div className="info-card-overlay">
                <h3 className="info-card-title">Senior Management</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
