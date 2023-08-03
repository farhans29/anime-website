import React from 'react'
import EpisodeCard from './EpisodeCard';

function EpisodeContent(props) {

	return (
		<main>
			<div className="anime-list">
				{ props.episodeList.map(episode => (
					<EpisodeCard
						episode={episode}
						key={episode.id} />
				))}
			</div>
		</main>
	)
}

export default EpisodeContent
