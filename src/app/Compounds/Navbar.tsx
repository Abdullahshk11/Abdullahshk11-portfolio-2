"use client"

import Link from "next/link"
import { useState } from "react"

const links = [
	{ label: "Home", href: "#home" },
	{ label: "About", href: "#about" },
	{ label: "Skills", href: "#skills" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact", href: "#contact" },
]

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const closeMenu = () => setIsMenuOpen(false)

	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white shadow-lg backdrop-blur-md">
			<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main navigation">
				<Link href="#home" onClick={closeMenu} className="text-xl font-bold tracking-wide text-blue-400">
					{'\u003C'}Abdullah {'\u002F'}
        {'>'}
				</Link>

				<button
					type="button"
					aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
					aria-expanded={isMenuOpen}
					onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
					className="rounded-md p-2 text-slate-200 transition-colors hover:bg-white/10 hover:text-blue-400 md:hidden"
				>
					<span className="sr-only">Menu</span>
					<span className="block h-0.5 w-6 bg-current" />
					<span className="mt-1.5 block h-0.5 w-6 bg-current" />
					<span className="mt-1.5 block h-0.5 w-6 bg-current" />
				</button>

				<div
					className={`${isMenuOpen ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col gap-2 border-b border-white/10 bg-slate-950 p-4 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
				>
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							onClick={closeMenu}
							className="rounded-md px-3 py-2 font-medium text-slate-200 transition-colors hover:bg-blue-500/10 hover:text-blue-400"
						>
							{link.label}
						</Link>
					))}
				</div>
			</nav>
		</header>
	)
}

export default Navbar
