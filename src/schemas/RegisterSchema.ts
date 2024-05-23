import { z } from "zod"
import { ERROR_MESSAGE } from "~/constants"

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png"]

const passwordRegex = /^(?!.*(.)\1\1\1)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
const phoneNumberRegex = /^(3\d{9}|[1-7]\d{7,9})$/
const isValidFileSize = (file: File) => file.size <= MAX_UPLOAD_SIZE
const isValidFileType = (file: File) => ACCEPTED_FILE_TYPES.includes(file.type)

export const RegisterSchema = z.object({
	email: z.string().email({ message: ERROR_MESSAGE.email }),
	password: z.string().regex(passwordRegex, {
		message: ERROR_MESSAGE.password,
	}),
	phoneNumber: z.string().regex(phoneNumberRegex, { message: ERROR_MESSAGE.phoneNumber }),
	frontSideId: z
		.instanceof(File, { message: ERROR_MESSAGE.required })
		.refine(isValidFileSize, ERROR_MESSAGE.fileMaxSize)
		.refine(isValidFileType, ERROR_MESSAGE.fileType),
	backSideId: z
		.instanceof(File, { message: ERROR_MESSAGE.required })
		.refine(isValidFileSize, ERROR_MESSAGE.fileMaxSize)
		.refine(isValidFileType, ERROR_MESSAGE.fileType),
	facePhoto: z
		.instanceof(File, { message: ERROR_MESSAGE.required })
		.refine(isValidFileSize, ERROR_MESSAGE.fileMaxSize)
		.refine(isValidFileType, ERROR_MESSAGE.fileType),
	isLegalAccepted: z.literal<string>("true", {
		errorMap: () => ({ message: ERROR_MESSAGE.legalCheckbox }),
	}),
})

export type RegisterSchemaTypes = z.infer<typeof RegisterSchema>
