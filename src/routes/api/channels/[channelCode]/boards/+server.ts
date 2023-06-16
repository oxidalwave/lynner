import prisma from '$lib/client.js';
import { z } from 'zod';

export const GET = async ({ params }) => {
	const { channelCode } = z.object({ channelCode: z.string() }).parse(params);

	const boards = await prisma.channel.findUnique({ where: { code: channelCode } }).boards();

	return new Response(JSON.stringify(boards));
};

export const POST = async ({ params, request }) => {
	const { channelCode } = z.object({ channelCode: z.string() }).parse(params);

	const data = await request.json();

	const board = z
		.object({
			name: z.string(),
			code: z.string().toLowerCase()
		})
		.parse(data);

	const createdBoard = await prisma.board.create({
		data: {
			name: board.name,
			icon: '',
			code: board.code,
			channel: { connect: { code: channelCode } }
		}
	});

	return new Response(JSON.stringify(createdBoard));
};
