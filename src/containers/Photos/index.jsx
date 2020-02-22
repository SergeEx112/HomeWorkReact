import React from 'react';
import './style.scss';
import Search from '../../components/Search';
import PhotoCard from '../../components/PhotoCard';


const Photos = ({ photos }) => {
  return (
    <section className="photos">
      <Search
        title="Search photos"
        placeholder="Enter photo id..."
        onChange={value => console.log(value)}
      />
      <main>
      <div className="photo-card">
          {photos.map(photo => {
            return (
            <PhotoCard
              photo={photo}
              key={photo.url + photo.id + photo.photoId}
            />
          );
        })}
        </div>
        </main>
    </section>
  );
};

export default Photos;