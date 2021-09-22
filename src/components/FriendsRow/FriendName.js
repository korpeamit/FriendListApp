import React from 'react'

const FriendName = (props) => {
    let { friendName } = props;
    return (
        <span className="as-frndName">{friendName.name}</span>
    )
}

export default FriendName;
