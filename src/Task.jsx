import React from 'react';
import {FaTimes} from 'react-icons/fa';

const Task = ({tasks, removeTask, addTask, onFinish, onAdd}) => {
    return (
        <div>
            {tasks.map((task) => (
                <div className={`task ${task.status ? 'finished' : ''}`} id="task-list" key={task.id}>{task.name} <FaTimes style={{color: 'darkgreen', cursor: 'pointer',float: 'right'}} 
                onClick={() => removeTask(task.id)} />
                <input type="checkbox" onChange={() => onFinish(task.id)}></input>
                </div>
            ))}
        </div>
    )
}

export default Task
