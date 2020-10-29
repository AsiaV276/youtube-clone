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
        fetch(`https://www.googleapis.com/youtube/v3/videos/?key=${process.env.REACT_APP_API_KEY}&part=snippet,statistics&chart=mostPopular&maxResults=3`)
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
                            viewCount={formatNumber(item.statistics.viewCount)}
                            publishedAt={diffHours(currentDateTime, item.snippet.publishedAt)}
                            description={item.snippet.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Trending
