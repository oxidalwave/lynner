import prisma from '$lib/client.js';

export async function readPost(id: string) {
	return await prisma.post.findUnique({ where: { id } });
}
