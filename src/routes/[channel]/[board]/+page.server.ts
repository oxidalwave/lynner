export async function load(event) {
	const { params } = event;

	return { board: params.board, channel: params.channel };
}
