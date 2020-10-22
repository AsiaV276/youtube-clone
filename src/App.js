import React, { useEffect, useState } from 'react';
import './styles/App.css';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './images/YouTube_Logo_2017.svg';
import { IconButton } from '@material-ui/core';
import Menu from './Menu';
import Sidebar from './Sidebar';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Trending from './Trending';
import Subscriptions from './Subscriptions';
import Library from './Library';
import Search from './Search';
import './styles/Header.css'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import { 
    Link 
} from 'react-router-dom';


function App() {

  const [inputSearch, setInputSearch] = useState('')
  const [apiData, setApiData] = useState({})

  const api_key = 'AIzaSyDfYvcVytioWmYX0sG-_IlA4kWHx40RzHg'
  
  useEffect(() => {
    async function performSearch() {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${api_key}&maxResults=10&q=${inputSearch}`)
    .then(res => res.json())
    .then(data => setApiData(data))
    .catch(error => {
        console.error('Error:', error);
    })
  }
    performSearch();
  }, [inputSearch])
  
    
  /*const performSearch = () => {
      
  }*/
  //

  return (
    <div className="app">
      
      <Router>
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
                  value={inputSearch}
                  onChange={e => setInputSearch(e.target.value)}
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
        <div id="menu-container">
          <div className="header-left">
            <IconButton>
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
            <Route exact path="/search/:searchTerm">
              <Search apiData={apiData}/>
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
