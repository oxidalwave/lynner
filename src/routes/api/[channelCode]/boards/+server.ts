import prisma from '$lib/client.js';

export const GET = async ({ params }) => {
	const { channelCode } = params;

	const boards = await prisma.channel.findUnique({ where: { code: channelCode } }).boards();

	return new Response(JSON.stringify(boards));
};

export const POST = async ({ params, request }) => {
	const { channelCode } = params;
	const board = await request.json();

	const createdBoard = await prisma.board.create({
		data: { name: board.name, code: board.code, channel: { connect: { code: channelCode } } }
	});

	return new Response(JSON.stringify(createdBoard));
};
