import { createPost } from '$lib/data/post/createPost.js';
import { readPostsByBoard } from '$lib/data/post/readPosts.js';
import { z } from 'zod';
import { zx } from 'zodix';

export const GET = async ({ params, url }) => {
	const { channelCode, boardCode } = z
		.object({
			channelCode: z.string(),
			boardCode: z.string()
		})
		.parse(params);

	const { sort, take } = zx.parseQuery(
		url.searchParams,
		z.object({
			sort: z.string().default('desc'),
			take: z.number().default(10)
		})
	);

	if (sort !== 'asc' && sort !== 'desc') {
		throw Error('Invalid sort');
	}

	const posts = await readPostsByBoard(channelCode, boardCode, { sort, take });

	return new Response(JSON.stringify(posts));
};

export const POST = async ({ params, request, locals }) => {
	const session = await locals.getSession();

	const userEmail = session?.user?.email;

	if (!userEmail) {
		return new Response(JSON.stringify({ message: 'User does not have an email' }), {
			status: 401
		});
	}

	const { channelCode, boardCode } = z
		.object({
			channelCode: z.string(),
			boardCode: z.string()
		})
		.parse(params);

	const body = await request.json();

	const data = z
		.object({
			title: z.string(),
			text: z.string()
		})
		.parse(body);

	const post = createPost(
		{ code: channelCode },
		{ code: boardCode },
		{ email: userEmail },
		{
			title: data.title,
			text: data.text
		}
	);

	return new Response(JSON.stringify(post));
};
