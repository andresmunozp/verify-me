import type { Metadata } from "next"
import { Spline_Sans } from "next/font/google"
import "~/styles/globals.css"

const splineSans = Spline_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Verify me",
	description: "Protege tus datos y evita el robo de identidad con verify.me.",
	authors: [{ name: "Dresan", url: "dresan.is-a.dev" }],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body className={splineSans.className}>
				<main>{children}</main>
			</body>
		</html>
	)
}
