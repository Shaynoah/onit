import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo2.png'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-gradient text-white mt-8">
      <div className="container py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
          {/* About / Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Onit Bank" className="w-16 h-16 md:w-20 md:h-20 object-contain logo-float" />
              <div>
                <div className="text-lg font-bold text-white">Onit Bank</div>
                <div className="text-sm text-white">Empowering micro businesses — safe, simple banking.</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white hidden sm:block">Onit Bank provides reliable microfinance solutions to help entrepreneurs and communities grow and thrive.</p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/95">
              <li><Link to="/" className="text-white/95 font-medium hover:text-white focus:outline-none focus:underline transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/95 font-medium hover:text-white focus:outline-none focus:underline transition-colors">About</Link></li>
              <li><Link to="/services" className="text-white/95 font-medium hover:text-white focus:outline-none focus:underline transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-white/95 font-medium hover:text-white focus:outline-none focus:underline transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-1 text-white/80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.21.42 2.39.9 3.5a2 2 0 0 1-.45 2.11l-1.45 1.45a15.05 15.05 0 0 0 6 6l1.46-1.46a2 2 0 0 1 2.12-.45c1.12.5 2.3.79 3.51.91A2 2 0 0 1 22 16.92z"/></svg>
                <span>Phone: <a href="tel:+254709567000" className="underline">+254 709 567 000</a></span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-1 text-white/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4h16v16H4z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>Email: <a href="mailto:info@maishabank.com" className="underline">info@maishabank.com</a></span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-1 text-white/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Address: Onit Microfinance, Jahazi, 2nd Floor, James Gichuru Road, Lavington — Nairobi</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3 items-center">
              <a href="#" aria-label="Twitter" className="social-icon bg-white/10 text-white p-2 rounded-md" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3c-2.73 0-4.81 2.45-4.81 5.47 0 .43.04.85.12 1.25-4.02-.2-7.58-2.2-9.97-5.23a5.6 5.6 0 00-.66 2.77c0 1.92.84 3.61 2.13 4.6a4.48 4.48 0 01-2.16-.6v.06c0 2.68 1.92 4.91 4.47 5.42-.42.12-.88.19-1.38.19-.34 0-.65-.03-.95-.09.66 2.16 2.58 3.73 4.85 3.77a9 9 0 01-5.57 1.93c-.36 0-.69-.02-1.03-.06A12.74 12.74 0 009 21c8.4 0 13-7.13 13-13.3 0-.2 0-.39-.02-.58A9.18 9.18 0 0023 3z"></path></svg>
              </a>
              <a href="#" aria-label="Facebook" className="social-icon bg-white/10 text-white p-2 rounded-md" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M22 12.07C22 6.48 17.53 2 11.95 2S1.9 6.48 1.9 12.07C1.9 17.06 5.85 21.09 10.66 21.9v-5.38h-2.75v-2.47h2.75V11c0-2.73 1.64-4.23 4.13-4.23 1.2 0 2.47.2 2.47.2v2.71h-1.38c-1.36 0-1.78.86-1.78 1.74v2.02h3.02l-.48 2.47h-2.54v5.38C18.15 21.09 22 17.06 22 12.07z"></path></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon bg-white/10 text-white p-2 rounded-md" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.5 18V10H6v8h2.5zM7.25 8.9c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5-1.5.67-1.5 1.5.68 1.5 1.5 1.5zM20 18h-2.5v-3.9c0-1.18-.02-2.7-1.65-2.7-1.66 0-1.91 1.3-1.91 2.62V18H12v-8h2.4v1.09h.03c.34-.64 1.18-1.31 2.43-1.31 2.6 0 3.08 1.71 3.08 3.93V18z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-icon bg-white/10 text-white p-2 rounded-md" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5zM18.5 6a1 1 0 1 1-1-1 1 1 0 0 1 1 1z"></path></svg>
              </a>
            </div>
            <div className="mt-4 text-sm text-white/80 hidden sm:block">Stay updated with our latest news and offers.</div>
          </div>
        </div>

        <div className="mt-6 md:mt-8 border-t border-white/20 pt-3 md:pt-4 text-sm text-center text-white/80">
          <div>© {year} Onit Bank — Microfinance Institution. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
