import React from 'react';
import './styles/App.css';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './images/YoutubeLogo.png';
import { IconButton } from '@material-ui/core';
import Header from './Header';
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


function App() {
  //const toggleMenu = {display: ''}
  const isOpen = () => {
    return
  }
    const isMenuOpen = document.getElementById('menu-container');
    const toggleMenu = () => {
     console.log(isMenuOpen);
      //  isMenuOpen = !isMenuOpen;
    }
  return (
    <div className="app">
      <Header/>
      <div id="menu-container">
        <div className="header-left">
          <IconButton onClick={toggleMenu}>
              <MenuIcon className="icon"/>
          </IconButton>
          <img src={logo} alt="" className="logo"/>
        </div>
        <Menu/>
      </div>
      <Router>
        <Sidebar/>
        <main>
          <Switch>
            <Route exact path="/">
              <Home/>
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
