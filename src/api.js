import { useState } from 'react';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=90715111';

const fetchMovies = async (title) => {
    const url = `${API_URL}&s=${encodeURIComponent(title)}`;
    const response = await fetch(url);
    const data = await response.json();

    return data.Search;
};

export const useAPI = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        setMovies(await fetchMovies(title));
    };

    return [movies, searchMovies];
};
