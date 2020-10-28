import React, { useState, useEffect } from 'react'
import './styles/Home.css'
import VideoCard from './VideoCard'

function Home() {
    const [homeVideos, setHomeVideos] = useState([])
    
    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/videos/?key=${process.env.REACT_APP_API_KEY}&part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=12`)
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

    const currentDateTime = new Date()
   
    function diffHours(dt2, dt1) {
        var newPublishedDate = new Date(dt1.replace(/-/g,'/').replace('T',' ').replace('Z',''));
        var diff =(dt2.getTime() - newPublishedDate.getTime()) / 1000;
        diff /= (60 * 60);
        return Math.abs(Math.round(diff));
    }
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

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
                        viewCount={formatNumber(item.statistics.viewCount)}
                        publishedAt={diffHours(currentDateTime, item.snippet.publishedAt)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
