import { PrismaClient } from '@prisma/client';

export async function load() {
	const prisma = new PrismaClient();

	const posts = prisma.post.findMany();

	return {
		posts
	};
}
