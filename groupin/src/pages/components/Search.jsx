import React from 'react';
import './Search.css'

const Search = () => {
    return (
        <div className='con'>
            <input type="text" placeholder="검색어를 입력해주세요." className="search"></input>
        </div>
    );
};

export default Search;