import type { typeLayoutServerLoad } from './$types';

export async function load(event) {
	const channels = event.fetch('/api/channels').then((r) => r.json());

	return {
		channels,
		session: await event.locals.getSession()
	};
}
