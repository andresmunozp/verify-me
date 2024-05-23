import { z } from "zod"

const envVariables = z.object({
	DATABASE_URL: z.string(),
	AUTH_SECRET: z.string(),
	CLOUDINARY_CLOUD_NAME: z.string(),
	CLOUDINARY_PRESET_NAME: z.string(),
})

envVariables.parse(process.env)

declare global {
	namespace NodeJS {
		interface ProcessEnv extends z.infer<typeof envVariables> {}
	}
}
