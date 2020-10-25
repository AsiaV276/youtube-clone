import React from 'react';
import './styles/App.css';
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
import Header from './Header';
import './styles/Header.css';


function App() {

  return (
    <div className="app">
      
      <Router>
        <Header/>
        <Sidebar/>
        <main>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/search/:searchTerm">
              <Search/>
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
