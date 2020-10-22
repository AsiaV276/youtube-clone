import React from 'react'
import './styles/Menu.css'
import './styles/App.css'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TheatersIcon from '@material-ui/icons/Theaters';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function Menu() {//isOpen
    //returns menu display style to open and close menu
    
    return (
        
            <div className="menu"> 
                <div className="menu-section">
                    <div className="menu-content">
                        <HomeIcon className="icon"/>
                        <p>Home</p>
                    </div>
                    <div className="menu-content">
                        <WhatshotIcon className="icon"/>
                        <p>Trending</p>
                    </div>
                    <div className="menu-content">
                        <SubscriptionsIcon className="icon"/>
                        <p>Subscriptions</p>
                    </div>
                </div>
                <div className="menu-section">
                    <div className="menu-content">
                        <VideoLibraryIcon className="icon"/>
                        <p>Library</p>
                    </div>
                    <div className="menu-content">
                        <HistoryIcon className="icon"/>
                        <p>History</p>
                    </div>
                    <div className="menu-content">
                        <PlayArrowIcon className="icon"/>
                        <p>Your videos</p>
                    </div>
                    <div className="menu-content">
                        <WatchLaterIcon className="icon"/>
                        <p>Watch later</p>
                    </div>
                    <div className="menu-content">
                        <ThumbUpIcon className="icon"/>
                        <p>Liked videos</p>
                    </div>
                    <div className="menu-content">
                        <PlaylistPlayIcon className="icon"/>
                        <p>Playlist</p>
                    </div>
                    <div className="menu-content">
                        <ExpandMoreIcon className="icon"/>
                        <p>Show more</p>
                    </div>
                </div>
                <div className="menu-section">
                    <h5>Subscriptions</h5>
                    <div className="menu-content">
                        <AddCircleIcon className="icon"/>
                        <p>Browse channels</p>
                    </div>
                </div>
                <div className="menu-section">
                    <h5>More from Youtube</h5>
                    <div className="menu-content">
                        <YouTubeIcon className="icon"/>
                        <p>YouTube Premium</p>
                    </div>
                    <div className="menu-content">
                        <TheatersIcon className="icon"/>
                        <p>Movies & Shows</p>
                    </div>
                    <div className="menu-content">
                        <SportsEsportsIcon className="icon"/>
                        <p>Gaming</p>
                    </div>
                    <div className="menu-content">
                        <EmojiObjectsIcon className="icon"/>
                        <p>Learning</p>
                    </div>
                </div>
                <div className="menu-section">
                    <div className="menu-content">
                        <SettingsIcon className="icon"/>
                        <p>Settings</p>
                    </div>
                    <div className="menu-content">
                        <FlagIcon className="icon"/>
                        <p>Report history</p>
                    </div>
                    <div className="menu-content">
                        <HelpIcon className="icon"/>
                        <p>Help</p>
                    </div>
                    <div className="menu-content">
                        <FeedbackIcon className="icon"/>
                        <p>Send feedback</p>
                    </div>
                </div>
            </div>
    )
}

export default Menu
