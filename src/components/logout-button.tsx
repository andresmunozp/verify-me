"use client"

import { useTransition } from "react"
import { LogOutIcon } from "lucide-react"
import { logout } from "~/actions/logout"

export const LogoutButton = () => {
	const [isPending, startTransition] = useTransition()

	const handleOnClick = async () => {
		startTransition(async () => {
			await logout()
		})
	}

	return (
		<button
			className="flex items-center gap-2 disabled:pointer-events-none disabled:opacity-75"
			type="button"
			disabled={isPending}
			onClick={handleOnClick}
		>
			<LogOutIcon /> Cerrar sesión
		</button>
	)
}
