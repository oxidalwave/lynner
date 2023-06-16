import prisma from '$lib/client';

export async function readBoard(id: string) {
	return await prisma.board.findUnique({ where: { id } });
}
