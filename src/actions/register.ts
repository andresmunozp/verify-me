"use server"

import bcrypt from "bcryptjs"
import { db } from "~/lib/db"
import { ERROR_MESSAGE } from "~/constants"
import { type RegisterSchemaTypes, RegisterSchema } from "~/schemas/RegisterSchema"
import { getUserByEmail } from "~/data/user"

export const register = async (values: RegisterSchemaTypes) => {
	const validatedFields = RegisterSchema.safeParse(values)

	if (!validatedFields.success) {
		return { error: ERROR_MESSAGE.invalidFields }
	}

	const { email, password } = validatedFields.data
	const hashedPassword = await bcrypt.hash(password, 10)
	const existingUser = await getUserByEmail(email)

	if (existingUser) {
		return {
			error: `El email: ${email} está siendo utilizado por otro usuario. Por favor, introduzca uno distinto.`,
		}
	}

	await db.user.create({
		data: {
			email,
			password: hashedPassword,
		},
	})
}
