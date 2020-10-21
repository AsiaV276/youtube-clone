import React from 'react'
import './styles/Header.css'
import './styles/App.css'
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo from './images/YoutubeLogo.png';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    const isMenuOpen = false;
    /*const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    }*/
    return (
        <div className="header">
            <div className="header-left">
                <IconButton>
                    <MenuIcon className="icon"/>
                </IconButton>
                <img src={logo} alt="" className="logo"/>
            </div>
            <form action="">
                <input type="text" placeholder="Search"/>
                <button type="submit">
                    <SearchIcon className="searchIcon"/>
                </button>
            </form>
            <div className="header-right">
                <IconButton>
                    <VideoCallIcon className="icon"/>
                </IconButton>
                <IconButton>
                    <AppsIcon className="icon"/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon className="icon"/>
                </IconButton>
                
                
                <AccountCircleIcon className="profile-pic"/>
            </div>
        </div>
    )
}

export default Header
