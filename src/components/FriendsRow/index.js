import React from 'react'
import { useDispatch } from 'react-redux'
import DeleteIcon from './DeleteIcon'
import FavouriteIcon from './FavouriteIcon'
import FriendDetails from './FriendDetails'
import FriendName from './FriendName'
import { deleteFriendRow, favouriteFriend } from '../../actions/index'

const FriendsRow = (props) => {
    let { friendsList } = props;
    const dispatch = useDispatch();

    function onDeleteClick(item) {
        dispatch(deleteFriendRow(item.id))
    }

    function onFavouriteBtnClick(item) {
        dispatch(favouriteFriend(item.id))
    }

    return (
        <>
            {
                friendsList.length > 0 ?
                    friendsList.map((item, index) => {
                        return (
                            <div className="as-friends" key={index}>
                                <div className="as-friends__left">
                                    <FriendName friendName={item}></FriendName>
                                    <FriendDetails></FriendDetails>
                                </div>
                                <div className="as-friends__right">
                                    <FavouriteIcon item={item} onFavouriteBtnClick={onFavouriteBtnClick}></FavouriteIcon>
                                    <DeleteIcon item={item} onDeleteClick={onDeleteClick}></DeleteIcon>
                                </div>
                            </div>
                        )
                    })
                    :
                    <div className="as-empty">
                        <span>No data found</span>
                    </div>
            }
        </>
    )
}

export default FriendsRow;
