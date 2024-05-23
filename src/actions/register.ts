"use server"

import bcrypt from "bcryptjs"
import { db } from "~/lib/db"
import { ERROR_MESSAGE } from "~/constants"
import { RegisterSchema } from "~/schemas/RegisterSchema"
import { getUserByEmail } from "~/data/user"

const HASH_SALT = 10

export const register = async (formData: FormData) => {
	const values = Object.fromEntries(formData.entries())
	const validatedFields = RegisterSchema.safeParse(values)

	if (!validatedFields.success) {
		return { error: ERROR_MESSAGE.invalidFields }
	}

	const { email, password, phoneNumber } = validatedFields.data
	const existingUser = await getUserByEmail(email)

	if (existingUser) {
		return {
			error: `El email: ${email} está siendo utilizado por otro usuario. Por favor, introduzca uno distinto.`,
		}
	}

	const { CLOUDINARY_PRESET_NAME, CLOUDINARY_CLOUD_NAME } = process.env
	const hashedPassword = await bcrypt.hash(password, HASH_SALT)
	const newUserData = {
		email,
		password: hashedPassword,
		phoneNumber,
		backSideId: "",
		facePhoto: "",
		frontSideId: "",
	}

	const cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`
	const uploadFormData = new FormData()
	uploadFormData.append("upload_preset", CLOUDINARY_PRESET_NAME)
	uploadFormData.append("cloud_name", CLOUDINARY_CLOUD_NAME)

	const uploadPromises = Object.entries(validatedFields.data)
		.filter(([_, value]) => value instanceof File)
		.map(async ([key, value]) => {
			uploadFormData.append("file", value)
			uploadFormData.append("folder", key)

			const response = await fetch(cloudinaryUploadUrl, {
				method: "post",
				body: uploadFormData,
			})

			if (!response.ok) {
				throw new Error(`Error subiendo archivo: ${key}`)
			}

			const data = await response.json()
			newUserData[key as keyof typeof newUserData] = data.url
		})

	try {
		await Promise.all(uploadPromises)
	} catch (error) {
		return { error: ERROR_MESSAGE.generic }
	}

	await db.user.create({ data: newUserData })
}
