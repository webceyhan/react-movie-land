import { useState } from 'react';
import SearchIcon from './search.svg';

const SearchBar = ({ onClick }) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="search">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a movie"
            />
            <img src={SearchIcon} onClick={() => onClick(searchTerm)} />
        </div>
    );
};

export default SearchBar;
