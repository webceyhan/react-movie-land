import MoviePoster from './MoviePoster';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            {/* year */}
            <div>
                <p>{movie.Year}</p>
            </div>

            {/* poster image */}
            <div>
                <MoviePoster poster={movie.Poster} />
            </div>

            {/* title */}
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;
