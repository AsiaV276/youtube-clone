import { SportsEsports } from '@material-ui/icons'
import React from 'react'
import './styles/Trending.css'
import VideoRow from './VideoRow'
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
                    <VideoRow
                        videoTitle="Your body language may shape who you are | Amy Cuddy"
                        thumbnailUrl="https://i.ytimg.com/vi/Ks-_Mh1QhMc/mqdefault.jpg"
                        channelTitle="TED"
                        viewCount="18649522"
                        description="Body language affects how others see us, but it may also change how we see ourselves. Social psychologist Amy Cuddy argues that"
                    />
                    <VideoRow
                        videoTitle="GIANT Pumpkin Carving Contest"
                        thumbnailUrl="https://i.ytimg.com/vi/4CqwkiaXEOQ/mqdefault.jpg"
                        channelTitle="Dude Perfect"
                        viewCount="5786097"
                        description="Hide and seek in a HUGE store, carving massive pumpkins, plus your two favorite segments all in Overtime 19! Special thanks to Bass Pro Shops for sponsoring this video!"
                    />
                    <VideoRow
                        videoTitle="GIANT Pumpkin Carving Contest"
                        thumbnailUrl="https://i.ytimg.com/vi/4CqwkiaXEOQ/mqdefault.jpg"
                        channelTitle="Dude Perfect"
                        viewCount="5786097"
                        description="Hide and seek in a HUGE store, carving massive pumpkins, plus your two favorite segments all in Overtime 19! Special thanks to Bass Pro Shops for sponsoring this video!"
                    />
                    <VideoRow
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
