export async function load({ params, fetch }) {
	const posts = await fetch(
		`/api/channels/${params.channelCode}/boards/${params.boardCode}/posts`
	).then((r) => r.json());

	return { posts, channelCode: params.channelCode, boardCode: params.boardCode };
}
