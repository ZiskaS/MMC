import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import PostList from './components/PostList';
import Profile from './components/Profile';
import SearchBar from './components/SearchBar'; 
import Login from './components/Login'; 



function PhoneFrame({ children }) {
  return (
    <div className="phone-frame">
      <div className="content">{children}</div>
    </div>
  );
}

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const [authenticated, setAuthenticated] = useState(false);

 
      return (
    <Router>
      <PhoneFrame>
        <div className="container">
          <NavBar />
          <SearchBar value={searchValue} onSearch={handleSearch} />
          <Switch>
            <Route path="/Login">
              {authenticated ? <Redirect to="/" /> : <Login onLogin={() => setAuthenticated(true)} />}
            </Route>
            <Route path="/Profile">
              {authenticated ? <Profile /> : <Redirect to="/Login" />}
            </Route>
            <Route path="/" exact>
              {authenticated ? <PostList searchValue={searchValue} /> : <Redirect to="/Login" />}
            </Route>
          </Switch>
        </div>
      </PhoneFrame>
    </Router>
  );
}

export default App;

