import React from 'react';
import './style.css';
import Task from './task/task'

const Todo = () => {
    return (
        <div className='todo-list'>
            <div className='tasks'>
                <Task name="what to do" checked={false}/>
            </div>
        </div>
    );
}

export default Todo;