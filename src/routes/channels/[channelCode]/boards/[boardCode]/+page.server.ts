export async function load({ params, fetch }) {
	const channel = await  fetch(`/api/channels/${params.channelCode}`).then(
		(r) => r.json()
	);

	const board = await fetch(`/api/channels/${params.channelCode}/boards/${params.boardCode}`).then(
		(r) => r.json()
	);

	return { board, channel };
}
