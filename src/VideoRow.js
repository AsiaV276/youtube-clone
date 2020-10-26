import React from 'react'
import './styles/VideoRow.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

function VideoRow({videoTitle, channelTitle, viewCount, publishedAt, thumbnailUrl, description}) {
    return (
        <div className="trending-videoCard">
            <img src={thumbnailUrl} alt="" className="thumbnail"/>
            <div className="videoCard-info">
                <p className="video-title">{videoTitle}</p>
                <p className="channel-title">{channelTitle} <span><CheckCircleRoundedIcon className="verified-icon"/></span> &nbsp; {viewCount} {" views"} &bull; {publishedAt} {" hours ago"}</p>
                <p className="description">{description}</p>
            </div>
            <MoreVertIcon className="more-icon"/>
        </div>
    )
}

export default VideoRow
