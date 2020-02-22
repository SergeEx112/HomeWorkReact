import {apiUrl} from '../config/apiUrl';

const api = (url) => {
    return fetch(`${apiUrl.api}${url}`);
}

export const getUsers = async () => {
    const response = await api('/users');
    return await response.json();
}

export const getPhotos = async () => {
    const response = await api('/photos');
    return await response.json();
}

export const getAlbums = async () => {
    const response = await api('/albums');
    return await response.json();
}
