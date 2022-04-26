import { useEffect } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import './App.css';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=90715111';

const movie = {
    Poster: 'https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg',
    Title: 'Italian Spiderman',
    Type: 'movie',
    Year: '2007',
    imdbID: 'tt2705436',
};

const App = () => {
    const searchMovies = async (title) => {
        const url = `${API_URL}&s=${encodeURIComponent(title)}`;
        const response = await fetch(url);
        return await response.json();
    };

    useEffect(() => {
        async function fetchData() {
            const resp = await searchMovies('spiderman');
            console.log(resp.Search);
        }
        fetchData();
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    type="text"
                    placeholder="Search for a movie"
                    value="superman"
                    onChange={() => {}}
                />
                <img src={SearchIcon} alt="Search" onClick={() => {}} />
            </div>

            <div className="container">
                <MovieCard movie={movie} />
            </div>
        </div>
    );
};

export default App;
