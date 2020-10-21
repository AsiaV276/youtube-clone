import { SportsEsports } from '@material-ui/icons'
import React from 'react'
import './styles/Trending.css'
import TrendingVideoCard from './TrendingVideoCard'
import TheatersIcon from '@material-ui/icons/Theaters'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import ReceiptIcon from '@material-ui/icons/Receipt'
import MusicNoteIcon from '@material-ui/icons/MusicNote'

function Trending() {
    return (
        <div id="trending">
            <div className="trending-container">
                <div className="trending-topics">
                    <MusicNoteIcon/>
                    <SportsEsportsIcon/>
                    <ReceiptIcon/>
                    <TheatersIcon/>
                </div>
                <div className="trending-videos-container">
                    <TrendingVideoCard
                        videoTitle="GIANT Pumpkin Carving Contest"
                        thumbnailUrl="https://i.ytimg.com/vi/4CqwkiaXEOQ/mqdefault.jpg"
                        channelTitle="Dude Perfect"
                        viewCount="5786097"
                        description="Hide and seek in a HUGE store, carving massive pumpkins, plus your two favorite segments all in Overtime 19! Special thanks to Bass Pro Shops for sponsoring this video!"
                    />
                </div>
            </div>
        </div>
    )
}

export default Trending
