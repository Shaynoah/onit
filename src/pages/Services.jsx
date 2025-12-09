import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const accountProducts = [
  { to: '/services/mb01', icon: '🏦', title: 'Maisha Business Extra Account (MB01)', desc: 'Business account for MSMEs — flexible deposits, ATM card, loans eligibility and convenient channels.' },
  { to: '/services/ma01', icon: '💼', title: 'Maisha Salary Account (MA01)', desc: 'Salary account for employed individuals with overdraft options and insurance cover.' },
  { to: '/services/ma02', icon: '🪙', title: 'Maisha Akiba Account (MA02)', desc: 'Long-term savings account with limited withdrawals (4x/year) and loan options against deposits.' },
  { to: '/services/ma03', icon: '🧸', title: 'Maisha Junior Account (MA03)', desc: 'Junior savings for children with limited withdrawals, school-fee benefits and guardian options.' },
  { to: '/services/ma04', icon: '🎓', title: 'Maisha Student Account (MA04)', desc: 'Student account for college students — low min balance and easy mobile access.' },
  { to: '/services/ma05', icon: '🪙', title: 'Maisha Account (MA05)', desc: 'General savings account with ATM access, mobile banking and competitive interest.' },
  { to: '/services/mf01', icon: '🏦', title: 'Maisha Fixed Deposit (MF01)', desc: 'Fixed-term deposits (1–12 months) with competitive fixed interest rates.' },
  { to: '/services/mf02', icon: '📞', title: 'Maisha Call Deposit (MF02)', desc: 'On-call deposits for clients who need flexibility to withdraw funds with market-driven rates.' },
  { to: '/services/mb02', icon: '🏢', title: 'Maisha Current Account (MB02)', desc: 'Current account for registered businesses and limited companies with overdraft and sweep options.' },
  { to: '/services/mb03', icon: '👔', title: 'Maisha Current Personal Account (MB03)', desc: 'Current account for individuals in business with overdraft and sweep arrangements.' },
  { to: '/services/mc01', icon: '👥', title: 'Maisha Chama Account (MC01)', desc: 'Account for organized groups (chamas) with dedicated RM, alerts and member loan eligibility.' },
  { to: '/services/ms01', icon: '🧾', title: 'Maisha Staff Account (MS01)', desc: 'Staff account for Maisha employees — no minimum balance and no charges.' },
  { to: '/services/mc02', icon: '🏫', title: 'Maisha Collection Account (MC02)', desc: 'Collection accounts for schools, landlords and institutions with e-statements and alerts.' }
]

const creditProducts = [
  { to: '/services/mb101', icon: '🚀', title: 'Maisha Biashara Boost Loan (MB101)', desc: 'Short-term working capital loans for micro & small businesses — quick processing and flexible security.' },
  { to: '/services/ml102', icon: '🌱', title: 'Maisha Bora Loan (ML102)', desc: 'Partly-secured medium-size facility for growing micro & small businesses — higher limits and longer tenor.' },
  { to: '/services/ml103', icon: '🏛️', title: 'Maisha Daima Loan (ML103)', desc: 'Fully-secured facility for businesses with conventional securities — larger limits and longer tenor.' },
  { to: '/services/ml104', icon: '🚚', title: 'Maisha Asset Finance (ML104)', desc: 'Asset finance for vehicles, motorbikes, tuktuks and other movable assets — tailored terms by asset type.' },
  { to: '/services/ml105', icon: '🧾', title: 'Maisha Check–Off Loan (ML105)', desc: 'Employer check-off loan for staff in institutions with an MOU — simple payroll-backed repayment.' },
  { to: '/services/ml106', icon: '💳', title: 'Maisha Salary Loan (ML106)', desc: 'Salary loan for employees with salary remitted through Maisha — fast processing and no security.' },
  { to: '/services/ml107', icon: '⚡', title: 'Maisha Temporary Overdraft (ML107)', desc: 'Short-term overdraft for employees to access part of salary before payday via mobile banking.' },
  { to: '/services/ml108', icon: '📄', title: 'Maisha Cheque Discounting (ML108)', desc: 'Advance against uncleared cheques to provide quick working capital before cheques clear.' },
  { to: '/services/ml109', icon: '🧾', title: 'Maisha LPO / Invoice Discounting (ML109)', desc: 'Finance against LPOs/LSOs to service orders — fast turnaround for contract-backed receivables.' },
  { to: '/services/ml110', icon: '🛡️', title: 'Maisha IPF — Insurance Premium Financing (ML110)', desc: 'Short-term financing to cover insurance premiums so clients can pay premiums upfront.' },
  { to: '/services/ml111', icon: '💰', title: 'Maisha Akiba Loan (ML111)', desc: 'Cash-covered facility advancing against fixed deposits (FDs) for short-term needs.' },
  { to: '/services/ml113', icon: '🏘️', title: 'Maisha Plot Purchase Loan (ML113)', desc: 'Land and plot purchase with ready title deeds — flexible terms and secure financing.' },
  { to: '/services/ml114', icon: '🏗️', title: 'Maisha Development Loan (ML114)', desc: 'Finance for construction, renovation and house finishing projects — longer tenor.' },
  { to: '/services/ml115', icon: '🤝', title: 'Maisha Chama Loan (ML115)', desc: 'Organized groups investing in land and assets — flexible terms for group ownership.' },
  { to: '/services/ml116', icon: '📊', title: 'Maisha Business Overdraft (ML116)', desc: 'Flexible overdraft for working capital — no cost if unused; helps manage cash flow.' }
]

const Services = () => {
  const [showAllAccounts, setShowAllAccounts] = useState(false)
  const visibleAccounts = showAllAccounts ? accountProducts.length : 4
  const [showAllCredits, setShowAllCredits] = useState(false)
  const visibleCredits = showAllCredits ? creditProducts.length : 4

  return (
    <section className="page services reveal-auto">
      <div className="container py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">We provide tailored financial products and support to help microbusinesses thrive — simple, transparent and local.</p>
        </div>

        {/* Products dropdown */}
        {/* <div className="container max-w-4xl mx-auto mb-8">
          <details className="products-dd rounded-xl bg-white p-4 shadow-sm">
            <summary className="font-semibold cursor-pointer">Products & Accounts</summary>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a href="/services/mb01" className="text-blue-600 hover:underline">Maisha Business Extra Account (MB01)</a>
              <a href="#" className="text-blue-600 hover:underline">Savings Account (SAV01)</a>
              <a href="#" className="text-blue-600 hover:underline">Group Savings (GS01)</a>
              <a href="#" className="text-blue-600 hover:underline">Agent Banking Account (AG01)</a>
            </div>
          </details>
        </div> */}

        {/* Account Products: deposit and account offerings shown first */}
        <div className="container max-w-6xl mx-auto" id="account-products">
          <div className="text-left mb-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-black tracking-tight">Account Products</h2>
            <p className="text-gray-600 mt-2">Deposit and account products for individuals, groups and businesses.</p>
            <div className="mt-3 h-1 w-20 rounded-full bg-black/10" aria-hidden="true"></div>
          </div>
          <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accountProducts.slice(0, visibleAccounts).map((p) => (
              <Link key={p.to} to={p.to} className="product-card reveal-auto block p-6 bg-white rounded-xl shadow-sm hover:shadow-md">
                <div className="product-icon text-3xl mb-3">{p.icon}</div>
                <h4 className="font-semibold mb-2">{p.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{p.desc}</p>
                <div className="product-cta text-blue-600 font-semibold">View product →</div>
              </Link>
            ))}

            <div className="col-span-full text-center mt-2">
              <button
                onClick={() => setShowAllAccounts(!showAllAccounts)}
                aria-expanded={showAllAccounts}
                className="text-blue-600 font-semibold"
              >
                {showAllAccounts ? 'Show less' : 'See more'}
              </button>
            </div>
          </div>
        </div>
        
        {/* Credit products section */}
        <div className="container max-w-6xl mx-auto mt-12" id="credit-products">
          <div className="text-left mb-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-black tracking-tight">Credit Products</h2>
            <p className="text-gray-600 mt-2">Loans and credit facilities designed to help microbusinesses grow.</p>
            <div className="mt-3 h-1 w-20 rounded-full bg-black/10" aria-hidden="true"></div>
          </div>

          <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creditProducts.slice(0, visibleCredits).map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="product-card reveal-auto block p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-none w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-pink-50 flex items-center justify-center text-2xl">
                    {p.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-lg leading-tight mb-1 truncate">{p.title}</h4>
                    <p className="text-sm text-gray-600 line-clamp-3">{p.desc}</p>
                  </div>
                </div>
              </Link>
            ))}

            <div className="col-span-full text-left mt-2">
              <button
                onClick={() => setShowAllCredits(!showAllCredits)}
                aria-expanded={showAllCredits}
                className="text-indigo-600 font-semibold"
              >
                {showAllCredits ? 'Show less' : 'See more'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
