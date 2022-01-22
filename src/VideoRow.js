import React from 'react'
import './styles/VideoRow.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

function VideoRow({videoTitle, channelTitle, viewCount, publishedAt, thumbnailUrl, description}) {
    return (
        <div className="videoRow-container">
            <img src={thumbnailUrl} alt="" className="thumbnail"/>
            <div className="videoCard-info">
                <p className="video-title">{videoTitle}</p>
                <div> 
                    <p className="channel-title">
                        {channelTitle} 
                        <span><CheckCircleRoundedIcon className="verified-icon"/></span>
                    </p>
                    <p>
                        {/* &nbsp; {viewCount} {" views"} &bull; */}
                        {" " + publishedAt}
                    </p>
                </div>
                {/*<p className="description">{description}</p>*/}
            </div>
            <MoreVertIcon className="more-icon"/>
        </div>
    )
}

export default VideoRow
