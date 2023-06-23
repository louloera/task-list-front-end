import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = (props) => {

    const INITIAL_FORM_DATA = {
        title:'',
        description:'' 
    };

    const [taskFormData, setTaskFormData]= useState(INITIAL_FORM_DATA);

    const anInputChanged = (evt) => {
        
        const newTaskData = {
            ...taskFormData,
            [evt.target.name]: evt.target.value
        }
        setTaskFormData(newTaskData);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        props.createNewTask(taskFormData);
        setTaskFormData(INITIAL_FORM_DATA);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="taskTitle">Task Title:</label>
            <input
                id="taskTitle"
                name="title"
                type="text"
                value={taskFormData.title}
                onChange={anInputChanged}
            ></input>
            <label htmlFor="taskDescription">Task Description:</label>
            <input
                id="taskDescription"
                name="description"
                type="text"
                value={taskFormData.description}
                onChange={anInputChanged}
            ></input>
            <input type="submit" value="Add new task"></input>
        </form>
    );
};

NewTaskForm.propTypes = {
    createNewTask: PropTypes.func.isRequired

};

export default NewTaskForm;