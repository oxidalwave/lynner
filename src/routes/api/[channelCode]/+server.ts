import prisma from '$lib/client.js';
import { channelValidator } from '../../../validation/channel.js';

export const GET = async ({ params }) => {
	const { channelCode } = params;

	const channel = await prisma.channel.findUnique({ where: { code: channelCode } });

	return new Response(JSON.stringify(channel));
};

export const PUT = async ({ params, request }) => {
	const data = await request.json();

	const channel = await prisma.channel.update({
		where: { code: params.channelCode },
		data: channelValidator.parse(data)
	});

	return new Response(JSON.stringify(channel));
};

export const DELETE = async ({ params }) => {
	const channel = await prisma.channel.delete({ where: { code: params.channelCode } });
	return new Response(JSON.stringify(channel));
};
