import { z } from "zod"

export const LoginSchema = z.object({
	email: z.string().email({ message: "Ingresa un email válido" }),
	password: z
		.string()
		.regex(/^(?!.*(.)\1\1\1)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
			message:
				"La contraseña debe tener al menos 8 caracteres, incluyendo minúsculas, mayúsculas y un número. No repitas el mismo carácter más de 3 veces.",
		}),
})
