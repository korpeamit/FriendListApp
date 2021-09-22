import React from 'react'
import Icon from "../../assets/Fonts/Iocns";

const FavouriteIcon = (props) => {
    let { item, onFavouriteBtnClick } = props;
    
    return (
        <div className="as-icons" onClick={onFavouriteBtnClick ? onFavouriteBtnClick.bind(this, item) : null}>
            {
                item.isFavouriteFriend ?
                    <Icon icon="star-full" size={20} color="#003777" /> :
                    <Icon icon="star-empty" size={20} color="#003777" />
            }

        </div>
    )
}

export default FavouriteIcon;
