export const GET = async ({ params }) => {
	const posts = [
		{ title: `${params.channel} ${params.board} POST 1` },
		{ title: `${params.channel} ${params.board} POST 2` },
		{ title: `${params.channel} ${params.board} POST 3` },
		{ title: `${params.channel} ${params.board} POST 4` },
		{ title: `${params.channel} ${params.board} POST 5` }
	];

	return new Response(JSON.stringify(posts));
};
