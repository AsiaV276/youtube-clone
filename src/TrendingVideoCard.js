import React from 'react'
import './styles/TrendingVideoCard.css'

function TrendingVideoCard({videoTitle, channelTitle, viewCount, publishedAt, thumbnailUrl, description}) {
    return (
        <div className="trending-videoCard">
            <img src={thumbnailUrl} alt="" className="thumbnail"/>
            <div className="videoCard-info">
                <p className="video-title">{videoTitle}</p>
                <p>{channelTitle}</p>
                <p>{viewCount} {" views"} {publishedAt}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

export default TrendingVideoCard
