import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import Icon from "../../assets/Fonts/Iocns";
import { sortFavFriend } from '../../actions/index'
const Sorting = () => {
    const ref = useRef();
    const dispatch = useDispatch();
    const [dropDownList, setDropdowList] = useState(['Favourite friend']);
    const [isDropDwnVisible, setDropDwnVisible] = useState(false);

    function toggleDropDown() {
        setDropDwnVisible(!isDropDwnVisible);
    }

    function onClickOptions() {
        dispatch(sortFavFriend())
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the sorting dropdown is open and the clicked target is not within the menu,
            // then close the sorting dropdown
            if (isDropDwnVisible && ref.current && !ref.current.contains(e.target)) {
                setDropDwnVisible(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isDropDwnVisible]);

    return (
        <div className="as-sortWrp">
            <div className="as-sorting" ref={ref}>
                <div className="as-sorting__selector" onClick={toggleDropDown.bind(this)}>
                    <span>Sort by</span>
                    <Icon icon="arrow" size={12} color="#003777" className={`ab-downArrow ${!isDropDwnVisible ? "down" : "up"}`} />
                </div>
                {
                    isDropDwnVisible && <ul className="as-sorting__dropdown">
                        {
                            dropDownList.map((options, i) => {
                                return (
                                    <li key={i} className="as-sorting__selector--list" onClick={onClickOptions.bind(this)}>{options}</li>
                                )
                            })
                        }
                    </ul>
                }
            </div>
        </div>
    )
}

export default Sorting;
