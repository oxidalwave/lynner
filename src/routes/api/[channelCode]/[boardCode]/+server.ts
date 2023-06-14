import prisma from '$lib/client.js';

export const GET = async ({ params }) => {
  const { boardCode, channelCode } = params;
  
  // TODO: I don't like how this is two statements. There's gotta be a way to fix this.
	const channel = await prisma.channel.findUnique({ where: { code: channelCode } });

	if (channel) {
		const board = await prisma.board.findUnique({
			where: { channelId_code: { channelId: channel?.id, code: boardCode } }
		});

		return new Response(JSON.stringify(board));
	}

	throw new Error('Channel not found');
};
