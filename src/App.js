import React, { useState } from 'react';
import './styles/App.css';
import Sidebar from './Sidebar';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Trending from './Trending';
import Subscriptions from './Subscriptions';
import Library from './Library';
import Search from './Search';
import Menu from './Menu';
import './styles/Header.css';
import firebase from 'firebase';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo from './images/YouTube_Logo_2017.svg';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


function App() {
    const [inputSearch, setInputSearch] = useState('')
    const [fullInput, setFullInput] = useState('')
    const [isSignedIn, setIsSignedIn] = useState(true)

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
    const openMenu = () => {
        let menu = document.getElementById('menu-container')
        menu.style.display = 'block'
        //setMenuOpen(true)
    }
    const closeMenu = () => {
        let menu = document.getElementById('menu-container')
        menu.style.display = 'none'
        //setMenuOpen(false)
    }
    const searchAction = () => {
      console.log(inputSearch)
      setFullInput(inputSearch)
    }

  return (
    <div className="app">
      <Router>
          <div className="header">
              <div className="header-left">
                  <IconButton onClick={openMenu}>
                      <MenuIcon className="icon"/>
                  </IconButton>
                  <Link to="/">
                      <img src={logo} alt="" className="logo"/>
                  </Link>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="search">
                  <input 
                      type="text" 
                      placeholder="Search"
                      value={inputSearch}
                      onChange={e => setInputSearch(e.target.value)}
                  />
                  <Link to={{
                    pathname: '/search',
                    search: `?search=${inputSearch}`
                    }} className="button"
                    onClick={searchAction}>
                      <SearchIcon className="searchIcon"/>
                  </Link>
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
        <Sidebar/>
        <main>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/search">
              <Search searchInput={fullInput}/>
            </Route>
            <Route path="/trending">
              <Trending/>
            </Route>
            <Route path="/subscriptions">
              <Subscriptions/>
            </Route>
            <Route path="/library">
              <Library/>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
