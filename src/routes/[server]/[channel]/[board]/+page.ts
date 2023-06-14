export const load = async ({ params }) => {
	const board = await fetch(
		`http://${params.server}:5173/api/${params.channel}/${params.board}`
	).then((r) => r.json());

	return { board };
};
