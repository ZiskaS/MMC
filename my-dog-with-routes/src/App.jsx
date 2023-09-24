import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import NavBar from './components/navBar';
import PostList from './components/postList';
import Profile from './components/profile';
import SearchBar from './components/searchBar';
import Login from './components/login'; 


function App() {
  const [searchValue, setSearchValue] = useState('');
  const [currentView, setCurrentView] = useState('postList');
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleLogoClick = () => {
    setCurrentView('postList');
  };

  const handleProfileClick = () => {
    setCurrentView('profile');
  };

  return (
      <div className="container">
        {token ? (
          <>
            <NavBar
              onLogoClick={handleLogoClick}
              onProfileClick={handleProfileClick}
            />
            <SearchBar value={searchValue} onSearch={handleSearch} />
            {/* Conditionally render components based on currentView */}
            {currentView === 'postList' ? (
              <PostList searchValue={searchValue} />
            ) : currentView === 'profile' ? (
              <Profile />
            ) : null}
          </>
        ) : (
          <Login setToken={setToken} />
        )}
      </div>
  );
}

export default App;

