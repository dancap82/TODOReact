import { useState } from "react";

function Form({ tasks, setTasks }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(''); 
    const [time, setTime] = useState(''); 

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    
    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Generate a unique ID
        const id = Date.now()
        
        // Create a new task object
        const newTask = {
            id: id,
            title: title,
            description: description,
            date: date,
            time: time
        };

        // Update tasks state with the new task
        setTasks(prevTasks => [...prevTasks, newTask]);

        // Clear the form fields after submission
        setTitle('');
        setDescription('');
        setDate('');
        setTime('');
    };

    const handleCancel = () => {
        // Clear the form fields when Cancel button is clicked
        setTitle('');
        setDescription('');
        setDate('');
        setTime('');
    };

    return (
        <div className="row justify-content-around">
            <form className="col-md-5 bg-light" onSubmit={handleSubmit}>
                <h3 className="text-center">Create A New Task</h3>
                <div className="row">
                    <h5 className="text-left">Title Task</h5>
                    <input id="taskNameInput" className="form-control" type="text" placeholder="Add A Task Name" value={title} name="title" onChange={handleTitleChange}/>
                </div>
                <div className="row">
                    <h5>Description</h5>
                    <input id="descriptionInput" className="form-control" type="text" placeholder="Add A Description" value={description} name="description" onChange={handleDescriptionChange}/>
                </div>
                <div className="row">
                    <div className="col my-4 d-flex flex-column justify-content-center align-items-center">
                        <h5>DATE</h5>
                        <input id="dateInput" className="px-5 form-control" type="date" value={date} name="date" onChange={handleDateChange}/>
                    </div>
                    <div className="col my-4 d-flex flex-column justify-content-center align-items-center">
                        <h5>TIME</h5>
                        <input id="timeInput" className="px-5 form-control" type="time" value={time} name="time" onChange={handleTimeChange}/>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col my-4">
                        <button id="submit" type="submit" value="submit" className="btn btn-primary px-5" >CREATE</button>
                    </div>
                    <div className="col my-4">
                        <button id="reset" type="reset" value="Reset" className="btn btn-primary px-5" onClick={handleCancel}>CANCEL</button>
                    </div>
                </div>
            </form>
        </div>         
    );
}

export default Form;