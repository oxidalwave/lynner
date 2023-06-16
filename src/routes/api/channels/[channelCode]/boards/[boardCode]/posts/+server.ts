import prisma from '$lib/client.js';
import { postValidator } from '$lib/validation/post.js';

export const GET = async ({ params, url }) => {
	const { channelCode, boardCode } = params;

	const searchParams = url.searchParams;

	const sort = searchParams.get('sort') ?? 'desc';

	if (sort !== 'asc' && sort !== 'desc') {
		throw Error('Invalid sort');
	}

	const take = parseInt(searchParams.get('take') ?? '10');

	const posts = await prisma.post.findMany({
		where: {
			board: {
				code: boardCode,
				channel: {
					code: channelCode
				}
			}
		},
		orderBy: { createDateTime: sort },
		take: take ?? 10
	});

	return new Response(JSON.stringify(posts));
};

export const POST = async (event) => {
	const { params, request, locals } = event;

	const session = await locals.getSession();

	const userEmail = session?.user?.email;

	if (!userEmail) {
		return new Response(JSON.stringify({ message: 'User does not have an email' }), {
			status: 401
		});
	}

	const { channelCode, boardCode } = params;

	const data = postValidator.parse(await request.json());

	const channel = await prisma.channel.findUnique({
		where: { code: channelCode }
	});

	if (channel) {
		const post = await prisma.post.create({
			data: {
				title: data.title,
				text: data.text,
				user: { connect: { email: userEmail } },
				board: { connect: { channelId_code: { code: boardCode, channelId: channel.id } } }
			}
		});

		return new Response(JSON.stringify(post));
	} else {
		return new Response(JSON.stringify({}), { status: 404 });
	}
};
