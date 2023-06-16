import prisma from '$lib/client.js';

export const GET = async ({ params }) => {
	const { channelCode, boardCode } = params;

	const posts = await prisma.post.findMany({
		where: {
			board: {
				code: boardCode,
				channel: {
					code: channelCode
				}
			}
		}
	});

	return new Response(JSON.stringify(posts));
};

export const POST = async ({ params, request }) => {
	const { channelCode, boardCode } = params;

	const data = await request.json();

	const channel = await prisma.channel.findUnique({
		where: { code: channelCode }
	});

	const userId = 'cliw563id0000v2j803ilfo8r';

	if (channel) {
		const post = await prisma.post.create({
			data: {
				title: data.title,
				text: data.text,
				user: { connect: { id: userId } },
				board: { connect: { channelId_code: { code: boardCode, channelId: channel.id } } }
			}
		});

		return new Response(JSON.stringify(post));
	} else {
		return new Response(JSON.stringify({}), { status: 404 });
	}
};
