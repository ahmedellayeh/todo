import React from 'react';
import './style.css';
import Task from './task/task'

const Todo = () => {
    return (
        <div className='todo-list'>
            <div className='tasks'>
                <Task name="Task 1" checked={false}/>
                <Task name="Task 2" checked={false}/>
                <Task name="Task 3" checked={false}/>
                <Task name="Task 4" checked={false}/>
                <Task name="Task 5" checked={false}/>
                <Task name="Task 6" checked={false}/>
                <Task name="Task 7" checked={false}/>
            </div>
        </div>
    );
}

export default Todo;