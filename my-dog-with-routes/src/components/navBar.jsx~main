import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function NavBar({ onLogoClick, onProfileClick }) {
  const location = useLocation();

  // Check if the current route is not '/login' and render the profile picture accordingly
  const renderProfilePicture =
    location.pathname !== '/login' ? (
      <div className="profile-icon" onClick={onProfileClick}>
        <Link to="/profile">
          <i className="fa fa-user-circle"></i>
        </Link>
      </div>
    ) : null;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid p-2">
        <div className="d-flex justify-content-between align-items-center w-100">
          <Link to="/" className="navbar-brand" onClick={onLogoClick}>
            I <i className="fa fa-heart"></i> My Dog
          </Link>
          {renderProfilePicture}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
