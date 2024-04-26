import './App.css'
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/Todolist.jsx';
import { useState } from 'react';




function App() {

  const [toDo, setToDo] = useState([]); 

  return(
    <div>
        <Form ToDo={toDo} setToDo={setToDo} /> 
        <TodoList ToDo={toDo} setToDo={setToDo} />
              
    
    </div>
  );

}

export default App
