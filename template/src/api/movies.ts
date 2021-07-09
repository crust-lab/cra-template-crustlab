import axios from 'axios';

export async function fetchMovies() {
    return await axios.get('https://swapi.dev/api/films');
}