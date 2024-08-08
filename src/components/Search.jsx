import React, { useState } from 'react';
import './style/search.css';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className='search'>
      <input 
        type="text" 
        placeholder='Search'
        value={query}
        onChange={handleChange}
      />
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
}

export default Search;
