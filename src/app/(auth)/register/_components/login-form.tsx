"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { type RegisterSchemaTypes, RegisterSchema } from "~/schemas"
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

export const RegisterForm = () => {
	const form = useForm<RegisterSchemaTypes>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: undefined,
			password: undefined,
			phoneNumber: undefined,
			frontSideId: undefined,
			backSideId: undefined,
			selfie: undefined,
			isLegalAccepted: undefined,
		},
	})

	const onSubmit = (values: RegisterSchemaTypes) => {}

	return (
		<Form {...form}>
			<form
				className="mx-auto flex max-w-[550px] flex-col gap-y-5 px-4"
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
				<FormField
					control={form.control}
					name="phoneNumber"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Número de telefono</FormLabel>
							<FormControl>
								<Input placeholder="Tu número de telefono" {...field} />
							</FormControl>
							<FormMessage className="text-red-500" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="frontSideId"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Documento de identidad (parte frontal)</FormLabel>
							<FormControl>
								<Input type="file" accept="jpeg,png" {...field} />
							</FormControl>
							<FormMessage className="text-red-500" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="backSideId"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Documento de identidad (reverso)</FormLabel>
							<FormControl>
								<Input type="file" accept="jpeg,png" {...field} />
							</FormControl>
							<FormMessage className="text-red-500" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="selfie"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Foto de tu rostro</FormLabel>
							<FormControl>
								<Input type="file" accept="jpeg,png" {...field} />
							</FormControl>
							<FormMessage className="text-red-500" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="isLegalAccepted"
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
