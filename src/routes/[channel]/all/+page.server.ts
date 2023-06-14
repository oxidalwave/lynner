export async function load(event) {
	const { params } = event;

	const boards = await event.fetch(`/api/${params.channel}/boards`).then((r) => r.json());

	return { channel: params.channel, boards };
}
