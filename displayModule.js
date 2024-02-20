// showMovies.js
// displayModule.js
import { getColor } from './utilities.js';

export function displayMovies(main, data, image_url) {
    main.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <button class="button">❤️</button>
            <img src="${image_url + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>OVERVIEW</h3>
                ${overview}
            </div>
        `;
        main.appendChild(movieEl);
    });
}
