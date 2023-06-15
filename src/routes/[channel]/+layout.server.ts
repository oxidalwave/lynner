import type { LayoutServerLoad } from './$types';

export async function load(event) {
	const { channel } = event.params;

	const boards = event.fetch(`/api/${channel}/boards`).then((r) => r.json());

	return {
		boards,
		channel
	};
}
