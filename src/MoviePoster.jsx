const placeholder = 'https://via.placeholder.com/400';

const MoviePoster = ({ poster }) => {
    return <img src={poster !== 'N/A' ? poster : placeholder} />;
};

export default MoviePoster;
