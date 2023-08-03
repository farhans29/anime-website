import React from 'react'

function AnimeCard({anime}) {

	return (
		
		<article className="anime-card">
			<a 
				href={`/episode/${anime.id}`}
				rel="noreferrer"
				>
				<figure>
					<img 
						src={anime.image} 
						alt="Anime images" />	
				</figure>
				<h3>{ anime.title }</h3>
			</a>
		</article>
	)
}

export default AnimeCard
