import React, { useState } from 'react'
import Icon from "../../assets/Fonts/Iocns";
import SearchBar from '../SearchBar';
const Header = (props) => {
    let { term, searchKeyword } = props;
    const [isVisibleSearch, setVisibleSearch] = useState(false);

    function onClickSearch() {
        setVisibleSearch(!isVisibleSearch);
    }

    return (
        <div className="as-header">
            <h3>Friend List</h3>
            <div className="searchIconWrp" onClick={onClickSearch.bind(this)}>
                <Icon icon="search" size={20} color="#fff" />
            </div>
            <SearchBar term={term} isVisibleSearch={isVisibleSearch} searchKeyword={searchKeyword} onClickSearch={onClickSearch}></SearchBar>
        </div>
    )
}

export default Header;
