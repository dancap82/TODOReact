
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoList from './components/Todolist.jsx';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';




function App() {
  return(
    <div>
      <Header />
      <div className="container">
        <h2 className="text-center my-4">MY SCHEDULE</h2>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Form />
            </div>
            <div className="col-md-6">
              <TodoList />
            </div>
          </div>
        </div>
    </div>
  );

}

export default App
