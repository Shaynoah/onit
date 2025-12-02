import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastProvider } from './contexts/ToastContext'
import Toasts from './components/Toasts'
import Homepage from './pages/HomepageClean'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App () {
	return (
		<ToastProvider>
		<div className="app">
			<Navbar />
			<main className="main-content">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
			<Footer />
			<Toasts />
		</div>
		</ToastProvider>
	)
}

export default App

