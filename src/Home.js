import React from 'react'
import './styles/Home.css'
import VideoCard from './VideoCard'

function RecommendedVideos() {
    return (
        <div className="videos-container">
            <h2>Recommended</h2>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </div>
    )
}

export default RecommendedVideos
