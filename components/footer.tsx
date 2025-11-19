import Image from 'next/image'

export function Footer() {
	return (
		<footer className="relative pb-8 pt-6 px-4 sm:px-6 lg:px-8 border-t border-primary-foreground/20 bg-primary overflow-hidden">
			{/* SVG Pattern Background */}
			<svg
				className="absolute inset-0 w-full h-full"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
			>
				<circle
					cx="15%"
					cy="85%"
					r="80"
					fill="currentColor"
					className="text-primary-foreground/3"
				/>
				<circle
					cx="50%"
					cy="85%"
					r="100"
					fill="currentColor"
					className="text-primary-foreground/[0.02]"
				/>
				<circle
					cx="85%"
					cy="85%"
					r="80"
					fill="currentColor"
					className="text-primary-foreground/3"
				/>
			</svg>

			<div className="relative max-w-6xl mx-auto text-center text-sm text-primary-foreground/70">
				<Image
					src="/agora-logo-white.png"
					alt="Instituto Ágora"
					width={200}
					height={50}
					className="h-12 w-auto mx-auto mb-2"
				/>
				<p>C/ Alonso Sánchez 15, Huelva</p>
				<p className="mt-2">
					<a
						href="tel:+34644541705"
						className="text-primary-foreground/70 hover:text-primary-foreground transition-colors no-underline"
					>
						+34 644 54 17 05
					</a>
				</p>
				<p>
					<a
						href="mailto:info@centrodesintoxicacionagora.es"
						className="text-primary-foreground/70 hover:text-primary-foreground transition-colors no-underline"
					>
						info@centrodesintoxicacionagora.es
					</a>
				</p>

				{/* Social Media Icons */}
				{/* <div className="flex justify-center gap-6 mt-6 mb-4">
          <a href="https://wa.me/34644541705" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <svg className="h-7 w-7" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
              <path fill="#25D366" d="M500,1000L500,1000C223.9,1000,0,776.1,0,500v0C0,223.9,223.9,0,500,0h0c276.1,0,500,223.9,500,500v0C1000,776.1,776.1,1000,500,1000z"/>
              <path fill="#FFFFFF" d="M733.9,267.2c-62-62.1-144.6-96.3-232.5-96.4c-181.1,0-328.6,147.4-328.6,328.6c0,57.9,15.1,114.5,43.9,164.3L170.1,834l174.2-45.7c48,26.2,102,40,157,40h0.1c0,0,0,0,0,0c181.1,0,328.5-147.4,328.6-328.6C830.1,411.9,796,329.3,733.9,267.2z M501.5,772.8h-0.1c-49,0-97.1-13.2-139-38.1l-10-5.9L249,755.9l27.6-100.8l-6.5-10.3c-27.3-43.5-41.8-93.7-41.8-145.4c0.1-150.6,122.6-273.1,273.3-273.1c73,0,141.5,28.5,193.1,80.1c51.6,51.6,80,120.3,79.9,193.2C774.6,650.3,652,772.8,501.5,772.8z M651.3,568.2c-8.2-4.1-48.6-24-56.1-26.7c-7.5-2.7-13-4.1-18.5,4.1c-5.5,8.2-21.2,26.7-26,32.2c-4.8,5.5-9.6,6.2-17.8,2.1c-8.2-4.1-34.7-12.8-66-40.8c-24.4-21.8-40.9-48.7-45.7-56.9c-4.8-8.2-0.5-12.7,3.6-16.8c3.7-3.7,8.2-9.6,12.3-14.4c4.1-4.8,5.5-8.2,8.2-13.7c2.7-5.5,1.4-10.3-0.7-14.4c-2.1-4.1-18.5-44.5-25.3-61c-6.7-16-13.4-13.8-18.5-14.1c-4.8-0.2-10.3-0.3-15.7-0.3c-5.5,0-14.4,2.1-21.9,10.3c-7.5,8.2-28.7,28.1-28.7,68.5c0,40.4,29.4,79.5,33.5,84.9c4.1,5.5,57.9,88.4,140.3,124c19.6,8.5,34.9,13.5,46.8,17.3c19.7,6.3,37.6,5.4,51.7,3.3c15.8-2.4,48.6-19.9,55.4-39c6.8-19.2,6.8-35.6,4.8-39C665,574.4,659.5,572.4,651.3,568.2z"/>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div> */}

				<div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
					<a
						href="/aviso-legal"
						className="text-primary-foreground/70 hover:text-primary-foreground transition-colors no-underline"
					>
						Aviso Legal
					</a>
					<span className="hidden sm:inline">·</span>
					<a
						href="/politica-privacidad"
						className="text-primary-foreground/70 hover:text-primary-foreground transition-colors no-underline"
					>
						Política de Privacidad
					</a>
					<span className="hidden sm:inline">·</span>
					<a
						href="/politica-cookies"
						className="text-primary-foreground/70 hover:text-primary-foreground transition-colors no-underline"
					>
						Política de Cookies
					</a>
					<span className="hidden sm:inline">·</span>
					<a
						href="/preferencias-de-cookies"
						className="text-primary-foreground/70 hover:text-primary-foreground transition-colors no-underline"
					>
						Preferencias de Cookies
					</a>
				</div>
				<p className="mt-4">
					© {new Date().getFullYear()} Instituto Ágora. Desarrollado por{' '}
					<a
						href="https://www.instagram.com/levelcomunicacion/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary-foreground/70 hover:text-primary-foreground transition-colors no-underline"
					>
						Level Comunicación
					</a>
					.
				</p>
			</div>
		</footer>
	)
}
