export async function load({ params, fetch, url }) {
	const searchParams = url.searchParams;

	const sort = searchParams.get('sort') ?? 'desc';

	const posts = await fetch(
		`/api/channels/${params.channelCode}/boards/${params.boardCode}/posts?sort=${sort}`
	).then((r) => r.json());

	return { posts, channelCode: params.channelCode, boardCode: params.boardCode };
}
