import { useState } from 'react';
import SearchIcon from '../assets/search.svg';

const SearchBar = ({ onClick }) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="input-group input-group-lg bg-primary bg-opacity-25">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control bg-transparent text-white-50"
                placeholder="Search for a movie"
                tabIndex="0"
                autoFocus
            />
            <span className="input-group-text bg-transparent">
                <img
                    src={SearchIcon}
                    onClick={() => onClick(searchTerm)}
                    alt="search"
                />
            </span>
        </div>
    );
};

export default SearchBar;
