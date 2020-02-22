import React from 'react';
import './style.scss';

const AlbumCard = ({ album }) => {
  return (
    <div className="user-album">
        <p>Name: {album.title}</p>
    </div>
  );
}

export default AlbumCard;