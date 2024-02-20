// const api_key = 'api_key=9fd2b043f80a996774541f44c555671b';
// const base_url = 'https://api.themoviedb.org/3';
// const api_url = base_url + '/discover/movie?sort_by=popularity.desc&' + api_key;
// const image_url = 'https://image.tmdb.org/t/p/w500';
// const searchurl = base_url + '/search/movie?' + api_key;
// const form = document.getElementById('form');
// const search = document.getElementById('search');
// const main = document.querySelector('.main');

// async function fetchMovies(url) {
//     try {
//         const resp = await fetch(url);
//         const data = await resp.json();
//         showMovies(data.results);
//     } catch (error) {
//         console.error('Error fetching movies:', error);
//         alert('Failed to fetch movies. Please try again later.');
//     }
// }

// function showMovies(data) {
//     main.innerHTML = '';

//     data.forEach(movie => {
//         const { title, poster_path, vote_average, overview } = movie;

//         const movieEl = document.createElement('div');
//         movieEl.classList.add('movie');
//         movieEl.innerHTML = `
//         <button class="button">❤️</button>
//             <img src="${image_url + poster_path}" alt="${title}">
//             <div class="movie-info">
//                 <h3>${title}</h3>
//                 <span class="${getColor(vote_average)}">${vote_average}</span>
//             </div>
//             <div class="overview">
//                 <h3>OVERVIEW</h3>
//                 ${overview}
//             </div>
//         `;
//         main.appendChild(movieEl);
//     });

//     // Add event listeners to newly created buttons
//     const buttons = document.querySelectorAll('.button');
//     buttons.forEach(button => {
//         button.addEventListener('click', handleFavoriteButtonClick);
//     });
// }

// function handleFavoriteButtonClick(e) {
//     const movieTitle = e.target.parentElement.querySelector('h3').textContent;
//     saveFavoriteMovie(movieTitle);
// }

// function saveFavoriteMovie(movieTitle) {
//     // Check if there are existing favorite movies
//     let favorites = localStorage.getItem('favorite_movies');

//     if (!favorites) {
//         // If no favorites exist, create a new array with the current movie
//         favorites = [movieTitle];
//     } else {
//         // Parse the existing favorites from local storage
//         favorites = JSON.parse(favorites);

//         // Check if the movie is already in favorites
//         if (!favorites.includes(movieTitle)) {
//             // If not, add it to the array
//             favorites.push(movieTitle);
//         }
//     }

//     // Save the updated favorites array back to local storage
//     localStorage.setItem('favorite_movies', JSON.stringify(favorites));



// }


// function getColor(vote) {
//     if (vote >= 8) {
//         return 'green';
//     } else if (vote >= 5) {
//         return 'orange';
//     } else {
//         return 'red';
//     }
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const searchterm = search.value.trim(); // Trim whitespace from search term

//     if (searchterm) {
//         fetchMovies(searchurl + '&query=' + encodeURIComponent(searchterm)); // Encode search term
//         search.value = ''; // Clear search input after submission
//     }
// });

// // Initial fetch for popular movies
// fetchMovies(api_url);

// fetchMovies.js
// fetchModule.js
export async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        throw new Error('Failed to fetch data. Please try again later.');
    }
}
