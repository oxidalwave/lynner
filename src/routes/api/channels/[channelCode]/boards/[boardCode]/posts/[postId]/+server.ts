import prisma from '$lib/client.js';

export const GET = async ({ params }) => {
	const { postId } = params;

	const post = await prisma.post.findUnique({ where: { id: postId } });

	return new Response(JSON.stringify(post));
};
