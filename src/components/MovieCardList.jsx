import MovieCard from './MovieCard';

const MovieCardList = ({ movies }) => {
    return (
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
    );
};

export default MovieCardList;
