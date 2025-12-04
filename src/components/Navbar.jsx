import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo2.png'

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const [openAbout, setOpenAbout] = useState(false)
	const [manualOpen, setManualOpen] = useState(false)
	const aboutRef = useRef(null)
	const aboutCloseTimeout = useRef(null)
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		function onKey (e) {
			if (e.key === 'Escape') setOpen(false)
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [])

	// close About dropdown when clicking outside
	useEffect(() => {
		function onDocClick (e) {
			if (openAbout && aboutRef.current && !aboutRef.current.contains(e.target)) {
				setOpenAbout(false)
				setManualOpen(false)
			}
		}
		document.addEventListener('mousedown', onDocClick)
		return () => document.removeEventListener('mousedown', onDocClick)
	}, [openAbout])

	// lock body scroll while menu is open
	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => { document.body.style.overflow = '' }
	}, [open])

	// initialize theme from localStorage or system preference
	useEffect(() => {
		const stored = localStorage.getItem('onit:theme')
		const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
		const initial = stored ? stored === 'dark' : prefersDark
		setIsDark(initial)
		if (initial) document.documentElement.classList.add('dark')
	}, [])

	function toggleDark () {
		const next = !isDark
		setIsDark(next)
		localStorage.setItem('onit:theme', next ? 'dark' : 'light')
		if (next) document.documentElement.classList.add('dark')
		else document.documentElement.classList.remove('dark')
	}

	return (
		<nav className="navbar bg-white shadow-sm sticky top-0 z-50">
			<div className="container flex items-center justify-between py-3">
				<NavLink to="/" className="flex items-center gap-3 no-underline">
					<div className="brand-wrap flex items-center gap-3">
						<img src={logo} alt="Onit Microfinance Bank" className="brand-mark" />
						<div className="brand-text leading-tight">
							<div className="brand-title">Onit Microfinance Bank</div>
							<div className="brand-sub">Relationship-driven microfinance</div>
						</div>
					</div>
				</NavLink>

				{/* desktop links */}
								<ul className="hidden md:flex gap-6 items-center m-0 text-slate-800">
									<li className="nav-item"><NavLink to="/" className={({ isActive }) => (isActive ? 'text-onit font-semibold' : 'text-slate-800 hover:text-onit')}>Home</NavLink></li>
									<li className="nav-item nav-dropdown" ref={aboutRef}
										onMouseEnter={() => {
											if (aboutCloseTimeout.current) {
												clearTimeout(aboutCloseTimeout.current)
												aboutCloseTimeout.current = null
											}
											setOpenAbout(true)
										}}
										onMouseLeave={() => {
											// if user manually opened (clicked), keep open until they click away
											if (manualOpen) return
											aboutCloseTimeout.current = setTimeout(() => setOpenAbout(false), 180)
										}}
									>
										<div className="flex items-center gap-2">
											<NavLink to="/about" className={({ isActive }) => (isActive ? 'text-onit font-semibold' : 'text-slate-800 hover:text-onit')} onClick={() => { setOpenAbout(false); setManualOpen(false) }}>About</NavLink>
											<button aria-expanded={openAbout} aria-haspopup="true" className="nav-dropdown-toggle text-slate-800 hover:text-onit" onClick={() => { setOpenAbout(s => { const next = !s; if (next) setManualOpen(true); return next }); }}>
												<svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="inline-block"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
											</button>
										</div>
										<ul className={`nav-dropdown-menu ${openAbout ? 'open' : ''}`} role="menu" aria-label="About submenu">
											<li role="none"><NavLink role="menuitem" to="/history" className={({ isActive }) => (isActive ? 'text-onit font-semibold block px-4 py-2' : 'block px-4 py-2 text-slate-700 hover:bg-slate-50')} onClick={() => { setOpenAbout(false); setManualOpen(false) }}>Our History</NavLink></li>
											<li role="none"><NavLink role="menuitem" to="/board-of-directors" className={({ isActive }) => (isActive ? 'text-onit font-semibold block px-4 py-2' : 'block px-4 py-2 text-slate-700 hover:bg-slate-50')} onClick={() => { setOpenAbout(false); setManualOpen(false) }}>Board of Directors</NavLink></li>
										</ul>
									</li>
					<li className="nav-item"><NavLink to="/services" className={({ isActive }) => (isActive ? 'text-onit font-semibold' : 'text-slate-800 hover:text-onit')}>Services</NavLink></li>
					<li className="nav-item"><NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-onit font-semibold' : 'text-slate-800 hover:text-onit')}>Contact</NavLink></li>
									{/* Desktop dark mode toggle */}
									<li>
										<button onClick={toggleDark} className="ml-3 p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-onit/30" aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
											{isDark ? (
												<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
											) : (
												<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m12.02 6.02l-.7-.7M6.68 6.68l-.7-.7m12.02 0l-.7.7M6.68 17.32l-.7.7"/></svg>
											)}
										</button>
									</li>
				</ul>

				{/* mobile actions */}
				<div className="md:hidden flex items-center gap-3">
					<button
						aria-label={open ? 'Close menu' : 'Open menu'}
						aria-expanded={open}
						aria-controls="mobile-menu"
						className={`relative w-10 h-10 flex items-center justify-center rounded-md text-onit focus:outline-none focus:ring-2 focus:ring-onit/30 hamburger-button ${open ? 'open' : ''}`}
						onClick={() => setOpen(o => !o)}
					>
						<span className="hamburger-lines">
							<span className="hamburger-line line-1" aria-hidden="true" />
							<span className="hamburger-line line-2" aria-hidden="true" />
							<span className="hamburger-line line-3" aria-hidden="true" />
						</span>
					</button>
					{/* dark mode toggle (mobile) */}
					<button aria-pressed={isDark} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={toggleDark} className="ml-2 p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-onit/30">
						{isDark ? (
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
						) : (
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m12.02 6.02l-.7-.7M6.68 6.68l-.7-.7m12.02 0l-.7.7M6.68 17.32l-.7.7"/></svg>
						)}
					</button>
				</div>
			</div>

			{/* mobile menu overlay */}
			<div id="mobile-menu" className={`md:hidden fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
				{/* Overlay area: clicking it should close the menu */}
				<div className={`absolute inset-0 bg-black/30 mobile-overlay ${open ? 'open' : ''} transition-opacity`} onClick={() => setOpen(false)} />
				<div className={`relative backdrop-blur-md bg-white/95 shadow-lg min-h-screen mobile-menu-panel ${open ? 'open' : ''}`}>
					<div className="container py-8">
						<ul role="menu" className="flex flex-col gap-6 text-lg fade-stagger" style={{'--delay':'40ms'}}>
							<li><NavLink onClick={() => setOpen(false)} to="/" className={({ isActive }) => (isActive ? 'text-onit font-semibold text-lg' : 'text-slate-700 text-lg')}>Home</NavLink></li>
							<li>
								<NavLink onClick={() => setOpen(false)} to="/about" className={({ isActive }) => (isActive ? 'text-onit font-semibold text-lg' : 'text-slate-700 text-lg')}>About</NavLink>
								<ul className="pl-4 mt-2 flex flex-col gap-2">
									<li><NavLink onClick={() => setOpen(false)} to="/history" className={({ isActive }) => (isActive ? 'text-onit font-semibold' : 'text-slate-700')}>Our History</NavLink></li>
									<li><NavLink onClick={() => setOpen(false)} to="/board-of-directors" className={({ isActive }) => (isActive ? 'text-onit font-semibold' : 'text-slate-700')}>Board of Directors</NavLink></li>
								</ul>
							</li>
							<li><NavLink onClick={() => setOpen(false)} to="/services" className={({ isActive }) => (isActive ? 'text-onit font-semibold' : 'text-slate-700')}>Services</NavLink></li>
							<li><NavLink role="menuitem" onClick={() => setOpen(false)} to="/contact" className={({ isActive }) => (isActive ? 'text-onit font-semibold' : 'text-slate-700')}>Contact</NavLink></li>
						</ul>
						{/* CTA intentionally removed per request */}
					</div>
					{/* explicit close at top-right inside menu */}
					<button aria-label="Close menu" onClick={() => setOpen(false)} className="absolute top-4 right-4 p-2 mobile-close-btn rounded-md bg-white/20 focus:outline-none focus:ring-2 focus:ring-onit/30">
						<svg width="18" height="18" viewBox="0 0 24 24" className="mobile-close-icon"><line x1="5" y1="5" x2="19" y2="19" strokeWidth="2" stroke="currentColor" strokeLinecap="round"/><line x1="19" y1="5" x2="5" y2="19" strokeWidth="2" stroke="currentColor" strokeLinecap="round"/></svg>
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar

