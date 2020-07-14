import React from 'react';

const TodoInput = (props) => {
    console.log('props ' , props)
    return (
        <input 
            id="newTask" 
            className="form-control" 
            type="text" 
            placeholder="Add a new task..."
            value={props.value}
            onChange={e => props.setValue(e.target.value)}
            onKeyDown={(e) => {
                if(e.key === 'Enter') {
                    props.addNewTask();
                }
            }}
        ></input>
    );
};

export default TodoInput;