import Link from "next/link"
import { VerifyMeLogo } from "~/components/svg"

export const Header = () => {
	return (
		<header className="flex items-center justify-between p-4">
			<Link href="/" aria-label="Ir al inicio">
				<VerifyMeLogo className="w-32" />
			</Link>

			<nav className="flex items-center justify-between">
				<ul className="flex items-center gap-x-4">
					<li>
						<Link className="transition-opacity hover:opacity-75" href="/login">
							Iniciar sessión
						</Link>
					</li>
					<li>
						<Link
							className="rounded border px-3 py-2 transition-opacity hover:opacity-75"
							href="/register"
						>
							Registrarse
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
