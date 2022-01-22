import { Avatar } from '@material-ui/core'
import React from 'react'
import './styles/VideoCard.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

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
                    <div className="channel-title">{channelTitle} <CheckCircleRoundedIcon className="verified-icon"/></div>
                    <div className="video-stats">
                        <p>{viewCount} {" views"} &bull; &nbsp;</p>
                        <p>{publishedAt}</p>
                    </div>
                </div>
                <MoreVertIcon className="more-icon"/>
            </div>
        </div>
    )
}

export default VideoCard
