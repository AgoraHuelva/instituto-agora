'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navigation = [
		{ name: 'Home', href: '/#hero' },
		{ name: 'Contacto', href: '/#contact' },
	]

	return (
		<header
			className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300 border-b ${
				scrolled ? 'bg-muted/98 shadow-lg border-primary/10' : 'bg-muted/85 border-transparent'
			}`}
		>
			<nav
				className={`relative mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8 transition-all duration-300 ${
					scrolled ? 'py-2' : 'py-3 lg:py-4'
				}`}
				aria-label="Global"
			>
				{/* Logo */}
				<Link href="/#hero" className="transition-all duration-300">
					<Image
						src="/agora-logo.png"
						alt="Instituto Ágora"
						width={200}
						height={50}
						className={`transition-all duration-300 ${scrolled ? 'h-10 w-auto' : 'h-16 w-auto'}`}
						priority
					/>
				</Link>

				{/* Desktop navigation - Centered */}
				<div className="hidden lg:flex lg:gap-x-12 mt-1 absolute left-1/2 -translate-x-1/2">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className={`relative font-light tracking-wide text-foreground transition-all duration-300 font-[family-name:var(--font-prata)] group no-underline hover:no-underline hover:text-primary pb-1 ${
								scrolled ? 'text-base' : 'text-xl'
							}`}
						>
							{item.name}
							<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary/40 transition-all duration-300 ease-out group-hover:w-full"></span>
						</Link>
					))}
				</div>

				{/* Mobile menu button */}
				<div className="flex lg:hidden">
					<Button
						variant="ghost"
						className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						<span className="sr-only">Abrir menú</span>
						{mobileMenuOpen ? (
							<X className="h-6 w-6" aria-hidden="true" />
						) : (
							<Menu className="h-6 w-6" aria-hidden="true" />
						)}
					</Button>
				</div>
			</nav>
			{/* Mobile menu */}
			<div
				className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
					mobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
				}`}
			>
				<div className="space-y-1 px-4 pb-3 pt-2">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="block rounded-md px-3 py-2 text-base font-light text-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-[family-name:var(--font-prata)]"
							onClick={() => setMobileMenuOpen(false)}
						>
							{item.name}
						</Link>
					))}
				</div>
			</div>
		</header>
	)
}
