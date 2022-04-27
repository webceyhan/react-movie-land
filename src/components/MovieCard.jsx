import MoviePoster from './MoviePoster';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie card bg-black border-0">
            <MoviePoster poster={movie.Poster} />

            <div className="card-img-overlay">
                <div className="movie-header w-100 p-4">
                    <h1>{movie.Year}</h1>
                </div>

                <div className="movie-footer bg-black p-3">
                    <h6 className="text-uppercase text-secondary">
                        {movie.Type}
                    </h6>
                    <h4 className="m-0">{movie.Title}</h4>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
