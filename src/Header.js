import React, { useEffect, useState } from 'react'
import Menu from './Menu';
import './styles/Header.css'
import './styles/App.css'
import firebase from 'firebase'
import FirebaseAuth from 'react-firebaseui/FirebaseAuth'
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
    const [isSignedIn, setIsSignedIn] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDfYvcVytioWmYX0sG-_IlA4kWHx40RzHg",
        authDomain: "clone-29217.firebaseapp.com",
        databaseURL: "https://clone-29217.firebaseio.com",
        projectId: "clone-29217",
        storageBucket: "clone-29217.appspot.com",
        messagingSenderId: "172397596944",
        appId: "1:172397596944:web:6f31c3b472a6e0ed5a1595",
        //measurementId: "G-VD31RC3610"
    };

    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
    // Configure FirebaseUI
    const uiConfig = {
        // Popup signin flow rather than redirect flow
        signInFlow: 'popup',
        // We will display Google as auth providers
        signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          // Avoid redirects after sign-in
          signInSuccessWithAuthResult: () => false
        }
    };

    /*useEffect(() => {
        
    })*/
    const openMenu = () => {
        let menu = document.getElementById('menu-container')
        menu.style.display = 'block'
        setMenuOpen(true)
    }
    const closeMenu = () => {
        let menu = document.getElementById('menu-container')
        menu.style.display = 'none'
        setMenuOpen(false)
        
        console.log(menuOpen);
        console.log(menuOpen);
    }


    /*if(menuOpen === true) {
        window.addEventListener('click', function(e){   
            if (document.getElementById('menu-container').contains(e.target)){
              // Clicked in box
            } else{
              closeMenu();
            }
          });
    }*/

   
    //performSearch();
    //perform search on submit/click 
    //performSearch() returns/routes to Search page with data 
    //data mapped through on search page
    
    return (
        <>
            <div className="header">
                <div className="header-left">
                    <IconButton onClick={openMenu}>
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
                    
                    {isSignedIn ? (
                        <>
                            <AccountCircleIcon className="profile-pic"/> {/*if true, user google profile picture*/}
                            {/*<p>{firebase.auth().currentUser.displayName}</p>*/}
                        </>
                        ) : (
                        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} className="signin-btn">            
                            <AccountCircleIcon className="profile-pic"/> 
                            <p>Sign In</p>
                        </FirebaseAuth>
                    )}
                </div>
            </div>
            <div id="menu-container">
            <div className="header-left">
                <IconButton onClick={closeMenu}>
                    <MenuIcon className="icon"/>
                </IconButton>
                <img src={logo} alt="" className="logo"/>
            </div>
            <Menu/>
            </div>
        </>
    )
}

export default Header
