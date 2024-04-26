import 'bootstrap/dist/css/bootstrap.min.css'
import Task from './Task';

function Todolist({ToDo, setToDo}) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 bg-light">
                    <h3 className="text-center">Today To-Do-List</h3>
                    <div className="row text-center fw-bold">
                        <span className="col-md-1">Time</span>
                        <span className="col-md-8">Task</span>
                        <span className="col-md-1">Status</span>
                    </div>
                    {ToDo.map((task) => <Task task={task}/> )}
                </div>
            </div>
        </div>
    )
}

export default Todolist;