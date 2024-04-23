import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
  return (
    // <div id="formTask" className="container my-4">
    //   <h2 className="text-center my-4">MY SCHEDULE</h2>
    <div className='container'>

                        <div className="row justify-content-around">
                            <div className="col-md-12 bg-light">
                            <h3 className="text-center">Create A New Task</h3>
                            <div className="row">
                                <h5 className="text-left">Title Task</h5>
                                <input id="taskNameInput" className="form-control" type="text" placeholder="Add A Task Name" />
                            </div>
                            <div className="row">
                                <h5>Description</h5>
                                <input id="descriptionInput" className="form-control" type="text" placeholder="Add A Description" />
                            </div>
                            <div className="row">
                                <div className="col my-4 d-flex flex-column justify-content-center align-items-center">
                                <h5>DATE</h5>
                                <input id="dateInput" className="px-5 form-control" type="date" />
                                </div>
                                <div className="col my-4 d-flex flex-column justify-content-center align-items-center">
                                <h5>TIME</h5>
                                <input id="timeInput" className="px-5 form-control" type="time" />
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col my-4">
                                <button id="submit" className="btn btn-primary px-5">CREATE</button>
                                </div>
                                <div className="col my-4">
                                <button id="cancelBtn" className="btn btn-primary px-5">CANCEL</button>
                                </div>
                            </div>
                            </div>
                        </div>

                        
    </div>
  );
}

export default Form;
