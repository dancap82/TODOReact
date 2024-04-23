import checkIcon from '../assets/Check.svg'
import editIcon from '../assets/Edit.svg'
import deleteIcon from '../assets/Delete.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

function Todolist() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 bg-light">
                    <h3 className="text-center">Today's To-Do-List</h3>
                    <div className="row text-center fw-bold">
                        <span className="col-md-1">Time</span>
                        <span className="col-md-8">Task</span>
                        <span className="col-md-1">Status</span>
                    </div>
                    <div id="taskFilled" className="row py-4">
                        <div className="border border-dark"></div>
                        <div className="col-md-1 text-start">
                            <span>12:00</span>
                        </div>
                        <div className="col-md-8 text-center">
                            <span>Task</span>
                        </div>
                        <div className="col-md-1 text-end">
                            <img
                            src={checkIcon}
                            alt="check-icon"
                            height="24px"
                            width="24px"
                            // onClick={markAsDone}
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
                            // onClick={deleteRow}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todolist;