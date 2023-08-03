import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState  } from 'react';
import { useParams } from 'react-router-dom';
import EpisodeContent from '../components/EpisodeContent';

function Episode() { 
    const [ episodeList, SetEpisodeList ] = useState([]);
    const { animeId } = useParams();

    const FetchEpisode = async ( animeId ) => {
      const temp = await fetch(`https://api.consumet.org/anime/gogoanime/info/${animeId}`)
      .then(res => res.json());
      SetEpisodeList(temp.episodes);
	}

  useEffect(() => {
    FetchEpisode(animeId);
  }, [animeId]);

  
    return (
      <div className="Home">
        <Header/>
        <center>
          <div className='back-button'>
            
              <a style={{textDecorationLine:'none'}} href='/'>Back</a> 
            
          </div>
        </center>
          <div className="content-wrap">
            <EpisodeContent 
              episodeList = { episodeList } />
          </div>
        <Footer/>
      </div>
    );
}

export default Episode;
