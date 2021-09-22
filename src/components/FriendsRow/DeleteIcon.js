import React from 'react'
import Icon from "../../assets/Fonts/Iocns";
const DeleteIcon = (props) => {
    let { item, onDeleteClick } = props;
    return (
        <div className="as-icons" onClick={onDeleteClick ? onDeleteClick.bind(this, item) : null}>
            <Icon icon="bin" size={20} color="#003777" />
        </div>
    )
}

export default DeleteIcon;
