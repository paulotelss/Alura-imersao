// script.js

const movies = [
    {
        title: "Spider-Man 2",
        year: 2004,
        director: "Sam Raimi",
        genre: "Superhero, Drama, Action, Adventure",
        rating: 7.5,
        poster: "https://m.media-amazon.com/images/I/81fsCuH2seL._AC_UF894,1000_QL80_.jpg"
    },
    {
        title: "The Last of Us",
        year: 2023,
        director: "N/A",
        genre: "Action, Adventure",
        rating: 8.7,
        poster: "link_para_o_poster2"
    },
    {
        title: "Interstellar",
        year: 2014,
        director: "Christopher Nolan",
        genre: "Sci-Fi",
        rating: 8.6,
        poster: "link_para_o_poster3"
    },
    {
        title: "Inception",
        year: 2010,
        director: "Christopher Nolan",
        genre: "Action, Adventure",
        rating: 8.8,
        poster: "https://play-lh.googleusercontent.com/buKf27Hxendp3tLNpNtP3E-amP0o4yYV-SGKyS2u-Y3GdGRTyfNCIT5WAVs2OudOz6so5K1jtYdAUKI9nw8"
    },
    {
        title: "The Dark Knight Rises",
        year: 2012,
        director: "Christopher Nolan",
        genre: "Action, Crime, Drama",
        rating: 8.4,
        poster: "https://images.tbs.com/tbs/$dyna_params/https%3A%2F%2Fi.cdn.tbs.com%2Fassets%2Fimages%2F2018%2F09%2FDarkKnightRises-1024x1536.jpg"
    }
];

function searchMovie() {
    const input = document.getElementById('movieTitle').value.toLowerCase();
    const movieDetails = document.getElementById('movieDetails');
    const mainContent = document.getElementById('mainContent');
    movieDetails.innerHTML = '';

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(input));

    if (filteredMovies.length > 0) {
        mainContent.style.display = 'none'; // Oculta a seção principal
        filteredMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <img src="${movie.poster}" alt="Poster do filme">
                <h3>${movie.title} (${movie.year})</h3>
                <p>Diretor: ${movie.director}</p>
                <p>Gênero: ${movie.genre}</p>
                <p>Nota IMDb: ${movie.rating}</p>
            `;

            movieDetails.appendChild(movieCard);
        });
    } else {
        movieDetails.innerHTML = '<p>Nenhum filme encontrado.</p>';
    }
}








function scrollLeft(carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

function scrollRight(carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
}

// Adicionando event listeners para os botões de rolagem
document.querySelectorAll('.prev-button').forEach(button => {
    button.addEventListener('click', () => {
        const carouselId = button.nextElementSibling.id;
        scrollLeft(carouselId);
    });
});

document.querySelectorAll('.next-button').forEach(button => {
    button.addEventListener('click', () => {
        const carouselId = button.previousElementSibling.id;
        scrollRight(carouselId);
    });
});












window.addEventListener('resize', function() {
    const bottomNav = document.querySelector('.bottom-nav');
    if (window.innerWidth <= 604) {
        bottomNav.style.display = 'flex';
    } else {
        bottomNav.style.display = 'none';
    }
});

// Verificar o tamanho da tela ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const bottomNav = document.querySelector('.bottom-nav');
    if (window.innerWidth <= 604) {
        bottomNav.style.display = 'flex';
    } else {
        bottomNav.style.display = 'none';
    }
});
