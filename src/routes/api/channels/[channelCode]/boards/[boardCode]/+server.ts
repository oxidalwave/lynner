import prisma from '$lib/client.js';
import { z } from 'zod';

export const GET = async ({ params }) => {
	const { boardCode, channelCode } = z
		.object({
			boardCode: z.string(),
			channelCode: z.string()
		})
		.parse(params);

	const boards = await prisma.channel
		.findUnique({
			where: { code: channelCode },
			include: {
				boards: {
					where: { code: boardCode }
				}
			}
		})
		.boards();

	if (boards && boards.length > 0) {
		return new Response(JSON.stringify(boards[0]));
	}

	return new Response(null, { status: 404 });
};
