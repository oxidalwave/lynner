import prisma from '$lib/client.js';
import { z } from 'zod';

export const GET = async ({ params }) => {
	const { channelCode } = z.object({ channelCode: z.string() }).parse(params);

	const channel = await prisma.channel.findUnique({ where: { code: channelCode } });

	return new Response(JSON.stringify(channel));
};

export const PUT = async ({ params, request }) => {
	const { channelCode } = z.object({ channelCode: z.string() }).parse(params);

	const body = await request.json();

	const data = z
		.object({
			name: z.string(),
			icon: z.string().url(),
			code: z.string().toLowerCase()
		})
		.parse(body);

	const channel = await prisma.channel.update({
		where: { code: channelCode },
		data
	});

	return new Response(JSON.stringify(channel));
};

export const DELETE = async ({ params }) => {
	const channel = await prisma.channel.delete({ where: { code: params.channelCode } });
	return new Response(JSON.stringify(channel));
};
