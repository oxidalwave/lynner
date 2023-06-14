import type { LayoutServerLoad } from './$types';

export async function load(event) {
	const channels = fetch('http://localhost:5173/api/channels').then((r) => r.json());

	return {
		channels,
		session: await event.locals.getSession()
	};
}
