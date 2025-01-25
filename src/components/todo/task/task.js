import React from "react";
import './style.css';

const Task = (props) => {
    const [checked,check] = React.useState(props.checked);
    const doaction = () => {
        check(!checked);
    }
    return (
        <div className="task">
            <span className="task-name">{props.name}</span>
            <input className="task-check" type="checkbox" checked={checked} onClick={doaction}/>
        </div>
    )
}

export default Task;