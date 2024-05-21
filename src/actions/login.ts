"use server"

import { AuthError } from "next-auth"
import { signIn } from "~/auth"
import { type LoginSchemaTypes, LoginSchema } from "~/schemas/LoginSchema"
import { ERROR_MESSAGE } from "~/constants"

interface AuthOptions {
	redirectTo?: string
	redirect?: true
}

export const login = async (values: LoginSchemaTypes, options?: AuthOptions) => {
	const validatedFields = LoginSchema.safeParse(values)

	if (!validatedFields.success) {
		return { error: ERROR_MESSAGE.invalidFields }
	}

	const { email, password } = validatedFields.data

	try {
		await signIn("credentials", { email, password, ...options })
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return { error: "La combinación de usuario y contraseña no es correcta." }
				default:
					return { error: "Algo salió mal" }
			}
		}

		throw error
	}
}
