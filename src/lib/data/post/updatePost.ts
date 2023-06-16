import prisma from '$lib/client';

interface UpdatePostBody {
	title: string;
	text: string;
}

export async function updatePost(id: string, post: UpdatePostBody) {
	return await prisma.post.update({
		where: { id },
		data: {
			title: post.title,
			text: post.text
		}
	});
}
