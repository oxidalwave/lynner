import prisma from '$lib/client.js';
import { channelValidator } from '$lib/validation/channel.js';

export const GET = async () => {
	const channels = await prisma.channel.findMany();

	return new Response(JSON.stringify(channels));
};

export const POST = async ({ request }) => {
	const data = await request.json();

	const channel = await prisma.channel.create({ data: channelValidator.parse(data) });

	return new Response(JSON.stringify(channel));
};
