import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EpisodeCard({episode}) {
	const [ infoList, setInfoList ] = useState([]);
    const { animeId } = useParams();
	    
    const GetInfo = async(animeId) => {
		const data = await fetch(`https://api.consumet.org/anime/gogoanime/info/${animeId}`).then(res => res.json())
		setInfoList(data);
	  }

	  useEffect(() => {
		GetInfo(animeId);
	  }, [animeId]);

	return (
		<article className="anime-card">
			<a 
				href={`/player/${episode.id}`} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={infoList.image} 
						alt="Episode images" />
				</figure>
				<h3>Episode { episode.number }</h3>
			</a>
		</article>
	)
}

export default EpisodeCard
