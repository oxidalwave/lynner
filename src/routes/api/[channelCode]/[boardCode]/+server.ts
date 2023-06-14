import prisma from '$lib/client.js';

export const GET = async ({ params }) => {
	const { boardCode, channelCode } = params;

	const channel = await prisma.channel.findUnique({
		where: { code: channelCode },
		include: {
			boards: {
				where: { code: boardCode }
			}
		}
	});

	if (!channel) {
		return new Response(null, { status: 404 });
	}

	const { boards } = channel;

	if (boards.length > 0) {
		return new Response(JSON.stringify(boards[0]));
	}

	return new Response(null, { status: 404 });
};
