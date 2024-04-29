import checkIcon from '../components/assets/Check.svg';
import editIcon from '../components/assets/Edit.svg';
import deleteIcon from '../components/assets/Delete.svg';

function Task({ id, title, description, isChecked, time, date, tasks, setTasks}) {
    
    const handleDelete = () => {
        console.log("Delete icon clicked")
        // Filter out the task with the given id
        const updatedTasks = tasks.filter(task => task.id !== id);
        // Update the tasks state with the updatedTasks array
        setTasks(updatedTasks);
    };


    const handleCheck = () => {
        // Update the isChecked state of the task
        console.log("Check icon clicked")
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, isChecked: !task.isChecked }; // Toggle isChecked state
            }
            return task;
        });
        // Update the tasks state with the updatedTasks array
        setTasks(updatedTasks);
    };
    
    return (
        <div id="taskFilled" className="row py-4">
            <div className="border border-dark"></div>
            <div className="col-md-1 text-start">
                <span>{date} - {time}</span>
            </div>
            <div className="col-md-8 text-center">
                <span style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{title} - {description} {console.log("isChecked:", isChecked)}</span> {/* Render title or description here */}
            </div>
            <div className="col-md-1 text-end">
                <img
                    src={checkIcon}
                    alt="check-icon"
                    height="24px"
                    width="24px"
                    onClick={handleCheck}
                />
            </div>
            <div className="col-md-1">
                <img
                    src={editIcon}
                    alt="edit-icon"
                    height="24px"
                    width="24px"
                    // onClick={editTask}
                />
            </div>
            <div className="col-md-1">
                <img
                    src={deleteIcon}
                    alt="delete-icon"
                    height="24px"
                    width="24px"
                    onClick={handleDelete}
                />
            </div>
        </div>
    );
}

export default Task;