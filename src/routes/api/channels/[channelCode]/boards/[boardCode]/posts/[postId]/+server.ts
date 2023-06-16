import { deletePost } from '$lib/data/post/deletePost.js';
import { readPost } from '$lib/data/post/readPost.js';
import { z } from 'zod';

export const GET = async ({ params }) => {
	const { postId } = z
		.object({
			postId: z.string()
		})
		.parse(params);

	const post = await readPost(postId);

	return new Response(JSON.stringify(post));
};

export const DELETE = async ({ params }) => {
	const { postId } = z
		.object({
			postId: z.string()
		})
		.parse(params);

	const post = await deletePost(postId);

	return new Response(JSON.stringify(post));
};
