export const GET = ({ params }) => {
	const channel = params.channel;

	if (channel === 'NFL') {
		return new Response(
			JSON.stringify([
				{ name: 'Arizona Cardinals', icon: '', label: 'ARI' },
				{ name: 'Baltimore Ravens', icon: '', label: 'BAL' },
				{ name: 'Chicago Bears', icon: '', label: 'CHI' },
				{ name: 'Green Bay Packers', icon: '', label: 'GB' },
				{ name: 'Minnesota Vikings', icon: '', label: 'MIN' }
			])
		);
	}

	if (channel === 'MLB') {
		return new Response(
			JSON.stringify([
				{ name: 'Arizona Diamondbacks', icon: '', label: 'ARI' },
				{ name: 'Chicago Cubs', icon: '', label: 'CHI' },
				{ name: 'Minnesota Twins', icon: '', label: 'MIN' }
			])
		);
	}

	if (channel === 'Gaming') {
		return new Response(
			JSON.stringify([
				{ name: 'Nintendo', icon: '', label: 'NINTENDO' },
				{ name: 'PC', icon: '', label: 'PC' },
				{ name: 'Playstation', icon: '', label: 'PS5' },
				{ name: 'Xbox', icon: '', label: 'XBOX' }
			])
		);
	}

	return new Response(JSON.stringify([]));
};
