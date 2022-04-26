import './App.css';
import { useState } from 'react';
import SearchBar from './SearchBar';
import MovieCardList from './MovieCardList';

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
            <MovieCardList movies={movies} />
        </div>
    );
};

export default App;
