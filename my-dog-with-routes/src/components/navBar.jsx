import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ onLogoClick, onProfileClick, loggedIn }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid p2">
        <div className="d-flex justify-content-between align-items-center w-100">
          <Link to="/" className="navbar-brand" onClick={onLogoClick}>
            I <i className="fa fa-heart"></i> My Dog
          </Link>
          {loggedIn && (
            <div className="profile-icon" onClick={onProfileClick}>
              <Link to="/profile">
                <i className="fa fa-user-circle"></i>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;




