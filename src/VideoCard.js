import { Avatar } from '@material-ui/core'
import React from 'react'
import './styles/VideoCard.css'

function VideoCard({videoTitle, channelTitle, viewCount, publishedAt, thumbnailUrl}) {
    return (
        <div className="videoCard">
            <img src={thumbnailUrl} alt="" className="thumbnail"/>
            <div className="videoCard-info">
                <Avatar
                    className="videoCard-avatar"
                    //alt={channel}
                    //src={channelImage}
                />
                <div className="video-text">
                    <p className="video-title">{videoTitle}</p>
                    <p>{channelTitle}</p>
                    <p>{viewCount} {" views"} {publishedAt}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
