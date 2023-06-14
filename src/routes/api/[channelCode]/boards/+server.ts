import prisma from '$lib/client.js';

export const GET = async ({ params }) => {
	const { channelCode } = params;

	const boards = await prisma.channel.findUnique({ where: { code: channelCode } }).boards();

	return new Response(JSON.stringify(boards));
};
