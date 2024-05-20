"use client"

import { useEffect, useState } from "react"
import { MenuIcon, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavMobile = () => {
	const pathName = usePathname()
	const [open, setOpen] = useState(false)

	useEffect(() => {
		setOpen(pathName !== window.location.pathname)
	}, [pathName])

	const handleClick = () => {
		setOpen(!open)
	}

	return (
		<>
			<button className="md:hidden" type="button" onClick={handleClick}>
				{open ? <X className="size-7" /> : <MenuIcon className="size-7" />}
			</button>

			{open && (
				<nav className="absolute inset-x-0 top-full z-10 bg-[hsl(223_16%_8%)] px-5">
					<ul>
						<li>
							<Link className="block border-b border-b-stroke py-4" href="/login">
								Iniciar sessión
							</Link>
						</li>
						<li>
							<Link className="block border-b-stroke py-4" href="/register">
								Registrarse
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</>
	)
}
