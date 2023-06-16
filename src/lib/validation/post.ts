import { z } from 'zod';

export const postValidator = z.object({
	title: z.string(),
	text: z.string(),
});
