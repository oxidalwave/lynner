export async function load({ params, fetch }) {
	const boards = await fetch(`/api/channels/${params.channelCode}/boards`).then((r) => r.json());

	const channel = await fetch(`/api/channels/${params.channelCode}`).then((r) => r.json());

	return { channel, boards };
}
