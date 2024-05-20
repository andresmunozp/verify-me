import { z } from "zod"

export const LoginSchema = z.object({
	email: z.string().email({ message: "Ingresa un email válido" }),
	password: z.string().min(1, { message: "Campo obligatorio" }),
})

export type LoginSchemaTypes = z.infer<typeof LoginSchema>

const validateFile = (file: File) => {
	if (!(file instanceof File)) {
		return false
	}

	const allowedTypes = ["image/jpeg", "image/png"]
	if (!allowedTypes.includes(file.type)) {
		return false
	}

	return true
}

export const RegisterSchema = z.object({
	email: z.string().email({ message: "Ingresa un email válido" }),
	password: z.string().regex(/^(?!.*(.)\1\1\1)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
		message:
			"La contraseña debe tener al menos 8 caracteres, incluyendo minúsculas, mayúsculas y un número. No repitas el mismo carácter más de 3 veces.",
	}),
	phoneNumber: z.number().min(10, { message: "Formato de número no válido" }),
	frontSideId: z.instanceof(File, { message: "Tipo de archivo no válido" }),
	backSideId: z.instanceof(File, { message: "Tipo de archivo no válido" }),
	selfie: z.instanceof(File, { message: "Tipo de archivo no válido" }),
	isLegalAccepted: z.literal<boolean>(true),
})

export type RegisterSchemaTypes = z.infer<typeof RegisterSchema>
