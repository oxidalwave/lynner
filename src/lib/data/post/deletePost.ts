import prisma from '$lib/client';

export async function deletePost(id: string) {
	return await prisma.post.delete({ where: { id } });
}
