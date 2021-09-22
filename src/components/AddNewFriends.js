import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFriend } from '../actions/index'

const AddNewFriends = () => {

    const [friendsData, setFriendsData] = useState('');
    const [emptyText, setEmptyText] = useState(false);
    const [enterOnlyChar, setEnterOnlyChar] = useState(false);
    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(addFriend(friendsData), setFriendsData(''))
    }

    function handleKeypress(e) {
        //it triggers by pressing the enter key
        if (e.key === "Enter") {
            // Check input isEmpty
            if (friendsData !== "") {
                // Check space button
                if (friendsData.match(/^ *$/) == null) {
                    //Accept alphabet characters only
                    if (friendsData.match(/^[a-zA-Z ]*$/)) {
                        handleSubmit();
                    } else {
                        setEnterOnlyChar(true)
                    }
                } else {
                    setEmptyText(true)
                }
            } else {
                setEmptyText(true)
            }
        }
    }
    return (
        <div className="as-form">
            <div className="as-frndInput">
                <input
                    type="text"
                    placeholder="Enter your friend's name"
                    value={friendsData}
                    onChange={(event) => setFriendsData((event.target.value), setEmptyText(false), setEnterOnlyChar(false))}
                    onKeyPress={handleKeypress}
                />
            </div>

            {emptyText && <span className="error">Please enter your friend name</span>}
            {enterOnlyChar && <span className="error">Please enter alphabet characters only.</span>}

        </div>
    )
}

export default AddNewFriends;
