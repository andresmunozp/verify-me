import Link from "next/link"
import { VerifyMeLogo } from "~/components/svg"

export const Footer = () => {
	return (
		<footer className="border-t-stroke border-t py-14">
			<div className="flex-y mx-auto flex max-w-[1250px] flex-wrap items-center justify-between gap-6 px-4">
				<VerifyMeLogo />

				<div className="flex flex-wrap gap-x-4 gap-y-10 md:gap-x-12">
					<nav>
						<h3 className="mb-3">Legal</h3>
						<ul className="flex flex-col gap-3">
							<li>
								<Link className="hover:text-primary hover:underline" href="">
									Terminos y condiciones
								</Link>
							</li>
							<li>
								<Link className="hover:text-primary hover:underline" href="">
									Politica de privacidad
								</Link>
							</li>
						</ul>
					</nav>

					<nav>
						<h3 className="mb-3">Contacto</h3>
						<ul className="flex flex-col gap-3">
							<li>
								<Link className="hover:text-primary hover:underline" href="">
									verify.me@gmail.com
								</Link>
							</li>
							<li>
								<Link className="hover:text-primary hover:underline" href="">
									Twitter
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	)
}
