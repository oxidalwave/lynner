import prisma from '$lib/client.js';
import { z } from 'zod';

export const GET = async () => {
	const channels = await prisma.channel.findMany();

	return new Response(JSON.stringify(channels));
};

export const POST = async ({ request }) => {
	const channelValidator = z.object({
		name: z.string(),
		code: z.string().toLowerCase()
	});
	const channel = await prisma.channel.create({ data: channelValidator.parse(request.json()) });

	return new Response(JSON.stringify(channel));
};
