import { z } from "zod"
import { ERROR_MESSAGE } from "~/constants"

export const LoginSchema = z.object({
	email: z.string({ message: ERROR_MESSAGE.required }).email({ message: ERROR_MESSAGE.email }),
	password: z
		.string({ message: ERROR_MESSAGE.required })
		.min(1, { message: ERROR_MESSAGE.required }),
})

export type LoginSchemaTypes = z.infer<typeof LoginSchema>
