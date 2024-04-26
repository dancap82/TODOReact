import checkIcon from '../components/assets/Check.svg'
import editIcon from '../components/assets/Edit.svg'
import deleteIcon from '../components/assets/Delete.svg'

function Task ({title, description, time, date}) {
    return (
    <div id="taskFilled" className="row py-4">
        <div className="border border-dark"></div>
        <div className="col-md-1 text-start">
            <span>{12:00}</span>
        </div>
        <div className="col-md-8 text-center">
            <span>{Task}</span>
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

    )
}

export default Task;