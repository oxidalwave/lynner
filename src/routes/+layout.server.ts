import type { LayoutServerLoad } from './$types';

export async function load(event) {
	const channels = [
		// load from user
		{ name: 'NFL', server: 'localhost', icon: '', label: 'NFL' },
		{ name: 'MLB', server: 'localhost', icon: '', label: 'MLB' },
		{ name: 'Games', server: 'localhost', icon: '', label: 'Games' }
	];

	return {
		channels,
		session: await event.locals.getSession()
	};
}
