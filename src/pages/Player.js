import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState  } from 'react';
import { useParams } from 'react-router-dom';
// import EpisodeContent from '../components/EpisodeContent';
import VideoPlayer from '../components/VideoPlayer';

function Player() { 
    const { episodeId } = useParams();

    return (
      <div className="Home">
        <Header/>
        <center>
          <div className='back-button'>
              <a style={{textDecorationLine:'none'}} href='/'>Back</a> 
          </div>
        </center>
          <div className="content-wrap">
            <VideoPlayer 
            //   videoDatas = {videoDatas}
              episodeId = {episodeId}
               />
          </div>
        <Footer/>
      </div>
    );
}

export default Player;
