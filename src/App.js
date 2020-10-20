import React from 'react';
import './styles/App.css';
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
  return (
    <div className="app">
      <Header/>
      <div className="menu-container">
        <Menu isOpen={isOpen}/>
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
