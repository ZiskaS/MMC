import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import NavBar from './components/navBar';
import PostList from './components/postList';
import Profile from './components/profile';
import SearchBar from './components/searchBar';
import Login from './components/login'; // Import the Login component

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [currentView, setCurrentView] = useState('postList');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    // Check for the presence of a token in local storage
    if (!token) {
      // If no token is found, redirect to the login page
      navigate('/login');
    }
  }, [token, navigate]);

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
            isLoggedIn={!!token} // Pass the user login status
            currentView={currentView} // Pass the current view
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
        <Login /> // Show the Login component if there's no token
      )}
    </div>
  );
}

export default App;
