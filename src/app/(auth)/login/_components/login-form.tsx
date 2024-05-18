"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginSchema } from "~/schemas"
import { Button } from "~/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"

export const LoginForm = () => {
	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const onSubmit = (values: z.infer<typeof LoginSchema>) => {}

	return (
		<Form {...form}>
			<form
				className="mx-auto flex max-w-[550px] flex-col gap-y-5"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="john.doe@gmail.com" {...field} />
							</FormControl>
							<FormMessage className="text-red-500" />
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
								<Input placeholder="Tu contraseña" {...field} />
							</FormControl>
							<FormMessage className="text-red-500" />
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
