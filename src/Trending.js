import React, { useState, useEffect } from 'react'
import './styles/Trending.css'
import VideoRow from './VideoRow'
import TheatersIcon from '@material-ui/icons/Theaters'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import ReceiptIcon from '@material-ui/icons/Receipt'
import MusicNoteIcon from '@material-ui/icons/MusicNote'

function Trending() {
    const [trendingVideos, setTrendingVideos] = useState([])
    
    useEffect(() => {
        const api_key = 'AIzaSyDfYvcVytioWmYX0sG-_IlA4kWHx40RzHg'
        fetch(`https://www.googleapis.com/youtube/v3/videos/?key=${api_key}&part=snippet&chart=mostPopular&maxResults=3`)
        .then(res => res.json())
        .then(
            (data) => {
                setTrendingVideos(data.items)
            }
        )
        .catch((error) => {
            console.error('Error:', error);
          });
    }, [])

    console.log(trendingVideos);
    return (
        <div id="trending">
            <div className="trending-container">
                <div className="trending-topics">
                    <div className="topics-icon-container">
                        <MusicNoteIcon className="topics-icon"/>
                        <p>Music</p>
                    </div>
                    <div className="topics-icon-container">
                        <SportsEsportsIcon className="topics-icon"/>
                        <p>Sports</p>
                    </div>
                    <div className="topics-icon-container">
                        <ReceiptIcon className="topics-icon"/>
                        <p>News</p>
                    </div>
                    <div className="topics-icon-container">
                        <TheatersIcon className="topics-icon"/>
                        <p>Movies</p>
                    </div>
                </div>
                <hr/>
                <div className="trending-videos-container">
                    {trendingVideos.map((item) => (
                        <VideoRow
                            key={item.id}
                            videoTitle={item.snippet.title}
                            thumbnailUrl={item.snippet.thumbnails.medium.url}
                            channelTitle={item.snippet.channelTitle}
                            //viewCount={item.snippet.statistics.viewCount}
                            description={item.snippet.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Trending
