import React from 'react';
import avatar from '../assets/profileImage/avatar-1.jpg';
import '../App.css';

function Profile({ userName, bio }) {
  return (
    <div className="profile">
      <div className="profile-info">
        <div className="profile-picture">
          <img
            src={avatar}
            className="img-fluid img-thumbnail smaller-profile-pic"
            alt="avatar"
          />
        </div>
        <p>
          <strong>@</strong> {userName}
        </p>
        <p>
          <strong>Bio</strong> {bio}
        </p>
      </div>
    </div>
  );
}

export default Profile;



