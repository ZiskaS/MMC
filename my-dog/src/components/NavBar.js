import React from 'react';
import { Link } from 'react-router-dom';

function CombinedNavBar({ onLogoClick, onProfileClick }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand" onClick={onLogoClick}>
          I <i className="fa fa-heart"></i> My Dog
        </Link>
        <div>
          <Link to="/profile">
            <i className="fa fa-user-circle"></i> Profile
          </Link>
        </div>
        <div onClick={onProfileClick}>
          <i className="fa fa-user-circle"></i>
        </div>
      </div>
    </nav>
  );
}

export default CombinedNavBar;
