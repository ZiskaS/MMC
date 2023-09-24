import React from 'react';
import { useLocation } from 'react-router-dom';

function NavBar({ onLogoClick, onProfileClick }) {
  const location = useLocation();

  // Check if the current route is not '/login' and render the profile picture accordingly
  const renderProfilePicture = location.pathname !== '/login' && (
    <div onClick={onProfileClick}>
      <i className="fa fa-user-circle"></i>
    </div>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="navbar-brand" onClick={onLogoClick}>
          I <i className="fa fa-heart"></i> My Dog
        </div>
        {renderProfilePicture}
      </div>
    </nav>
  );
}

export default NavBar;

