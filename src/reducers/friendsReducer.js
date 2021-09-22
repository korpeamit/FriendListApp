const initialData = {
    list: []
}

const friendsReducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_FRIEND":
            const { id, name, isFavouriteFriend } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id,
                        name,
                        isFavouriteFriend
                    }
                ]
            }

        case "DELETE_FRIEND_ROW":
            const newList = state.list.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                list: newList
            }

        case "FAVOURITE_FRIEND":
            const favFrndIndex = state.list.findIndex(el => el.id == action.id);
            let favouriteFriendList = [...state.list];
            if (!favouriteFriendList[favFrndIndex].isFavouriteFriend) {
                favouriteFriendList[favFrndIndex].isFavouriteFriend = true;
            } else {
                favouriteFriendList[favFrndIndex].isFavouriteFriend = false;
            }

            return {
                ...state,
                list: favouriteFriendList
            }

        case "SORT_FAVOURITE_FRIEND":
            let currentList = [...state.list];
            let sortList = currentList.sort(function (x, y) {
                // true values first
                return (x.isFavouriteFriend === y.isFavouriteFriend) ? 0 : x.isFavouriteFriend ? -1 : 1;
            });
            
            return {
                ...state,
                list: sortList
            }

        default: return state;
    }
}

export default friendsReducers;