import React from 'react';
import './style.scss';

const UserPhoto = ({ photo }) => {
  return (
    <div className="user-photo">
        <p>Name: {photo.title}</p>
        <p>Url: {photo.url}</p>
    </div>
  );
}

export default UserPhoto;