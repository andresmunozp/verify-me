import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "~/components/header"
import "~/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

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
			<body className={inter.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}
