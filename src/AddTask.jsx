import React, { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [name, setName] = useState('');
    const [status, setStatus] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault();

        if(!name){
            console.log('please insert name');
        }
        else{
            onAdd({name, status});
            setName('');
        }
    }

    return (
        <div style={{paddingTop: '30px'}}>
            
            <form onSubmit={onSubmit}>
                <input className="form-control" type="text" placeholder="task" value={name} onChange={(e) => setName(e.target.value)} />
                {/* <input type="checkbox" checked={status} value={status} onChange={(e) => setStatus(e.currentTarget.checked)} /> */}
                <input type="submit" className="btn-green" value="Add" />
            </form>
        </div>
    )
}

export default AddTask
