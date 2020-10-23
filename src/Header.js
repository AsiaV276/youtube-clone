import React, { useState } from 'react'
import './styles/Header.css'
import './styles/App.css'
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo from './images/YouTube_Logo_2017.svg';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { 
    Link 
} from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState('')
  
    //performSearch();
    //perform search on submit/click 
    //performSearch() returns/routes to Search page with data 
    //data mapped through on search page
    
    return (
        <div className="header">
            <div className="header-left">
                <IconButton>
                    <MenuIcon className="icon"/>
                </IconButton>
                <Link to="/">
                    <img src={logo} alt="" className="logo"/>
                </Link>
            </div>
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search"
                    //value={inputSearch}
                    //onChange={e => setInputSearch(e.target.value)}
                />
                <Link to={`/search/${inputSearch}`} className="button">
                    <SearchIcon className="searchIcon"/>
                </Link>
            </div>
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
