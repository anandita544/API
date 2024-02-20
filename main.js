// main.js
import { fetchData } from './fetchModule.js';
import { displayMovies } from './displayModule.js';

const api_key = 'api_key=9fd2b043f80a996774541f44c555671b';
const base_url = 'https://api.themoviedb.org/3';
const api_url = `${base_url}/discover/movie?sort_by=popularity.desc&${api_key}`;
const image_url = 'https://image.tmdb.org/t/p/w500';
const searchurl = `${base_url}/search/movie?${api_key}`;
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.querySelector('.main');

document.addEventListener('DOMContentLoaded', () => {
    fetchData(api_url)
        .then(data => displayMovies(main, data.results, image_url))
        .catch(error => alert(error.message));
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchterm = search.value.trim();

    if (searchterm) {
        try {
            const searchData = await fetchData(`${searchurl}&query=${encodeURIComponent(searchterm)}`);
            displayMovies(main, searchData.results, image_url);
            search.value = '';
        } catch (error) {
            alert(error.message);
        }
    }
});
