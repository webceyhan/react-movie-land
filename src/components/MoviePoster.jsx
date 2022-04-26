const placeholder = 'https://via.placeholder.com/400';

const MoviePoster = ({ poster }) => {
    return (
        <img
            className="card-img"
            src={poster !== 'N/A' ? poster : placeholder}
            alt="poster"
        />
    );
};

export default MoviePoster;
