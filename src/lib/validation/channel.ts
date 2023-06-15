import { z } from 'zod';

export const channelValidator = z.object({
	name: z.string(),
	icon: z.string().url(),
	code: z.string().toLowerCase()
});
