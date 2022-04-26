import { useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchBar from './SearchBar';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=90715111';

const App = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const url = `${API_URL}&s=${encodeURIComponent(title)}`;
        const response = await fetch(url);
        const data = await response.json();

        setMovies(data.Search);
    };

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <SearchBar onClick={searchMovies} />

            <div className="container">
                {movies?.length > 0 ? (
                    movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
