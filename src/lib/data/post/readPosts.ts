import prisma from '$lib/client';

interface FindPostsOpts {
	sort?: 'asc' | 'desc';
	take?: number;
}

export async function readPostsByBoard(
	channelCode: string,
	boardCode: string,
	opts: FindPostsOpts
) {
	return await prisma.post.findMany({
		where: {
			board: {
				code: boardCode,
				channel: {
					code: channelCode
				}
			}
		},
		orderBy: { createDateTime: opts.sort ?? 'desc' },
		take: opts.take ?? 10
	});
}
