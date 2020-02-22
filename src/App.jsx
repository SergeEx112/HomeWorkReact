import React, { useEffect, useState }from 'react';
import Header from './components/Header';
import Users from './containers/Users';
import Photos from './containers/Photos';
import Albums from './containers/Albums';
import './App.css';
import { getUsers } from './services/api';
import { getPhotos } from "./services/api";
import { getAlbums } from "./services/api";

const usersFromApi = async (setter) => {
    const users = await getUsers();
    setter(users)
};

const getPhotosFromApi = async (setter) => {
    const photos = await getPhotos();
    setter(photos);
};

const getAlbumsFromApi = async (setter) => {
    const albums = await getAlbums();
    setter(albums);
};


const App = () => {
    const [users, setUsers] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [albums, setAlbums] = useState([]);


    useEffect(() => {
        usersFromApi(setUsers)
    }, [])

    
    useEffect(() => {
        getPhotosFromApi(setPhotos)
    }, [])

    useEffect(() => {
        getAlbumsFromApi(setAlbums)
    }, [])

    return (
        <div className="app">
            <Header />
            <Users users={users}/>
            <Photos photos={photos}/>
            <Albums albums={albums}/>
        </div>
    );
}

export default App;