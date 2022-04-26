import { useEffect } from 'react';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=90715111';

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

    return <h1>Hello World</h1>;
};

export default App;
