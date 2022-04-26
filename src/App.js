import './App.css';

import SearchBar from './components/SearchBar';
import MovieCardList from './components/MovieCardList';
import { useAPI } from './api';

const App = () => {
    const [movies, searchMovies] = useAPI();

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <SearchBar onClick={searchMovies} />
            <MovieCardList movies={movies} />
        </div>
    );
};

export default App;
