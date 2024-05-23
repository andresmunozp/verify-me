import { auth } from "~/auth"
import { LandingPage } from "~/components/landing-page"
import { HomePage } from "~/components/home-page"

export default async function Home() {
	const session = await auth()

	return session ? <HomePage /> : <LandingPage />
}
