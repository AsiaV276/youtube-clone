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
        var totalHours = (dt2.getTime() - newPublishedDate.getTime()) / 1000;
        totalHours /= (60 * 60);
        var diff
        if(totalHours < 24) {
            var rHours = Math.abs(Math.round(totalHours))
            if(rHours === 1) {
                return rHours + " hour ago"
            }
            else {
                return rHours + " hours ago"
            }
        }
        else {
            diff = totalHours / 24
            var rDiff = Math.abs(Math.round(diff))
            if(rDiff === 1) {
                return rDiff + " day ago"
            }
            else {
                return rDiff + " days ago"
            }
        }
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
