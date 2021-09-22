import React, { useRef } from 'react'
import Icon from "../../assets/Fonts/Iocns";
const SearchBar = (props) => {
    let { isVisibleSearch, onClickSearch } = props;
    const inputEl = useRef("");

    function getSearchTerm() {
        props.searchKeyword(inputEl.current.value)
    }

    return (
        <>
            {
                isVisibleSearch &&
                <div className="searchIput">
                    <input
                        ref={inputEl}
                        type="text"
                        placeholder="Search your friend...."
                        value={props.term}
                        onChange={getSearchTerm.bind(this)}
                        autoFocus
                    />
                    <div className="closeIcon" onClick={onClickSearch.bind(this)}>
                        <Icon icon="cross" size={20} color="#fff" />
                    </div>
                </div>
            }
        </>
    )
}

export default SearchBar;