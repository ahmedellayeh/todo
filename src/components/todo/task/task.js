import React from "react";
import './style.css';

const Task = (props) => {
    return (
        <div className="task">
            <span className="task-name">{props.name}{"iaudfudugf"}</span>
            <input type="checkbox" checked={props.checked}/>
        </div>
    )
}

export default Task;