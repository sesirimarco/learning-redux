import React from 'react';

const TodoButton = (props) => {
    return (
        <button 
            className="btn btn-outline-success" 
            onClick={() => {
                props.addNewTask();
            }}
        >
            add task
        </button>
    );
};

export default TodoButton;