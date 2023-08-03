import ReactHlsPlayer from "react-hls-player";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

export default function VideoPlayer({episodeId}) {
  const [ hlsUrl, SetHlsUrl ] = useState([]);
  // const { episodeId } = episodeId;

      const GetVideo = async ( episodeId ) => {
        const temp = await fetch(`https://api.consumet.org/anime/gogoanime/watch/${episodeId}`).then(res => res.json());
        const datas = temp.sources
        const video = datas[datas.length-2].url
        SetHlsUrl(video);
        console.log(video)
  	}
    useEffect(() => {
      GetVideo(episodeId);
    }, [episodeId]);

  return (
    <div className="row justify-content-center" style={{ paddingTop: "150px" }}>
      <ReactHlsPlayer
        src={hlsUrl}
        autoPlay={false}
        controls={true}
        width="70%"
        height="auto"
      />
    </div>
  );
}
