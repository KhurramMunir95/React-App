import React, { useState } from 'react';
import Task from './Task';
import AddTask from './AddTask';
import { FaPlus, FaWindowClose } from 'react-icons/fa';

const Tasks = () => {

    const [ShowAddTask, setShowAddTask] = useState(false);

    const [tasks, setTask] = useState([
            {
                id: 1,
                name: 'Python',
                status: false
            },
            {
                id: 2,
                name: 'C++',
                status: false
            },
            {
                id: 3,
                name: 'Java',
                status: false
            }
    ])

    const addTask = (task) =>{
        const id  = Math.floor(Math.random() * 1000) + 1;
        const newTask = {id, ...task};
        console.log(newTask);
        setTask([...tasks, newTask]);
    }

    const removeTask = (id) =>{
        setTask(tasks.filter((task) => task.id!==id))
    }

    const onFinish = (id) =>{
        setTask(tasks.map((task)=> task.id === id ? {...task, status: !task.status} : task))
    }

    const showTask = () =>{
        setShowAddTask(!ShowAddTask)
    }
    
    return (
        <div style={{paddingTop: '20px'}}>
            <button className={ShowAddTask ? 'btn-red' : 'btn-blue'} onClick={showTask}>{ ShowAddTask ? <FaWindowClose style={{verticalAlign: 'middle'}}/> : <FaPlus style={{verticalAlign: 'middle'}}/> } { ShowAddTask ? 'Close' : 'Add New Task'}</button>
            { ShowAddTask && <AddTask onAdd={addTask} /> }
           { tasks.length > 0 ? <Task tasks={tasks}  removeTask={removeTask} onFinish={onFinish}  
           /> : <h3>No Tasks</h3>}
        </div>
    )
}

export default Tasks
