"use client"

import { useState, useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { type LoginSchemaTypes, LoginSchema } from "~/schemas/LoginSchema"
import { login } from "~/actions/login"
import { Button } from "~/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"

export const LoginForm = () => {
	const [error, setError] = useState("")
	const [isPending, startTransition] = useTransition()
	const form = useForm<LoginSchemaTypes>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const onSubmit = (values: LoginSchemaTypes) => {
		startTransition(async () => {
			const data = await login(values, { redirectTo: "/" })

			if (data?.error) {
				setError(data.error)
			}
		})
	}

	return (
		<>
			<Form {...form}>
				<form className="mx-auto max-w-[550px] px-4 py-8" onSubmit={form.handleSubmit(onSubmit)}>
					<fieldset className="flex flex-col gap-y-5" disabled={isPending}>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input {...field} placeholder="john.doe@gmail.com" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Contraseña</FormLabel>
									<FormControl>
										<Input {...field} type="password" placeholder="Tu contraseña" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button className="w-full" type="submit">
							Iniciar sesión
						</Button>
					</fieldset>
				</form>
			</Form>
			{error && <div>{error}</div>}
		</>
	)
}
