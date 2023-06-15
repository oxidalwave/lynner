import prisma from '$lib/client.js';
import { boardValidator } from '$lib/validation/board.js';

export const GET = async ({ params }) => {
	const { channelCode } = params;

	const boards = await prisma.channel.findUnique({ where: { code: channelCode } }).boards();

	return new Response(JSON.stringify(boards));
};

export const POST = async ({ params, request }) => {
	const { channelCode } = params;
	const data = await request.json();

	const board = boardValidator.parse({
		name: data.name,
		code: data.code,
		channel: {
			code: channelCode
		}
	});

	const createdBoard = await prisma.board.create({
		data: { name: board.name, code: board.code, channel: { connect: { code: board.channel.code } } }
	});

	return new Response(JSON.stringify(createdBoard));
};
