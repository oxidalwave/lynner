import { z } from 'zod';

export const boardValidator = z.object({
	name: z.string(),
	code: z.string().toLowerCase(),
	channel: z.object({
		code: z.string().toLowerCase()
	})
});
