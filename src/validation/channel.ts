import { z } from 'zod';

export const channelValidator = z.object({
	name: z.string(),
	code: z.string().toLowerCase()
});
