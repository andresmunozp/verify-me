import Link from "next/link"
import { auth } from "~/auth"
import { NavMobile } from "~/components/nav-mobile"
import { VerifyMeLogo } from "~/components/svg"
import { LogoutButton } from "~/components/logout-button"

export const Header = async () => {
	const session = await auth()

	return (
		<header className="relative flex items-center justify-between p-4">
			<Link href="/" aria-label="Ir al inicio">
				<VerifyMeLogo className="w-32" />
			</Link>

			{session ? (
				<LogoutButton />
			) : (
				<>
					<NavMobile />
					<nav className="hidden items-center justify-between md:flex">
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
				</>
			)}
		</header>
	)
}
