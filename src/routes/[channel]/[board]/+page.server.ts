export async function load(event) {
	const { params } = event;

	const boards = await event.fetch(`/api/${params.channel}/boards`).then((r) => r.json());

	const board = await event.fetch(`/api/${params.channel}/${params.board}`).then((r) => r.json());

	return { board, boards, channel: params.channel };
}
