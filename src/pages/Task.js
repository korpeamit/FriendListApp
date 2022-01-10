import React, { useState } from 'react';

const Task = () => {
    const [emptyBoxes] = useState([{1: 'x'},{},{},{},{},{},{},{},{}])
    console.log(emptyBoxes.length)

    // function onClickBox() {
    //     // printMark
    // }

    // const printMark = () => {
    //     return (
    //         <sapn>X</sapn>
    //     )
    // }

    return (
        <div className="as-wrapper">
            <div className="as-ticTak">

                {
                    emptyBoxes.map((item, index)=> {
                        console.log(item)
                     return (<div  key={index} className="as-ticTak__row">
                        <span>{}</span>   
                    </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Task;