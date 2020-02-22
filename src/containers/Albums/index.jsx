import React from 'react';
import './style.scss';
import Search from '../../components/Search';
import AlbumCard from '../../components/AlbumCard';

const Albums = ({ albums }) => {
  return (
    <section className="Albums">
    <Search
        title="Search album"
        placeholder="Enter album id..."
        onChange={value => console.log(value)}
      />
      <main>
      <div className="album-card">
          {albums.map(album => {
            return (
            <AlbumCard
              album={album}
              key={album.url + album.id + album.albumId}
            />
          );
        })}
        </div>
        </main>
    </section>
  );
};

export default Albums;