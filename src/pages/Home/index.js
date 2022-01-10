import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import AddNewFriends from '../../components/AddNewFriends';
import FriendsRow from '../../components/FriendsRow';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import Sorting from '../../components/Sorting';

const Home = () => {
    const friendsList = useSelector((state) => state.friendsReducers.list)
    const [currentPage, setCurrentPage] = useState(1);
    const [listPerPage] = useState(4);
    const [serachTerm, setSerachTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [isVisibleSearch, setVisibleSearch] = useState(false);

    // Get cureent posts
    const indexOfLastPost = currentPage * listPerPage;
    const indexOfFirstPage = indexOfLastPost - listPerPage;
    const currentFriendList = friendsList.slice(indexOfFirstPage, indexOfLastPost);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //Search friends
    function searchHandler(searchTerm) {
        setSerachTerm(searchTerm);
        if (searchTerm !== "") {
            const newFriendsList = friendsList.filter((list) => {
                return Object.values(list).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
            });
            setSearchResult(newFriendsList);
        } else {
            setSearchResult(currentFriendList)
        }
    }

    function onClickSearch() {
        setVisibleSearch(!isVisibleSearch);
        if (isVisibleSearch) {
            setSearchResult(currentFriendList);
        }
    }

    return (
        <div>
            <Header term={serachTerm} searchKeyword={searchHandler.bind(this)} onClickSearch={onClickSearch} isVisibleSearch={isVisibleSearch}></Header>
            <AddNewFriends></AddNewFriends>
            <Sorting></Sorting>
            <FriendsRow friendsList={serachTerm.length < 1 ? currentFriendList : searchResult}></FriendsRow>
            <Pagination listPerPage={listPerPage} totalList={friendsList.length} paginate={paginate} currentPage={currentPage}></Pagination>
        </div>
    )
}

export default Home;