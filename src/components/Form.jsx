import { Container } from "react-bootstrap"

function Form() {
    return (
        <div id="form">
            <form id="formTask" class="container my-4" />
            <h2 class="text-center my-4">MY SCHEDULE</h2>
            <div class="row justify-content-around">
                <div class="col-md-5 bg-light">
                    <h3 class="text-center">Create A New Task</h3>
                    <div class="row">
                        <h5 class="text-left">Title Task</h5>
                        <input id="taskNameInput" class="form-control" type="text" placeholder="Add A Task Name" />
                    </div>
                    <div class="row">
                        <h5>Description</h5>
                        <input id="descriptionInput" class="form-control" type="text" placeholder="Add A Description" />

                    </div>
                    <div class="row">
                        <div class="col my-4 d-flex flex-column justify-content-center align-items-center">
                            <h5 >DATE</h5>
                            <input id="dateInput" class="px-5 form-control" type="date" />

                        </div>
                        <div class="col my-4 d-flex flex-column justify-content-center align-items-center">
                            <h5 >TIME</h5>
                            <input id="timeInput" class="px-5 form-control" type="time" />
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col my-4">
                            <button id="submit" type="submit" value="submit" class="btn btn-primary px-5">CREATE</button>

                        </div>
                        <div class="col my-4">
                            <button id="reset" type="reset" value="Reset" class="btn btn-primary px-5">CANCEL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Form