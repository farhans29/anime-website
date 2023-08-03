import { useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

function Home() {
    const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");

	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.consumet.org/anime/gogoanime/top-airing`)
		.then(res => res.json());
		SetTopAnime(temp.results.slice(0, 5));
	}

	const HandleSearch = e => {
		e.preventDefault();
		FetchAnime(search);
	}
	const FetchAnime = async (query) => {
		
		const temp = await fetch(`https://api.consumet.org/anime/gogoanime/${query}`)
			.then(res => res.json());
		SetAnimeList(temp.results);
	}

	useEffect(() => {
		GetTopAnime();
	}, []);
	
return (
    <div className="Home">
        <Header />
        <div className="content-wrap">
            <Sidebar 
                topAnime={topAnime} />
            <MainContent
                HandleSearch={HandleSearch}
                search= {search}
                SetSearch = {SetSearch}
                animeList = {animeList}/>
        </div>
        <Footer />
    </div>
);

}

export default Home;