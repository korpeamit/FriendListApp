export const addFriend = (data) => {
    return {
        type: 'ADD_FRIEND',
        payload: {
            id: new Date().getTime().toString(),
            name: data,
            isFavouriteFriend: false
        }
    }
}

export const deleteFriendRow = (id) => {
    return {
        type: 'DELETE_FRIEND_ROW',
        id
    }
}

export const favouriteFriend = (id) => {
    return {
        type: 'FAVOURITE_FRIEND',
        id
    }
}

export const sortFavFriend = () => {
    return {
        type: 'SORT_FAVOURITE_FRIEND',
    }
}