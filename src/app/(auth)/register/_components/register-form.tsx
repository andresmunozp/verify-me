"use client"

import { useState, useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { type RegisterSchemaTypes, RegisterSchema } from "~/schemas/RegisterSchema"
import { register } from "~/actions/register"
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
import { FormLegend } from "~/components/form-legend"
import { Checkbox } from "~/components/ui/checkbox"
import { createFormDataFromObject } from "~/utils"

export const RegisterForm = () => {
	const [error, setError] = useState("")
	const [isPending, startTransition] = useTransition()
	const form = useForm<RegisterSchemaTypes>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: "",
			password: "",
			phoneNumber: "",
			frontSideId: undefined,
			backSideId: undefined,
			facePhoto: undefined,
			isLegalAccepted: "",
		},
	})

	const onSubmit = (values: RegisterSchemaTypes) => {
		startTransition(async () => {
			const formData = createFormDataFromObject(values)

			const data = await register(formData)

			if (data?.error) {
				setError(data.error)
			}
		})
	}

	return (
		<>
			<Form {...form}>
				<form className="mx-auto max-w-[550px] px-4 py-8" onSubmit={form.handleSubmit(onSubmit)}>
					<fieldset className="mb-5 flex flex-col gap-y-4" disabled={isPending}>
						<FormLegend label="Datos básicos" />
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
										<Input {...field} type="password" placeholder="Mínimo 8 carácteres" />
									</FormControl>
									<FormMessage />
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
										<Input {...field} placeholder="3228720798" type="number" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</fieldset>
					<fieldset className="mb-5 flex flex-col gap-y-4" disabled={isPending}>
						<FormLegend label="Documento de identidad" />
						<FormField
							control={form.control}
							name="frontSideId"
							render={({ field: { value, onChange, ...fieldProps } }) => (
								<FormItem>
									<FormLabel>Foto parte frontal</FormLabel>
									<FormControl>
										<Input
											{...fieldProps}
											onChange={(e) => onChange(e.target.files && e.target.files[0])}
											type="file"
											accept="image/jpeg,image/png"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="backSideId"
							render={({ field: { value, onChange, ...fieldProps } }) => (
								<FormItem>
									<FormLabel>Foto del reverso</FormLabel>
									<FormControl>
										<Input
											{...fieldProps}
											onChange={(e) => onChange(e.target.files && e.target.files[0])}
											type="file"
											accept="image/jpeg,image/png"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</fieldset>
					<fieldset className="mb-5 flex flex-col gap-y-4" disabled={isPending}>
						<FormLegend label="Datos biométricos" />
						<FormField
							control={form.control}
							name="facePhoto"
							render={({ field: { value, onChange, ...fieldProps } }) => (
								<FormItem>
									<FormLabel>Foto de su rostro</FormLabel>
									<FormControl>
										<Input
											{...fieldProps}
											onChange={(e) => onChange(e.target.files && e.target.files[0])}
											type="file"
											accept="image/jpeg,image/png"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</fieldset>
					<FormField
						control={form.control}
						name="isLegalAccepted"
						render={({ field: { value, onChange } }) => (
							<FormItem>
								<div className="flex items-center space-x-2">
									<FormControl>
										<Checkbox
											checked={Boolean(value)}
											onCheckedChange={() => onChange(Boolean(value) ? "" : "true")}
											disabled={isPending}
										/>
									</FormControl>
									<FormLabel>
										He leido y acepto los{" "}
										<a className="hover:text-primary hover:underline" href="/" target="_black">
											Términos y condiciones
										</a>
									</FormLabel>
								</div>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className="my-5 w-full" type="submit">
						Registrar
					</Button>
				</form>
			</Form>
			{error && <div>{error}</div>}
		</>
	)
}
