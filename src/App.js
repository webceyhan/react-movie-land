import { useEffect } from 'react';
import SearchIcon from './search.svg';
import './App.css';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=90715111';

const movie = {
    Poster: 'https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg',
    Title: 'Italian Spiderman',
    Type: 'movie',
    Year: '2007',
    imdbID: 'tt2705436',
};

const posterPlaceholder = 'https://via.placeholder.com/400';

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
                <div className="movie">
                    {/* year */}
                    <div>
                        <p>{movie.Year}</p>
                    </div>

                    {/* poster image */}
                    <div>
                        <img
                            src={
                                movie.Poster !== 'N/A'
                                    ? movie.Poster
                                    : posterPlaceholder
                            }
                            alt={movie.Title}
                        />
                    </div>

                    {/* title */}
                    <div>
                        <span>{movie.Type}</span>
                        <h3>{movie.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
