import prisma from '$lib/client.js';
import { z } from 'zod';

export const GET = async () => {
	const channels = await prisma.channel.findMany();

	return new Response(JSON.stringify(channels));
};

export const POST = async ({ request }) => {
	const body = await request.json();

	const data = z.object({
		name: z.string(),
		icon: z.string().url(),
		code: z.string().toLowerCase()
	}).parse(body)

	const channel = await prisma.channel.create({ data });

	return new Response(JSON.stringify(channel));
};
