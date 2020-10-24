import React, { useState, useEffect } from 'react'
import './styles/Home.css'
import VideoCard from './VideoCard'

function Home() {
    const [homeVideos, setHomeVideos] = useState([])
    
    useEffect(() => {
        const api_key = 'AIzaSyDfYvcVytioWmYX0sG-_IlA4kWHx40RzHg'
        fetch(`https://www.googleapis.com/youtube/v3/videos/?key=${api_key}&part=snippet&chart=mostPopular&maxResults=12`)
        .then(res => res.json())
        .then(
            (data) => {
                setHomeVideos(data.items)
            }
        )
        .catch((error) => {
            console.error('Error:', error);
          });
    }, [])

    return (
        <div id="home">
            <div className="home-video-topics">

            </div>

            <div className="videos-container">
                {homeVideos.map((item) => (
                    <VideoCard
                        key={item.id}
                        videoTitle={item.snippet.title}
                        thumbnailUrl={item.snippet.thumbnails.medium.url}
                        channelTitle={item.snippet.channelTitle}
                        //viewCount={item.statistics.}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
