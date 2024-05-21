import { z } from "zod"
import { ERROR_MESSAGE } from "~/constants"

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png"]

const passwordRegex = /^(?!.*(.)\1\1\1)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
const isValidFileSize = (file: File) => file.size <= MAX_UPLOAD_SIZE
const isValidFileType = (file: File) => ACCEPTED_FILE_TYPES.includes(file.type)

export const RegisterSchema = z.object({
	email: z.string({ message: ERROR_MESSAGE.required }).email({ message: ERROR_MESSAGE.email }),
	password: z.string({ message: ERROR_MESSAGE.required }).regex(passwordRegex, {
		message: ERROR_MESSAGE.password,
	}),
	phoneNumber: z
		.string({ message: ERROR_MESSAGE.required })
		.length(10, { message: ERROR_MESSAGE.phoneNumber }),
	frontSideId: z
		.instanceof(File, { message: ERROR_MESSAGE.required })
		.refine(isValidFileSize, ERROR_MESSAGE.fileMaxSize)
		.refine(isValidFileType, ERROR_MESSAGE.fileType),
	backSideId: z
		.instanceof(File, { message: ERROR_MESSAGE.required })
		.refine(isValidFileSize, ERROR_MESSAGE.fileMaxSize)
		.refine(isValidFileType, ERROR_MESSAGE.fileType),
	selfie: z
		.instanceof(File, { message: ERROR_MESSAGE.required })
		.refine(isValidFileSize, ERROR_MESSAGE.fileMaxSize)
		.refine(isValidFileType, ERROR_MESSAGE.fileType),
	isLegalAccepted: z.literal<boolean>(true, {
		message: ERROR_MESSAGE.legalCheckbox,
	}),
})

export type RegisterSchemaTypes = z.infer<typeof RegisterSchema>
