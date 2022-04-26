import MovieCard from './MovieCard';

const MovieCardList = ({ movies }) => {
    return (
        <>
            {movies?.length > 0 ? (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {movies.map((movie, i) => (
                        <div className="col" key={i}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="alert alert-dark">
                    <h3 className="m-0">No movies found</h3>
                </div>
            )}
        </>
    );
};

export default MovieCardList;
