"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { type LoginSchemaTypes, LoginSchema } from "~/schemas/LoginSchema"
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
	const form = useForm<LoginSchemaTypes>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: undefined,
			password: undefined,
		},
	})

	const onSubmit = (values: LoginSchemaTypes) => {}

	return (
		<Form {...form}>
			<form
				className="mx-auto flex max-w-[550px] flex-col gap-y-5 px-4 py-8"
				onSubmit={form.handleSubmit(onSubmit)}
			>
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
			</form>
		</Form>
	)
}
