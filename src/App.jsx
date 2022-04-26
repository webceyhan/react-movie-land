import SearchBar from './components/SearchBar';
import MovieCardList from './components/MovieCardList';
import { useAPI } from './api';

const App = () => {
    const [movies, searchMovies] = useAPI();

    return (
        <div className="container text-center py-5">
            <h1 className="display-3 text-warning">MovieLand</h1>

            <br />

            <SearchBar onClick={searchMovies} />

            <br />
            <br />

            <MovieCardList movies={movies} />
        </div>
    );
};

export default App;
