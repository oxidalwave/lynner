import prisma from '$lib/client';

interface CreatePostBody {
	title: string;
	text: string;
}

export async function createPost(
	channelIdentifier: { code: string },
	boardIdentifier: { code: string },
	userIdentifier: { email: string },
	post: CreatePostBody
) {
	const channel = await prisma.channel.findUnique({
		where: { code: channelIdentifier.code }
	});

	if (channel) {
		return await prisma.post.create({
			data: {
				title: post.title,
				text: post.text,
				user: { connect: { email: userIdentifier.email } },
				board: {
					connect: { channelId_code: { code: boardIdentifier.code, channelId: channel.id } }
				}
			}
		});
	} else {
		throw Error('Channel not found');
	}
}
