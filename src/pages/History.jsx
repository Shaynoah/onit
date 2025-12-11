import React from 'react'

const History = () => {
  const milestones = [
    { year: '2016', title: 'Bold Beginning', description: 'Founded in September 2016, ONIT Microfinance Bank began operations with a bold vision—to transform access to credit through digital lending solutions.' },
    { year: '2014', title: 'Strategic Rebrand', description: 'Maisha Microfinance officially transitioned into ONIT Microfinance Bank, marking the beginning of a new era of growth, identity, and customer-centered innovation.' },
    { year: 'Growth', title: 'Rapid Expansion', description: 'Achieved significant milestones with rapid growth of our asset base and loan book, reflecting customers\' trust and the strength of our digital lending model.' },
    { year: 'Today', title: 'Leading Innovation', description: 'Continues to evolve as a modern, technology-powered microfinance institution dedicated to empowering individuals and businesses.' }
  ]

  return (
    <section className="page history reveal-auto bg-gradient-to-b from-blue-50 via-white to-indigo-50 min-h-screen">
      {/* Hero Section */}
      <div className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Our <span className="text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text">History</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            From a bold vision in 2016 to becoming Kenya's leading digital microfinance bank, ONIT's journey is one of innovation, trust, and financial inclusion.
          </p>
        </div>

        {/* Main Story */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {/* Founding Story */}
          <div className="p-8 md:p-10 rounded-3xl border-2 border-indigo-200 bg-gradient-to-br from-white to-indigo-50 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-4xl">🚀</span> The Bold Beginning
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Founded in September 2016, ONIT Microfinance Bank began its operations with a bold vision—to transform access to credit through digital lending solutions. From the very beginning, the bank positioned itself as a fully technology-driven financial institution focused on providing fast, reliable, and accessible financial services to individuals and small businesses.
            </p>
            <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 border border-indigo-300">
              <span className="text-sm font-bold text-indigo-700">September 2016</span>
            </div>
          </div>

          {/* Original Name */}
          <div className="p-8 md:p-10 rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-white to-blue-50 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-4xl">✨</span> Maisha Microfinance
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Originally operating under the name Maisha Microfinance, the institution quickly gained recognition for its innovative digital loan products. As the market evolved and the bank expanded its offerings, a strategic decision was made to rebrand and reach new heights.
            </p>
            <div className="inline-block px-4 py-2 rounded-full bg-blue-100 border border-blue-300">
              <span className="text-sm font-bold text-blue-700">Original Identity</span>
            </div>
          </div>

          {/* Rebrand */}
          <div className="p-8 md:p-10 rounded-3xl border-2 border-purple-200 bg-gradient-to-br from-white to-purple-50 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-4xl">🎯</span> The Strategic Rebrand
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              In 2014, Maisha Microfinance officially transitioned into ONIT Microfinance Bank, marking the beginning of a new era of growth, identity, and customer-centered innovation. This rebrand represented our commitment to continuous evolution and excellence in the financial services industry.
            </p>
            <div className="inline-block px-4 py-2 rounded-full bg-purple-100 border border-purple-300">
              <span className="text-sm font-bold text-purple-700">2014 - New Identity</span>
            </div>
          </div>

          {/* Growth & Achievements */}
          <div className="p-8 md:p-10 rounded-3xl border-2 border-green-200 bg-gradient-to-br from-white to-green-50 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-4xl">📈</span> Rapid Growth & Recognition
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Over the years, ONIT has achieved significant milestones. One of our proudest achievements is the rapid growth of our asset base and loan book—a reflection of our customers' trust and the strength of our digital lending model. Our focus on speed, convenience, and responsible lending has positioned us as a leader in Kenya's digital finance sector.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 font-semibold text-green-700">
              🏆 Awarded "The Leading Digital Bank" - A testament to our commitment to excellence, innovation, and financial inclusion.
            </p>
            <div className="inline-block px-4 py-2 rounded-full bg-green-100 border border-green-300">
              <span className="text-sm font-bold text-green-700">Continuous Excellence</span>
            </div>
          </div>

          {/* Today */}
          <div className="p-8 md:p-10 rounded-3xl border-2 border-indigo-300 bg-gradient-to-br from-indigo-600 to-blue-600 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 flex items-center gap-3">
              <span className="text-4xl">🌟</span> Our Vision Today
            </h2>
            <p className="text-base md:text-lg text-white/95 leading-relaxed">
              Today, ONIT Microfinance Bank continues to evolve as a modern, technology-powered microfinance institution dedicated to empowering individuals and businesses with accessible, transparent, and customer-centric financial solutions. We remain committed to our core mission: transforming access to credit and fostering financial inclusion across Kenya.
            </p>
            <div className="mt-6 inline-block px-5 py-2.5 rounded-full bg-white text-indigo-600 font-bold shadow-lg">
              <span className="text-sm">Empowering Financial Futures</span>
            </div>
          </div>
        </div>

        {/* Timeline Milestones */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12">Key Milestones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {milestones.map((milestone, i) => (
              <div 
                key={i} 
                className="p-6 md:p-7 rounded-2xl border-2 border-gray-200 bg-white hover:border-indigo-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-none w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-black text-lg hover:scale-110 transition-transform duration-300">
                    {milestone.year === '2016' ? '🚀' : milestone.year === '2014' ? '✨' : milestone.year === 'Growth' ? '📈' : '🌟'}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-black text-gray-900 mb-1">{milestone.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{milestone.year}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white py-16 md:py-20 mt-16">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Be Part of Our Journey</h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Join thousands of Kenyans who are already experiencing the ONIT difference—fast, accessible, and transparent financial solutions.
          </p>
          <a href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors text-lg">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default History

